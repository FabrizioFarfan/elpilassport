"use client";
import { SHOE_COLORS, type Product, type ShoePalette } from "@/lib/data";
import { Shoe } from "./Shoe";

type ProductCardProps = {
  product: Product;
  onClick?: (p: Product) => void;
  onAdd?: (p: Product) => void;
};

export function ProductCard({ product, onClick, onAdd }: ProductCardProps) {
  const isNew     = product.tags.includes("new");
  const isLimited = product.tags.includes("limited");
  const isSale    = product.tags.includes("sale");
  const discount  = product.oldPrice
    ? Math.round((1 - product.price / product.oldPrice) * 100)
    : 0;

  return (
    <div className="card" onClick={() => onClick?.(product)}>
      <div className="card-media">
        {/* Badges */}
        <div className="card-badges">
          {isNew     && <span className="chip chip-new">Nuevo</span>}
          {isLimited && <span className="chip chip-ltd">Ed. Limitada</span>}
          {isSale    && <span className="chip chip-sale">-{discount}%</span>}
        </div>

        {/* Fav */}
        <button
          className="card-fav"
          aria-label="Guardar"
          onClick={(e) => { e.stopPropagation(); }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 21s-7-4.5-9-9c-1.3-3 .5-7 4-7 2 0 3.5 1 5 3 1.5-2 3-3 5-3 3.5 0 5.3 4 4 7-2 4.5-9 9-9 9Z"/>
          </svg>
        </button>

        {/* Shoe */}
        <Shoe palette={product.color} />

        {/* Add to cart */}
        <button
          className="card-add"
          onClick={(e) => { e.stopPropagation(); onAdd?.(product); }}
        >
          Agregar al carrito
        </button>
      </div>

      {/* Meta */}
      <div className="card-meta">
        <span className="card-brand">{product.brand}</span>
        <span className="card-name">{product.model}</span>
        <div className="card-price-row">
          <span className="card-price">S/ {product.price}</span>
          {product.oldPrice && (
            <span className="card-price-old">S/ {product.oldPrice}</span>
          )}
          <span style={{ marginLeft: "auto", display: "flex", gap: 4 }}>
            {product.colorways.slice(0, 4).map((c: ShoePalette) => (
              <span
                key={c}
                title={c}
                style={{
                  width: 12, height: 12,
                  borderRadius: "50%",
                  background: SHOE_COLORS[c].upper,
                  border: "1px solid var(--grey-300)",
                  display: "inline-block",
                }}
              />
            ))}
          </span>
        </div>
      </div>
    </div>
  );
}
