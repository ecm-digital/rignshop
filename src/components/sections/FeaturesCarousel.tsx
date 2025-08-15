"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useLanguage } from "@/hooks/useLanguage";

type Feature = {
  icon: string;
  title: string;
  description: string;
  gradient: string;
};

export default function FeaturesCarousel() {
  const { t } = useLanguage();
  const features: Feature[] = useMemo(
    () => [
      {
        icon: "💤",
        title: t("sleepMonitoring"),
        description: t("sleepDescription"),
        gradient: "from-blue-500 to-blue-600",
      },
      {
        icon: "🏃",
        title: t("activityMonitoring"),
        description: t("activityDescription"),
        gradient: "from-green-500 to-green-600",
      },
      {
        icon: "🌡️",
        title: t("temperatureMonitoring"),
        description: t("temperatureDescription"),
        gradient: "from-orange-500 to-orange-600",
      },
      {
        icon: "❤️",
        title: t("heartRate"),
        description: t("heartRateDescription"),
        gradient: "from-red-500 to-red-600",
      },
    ],
    [t]
  );

  const trackRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(0);
  const activeRef = useRef(0);
  const hoveringRef = useRef(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    hoveringRef.current = hovering;
  }, [hovering]);

  // Detect active slide based on scroll position
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
        activeRef.current = closestIdx;
        setActive(closestIdx);
      });
    };

    track.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => track.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const child = track.children[index] as HTMLElement | undefined;
    if (!child) return;
    track.scrollTo({ left: child.offsetLeft - 16, behavior: "smooth" });
  };

  const next = () => scrollTo((activeRef.current + 1) % features.length);
  const prev = () => scrollTo((activeRef.current - 1 + features.length) % features.length);

  // Autoplay with pause on hover/visibility and prefers-reduced-motion
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) return; // respect reduced motion

    let timer: number | undefined;
    const advance = () => {
      // local function to avoid depending on outer 'next'
      const index = (activeRef.current + 1) % features.length;
      scrollTo(index);
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
  }, [features.length]);

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
    <section id="features" className="py-24 bg-white relative overflow-hidden">
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
          className="relative"
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
        >
          {/* Track */}
          <div
            ref={trackRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-hide px-4"
          >
            {features.map((f, idx) => (
              <div
                key={idx}
                className="snap-center shrink-0 w-[85%] sm:w-[70%] md:w-[55%] lg:w-[40%] xl:w-[32%]"
              >
                <div
                  className="relative bg-white border border-primary-100 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full will-change-transform"
                  onMouseMove={(e) => {
                    const card = e.currentTarget as HTMLDivElement;
                    const rect = card.getBoundingClientRect();
                    const x = (e.clientX - rect.left) / rect.width - 0.5; // -0.5..0.5
                    const y = (e.clientY - rect.top) / rect.height - 0.5;
                    const rotateX = (-y * 6).toFixed(2);
                    const rotateY = (x * 6).toFixed(2);
                    card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
                  }}
                  onMouseLeave={(e) => {
                    const card = e.currentTarget as HTMLDivElement;
                    card.style.transform = "perspective(800px) rotateX(0deg) rotateY(0deg)";
                  }}
                >
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${f.gradient} flex items-center justify-center mb-6`}>
                    <span className="text-2xl">{f.icon}</span>
                  </div>
                  {/* Title */}
                  <h4 className="text-xl font-bold text-primary-900 mb-3">{f.title}</h4>
                  {/* Description */}
                  <p className="text-primary-600 leading-relaxed">{f.description}</p>

                  {/* Accent line */}
                  <div className="mt-6 h-1 bg-primary-100 rounded-full overflow-hidden">
                    <div className={`h-full bg-gradient-to-r ${f.gradient} w-1/2`} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Arrows */}
          <button
            aria-label="Prev"
            onClick={prev}
            className="hidden sm:flex items-center justify-center absolute -left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white shadow-md border border-primary-100"
          >
            <span className="text-primary-900">‹</span>
          </button>
          <button
            aria-label="Next"
            onClick={next}
            className="hidden sm:flex items-center justify-center absolute -right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white shadow-md border border-primary-100"
          >
            <span className="text-primary-900">›</span>
          </button>

          {/* Dots */}
          <div className="mt-8 flex items-center justify-center gap-2">
            {features.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => scrollTo(i)}
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
