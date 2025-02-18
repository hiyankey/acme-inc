import { PropsWithChildren } from 'react';
import type { Metadata } from 'next';
import { Geist } from 'next/font/google';

import './globals.css';

const geist = Geist({ subsets: ['latin'], variable: '--font-geist'});

export const metadata: Metadata = {
  title: 'Acme',
};

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <html lang="en">
      <body className={`${geist.variable} antialiased`}>{children}</body>
    </html>
  );
}
