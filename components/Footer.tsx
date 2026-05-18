const COLUMNS = [
  { title: "Tienda", items: ["Hombre", "Mujer", "Drops", "Sale", "Gift card"] },
  { title: "Ayuda",  items: ["Talles", "Envíos", "Cambios", "Garantía", "Contacto"] },
  { title: "Más",   items: ["Journal", "Eventos", "Newsletter", "Trabaja con nosotros"] },
];

export function Footer() {
  return (
    <footer style={{ padding: "48px 40px 28px", background: "var(--bg)" }}>
      <div style={{
        display: "grid",
        gridTemplateColumns: "1.4fr 1fr 1fr 1fr",
        gap: 30,
        paddingBottom: 36,
        borderBottom: "1px solid var(--line)",
      }}>
        {/* Brand column */}
        <div>
          <div className="display" style={{ fontSize: 48, letterSpacing: "-.03em" }}>Pilas Sport.</div>
          <p style={{ maxWidth: 340, marginTop: 14, color: "var(--ink-2)" }}>
            Av. Grau 145, Ica. Lun–Sáb 10–20h.{" "}
            <span className="mono">@pilassport</span>
          </p>
        </div>

        {COLUMNS.map((col) => (
          <div key={col.title}>
            <div className="mono" style={{ color: "var(--muted)", marginBottom: 14 }}>{col.title}</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {col.items.map((item) => (
                <a key={item} href="#" className="ulink">{item}</a>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mono" style={{
        display: "flex", justifyContent: "space-between",
        marginTop: 20, color: "var(--muted)",
      }}>
        <span>© 2026 PILAS SPORT SAC · RUC 20601456789</span>
        <span>HECHO EN ICA · CAFEÍNA Y CARGA</span>
      </div>
    </footer>
  );
}
