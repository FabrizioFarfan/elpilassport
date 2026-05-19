"use client";
import { useState } from "react";
import { PRODUCTS, type Product, type ShoePalette } from "@/lib/data";
import { Shoe } from "./Shoe";
import { ProductCard } from "./ProductCard";

const GENERIC_STORY =
  "Unidad importada directamente desde un retailer autorizado en Europa y traída en mano por el fundador de PilasSport. Sin pasar por almacenes, sin reempaquetado. Caja original, factura adjunta. Esta es la autenticidad que nos diferencia del mercado peruano de réplicas.";

const GENERIC_DETAILS = [
  { label: "Material superior", value: "Cuero, malla y synthetic mesh" },
  { label: "Suela",             value: "EVA cushioning + rubber outsole" },
  { label: "Origen",            value: "Importado de Europa vía Italia" },
  { label: "Drop",              value: "10 mm" },
  { label: "Peso",              value: "~320 g (talla 42)" },
];

type AccId = "desc" | "details" | "ship" | "auth";

const ACCORDION: { id: AccId; title: string }[] = [
  { id: "desc",    title: "Descripción" },
  { id: "details", title: "Detalles técnicos" },
  { id: "ship",    title: "Envíos y devoluciones" },
  { id: "auth",    title: "Garantía de originalidad" },
];

