"use client";
import { useEffect, useState } from "react";
import { BRANDS } from "@/lib/data";
import { Instagram, Tiktok, Whatsapp, Arrow } from "@/components/icons";

export function AWAFooter() {
  const [clock, setClock] = useState("");

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const utc = now.getTime() + now.getTimezoneOffset() * 60000;
      const ica = new Date(utc + -5 * 3600000);
      setClock(
        `${String(ica.getHours()).padStart(2, "0")}:${String(ica.getMinutes()).padStart(2, "0")}:${String(ica.getSeconds()).padStart(2, "0")}`
      );
    };
    tick();
    const t = setInterval(tick, 1000);
    return () => clearInterval(t);
  }, []);

  return (
    <footer className="awa-foot">
      <div className="awa-foot-grid">
        {/* Brand col */}
        <div>
          <div style={{ fontFamily: "var(--awa-display)", fontSize: 28, textTransform: "uppercase", letterSpacing: "0.02em", marginBottom: 18 }}>
            PILAS<span style={{ color: "var(--awa-red)" }}>·</span>SPORT
          </div>
          <p className="awa-foot-tagline">&ldquo;Made in Ica, con materiales de Milano.&rdquo;</p>
          <div style={{ display: "flex", gap: 14, marginTop: 24 }}>
            <a className="nav-icon" style={{ background: "rgba(255,255,255,0.06)" }}><Instagram /></a>
            <a className="nav-icon" style={{ background: "rgba(255,255,255,0.06)" }}><Tiktok /></a>
            <a className="nav-icon" style={{ background: "rgba(255,255,255,0.06)" }}><Whatsapp /></a>
          </div>
          <div className="awa-foot-clock">
            <span>· Hora actual · Ica, PE</span>
            <strong>{clock}</strong>
          </div>
        </div>

        {/* Shop */}
        <div>
          <h4>Shop</h4>
          <ul>
            <li><a href="/tienda?cat=hombre">Hombre</a></li>
            <li><a href="/tienda?cat=mujer">Mujer</a></li>
            <li><a href="/tienda?drops=true">Novedades</a></li>
            <li><a href="/tienda?limitada=true">Limitate</a></li>
            <li><a href="/tienda">Outlet</a></li>
          </ul>
        </div>

        {/* Brands */}
        <div>
          <h4>Marche</h4>
          <ul>
            {BRANDS.slice(0, 5).map((b) => (
              <li key={b.id}><a href={`/tienda?brand=${b.id}`}>{b.name}</a></li>
            ))}
          </ul>
        </div>

        {/* Store */}
        <div>
          <h4>Store</h4>
          <ul>
            <li><a href="/#tienda-fisica">Tienda Ica</a></li>
            <li><a href="/#tienda-fisica">Cómo llegar</a></li>
            <li><a href="/#tienda-fisica">Horarios</a></li>
            <li><a href="https://wa.me/51956000000">WhatsApp</a></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4>Legali</h4>
          <ul>
            <li><a href="#">Envíos</a></li>
            <li><a href="#">Devoluciones</a></li>
            <li><a href="#">Garantía</a></li>
            <li><a href="#">Privacidad</a></li>
            <li><a href="#">Libro de reclamaciones</a></li>
          </ul>
        </div>
      </div>

      <div className="awa-foot-wordmark">PILASSPORT</div>

      <div className="awa-foot-bottom">
        <div>© 2026 · Made in Ica · Forged in Milano</div>
        <div style={{ display: "flex", gap: 20 }}>
          <a href="#">Cookies</a>
          <a href="#">Términos</a>
          <span>v2.6 · Awwwards edition</span>
        </div>
      </div>
    </footer>
  );
}
