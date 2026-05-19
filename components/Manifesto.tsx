export function Editorial() {
  return (
    <section className="section" style={{ background: "var(--bone-warm)" }}>
      <div className="wrap">
        <div className="edito">
          {/* Media */}
          <div className="edito-media reveal">
            <div className="ph ph-dark" style={{ width: "100%", height: "100%" }}>
              <span className="ph-tag">EDITORIAL · founder in Milano · 1080×1440 portrait</span>
            </div>
            <div style={{
              position: "absolute", left: 18, top: 18,
              padding: "8px 12px",
              background: "var(--bone)",
              fontFamily: "var(--mono)", fontSize: 10,
              letterSpacing: "0.14em", textTransform: "uppercase",
            }}>
              Milano · Via Tortona · Mar 2026
            </div>
          </div>

          {/* Body */}
          <div className="edito-body reveal">
            <span className="eyebrow">·· Nuestra historia ··</span>
            <h2>De Milán<br />a Ica,<br />sin intermediarios.</h2>

            <p>
              Después de cinco años viviendo en Italia, abrí PilasSport en el
              centro de Ica con una idea simple: traer las zapatillas que la
              gente buscaba sin tener que viajar a Lima ni jugársela con webs
              random.
            </p>
            <p>
              Cada par lo elijo personalmente en tiendas autorizadas y boutiques
              europeas. Llegan en mi maleta, no en un container con réplicas.
              Eso es lo que nos diferencia.
            </p>

            <blockquote className="edito-quote">
              "Lo que ves en la web es lo mismo que ves en mi tienda.
              Y lo mismo que vi yo en Italia."
            </blockquote>

            <div className="edito-sign">
              <div className="edito-sign-avatar">
                <div className="ph ph-dark" style={{ width: "100%", height: "100%" }} />
              </div>
              <div>
                <div className="edito-sign-name">[Nombre del fundador]</div>
                <div className="edito-sign-role">Fundador · PilasSport</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { Editorial as Manifesto };
