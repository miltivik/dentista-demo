import type {Metadata} from 'next';
import { Inter, Outfit } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-heading',
});

export const metadata: Metadata = {
  title: 'Smile Leslieville - Dentistry done differently',
  description: 'Modern dentistry services including Invisalign, whitening, implants, and pediatric care.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body className="font-sans bg-[#f4f4f0] text-[#133c3e] antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
