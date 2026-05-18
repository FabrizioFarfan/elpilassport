import type { Metadata } from "next";
import { Syne, Manrope, JetBrains_Mono, Caveat } from "next/font/google";
import "./globals.css";
import { Cursor } from "@/components/Cursor";
import { RevealInit } from "@/components/RevealInit";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["500", "700", "800"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["600"],
});

export const metadata: Metadata = {
  title: "Pilas Sport — No te detengas",
  description:
    "Tienda colombiana de sneakers. Drops semanales, curaduría real, talles de verdad.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es"
      className={`${syne.variable} ${manrope.variable} ${jetbrainsMono.variable} ${caveat.variable}`}
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
