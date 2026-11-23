import React from "react";
import { AbsoluteFill, useCurrentFrame, useVideoConfig } from "remotion";

const COLORS = {
  panel: "#102243",
  panelEdge: "rgba(255,255,255,0.08)",
  line: "rgba(143, 176, 230, 0.22)",
  blue: "#3395ff",
  blueSoft: "#7bbcff",
  amber: "#ffae33",
  amberSoft: "#ffd27d",
  white: "#f4f7ff",
  slate: "#90a6d4",
};

const TAU = Math.PI * 2;

const progressAt = (frame: number, durationInFrames: number, phase = 0) => {
  return ((frame + phase) % durationInFrames) / durationInFrames;
};

const loopSine = (progress: number, cycles: number, phase = 0) => {
  return Math.sin(progress * TAU * cycles + phase);
};

const pointOnLine = (
  from: { x: number; y: number },
  to: { x: number; y: number },
  progress: number,
) => ({
  x: from.x + (to.x - from.x) * progress,
  y: from.y + (to.y - from.y) * progress,
});

type ModuleProps = {
  x: number;
  y: number;
  width: number;
  height: number;
  progress: number;
  phase: number;
  children: React.ReactNode;
};

const ModuleFrame: React.FC<ModuleProps> = ({ x, y, width, height, progress, phase, children }) => {
  const driftY = loopSine(progress, 1, phase) * 6;
  const driftX = loopSine(progress, 1, phase + 0.7) * 4;

  return (
    <div
      style={{
        position: "absolute",
        left: x + driftX,
        top: y + driftY,
        width,
        height,
        borderRadius: 32,
        background: "linear-gradient(180deg, rgba(16,34,67,0.985), rgba(10,21,45,0.965))",
        border: `1px solid rgba(255,255,255,0.12)`,
        boxShadow: "0 26px 64px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.05)",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 20,
          left: 24,
          right: 24,
          height: 2,
          background: "linear-gradient(90deg, rgba(255,255,255,0.18), transparent)",
        }}
      />
      {children}
    </div>
  );
};

const StrategyModule: React.FC<{ progress: number }> = ({ progress }) => {
  const dot = progress;

  return (
    <ModuleFrame x={240} y={178} width={430} height={220} progress={progress} phase={0}>
      <div style={{ position: "absolute", left: 32, top: 48, color: COLORS.white, fontSize: 24, fontWeight: 700, letterSpacing: -0.4 }}>
        Strategy
      </div>
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            left: 32,
            top: 104 + i * 34,
            width: 260 + i * 38,
            height: 12,
            borderRadius: 999,
            background: i === 1 ? "rgba(255,174,51,0.16)" : "rgba(255,255,255,0.08)",
          }}
        />
      ))}
      <div
        style={{
          position: "absolute",
          left: 32 + dot * 294,
          top: 131,
          width: 14,
          height: 14,
          borderRadius: "50%",
          background: COLORS.amber,
          boxShadow: "0 0 0 8px rgba(255,174,51,0.12), 0 0 18px rgba(255,174,51,0.8)",
        }}
      />
    </ModuleFrame>
  );
};

const EngineeringModule: React.FC<{ progress: number }> = ({ progress }) => {
  const pulse = 0.82 + ((loopSine(progress, 2) + 1) / 2) * 0.18;

  return (
    <ModuleFrame x={1250} y={178} width={430} height={220} progress={progress} phase={1.2}>
      <div style={{ position: "absolute", left: 32, top: 48, color: COLORS.white, fontSize: 24, fontWeight: 700, letterSpacing: -0.4 }}>
        Engineering
      </div>
      <div style={{ position: "absolute", left: 32, top: 108, right: 32, display: "flex", gap: 16 }}>
        <div style={{ width: 96, height: 20, borderRadius: 8, background: "rgba(123,188,255,0.18)" }} />
        <div style={{ width: 128, height: 20, borderRadius: 8, background: "rgba(255,255,255,0.08)" }} />
      </div>
      <div style={{ position: "absolute", left: 32, top: 144, right: 32, display: "flex", gap: 16 }}>
        <div style={{ width: 152, height: 20, borderRadius: 8, background: "rgba(255,255,255,0.08)" }} />
        <div style={{ width: 84, height: 20, borderRadius: 8, background: "rgba(51,149,255,0.22)" }} />
      </div>
      <div
        style={{
          position: "absolute",
          right: 34,
          bottom: 30,
          width: 16,
          height: 16,
          borderRadius: "50%",
          background: COLORS.blue,
          opacity: pulse,
          boxShadow: "0 0 0 8px rgba(51,149,255,0.12), 0 0 18px rgba(51,149,255,0.7)",
        }}
      />
    </ModuleFrame>
  );
};

