"use client";
import { useEffect, useRef } from "react";

export function AWACursor() {
  const dotRef  = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const state   = useRef({ x: 0, y: 0, rx: 0, ry: 0, dx: 0, dy: 0 });

  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    let raf: number;
    const loop = () => {
      const s = state.current;
      s.dx += (s.x - s.dx) * 0.6;
      s.dy += (s.y - s.dy) * 0.6;
      s.rx += (s.x - s.rx) * 0.16;
      s.ry += (s.y - s.ry) * 0.16;
      if (dotRef.current)
        dotRef.current.style.transform = `translate(${s.dx}px, ${s.dy}px) translate(-50%,-50%)`;
      if (ringRef.current)
        ringRef.current.style.transform = `translate(${s.rx}px, ${s.ry}px) translate(-50%,-50%)`;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    const onMove = (e: MouseEvent) => {
      state.current.x = e.clientX;
      state.current.y = e.clientY;
    };
    const onOver = (e: MouseEvent) => {
      const t = e.target as Element | null;
      if (!t || !ringRef.current) return;
      const ring = ringRef.current;
      ring.classList.remove("hover", "image", "text");
      if (t.closest("[data-cursor='image']"))                                ring.classList.add("image");
      else if (t.closest("input, textarea"))                                 ring.classList.add("text");
      else if (t.closest("a, button, [role='button'], [data-cursor='hover']")) ring.classList.add("hover");
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
    };
  }, []);

  return (
    <>
      <div ref={ringRef} className="awa-cursor-ring" />
      <div ref={dotRef}  className="awa-cursor-dot"  />
    </>
  );
}
