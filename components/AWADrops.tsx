"use client";
import { useRef, useEffect, useState } from "react";
import { Shoe } from "@/components/Shoe";
import { PRODUCTS, type Product } from "@/lib/data";

function useReveal(threshold = 0.1) {
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

export function AWADrops() {
  const headRef = useReveal();
  const [toast, setToast] = useState("");

  const items = PRODUCTS.filter((p) => p.tags.includes("new")).slice(0, 5);

  const showToast = (p: Product) => {
    setToast(`${p.brand} ${p.model} agregado`);
    setTimeout(() => setToast(""), 3000);
  };

  const layout = [
    { p: items[0], cls: "s-5 s-tall" },
    { p: items[1], cls: "s-4" },
    { p: items[2], cls: "s-3" },
    { p: null,     cls: "s-4 editorial" },
    { p: items[3], cls: "s-3" },
    { p: items[4] ?? items[0], cls: "s-5" },
    { p: items[1], cls: "s-7" },
  ];

  return (
    <section className="awa-drops">
      <div className="awa-drops-head awa-reveal-up" ref={headRef as React.RefObject<HTMLDivElement>}>
        <h2>Nuovi arrivi<br /><em>· this week.</em></h2>
        <div style={{ fontFamily: "var(--awa-mono)", fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--awa-grey)", textAlign: "right" }}>
          Updated 19.05.26 · 14:32<br />
          {String(items.length).padStart(2, "0")} pezzi · stock vivo
        </div>
      </div>

      <div className="awa-bento">
        {layout.map((cell, i) => {
          if (!cell.p) {
            return (
              <div key={i} className={`awa-bento-cell ${cell.cls}`}>
                <h3 className="editorial-h">
                  Importato<br />da <em>Milano</em><br />questa<br />settimana.
                </h3>
              </div>
            );
          }
          const p = cell.p;
          return (
            <div
              key={i}
              className={`awa-bento-cell ${cell.cls}`}
              onClick={() => { window.location.href = `/producto/${p.id}`; }}
              data-cursor="image"
            >
              <div className="shoe-stage"><Shoe palette={p.color} /></div>
              <div className="top">
                <span className="awa-bento-time">ADDED {12 + i}.05</span>
                <span className="awa-bento-new">NEW</span>
              </div>
              <div className="bot">
                <div className="awa-bento-brand">{p.brand}</div>
                <div className="awa-bento-name">{p.model}</div>
                <div className="awa-bento-price">S/ {p.price}</div>
              </div>
              <button
                className="awa-bento-hover-cta"
                onClick={(e) => { e.stopPropagation(); showToast(p); }}
              >
                Agregar al carrito
              </button>
            </div>
          );
        })}
      </div>

      {toast && (
        <div style={{
          position: "fixed", bottom: 32, left: "50%", transform: "translateX(-50%)",
          background: "var(--awa-ink)", color: "var(--awa-bg)",
          fontFamily: "var(--awa-mono)", fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase",
          padding: "14px 24px", zIndex: 8000, pointerEvents: "none",
        }}>{toast}</div>
      )}
    </section>
  );
}
