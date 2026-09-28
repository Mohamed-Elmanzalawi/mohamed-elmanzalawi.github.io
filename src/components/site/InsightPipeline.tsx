/**
 * A four-stage pipeline — sample, process, analyze, insight — with pulses
 * of data traveling along the line and each node lighting up as the flow
 * reaches it. A literal picture of turning biological data into insight.
 * Pure SVG + CSS/SMIL animation, respects prefers-reduced-motion (handled
 * in styles.css).
 */
const STAGES = [
  { key: "sample", x: 60, label: "sample" },
  { key: "process", x: 180, label: "process" },
  { key: "analyze", x: 300, label: "analyze" },
  { key: "insight", x: 420, label: "insight" },
];

const NODE_Y = 140;
const PATH_D = "M 60 140 H 420";

// One full lap: the dot pauses at each node for an equal 20% of the cycle,
// with short travels between. keyPoints are fractions along PATH_D
// (0 = sample, 0.333 = process, 0.667 = analyze, 1 = insight); keyTimes are
// fractions of DUR. Kept in sync with the CSS `node-pulse` keyframe, which
// is also shaped as "highlighted for the first 20% of its cycle".
const DUR = 6;
const KEY_POINTS = "0;0;0.333;0.333;0.667;0.667;1;1";
const KEY_TIMES = "0;0.2;0.2667;0.4667;0.5333;0.7333;0.8;1";
const PAUSE_START_FRACTIONS = [0, 0.2667, 0.5333, 0.8];
const PAUSE_DELAYS = PAUSE_START_FRACTIONS.map((f) => f * DUR);

function StageIcon({ stage, cx, cy }: { stage: string; cx: number; cy: number }) {
  if (stage === "sample") {
    // a test tube — a literal, unambiguous "biological sample"
    return (
      <>
        <path
          d={`M ${cx - 6} ${cy - 13} V ${cy + 5} A 6 6 0 0 0 ${cx + 6} ${cy + 5} V ${cy - 13}`}
          stroke="var(--color-helix)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <line x1={cx - 6} y1={cy - 13} x2={cx + 6} y2={cy - 13} stroke="var(--color-helix)" strokeWidth="2" strokeLinecap="round" />
        <line x1={cx - 5.6} y1={cy - 1} x2={cx + 5.6} y2={cy - 1} stroke="var(--color-helix)" strokeWidth="1.4" opacity="0.55" />
        <circle cx={cx - 2} cy={cy + 1.5} r="1.3" fill="var(--color-helix)" opacity="0.75" />
        <circle cx={cx + 2.3} cy={cy + 2.8} r="1" fill="var(--color-helix)" opacity="0.75" />
      </>
    );
  }
  if (stage === "process") {
    // a funnel — data being filtered/processed
    return (
      <path
        d={`M ${cx - 13} ${cy - 11} L ${cx + 13} ${cy - 11} L ${cx + 4} ${cy + 2} L ${cx + 4} ${cy + 12} L ${cx - 4} ${cy + 12} L ${cx - 4} ${cy + 2} Z`}
        stroke="var(--color-primary)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    );
  }
  if (stage === "analyze") {
    const bars = [
      { dx: -11, h: 12 },
      { dx: -2, h: 19 },
      { dx: 7, h: 25 },
    ];
    return (
      <>
        <line x1={cx - 13} y1={cy + 13} x2={cx + 13} y2={cy + 13} stroke="var(--color-teal)" strokeWidth="1.3" opacity="0.4" />
        {bars.map((b, i) => (
          <rect
            key={i}
            x={cx + b.dx}
            y={cy + 13 - b.h}
            width="6"
            height={b.h}
            rx="1.5"
            fill="var(--color-teal)"
            opacity="0.85"
          />
        ))}
      </>
    );
  }
  // insight — a lightbulb
  return (
    <>
      <circle cx={cx} cy={cy - 3} r="9" stroke="var(--color-teal)" strokeWidth="2" fill="none" />
      <path d={`M ${cx - 3} ${cy + 2} V ${cy + 6}`} stroke="var(--color-teal)" strokeWidth="2" strokeLinecap="round" />
      <path d={`M ${cx + 3} ${cy + 2} V ${cy + 6}`} stroke="var(--color-teal)" strokeWidth="2" strokeLinecap="round" />
      <line x1={cx - 3} y1={cy + 10} x2={cx + 3} y2={cy + 10} stroke="var(--color-teal)" strokeWidth="2" strokeLinecap="round" />
      <line x1={cx - 2.3} y1={cy + 13} x2={cx + 2.3} y2={cy + 13} stroke="var(--color-teal)" strokeWidth="2" strokeLinecap="round" />
    </>
  );
}

export function InsightPipeline({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 90 480 130"
      className={className}
      role="img"
      aria-label="Animated diagram: biological samples flowing through processing and analysis into insight"
      fill="none"
    >
      <path d={PATH_D} stroke="var(--color-border)" strokeWidth="1.5" strokeDasharray="1 7" opacity="0.8" />

      <circle r="4.5" fill="var(--color-teal)">
        <animateMotion
          dur={`${DUR}s`}
          repeatCount="indefinite"
          path={PATH_D}
          calcMode="linear"
          keyPoints={KEY_POINTS}
          keyTimes={KEY_TIMES}
        />
        <animate
          attributeName="opacity"
          values="0;1;1;0"
          keyTimes="0;0.05;0.95;1"
          dur={`${DUR}s`}
          repeatCount="indefinite"
        />
      </circle>

      {STAGES.map((s, i) => (
        <g key={s.key}>
          <circle
            cx={s.x}
            cy={NODE_Y}
            r="27"
            fill="var(--color-card)"
            stroke="var(--color-border)"
            strokeWidth="1.5"
            style={{
              transformBox: "fill-box",
              transformOrigin: "center",
              // delays line up with when the traveling dot arrives and pauses at this node
              animation: `node-pulse ${DUR}s ease-in-out ${PAUSE_DELAYS[i]}s infinite`,
            }}
          />
          <StageIcon stage={s.key} cx={s.x} cy={NODE_Y} />
          <text
            x={s.x}
            y={NODE_Y + 50}
            textAnchor="middle"
            fontFamily="var(--font-mono)"
            fontSize="10"
            letterSpacing="1.5"
            fill="var(--color-muted-foreground)"
            style={{ textTransform: "uppercase" }}
          >
            {s.label}
          </text>
        </g>
      ))}
    </svg>
  );
}
