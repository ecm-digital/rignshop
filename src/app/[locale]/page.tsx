import Header from '@/components/layout/Header';
import HeroSection from '@/components/sections/HeroSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import LifestyleSection from '@/components/sections/LifestyleSection';
import SpecsSection from '@/components/sections/SpecsSection';
import ProductVariants from '@/components/sections/ProductVariants';
import OrderSection from '@/components/sections/OrderSection';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <HeroSection />
        <FeaturesSection />
        <LifestyleSection />
        <SpecsSection />
        <ProductVariants />
        <OrderSection />
        <Footer />
      </main>
    </>
  );
}
