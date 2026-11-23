import React from "react";
import { AbsoluteFill, useCurrentFrame, useVideoConfig } from "remotion";

const COLORS = {
  ink: "#14264d",
  inkSoft: "#61739a",
  blue: "#3395ff",
  blueSoft: "#8bc4ff",
  amber: "#ffae33",
  amberSoft: "#ffd68f",
  white: "#ffffff",
  line: "rgba(20, 38, 77, 0.08)",
  shadow: "rgba(15, 30, 64, 0.12)",
};

const TAU = Math.PI * 2;

const progressAt = (frame: number, durationInFrames: number, phase = 0) => {
  return ((frame + phase) % durationInFrames) / durationInFrames;
};

const smooth = (t: number) => t * t * (3 - 2 * t);

const blend = (a: number, b: number, t: number) => a + (b - a) * t;

const pulse = (progress: number, cycles: number, phase = 0) => {
  return Math.sin(progress * TAU * cycles + phase);
};

const Panel: React.FC<{
  x: number;
  y: number;
  w: number;
  h: number;
  accent: string;
  title: string;
  subtitle: string;
  children: React.ReactNode;
}> = ({ x, y, w, h, accent, title, subtitle, children }) => (
  <div
    style={{
      position: "absolute",
      left: x,
      top: y,
      width: w,
      height: h,
      borderRadius: 34,
      background: COLORS.white,
      border: `1px solid ${COLORS.line}`,
      boxShadow: `0 28px 70px ${COLORS.shadow}`,
    }}
  >
    <div
      style={{
        position: "absolute",
        left: 28,
        right: 28,
        top: 22,
        height: 4,
        borderRadius: 999,
        background: accent,
      }}
    />
    <div
      style={{
        position: "absolute",
        left: 28,
        top: 42,
        color: COLORS.ink,
        fontSize: 30,
        fontWeight: 700,
        letterSpacing: -0.6,
      }}
    >
      {title}
    </div>
    <div
      style={{
        position: "absolute",
        left: 28,
        top: 82,
        color: COLORS.inkSoft,
        fontSize: 18,
        fontWeight: 500,
      }}
    >
      {subtitle}
    </div>
    {children}
  </div>
);

const LegacySystem: React.FC<{ progress: number }> = ({ progress }) => {
  const nudge = pulse(progress, 1, 0.4) * 4;

  return (
    <Panel
      x={72}
      y={170 + nudge}
      w={420}
      h={460}
      accent={COLORS.amber}
      title="Legacy"
      subtitle="Manual steps. Duplicate work. Disconnected data."
    >
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            left: 28 + (i % 2) * 190,
            top: 138 + i * 86,
            width: 164,
            height: 62,
            borderRadius: 18,
            background: "rgba(20, 38, 77, 0.06)",
          }}
        />
      ))}

      {[0, 1, 2, 3].map((i) => (
        <React.Fragment key={`flow-${i}`}>
          <div
            style={{
              position: "absolute",
              left: 110 + i * 72,
              bottom: 88,
              width: 16,
              height: 16,
              borderRadius: "50%",
              background: i === 1 ? "rgba(255,174,51,0.2)" : "rgba(20, 38, 77, 0.14)",
            }}
          />
          {i < 3 ? (
            <div
              style={{
                position: "absolute",
                left: 126 + i * 72,
                bottom: 95,
                width: 56,
                height: 2,
                background: "rgba(20, 38, 77, 0.12)",
              }}
            />
          ) : null}
        </React.Fragment>
      ))}
    </Panel>
  );
};

