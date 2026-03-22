import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
