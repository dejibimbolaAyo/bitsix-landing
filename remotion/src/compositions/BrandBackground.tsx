import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

const COLORS = {
  navy: "#0e1b3d",
  amber: "#f59e0b",
  amberLight: "#fbbf24",
  white: "#ffffff",
};

const MorphingShape: React.FC<{ frame: number; cx: number; cy: number; size: number; delay: number }> = ({
  frame,
  cx,
  cy,
  size,
  delay,
}) => {
  const progress = Math.max(0, Math.min(1, (frame - delay) / 60));
  const p = progress < 0.5 ? progress * 2 : 2 - progress * 2;

  const borderRadius = interpolate(p, [0, 1], [20, 50]);
  const rotation = interpolate(frame * 0.5 + delay, [0, 360], [0, 360]);
  const opacity = interpolate(Math.sin(frame * 0.02 + delay * 0.1), [-1, 1], [0.05, 0.12]);

  return (
    <div
      style={{
        position: "absolute",
        left: `${cx}%`,
        top: `${cy}%`,
        width: size,
        height: size,
        borderRadius,
        border: `1px solid ${COLORS.amber}`,
        opacity,
        transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
      }}
    />
  );
};

export const BrandBackground: React.FC = () => {
  const frame = useCurrentFrame();

  const shapes = [
    { cx: 15, cy: 20, size: 180, delay: 0 },
    { cx: 85, cy: 15, size: 120, delay: 10 },
    { cx: 75, cy: 80, size: 200, delay: 20 },
    { cx: 25, cy: 75, size: 150, delay: 5 },
    { cx: 50, cy: 50, size: 250, delay: 15 },
    { cx: 90, cy: 55, size: 100, delay: 25 },
  ];

  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.navy, overflow: "hidden" }}>
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `
            radial-gradient(ellipse at 20% 50%, ${COLORS.amber}11 0%, transparent 60%),
            radial-gradient(ellipse at 80% 50%, ${COLORS.amber}08 0%, transparent 60%)
          `,
        }}
      />

      {shapes.map((s, i) => (
        <MorphingShape key={i} frame={frame} cx={s.cx} cy={s.cy} size={s.size} delay={s.delay} />
      ))}

      <div
        style={{
          position: "absolute",
          bottom: "8%",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: 12,
          opacity: interpolate(Math.sin(frame * 0.03), [-1, 1], [0.3, 0.6]),
        }}
      >
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              backgroundColor: COLORS.amber,
              opacity: interpolate(Math.sin(frame * 0.05 + i * 2), [-1, 1], [0.2, 0.8]),
            }}
          />
        ))}
      </div>
    </AbsoluteFill>
  );
};