const IntegratedSystem: React.FC<{ progress: number }> = ({ progress }) => {
  const breathe = pulse(progress, 1, 1.1) * 4;
  const values = [
    0.5 + ((pulse(progress, 1.2) + 1) / 2) * 0.25,
    0.36 + ((pulse(progress, 1.8, 0.6) + 1) / 2) * 0.34,
    0.6 + ((pulse(progress, 1, 1.2) + 1) / 2) * 0.18,
  ];

  return (
    <Panel
      x={724}
      y={170 + breathe}
      w={424}
      h={460}
      accent={COLORS.blue}
      title="Integrated"
      subtitle="Connected workflows. Shared data. Live visibility."
    >
      <div
        style={{
          position: "absolute",
          left: 28,
          right: 28,
          top: 138,
          display: "grid",
          gridTemplateColumns: "1.1fr 0.9fr",
          gap: 16,
        }}
      >
        <div
          style={{
            height: 176,
            borderRadius: 24,
            background: "rgba(51,149,255,0.1)",
            padding: 22,
          }}
        >
          <div style={{ height: 12, width: 126, borderRadius: 999, background: "rgba(20, 38, 77, 0.1)", marginBottom: 18 }} />
          <div style={{ display: "flex", alignItems: "end", gap: 14, height: 96 }}>
            {values.map((value, i) => (
              <div
                key={i}
                style={{
                  width: 42,
                  height: `${value * 100}%`,
                  borderRadius: 14,
                  background: i === 1 ? `linear-gradient(180deg, ${COLORS.amber}, ${COLORS.amberSoft})` : `linear-gradient(180deg, ${COLORS.blue}, ${COLORS.blueSoft})`,
                }}
              />
            ))}
          </div>
        </div>

        <div
          style={{
            height: 176,
            borderRadius: 24,
            background: "rgba(20, 38, 77, 0.05)",
            padding: 18,
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 12,
          }}
        >
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              style={{
                borderRadius: 16,
                background: i === 1 ? "rgba(255,174,51,0.16)" : "rgba(255,255,255,0.9)",
              }}
            />
          ))}
        </div>
      </div>

      <div style={{ position: "absolute", left: 28, right: 28, bottom: 28, display: "flex", gap: 12 }}>
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            style={{
              flex: i === 1 ? 1.45 : 1,
              height: 14,
              borderRadius: 999,
              background: i === 1 ? "rgba(51,149,255,0.18)" : "rgba(20, 38, 77, 0.08)",
            }}
          />
        ))}
      </div>
    </Panel>
  );
};

const TransformationBridge: React.FC<{ progress: number }> = ({ progress }) => {
  const t = smooth((Math.sin(progress * TAU) + 1) / 2);
  const startX = 498;
  const endX = 724;
  const signalX = blend(startX + 18, endX - 74, t);

  return (
    <>
      <div
        style={{
          position: "absolute",
          left: startX,
          top: 396,
          width: endX - startX,
          height: 2,
          background: "linear-gradient(90deg, rgba(255,174,51,0.22), rgba(51,149,255,0.22))",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: signalX,
          top: 374,
          width: 74,
          height: 46,
          borderRadius: 999,
          background: "linear-gradient(90deg, rgba(255,174,51,0.98), rgba(51,149,255,0.98))",
          boxShadow: "0 0 0 12px rgba(255,255,255,0.75)",
        }}
      />
    </>
  );
};

export const DigitalTransformationHero: React.FC = () => {
  const frame = useCurrentFrame();
  const { width, height, durationInFrames } = useVideoConfig();
  const progress = progressAt(frame, durationInFrames);

  return (
    <AbsoluteFill
      style={{
        width,
        height,
        backgroundColor: "transparent",
        overflow: "hidden",
        fontFamily:
          "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 18% 24%, rgba(255,174,51,0.06), transparent 24%), radial-gradient(circle at 82% 74%, rgba(51,149,255,0.06), transparent 28%)",
        }}
      />

      <div
        style={{
          position: "absolute",
          left: 72,
          top: 64,
          color: COLORS.inkSoft,
          fontSize: 22,
          fontWeight: 600,
          letterSpacing: -0.2,
        }}
      >
        Before
      </div>
      <div
        style={{
          position: "absolute",
          right: 72,
          top: 64,
          color: COLORS.inkSoft,
          fontSize: 22,
          fontWeight: 600,
          letterSpacing: -0.2,
        }}
      >
        After
      </div>

      <LegacySystem progress={progress} />
      <TransformationBridge progress={progress} />
      <IntegratedSystem progress={progress} />
    </AbsoluteFill>
  );
};
