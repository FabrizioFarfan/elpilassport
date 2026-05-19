const ITEMS = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6l-8-3Z"/>
        <path d="m9 12 2 2 4-4"/>
      </svg>
    ),
    title: "100% Original Garantizado",
    body: "Cada par viene con factura europea y certificado de autenticidad. Si no es original, te devolvemos el doble.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 17V6h11v11"/>
        <path d="M14 9h4l3 4v4h-7"/>
        <circle cx="7" cy="18" r="2"/>
        <circle cx="17" cy="18" r="2"/>
      </svg>
    ),
    title: "Envíos a todo Perú",
    body: "Lima 24h · provincias 48–72h. Tracking en vivo por WhatsApp. Gratis en compras +S/ 400.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 12a9 9 0 1 0 3-6.7"/>
        <path d="M3 4v5h5"/>
      </svg>
    ),
    title: "Cambios y devoluciones",
    body: "Hasta 14 días para cambiar talla o color. Recoge en tienda o programamos un courier sin costo.",
  },
];

export function TrustStrip() {
  return (
    <section>
      <div className="wrap">
        <div className="trust-grid">
          {ITEMS.map((it) => (
            <div key={it.title} className="trust-item">
              <div className="trust-icon">{it.icon}</div>
              <div>
                <h3>{it.title}</h3>
                <p>{it.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