const DeliveryModule: React.FC<{ progress: number }> = ({ progress }) => {
  const runner = progress;

  return (
    <ModuleFrame x={240} y={682} width={430} height={220} progress={progress} phase={2.1}>
      <div style={{ position: "absolute", left: 32, top: 48, color: COLORS.white, fontSize: 24, fontWeight: 700, letterSpacing: -0.4 }}>
        Delivery
      </div>
      {[0, 1, 2, 3].map((i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            left: 62 + i * 94,
            top: 124,
            width: 24,
            height: 24,
            borderRadius: "50%",
            background: i < 3 ? "rgba(255,255,255,0.14)" : "rgba(255,174,51,0.18)",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        />
      ))}
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            left: 86 + i * 94,
            top: 135,
            width: 70,
            height: 2,
            background: "rgba(255,255,255,0.12)",
          }}
        />
      ))}
      <div
        style={{
          position: "absolute",
          left: 62 + runner * 282,
          top: 120,
          width: 30,
          height: 30,
          borderRadius: "50%",
          background: COLORS.blueSoft,
          boxShadow: "0 0 0 10px rgba(123,188,255,0.12), 0 0 18px rgba(123,188,255,0.8)",
        }}
      />
    </ModuleFrame>
  );
};

const AutomationModule: React.FC<{ progress: number }> = ({ progress }) => {
  const barA = 0.42 + ((loopSine(progress, 1.5) + 1) / 2) * 0.44;
  const barB = 0.35 + ((loopSine(progress, 2, 0.8) + 1) / 2) * 0.48;
  const barC = 0.52 + ((loopSine(progress, 1, 1.6) + 1) / 2) * 0.3;

  const bars = [barA, barB, barC];

  return (
    <ModuleFrame x={1250} y={682} width={430} height={220} progress={progress} phase={3}>
      <div style={{ position: "absolute", left: 32, top: 48, color: COLORS.white, fontSize: 24, fontWeight: 700, letterSpacing: -0.4 }}>
        Automation
      </div>
      <div style={{ position: "absolute", left: 40, right: 40, bottom: 34, top: 108, display: "flex", alignItems: "end", gap: 18 }}>
        {bars.map((value, i) => (
          <div
            key={i}
            style={{
              width: 68,
              height: `${value * 100}%`,
              borderRadius: 14,
              background:
                i === 1
                  ? "linear-gradient(180deg, rgba(255,174,51,0.9), rgba(255,174,51,0.35))"
                  : "linear-gradient(180deg, rgba(123,188,255,0.75), rgba(51,149,255,0.2))",
            }}
          />
        ))}
      </div>
    </ModuleFrame>
  );
};

const HubMark: React.FC<{ progress: number }> = ({ progress }) => {
  const floatY = loopSine(progress, 1) * 8;

  return (
    <div
      style={{
        position: "absolute",
        left: "50%",
        top: "50%",
        width: 250,
        height: 250,
        transform: `translate(-50%, -50%) translateY(${floatY}px)`,
        filter: "drop-shadow(0 24px 56px rgba(0,0,0,0.28))",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: 36,
          background:
            "radial-gradient(circle at 50% 45%, rgba(51,149,255,0.2), transparent 65%)",
        }}
      />
      <svg viewBox="0 0 1800 1800" style={{ width: "100%", height: "100%" }}>
        <path fill="#3395ff" d="M867.579 680.364h8.328" />
        <path
          fill="#05183e"
          d="M865.872 1413.36c.288-74.98-60.411-135.91-135.385-135.91H250.065c-128.535 0-232.336 104.95-230.924 233.48 1.39 126.55 104.37 228.4 230.924 228.4h514.939c55.079 0 99.788-44.54 99.999-99.62l.869-226.35Z"
        />
        <path
          fill="#05183e"
          d="M1782.04 1638.83c.76-199.36-160.64-361.38-360-361.38H1167.1c-128.54 0-232.341 104.95-230.929 233.48 1.391 126.55 104.369 228.4 230.929 228.4h514.94c55.07 0 99.78-44.54 99.99-99.62l.01-.88Z"
        />
        <path
          fill="#3395ff"
          d="M864.049 780.464c.241-62.761-50.571-113.767-113.333-113.767H250.392c-128.534 0-232.333 104.943-230.925 233.469 1.387 126.544 104.368 228.404 230.925 228.404h512.707c55.079 0 99.789-44.53 99.999-99.61l.951-248.496Z"
        />
        <path
          fill="#ffae33"
          stroke="#ffae33"
          strokeLinecap="butt"
          strokeWidth="10"
          d="M1778.75 1028.07c.76-199.355-160.64-361.373-360-361.373h-399.7c-47.614 0-86.068 38.878-85.547 86.493l1.513 138.013C936.457 1022.72 1043.48 1128.57 1175 1128.57h503.75c55.08 0 99.78-44.53 100-99.61v-.89Z"
        />
        <path fill="#3395ff" d="M888.141 1142.24h-20.878" />
        <path fill="#3395ff" d="M1103.06 1142.24H888.141" />
        <path
          fill="#05183e"
          d="M34.899 420.669c0-198.822 161.177-360 360-360h925.611c127.68 0 231.19 103.507 231.19 231.189 0 127.682-103.51 231.189-231.19 231.189H134.899c-55.229 0-100-44.772-100-100v-2.378Z"
        />
      </svg>
    </div>
  );
};

