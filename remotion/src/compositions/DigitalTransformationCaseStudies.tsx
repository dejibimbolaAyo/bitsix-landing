import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

const COLORS = {
  ink: "#14213d",
  inkSoft: "#5d6b87",
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
  shadow: "rgba(21, 29, 52, 0.14)",
};

const Surface: React.FC<{ children: React.ReactNode; tintA: string; tintB: string }> = ({
  children,
  tintA,
  tintB,
}) => {
  return (
    <AbsoluteFill style={{ backgroundColor: "transparent", fontFamily: "Comfortaa, sans-serif" }}>
      <AbsoluteFill
        style={{
          background: `radial-gradient(circle at 18% 24%, ${tintA}, transparent 36%), radial-gradient(circle at 80% 22%, ${tintB}, transparent 34%)`,
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 18,
          borderRadius: 34,
          border: `1px solid ${COLORS.line}`,
          background: "rgba(255,255,255,0.72)",
        }}
      />
      {children}
    </AbsoluteFill>
  );
};

const Label: React.FC<{ text: string; x: number; y: number; accent: string }> = ({
  text,
  x,
  y,
  accent,
}) => (
  <div
    style={{
      position: "absolute",
      left: x,
      top: y,
      display: "flex",
      alignItems: "center",
      gap: 10,
      color: COLORS.inkSoft,
      fontSize: 14,
      fontWeight: 700,
      letterSpacing: 2,
      textTransform: "uppercase",
    }}
  >
    <span
      style={{
        width: 10,
        height: 10,
        borderRadius: 999,
        background: accent,
        boxShadow: `0 0 0 8px ${accent}20`,
      }}
    />
    {text}
  </div>
);

const OpsCard: React.FC<{
  title: string;
  left: number;
  top: number;
  width: number;
  accent: string;
  accentSoft: string;
  frame: number;
  delay: number;
}> = ({ title, left, top, width, accent, accentSoft, frame, delay }) => {
  const enter = spring({
    frame: frame - delay,
    fps: 30,
    config: { damping: 200, stiffness: 90, mass: 0.8 },
  });

  return (
    <div
      style={{
        position: "absolute",
        left,
        top,
        width,
        height: 112,
        borderRadius: 28,
        background: COLORS.panel,
        border: `1px solid ${COLORS.line}`,
        boxShadow: `0 22px 56px ${COLORS.shadow}`,
        transform: `translateY(${(1 - enter) * 18}px)`,
        opacity: enter,
        padding: 18,
      }}
    >
      <div
        style={{
          width: 38,
          height: 38,
          borderRadius: 14,
          background: accentSoft,
          marginBottom: 14,
        }}
      />
      <div
        style={{
          color: COLORS.ink,
          fontSize: 22,
          fontWeight: 700,
          letterSpacing: -0.5,
          marginBottom: 10,
        }}
      >
        {title}
      </div>
      <div
        style={{
          height: 10,
          width: "74%",
          borderRadius: 999,
          background: accentSoft,
          marginBottom: 8,
        }}
      />
      <div
        style={{
          height: 10,
          width: "52%",
          borderRadius: 999,
          background: "rgba(20,33,61,0.08)",
        }}
      />
      <div
        style={{
          position: "absolute",
          right: 18,
          top: 22,
          width: 12,
          height: 12,
          borderRadius: 999,
          background: accent,
          boxShadow: `0 0 0 8px ${accent}18`,
        }}
      />
    </div>
  );
};

export const DigitalTransformationCaseStudyOps: React.FC = () => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const progress = interpolate(frame, [0, durationInFrames * 0.65], [0, 1], {
    extrapolateRight: "clamp",
  });

  const beamWidth = 220 + progress * 260;

  return (
    <Surface tintA="rgba(245,158,11,0.14)" tintB="rgba(59,130,246,0.14)">
      <Label text="Operations flow" x={52} y={42} accent={COLORS.amber} />
      <div
        style={{
          position: "absolute",
          left: 56,
          top: 98,
          color: COLORS.ink,
          fontSize: 38,
          fontWeight: 700,
          letterSpacing: -1.2,
        }}
      >
        Manual work becomes one connected workflow
      </div>
      <div
        style={{
          position: "absolute",
          left: 96,
          top: 244,
          width: beamWidth,
          height: 3,
          borderRadius: 999,
          background: `linear-gradient(90deg, ${COLORS.amber}66, ${COLORS.blue}66)`,
        }}
      />
      <OpsCard
        title="Approvals"
        left={66}
        top={176}
        width={248}
        accent={COLORS.amber}
        accentSoft={COLORS.amberSoft}
        frame={frame}
        delay={0}
      />
      <OpsCard
        title="Handoffs"
        left={336}
        top={176}
        width={248}
        accent={COLORS.blue}
        accentSoft={COLORS.blueSoft}
        frame={frame}
        delay={8}
      />
      <div
        style={{
          position: "absolute",
          right: 52,
          top: 146,
          width: 262,
          height: 274,
          padding: 24,
          borderRadius: 30,
          background: COLORS.panel,
          border: `1px solid ${COLORS.line}`,
          boxShadow: `0 30px 76px ${COLORS.shadow}`,
        }}
      >
        <div
          style={{
            color: COLORS.inkSoft,
            fontSize: 14,
            fontWeight: 700,
            letterSpacing: 2,
            textTransform: "uppercase",
            marginBottom: 16,
          }}
        >
          Unified queue
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 14,
            marginBottom: 18,
          }}
        >
          {[COLORS.amberSoft, COLORS.blueSoft, COLORS.mintSoft, COLORS.roseSoft].map((bg, index) => (
            <div
              key={bg}
              style={{
                height: 72,
                borderRadius: 20,
                background: bg,
                transform: `translateY(${(1 - progress) * (index + 1) * 6}px)`,
              }}
            />
          ))}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {[0, 1, 2].map((index) => (
            <div
              key={index}
              style={{
                height: 12,
                width: `${index === 0 ? 78 : index === 1 ? 56 : 64}%`,
                borderRadius: 999,
                background: "rgba(20,33,61,0.08)",
              }}
            />
          ))}
        </div>
      </div>
    </Surface>
  );
};

