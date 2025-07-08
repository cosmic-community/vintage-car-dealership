import Hero from '@/components/Hero';
import FeaturedCars from '@/components/FeaturedCars';
import TeamSection from '@/components/TeamSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';

export default function HomePage() {
  return (
    <div className="bg-vintage-black">
      <Hero />
      <FeaturedCars />
      <AboutSection />
      <TeamSection />
      <ContactSection />
    </div>
  );
}