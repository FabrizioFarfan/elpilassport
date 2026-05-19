"use client";
import { useRef, useEffect } from "react";
import { Arrow } from "@/components/icons";

function useReveal(threshold = 0.15) {
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

export function AWAStore() {
  const ref = useReveal();
  return (
    <section className="awa-store awa-reveal-up" ref={ref as React.RefObject<HTMLElement>}>
      <div className="awa-store-map">
        <div className="awa-store-map-roads" />
      </div>
      <div className="awa-store-pin" />

      <div className="awa-store-hud">
        <div className="hud-eyebrow">LIVE · TIENDA FÍSICA · CENTRO DE ICA</div>
        <div className="hud-coords">
          14.0678° S<br />
          75.7286° W<br />
          ALT 406m · GMT-05:00
        </div>
        <h2 className="hud-title">
          Vieni a<br />provarle<br /><em>di persona.</em>
        </h2>
        <dl className="hud-info">
          <div>
            <dt>Dirección</dt>
            <dd>Calle Lima 456<br />Centro histórico, Ica</dd>
          </div>
          <div>
            <dt>Horarios</dt>
            <dd>Lun–Sáb · 10:00–20:00<br />Dom · 11:00–18:00</dd>
          </div>
          <div>
            <dt>Contacto</dt>
            <dd>+51 956 000 000<br />WhatsApp directo</dd>
          </div>
          <div>
            <dt>Desde Lima</dt>
            <dd>5h en bus<br />50 min en avión + 1h auto</dd>
          </div>
        </dl>
        <div className="hud-bottom">
          <div className="hud-photo">
            <div className="ph ph-dark" style={{ width: "100%", height: "100%" }}>
              <span className="ph-tag">BOUTIQUE INTERIOR · 3:4</span>
            </div>
          </div>
          <button className="awa-store-cta">
            <span>Cómo llegar</span> <Arrow />
          </button>
        </div>
      </div>
    </section>
  );
}
