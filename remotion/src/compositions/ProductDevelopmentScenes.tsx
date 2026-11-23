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
  indigo: "#6366f1",
  indigoSoft: "#e0e7ff",
  white: "rgba(255,255,255,0.96)",
  shadow: "rgba(21, 29, 52, 0.14)",
  darkPanel: "rgba(15, 23, 42, 0.88)",
  darkLine: "rgba(255,255,255,0.08)",
  darkText: "rgba(255,255,255,0.92)",
  darkSoft: "rgba(191, 219, 254, 0.78)",
};

const progressAt = (frame: number, durationInFrames: number) =>
  (frame % durationInFrames) / durationInFrames;

const ease = (value: number) => value * value * (3 - 2 * value);

const Shell: React.FC<{
  dark?: boolean;
  children: React.ReactNode;
  glowA: string;
  glowB: string;
}> = ({ dark = false, children, glowA, glowB }) => (
  <AbsoluteFill
    style={{
      backgroundColor: "transparent",
      fontFamily: "Comfortaa, sans-serif",
    }}
  >
    <AbsoluteFill
      style={{
        background: `radial-gradient(circle at 18% 24%, ${glowA}, transparent 34%), radial-gradient(circle at 82% 22%, ${glowB}, transparent 36%)`,
      }}
    />
    <div
      style={{
        position: "absolute",
        inset: 16,
        borderRadius: 34,
        border: `1px solid ${dark ? COLORS.darkLine : COLORS.line}`,
        background: dark ? "rgba(15,23,42,0.3)" : "rgba(255,255,255,0.72)",
      }}
    />
    {children}
  </AbsoluteFill>
);

