import { Navbar } from '@/components/layout/Navbar';
import { Hero } from '@/components/sections/Hero';
import { Credentials } from '@/components/sections/Credentials';
import { Services } from '@/components/sections/Services';
import { Gallery } from '@/components/sections/Gallery';
import { Process } from '@/components/sections/Process';
import { Pricing } from '@/components/sections/Pricing';
import { Testimonials } from '@/components/sections/Testimonials';
import { FAQ } from '@/components/sections/FAQ';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/layout/Footer';

export default function HomePage() {
  return (
    <main id="main-content">
      <Navbar />
      <Hero />
      <Credentials />
      <Services />
      <Gallery />
      <Process />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