const Connections: React.FC<{ progress: number }> = ({ progress }) => {
  const center = { x: 960, y: 540 };
  const targets = [
    { point: { x: 670, y: 288 }, color: COLORS.amber },
    { point: { x: 1250, y: 288 }, color: COLORS.blue },
    { point: { x: 670, y: 792 }, color: COLORS.blueSoft },
    { point: { x: 1250, y: 792 }, color: COLORS.amberSoft },
  ];

  return (
    <>
      {targets.map((target, index) => {
        const dx = target.point.x - center.x;
        const dy = target.point.y - center.y;
        const length = Math.sqrt(dx * dx + dy * dy);
        const angle = (Math.atan2(dy, dx) * 180) / Math.PI;
        const point = pointOnLine(center, target.point, progressAt(Math.round(progress * 1000), 1000, index * 170));

        return (
          <React.Fragment key={index}>
            <div
              style={{
                position: "absolute",
                left: center.x,
                top: center.y,
                width: length,
                height: 2,
                background: `linear-gradient(90deg, rgba(255,255,255,0.18), ${COLORS.line})`,
                transform: `rotate(${angle}deg)`,
                transformOrigin: "0 50%",
              }}
            />
            <div
              style={{
                position: "absolute",
                left: point.x - 6,
                top: point.y - 6,
                width: 12,
                height: 12,
                borderRadius: "50%",
                background: target.color,
                boxShadow: `0 0 0 8px ${target.color}18, 0 0 16px ${target.color}`,
              }}
            />
          </React.Fragment>
        );
      })}
    </>
  );
};

const MicroParticles: React.FC<{ frame: number; durationInFrames: number }> = ({ frame, durationInFrames }) => {
  return (
    <>
      {Array.from({ length: 18 }, (_, seed) => {
        const progress = progressAt(frame, durationInFrames, seed * 13);
        const x = 540 + ((seed * 77) % 840);
        const y = 260 + ((seed * 53) % 500) + loopSine(progress, 1, seed) * 12;
        const alpha = 0.24 + ((loopSine(progress, 2, seed) + 1) / 2) * 0.46;
        return (
          <div
            key={seed}
            style={{
              position: "absolute",
              left: x,
              top: y,
              width: 3,
              height: 3,
              borderRadius: "50%",
              background: seed % 5 === 0 ? COLORS.amberSoft : COLORS.white,
              opacity: alpha,
            }}
          />
        );
      })}
    </>
  );
};

export const HeroVideo: React.FC = () => {
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
      <Connections progress={progress} />
      <MicroParticles frame={frame} durationInFrames={durationInFrames} />
      <HubMark progress={progress} />
      <StrategyModule progress={progress} />
      <EngineeringModule progress={progress} />
      <DeliveryModule progress={progress} />
      <AutomationModule progress={progress} />

      <div
        style={{
          position: "absolute",
          bottom: 48,
          left: 60,
          display: "flex",
          flexDirection: "column",
          gap: 6,
        }}
      >
        <div
          style={{
            width: 28,
            height: 2,
            borderRadius: 1,
            background: COLORS.amber,
          }}
        />
        <div
          style={{
            color: COLORS.slate,
            fontSize: 16,
            fontWeight: 500,
            letterSpacing: 5,
            textTransform: "uppercase",
          }}
        >
          Technology That{" "}
          <span
            style={{
              fontStyle: "italic",
              fontWeight: 500,
              fontFamily: "Georgia, 'Times New Roman', serif",
              color: COLORS.white,
            }}
          >
            Delivers
          </span>
        </div>
      </div>
    </AbsoluteFill>
  );
};
