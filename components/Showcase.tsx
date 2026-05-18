"use client";
import { useState } from "react";
import { Sneaker } from "./Sneaker";

const PRODUCTS = [
  { id: "001", name: "Voltio 03",    tone: "red"   as const, subtype: "Urbano",    price: "$189.000", stock: "EN STOCK"       },
  { id: "002", name: "Corriente Lo", tone: "blue"  as const, subtype: "Lifestyle", price: "$215.000", stock: "POCAS UNIDADES" },
  { id: "003", name: "Recarga Max",  tone: "bone"  as const, subtype: "Running",   price: "$245.000", stock: "NUEVO"          },
  { id: "004", name: "Amperaje 90",  tone: "onyx"  as const, subtype: "Court",     price: "$199.000", stock: "EN STOCK"       },
  { id: "005", name: "Cátodo Hi",    tone: "flash" as const, subtype: "Skate",     price: "$179.000", stock: "EXCLUSIVO"      },
  { id: "006", name: "Pila Doble A", tone: "red"   as const, subtype: "Heritage",  price: "$165.000", stock: "AGOTADO"        },
];

const TAGS = ["TODOS", "URBANO", "RUNNING", "COURT", "HERITAGE"];

const BG = ["var(--paper)", "var(--ink)", "var(--paper)", "var(--blue)", "var(--paper)", "var(--ink)"];
const FG = ["var(--ink)",   "var(--bg)",  "var(--ink)",  "#fff",        "var(--ink)",   "var(--bg)"];

function ProductCard({ p, i }: { p: typeof PRODUCTS[0]; i: number }) {
  return (
    <article
      className="product reveal"
      data-hover="product"
      style={{ background: BG[i % 6], color: FG[i % 6] }}
    >
      {/* SKU strip */}
      <div className="mono" style={{
        position: "absolute", top: 18, left: 20, right: 20,
        display: "flex", justifyContent: "space-between",
        opacity: 0.8, zIndex: 3,
      }}>
        <span>SKU / {p.id}</span>
        <span>{p.stock}</span>
      </div>

      {/* Angle A — shown by default */}
      <div className="angle a sneaker-card" style={{ padding: "18% 8% 22%" }}>
        <Sneaker tone={p.tone} angle="a" />
      </div>
      {/* Angle B — shown on hover via CSS */}
      <div className="angle b sneaker-card" style={{ padding: "18% 8% 22%" }}>
        <Sneaker tone={p.tone} angle="b" flip />
      </div>

      {/* Bottom info */}
      <div style={{
        position: "absolute", left: 20, right: 20, bottom: 18,
        display: "flex", justifyContent: "space-between", alignItems: "flex-end",
        zIndex: 3,
      }}>
        <div>
          <div className="mono" style={{ opacity: 0.7 }}>{p.subtype}</div>
          <div style={{
            fontFamily: "var(--font-syne, 'Syne', sans-serif)",
            fontWeight: 700, fontSize: 22, letterSpacing: "-.01em",
          }}>
            {p.name}
          </div>
        </div>
        <div style={{ textAlign: "right" }}>
          <div style={{
            fontFamily: "var(--font-syne, 'Syne', sans-serif)",
            fontWeight: 700, fontSize: 18,
          }}>
            {p.price}
          </div>
          <div className="mono" style={{ opacity: 0.7, marginTop: 2 }}>+ CARRITO</div>
        </div>
      </div>

      <div className="grain" />
    </article>
  );
}

export function Showcase() {
  const [filter, setFilter] = useState("TODOS");

  const visible = filter === "TODOS"
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.subtype.toUpperCase() === filter);

  return (
    <section id="shop" style={{ padding: "90px 40px" }}>
      <div className="reveal" style={{
        display: "grid",
        gridTemplateColumns: "1fr auto",
        alignItems: "end", gap: 24,
        marginBottom: 28,
      }}>
        <div>
          <div className="mono" style={{ color: "var(--muted)", marginBottom: 14 }}>
            [03] · SHOWCASE · HOVER PARA OTRO ÁNGULO
          </div>
          <h2 className="display" style={{ fontSize: "clamp(48px,6.5vw,108px)", margin: 0 }}>
            Drops <span style={{ color: "var(--red)" }}>cargados</span>.
          </h2>
        </div>

        {/* Filter chips */}
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {TAGS.map((t) => (
            <button
              key={t}
              data-hover
              onClick={() => setFilter(t)}
              className="mono"
              style={{
                padding: "10px 16px",
                borderRadius: 999,
                border: "1px solid var(--ink)",
                background: filter === t ? "var(--ink)" : "transparent",
                color: filter === t ? "var(--bg)" : "var(--ink)",
                cursor: "pointer",
              }}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: 18,
      }}>
        {visible.map((p, i) => (
          <ProductCard key={p.id} p={p} i={i} />
        ))}
      </div>

      <div className="reveal" style={{ display: "flex", justifyContent: "center", marginTop: 48 }}>
        <div className="magnet" data-magnetic>
          <button
            className="cta"
            data-hover
            style={{ background: "transparent", color: "var(--ink)", border: "1px solid var(--ink)" }}
          >
            VER LOS 148 MODELOS
            <span className="arrow" style={{ background: "var(--ink)", color: "var(--bg)" }}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 12L12 2M12 2H5M12 2V9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
