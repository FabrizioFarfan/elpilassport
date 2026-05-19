"use client";
import { useEffect, useRef } from "react";
import { Shoe } from "@/components/Shoe";
import { Arrow } from "@/components/icons";
import type { ShoePalette } from "@/lib/data";

const BRANDS = [
  { name: "New Balance", count: 24, since: "1906", from: "Boston, USA",      note: "MADE IN UK / USA",           color: "grey"  as ShoePalette },
  { name: "ASICS",       count: 18, since: "1949", from: "Kobe, Japan",       note: "ANIMA SANA IN CORPORE SANO", color: "cream" as ShoePalette },
  { name: "Salomon",     count: 12, since: "1947", from: "Annecy, France",    note: "TRAIL — STREET — STUDIO",    color: "black" as ShoePalette },
  { name: "Diadora",     count: 11, since: "1948", from: "Caerano · Italia",  note: "MADE IN ITALY",              color: "navy"  as ShoePalette },
  { name: "Veja",        count:  7, since: "2005", from: "Paris, France",     note: "TRANSPARENT SUPPLY CHAIN",   color: "white" as ShoePalette },
];

export function AWABrands() {
  const pinRef      = useRef<HTMLElement>(null);
  const trackRef    = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (!pinRef.current || !trackRef.current) return;
      const r           = pinRef.current.getBoundingClientRect();
      const totalScroll = pinRef.current.offsetHeight - window.innerHeight;
      const progress    = Math.min(1, Math.max(0, -r.top / totalScroll));
      const dist        = trackRef.current.scrollWidth - window.innerWidth;
      trackRef.current.style.transform = `translateX(${-progress * dist}px)`;
      if (progressRef.current)
        progressRef.current.style.transform = `scaleX(${progress})`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="awa-brands-pin" ref={pinRef}>
      <div className="awa-brands-sticky">
        <div className="awa-brands-track" ref={trackRef}>
          {BRANDS.map((b, i) => (
            <div className="awa-brands-panel" key={b.name}>
              <div className="awa-brand-num">
                — {String(i + 1).padStart(2, "0")} / {String(BRANDS.length).padStart(2, "0")} · Brand index
              </div>
              <div>
                <h3 className="awa-brand-logo">{b.name}</h3>
                <div className="awa-brand-info">
                  <span>Since {b.since} · {b.from}</span>
                  <span>{b.note}</span>
                  <strong>{b.count} modelos en stock — todos originales</strong>
                </div>
                <a href="/tienda" className="awa-brand-cta">
                  Ver {b.name} <Arrow />
                </a>
              </div>
              <div className="awa-brand-shoe" data-cursor="image">
                <Shoe palette={b.color} size={1.1} />
              </div>
              <div className="awa-brand-counter">Panel · scroll horizontal</div>
            </div>
          ))}
        </div>
      </div>
      <div className="awa-brands-progress">
        <div className="awa-brands-progress-fill" ref={progressRef} />
      </div>
    </section>
  );
}