export const DigitalTransformationCaseStudyAnalytics: React.FC = () => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const cycle = (frame % durationInFrames) / durationInFrames;
  const lineProgress = interpolate(cycle, [0, 0.8], [0.1, 1], {
    extrapolateRight: "clamp",
  });

  const bars = [0.34, 0.56, 0.82, 0.62];

  return (
    <Surface tintA="rgba(16,185,129,0.14)" tintB="rgba(59,130,246,0.12)">
      <Label text="Reporting layer" x={52} y={42} accent={COLORS.mint} />
      <div
        style={{
          position: "absolute",
          left: 56,
          top: 98,
          color: COLORS.ink,
          fontSize: 38,
          fontWeight: 700,
          letterSpacing: -1.2,
        }}
      >
        Reporting shifts from lagging to live decisions
      </div>
      <div
        style={{
          position: "absolute",
          left: 56,
          top: 168,
          width: 372,
          height: 252,
          padding: 24,
          borderRadius: 30,
          background: COLORS.panel,
          border: `1px solid ${COLORS.line}`,
          boxShadow: `0 30px 76px ${COLORS.shadow}`,
        }}
      >
        <div style={{ display: "flex", alignItems: "end", gap: 14, height: 140, marginBottom: 22 }}>
          {bars.map((bar, index) => (
            <div
              key={index}
              style={{
                width: 56,
                height: `${40 + bar * 90}px`,
                borderRadius: 18,
                background:
                  index === 2
                    ? `linear-gradient(180deg, ${COLORS.mint}, ${COLORS.mintSoft})`
                    : `linear-gradient(180deg, ${COLORS.blue}, ${COLORS.blueSoft})`,
                transform: `scaleY(${0.6 + lineProgress * 0.4})`,
                transformOrigin: "bottom center",
              }}
            />
          ))}
        </div>
        <div style={{ display: "flex", gap: 12 }}>
          {[0, 1, 2].map((index) => (
            <div
              key={index}
              style={{
                flex: 1,
                height: 16,
                borderRadius: 999,
                background: index === 1 ? COLORS.mintSoft : "rgba(20,33,61,0.08)",
              }}
            />
          ))}
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          right: 64,
          top: 178,
          width: 300,
          height: 232,
          padding: 22,
          borderRadius: 30,
          background: COLORS.panel,
          border: `1px solid ${COLORS.line}`,
          boxShadow: `0 30px 76px ${COLORS.shadow}`,
        }}
      >
        <div
          style={{
            color: COLORS.inkSoft,
            fontSize: 14,
            fontWeight: 700,
            letterSpacing: 2,
            textTransform: "uppercase",
            marginBottom: 18,
          }}
        >
          Live metrics
        </div>
        <div
          style={{
            position: "relative",
            height: 106,
            marginBottom: 18,
          }}
        >
          {[0, 1, 2].map((index) => (
            <div
              key={index}
              style={{
                position: "absolute",
                left: 0,
                right: 0,
                top: 18 + index * 26,
                height: 1,
                background: "rgba(20,33,61,0.08)",
              }}
            />
          ))}
          <svg
            width="256"
            height="106"
            viewBox="0 0 256 106"
            style={{ position: "absolute", inset: 0 }}
          >
            <path
              d="M0 88 C 32 74, 58 84, 84 56 S 142 18, 172 34 S 220 56, 256 12"
              fill="none"
              stroke={COLORS.blue}
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray="340"
              strokeDashoffset={340 - 340 * lineProgress}
            />
          </svg>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {[0, 1, 2].map((index) => (
            <div
              key={index}
              style={{
                height: 12,
                width: `${index === 0 ? 82 : index === 1 ? 58 : 72}%`,
                borderRadius: 999,
                background: "rgba(20,33,61,0.08)",
              }}
            />
          ))}
        </div>
      </div>
    </Surface>
  );
};
