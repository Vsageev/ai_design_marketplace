# Animated Demo Creation Guide

This guide explains how to create video-like animated demos for design system showcases.

## Overview

Animated demos are auto-playing presentations that showcase design components through timed scenes with CSS animations. They function like a video but are fully interactive and built with React.

## File Structure

```
src/app/demo/
├── page.tsx          # Main demo component
└── DEMO_GUIDE.md     # This guide
```

For design-specific demos:
```
src/app/designs/<design-name>/
├── demo/
│   └── page.tsx      # Demo for this specific design
```

## Core Architecture

### 1. Scene-Based Structure

The demo is divided into scenes, each showcasing different components:

```tsx
const SCENE_DURATION = 4000; // milliseconds per scene
const TOTAL_SCENES = 6;

const [currentScene, setCurrentScene] = useState(0);
const [isPlaying, setIsPlaying] = useState(true);
```

### 2. Auto-Play Timer

```tsx
useEffect(() => {
  if (!isPlaying) return;

  const timer = setInterval(() => {
    setCurrentScene((prev) => (prev + 1) % TOTAL_SCENES);
  }, SCENE_DURATION);

  return () => clearInterval(timer);
}, [isPlaying]);
```

### 3. Scene Container Pattern

Each scene is an absolutely positioned container that fades in/out:

```css
.scene {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.8s ease;
}

.scene.active {
  opacity: 1;
  pointer-events: auto;
}
```

```tsx
<div className={`scene ${currentScene === 0 ? 'active' : ''}`}>
  {/* Scene content */}
</div>
```

## Animation Patterns

### Essential Keyframes

```css
/* Fade in from bottom */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Fade in from left */
@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-40px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Scale in (for cards, badges) */
@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

/* Slide from bottom (for alerts, notifications) */
@keyframes slideInFromBottom {
  from {
    opacity: 0;
    transform: translateY(100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Glow effect (for highlights) */
@keyframes glow {
  0%, 100% { box-shadow: 0 0 20px rgba(167, 139, 250, 0.3); }
  50% { box-shadow: 0 0 40px rgba(167, 139, 250, 0.6); }
}
```

### Triggering Animations

Use state to control when animations play:

```tsx
const [animateElements, setAnimateElements] = useState(false);

useEffect(() => {
  setAnimateElements(false);
  setTimeout(() => setAnimateElements(true), 100);
}, [currentScene]);
```

```tsx
<div className={`card ${animateElements && currentScene === 1 ? 'animate' : ''}`}>
```

### Staggered Animations

Use `animation-delay` for sequential reveals:

```css
.card {
  opacity: 0;
}

.card.animate {
  animation: fadeInUp 0.6s ease forwards;
}

.card:nth-child(1).animate { animation-delay: 0s; }
.card:nth-child(2).animate { animation-delay: 0.15s; }
.card:nth-child(3).animate { animation-delay: 0.3s; }
```

## Recommended Scenes

### Scene 1: Hero / Introduction
- Design system name and tagline
- Animated badge, title, subtitle
- Call-to-action buttons

### Scene 2: Cards / Components
- 2-4 cards showing different states
- Staggered fade-in animations

### Scene 3: Data / Stats
- Stat cards with numbers
- Counter animations (optional)
- Grid layout

### Scene 4: Feedback States
- Alerts (success, error, warning, info)
- Slide-in animations
- Toast notifications

### Scene 5: Progress / Charts
- Progress bars with fill animations
- Percentage counters
- Visual data representation

### Scene 6: Closing / Brand
- Logo with glow effect
- Tagline
- Final call-to-action

## Interactive Controls

### Progress Dots

```tsx
<div className="demo-progress">
  {Array.from({ length: TOTAL_SCENES }).map((_, index) => (
    <div
      key={index}
      className={`progress-dot ${currentScene === index ? 'active' : ''}`}
      onClick={() => setCurrentScene(index)}
    />
  ))}
</div>
```

### Play/Pause Button

```tsx
<button onClick={() => setIsPlaying(!isPlaying)}>
  {isPlaying ? '⏸' : '▶'}
</button>
```

### Replay Button

```tsx
<button onClick={() => { setCurrentScene(0); setIsPlaying(true); }}>
  ↺ Replay
</button>
```

## Animated Values

For progress bars or counters that animate:

```tsx
const [progressValues, setProgressValues] = useState([0, 0, 0]);

useEffect(() => {
  if (currentScene === 4) {
    setTimeout(() => {
      setProgressValues([85, 62, 94]);
    }, 800);
  } else {
    setProgressValues([0, 0, 0]);
  }
}, [currentScene]);
```

