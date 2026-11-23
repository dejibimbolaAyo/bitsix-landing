import React from "react";
import { AbsoluteFill, useCurrentFrame, useVideoConfig } from "remotion";

const COLORS = {
  ink: "#152750",
  inkSoft: "#4f638c",
  blue: "#3395ff",
  blueSoft: "#7dbbff",
  amber: "#ffae33",
  amberSoft: "#ffd179",
  panel: "#ffffff",
  line: "rgba(21,39,80,0.08)",
  shadow: "rgba(12, 27, 58, 0.12)",
};

const TAU = Math.PI * 2;
const CARD_WIDTH = 304;
const CARD_HEIGHT = 360;
const STEP = 338;

const mod = (n: number, m: number) => ((n % m) + m) % m;

const progressAt = (frame: number, durationInFrames: number, phase = 0) => {
  return ((frame + phase) % durationInFrames) / durationInFrames;
};

const pulse = (progress: number, cycles: number, phase = 0) => {
  return Math.sin(progress * TAU * cycles + phase);
};

type CardData = {
  title: string;
  accent: string;
  render: (progress: number) => React.ReactNode;
};

const CardShell: React.FC<{
  title: string;
  accent: string;
  x: number;
  y: number;
  scale: number;
  opacity: number;
  blur: number;
  zIndex: number;
  children: React.ReactNode;
}> = ({ title, accent, x, y, scale, opacity, blur, zIndex, children }) => {
  return (
    <div
      style={{
        position: "absolute",
        left: x,
        top: y,
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        borderRadius: 32,
        background: COLORS.panel,
        border: `1px solid ${COLORS.line}`,
        boxShadow: `0 28px 70px ${COLORS.shadow}`,
        transform: `translate(-50%, -50%) scale(${scale})`,
        opacity,
        filter: blur ? `blur(${blur}px)` : undefined,
        zIndex,
      }}
    >
      <div
        style={{
          position: "absolute",
          left: 26,
          right: 26,
          top: 22,
          height: 4,
          borderRadius: 999,
          background: accent,
        }}
      />
      <div
        style={{
          position: "absolute",
          left: 26,
          top: 42,
          color: COLORS.ink,
          fontSize: 28,
          fontWeight: 700,
          letterSpacing: -0.5,
        }}
      >
        {title}
      </div>
      {children}
    </div>
  );
};

const RoadmapUI: CardData["render"] = (progress) => {
  return (
    <>
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            left: 26,
            top: 106 + i * 42,
            width: 170 + i * 44,
            height: 14,
            borderRadius: 999,
            background: i === 1 ? "rgba(255,174,51,0.16)" : "rgba(21,39,80,0.08)",
          }}
        />
      ))}
      <div
        style={{
          position: "absolute",
          left: 34 + progress * 180,
          top: 142,
          width: 18,
          height: 18,
          borderRadius: "50%",
          background: COLORS.amber,
          boxShadow: `0 0 0 10px ${COLORS.amber}22`,
        }}
      />
    </>
  );
};

const DashboardUI: CardData["render"] = (progress) => {
  const values = [
    0.45 + ((pulse(progress, 2) + 1) / 2) * 0.42,
    0.32 + ((pulse(progress, 1.5, 0.8) + 1) / 2) * 0.48,
    0.55 + ((pulse(progress, 1, 1.6) + 1) / 2) * 0.22,
  ];

  return (
    <>
      <div style={{ position: "absolute", left: 26, right: 26, top: 104, height: 120, display: "flex", alignItems: "end", gap: 18 }}>
        {values.map((value, i) => (
          <div
            key={i}
            style={{
              width: 58,
              height: `${value * 100}%`,
              borderRadius: 16,
              background:
                i === 1
                  ? `linear-gradient(180deg, ${COLORS.amber}, ${COLORS.amberSoft})`
                  : `linear-gradient(180deg, ${COLORS.blue}, ${COLORS.blueSoft})`,
            }}
          />
        ))}
      </div>
      <div style={{ position: "absolute", left: 26, right: 26, bottom: 34, display: "flex", gap: 12 }}>
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            style={{
              height: 12,
              flex: i === 1 ? 1.4 : 1,
              borderRadius: 999,
              background: i === 1 ? "rgba(255,174,51,0.18)" : "rgba(21,39,80,0.08)",
            }}
          />
        ))}
      </div>
    </>
  );
};

