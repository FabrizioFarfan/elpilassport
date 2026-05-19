import { SHOE_COLORS, type ShoePalette } from "@/lib/data";

type ShoeProps = {
  palette?: ShoePalette;
  size?: number;
  angle?: number;
};

export function Shoe({ palette = "cream", size = 1, angle = 0 }: ShoeProps) {
  const c = SHOE_COLORS[palette] ?? SHOE_COLORS.cream;
  return (
    <div style={{ width: "100%", height: "100%", display: "grid", placeItems: "center", position: "relative", transform: angle ? `rotate(${angle}deg)` : undefined }}>
      <svg
        viewBox="0 0 480 220"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: `${78 * size}%`, maxWidth: "100%" }}
      >
        {/* shadow */}
        <ellipse cx="240" cy="206" rx="180" ry="6" fill="rgba(0,0,0,0.12)" />
        {/* sole */}
        <path d="M30 180 Q30 170 50 168 L420 156 Q450 155 462 168 L462 184 Q462 196 446 196 L52 196 Q30 196 30 184 Z" fill={c.sole} stroke={c.accent} strokeWidth="1.5" />
        {/* sole midline */}
        <path d="M30 180 L462 175" stroke={c.accent} strokeWidth="0.8" opacity="0.4" />
        {/* upper main */}
        <path d="M50 168 Q56 100 130 88 L210 78 Q260 72 290 68 Q330 62 360 78 Q400 92 416 130 L420 156 Q420 162 410 162 L60 168 Q50 170 50 168 Z" fill={c.upper} />
        {/* tongue */}
        <path d="M210 78 Q220 50 248 46 Q268 44 274 64 L268 92 Q258 100 240 100 Q220 100 210 90 Z" fill={c.upper} stroke={c.accent} strokeWidth="0.8" opacity="0.9" />
        {/* toe cap */}
        <path d="M50 168 Q56 130 110 122 L142 118 Q142 158 138 168 Z" fill={c.accent} opacity="0.92" />
        {/* heel counter */}
        <path d="M380 90 Q410 102 416 130 L420 156 L360 162 L362 110 Q368 92 380 90 Z" fill={c.accent} opacity="0.85" />
        {/* eyelets */}
        <g fill={c.sole}>
          <circle cx="200" cy="108" r="3.2" />
          <circle cx="220" cy="100" r="3.2" />
          <circle cx="244" cy="92"  r="3.2" />
          <circle cx="270" cy="86"  r="3.2" />
          <circle cx="296" cy="82"  r="3.2" />
        </g>
        {/* laces */}
        <g stroke={c.lace} strokeWidth="2.6" fill="none" strokeLinecap="round">
          <path d="M200 108 L296 82" />
          <path d="M220 100 L270 86" />
          <path d="M244 92  L296 90" />
        </g>
        {/* brand stripe */}
        <path d="M150 142 Q220 118 320 118 Q360 118 380 130 L370 138 Q330 130 300 132 Q220 138 162 152 Z" fill={c.accent} opacity="0.95" />
        {/* tag */}
        <rect x="380" y="142" width="22" height="8" fill={c.sole} stroke={c.accent} strokeWidth="0.6" />
        {/* perforation dots */}
        <g fill={c.accent} opacity="0.35">
          {[100, 120, 140, 160, 180].map((x, i) => (
            <circle key={i} cx={x} cy={138 + (i % 2) * 4} r="1.4" />
          ))}
        </g>
      </svg>
    </div>
  );
}
