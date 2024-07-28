import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Header } from '@/components/Header';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'iTunes search',
  description: 'iTunes search by NextJS',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Header />
        <main className='flex min-h-[calc(100vh-56px)] flex-col items-center justify-start gap-4 p-6 sm:gap-12 sm:p-24'>
          {children}
        </main>
      </body>
    </html>
  );
}
