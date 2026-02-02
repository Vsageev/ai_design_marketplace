import React from 'react';
import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
  Sequence,
} from 'remotion';

const COLORS = {
  bgPrimary: '#000000',
  bgCard: '#111111',
  bgElevated: '#161616',
  borderSubtle: 'rgba(255, 255, 255, 0.08)',
  borderDefault: 'rgba(255, 255, 255, 0.12)',
  textPrimary: '#ffffff',
  textSecondary: 'rgba(255, 255, 255, 0.6)',
  textTertiary: 'rgba(255, 255, 255, 0.4)',
  accentPurple: '#a78bfa',
  accentPurpleBg: 'rgba(139, 92, 246, 0.15)',
  accentGreen: '#86efac',
  accentGreenBg: 'rgba(34, 197, 94, 0.15)',
  accentYellow: '#fde047',
  accentYellowBg: 'rgba(234, 179, 8, 0.15)',
  accentBlue: '#93c5fd',
  accentBlueBg: 'rgba(59, 130, 246, 0.15)',
  accentRed: '#fca5a5',
  accentRedBg: 'rgba(239, 68, 68, 0.15)',
};

const styles: Record<string, React.CSSProperties> = {
  container: {
    backgroundColor: COLORS.bgPrimary,
    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
    color: COLORS.textPrimary,
  },
  centered: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

// Scene 1: Hero
const HeroScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const badgeOpacity = interpolate(frame, [0, 20], [0, 1], { extrapolateRight: 'clamp' });
  const badgeScale = spring({ frame, fps, from: 0.8, to: 1, durationInFrames: 20 });

  const titleOpacity = interpolate(frame, [15, 35], [0, 1], { extrapolateRight: 'clamp' });
  const titleY = interpolate(frame, [15, 35], [40, 0], { extrapolateRight: 'clamp' });

  const subtitleOpacity = interpolate(frame, [30, 50], [0, 1], { extrapolateRight: 'clamp' });
  const subtitleY = interpolate(frame, [30, 50], [30, 0], { extrapolateRight: 'clamp' });

  const buttonsOpacity = interpolate(frame, [45, 65], [0, 1], { extrapolateRight: 'clamp' });
  const buttonsY = interpolate(frame, [45, 65], [30, 0], { extrapolateRight: 'clamp' });

  return (
    <AbsoluteFill style={{ ...styles.container, ...styles.centered }}>
      <div
        style={{
          opacity: badgeOpacity,
          transform: `scale(${badgeScale})`,
          display: 'inline-flex',
          alignItems: 'center',
          gap: 8,
          padding: '8px 16px',
          background: COLORS.accentPurpleBg,
          border: `1px solid rgba(167, 139, 250, 0.3)`,
          borderRadius: 100,
          fontSize: 14,
          color: COLORS.accentPurple,
          marginBottom: 32,
        }}
      >
        <span style={{ fontWeight: 600 }}>NEW</span>
        <span>Minimalist Black Design System</span>
      </div>

      <h1
        style={{
          opacity: titleOpacity,
          transform: `translateY(${titleY}px)`,
          fontSize: 80,
          fontWeight: 700,
          letterSpacing: '-0.03em',
          lineHeight: 1.1,
          marginBottom: 24,
          background: 'linear-gradient(135deg, #ffffff 0%, rgba(255,255,255,0.7) 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >
        Linear Dark
      </h1>

      <p
        style={{
          opacity: subtitleOpacity,
          transform: `translateY(${subtitleY}px)`,
          fontSize: 22,
          color: COLORS.textSecondary,
          maxWidth: 550,
          lineHeight: 1.6,
          textAlign: 'center',
          marginBottom: 40,
        }}
      >
        A modern dark design system inspired by Linear. Clean interfaces,
        subtle borders, and refined interactions.
      </p>

      <div
        style={{
          opacity: buttonsOpacity,
          transform: `translateY(${buttonsY}px)`,
          display: 'flex',
          gap: 16,
        }}
      >
        <button
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 16,
            fontWeight: 500,
            padding: '16px 32px',
            borderRadius: 10,
            border: 'none',
            background: COLORS.textPrimary,
            color: COLORS.bgPrimary,
            cursor: 'pointer',
          }}
        >
          Get Started
        </button>
        <button
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 16,
            fontWeight: 500,
            padding: '16px 32px',
            borderRadius: 10,
            background: 'transparent',
            color: COLORS.textSecondary,
            border: `1px solid ${COLORS.borderDefault}`,
            cursor: 'pointer',
          }}
        >
          View Docs
        </button>
      </div>
    </AbsoluteFill>
  );
};

