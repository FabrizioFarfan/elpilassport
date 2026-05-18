type SneakerProps = {
  angle?: "a" | "b";
  tone?: "red" | "blue" | "bone" | "onyx" | "flash";
  flip?: boolean;
};

const PALETTES = {
  red:   { sole: "#0A0A0A", upper: "#E2231A", accent: "#1F2A8E", laces: "#FBF9F4" },
  blue:  { sole: "#0A0A0A", upper: "#1F2A8E", accent: "#E2231A", laces: "#FBF9F4" },
  bone:  { sole: "#0A0A0A", upper: "#E8E2D3", accent: "#E2231A", laces: "#0A0A0A" },
  onyx:  { sole: "#1F2A8E", upper: "#141414", accent: "#E2231A", laces: "#E8E2D3" },
  flash: { sole: "#0A0A0A", upper: "#FBF9F4", accent: "#1F2A8E", laces: "#E2231A" },
};

export function Sneaker({ angle = "a", tone = "red", flip = false }: SneakerProps) {
  const p = PALETTES[tone] ?? PALETTES.red;
  const isB = angle === "b";

  return (
    <svg
      viewBox="0 0 320 200"
      preserveAspectRatio="xMidYMid meet"
      style={{ width: "100%", height: "100%", transform: flip ? "scaleX(-1)" : "none" }}
    >
      <ellipse cx="160" cy="178" rx="120" ry="6" fill="rgba(0,0,0,.25)" />

      <path
        d={isB
          ? "M40,150 C40,110 90,70 160,68 C220,68 260,90 280,118 C290,130 290,150 280,160 L48,160 C42,160 40,158 40,150 Z"
          : "M44,150 C44,118 70,90 130,80 C190,72 240,90 270,115 C285,128 286,150 276,158 L52,158 C46,158 44,156 44,150 Z"}
        fill={p.upper}
      />

      <path
        d={isB
          ? "M260,118 C275,130 282,148 268,160 L220,160 L225,118 Z"
          : "M250,118 C268,128 280,148 268,160 L218,160 L226,118 Z"}
        fill={p.accent}
      />

      <path
        d="M30,160 C30,156 36,154 50,154 L282,154 C292,154 296,158 296,164 C296,172 286,178 270,178 L52,178 C36,178 30,170 30,160 Z"
        fill={p.sole}
      />
      <rect x="30" y="160" width="266" height="2.5" fill={p.upper} opacity=".4" />

      <path
        d={isB
          ? "M40,150 C40,138 50,128 64,124 L110,118 L110,158 L48,158 C42,158 40,156 40,150 Z"
          : "M44,150 C44,138 54,128 70,122 L120,116 L120,158 L52,158 C46,158 44,156 44,150 Z"}
        fill={p.sole}
        opacity={isB ? 0.85 : 0.92}
      />

      {[0, 1, 2, 3, 4].map((i) => (
        <rect
          key={i}
          x={isB ? 130 + i * 14 : 134 + i * 14}
          y={92 + i * 6}
          width={isB ? 50 - i * 4 : 46 - i * 4}
          height="3"
          rx="1.5"
          fill={p.laces}
        />
      ))}

      <path
        d={isB
          ? "M118,150 C150,128 200,118 254,128"
          : "M118,148 C150,120 210,110 256,124"}
        stroke={p.accent}
        strokeWidth="9"
        fill="none"
        strokeLinecap="round"
      />

      {[0, 1, 2, 3].map((i) => (
        <circle
          key={i}
          cx={isB ? 138 + i * 14 : 142 + i * 14}
          cy={96 + i * 6.5}
          r="2"
          fill={p.sole}
        />
      ))}
    </svg>
  );
}
