import type {Metadata} from 'next';
import { Inter, Playfair_Display, JetBrains_Mono } from 'next/font/google';
import './globals.css'; // Global styles
import { Navigation } from '@/components/navigation';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  style: ['normal', 'italic'],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: 'Victor Visualze | Purpose-Driven Visual Storytelling',
  description: 'Purpose-driven video production, professional photography, and graphic design for brands that value impact and storytelling.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${jetbrainsMono.variable} dark`}>
      <body className="bg-[#0D0D12] text-[#A1A1AA] font-sans antialiased selection:bg-[#F05A28] selection:text-white" suppressHydrationWarning>
        <div className="fixed inset-0 z-50 pointer-events-none opacity-[0.05] mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
