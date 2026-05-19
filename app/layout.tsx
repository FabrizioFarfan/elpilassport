import type { Metadata } from "next";
import { Archivo_Black, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Cursor } from "@/components/Cursor";
import { RevealInit } from "@/components/RevealInit";

const archivoblack = Archivo_Black({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
});

const inter = Inter({
  variable: "--font-body",
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
      className={`${archivoblack.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <div className="cursor-ring" />
        <div className="cursor-dot" />
        <Cursor />
        <RevealInit />
        {children}
      </body>
    </html>
  );
}
