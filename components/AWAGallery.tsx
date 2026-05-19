"use client";
import { useRef, useEffect, useState } from "react";
import { Shoe } from "@/components/Shoe";
import { Arrow } from "@/components/icons";
import { PRODUCTS, type Product } from "@/lib/data";

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

function GalleryRoom({ p, idx, total, onAdd }: { p: Product; idx: number; total: number; onAdd: (p: Product) => void }) {
  const ref = useReveal(0.15);
  const parts = p.model.split(" ");
  const line1 = parts.slice(0, 2).join(" ");
  const line2 = parts.slice(2).join(" ");
  return (
    <div className="awa-gallery-room awa-reveal-stagger" ref={ref as React.RefObject<HTMLDivElement>}>
      <a href={`/producto/${p.id}`} className="awa-gallery-media" data-cursor="image">
        <Shoe palette={p.color} />
      </a>
      <div className="awa-gallery-body">
        <div className="num">{String(idx + 1).padStart(2, "0")} / {String(total).padStart(2, "0")} · Sala</div>
        <div className="brand">{p.brand}</div>
        <h3>{line1}{line2 && <><br /><em>{line2}</em></>}</h3>
        <p className="desc">
          "Edición boutique reinterpretada con detalles en negro carbón — silueta de archivo de finales de los 90."
        </p>
        <div className="price-row">
          <span className="price">S/ {p.price}</span>
          <span className="price-mono">— 3 cuotas s/intereses · S/ {Math.round(p.price / 3)}</span>
        </div>
        <div className="awa-sizes-strip">
          {p.sizes.map((sz) => (
            <div key={sz} className={`awa-size-chip${!p.stockSizes.includes(sz) ? " muted" : ""}`}>{sz}</div>
          ))}
        </div>
        <button className="awa-cta-link" onClick={() => onAdd(p)}>
          Agregar al carrito <Arrow />
        </button>
      </div>
    </div>
  );
}

export function AWAGallery() {
  const headRef = useReveal();
  const [toast, setToast] = useState("");

  const items = PRODUCTS.filter((p) => p.tags.includes("bestseller")).slice(0, 4);

  const showToast = (p: Product) => {
    setToast(`${p.brand} ${p.model} agregado`);
    setTimeout(() => setToast(""), 3000);
  };

  return (
    <section className="awa-gallery">
      <div className="awa-gallery-intro awa-reveal-up" ref={headRef as React.RefObject<HTMLDivElement>}>
        <h2>Il prodotto<br /><em>come opera.</em></h2>
        <span style={{ fontFamily: "var(--awa-mono)", fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--awa-grey)" }}>
          Bestseller · Mayo 2026<br />
          {String(items.length).padStart(2, "0")} pezzi in gallery
        </span>
      </div>
      <div className="awa-gallery-rooms">
        {items.map((p, i) => (
          <GalleryRoom key={p.id} p={p} idx={i} total={items.length} onAdd={showToast} />
        ))}
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
