"use client";
import { useRef, useEffect, useState } from "react";
import { Arrow } from "@/components/icons";

function useReveal(threshold = 0.15) {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    const el  = ref.current;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add("in"); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return ref;
}

export function AWANews() {
  const [email, setEmail] = useState("");
  const [done,  setDone]  = useState(false);
  const ref = useReveal();

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^\S+@\S+\.\S+$/.test(email)) return;
    setDone(true);
  };

  return (
    <section className="awa-news awa-reveal-up" ref={ref as React.RefObject<HTMLElement>}>
      <div style={{ fontFamily: "var(--awa-mono)", fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(242,240,235,0.5)", marginBottom: 24 }}>
        — Newsletter · drops · restocks ·
      </div>
      <h2>Entra<br />en la <em>lista.</em></h2>
      <p style={{ fontFamily: "var(--awa-serif)", fontStyle: "italic", fontSize: 18, color: "rgba(242,240,235,0.7)", margin: "0 auto", maxWidth: 480 }}>
        Drops, restocks y precios de preventa antes que cualquier otra persona. Un correo cada dos semanas — palabra de italo-peruano.
      </p>
      {!done ? (
        <form className="awa-news-form" onSubmit={submit}>
          <div className="awa-news-form-row">
            <input
              type="email"
              placeholder="tu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit">Suscríbete <Arrow /></button>
          </div>
          <div className="awa-news-disclaimer">Al suscribirte aceptas nuestra política de privacidad</div>
        </form>
      ) : (
        <div style={{ marginTop: 60 }}>
          <div style={{ fontFamily: "var(--awa-display)", fontSize: 48, textTransform: "uppercase", marginBottom: 12 }}>
            Sei dentro.
          </div>
          <p style={{ fontFamily: "var(--awa-serif)", fontStyle: "italic", color: "rgba(242,240,235,0.7)" }}>
            Revisa tu inbox — código{" "}
            <span style={{ fontFamily: "var(--awa-mono)", letterSpacing: "0.14em" }}>FIRST-10</span>{" "}
            para tu primera compra.
          </p>
        </div>
      )}
    </section>
  );
}
