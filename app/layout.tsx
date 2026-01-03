import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FloatingCTA from "@/components/floating-cta";
import MobileCTABar from "@/components/mobile-cta-bar";

export const metadata: Metadata = {
  title: {
    default: "PROSELEC | Obras civiles, arquitectura e instalaciones electromecánicas",
    template: `%s | PROSELEC`,
  },
  description:
    "Soluciones de ingeniería para el diseño, planificación, construcción, equipamiento y mantenimiento de proyectos.",
  openGraph: {
    title: "PROSELEC | Obras civiles, arquitectura e instalaciones electromecánicas",
    description:
      "Soluciones de ingeniería para el diseño, planificación, construcción, equipamiento y mantenimiento de proyectos.",
    images: [{ url: "/images/og.jpg" }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <Navbar />
        <main className="pb-20 sm:pb-0">{children}</main>

        {/* ✅ SOLO UNO */}
        <Footer />

        <FloatingCTA />
        <MobileCTABar />
      </body>
    </html>
  );
}
