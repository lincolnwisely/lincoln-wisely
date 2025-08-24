import type { Metadata } from 'next';
import { Geist, DM_Mono } from 'next/font/google';
import './globals.css';
import { GoogleAnalytics } from '@next/third-parties/google';
import { Analytics } from '@vercel/analytics/next';
const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const dmMono = DM_Mono({
  variable: '--font-dm-mono',
  subsets: ['latin'],
  weight: ['300', '400', '500'],
});

export const metadata: Metadata = {
  title: 'Lincoln Wisely | Software Engineer',
  description: "Lincoln Wisely's personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleAnalytics gaId="G-V8N45PYTJE" />
      <Analytics />
      <body className={`${geistSans.variable} ${dmMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
