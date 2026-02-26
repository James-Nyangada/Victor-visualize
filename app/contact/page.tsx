import { ContactHero } from '@/components/contact/contact-hero';
import { IntakeForm } from '@/components/contact/intake-form';
import { DirectPulse } from '@/components/contact/direct-pulse';
import { Footer } from '@/components/footer';

export default function ContactPage() {
  return (
    <main className="min-h-screen flex flex-col items-center w-full overflow-hidden bg-[#0D0D12]">
      <ContactHero />
      <div className="w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 pb-32 relative z-10">
        <div className="lg:col-span-7">
          <IntakeForm />
        </div>
        <div className="lg:col-span-5">
          <DirectPulse />
        </div>
      </div>
      <Footer />
    </main>
  );
}
