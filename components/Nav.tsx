const ANNOUNCEMENT_ITEMS = [
  "Envío gratis a todo Perú en compras +S/ 400",
  "100% Originales · Importadas de Europa",
  "Recoge en tienda · Centro de Ica",
  "Atención WhatsApp +51 956 000 000",
];

const NAV_LINKS = [
  { label: "Hombre",       href: "/tienda?cat=hombre"  },
  { label: "Mujer",        href: "/tienda?cat=mujer"   },
  { label: "Marcas",       href: "/tienda?marcas=true" },
  { label: "Novedades",    href: "/tienda?drops=true"  },
  { label: "Tienda física",href: "/#tienda-fisica"     },
];

export function Nav() {
  return (
    <>
      {/* Announcement */}
      <div className="announcement">
        {ANNOUNCEMENT_ITEMS.map((t, i) => (
          <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: 24 }}>
            {t}
            {i < ANNOUNCEMENT_ITEMS.length - 1 && <span className="dot" />}
          </span>
        ))}
      </div>

      {/* Navbar */}
      <header className="nav">
        <div className="nav-row">
          {/* Logo */}
          <a href="/" className="nav-logo">
            <div className="nav-logo-img">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.jpeg" alt="Pilas Sport logo" />
            </div>
            PILAS<span className="dot-accent">·</span>SPORT
          </a>

          {/* Links */}
          <nav className="nav-links">
            {NAV_LINKS.map((l) => (
              <a key={l.label} href={l.href} className="nav-link">
                {l.label}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="nav-actions">
            <button className="nav-icon" title="Buscar" aria-label="Buscar">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="11" cy="11" r="7"/>
                <path d="m20 20-3.5-3.5"/>
              </svg>
            </button>
            <button className="nav-icon" title="Mi cuenta" aria-label="Mi cuenta">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="8" r="4"/>
                <path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8"/>
              </svg>
            </button>
            <button className="nav-icon" title="Carrito" aria-label="Carrito">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M5 7h14l-1 13H6L5 7Z"/>
                <path d="M9 7V5a3 3 0 0 1 6 0v2"/>
              </svg>
              <span className="nav-badge">0</span>
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
