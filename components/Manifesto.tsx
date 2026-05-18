export function Manifesto() {
  return (
    <section style={{ padding: "90px 40px", background: "var(--ink)", color: "var(--bg)" }}>
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 2fr",
        gap: 60,
        alignItems: "start",
      }}>
        <div className="reveal">
          <div className="mono" style={{ color: "var(--red)", marginBottom: 18 }}>[04] · MANIFIESTO</div>
          <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
            <span style={{ width: 14, height: 14, borderRadius: "50%", background: "var(--red)", display: "inline-block" }} />
            <span style={{ width: 14, height: 14, borderRadius: "50%", background: "var(--blue)", display: "inline-block" }} />
            <span style={{ width: 14, height: 14, borderRadius: "50%", background: "var(--bg)", display: "inline-block" }} />
            <span className="mono" style={{ opacity: 0.6 }}>3 colores · 1 actitud</span>
          </div>
        </div>

        <div
          className="reveal display"
          style={{
            fontSize: "clamp(28px,3.4vw,52px)",
            letterSpacing: "-.02em",
            lineHeight: 1.05,
            color: "var(--bg)",
          }}
        >
          Somos para los que{" "}
          <span style={{ color: "var(--red)" }}>se enchufan</span>{" "}
          a la ciudad. Pisamos andén, cancha, asfalto y escenario.{" "}
          <span style={{
            fontFamily: "var(--font-caveat, 'Caveat', cursive)",
            color: "var(--bg)", fontWeight: 600, fontStyle: "italic",
          }}>
            Pilas, causa —
          </span>{" "}
          el drop arranca el viernes.
        </div>
      </div>
    </section>
  );
}