```tsx
<div
  className="progress-fill"
  style={{ width: `${progressValues[0]}%` }}
/>
```

## Design Token Integration

Import tokens from the source design:

```css
.demo-container {
  /* Copy color tokens from the design */
  --bg-primary: #000000;
  --bg-card: #111111;
  --text-primary: #ffffff;
  --accent-purple: #a78bfa;
  /* ... */
}
```

## Timing Guidelines

| Element Type | Duration | Delay Between |
|-------------|----------|---------------|
| Scene transition | 800ms | - |
| Hero elements | 600-800ms | 200ms |
| Cards | 500-600ms | 150ms |
| Alerts | 400-500ms | 200ms |
| Stats | 400-500ms | 100ms |
| Progress fills | 1000-1500ms | - |

## Checklist

- [ ] Define color tokens from source design
- [ ] Create 4-6 scenes showcasing key components
- [ ] Add keyframe animations for each element type
- [ ] Implement scene auto-rotation with timer
- [ ] Add staggered delays for grouped elements
- [ ] Include play/pause control
- [ ] Include scene navigation dots
- [ ] Include replay button
- [ ] Test transitions between all scenes
- [ ] Verify animations reset when revisiting scenes

## Example Component Template

```tsx
'use client';

import React, { useEffect, useState } from 'react';

const SCENE_DURATION = 4000;
const TOTAL_SCENES = 6;

export default function DesignDemo() {
  const [currentScene, setCurrentScene] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(false);
    setTimeout(() => setAnimate(true), 100);
  }, [currentScene]);

  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      setCurrentScene((prev) => (prev + 1) % TOTAL_SCENES);
    }, SCENE_DURATION);
    return () => clearInterval(timer);
  }, [isPlaying]);

  return (
    <div className="demo-container">
      {/* Scene 1 */}
      <div className={`scene ${currentScene === 0 ? 'active' : ''}`}>
        <h1 className={animate && currentScene === 0 ? 'animate' : ''}>
          Your Design Name
        </h1>
      </div>

      {/* Add more scenes... */}

      {/* Controls */}
      <button onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? '⏸' : '▶'}
      </button>
    </div>
  );
}
```

## Tips

1. **Keep scenes focused** - Each scene should highlight 1-2 component types
2. **Use consistent timing** - Similar elements should animate at similar speeds
3. **Add breathing room** - 4 seconds per scene gives time to appreciate details
4. **Test on different speeds** - Some users may want faster/slower playback
5. **Reset animations** - Always reset element states when leaving a scene
6. **Match the design** - Use the exact colors, fonts, and spacing from the source

---

# Exporting to Video (MP4)

Use Remotion to convert demos to actual video files.

## File Structure

```
remotion/
├── index.ts       # Entry point - registers root
├── Root.tsx       # Composition registration (dimensions, fps, duration)
└── DemoVideo.tsx  # Video scenes with Remotion animations
```

## Setup

Install Remotion:
```bash
npm install remotion @remotion/cli @remotion/bundler
```

Add scripts to `package.json`:
```json
{
  "scripts": {
    "remotion:preview": "remotion studio remotion/index.ts",
    "remotion:render": "remotion render remotion/index.ts DemoVideo out/demo.mp4",
    "remotion:render:4k": "remotion render remotion/index.ts DemoVideo4K out/demo-4k.mp4",
    "remotion:render:square": "remotion render remotion/index.ts DemoVideoSquare out/demo-square.mp4"
  }
}
```

## Core Remotion Concepts

### Entry Point (index.ts)

```tsx
import { registerRoot } from 'remotion';
import { RemotionRoot } from './Root';

registerRoot(RemotionRoot);
```

### Composition Registration (Root.tsx)

```tsx
import { Composition } from 'remotion';
import { DemoVideo } from './DemoVideo';

export const RemotionRoot: React.FC = () => {
  const FPS = 30;
  const SCENE_DURATION = 90; // 3 seconds per scene at 30fps
  const TOTAL_SCENES = 6;
  const TOTAL_FRAMES = SCENE_DURATION * TOTAL_SCENES;

  return (
    <>
      <Composition
        id="DemoVideo"
        component={DemoVideo}
        durationInFrames={TOTAL_FRAMES}
        fps={FPS}
        width={1920}
        height={1080}
      />
      {/* Add more compositions for different resolutions */}
    </>
  );
};
```

### Frame-Based Animations (DemoVideo.tsx)

