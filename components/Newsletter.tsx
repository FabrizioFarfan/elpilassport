"use client";
import { useState } from "react";

export function Newsletter() {
  const [email, setEmail]       = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError]       = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError("Ingresa un email válido");
      return;
    }
    setError("");
    setSubmitted(true);
  }

  return (
    <section className="newsletter">
      <div className="wrap">
        <div className="newsletter-inner">
          <div className="reveal">
            <span className="eyebrow">·· Newsletter ··</span>
            <h2>Entérate antes<br />que nadie.</h2>
            <p>
              Drops, restocks y precios de preventa para suscriptores. Un
              correo cada dos semanas, máximo. Sin spam — palabra de
              italo-peruano.
            </p>
          </div>

          <div className="reveal">
            {submitted ? (
              <div style={{ paddingBlock: "32px 0" }}>
                <div className="display" style={{ fontSize: 32, marginBottom: 10 }}>
                  Estás dentro.
                </div>
                <p style={{ color: "var(--grey-700)", margin: 0 }}>
                  Revisa tu inbox — te mandamos un código{" "}
                  <strong>FIRST-10</strong> para tu primera compra.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="newsletter-form">
                  <input
                    type="email"
                    placeholder="tu@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    aria-label="Email"
                  />
                  <button type="submit">Suscríbete →</button>
                </div>
                {error && (
                  <p style={{ fontFamily: "var(--mono)", fontSize: 10, color: "var(--red-it)", marginTop: 10, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                    {error}
                  </p>
                )}
                <div className="newsletter-disclaimer">
                  Al suscribirte aceptas nuestra política de privacidad
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
