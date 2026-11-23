import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

const COLORS = {
  ink: "#14213d",
  inkSoft: "#576582",
  line: "rgba(20, 33, 61, 0.08)",
  blue: "#3b82f6",
  blueSoft: "#dbeafe",
  amber: "#f59e0b",
  amberSoft: "#fef3c7",
  mint: "#10b981",
  mintSoft: "#d1fae5",
  rose: "#f97316",
  roseSoft: "#ffedd5",
  panel: "rgba(255,255,255,0.96)",
  shadow: "rgba(21, 29, 52, 0.12)",
};

const easeInOut = (value: number) => value * value * (3 - 2 * value);

const ModuleCard: React.FC<{
  title: string;
  accent: string;
  accentSoft: string;
  x: number;
  y: number;
  width: number;
  active: boolean;
  frame: number;
  delay: number;
}> = ({ title, accent, accentSoft, x, y, width, active, frame, delay }) => {
  const float = spring({
    frame: frame - delay,
    fps: 30,
    config: { damping: 200, stiffness: 80, mass: 0.8 },
  });

  return (
    <div
      style={{
        position: "absolute",
        left: x,
        top: y,
        width,
        height: 124,
        padding: 18,
        borderRadius: 28,
        background: COLORS.panel,
        border: `1px solid ${COLORS.line}`,
        boxShadow: `0 26px 60px ${COLORS.shadow}`,
        transform: `translateY(${(1 - float) * 14}px) scale(${active ? 1.02 : 1})`,
      }}
    >
      <div
        style={{
          width: 40,
          height: 40,
          borderRadius: 16,
          background: accentSoft,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 16,
        }}
      >
        <div
          style={{
            width: 14,
            height: 14,
            borderRadius: 999,
            background: accent,
            boxShadow: active ? `0 0 0 8px ${accent}22` : undefined,
          }}
        />
      </div>
      <div
        style={{
          color: COLORS.ink,
          fontSize: 24,
          fontWeight: 700,
          letterSpacing: -0.6,
          marginBottom: 12,
        }}
      >
        {title}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {[0, 1].map((index) => (
          <div
            key={index}
            style={{
              height: 10,
              width: `${index === 0 ? 70 : 54}%`,
              borderRadius: 999,
              background: index === 0 && active ? accentSoft : "rgba(20,33,61,0.08)",
            }}
          />
        ))}
      </div>
    </div>
  );
};

