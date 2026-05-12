import Header from '@/components/layout/Header';
import Hero from '@/components/sections/Hero';
import OurWork from '@/components/sections/OurWork';
import BuiltForYou from '@/components/sections/BuiltForYou';
import Pricing from '@/components/sections/Pricing';
import RetainerMinimum from '@/components/sections/RetainerMinimum';
import HowItWorks from '@/components/sections/HowItWorks';
import About from '@/components/sections/About';
import CTABanner from '@/components/sections/CTABanner';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';

export default function Page() {
  return (
    <>
      <Header />
      <Hero />
      <main>
        <OurWork />
        <BuiltForYou />
        <Pricing />
        <RetainerMinimum />
        <HowItWorks />
        <About />
        <CTABanner />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
