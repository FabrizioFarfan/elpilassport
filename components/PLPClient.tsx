"use client";
import { useState } from "react";
import { BRANDS, PRODUCTS, SHOE_COLORS } from "@/lib/data";
import { ProductCard } from "./ProductCard";

type Props = {
  initialCat?: string;
  initialDrops?: boolean;
  initialLimitada?: boolean;
};

const ALL_SIZES = [36, 37, 38, 39, 40, 41, 42, 43, 44, 45];

export function PLPClient({ initialCat = "all", initialDrops = false, initialLimitada = false }: Props) {
  const [activeBrands, setActiveBrands] = useState<string[]>([]);
  const [activeCat,    setActiveCat]    = useState(initialCat);
  const [activeSize,   setActiveSize]   = useState<number | null>(null);
  const [activeTags,   setActiveTags]   = useState<string[]>(
    initialDrops ? ["new"] : initialLimitada ? ["limited"] : []
  );
  const [sort,      setSort]      = useState("featured");
  const [viewDense, setViewDense] = useState(false);

  const toggleBrand = (b: string) =>
    setActiveBrands((s) => (s.includes(b) ? s.filter((x) => x !== b) : [...s, b]));

  const toggleTag = (t: string) =>
    setActiveTags((s) => (s.includes(t) ? s.filter((x) => x !== t) : [...s, t]));

  let filtered = PRODUCTS;
  if (activeBrands.length)
    filtered = filtered.filter((p) => activeBrands.includes(p.brand));
  if (activeCat !== "all")
    filtered = filtered.filter((p) => p.cat === activeCat || p.cat === "unisex");
  if (activeSize)
    filtered = filtered.filter((p) => p.stockSizes.includes(activeSize));
  if (activeTags.length)
    filtered = filtered.filter((p) => activeTags.some((t) => p.tags.includes(t)));

  filtered = [...filtered];
  if (sort === "price-asc")  filtered.sort((a, b) => a.price - b.price);
  if (sort === "price-desc") filtered.sort((a, b) => b.price - a.price);
  if (sort === "newest")     filtered.sort((a, b) => Number(b.tags.includes("new")) - Number(a.tags.includes("new")));

  const catLabel =
    activeCat === "all"    ? "Todas"  :
    activeCat === "hombre" ? "Hombre" :
    activeCat === "mujer"  ? "Mujer"  : "Unisex";

  return (
    <div className="wrap">
      {/* ── Header ── */}
      <div className="plp-head">
        <div className="plp-breadcrumb">
          <span><a href="/">Inicio</a></span>
          <span>{catLabel}</span>
          <span>Todas las zapatillas</span>
        </div>

        <div className="plp-title-row">
          <h1>Zapatillas<br />{catLabel}.</h1>
          <p>
            Curaduría italiana, originales garantizadas.{" "}
            {filtered.length} modelos disponibles ahora mismo.
          </p>
        </div>

        {/* Category + tag chips */}
        <div style={{ display: "flex", gap: 10, marginTop: 28, alignItems: "center", flexWrap: "wrap" }}>
          {(["all", "hombre", "mujer", "unisex"] as const).map((c) => (
            <button
              key={c}
              className={`chip ${activeCat === c ? "chip-new" : ""}`}
              onClick={() => setActiveCat(c)}
            >
              {c === "all" ? "Todo" : c[0].toUpperCase() + c.slice(1)}
            </button>
          ))}

          <span style={{ width: 1, height: 16, background: "var(--grey-300)", margin: "0 6px" }} />

          {(["bestseller", "new", "limited", "sale"] as const).map((t) => (
            <button
              key={t}
              className={`chip ${activeTags.includes(t) ? "chip-new" : ""}`}
              onClick={() => toggleTag(t)}
            >
              {t === "bestseller" ? "Bestsellers" :
               t === "new"        ? "Recién llegados" :
               t === "limited"    ? "Limitadas" : "En oferta"}
            </button>
          ))}
        </div>
      </div>

      {/* ── Body: sidebar + grid ── */}
      <div className="plp-body">
        {/* Sidebar */}
        <aside className="filters">
          {/* Marca */}
          <div className="filter-group">
            <h3>Marca</h3>
            <div className="filter-list">
              {BRANDS.map((b) => (
                <div
                  key={b.id}
                  className={`filter-option ${activeBrands.includes(b.name) ? "active" : ""}`}
                  onClick={() => toggleBrand(b.name)}
                >
                  <span className="filter-check" />
                  <span>{b.name}</span>
                  <span className="filter-count">({b.count})</span>
                </div>
              ))}
            </div>
          </div>

          {/* Talla */}
          <div className="filter-group">
            <h3>Talla EU</h3>
            <div className="filter-size-grid">
              {ALL_SIZES.map((sz) => (
                <div
                  key={sz}
                  className={`size-tile ${activeSize === sz ? "active" : ""}`}
                  onClick={() => setActiveSize(activeSize === sz ? null : sz)}
                >
                  {sz}
                </div>
              ))}
            </div>
          </div>

          {/* Precio (visual only) */}
          <div className="filter-group">
            <h3>Precio</h3>
            <div style={{ position: "relative", padding: "20px 0" }}>
              <div style={{ height: 2, background: "var(--grey-300)", position: "relative" }}>
                <div style={{ position: "absolute", left: "10%", right: "30%", height: "100%", background: "var(--carbon)" }} />
                <div style={{ position: "absolute", left: "10%", top: -6, width: 14, height: 14, background: "var(--carbon)", borderRadius: "50%" }} />
                <div style={{ position: "absolute", right: "30%", top: -6, width: 14, height: 14, background: "var(--carbon)", borderRadius: "50%" }} />
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", marginTop: 14, fontFamily: "var(--mono)", fontSize: 11, color: "var(--grey-500)" }}>
                <span>S/ 400</span>
                <span>S/ 900</span>
              </div>
            </div>
          </div>

          {/* Color */}
          <div className="filter-group">
            <h3>Color</h3>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {(Object.keys(SHOE_COLORS) as Array<keyof typeof SHOE_COLORS>).map((c) => (
                <span
                  key={c}
                  title={c}
                  style={{
                    width: 28, height: 28,
                    borderRadius: "50%",
                    background: SHOE_COLORS[c].upper,
                    border: "1px solid var(--grey-300)",
                    cursor: "pointer",
                    display: "inline-block",
                  }}
                />
              ))}
            </div>
          </div>

          {/* Garantía */}
          <div className="filter-group" style={{ borderBottom: 0 }}>
            <h3>Garantía</h3>
            <div className="filter-list">
              <div className="filter-option active"><span className="filter-check" /><span>100% Original</span></div>
              <div className="filter-option"><span className="filter-check" /><span>Edición italiana</span></div>
              <div className="filter-option"><span className="filter-check" /><span>Made in Italy</span></div>
            </div>
          </div>
        </aside>

        {/* Grid */}
        <div>
          <div className="plp-toolbar">
            <div className="plp-count">
              {String(filtered.length).padStart(2, "0")} / {String(PRODUCTS.length).padStart(2, "0")} modelos
            </div>
            <div className="plp-sort">
              {/* Density toggles */}
              <div style={{ display: "flex", gap: 6 }}>
                <button
                  className="size-tile"
                  style={{
                    width: 36, height: 36, padding: 0,
                    background: !viewDense ? "var(--carbon)" : "var(--bone)",
                    color:      !viewDense ? "var(--bone)"   : "var(--carbon)",
                    borderColor: "var(--carbon)",
                  }}
                  onClick={() => setViewDense(false)}
                  aria-label="3 columnas"
                >
                  <svg width="14" height="14" viewBox="0 0 16 16">
                    <rect x="1" y="1" width="6" height="6" fill="currentColor"/>
                    <rect x="9" y="1" width="6" height="6" fill="currentColor"/>
                    <rect x="1" y="9" width="6" height="6" fill="currentColor"/>
                    <rect x="9" y="9" width="6" height="6" fill="currentColor"/>
                  </svg>
                </button>
                <button
                  className="size-tile"
                  style={{
                    width: 36, height: 36, padding: 0,
                    background: viewDense ? "var(--carbon)" : "var(--bone)",
                    color:      viewDense ? "var(--bone)"   : "var(--carbon)",
                    borderColor: "var(--carbon)",
                  }}
                  onClick={() => setViewDense(true)}
                  aria-label="4 columnas"
                >
                  <svg width="14" height="14" viewBox="0 0 16 16">
                    {[0,4,8,12].flatMap((x) =>
                      [0,4,8,12].map((y) => (
                        <rect key={`${x}-${y}`} x={x+1} y={y+1} width="2" height="2" fill="currentColor"/>
                      ))
                    )}
                  </svg>
                </button>
              </div>

              <span className="mono" style={{ color: "var(--grey-500)" }}>Ordenar por</span>
              <select
                className="plp-sort-select"
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                style={{ border: "1px solid var(--grey-300)", padding: "10px 28px 10px 14px", background: "var(--bone)", fontSize: 13, appearance: "none", cursor: "pointer", fontFamily: "var(--body)" }}
              >
                <option value="featured">Destacados</option>
                <option value="newest">Más nuevos</option>
                <option value="price-asc">Precio: menor a mayor</option>
                <option value="price-desc">Precio: mayor a menor</option>
              </select>
            </div>
          </div>

          {filtered.length === 0 ? (
            <div style={{ textAlign: "center", padding: "80px 0", color: "var(--grey-500)" }}>
              <div className="display" style={{ fontSize: 40, marginBottom: 12 }}>Sin resultados.</div>
              <p>Prueba cambiando los filtros.</p>
            </div>
          ) : (
            <div className={`plp-grid ${viewDense ? "dense" : ""}`}>
              {filtered.map((p) => (
                <ProductCard
                  key={p.id}
                  product={p}
                  onClick={() => { window.location.href = `/producto/${p.id}`; }}
                />
              ))}
            </div>
          )}

          <div style={{ display: "flex", justifyContent: "center", padding: "80px 0 0" }}>
            <button className="btn btn-secondary">Cargar más</button>
          </div>
        </div>
      </div>
    </div>
  );
}
