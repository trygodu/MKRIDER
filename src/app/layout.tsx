import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const bebas = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: "400",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "MK RIDER — Guided Motorcycle Tours & Lifestyle",
    template: "%s — MK RIDER",
  },
  description:
    "MK RIDER is a motorcycle lifestyle brand: guided tours to the world's greatest riding roads, rider-tested merch, and a community built on two wheels.",
  keywords: [
    "motorcycle tours",
    "guided motorcycle rides",
    "motorcycle lifestyle brand",
    "MK Rider",
    "motorcycle travel",
    "motorcycle merch",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bebas.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-asphalt-950 text-paper-50">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
