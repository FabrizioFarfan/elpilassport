import type { Metadata } from "next";
import { Anton, Bodoni_Moda, Inter_Tight, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import "./awwwards.css";
import "./responsive.css";
import { AWACursor } from "@/components/AWACursor";

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: "400",
});

const bodoniModa = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Pilas Sport — Originales. Importadas. De Europa a Ica.",
  description:
    "Zapatillas originales importadas directamente de Europa. Curaduría desde Ica para todo Perú. Sin réplicas, sin intermediarios.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es"
      className={`${anton.variable} ${bodoniModa.variable} ${interTight.variable} ${jetbrainsMono.variable}`}
    >
      <body data-edition="awwwards">
        <AWACursor />
        {children}
      </body>
    </html>
  );
}
