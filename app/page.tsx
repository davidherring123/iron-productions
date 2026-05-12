import Header from '@/components/layout/Header';
import Hero from '@/components/sections/Hero';
import Stats from '@/components/sections/Stats';
import OurWork from '@/components/sections/OurWork';
import BuiltForYou from '@/components/sections/BuiltForYou';
import Pricing from '@/components/sections/Pricing';
import HowItWorks from '@/components/sections/HowItWorks';
import About from '@/components/sections/About';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <OurWork />
        <BuiltForYou />
        <Pricing />
        <HowItWorks />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
