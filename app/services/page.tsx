import { ServicesHero } from '@/components/services/services-hero';
import { VideoProduction } from '@/components/services/video-production';
import { EventPhotography } from '@/components/services/event-photography';
import { GraphicDesign } from '@/components/services/graphic-design';
import { ValueAddFooter } from '@/components/services/value-add-footer';

export default function ServicesPage() {
  return (
    <main className="min-h-screen flex flex-col items-center w-full overflow-hidden bg-[#0D0D12]">
      <ServicesHero />
      <VideoProduction />
      <EventPhotography />
      <GraphicDesign />
      <ValueAddFooter />
    </main>
  );
}
