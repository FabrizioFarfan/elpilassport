import { PRODUCTS } from "@/lib/data";
import { ProductCard } from "./ProductCard";

const BESTSELLERS = PRODUCTS.filter((p) => p.tags.includes("bestseller"));
const LOOP = [...BESTSELLERS, ...BESTSELLERS]; // double for infinite feel

export function Bestsellers() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="sec-head reveal">
          <div>
            <span className="eyebrow">·· Bestsellers · Mayo 2026 ··</span>
            <h2>Lo que más vuela.</h2>
          </div>
          <div className="right">
            <span className="eyebrow" style={{ color: "var(--grey-500)" }}>
              {String(BESTSELLERS.length).padStart(2, "0")} modelos
            </span>
            <a href="/tienda" className="btn btn-ghost">Ver todo</a>
          </div>
        </div>

        <div className="row-slider">
          {LOOP.map((p, i) => (
            <ProductCard key={p.id + "_" + i} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

export { Bestsellers as Showcase };
