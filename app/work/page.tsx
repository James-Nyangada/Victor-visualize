import { PortfolioHero } from '@/components/work/portfolio-hero';
import { PortfolioGrid } from '@/components/work/portfolio-grid';
import { StorytellingFooter } from '@/components/work/storytelling-footer';

export default function WorkPage() {
  return (
    <main className="min-h-screen flex flex-col items-center w-full overflow-hidden bg-[#0D0D12]">
      <PortfolioHero />
      <PortfolioGrid />
      <StorytellingFooter />
    </main>
  );
}
