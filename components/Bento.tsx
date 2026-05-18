import { Sneaker } from "./Sneaker";

export function Bento() {
  return (
    <section id="bento" style={{ padding: "80px 40px" }}>
      <div className="reveal" style={{
        display: "flex", justifyContent: "space-between", alignItems: "baseline",
        marginBottom: 28,
      }}>
        <h2 className="display" style={{ fontSize: "clamp(40px,5vw,72px)", margin: 0 }}>
          ¿De qué <span style={{ color: "var(--blue)" }}>pila</span> sos?
        </h2>
        <div className="mono" style={{ color: "var(--muted)" }}>
          [02] · 06 CATEGORÍAS · BENTO
        </div>
      </div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(6, 1fr)",
        gridAutoRows: "180px",
        gap: 14,
      }}>
        {/* Big urban tile — spans 3 cols × 2 rows */}
        <div className="bento reveal" data-hover style={{
          gridColumn: "span 3", gridRow: "span 2",
          background: "var(--ink)", color: "var(--bg)",
        }}>
          <div className="bcorner" style={{ background: "var(--red)", color: "#fff" }}>↗</div>
          <div className="sneaker-stripes" />
          <div style={{ position: "absolute", top: 24, left: 26 }} className="mono">01 · URBANO</div>
          <div style={{ position: "absolute", bottom: 26, left: 26, right: 26 }}>
            <div className="display" style={{ fontSize: "clamp(36px,4.4vw,76px)", color: "#fff" }}>
              Para la calle<br />que vibra.
            </div>
            <div className="mono" style={{ marginTop: 18, opacity: 0.7 }}>
              48 MODELOS · DESDE $145.000
            </div>
          </div>
          <div style={{ position: "absolute", top: 14, right: 60, width: "46%", opacity: 0.95 }}>
            <Sneaker tone="red" angle="a" />
          </div>
        </div>

        {/* Running tile */}
        <div className="bento reveal" data-hover style={{
          gridColumn: "span 3", gridRow: "span 1",
          background: "var(--paper)",
        }}>
          <div className="bcorner">02</div>
          <div style={{ display: "flex", height: "100%" }}>
            <div style={{ padding: "24px 26px", flex: 1 }}>
              <div className="mono" style={{ color: "var(--muted)" }}>RUNNING</div>
              <div className="display" style={{ fontSize: 36, marginTop: 8 }}>
                Aguante<br />en cada km.
              </div>
            </div>
            <div style={{ width: "45%", position: "relative" }}>
              <Sneaker tone="bone" angle="b" />
            </div>
          </div>
        </div>

        {/* Exclusive drops tile */}
        <div className="bento reveal" data-hover style={{
          gridColumn: "span 3", gridRow: "span 1",
          background: "var(--red)", color: "#fff",
        }}>
          <div className="bcorner" style={{ background: "#fff", color: "var(--red)" }}>03</div>
          <div className="sneaker-stripes" />
          <div style={{ padding: "24px 26px" }}>
            <div className="mono" style={{ opacity: 0.85 }}>LANZAMIENTOS EXCLUSIVOS</div>
            <div className="display" style={{ fontSize: 40, marginTop: 8, color: "#fff" }}>
              Sólo viernes,<br />sólo 200 pares.
            </div>
            <div className="mono" style={{ marginTop: 14, opacity: 0.85 }}>SUSCRIBITE AL DROP →</div>
          </div>
        </div>

        {/* Skate tile */}
        <div className="bento reveal" data-hover style={{
          gridColumn: "span 2", gridRow: "span 1",
          background: "var(--blue)", color: "#fff",
        }}>
          <div className="bcorner" style={{ background: "#fff", color: "var(--blue)" }}>04</div>
          <div style={{ padding: "24px 26px" }}>
            <div className="mono" style={{ opacity: 0.85 }}>SKATE</div>
            <div className="display" style={{ fontSize: 30, marginTop: 8, color: "#fff" }}>
              Para caer<br />parado.
            </div>
          </div>
        </div>

        {/* Heritage tile */}
        <div className="bento reveal" data-hover style={{
          gridColumn: "span 2", gridRow: "span 1",
          background: "var(--paper)",
        }}>
          <div className="bcorner">05</div>
          <div style={{ padding: "24px 26px" }}>
            <div className="mono" style={{ color: "var(--muted)" }}>HERITAGE</div>
            <div className="display" style={{ fontSize: 30, marginTop: 8 }}>
              Clásicos<br />recargados.
            </div>
          </div>
        </div>

        {/* Mujer tile */}
        <div className="bento reveal" data-hover style={{
          gridColumn: "span 2", gridRow: "span 1",
          background: "var(--paper)", border: "1px dashed var(--ink)",
        }}>
          <div className="bcorner">06</div>
          <div style={{ padding: "24px 26px" }}>
            <div className="mono" style={{ color: "var(--muted)" }}>MUJER · NUEVO</div>
            <div className="display" style={{ fontSize: 30, marginTop: 8 }}>
              Línea<br />recién enchufada.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