// Card Component
const Card: React.FC<{
  title: string;
  subtitle: string;
  team: string;
  badge: string;
  badgeColor: string;
  delay: number;
}> = ({ title, subtitle, team, badge, badgeColor, delay }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const opacity = interpolate(frame, [delay, delay + 20], [0, 1], { extrapolateRight: 'clamp' });
  const y = spring({ frame: Math.max(0, frame - delay), fps, from: 40, to: 0, durationInFrames: 25 });

  const badgeBg = badgeColor === 'purple' ? COLORS.accentPurpleBg :
    badgeColor === 'blue' ? COLORS.accentBlueBg : COLORS.accentGreenBg;
  const badgeTextColor = badgeColor === 'purple' ? COLORS.accentPurple :
    badgeColor === 'blue' ? COLORS.accentBlue : COLORS.accentGreen;

  return (
    <div
      style={{
        opacity,
        transform: `translateY(${y}px)`,
        background: COLORS.bgCard,
        border: `1px solid ${COLORS.borderSubtle}`,
        borderRadius: 16,
        overflow: 'hidden',
        flex: 1,
      }}
    >
      <div
        style={{
          padding: '16px 20px',
          background: COLORS.bgElevated,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottom: `1px solid ${COLORS.borderSubtle}`,
        }}
      >
        <span style={{ fontSize: 13, fontWeight: 500, color: COLORS.textSecondary }}>{team}</span>
        <span
          style={{
            padding: '5px 12px',
            borderRadius: 6,
            fontSize: 12,
            fontWeight: 500,
            background: badgeBg,
            color: badgeTextColor,
          }}
        >
          {badge}
        </span>
      </div>
      <div style={{ padding: 20 }}>
        <div style={{ fontSize: 17, fontWeight: 600, color: COLORS.textPrimary, marginBottom: 8 }}>
          {title}
        </div>
        <div style={{ fontSize: 14, color: COLORS.textTertiary }}>{subtitle}</div>
      </div>
    </div>
  );
};

// Scene 2: Cards
const CardsScene: React.FC = () => {
  return (
    <AbsoluteFill style={{ ...styles.container, ...styles.centered, padding: 80 }}>
      <div style={{ display: 'flex', gap: 24, width: '100%', maxWidth: 1200 }}>
        <Card
          team="Engineering"
          badge="ENG-135"
          badgeColor="purple"
          title="Refactor sonic crawler"
          subtitle="Optimize performance and memory usage"
          delay={0}
        />
        <Card
          team="Design"
          badge="DES-089"
          badgeColor="blue"
          title="Update component library"
          subtitle="Refresh design tokens and spacing"
          delay={10}
        />
        <Card
          team="Product"
          badge="PRD-042"
          badgeColor="green"
          title="Launch new onboarding"
          subtitle="Improve user activation rates"
          delay={20}
        />
      </div>
    </AbsoluteFill>
  );
};

// Stat Card Component
const StatCard: React.FC<{
  label: string;
  value: string;
  color: string;
  delay: number;
}> = ({ label, value, color, delay }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const scale = spring({ frame: Math.max(0, frame - delay), fps, from: 0.8, to: 1, durationInFrames: 20 });
  const opacity = interpolate(frame, [delay, delay + 15], [0, 1], { extrapolateRight: 'clamp' });

  const textColor = color === 'purple' ? COLORS.accentPurple :
    color === 'green' ? COLORS.accentGreen :
    color === 'blue' ? COLORS.accentBlue : COLORS.accentYellow;

  return (
    <div
      style={{
        opacity,
        transform: `scale(${scale})`,
        background: COLORS.bgCard,
        border: `1px solid ${COLORS.borderSubtle}`,
        borderRadius: 16,
        padding: 28,
      }}
    >
      <div
        style={{
          fontSize: 13,
          color: COLORS.textTertiary,
          marginBottom: 8,
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
        }}
      >
        {label}
      </div>
      <div
        style={{
          fontSize: 42,
          fontWeight: 700,
          letterSpacing: '-0.02em',
          color: textColor,
        }}
      >
        {value}
      </div>
    </div>
  );
};

