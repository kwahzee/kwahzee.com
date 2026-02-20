import type { Metadata } from "next";
import { Play } from "next/font/google";
import "./globals.css";
import localFont from 'next/font/local';
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import Navigation from "@/components/Navigation";

const play = Play({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-play'
});

const gothicPixels = localFont({
  src: '../../public/fonts/GothicPixels.ttf',
  variable: '--font-gothic'
});

export const metadata: Metadata = {
  title: "kwahzee",
  description: "Personal portfolio and creative projects",
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${gothicPixels.variable} ${play.variable}`}>
      <body style={{ letterSpacing: '1px' }}>
        <Navigation />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}