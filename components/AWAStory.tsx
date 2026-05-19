"use client";
import { useRef, useEffect, useState } from "react";

function useReveal(threshold = 0.18) {
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

function Counter({ target, suffix = "", duration = 1600 }: { target: number; suffix?: string; duration?: number }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    const el  = ref.current;
    const obs = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      obs.disconnect();
      const start = performance.now();
      const tick  = (t: number) => {
        const p     = Math.min(1, (t - start) / duration);
        const eased = 1 - Math.pow(1 - p, 4);
        setVal(Math.floor(target * eased));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, { threshold: 0.4 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [target, duration]);
  return (
    <span ref={ref}>
      {val.toLocaleString("es-PE")}
      {suffix && <span className="unit">{suffix}</span>}
    </span>
  );
}

export function AWAStory() {
  const ref = useReveal();
  return (
    <section className="awa-story">
      <div className="awa-story-eyebrow">Capitolo 01 · L&apos;anima della marca</div>
      <div className="awa-story-grid awa-reveal-up" ref={ref as React.RefObject<HTMLDivElement>}>
        <h2 className="awa-story-title">
          Cada par<br />cruza<br /><em>un océano</em><br />antes que<br />tu puerta.
        </h2>
        <div className="awa-story-col">
          <p>Después de cinco años viviendo en Italia, abrí PilasSport en el centro de Ica con una idea simple: traer las zapatillas que la gente buscaba sin tener que viajar a Lima ni jugársela con webs random.</p>
          <p>Cada par lo elijo personalmente en tiendas autorizadas y boutiques europeas. Llegan a mi maleta, no a un container con réplicas. Eso es lo que nos diferencia — y eso es lo que defendemos.</p>
          <p>Esta es una boutique italiana en territorio peruano. Ni más, ni menos. Curaduría a mano, sin trampas, sin atajos.</p>
        </div>
      </div>

      <div className="awa-story-images">
        <div className="awa-story-img">
          <div className="ph ph-dark" style={{ width: "100%", height: "100%" }}>
            <span className="ph-tag">MILANO · Via Tortona</span>
          </div>
        </div>
        <div className="awa-story-img">
          <div className="ph ph-dark" style={{ width: "100%", height: "100%" }}>
            <span className="ph-tag">FOUNDER PORTRAIT · 1:1</span>
          </div>
        </div>
        <div className="awa-story-img">
          <div className="ph ph-dark" style={{ width: "100%", height: "100%" }}>
            <span className="ph-tag">ICA · interior boutique</span>
          </div>
        </div>
      </div>

      <div className="awa-pullquote">
        &ldquo;Lo que ves en la web es lo mismo<br />que vi yo en <em>Milano.</em>&rdquo;
      </div>

      <div className="awa-counters">
        <div>
          <div className="awa-counter-val"><Counter target={11248} suffix=" km" /></div>
          <div className="awa-counter-label">Por par recorridos</div>
        </div>
        <div>
          <div className="awa-counter-val"><Counter target={1284} /></div>
          <div className="awa-counter-label">Pares importados</div>
        </div>
        <div>
          <div className="awa-counter-val"><Counter target={8} /></div>
          <div className="awa-counter-label">Marcas premium</div>
        </div>
        <div>
          <div className="awa-counter-val"><Counter target={100} suffix=" %" /></div>
          <div className="awa-counter-label">Originali · garantito</div>
        </div>
      </div>
    </section>
  );
}
