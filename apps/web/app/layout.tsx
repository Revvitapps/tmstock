import type { Metadata } from "next";
import { Fraunces, Instrument_Sans } from "next/font/google";
import "./globals.css";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display"
});

const sans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-sans"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tmstock.example"),
  title: {
    default: "TMStock",
    template: "%s | TMStock"
  },
  description:
    "Warm, editorial stock photography marketplace scaffold built with Next.js App Router.",
  openGraph: {
    title: "TMStock",
    description:
      "Warm, editorial stock photography marketplace scaffold built with Next.js App Router.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${sans.variable}`}>{children}</body>
    </html>
  );
}
