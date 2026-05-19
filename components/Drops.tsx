import { PRODUCTS } from "@/lib/data";
import { ProductCard } from "./ProductCard";

const NEW_ARRIVALS = PRODUCTS.filter((p) => p.tags.includes("new")).slice(0, 4);

export function Drops() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="sec-head reveal">
          <div>
            <span className="eyebrow">·· Drops · esta semana ··</span>
            <h2>Recién llegadas<br />de Europa.</h2>
          </div>
          <div className="right">
            <a href="/tienda?drops=true" className="btn btn-ghost">Ver todos los drops</a>
          </div>
        </div>

        <div className="drops-grid">
          {NEW_ARRIVALS.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
