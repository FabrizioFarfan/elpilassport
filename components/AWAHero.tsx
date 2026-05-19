"use client";
import { useEffect, useRef } from "react";
import { Shoe } from "@/components/Shoe";

export function AWAHero() {
  const shoeRef  = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf: number;
    const target = { x: 0, y: 0 };
    const curr   = { x: 0, y: 0 };

    const onMove = (e: MouseEvent) => {
      if (!stageRef.current) return;
      const r = stageRef.current.getBoundingClientRect();
      target.x = (e.clientX - r.left) / r.width  - 0.5;
      target.y = (e.clientY - r.top)  / r.height - 0.5;
    };

    const onScroll = () => {
      if (shoeRef.current)
        shoeRef.current.style.setProperty("--sy", window.scrollY * 0.2 + "px");
    };

    const loop = () => {
      curr.x += (target.x - curr.x) * 0.08;
      curr.y += (target.y - curr.y) * 0.08;
      if (shoeRef.current) {
        const tx = curr.x * 18;
        const ty = curr.y * 14;
        const rx = -curr.y * 16;
        const ry =  curr.x * 22;
        shoeRef.current.style.transform =
          `translate(${tx}px, calc(var(--sy,0px) * -0.3 + ${ty}px)) rotateX(${rx}deg) rotateY(${ry}deg)`;
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <section className="awa-hero">
      <div className="awa-hero-grid">
        <h1 className="awa-hero-type">
          <span className="lh"><span>Originali.</span></span>
          <span className="lh"><span><em>Da Milano.</em></span></span>
          <span className="lh"><span>A Ica.</span></span>
        </h1>
        <div className="awa-hero-shoe-stage" ref={stageRef} data-cursor="image">
          <div className="awa-hero-shoe-wrap">
            <div className="awa-hero-shoe-inner" ref={shoeRef}>
              <Shoe palette="cream" />
            </div>
          </div>
          <div className="awa-hero-corner-tl">
            REF · ASX-001<br />
            STK · LIMITADO<br />
            ROT · 3D LIVE
          </div>
        </div>
      </div>
      <div className="awa-hero-meta-bl">
        <span>EST. 2024 · ICA, PERÚ</span>
        <span>IMPORT 100% · MILANO ↔ ICA</span>
        <span>CURRENT DROP / 003</span>
      </div>
      <div className="awa-hero-scroll">
        <span>SCROLL</span>
      </div>
    </section>
  );
}
