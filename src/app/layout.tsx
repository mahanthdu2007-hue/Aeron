import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from '@/components/providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Aeron | Premium Streetwear',
  description: 'A modern streetwear clothing brand for the bold.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className={`${inter.className} bg-[#FAFAFA] text-[#111111] antialiased`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
