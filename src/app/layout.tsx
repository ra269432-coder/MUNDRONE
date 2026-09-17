import type { Metadata } from "next";
import { Geist, Geist_Mono, Hind_Siliguri } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { LanguageProvider } from "@/context/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const hindSiliguri = Hind_Siliguri({
  variable: "--font-hind-siliguri",
  subsets: ["bengali"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "MUNDRONE | Technology for Faster Missing-Child Recovery | Bangladesh",
  description:
    "MUNDRONE is a Bangladesh-based research and concept-stage initiative exploring drone-assisted aerial search, mapping and intelligent detection to help authorized rescue teams find missing children faster. Research & Concept Stage 2026.",
  keywords: [
    "MUNDRONE",
    "Bangladesh",
    "missing child",
    "drone search and rescue",
    "নিখোঁজ শিশু",
    "child protection Bangladesh",
    "drone technology Bangladesh",
    "aerial search",
    "research concept",
  ],
  openGraph: {
    title: "MUNDRONE | Technology for Faster Missing-Child Recovery",
    description:
      "A Bangladesh-based research initiative exploring drone-assisted search technology for missing children. Research & Concept Stage.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${hindSiliguri.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-slate-950 text-foreground">
        <LanguageProvider>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