export function PDPClient({ product }: { product: Product }) {
  const [activeThumb, setActiveThumb] = useState(0);
  const [activeColor, setActiveColor] = useState<ShoePalette>(product.color);
  const [activeSize,  setActiveSize]  = useState<number | null>(null);
  const [openAcc,     setOpenAcc]     = useState<AccId | null>("desc");
  const [toast,       setToast]       = useState("");

  const thumbAngles = [0, -8, 8, 0];
  const story   = product.story   ?? GENERIC_STORY;
  const details = product.details ?? GENERIC_DETAILS;

  const related = PRODUCTS.filter((x) => x.brand === product.brand && x.id !== product.id).slice(0, 4);

  function handleAdd() {
    if (!activeSize) {
      showToast("Elige una talla primero");
      return;
    }
    showToast(`${product.brand} ${product.model} · talla ${activeSize} agregado`);
  }

  function showToast(msg: string) {
    setToast(msg);
    setTimeout(() => setToast(""), 3000);
  }

  function accBody(id: AccId) {
    if (id === "desc")    return <p style={{ margin: 0, fontSize: 14, lineHeight: 1.7, color: "var(--grey-700)" }}>{story}</p>;
    if (id === "details") return (
      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
        {details.map((d) => (
          <li key={d.label} style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px dashed var(--grey-200)", paddingBottom: 6, fontSize: 14 }}>
            <span className="mono" style={{ color: "var(--grey-500)", fontSize: 11 }}>{d.label}</span>
            <span>{d.value}</span>
          </li>
        ))}
      </ul>
    );
    if (id === "ship") return (
      <p style={{ margin: 0, fontSize: 14, lineHeight: 1.7, color: "var(--grey-700)" }}>
        Envío gratis a todo Perú en compras +S/ 400. Lima 24h · provincias 48–72h vía Olva / Shalom.
        Cambios y devoluciones hasta 14 días sin costo.
      </p>
    );
    return (
      <p style={{ margin: 0, fontSize: 14, lineHeight: 1.7, color: "var(--grey-700)" }}>
        Cada par incluye factura del retailer europeo de origen, caja sellada y QR de verificación.
        Si dudas de la autenticidad, te devolvemos el doble.
      </p>
    );
  }

  return (
    <>
      <div className="wrap">
        <div className="pdp">
          {/* Breadcrumb */}
          <div className="plp-breadcrumb" style={{ marginBottom: 32 }}>
            <span><a href="/">Inicio</a></span>
            <span><a href="/tienda">{product.cat || "Catálogo"}</a></span>
            <span>{product.brand}</span>
            <span>{product.model}</span>
          </div>

          {/* Main grid */}
          <div className="pdp-grid">
            {/* Gallery */}
            <div className="pdp-gallery">
              {/* Thumbnails */}
              <div className="pdp-thumbs">
                {[0, 1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className={`pdp-thumb ${i === activeThumb ? "active" : ""}`}
                    onClick={() => setActiveThumb(i)}
                  >
                    <Shoe palette={activeColor} angle={thumbAngles[i]} size={0.85} />
                  </div>
                ))}
                {/* 360 placeholder */}
                <div className="pdp-thumb" style={{ background: "var(--carbon)" }}>
                  <div className="ph ph-dark" style={{ width: "100%", height: "100%" }}>
                    <span className="ph-tag" style={{ margin: 4, padding: "4px 6px", fontSize: 8 }}>360°</span>
                  </div>
                </div>
              </div>

              {/* Main image */}
              <div className="pdp-main-img">
                <Shoe palette={activeColor} angle={thumbAngles[activeThumb]} size={1.0} />

                {/* Zoom */}
                <button className="pdp-zoom" aria-label="Zoom">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="11" cy="11" r="7"/>
                    <path d="m20 20-3.5-3.5M8 11h6M11 8v6"/>
                  </svg>
                </button>

                {/* Badges */}
                <div style={{ position: "absolute", left: 16, top: 16, display: "flex", gap: 6 }}>
                  {product.tags.includes("new")     && <span className="chip chip-new">Nuevo</span>}
                  {product.tags.includes("limited") && <span className="chip chip-ltd">Ed. Limitada</span>}
                  {product.tags.includes("italy")   && (
                    <span className="chip" style={{ background: "var(--green-it)", color: "#fff", borderColor: "var(--green-it)" }}>
                      Made in Italy
                    </span>
                  )}
                </div>

                {/* Ref */}
                <div style={{ position: "absolute", right: 16, bottom: 16, fontFamily: "var(--mono)", fontSize: 10, letterSpacing: "0.14em", color: "var(--grey-500)", textTransform: "uppercase" }}>
                  REF · {product.id.toUpperCase()}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="pdp-side">
              <div>
                <div className="pdp-brand">{product.brand}</div>
                <h1 className="pdp-title">{product.model}</h1>
                <div className="pdp-meta-row" style={{ marginTop: 12 }}>
                  <span style={{ display: "inline-flex", gap: 3 }}>
                    {[1, 2, 3, 4, 5].map((i) => (
                      <svg key={i} width="13" height="13" viewBox="0 0 16 16" fill={i <= 4 ? "var(--carbon)" : "var(--grey-300)"}>
                        <path d="M8 1l2.2 4.5 4.8.7-3.5 3.4.8 4.8L8 12.1 3.7 14.4l.8-4.8L1 6.2l4.8-.7L8 1z"/>
                      </svg>
                    ))}
                  </span>
                  <span>4.8 · 23 reseñas</span>
                  <span>· {product.stockSizes.length} tallas en stock</span>
                </div>
              </div>

              {/* Price */}
              <div className="pdp-price-row">
                <span className="pdp-price">S/ {product.price}</span>
                {product.oldPrice && (
                  <span style={{ fontSize: 18, color: "var(--grey-500)", textDecoration: "line-through" }}>
                    S/ {product.oldPrice}
                  </span>
                )}
                <span className="pdp-price-mono" style={{ marginLeft: "auto" }}>
                  3 cuotas s/intereses · S/ {Math.round(product.price / 3)}
                </span>
              </div>

              {/* Color swatches */}
              <div className="pdp-colors">
                <div className="pdp-colors-label">
                  <span>Color · {activeColor}</span>
                  <span>{product.colorways.length} disponibles</span>
                </div>
                <div className="pdp-color-swatches">
                  {product.colorways.map((c) => (
                    <div
                      key={c}
                      className={`pdp-swatch ${activeColor === c ? "active" : ""}`}
                      onClick={() => setActiveColor(c)}
                      style={{ overflow: "hidden" }}
                    >
                      <Shoe palette={c} size={1.1} />
                    </div>
                  ))}
                </div>
              </div>

              {/* Size grid */}
              <div>
                <div className="pdp-sizes-head">
                  <span>Talla EU</span>
                  <a href="/tallas" style={{ textDecoration: "underline" }}>Guía de tallas</a>
                </div>
                <div className="pdp-sizes-grid">
                  {product.sizes.map((sz) => {
                    const inStock = product.stockSizes.includes(sz);
                    return (
                      <div
                        key={sz}
                        className={`size-tile ${activeSize === sz ? "active" : ""} ${!inStock ? "disabled" : ""}`}
                        onClick={() => inStock && setActiveSize(sz)}
                      >
                        {sz}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Add to cart */}
              <div className="pdp-add-row">
                <button className="btn btn-primary btn-lg" onClick={handleAdd} style={{ flex: 1 }}>
                  {activeSize
                    ? `Agregar al carrito · S/ ${product.price}`
                    : "Elige una talla"}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M13 5l7 7-7 7"/>
                  </svg>
                </button>
                <button className="pdp-fav-btn" aria-label="Guardar">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 21s-7-4.5-9-9c-1.3-3 .5-7 4-7 2 0 3.5 1 5 3 1.5-2 3-3 5-3 3.5 0 5.3 4 4 7-2 4.5-9 9-9 9Z"/>
                  </svg>
                </button>
              </div>

              {/* Delivery guarantees */}
              <div className="pdp-deliv">
                <div className="pdp-deliv-row">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M3 17V6h11v11"/><path d="M14 9h4l3 4v4h-7"/>
                    <circle cx="7" cy="18" r="2"/><circle cx="17" cy="18" r="2"/>
                  </svg>
                  <div>
                    <strong>Envío gratis a todo Perú</strong>
                    <span>Lima 24h · provincias 48–72h</span>
                  </div>
                </div>
                <div className="pdp-deliv-row">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6l-8-3Z"/>
                    <path d="m9 12 2 2 4-4"/>
                  </svg>
                  <div>
                    <strong>100% Original — garantía PilasSport</strong>
                    <span>Factura europea adjunta. Devolvemos el doble si no es original.</span>
                  </div>
                </div>
                <div className="pdp-deliv-row">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M3 12a9 9 0 1 0 3-6.7"/><path d="M3 4v5h5"/>
                  </svg>
                  <div>
                    <strong>Recoge en tienda · Centro de Ica</strong>
                    <span>Listo en 30 min. Pruébatelas antes de llevártelas.</span>
                  </div>
                </div>
              </div>

              {/* Accordion */}
              <div className="pdp-accordion">
                {ACCORDION.map((acc) => (
                  <div key={acc.id} className="pdp-acc-item">
                    <div
                      className="pdp-acc-head"
                      onClick={() => setOpenAcc(openAcc === acc.id ? null : acc.id)}
                    >
                      <h4>{acc.title}</h4>
                      <span style={{
                        display: "inline-block",
                        transform: openAcc === acc.id ? "rotate(180deg)" : "rotate(0)",
                        transition: "transform 200ms var(--ease)",
                      }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <path d="m6 9 6 6 6-6"/>
                        </svg>
                      </span>
                    </div>
                    {openAcc === acc.id && (
                      <div className="pdp-acc-body">{accBody(acc.id)}</div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Provenance editorial ── */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, margin: "120px 0", alignItems: "center" }}>
            <div>
              <span className="eyebrow">·· Procedencia ··</span>
              <h2 style={{ fontFamily: "var(--display)", fontSize: "clamp(40px,4.5vw,64px)", textTransform: "uppercase", lineHeight: 0.95, margin: "12px 0 24px" }}>
                Importado<br />directo de Italia.
              </h2>
              <p style={{ fontSize: 16, color: "var(--grey-700)", lineHeight: 1.65, margin: 0, maxWidth: 480 }}>
                Esta unidad fue adquirida en un retailer autorizado de Milán y traída en mano,
                sin pasar por almacenes ni reempaquetado. Caja original, factura adjunta.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 28, marginTop: 36, paddingTop: 28, borderTop: "1px solid var(--grey-200)" }}>
                {[
                  { n: "03", l: "Sellos de autenticidad" },
                  { n: "15d", l: "De Milán a Ica" },
                  { n: "QR", l: "Verifica en tu caja" },
                ].map((s) => (
                  <div key={s.n}>
                    <div className="display" style={{ fontSize: 28 }}>{s.n}</div>
                    <div className="mono" style={{ color: "var(--grey-500)", marginTop: 4 }}>{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="ph ph-dark" style={{ aspectRatio: "4/5" }}>
              <span className="ph-tag">PROVENANCE · Milano boutique · 1080×1350</span>
            </div>
          </div>

          {/* ── Related products ── */}
          {related.length > 0 && (
            <div style={{ marginBottom: 120 }}>
              <div className="sec-head">
                <h2 style={{ fontFamily: "var(--display)", fontSize: "clamp(36px,4vw,56px)", textTransform: "uppercase" }}>
                  También de {product.brand}.
                </h2>
                <a href="/tienda" className="btn btn-ghost">Ver toda la marca</a>
              </div>
              <div className="drops-grid">
                {related.map((rp) => (
                  <ProductCard
                    key={rp.id}
                    product={rp}
                    onClick={() => { window.location.href = `/producto/${rp.id}`; }}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Toast */}
      {toast && (
        <div style={{
          position: "fixed", bottom: 28, left: "50%",
          transform: "translateX(-50%)",
          background: "var(--carbon)", color: "var(--bone)",
          padding: "16px 24px",
          fontFamily: "var(--mono)", fontSize: 12,
          letterSpacing: "0.1em", textTransform: "uppercase",
          zIndex: 150, pointerEvents: "none",
          animation: "pageIn .24s var(--ease) both",
        }}>
          {toast}
        </div>
      )}
    </>
  );
}
