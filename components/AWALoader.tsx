"use client";
import { useState, useEffect } from "react";

export function AWALoader() {
  const [n,       setN]       = useState(0);
  const [done,    setDone]    = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (sessionStorage.getItem("awa-loaded")) { setVisible(false); return; }

    let t: ReturnType<typeof setInterval>;
    const tick = () => {
      setN((v) => {
        const inc = v < 60 ? 2 + Math.random() * 3 : v < 92 ? 1 + Math.random() * 2 : 0.5;
        const next = Math.min(100, v + inc);
        if (next >= 100) {
          clearInterval(t);
          setTimeout(() => setDone(true), 350);
          setTimeout(() => {
            sessionStorage.setItem("awa-loaded", "1");
            setVisible(false);
          }, 1400);
          return 100;
        }
        return next;
      });
    };
    t = setInterval(tick, 60);
    return () => clearInterval(t);
  }, []);

  if (!visible) return null;

  return (
    <div className={`awa-loader${done ? " done" : ""}`}>
      <div className="awa-loader-top">
        <div className="awa-loader-brand">PILAS·SPORT</div>
        <div className="awa-loader-status">
          Caricamento in corso<br />Curating from Milano
        </div>
      </div>
      <div className="awa-loader-bottom">
        <div className="awa-loader-num">{String(Math.floor(n)).padStart(3, "0")}</div>
        <div className="awa-loader-meta">
          Awwwards Edition<br />
          v 2.6.26<br />
          — Ica, Perú
        </div>
      </div>
    </div>
  );
}
