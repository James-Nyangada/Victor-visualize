import { MissionHero } from '@/components/about/mission-hero';
import { FounderSection } from '@/components/about/founder-section';
import { CoreValues } from '@/components/about/core-values';
import { PartnershipProtocol } from '@/components/about/partnership-protocol';
import { Manifesto } from '@/components/about/manifesto';

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col items-center w-full overflow-hidden bg-[#0D0D12]">
      <MissionHero />
      <FounderSection />
      <CoreValues />
      <PartnershipProtocol />
      <Manifesto />
    </main>
  );
}
