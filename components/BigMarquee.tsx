import { BRANDS } from "@/lib/data";

const LOOP = [...BRANDS, ...BRANDS];

export function BigMarquee() {
  return (
    <div style={{ paddingBlock: "28px 16px" }}>
      <div className="wrap" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
        <span className="eyebrow">Las marcas que ya conoces · Originales garantizadas</span>
        <span className="eyebrow">{BRANDS.length} / {BRANDS.length} disponibles</span>
      </div>
      <div className="marquee">
        <div className="marquee-track">
          {LOOP.map((b, i) => (
            <span key={i} className="marquee-item">{b.name}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
