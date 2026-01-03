import type { Metadata } from "next";
import { branding, site } from "@/content/site";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FloatingCTA from "@/components/floating-cta";
import MobileCTABar from "@/components/mobile-cta-bar";
import { Plus_Jakarta_Sans } from "next/font/google";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap"
});

export const metadata: Metadata = {
  title: {
    default: `${site.shortName} | ${site.tagline}`,
    template: `%s | ${site.shortName}`
  },
  description: site.description,
  openGraph: {
    title: `${site.shortName} | ${site.tagline}`,
    description: site.description,
    images: [{ url: branding.ogImagePath }]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={plusJakarta.className}>
      <body>
        <Navbar />
        <main className="pb-20 sm:pb-0">{children}</main>
        <Footer />
        <FloatingCTA />
        <MobileCTABar />
      </body>
    </html>
  );
}
