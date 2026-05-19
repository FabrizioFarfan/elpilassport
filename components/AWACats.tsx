"use client";
import { useRef, useEffect } from "react";

function useReveal(threshold = 0.18) {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    const el  = ref.current;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add("in"); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return ref;
}

export function AWACats() {
  const headRef = useReveal();
  const row0Ref = useReveal();
  const row1Ref = useReveal();
  const row2Ref = useReveal();

  return (
    <section className="awa-cats">
      <div className="awa-cats-head awa-reveal-up" ref={headRef as React.RefObject<HTMLDivElement>}>
        <span className="awa-cats-eyebrow">·· Categorie · trovala ··</span>
        <h2 className="awa-cats-title">
          Trova<br /><em>lo tuyo,</em><br />boutique.
        </h2>
      </div>

      {/* Row 1 — Hombre */}
      <div className="awa-cat-row row-1 awa-reveal-stagger" ref={row0Ref as React.RefObject<HTMLDivElement>}>
        <div className="awa-cat-num">01</div>
        <a href="/tienda?cat=hombre" className="awa-cat-img" data-cursor="image">
          <div className="ph ph-dark" style={{ width: "100%", height: "100%", display: "flex", alignItems: "flex-end", justifyContent: "flex-start" }}>
            <span className="ph-tag">MEN LIFESTYLE · running, retro, low-tops</span>
          </div>
          <div className="awa-cat-img-overlay">
            <div />
            <div>
              <div className="awa-cat-info-title" style={{ color: "#fff" }}>Hombre</div>
              <div style={{ fontFamily: "var(--awa-mono)", fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.7)" }}>62 modelos</div>
            </div>
          </div>
        </a>
        <div className="awa-cat-info">
          <div className="awa-cat-info-title">Hombre</div>
          <div>62 modelos</div>
          <div style={{ marginTop: 16 }}>RUN · RETRO · LOW · CHUNKY</div>
        </div>
      </div>

      {/* Row 2 — Mujer */}
      <div className="awa-cat-row row-2 awa-reveal-stagger" ref={row1Ref as React.RefObject<HTMLDivElement>}>
        <div className="awa-cat-info" style={{ textAlign: "left", alignItems: "flex-start", paddingLeft: 0 }}>
          <div className="awa-cat-info-title">Mujer</div>
          <div>38 modelos</div>
          <div style={{ marginTop: 16 }}>WOMEN · CHUNKY · LOW</div>
        </div>
        <a href="/tienda?cat=mujer" className="awa-cat-img" data-cursor="image">
          <div className="ph ph-dark" style={{ width: "100%", height: "100%" }}>
            <span className="ph-tag">WOMEN LIFESTYLE · low + chunky retro</span>
          </div>
        </a>
        <div className="awa-cat-num">02</div>
      </div>

      {/* Row 3 — Limitada */}
      <div className="awa-cat-row row-3 awa-reveal-stagger" ref={row2Ref as React.RefObject<HTMLDivElement>}>
        <a href="/tienda?limitada=true" className="awa-cat-img" data-cursor="image" style={{ aspectRatio: "16/10" }}>
          <div className="ph ph-dark" style={{ width: "100%", height: "100%" }}>
            <span className="ph-tag">EDITORIAL · Italian capsules &amp; collabs</span>
          </div>
          <div className="awa-cat-img-overlay">
            <span className="awa-cat-badge">ONLY 12 PAIRS</span>
            <div />
          </div>
        </a>
        <div>
          <div className="awa-cat-num" style={{ fontSize: "clamp(120px,16vw,220px)" }}>03</div>
          <div style={{ fontFamily: "var(--awa-display)", fontSize: 56, textTransform: "uppercase", letterSpacing: "-0.02em", lineHeight: 0.95, marginTop: 16 }}>
            <em style={{ fontFamily: "var(--awa-serif)", fontStyle: "italic", color: "var(--awa-red)" }}>Edizione</em><br />
            Limitata
          </div>
        </div>
        <div className="awa-cat-info">
          <div>12 modelos</div>
          <div style={{ marginTop: 16 }}>CAPSULES · COLLABS</div>
        </div>
      </div>
    </section>
  );
}
