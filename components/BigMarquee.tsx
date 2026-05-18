const PHRASES = ["PILAS SPORT", "NO TE DETENGAS", "EXCLUSIVE DROPS"];

export function BigMarquee() {
  return (
    <section
      className="marquee-track"
      style={{
        borderTop: "1px solid var(--line)",
        borderBottom: "1px solid var(--line)",
        padding: "40px 0",
        background: "var(--bg)",
        overflow: "hidden",
      }}
    >
      <div className="marquee" style={{ gap: 0 }}>
        {[0, 1].map((k) => (
          <div key={k} style={{ display: "flex", alignItems: "center" }}>
            {Array.from({ length: 4 }).flatMap((_, j) =>
              PHRASES.map((p, i) => (
                <span key={`${k}-${j}-${i}`} style={{ display: "inline-flex", alignItems: "center" }}>
                  <span
                    className="display"
                    style={{
                      fontSize: "clamp(60px,9vw,160px)",
                      padding: "0 28px",
                      color: i === 1 ? "var(--red)" : "var(--ink)",
                    }}
                  >
                    {p}
                  </span>
                  <span style={{
                    width: "clamp(18px,2.6vw,36px)",
                    height: "clamp(18px,2.6vw,36px)",
                    borderRadius: "50%",
                    background: i === 1 ? "var(--blue)" : "var(--red)",
                    display: "inline-block",
                    flexShrink: 0,
                  }} />
                </span>
              ))
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