const KanbanUI: CardData["render"] = (progress) => {
  const cardLift = pulse(progress, 1.5) * 8;
  return (
    <>
      <div style={{ position: "absolute", left: 26, right: 26, top: 104, display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12 }}>
        {[0, 1, 2].map((col) => (
          <div key={col} style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <div style={{ height: 10, borderRadius: 999, background: "rgba(21,39,80,0.1)" }} />
            {[0, 1].map((row) => (
              <div
                key={row}
                style={{
                  height: 54,
                  borderRadius: 18,
                  background:
                    col === 1 && row === 0
                      ? "rgba(51,149,255,0.16)"
                      : "rgba(21,39,80,0.06)",
                  transform: col === 1 && row === 0 ? `translateY(${cardLift}px)` : undefined,
                }}
              />
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

const MessagingUI: CardData["render"] = (progress) => {
  const bubbleX = progress * 56;
  return (
    <>
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            top: 104 + i * 58,
            [i % 2 === 0 ? "left" : "right"]: 26,
            width: i === 1 ? 164 : 144,
            height: 38,
            borderRadius: 22,
            background:
              i === 1
                ? "rgba(51,149,255,0.16)"
                : "rgba(21,39,80,0.06)",
          }}
        />
      ))}
      <div
        style={{
          position: "absolute",
          left: 38 + bubbleX,
          bottom: 46,
          width: 92,
          height: 12,
          borderRadius: 999,
          background: `linear-gradient(90deg, ${COLORS.amber}, ${COLORS.amberSoft})`,
        }}
      />
    </>
  );
};

const SettingsUI: CardData["render"] = (progress) => {
  const toggles = [progress > 0.2, progress > 0.5, progress > 0.75];
  return (
    <>
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            left: 26,
            right: 26,
            top: 106 + i * 60,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ width: 140 - i * 18, height: 12, borderRadius: 999, background: "rgba(21,39,80,0.08)" }} />
          <div
            style={{
              width: 58,
              height: 32,
              borderRadius: 999,
              background: toggles[i] ? "rgba(51,149,255,0.18)" : "rgba(21,39,80,0.08)",
              padding: 4,
            }}
          >
            <div
              style={{
                width: 24,
                height: 24,
                borderRadius: "50%",
                background: toggles[i] ? COLORS.blue : "#cfd8ea",
                transform: `translateX(${toggles[i] ? 26 : 0}px)`,
              }}
            />
          </div>
        </div>
      ))}
    </>
  );
};

const cards: CardData[] = [
  { title: "Roadmap", accent: COLORS.amber, render: RoadmapUI },
  { title: "Dashboard", accent: COLORS.blue, render: DashboardUI },
  { title: "Workflow", accent: COLORS.blueSoft, render: KanbanUI },
  { title: "Messaging", accent: COLORS.amberSoft, render: MessagingUI },
  { title: "Settings", accent: COLORS.inkSoft, render: SettingsUI },
];

export const ExpertiseIllustration: React.FC = () => {
  const frame = useCurrentFrame();
  const { width, height, durationInFrames } = useVideoConfig();
  const progress = progressAt(frame, durationInFrames);
  const centerX = width / 2;
  const centerY = height / 2;
  const cardProgress = progress * cards.length;

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
            "radial-gradient(circle at 22% 22%, rgba(255,174,51,0.08), transparent 28%), radial-gradient(circle at 78% 72%, rgba(51,149,255,0.08), transparent 32%)",
        }}
      />

      {cards.map((card, index) => {
        const relative = mod(index - cardProgress + cards.length / 2, cards.length) - cards.length / 2;
        const x = centerX + relative * STEP;
        const abs = Math.abs(relative);
        const scale = Math.max(0.8, 1 - abs * 0.12);
        const opacity = Math.max(0.22, 1 - abs * 0.28);
        const blur = abs > 1.6 ? 1.2 : 0;
        const y = centerY + pulse(progress, 1, index) * 8;
        const zIndex = 20 - Math.round(abs * 10);

        return (
          <CardShell
            key={card.title}
            title={card.title}
            accent={card.accent}
            x={x}
            y={y}
            scale={scale}
            opacity={opacity}
            blur={blur}
            zIndex={zIndex}
          >
            {card.render(progressAt(frame, durationInFrames, index * 18))}
          </CardShell>
        );
      })}
    </AbsoluteFill>
  );
};