const UnifiedBoard: React.FC<{ progress: number }> = ({ progress }) => {
  const barGrow = easeInOut(progress);
  const heights = [0.42, 0.72, 0.58];

  return (
    <div
      style={{
        position: "absolute",
        right: 44,
        top: 174,
        width: 360,
        height: 372,
        padding: 28,
        borderRadius: 34,
        background: COLORS.panel,
        border: `1px solid ${COLORS.line}`,
        boxShadow: `0 36px 84px ${COLORS.shadow}`,
      }}
    >
      <div
        style={{
          color: COLORS.inkSoft,
          fontSize: 16,
          fontWeight: 700,
          letterSpacing: 2.4,
          textTransform: "uppercase",
          marginBottom: 18,
        }}
      >
        Unified Delivery View
      </div>
      <div
        style={{
          color: COLORS.ink,
          fontSize: 34,
          fontWeight: 700,
          letterSpacing: -1,
          marginBottom: 26,
        }}
      >
        One connected operating layer
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.2fr 0.8fr",
          gap: 18,
          marginBottom: 24,
        }}
      >
        <div
          style={{
            height: 138,
            borderRadius: 24,
            background: "rgba(59,130,246,0.08)",
            padding: 18,
            display: "flex",
            alignItems: "end",
            gap: 12,
          }}
        >
          {heights.map((height, index) => (
            <div
              key={index}
              style={{
                width: 34,
                height: `${24 + height * 82 * barGrow}px`,
                borderRadius: 16,
                background:
                  index === 1
                    ? `linear-gradient(180deg, ${COLORS.amber}, ${COLORS.amberSoft})`
                    : `linear-gradient(180deg, ${COLORS.blue}, ${COLORS.blueSoft})`,
              }}
            />
          ))}
        </div>
        <div
          style={{
            height: 138,
            borderRadius: 24,
            background: "rgba(16,185,129,0.08)",
            padding: 18,
            display: "flex",
            flexDirection: "column",
            gap: 12,
          }}
        >
          {[0, 1, 2].map((index) => (
            <div
              key={index}
              style={{
                height: 18,
                width: `${index === 1 ? 88 : 68}%`,
                borderRadius: 999,
                background: index === 1 ? COLORS.mintSoft : "rgba(20,33,61,0.08)",
              }}
            />
          ))}
        </div>
      </div>
      <div style={{ display: "flex", gap: 12, marginBottom: 18 }}>
        {[COLORS.blueSoft, COLORS.amberSoft, COLORS.mintSoft].map((background, index) => (
          <div
            key={background}
            style={{
              flex: 1,
              height: 56,
              borderRadius: 18,
              background,
              opacity: interpolate(progress, [0, 0.3, 1], [0.65, 0.9, 1]),
              transform: `translateY(${(2 - index) * (1 - progress) * 10}px)`,
            }}
          />
        ))}
      </div>
      <div style={{ display: "flex", gap: 10 }}>
        {[0, 1, 2, 3].map((index) => (
          <div
            key={index}
            style={{
              height: 12,
              flex: index === 1 ? 1.2 : 1,
              borderRadius: 999,
              background: "rgba(20,33,61,0.08)",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export const DigitalTransformationServicesIllustration: React.FC = () => {
  const frame = useCurrentFrame();
  const { durationInFrames, fps } = useVideoConfig();

  const progress = interpolate(frame, [0, durationInFrames * 0.7], [0, 1], {
    extrapolateRight: "clamp",
  });

  const connectors = [
    { from: [178, 212], to: [860, 248], color: COLORS.rose },
    { from: [178, 372], to: [860, 360], color: COLORS.amber },
    { from: [178, 532], to: [860, 470], color: COLORS.mint },
  ];

  return (
    <AbsoluteFill style={{ backgroundColor: "transparent", fontFamily: "Comfortaa, sans-serif" }}>
      <AbsoluteFill
        style={{
          background:
            "radial-gradient(circle at 18% 24%, rgba(245,158,11,0.12), transparent 32%), radial-gradient(circle at 82% 26%, rgba(59,130,246,0.12), transparent 36%)",
        }}
      />

      <div
        style={{
          position: "absolute",
          inset: 26,
          borderRadius: 40,
          border: `1px solid ${COLORS.line}`,
        }}
      />

      <div
        style={{
          position: "absolute",
          left: 44,
          top: 46,
          color: COLORS.inkSoft,
          fontSize: 18,
          fontWeight: 700,
          letterSpacing: 2.6,
          textTransform: "uppercase",
        }}
      >
        From disconnected work to one delivery system
      </div>

      {connectors.map((connector, index) => {
        const flow = (frame / fps) * 0.28 + index * 0.18;
        const x = connector.from[0] + (connector.to[0] - connector.from[0]) * progress;
        const y = connector.from[1] + (connector.to[1] - connector.from[1]) * progress;
        return (
          <React.Fragment key={connector.color}>
            <div
              style={{
                position: "absolute",
                left: connector.from[0],
                top: connector.from[1],
                width: (connector.to[0] - connector.from[0]) * progress,
                height: 2,
                background: `linear-gradient(90deg, rgba(20,33,61,0.08), ${connector.color}55)`,
                transformOrigin: "0 50%",
                transform: `rotate(${Math.atan2(
                  connector.to[1] - connector.from[1],
                  connector.to[0] - connector.from[0],
                )}rad)`,
              }}
            />
            <div
              style={{
                position: "absolute",
                left: x + Math.cos(flow * Math.PI * 2) * 6,
                top: y + Math.sin(flow * Math.PI * 2) * 4,
                width: 12,
                height: 12,
                borderRadius: "50%",
                background: connector.color,
                boxShadow: `0 0 0 10px ${connector.color}18`,
                transform: "translate(-50%, -50%)",
              }}
            />
          </React.Fragment>
        );
      })}

      <ModuleCard
        title="Manual approvals"
        accent={COLORS.rose}
        accentSoft={COLORS.roseSoft}
        x={48}
        y={132}
        width={300}
        active={progress < 0.35}
        frame={frame}
        delay={0}
      />
      <ModuleCard
        title="Scattered tools"
        accent={COLORS.amber}
        accentSoft={COLORS.amberSoft}
        x={48}
        y={292}
        width={300}
        active={progress >= 0.2 && progress < 0.65}
        frame={frame}
        delay={6}
      />
      <ModuleCard
        title="Slow reporting"
        accent={COLORS.mint}
        accentSoft={COLORS.mintSoft}
        x={48}
        y={452}
        width={300}
        active={progress >= 0.45}
        frame={frame}
        delay={12}
      />

      <UnifiedBoard progress={progress} />
    </AbsoluteFill>
  );
};
