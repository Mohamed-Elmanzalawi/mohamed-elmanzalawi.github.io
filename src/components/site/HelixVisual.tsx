/**
 * Abstract genomic visual: a double-helix ladder morphing into data points.
 * Pure SVG, subtle animation, no images.
 */
export function HelixVisual({ className }: { className?: string }) {
  const points = Array.from({ length: 34 }, (_, i) => {
    const x = 20 + i * 13;
    const phase = (i / 34) * Math.PI * 4;
    const y1 = 150 + Math.sin(phase) * 62;
    const y2 = 150 - Math.sin(phase) * 62;
    return { x, y1, y2, i };
  });

  return (
    <svg
      viewBox="0 0 480 300"
      className={className}
      role="img"
      aria-label="Abstract double helix resolving into a data scatter"
      fill="none"
    >
      <defs>
        <linearGradient id="helixStroke" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.25" />
          <stop offset="55%" stopColor="var(--color-helix)" stopOpacity="0.9" />
          <stop offset="100%" stopColor="var(--color-teal)" stopOpacity="0.35" />
        </linearGradient>
      </defs>

      <path
        d={`M ${points.map((p) => `${p.x} ${p.y1}`).join(" L ")}`}
        stroke="url(#helixStroke)"
        strokeWidth="1.5"
      />
      <path
        d={`M ${points.map((p) => `${p.x} ${p.y2}`).join(" L ")}`}
        stroke="url(#helixStroke)"
        strokeWidth="1.5"
      />

      {points.map((p) => (
        <line
          key={`r-${p.i}`}
          x1={p.x}
          y1={p.y1}
          x2={p.x}
          y2={p.y2}
          stroke="var(--color-helix)"
          strokeWidth="0.8"
          opacity={p.i > 20 ? 0.12 : 0.32}
        />
      ))}

      {points.map((p) => (
        <g key={`d-${p.i}`}>
          <circle
            cx={p.x}
            cy={p.y1}
            r={p.i > 18 ? 2.6 : 1.6}
            fill={p.i % 3 === 0 ? "var(--color-teal)" : "var(--color-primary)"}
            opacity={p.i > 18 ? 0.85 : 0.5}
            style={{
              animation: `float-soft ${4 + (p.i % 5)}s ease-in-out ${p.i * 0.08}s infinite`,
            }}
          />
          <circle
            cx={p.x}
            cy={p.y2}
            r={p.i > 22 ? 2.2 : 1.4}
            fill="var(--color-helix)"
            opacity={p.i > 22 ? 0.7 : 0.35}
          />
        </g>
      ))}

      <path
        d="M 20 274 H 460"
        stroke="var(--color-teal)"
        strokeWidth="1.2"
        strokeDasharray="6 10"
        opacity="0.5"
        style={{ animation: "dash-flow 14s linear infinite" }}
      />
      <path
        d="M 20 26 H 460"
        stroke="var(--color-primary)"
        strokeWidth="1.2"
        strokeDasharray="4 12"
        opacity="0.35"
        style={{ animation: "dash-flow 20s linear infinite" }}
      />
    </svg>
  );
}
