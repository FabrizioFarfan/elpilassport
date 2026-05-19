export function TiendaFisica() {
  return (
    <section id="tienda-fisica">
      <div className="tienda">
        {/* Left: photo + map */}
        <div className="tienda-media">
          <div className="ph ph-dark" style={{ width: "100%", height: "100%" }}>
            <span className="ph-tag">SHOP INTERIOR · ica boutique · 1080×1350</span>
          </div>

          {/* Map mock */}
          <div className="map-mock">
            <div className="map-roads" />
            <div className="map-pin" />
            <div className="map-label">ICA · CENTRO</div>
          </div>
        </div>

        {/* Right: info */}
        <div className="tienda-body">
          <div className="tienda-eyebrow">·· Tienda física · Centro de Ica ··</div>
          <h2>Pasa a probártelas.</h2>
          <p>
            Nuestra boutique está en pleno centro histórico de Ica. Ven a ver
            el stock completo, probarte las tallas, y conversar con quien las
            trajo desde Italia.
          </p>

          <div className="tienda-info">
            <div>
              <div className="tienda-info-label">Dirección</div>
              <div className="tienda-info-val">
                Calle Lima 456<br />
                Centro histórico, Ica
              </div>
            </div>
            <div>
              <div className="tienda-info-label">Horarios</div>
              <div className="tienda-info-val">
                Lun–Sáb · 10:00–20:00<br />
                Dom · 11:00–18:00
              </div>
            </div>
            <div>
              <div className="tienda-info-label">Contacto</div>
              <div className="tienda-info-val">
                +51 956 000 000<br />
                WhatsApp directo
              </div>
            </div>
            <div>
              <div className="tienda-info-label">Desde Lima</div>
              <div className="tienda-info-val">
                Plaza de Armas · 4 min a pie<br />
                Lima · 5h en bus
              </div>
            </div>
          </div>

          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <a
              href="https://maps.google.com/?q=Ica,Peru"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg"
            >
              Cómo llegar
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M9 4 3 6v14l6-2 6 2 6-2V4l-6 2-6-2Z"/>
                <path d="M9 4v14M15 6v14"/>
              </svg>
            </a>
            <a
              href="https://wa.me/51956000000"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-lg"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