const Label: React.FC<{
  text: string;
  x: number;
  y: number;
  accent: string;
  dark?: boolean;
}> = ({ text, x, y, accent, dark = false }) => (
  <div
    style={{
      position: "absolute",
      left: x,
      top: y,
      display: "flex",
      alignItems: "center",
      gap: 10,
      color: dark ? COLORS.darkSoft : COLORS.inkSoft,
      fontSize: 14,
      fontWeight: 700,
      letterSpacing: 2.2,
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

const LiteCard: React.FC<{
  title: string;
  subtitle?: string;
  left: number;
  top: number;
  width: number;
  height: number;
  accent: string;
  accentSoft: string;
  frame: number;
  delay: number;
}> = ({ title, subtitle, left, top, width, height, accent, accentSoft, frame, delay }) => {
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
        height,
        borderRadius: 28,
        background: COLORS.white,
        border: `1px solid ${COLORS.line}`,
        boxShadow: `0 28px 70px ${COLORS.shadow}`,
        transform: `translateY(${(1 - enter) * 18}px)`,
        opacity: enter,
        padding: 20,
      }}
    >
      <div
        style={{
          width: 42,
          height: 42,
          borderRadius: 16,
          background: accentSoft,
          marginBottom: 16,
        }}
      />
      <div
        style={{
          color: COLORS.ink,
          fontSize: 24,
          fontWeight: 700,
          letterSpacing: -0.5,
          marginBottom: subtitle ? 8 : 14,
        }}
      >
        {title}
      </div>
      {subtitle ? (
        <div
          style={{
            color: COLORS.inkSoft,
            fontSize: 15,
            lineHeight: 1.45,
            maxWidth: width - 48,
          }}
        >
          {subtitle}
        </div>
      ) : null}
      <div
        style={{
          position: "absolute",
          right: 18,
          top: 20,
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

const DarkCard: React.FC<{
  title: string;
  left: number;
  top: number;
  width: number;
  height: number;
  accent: string;
  frame: number;
  delay: number;
}> = ({ title, left, top, width, height, accent, frame, delay }) => {
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
        height,
        borderRadius: 28,
        background: COLORS.darkPanel,
        border: `1px solid ${COLORS.darkLine}`,
        boxShadow: "0 26px 60px rgba(3, 7, 18, 0.28)",
        transform: `translateY(${(1 - enter) * 20}px)`,
        opacity: enter,
        padding: 20,
      }}
    >
      <div
        style={{
          color: COLORS.darkText,
          fontSize: 22,
          fontWeight: 700,
          letterSpacing: -0.4,
          marginBottom: 16,
        }}
      >
        {title}
      </div>
      {[0, 1, 2].map((index) => (
        <div
          key={index}
          style={{
            height: 10,
            width: `${index === 0 ? 72 : index === 1 ? 58 : 64}%`,
            borderRadius: 999,
            background:
              index === 0 ? `${accent}33` : "rgba(255,255,255,0.1)",
            marginBottom: 10,
          }}
        />
      ))}
      <div
        style={{
          position: "absolute",
          right: 20,
          top: 20,
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

export const ProductDevelopmentHeroScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const progress = progressAt(frame, durationInFrames);
  const beam = ease(interpolate(progress, [0, 0.7], [0.05, 1], { extrapolateRight: "clamp" }));

  return (
    <Shell glowA="rgba(59,130,246,0.14)" glowB="rgba(99,102,241,0.14)">
      <Label text="Product system" x={48} y={40} accent={COLORS.blue} />
      <div
        style={{
          position: "absolute",
          left: 52,
          top: 94,
          color: COLORS.ink,
          fontSize: 36,
          fontWeight: 700,
          letterSpacing: -1.2,
        }}
      >
        Vision, architecture, and delivery aligned
      </div>
      <LiteCard
        title="Planning"
        subtitle="Shape requirements, delivery slices, and platform decisions."
        left={62}
        top={192}
        width={248}
        height={188}
        accent={COLORS.blue}
        accentSoft={COLORS.blueSoft}
        frame={frame}
        delay={0}
      />
      <LiteCard
        title="Build"
        subtitle="Translate product scope into stable services and interfaces."
        left={336}
        top={192}
        width={248}
        height={188}
        accent={COLORS.amber}
        accentSoft={COLORS.amberSoft}
        frame={frame}
        delay={8}
      />
      <div
        style={{
          position: "absolute",
          left: 238,
          top: 288,
          width: 358 * beam,
          height: 3,
          borderRadius: 999,
          background: `linear-gradient(90deg, ${COLORS.blue}88, ${COLORS.indigo}88)`,
        }}
      />
      <div
        style={{
          position: "absolute",
          right: 54,
          top: 150,
          width: 290,
          height: 308,
          padding: 24,
          borderRadius: 32,
          background: COLORS.white,
          border: `1px solid ${COLORS.line}`,
          boxShadow: `0 28px 70px ${COLORS.shadow}`,
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
          Product cockpit
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 14,
            marginBottom: 18,
          }}
        >
          {[COLORS.blueSoft, COLORS.amberSoft, COLORS.mintSoft, COLORS.indigoSoft].map((bg, index) => (
            <div
              key={bg}
              style={{
                height: 78,
                borderRadius: 22,
                background: bg,
                transform: `translateY(${(1 - beam) * (index + 1) * 6}px)`,
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
                width: `${index === 0 ? 80 : index === 1 ? 54 : 68}%`,
                borderRadius: 999,
                background: "rgba(20,33,61,0.08)",
              }}
            />
          ))}
        </div>
      </div>
    </Shell>
  );
};

export const ProductDevelopmentShowcaseScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const progress = progressAt(frame, durationInFrames);
  const values = [
    0.34 + ease((Math.sin(progress * Math.PI * 2) + 1) / 2) * 0.2,
    0.58 + ease((Math.sin(progress * Math.PI * 2 + 0.8) + 1) / 2) * 0.16,
    0.44 + ease((Math.sin(progress * Math.PI * 2 + 1.6) + 1) / 2) * 0.18,
  ];

  return (
    <Shell glowA="rgba(16,185,129,0.14)" glowB="rgba(59,130,246,0.12)">
      <Label text="Delivery approach" x={48} y={40} accent={COLORS.mint} />
      <div
        style={{
          position: "absolute",
          left: 52,
          top: 94,
          color: COLORS.ink,
          fontSize: 36,
          fontWeight: 700,
          letterSpacing: -1.2,
        }}
      >
        From backlog clarity to production-grade release
      </div>
      <LiteCard
        title="Design"
        subtitle="Clarify flows, edge cases, and system boundaries before code lands."
        left={60}
        top={186}
        width={250}
        height={180}
        accent={COLORS.mint}
        accentSoft={COLORS.mintSoft}
        frame={frame}
        delay={0}
      />
      <LiteCard
        title="Ship"
        subtitle="Tight CI, tests, and observability keep releases dependable."
        left={60}
        top={390}
        width={250}
        height={180}
        accent={COLORS.indigo}
        accentSoft={COLORS.indigoSoft}
        frame={frame}
        delay={8}
      />
      <div
        style={{
          position: "absolute",
          right: 52,
          top: 172,
          width: 592,
          height: 392,
          padding: 28,
          borderRadius: 34,
          background: COLORS.white,
          border: `1px solid ${COLORS.line}`,
          boxShadow: `0 32px 76px ${COLORS.shadow}`,
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
          Product release board
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1.15fr 0.85fr", gap: 18 }}>
          <div
            style={{
              height: 150,
              borderRadius: 24,
              background: "rgba(59,130,246,0.07)",
              padding: 18,
              display: "flex",
              alignItems: "end",
              gap: 14,
            }}
          >
            {values.map((value, index) => (
              <div
                key={index}
                style={{
                  width: 54,
                  height: `${36 + value * 100}px`,
                  borderRadius: 18,
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
              height: 150,
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
                  width: `${index === 1 ? 88 : 66}%`,
                  borderRadius: 999,
                  background: index === 1 ? COLORS.mintSoft : "rgba(20,33,61,0.08)",
                }}
              />
            ))}
          </div>
        </div>
        <div
          style={{
            marginTop: 18,
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: 14,
          }}
        >
          {[COLORS.indigoSoft, COLORS.blueSoft, COLORS.amberSoft].map((bg, index) => (
            <div
              key={bg}
              style={{
                height: 86,
                borderRadius: 22,
                background: bg,
                transform: `translateY(${Math.sin(progress * Math.PI * 2 + index) * 6}px)`,
              }}
            />
          ))}
        </div>
        <div style={{ display: "flex", gap: 12, marginTop: 20 }}>
          {[0, 1, 2, 3].map((index) => (
            <div
              key={index}
              style={{
                flex: index === 1 ? 1.2 : 1,
                height: 12,
                borderRadius: 999,
                background: "rgba(20,33,61,0.08)",
              }}
            />
          ))}
        </div>
      </div>
    </Shell>
  );
};

export const ProductDevelopmentTestimonialsScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const progress = progressAt(frame, durationInFrames);
  const highlight = 0.5 + 0.5 * Math.sin(progress * Math.PI * 2);

  return (
    <Shell dark glowA="rgba(59,130,246,0.16)" glowB="rgba(16,185,129,0.14)">
      <Label text="Architecture confidence" x={48} y={40} accent={COLORS.blue} dark />
      <div
        style={{
          position: "absolute",
          left: 52,
          top: 94,
          color: COLORS.darkText,
          fontSize: 36,
          fontWeight: 700,
          letterSpacing: -1.2,
        }}
      >
        Product reliability your team can trust
      </div>
      <DarkCard
        title="Incidents"
        left={62}
        top={198}
        width={240}
        height={150}
        accent={COLORS.blue}
        frame={frame}
        delay={0}
      />
      <DarkCard
        title="Velocity"
        left={334}
        top={198}
        width={240}
        height={150}
        accent={COLORS.mint}
        frame={frame}
        delay={8}
      />
      <div
        style={{
          position: "absolute",
          right: 58,
          top: 166,
          width: 316,
          height: 320,
          padding: 24,
          borderRadius: 32,
          background: COLORS.darkPanel,
          border: `1px solid ${COLORS.darkLine}`,
          boxShadow: "0 26px 60px rgba(3, 7, 18, 0.32)",
        }}
      >
        <div
          style={{
            color: COLORS.darkSoft,
            fontSize: 14,
            fontWeight: 700,
            letterSpacing: 2,
            textTransform: "uppercase",
            marginBottom: 20,
          }}
        >
          Release health
        </div>
        <svg width="268" height="130" viewBox="0 0 268 130" style={{ marginBottom: 22 }}>
          {[0, 1, 2].map((index) => (
            <line
              key={index}
              x1="0"
              x2="268"
              y1={24 + index * 32}
              y2={24 + index * 32}
              stroke="rgba(255,255,255,0.08)"
            />
          ))}
          <path
            d="M0 100 C 34 88, 58 96, 92 60 S 150 24, 180 42 S 226 70, 268 22"
            fill="none"
            stroke={COLORS.blue}
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray="360"
            strokeDashoffset={360 - 360 * ease(highlight)}
          />
        </svg>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
          {[COLORS.blueSoft, COLORS.mintSoft, COLORS.indigoSoft, COLORS.amberSoft].map((bg, index) => (
            <div
              key={bg}
              style={{
                height: 60,
                borderRadius: 18,
                background: bg,
                opacity: 0.68 + ((index % 2 === 0 ? highlight : 1 - highlight) * 0.24),
              }}
            />
          ))}
        </div>
      </div>
    </Shell>
  );
};

export const ProductDevelopmentBuildingScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const progress = progressAt(frame, durationInFrames);
  const path = ease(interpolate(progress, [0, 0.75], [0.08, 1], { extrapolateRight: "clamp" }));

  return (
    <Shell glowA="rgba(255,255,255,0.12)" glowB="rgba(59,130,246,0.16)">
      <Label text="Next release" x={48} y={40} accent={COLORS.indigo} />
      <div
        style={{
          position: "absolute",
          left: 52,
          top: 94,
          color: COLORS.ink,
          fontSize: 36,
          fontWeight: 700,
          letterSpacing: -1.2,
        }}
      >
        A durable plan from kickoff to launch
      </div>
      <div
        style={{
          position: "absolute",
          left: 88,
          top: 262,
          width: 600 * path,
          height: 4,
          borderRadius: 999,
          background: `linear-gradient(90deg, ${COLORS.indigo}88, ${COLORS.blue}88)`,
        }}
      />
      <LiteCard
        title="Scope"
        subtitle="Define priorities, technical risks, and success criteria."
        left={58}
        top={190}
        width={238}
        height={174}
        accent={COLORS.indigo}
        accentSoft={COLORS.indigoSoft}
        frame={frame}
        delay={0}
      />
      <LiteCard
        title="Deliver"
        subtitle="Ship with confidence across application, API, and infra."
        left={326}
        top={190}
        width={238}
        height={174}
        accent={COLORS.blue}
        accentSoft={COLORS.blueSoft}
        frame={frame}
        delay={8}
      />
      <LiteCard
        title="Operate"
        subtitle="Keep release quality visible with monitoring and feedback loops."
        left={594}
        top={190}
        width={238}
        height={174}
        accent={COLORS.mint}
        accentSoft={COLORS.mintSoft}
        frame={frame}
        delay={16}
      />
      <div
        style={{
          position: "absolute",
          right: 62,
          bottom: 72,
          width: 308,
          height: 176,
          padding: 22,
          borderRadius: 30,
          background: COLORS.white,
          border: `1px solid ${COLORS.line}`,
          boxShadow: `0 28px 70px ${COLORS.shadow}`,
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
          Delivery cadence
        </div>
        {[0, 1, 2].map((index) => (
          <div
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginBottom: 14,
            }}
          >
            <div
              style={{
                width: 12,
                height: 12,
                borderRadius: 999,
                background: [COLORS.indigo, COLORS.blue, COLORS.mint][index],
              }}
            />
            <div
              style={{
                flex: 1,
                height: 12,
                borderRadius: 999,
                background:
                  index === 1
                    ? "rgba(59,130,246,0.18)"
                    : "rgba(20,33,61,0.08)",
              }}
            />
          </div>
        ))}
      </div>
    </Shell>
  );
};
