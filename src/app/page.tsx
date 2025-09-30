import Hero from '@/components/Hero';
import TripsGrid from '@/components/TripsGrid';
import About from '@/components/About';
import CTA from '@/components/CTA';
import ContactForm from '@/components/ContactForm';

export default function HomePage() {
  return (
    <>
      <Hero />
      <TripsGrid />
      <About />
      <CTA />
      <ContactForm />
    </>
  );
}
