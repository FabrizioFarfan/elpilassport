"use client";
import { useEffect } from "react";

export function Cursor() {
  useEffect(() => {
    const dot  = document.querySelector<HTMLElement>(".cursor-dot");
    const ring = document.querySelector<HTMLElement>(".cursor-ring");
    if (!dot || !ring) return;

    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
      dot.style.display  = "none";
      ring.style.display = "none";
      return;
    }

    let mx = window.innerWidth / 2, my = window.innerHeight / 2;
    let rx = mx, ry = my;
    let rafId: number;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX; my = e.clientY;
      dot.style.transform = `translate3d(${mx}px,${my}px,0) translate(-50%,-50%)`;
    };

    const tick = () => {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      ring.style.transform = `translate3d(${rx}px,${ry}px,0) translate(-50%,-50%)`;
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);

    const onOver = (e: MouseEvent) => {
      const t = (e.target as Element).closest("[data-hover], a, button");
      if (!t) return;
      document.body.classList.add("cursor-hover");
      if ((t as HTMLElement).dataset?.hover === "product")
        document.body.classList.add("cursor-product");
    };
    const onOut = (e: MouseEvent) => {
      if (!(e.target as Element).closest("[data-hover], a, button")) return;
      document.body.classList.remove("cursor-hover", "cursor-product");
    };
    const onMagnetic = (e: MouseEvent) => {
      document.querySelectorAll<HTMLElement>("[data-magnetic]").forEach((el) => {
        const r = el.getBoundingClientRect();
        const cx = r.left + r.width / 2, cy = r.top + r.height / 2;
        const dx = e.clientX - cx, dy = e.clientY - cy;
        const dist = Math.hypot(dx, dy);
        const radius = Math.max(r.width, r.height) * 0.9;
        el.style.transform =
          dist < radius
            ? `translate(${dx * (1 - dist / radius) * 0.35}px,${dy * (1 - dist / radius) * 0.35}px)`
            : "";
      });
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousemove", onMagnetic);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout",  onOut);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousemove", onMagnetic);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout",  onOut);
    };
  }, []);

  return null;
}