Instead of CSS keyframes, use Remotion's frame-based system:

```tsx
import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
  Sequence,
} from 'remotion';

const MyScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Fade in from 0 to 1 over frames 0-20
  const opacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateRight: 'clamp',
  });

  // Spring animation for scale
  const scale = spring({
    frame,
    fps,
    from: 0.8,
    to: 1,
    durationInFrames: 20,
  });

  // Slide up animation
  const translateY = interpolate(frame, [0, 25], [40, 0], {
    extrapolateRight: 'clamp',
  });

  return (
    <div style={{
      opacity,
      transform: `scale(${scale}) translateY(${translateY}px)`,
    }}>
      Content
    </div>
  );
};
```

### Sequences for Scenes

```tsx
export const DemoVideo: React.FC = () => {
  const SCENE_DURATION = 90; // frames (3 sec at 30fps)

  return (
    <AbsoluteFill>
      <Sequence from={0} durationInFrames={SCENE_DURATION}>
        <HeroScene />
      </Sequence>
      <Sequence from={SCENE_DURATION} durationInFrames={SCENE_DURATION}>
        <CardsScene />
      </Sequence>
      <Sequence from={SCENE_DURATION * 2} durationInFrames={SCENE_DURATION}>
        <StatsScene />
      </Sequence>
      {/* More scenes... */}
    </AbsoluteFill>
  );
};
```

## Animation Helpers

### Staggered Delays

```tsx
const Card: React.FC<{ delay: number }> = ({ delay }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Start animation after delay frames
  const opacity = interpolate(
    frame,
    [delay, delay + 20],
    [0, 1],
    { extrapolateRight: 'clamp' }
  );

  const y = spring({
    frame: Math.max(0, frame - delay),
    fps,
    from: 40,
    to: 0,
    durationInFrames: 25,
  });

  return (
    <div style={{ opacity, transform: `translateY(${y}px)` }}>
      Card content
    </div>
  );
};

// Usage with stagger
<Card delay={0} />
<Card delay={10} />
<Card delay={20} />
```

### Animated Progress Bars

```tsx
const ProgressBar: React.FC<{ value: number; delay: number }> = ({ value, delay }) => {
  const frame = useCurrentFrame();

  const width = interpolate(
    frame,
    [delay + 20, delay + 60],
    [0, value],
    { extrapolateRight: 'clamp' }
  );

  return (
    <div className="progress-bar">
      <div style={{ width: `${width}%` }} />
    </div>
  );
};
```

### Looping Glow Effect

```tsx
const GlowingLogo: React.FC = () => {
  const frame = useCurrentFrame();

  // Loop every 60 frames (2 sec at 30fps)
  const glowIntensity = interpolate(
    frame % 60,
    [0, 30, 60],
    [0.3, 0.6, 0.3]
  );

  return (
    <div style={{
      boxShadow: `0 0 ${40 * glowIntensity}px rgba(167, 139, 250, ${glowIntensity})`,
    }}>
      Logo
    </div>
  );
};
```

## Commands

```bash
# Preview in browser with timeline controls
npm run remotion:preview

# Render to MP4 (1080p)
npm run remotion:render

# Render 4K version
npm run remotion:render:4k

# Render square format (for social media)
npm run remotion:render:square
```

## Output Formats

| Composition | Resolution | Use Case |
|-------------|------------|----------|
| DemoVideo | 1920x1080 | Standard HD |
| DemoVideo4K | 3840x2160 | High quality |
| DemoVideoSquare | 1080x1080 | Instagram, social |

## Converting Web Demo to Remotion

| Web (CSS/React) | Remotion |
|-----------------|----------|
| `useState` + `setInterval` | `useCurrentFrame()` |
| CSS `animation` | `interpolate()` |
| CSS `transition` | `spring()` |
| `animation-delay` | Frame offset in `interpolate` |
| Scene switching | `<Sequence>` components |
| `opacity: 0/1` | `interpolate(frame, [0, 20], [0, 1])` |
| `transform: translateY(40px)` | `interpolate(frame, [0, 20], [40, 0])` |

## Checklist for Video Export

- [ ] Create `remotion/index.ts` entry point
- [ ] Create `remotion/Root.tsx` with compositions
- [ ] Convert CSS animations to `interpolate()` / `spring()`
- [ ] Wrap scenes in `<Sequence>` components
- [ ] Use `extrapolateRight: 'clamp'` to prevent overshoot
- [ ] Test with `npm run remotion:preview`
- [ ] Render with `npm run remotion:render`
- [ ] Create `out/` directory for output files
