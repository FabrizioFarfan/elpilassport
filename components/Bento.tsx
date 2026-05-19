const CATS = [
  { num: "01", title: "Hombre",          count: "62 modelos", href: "/tienda?cat=hombre",   label: "MEN LIFESTYLE · running, retro, low-tops" },
  { num: "02", title: "Mujer",           count: "38 modelos", href: "/tienda?cat=mujer",    label: "WOMEN LIFESTYLE · low + chunky retro"     },
  { num: "03", title: "Edición Limitada",count: "12 modelos", href: "/tienda?limitada=true",label: "EDITORIAL · Italian capsules + collabs"    },
];

export function Categories() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="sec-head reveal">
          <div>
            <span className="eyebrow">·· Categorías ··</span>
            <h2>Encuentra<br />lo tuyo.</h2>
          </div>
          <div className="right">
            <a href="/tienda" className="btn btn-ghost">Ver todas las categorías</a>
          </div>
        </div>

        <div className="cat-grid">
          {CATS.map((c) => (
            <a key={c.num} href={c.href} className="cat-card reveal" style={{ display: "block" }}>
              {/* Striped placeholder */}
              <div className="ph ph-dark" style={{ position: "absolute", inset: 0 }}>
                <span className="ph-tag">{c.label}</span>
              </div>

              {/* Overlay text */}
              <div className="cat-card-body">
                <div className="cat-card-num">{c.num} / 03</div>
                <div className="cat-card-title">{c.title}</div>
                <div className="cat-card-count">{c.count}</div>
              </div>

              {/* CTA reveal on hover */}
              <div className="cat-card-cta">
                <span>Ver colección</span>
                <span>→</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* keep default export alias so old imports still work */
export { Categories as Bento };