// Scene 3: Stats
const StatsScene: React.FC = () => {
  const frame = useCurrentFrame();
  const titleOpacity = interpolate(frame, [0, 20], [0, 1], { extrapolateRight: 'clamp' });
  const titleY = interpolate(frame, [0, 20], [30, 0], { extrapolateRight: 'clamp' });

  return (
    <AbsoluteFill style={{ ...styles.container, ...styles.centered }}>
      <h2
        style={{
          opacity: titleOpacity,
          transform: `translateY(${titleY}px)`,
          fontSize: 36,
          fontWeight: 600,
          color: COLORS.textPrimary,
          marginBottom: 40,
        }}
      >
        Dashboard Overview
      </h2>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 20,
          maxWidth: 1000,
        }}
      >
        <StatCard label="Active Issues" value="847" color="purple" delay={10} />
        <StatCard label="Completed" value="2.4K" color="green" delay={18} />
        <StatCard label="Cycle Time" value="3.2d" color="blue" delay={26} />
        <StatCard label="Velocity" value="+18%" color="yellow" delay={34} />
      </div>
    </AbsoluteFill>
  );
};

// Alert Component
const Alert: React.FC<{
  type: 'success' | 'info' | 'warning' | 'error';
  icon: string;
  message: string;
  delay: number;
}> = ({ type, icon, message, delay }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const opacity = interpolate(frame, [delay, delay + 15], [0, 1], { extrapolateRight: 'clamp' });
  const y = spring({ frame: Math.max(0, frame - delay), fps, from: 60, to: 0, durationInFrames: 20 });

  const config = {
    success: { bg: COLORS.accentGreenBg, color: COLORS.accentGreen, border: 'rgba(34, 197, 94, 0.3)' },
    info: { bg: COLORS.accentBlueBg, color: COLORS.accentBlue, border: 'rgba(59, 130, 246, 0.3)' },
    warning: { bg: COLORS.accentYellowBg, color: COLORS.accentYellow, border: 'rgba(234, 179, 8, 0.3)' },
    error: { bg: COLORS.accentRedBg, color: COLORS.accentRed, border: 'rgba(239, 68, 68, 0.3)' },
  }[type];

  return (
    <div
      style={{
        opacity,
        transform: `translateY(${y}px)`,
        padding: '16px 20px',
        borderRadius: 12,
        fontSize: 15,
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        border: `1px solid ${config.border}`,
        background: config.bg,
        color: config.color,
        width: '100%',
      }}
    >
      <span style={{ fontSize: 20 }}>{icon}</span>
      <span>{message}</span>
    </div>
  );
};

// Scene 4: Alerts
const AlertsScene: React.FC = () => {
  return (
    <AbsoluteFill style={{ ...styles.container, ...styles.centered, padding: 60 }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 600, width: '100%' }}>
        <Alert type="success" icon="✓" message="Issue ENG-135 has been successfully resolved" delay={0} />
        <Alert type="info" icon="ℹ" message="Linear Reviews is now available in beta" delay={12} />
        <Alert type="warning" icon="⚠" message="This issue has been open for over 30 days" delay={24} />
        <Alert type="error" icon="✕" message="Failed to sync with repository" delay={36} />
      </div>
    </AbsoluteFill>
  );
};

