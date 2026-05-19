"use client";
import { useEffect, useRef } from "react";

const WORDS = ["Originali", "Importati", "Autentici", "Originali", "Importati", "Autentici"];
const LOOP  = [...WORDS, ...WORDS];

export function AWAMarquee() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf: number;
    let pos = 0;
    let lastScroll = window.scrollY;
    let scrollBoost = 0;

    const onScroll = () => {
      scrollBoost = Math.min(8, Math.abs(window.scrollY - lastScroll) * 0.3);
      lastScroll = window.scrollY;
    };

    const loop = () => {
      scrollBoost *= 0.9;
      pos -= 0.5 + scrollBoost;
      if (trackRef.current) {
        const w = trackRef.current.scrollWidth / 2;
        if (-pos >= w) pos += w;
        trackRef.current.style.transform = `translateX(${pos}px)`;
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <section className="awa-marquee">
      <div className="awa-marquee-track" ref={trackRef}>
        {LOOP.map((w, i) => (
          <span key={i} className="awa-marquee-word">{w}</span>
        ))}
      </div>
    </section>
  );
}
