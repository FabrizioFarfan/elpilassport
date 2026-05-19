const COLUMNS = [
  {
    title: "Comprar",
    links: [
      { label: "Hombre",             href: "/tienda?cat=hombre"  },
      { label: "Mujer",              href: "/tienda?cat=mujer"   },
      { label: "Novedades",          href: "/tienda?drops=true"  },
      { label: "Ediciones limitadas",href: "/tienda?limitada=true"},
      { label: "Outlet",             href: "/tienda?outlet=true" },
    ],
  },
  {
    title: "Soporte",
    links: [
      { label: "Guía de tallas",          href: "/tallas"      },
      { label: "Envíos y entregas",        href: "/envios"      },
      { label: "Cambios y devoluciones",   href: "/cambios"     },
      { label: "Garantía de originalidad", href: "/garantia"    },
      { label: "FAQ",                      href: "/faq"         },
    ],
  },
  {
    title: "PilasSport",
    links: [
      { label: "Nuestra historia",    href: "/historia"  },
      { label: "Tienda física en Ica",href: "/#tienda-fisica"},
      { label: "Blog",                href: "/journal"   },
      { label: "Trabaja con nosotros",href: "/jobs"      },
      { label: "Contacto",            href: "/contacto"  },
    ],
  },
];

const PAYMENT_METHODS = ["VISA", "MC", "AMEX", "YAPE", "PLIN", "BCP"];

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-grid">
          {/* Brand column */}
          <div>
            <div className="display" style={{ fontSize: 28, marginBottom: 16 }}>
              PILAS<span className="dot-accent">·</span>SPORT
            </div>
            <p style={{ fontSize: 14, color: "rgba(245,242,236,.7)", lineHeight: 1.6, margin: 0, maxWidth: 280 }}>
              Zapatillas originales importadas de Europa. Curaduría desde Ica
              para todo Perú.
            </p>

            {/* Social */}
            <div className="footer-social">
              <a href="https://instagram.com/pilassport" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="3" y="3" width="18" height="18" rx="4"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17" cy="7" r="1" fill="currentColor"/>
                </svg>
              </a>
              <a href="https://tiktok.com/@pilassport" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M14 4v10a4 4 0 1 1-4-4"/>
                  <path d="M14 4c0 2.5 2 4.5 5 4.5"/>
                </svg>
              </a>
              <a href="https://wa.me/51956000000" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M20 12a8 8 0 1 1-3.5-6.6L20 4l-1.4 3.5A8 8 0 0 1 20 12Z"/>
                  <path d="M8.5 9c0 4 2.5 6.5 6.5 6.5"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Nav columns */}
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h4>{col.title}</h4>
              <ul>
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href}>{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact column */}
          <div>
            <h4>Contacto</h4>
            <ul>
              <li style={{ fontSize: 14, color: "rgba(245,242,236,.65)", lineHeight: 1.6 }}>
                Calle Lima 456<br />
                Centro histórico<br />
                Ica, Perú
              </li>
              <li style={{ marginTop: 12 }}>
                <a href="tel:+51956000000">+51 956 000 000</a>
              </li>
              <li><a href="mailto:hola@pilassport.pe">hola@pilassport.pe</a></li>
            </ul>

            <div style={{ marginTop: 22 }}>
              <div style={{ fontFamily: "var(--mono)", fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(245,242,236,.4)", marginBottom: 10 }}>
                Aceptamos
              </div>
              <div className="footer-pay">
                {PAYMENT_METHODS.map((m) => (
                  <span key={m}>{m}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <div>© 2026 PilasSport. Todos los derechos reservados.</div>
          <div className="footer-bottom-links">
            <a href="/terminos">Términos</a>
            <a href="/privacidad">Privacidad</a>
            <a href="/cookies">Cookies</a>
            <a href="/libro-reclamaciones">Libro de reclamaciones</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