// Progress Bar Component
const ProgressBar: React.FC<{
  label: string;
  value: number;
  color: string;
  delay: number;
}> = ({ label, value, color, delay }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const opacity = interpolate(frame, [delay, delay + 15], [0, 1], { extrapolateRight: 'clamp' });
  const x = spring({ frame: Math.max(0, frame - delay), fps, from: -40, to: 0, durationInFrames: 20 });
  const fillWidth = interpolate(frame, [delay + 20, delay + 60], [0, value], { extrapolateRight: 'clamp' });

  const fillColor = color === 'purple' ? COLORS.accentPurple :
    color === 'green' ? COLORS.accentGreen : COLORS.accentBlue;

  return (
    <div
      style={{
        opacity,
        transform: `translateX(${x}px)`,
        width: '100%',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
        <span style={{ fontSize: 15, color: COLORS.textSecondary }}>{label}</span>
        <span style={{ fontSize: 15, fontWeight: 600, color: COLORS.textPrimary }}>{Math.round(fillWidth)}%</span>
      </div>
      <div
        style={{
          width: '100%',
          height: 10,
          background: COLORS.bgElevated,
          borderRadius: 5,
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            height: '100%',
            width: `${fillWidth}%`,
            background: fillColor,
            borderRadius: 5,
          }}
        />
      </div>
    </div>
  );
};

// Scene 5: Progress
const ProgressScene: React.FC = () => {
  const frame = useCurrentFrame();
  const titleOpacity = interpolate(frame, [0, 20], [0, 1], { extrapolateRight: 'clamp' });
  const titleY = interpolate(frame, [0, 20], [30, 0], { extrapolateRight: 'clamp' });

  return (
    <AbsoluteFill style={{ ...styles.container, ...styles.centered, padding: 60 }}>
      <div style={{ maxWidth: 700, width: '100%' }}>
        <h2
          style={{
            opacity: titleOpacity,
            transform: `translateY(${titleY}px)`,
            fontSize: 32,
            fontWeight: 600,
            color: COLORS.textPrimary,
            marginBottom: 40,
          }}
        >
          Sprint Progress
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          <ProgressBar label="Engineering" value={85} color="purple" delay={15} />
          <ProgressBar label="Design" value={62} color="green" delay={25} />
          <ProgressBar label="Product" value={94} color="blue" delay={35} />
        </div>
      </div>
    </AbsoluteFill>
  );
};

// Scene 6: Final
const FinalScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const logoScale = spring({ frame, fps, from: 0.5, to: 1, durationInFrames: 25 });
  const logoOpacity = interpolate(frame, [0, 20], [0, 1], { extrapolateRight: 'clamp' });

  const titleOpacity = interpolate(frame, [20, 40], [0, 1], { extrapolateRight: 'clamp' });
  const titleY = interpolate(frame, [20, 40], [30, 0], { extrapolateRight: 'clamp' });

  const subtitleOpacity = interpolate(frame, [35, 55], [0, 1], { extrapolateRight: 'clamp' });

  // Glow animation
  const glowIntensity = interpolate(
    frame % 60,
    [0, 30, 60],
    [0.3, 0.6, 0.3],
  );

  return (
    <AbsoluteFill style={{ ...styles.container, ...styles.centered }}>
      <div
        style={{
          opacity: logoOpacity,
          transform: `scale(${logoScale})`,
          width: 100,
          height: 100,
          background: `linear-gradient(135deg, ${COLORS.accentPurple}, ${COLORS.accentBlue})`,
          borderRadius: 24,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 48,
          fontWeight: 700,
          marginBottom: 32,
          boxShadow: `0 0 ${40 * glowIntensity}px rgba(167, 139, 250, ${glowIntensity})`,
        }}
      >
        L
      </div>

      <h2
        style={{
          opacity: titleOpacity,
          transform: `translateY(${titleY}px)`,
          fontSize: 56,
          fontWeight: 700,
          letterSpacing: '-0.02em',
          marginBottom: 16,
        }}
      >
        Linear Dark
      </h2>

      <p
        style={{
          opacity: subtitleOpacity,
          fontSize: 20,
          color: COLORS.textSecondary,
        }}
      >
        Built for modern product teams
      </p>
    </AbsoluteFill>
  );
};

// Main composition
export const DemoVideo: React.FC = () => {
  const SCENE_DURATION = 90; // 3 seconds at 30fps

  return (
    <AbsoluteFill style={styles.container}>
      <Sequence from={0} durationInFrames={SCENE_DURATION}>
        <HeroScene />
      </Sequence>
      <Sequence from={SCENE_DURATION} durationInFrames={SCENE_DURATION}>
        <CardsScene />
      </Sequence>
      <Sequence from={SCENE_DURATION * 2} durationInFrames={SCENE_DURATION}>
        <StatsScene />
      </Sequence>
      <Sequence from={SCENE_DURATION * 3} durationInFrames={SCENE_DURATION}>
        <AlertsScene />
      </Sequence>
      <Sequence from={SCENE_DURATION * 4} durationInFrames={SCENE_DURATION}>
        <ProgressScene />
      </Sequence>
      <Sequence from={SCENE_DURATION * 5} durationInFrames={SCENE_DURATION}>
        <FinalScene />
      </Sequence>
    </AbsoluteFill>
  );
};
