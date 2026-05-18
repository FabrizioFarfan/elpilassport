import { Sneaker } from "./Sneaker";

const FEATURED = [
  { n: "A", name: "Voltio 03 / Crimson",  tag: "Drop"    },
  { n: "B", name: "Recarga Max / Bone",    tag: "Running" },
  { n: "C", name: "Corriente Lo / Royal",  tag: "Urbano"  },
];

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div>
      <div style={{ fontFamily: "var(--font-syne)", fontWeight: 800, fontSize: 42, letterSpacing: "-.03em", lineHeight: 1 }}>{n}</div>
      <div className="mono" style={{ color: "var(--muted)", marginTop: 6 }}>{label}</div>
    </div>
  );
}

export function Hero() {
  return (
    <section style={{ position: "relative", padding: "64px 40px 80px", minHeight: "calc(100vh - 80px)" }}>

      {/* Meta row */}
      <div className="reveal" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 36 }}>
        <div className="mono" style={{ color: "var(--muted)" }}>
          [01] — DROP DE LA SEMANA / ICA — LIMA — AREQUIPA
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <span className="chip mono">
            <span className="dot" />LIVE NOW · 14 OBSERVANDO
          </span>
        </div>
      </div>

      {/* 3-col grid */}
      <div style={{ display: "grid", gridTemplateColumns: "1.3fr 1.7fr 0.9fr", gap: 30, alignItems: "start" }}>

        {/* Left — intro + CTA */}
        <div className="reveal" style={{ paddingTop: 28 }}>
          <p style={{ fontSize: 17, lineHeight: 1.45, maxWidth: 320, margin: "0 0 36px", color: "var(--ink-2)" }}>
            Una tienda peruana de sneakers para los que{" "}
            <em style={{ fontFamily: "var(--font-caveat)", fontStyle: "normal", fontSize: 22, color: "var(--blue)" }}>
              cargan la ciudad
            </em>
            . Curaduría semanal, drops limitados, talles reales.
          </p>
          <div className="magnet" data-magnetic style={{ display: "inline-block" }}>
            <button className="cta" data-hover>
              EXPLORAR DROP 026
              <span className="arrow">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 12L12 2M12 2H5M12 2V9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
              </span>
            </button>
          </div>
          <div style={{ marginTop: 44, display: "flex", gap: 30 }}>
            <Stat n="148" label="Modelos en línea" />
            <Stat n="32"  label="Drops este año"   />
          </div>
        </div>

        {/* Center — headline + sneaker stage */}
        <div style={{ position: "relative" }}>
          <h1 className="display reveal" style={{ fontSize: "clamp(72px,11.2vw,196px)", margin: 0, position: "relative", zIndex: 2 }}>
            <div>NO TE</div>
            <div style={{ display: "flex", alignItems: "center", gap: ".18em" }}>
              <span style={{ color: "var(--red)" }}>DETEN</span>
              <span style={{
                fontFamily: "var(--font-caveat, 'Caveat', cursive)", fontWeight: 600,
                fontSize: ".55em", color: "var(--blue)",
                transform: "translateY(-.05em) rotate(-4deg)", display: "inline-block",
              }}>gas.</span>
            </div>
          </h1>

          {/* Sneaker stage */}
          <div className="reveal" style={{ position: "relative", marginTop: -60, marginLeft: "14%", zIndex: 1 }}>
            <div style={{ position: "relative", aspectRatio: "16/10", background: "var(--blue)", borderRadius: 6, overflow: "hidden" }}>
              <div className="sneaker-stripes" />
              <div className="mono" style={{ position: "absolute", top: 18, left: 20, color: "#fff", opacity: .7 }}>
                SKU / VOLTIO-03-CRIMSON · PE 38–45
              </div>
              <div className="mono" style={{ position: "absolute", top: 18, right: 20, color: "#fff", opacity: .7 }}>
                LOOK BOOK · 03 / 06
              </div>
              <div style={{ position: "absolute", inset: "18% 8% 8% 8%" }}>
                <Sneaker tone="red" angle="b" />
              </div>
              <div style={{ position: "absolute", bottom: 18, left: 20, color: "#fff" }}>
                <div className="mono" style={{ opacity: .7 }}>DESDE</div>
                <div style={{ fontFamily: "var(--font-syne)", fontWeight: 800, fontSize: 34, letterSpacing: "-.02em" }}>
                  $189.000
                </div>
              </div>
              <button data-hover data-magnetic className="magnet" style={{
                position: "absolute", bottom: 18, right: 20,
                width: 64, height: 64, borderRadius: "50%",
                background: "#fff", color: "var(--ink)", border: "none",
                fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: 11, letterSpacing: ".06em",
              }}>
                VER<br />360°
              </button>
              <div className="grain" />
            </div>

            {/* Angle thumbnails */}
            <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
              {[0, 1, 2, 3].map((i) => (
                <div key={i} data-hover style={{
                  width: 62, height: 62, borderRadius: 4,
                  background: i === 0 ? "var(--ink)" : "var(--paper)",
                  border: "1px solid var(--line)",
                  display: "grid", placeItems: "center",
                  fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)", fontSize: 11,
                  color: i === 0 ? "var(--bg)" : "var(--muted)",
                }}>
                  {String(i + 1).padStart(2, "0")}
                </div>
              ))}
              <div style={{ flex: 1 }} />
              <div className="mono" style={{ alignSelf: "center", color: "var(--muted)" }}>↑ cambia ángulo</div>
            </div>
          </div>
        </div>

        {/* Right — featured list */}
        <div className="reveal" style={{ paddingTop: 8 }}>
          <div className="mono" style={{ color: "var(--muted)", marginBottom: 12 }}>DESTACADO ESTA SEMANA</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {FEATURED.map((it) => (
              <div key={it.n} data-hover style={{
                display: "grid", gridTemplateColumns: "36px 1fr auto",
                gap: 14, alignItems: "center", padding: "14px 0",
                borderBottom: "1px solid var(--line)",
              }}>
                <span className="mono" style={{ color: "var(--red)" }}>{it.n}</span>
                <span style={{ fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: 17 }}>{it.name}</span>
                <span className="mono" style={{ color: "var(--muted)" }}>{it.tag} →</span>
              </div>
            ))}
          </div>
          <div className="mono" style={{ marginTop: 34, color: "var(--muted)" }}>
            ACTUALIZADO · 18.05.26 · 14:02 GMT-5
          </div>
        </div>
      </div>
    </section>
  );
}
