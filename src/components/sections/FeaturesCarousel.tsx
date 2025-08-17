"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useLanguage } from "@/hooks/useLanguage";

type Feature = {
  icon: string;
  title: string;
  description: string;
  gradient: string;
  image: string;
};

export default function FeaturesCarousel() {
  const { t } = useLanguage();
  const baseFeatures: Feature[] = useMemo(
    () => [
      { icon: "💤", title: t("sleepMonitoring"), description: t("sleepDescription"), gradient: "from-blue-500 to-blue-600", image: "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1600&q=80" },
      { icon: "🏃", title: t("activityMonitoring"), description: t("activityDescription"), gradient: "from-green-500 to-green-600", image: "https://images.unsplash.com/photo-1546491764-67a5b673d8b4?auto=format&fit=crop&w=1600&q=80" },
      { icon: "🌡️", title: t("temperatureMonitoring"), description: t("temperatureDescription"), gradient: "from-orange-500 to-orange-600", image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1600&q=80" },
      { icon: "❤️", title: t("heartRate"), description: t("heartRateDescription"), gradient: "from-red-500 to-red-600", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80" },
    ],
    [t]
  );

  // Tripled list to emulate infinite loop
  const items = useMemo(() => [...baseFeatures, ...baseFeatures, ...baseFeatures], [baseFeatures]);
  const n = baseFeatures.length;

  const trackRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(0); // modulo index 0..n-1
  const [activeFull, setActiveFull] = useState(n); // index in tripled array
  const activeFullRef = useRef(n);
  const [hovering, setHovering] = useState(false);
  const hoveringRef = useRef(false);
  const [expanded, setExpanded] = useState<number | null>(null); // full index of expanded card

  useEffect(() => {
    hoveringRef.current = hovering;
  }, [hovering]);

  // Initial center position at middle copy
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const centerIndex = n; // start of middle copy
    const child = track.children[centerIndex] as HTMLElement | undefined;
    if (child) {
      track.scrollTo({ left: child.offsetLeft - 16, behavior: "auto" });
      setActiveFull(centerIndex);
      activeFullRef.current = centerIndex;
      setActive(centerIndex % n);
    }
  }, [n]);

  // Helper to scroll to an index inside the tripled list
  const scrollToIndex = (index: number, smooth = true) => {
    const track = trackRef.current;
    if (!track) return;
    const child = track.children[index] as HTMLElement | undefined;
    if (!child) return;
    track.scrollTo({ left: child.offsetLeft - 16, behavior: smooth ? "smooth" : "auto" });
  };

  // Detect closest slide and keep loop illusion
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const children = Array.from(track.children) as HTMLElement[];
        if (children.length === 0) return;
        const midpoint = track.scrollLeft + track.clientWidth / 2;
        let closestIdx = 0;
        let closestDist = Number.POSITIVE_INFINITY;
        children.forEach((el, idx) => {
          const center = el.offsetLeft + el.offsetWidth / 2;
          const dist = Math.abs(center - midpoint);
          if (dist < closestDist) {
            closestDist = dist;
            closestIdx = idx;
          }
        });
        setActiveFull(closestIdx);
        activeFullRef.current = closestIdx;
        setActive(closestIdx % n);

        // Recenter to middle copy to simulate infinite list
        if (closestIdx < n * 0.5) {
          const target = closestIdx + n;
          scrollToIndex(target, false);
          setActiveFull(target);
          activeFullRef.current = target;
        } else if (closestIdx > n * 2.5) {
          const target = closestIdx - n;
          scrollToIndex(target, false);
          setActiveFull(target);
          activeFullRef.current = target;
        }
      });
    };

    track.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => track.removeEventListener("scroll", onScroll);
  }, [n]);

  const next = () => scrollToIndex(activeFullRef.current + 1, true);
  const prev = () => scrollToIndex(activeFullRef.current - 1, true);

  // Autoplay with pause on hover/visibility and prefers-reduced-motion
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) return; // respect reduced motion

    let timer: number | undefined;
    const advance = () => {
      const idx = activeFullRef.current + 1;
      scrollToIndex(idx, true);
    };
    const start = () => {
      stop();
      timer = window.setInterval(() => {
        if (document.hidden || hoveringRef.current) return;
        advance();
      }, 3500);
    };
    const stop = () => {
      if (timer) {
        window.clearInterval(timer);
        timer = undefined;
      }
    };

    start();
    const onVisibility = () => {
      if (document.hidden) stop();
      else start();
    };
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      stop();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [n]);

  // Pointer drag to scroll
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let isDown = false;
    let startX = 0;
    let startScroll = 0;

    const onDown = (e: PointerEvent) => {
      isDown = true;
      startX = e.clientX;
      startScroll = track.scrollLeft;
      track.setPointerCapture(e.pointerId);
      track.style.cursor = "grabbing";
    };
    const onMove = (e: PointerEvent) => {
      if (!isDown) return;
      const delta = e.clientX - startX;
      track.scrollLeft = startScroll - delta;
    };
    const onUp = (e: PointerEvent) => {
      isDown = false;
      try { track.releasePointerCapture(e.pointerId); } catch {}
      track.style.cursor = "grab";
    };

    track.style.cursor = "grab";
    track.addEventListener("pointerdown", onDown);
    track.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);

    return () => {
      track.removeEventListener("pointerdown", onDown);
      track.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
      track.style.cursor = "";
    };
  }, []);

  return (
    <section id="features" className="py-24 bg-white relative overflow-x-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/30 to-white" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-10">
          <h3 className="text-4xl md:text-5xl font-bold text-primary-900 mb-4">
            {t("featuresTitle")}
          </h3>
          <p className="text-primary-600 max-w-2xl mx-auto">
            Odkryj zaawansowane technologie monitorowania zdrowia w jednym eleganckim urządzeniu
          </p>
        </div>

        {/* Carousel */}
        <div
          className="relative pb-4"
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
        >
          {/* Edge fades (like Oura) */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-16 sm:w-24 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-16 sm:w-24 bg-gradient-to-l from-white to-transparent z-10" />

          {/* Track */}
          <div
            ref={trackRef}
            className="flex gap-8 overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-hide px-4 py-2"
          >
            {items.map((f, idx) => {
              const visualIndex = idx % n;
              const isActive = (idx === activeFull);
              const isExpanded = expanded === idx;
              const scale = isExpanded ? 1.06 : (isActive ? 1.02 : 0.96);
              return (
                <div
                  key={idx}
                  className="snap-center shrink-0 w-[72%] sm:w-[56%] md:w-[44%] lg:w-[36%] xl:w-[30%] transition-all duration-500"
                  style={{ transform: `scale(${scale})`, opacity: isActive || isExpanded ? 1 : 0.9 }}
                >
                  <div className={`relative rounded-3xl overflow-hidden shadow-lg h-full ${isExpanded ? 'min-h-[500px] md:min-h-[560px]' : 'min-h-[420px] md:min-h-[480px]'}`}>
                    {/* Background image */}
                    <div
                      className="absolute inset-0 bg-center bg-cover"
                      style={{ backgroundImage: `url(${f.image})` }}
                    />
                    {/* Top overlays */}
                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <div className="backdrop-blur-sm bg-black/35 text-white text-xs md:text-sm px-3 py-2 rounded-full inline-flex items-center gap-2">
                        <span className="text-base">{f.icon}</span>
                        <span className="font-medium">{baseFeatures[visualIndex].title}</span>
                      </div>
                    </div>
                    <button
                      aria-label="More"
                      className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/90 hover:bg-white text-primary-900 shadow flex items-center justify-center"
                      onClick={() => {
                        const nextIdx = expanded === idx ? null : idx;
                        setExpanded(nextIdx);
                        if (nextIdx !== null) {
                          scrollToIndex(nextIdx, true);
                        }
                      }}
                    >
                      {isExpanded ? '−' : '+'}
                    </button>
                    {/* Bottom gradient and headline */}
                    <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/70 via-black/30 to-transparent -z-10" />
                      {isExpanded ? (
                        <p className="text-white text-lg md:text-xl leading-relaxed drop-shadow-md">
                          {baseFeatures[visualIndex].description}
                        </p>
                      ) : (
                        <h4 className="text-white text-2xl md:text-3xl font-semibold leading-tight drop-shadow-md">
                          {baseFeatures[visualIndex].title}
                        </h4>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Arrows */}
          <button
            aria-label="Prev"
            onClick={prev}
            className="hidden sm:flex items-center justify-center absolute -left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white shadow-md border border-primary-100 z-20"
          >
            <span className="text-primary-900">‹</span>
          </button>
          <button
            aria-label="Next"
            onClick={next}
            className="hidden sm:flex items-center justify-center absolute -right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white shadow-md border border-primary-100 z-20"
          >
            <span className="text-primary-900">›</span>
          </button>

          {/* Dots */}
          <div className="mt-10 flex items-center justify-center gap-2">
            {baseFeatures.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => scrollToIndex(n + i, true)}
                className={`h-2 rounded-full transition-all ${
                  active === i ? "w-6 bg-primary-900" : "w-2 bg-primary-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
