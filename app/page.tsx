import { HeroSection } from '@/components/hero-section';
import { FeaturesSection } from '@/components/features-section';
import { PhilosophySection } from '@/components/philosophy-section';
import { ProtocolSection } from '@/components/protocol-section';
import { ServicesPortfolioSection } from '@/components/services-portfolio-section';
import { ContactSection } from '@/components/contact-section';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center w-full overflow-hidden">
      <HeroSection />
      <FeaturesSection />
      <PhilosophySection />
      <ProtocolSection />
      <ServicesPortfolioSection />
      <ContactSection />
    </main>
  );
}
