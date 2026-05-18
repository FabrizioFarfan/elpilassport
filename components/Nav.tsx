export function Nav() {
  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 50,
      display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: "20px 40px",
      background: "color-mix(in oklab, var(--bg) 86%, transparent)",
      backdropFilter: "blur(14px)",
      WebkitBackdropFilter: "blur(14px)",
      borderBottom: "1px solid var(--line)",
    }}>
      {/* Logo */}
      <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
        <div style={{
          width: 38, height: 38, borderRadius: "50%",
          background: "#fff", display: "grid", placeItems: "center",
          overflow: "hidden", border: "1px solid var(--line)",
        }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.jpeg" alt="Pilas Sport" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
        <div style={{ lineHeight: 1 }}>
          <div style={{ fontFamily: "var(--font-caveat, 'Caveat', cursive)", fontSize: 24, color: "var(--blue)", fontWeight: 600 }}>
            Pilas
          </div>
          <div style={{ fontFamily: "var(--font-syne, 'Syne', sans-serif)", fontWeight: 700, fontSize: 14, letterSpacing: "-.01em", marginTop: -2 }}>
            SPORT
          </div>
        </div>
      </div>

      {/* Nav links */}
      <nav style={{ display: "flex", gap: 36 }} className="mono">
        {["Tienda", "Drops 026", "Categorías", "Journal", "Contacto"].map((item) => (
          <a key={item} href="#" className="ulink">{item}</a>
        ))}
      </nav>

      {/* Actions */}
      <div style={{ display: "flex", alignItems: "center", gap: 18 }} className="mono">
        <a href="#" className="ulink">Buscar</a>
        <a href="#" className="ulink">Cuenta</a>
        <a href="#" data-hover style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          padding: "8px 14px", border: "1px solid var(--ink)", borderRadius: 999,
        }}>
          Bolsa
          <span style={{
            width: 18, height: 18, borderRadius: "50%",
            background: "var(--red)", color: "#fff",
            display: "grid", placeItems: "center", fontSize: 10,
          }}>2</span>
        </a>
      </div>
    </header>
  );
}
