const ITEMS = [
  "DROP 026 — VIERNES 23:00 PER",
  "ENVÍO GRATIS DESDE S/150",
  "CAMBIOS 30 DÍAS",
  "PILAS SPORT // NO TE DETENGAS",
  "+51 600 PILAS",
  "EXCLUSIVE DROPS",
  "NO TE DETENGAS",
];

export function TickerStrip() {
  return (
    <div style={{ background: "var(--ink)", color: "var(--bg)", padding: "10px 0", overflow: "hidden" }}>
      <div className="marquee-track" style={{ overflow: "hidden" }}>
        <div className="marquee mono" style={{ fontSize: 12, gap: 0 }}>
          {[0, 1].map((k) => (
            <div key={k} style={{ display: "flex", alignItems: "center", gap: 28, paddingRight: 28 }}>
              {ITEMS.map((t, i) => (
                <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: 28 }}>
                  <span>{t}</span>
                  <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--red)" }} />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
