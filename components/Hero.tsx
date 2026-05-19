"use client";
import { useState, useEffect } from "react";
import { Shoe } from "./Shoe";

const SLIDES = [
  { eyebrow: "Drop · Mayo 26",   brand: "ASICS",       model: "Gel-1130 Cream Black",    price: "S/ 519", color: "cream" as const },
  { eyebrow: "Bestseller",       brand: "New Balance", model: "2002R Protection Pack",   price: "S/ 749", color: "grey"  as const },
  { eyebrow: "Edición limitada", brand: "Salomon",     model: "XT-6 Phantom Black",      price: "S/ 899", color: "black" as const },
];

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div>
      <div className="hero-stat-num">{n}</div>
      <div className="hero-stat-lbl">{label}</div>
    </div>
  );
}

export function Hero() {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setSlide((s) => (s + 1) % SLIDES.length), 5500);
    return () => clearInterval(t);
  }, []);

  const s = SLIDES[slide];

  return (
    <section style={{ position: "relative", paddingTop: 40 }}>
      <div className="hero-split">
        {/* ── Left: copy + CTAs + stats ── */}
        <div className="hero-left">
          <div>
            <div className="hero-eyebrow reveal">
              <span className="dot" style={{ background: "var(--red-it)" }} />
              {s.eyebrow} · Drop esta semana
            </div>

            <h1 className="hero-title reveal">
              Originales.<br />
              Importadas.<br />
              <em>De Europa a Ica.</em>
            </h1>

            <p className="hero-sub reveal">
              Cada par traído directamente desde Italia. Sin réplicas, sin
              intermediarios. Una boutique curada en el centro de Ica, con
              envíos a todo Perú.
            </p>

            <div className="hero-cta reveal">
              <a href="/tienda" className="btn btn-primary btn-lg">
                Comprar ahora
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M13 5l7 7-7 7"/>
                </svg>
              </a>
              <a href="/#tienda-fisica" className="btn btn-secondary btn-lg">
                Visita la tienda
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className="hero-foot reveal">
            <Stat n="100%" label="Originales garantizados" />
            <Stat n="08"   label="Marcas premium" />
            <Stat n="24h"  label="Envío Lima · 48h Perú" />
          </div>
        </div>

        {/* ── Right: shoe stage ── */}
        <div className="hero-right">
          {/* Ref + date */}
          <div className="hero-right-meta">
            <span>Ref. {s.brand.slice(0, 3).toUpperCase()}-{String(slide + 1).padStart(3, "0")}</span>
            <span>{new Date().toLocaleDateString("es-PE", { day: "2-digit", month: "short", year: "numeric" })}</span>
          </div>

          {/* Shoe */}
          <div className="hero-shoe-stage" style={{ zIndex: 1 }}>
            <Shoe palette={s.color} size={1.05} />
          </div>

          {/* Brand / model / price */}
          <div className="hero-right-tag">
            <span className="brand">{s.brand}</span>
            <span className="model">{s.model}</span>
            <span className="price">{s.price}</span>
          </div>

          {/* Slide dots */}
          <div className="hero-dots">
            {SLIDES.map((_, i) => (
              <span
                key={i}
                className={i === slide ? "active" : ""}
                onClick={() => setSlide(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
