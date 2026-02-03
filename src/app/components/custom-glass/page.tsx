'use client';

import React, { useState } from 'react';

const cssStyles = `
  .cg-root {
    --cg-blur: 74px;
    --cg-slat-count: 38;
    --cg-gradient-peak: 80;
    --cg-opacity: 0.2;
    --cg-gap: 0;
    --cg-caustic-speed: 8s;

    --cg-bg-a: #f6f7fb;
    --cg-bg-b: #edf1f7;
    --cg-bg-c: #e4eaf4;
    --cg-text: var(--foreground);
    --cg-text-muted: var(--muted);
    --cg-accent: var(--accent);
    --cg-radius: 14px;

    font-family: inherit;
    background: var(--background);
    color: var(--cg-text);
    padding: 24px 0 48px;
    margin: 0;
  }

  .cg-root[data-palette="default"] {
    --cg-bg-a: #f6f7fb;
    --cg-bg-b: #edf1f7;
    --cg-bg-c: #e4eaf4;
  }

  .cg-root[data-palette="violet"] {
    --cg-bg-a: #f5f3ff;
    --cg-bg-b: #ede9fe;
    --cg-bg-c: #ddd6fe;
    --cg-accent: #7c3aed;
  }

  .cg-root[data-palette="amber"] {
    --cg-bg-a: #fffbeb;
    --cg-bg-b: #fef3c7;
    --cg-bg-c: #fde68a;
    --cg-accent: #d97706;
  }

  .cg-root[data-palette="rose"] {
    --cg-bg-a: #fff1f2;
    --cg-bg-b: #ffe4e6;
    --cg-bg-c: #fecdd3;
    --cg-accent: #e11d48;
  }

  /* ── Controls ── */

  .cg-controls {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 24px 24px;
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .cg-controls-title {
    font-size: 14px;
    font-weight: 600;
    color: var(--cg-text-muted);
    padding-bottom: 12px;
    border-bottom: 1px solid var(--border);
    margin: 0;
  }

  .cg-sliders {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 24px;
  }

  .cg-slider-group {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .cg-slider-header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }

  .cg-slider-label {
    font-size: 14px;
    font-weight: 500;
    color: var(--cg-text);
  }

  .cg-slider-value {
    font-family: var(--font-geist-mono), ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
    font-size: 12px;
    color: var(--cg-text-muted);
  }

  .cg-slider {
    -webkit-appearance: none;
    appearance: none;
    width: 100%;
    height: 4px;
    border-radius: 2px;
    background: var(--border);
    outline: none;
  }

  .cg-slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: var(--cg-accent);
    cursor: pointer;
    border: 2px solid #fff;
    box-shadow: 0 2px 6px rgba(15, 23, 42, 0.15);
  }

  .cg-slider::-moz-range-thumb {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: var(--cg-accent);
    cursor: pointer;
    border: 2px solid #fff;
    box-shadow: 0 2px 6px rgba(15, 23, 42, 0.15);
  }

  .cg-pill-row {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
  }

  .cg-pill {
    font-family: inherit;
    font-size: 14px;
    font-weight: 600;
    padding: 8px 14px;
    border-radius: 999px;
    border: 1px solid var(--border);
    background: #fff;
    color: var(--cg-text);
    cursor: pointer;
    transition: box-shadow 0.2s ease, color 0.2s ease, border-color 0.2s ease, background 0.2s ease;
  }

  .cg-pill:hover {
    border-color: rgba(37, 99, 235, 0.35);
    color: var(--cg-accent);
  }

  .cg-pill[data-active='true'] {
    background: rgba(37, 99, 235, 0.12);
    border-color: rgba(37, 99, 235, 0.35);
    color: var(--cg-accent);
  }

  /* ── Section label ── */

  .cg-section-label {
    font-size: 14px;
    font-weight: 600;
    color: var(--cg-text-muted);
    padding: 40px 24px 16px;
    max-width: 1200px;
    margin: 0 auto 8px;
    border-bottom: 1px solid var(--border);
  }

  /* ── Scene backdrop ── */

  .cg-scene {
    position: relative;
    max-width: 1200px;
    margin: 0 auto;
    padding: 24px;
  }

  .cg-backdrop {
    position: relative;
    border-radius: 20px;
    overflow: hidden;
    min-height: 520px;
    background: var(--cg-bg-b);
    border: 1px solid var(--border);
  }

  .cg-backdrop-blobs {
    position: absolute;
    inset: 0;
    pointer-events: none;
  }

  .cg-blob {
    position: absolute;
    border-radius: 50%;
    filter: blur(50px);
    animation: cg-drift 14s ease-in-out infinite;
  }

  .cg-blob:nth-child(1) {
    width: 280px;
    height: 280px;
    background: rgba(168, 85, 247, 0.18);
    top: 10%;
    left: 15%;
  }

  .cg-blob:nth-child(2) {
    width: 220px;
    height: 220px;
    background: rgba(37, 99, 235, 0.15);
    bottom: 10%;
    right: 15%;
    animation-delay: -5s;
  }

  .cg-blob:nth-child(3) {
    width: 180px;
    height: 180px;
    background: rgba(16, 185, 129, 0.14);
    top: 45%;
    left: 55%;
    animation-delay: -9s;
  }

  .cg-blob:nth-child(4) {
    width: 160px;
    height: 160px;
    background: rgba(244, 63, 94, 0.12);
    top: 20%;
    right: 30%;
    animation-delay: -3s;
  }

  @keyframes cg-drift {
    0%, 100% { transform: translate(0, 0) scale(1); }
    33% { transform: translate(25px, -20px) scale(1.08); }
    66% { transform: translate(-20px, 15px) scale(0.92); }
  }

  @media (prefers-reduced-motion: reduce) {
    .cg-blob { animation: none !important; }
    .cg-caustic-sweep { animation: none !important; }
  }

  /* ── Slats container ── */

  .cg-slats-wrap {
    position: absolute;
    inset: 0;
    z-index: 2;
    display: flex;
    flex-direction: row;
    align-items: stretch;
    pointer-events: none;
  }

  .cg-slat {
    flex: 1;
    background-blend-mode: overlay;
  }

  /* Caustic shimmer overlay */
  .cg-caustic-sweep {
    position: absolute;
    inset: 0;
    z-index: 3;
    pointer-events: none;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(255,255,255,0.06) 40%,
      rgba(255,255,255,0.12) 50%,
      rgba(255,255,255,0.06) 60%,
      transparent 100%
    );
    animation: cg-sweep var(--cg-caustic-speed) ease-in-out infinite;
  }

  @keyframes cg-sweep {
    0%, 100% { transform: translateX(-120%); }
    50% { transform: translateX(120%); }
  }

  /* ── Content overlay on glass ── */

  .cg-overlay-content {
    position: relative;
    z-index: 4;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 520px;
    padding: 48px 32px;
    text-align: center;
  }

  .cg-overlay-eyebrow {
    font-size: 11px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: var(--cg-accent);
    margin-bottom: 12px;
  }

  .cg-overlay-heading {
    font-family: inherit;
    font-size: 32px;
    font-weight: 700;
    color: var(--cg-text);
    margin: 0 0 16px;
    line-height: 1.2;
    letter-spacing: -0.02em;
  }

  .cg-overlay-subtext {
    font-size: 15px;
    line-height: 1.6;
    color: var(--cg-text-muted);
    margin: 0 0 28px;
    max-width: 480px;
  }

  /* ── Cards variant ── */

  .cg-cards-grid {
    position: relative;
    z-index: 4;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    gap: 20px;
    padding: 40px 32px;
  }

  .cg-card {
    position: relative;
    border-radius: var(--cg-radius);
    overflow: hidden;
    padding: 28px 24px;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }

  .cg-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 18px 32px rgba(15, 23, 42, 0.12);
  }

  .cg-card-glass {
    position: absolute;
    inset: 0;
    border-radius: inherit;
    display: flex;
    flex-direction: row;
    align-items: stretch;
    pointer-events: none;
    overflow: hidden;
  }

  .cg-card-slat {
    flex: 1;
    background-blend-mode: overlay;
  }

  .cg-card-border {
    position: absolute;
    inset: 0;
    border-radius: inherit;
    pointer-events: none;
    z-index: 2;
  }

  .cg-card-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;
    position: relative;
    z-index: 3;
  }

  .cg-card-icon {
    width: 36px;
    height: 36px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    background: rgba(255, 255, 255, 0.8);
    border: 1px solid var(--border);
    color: var(--cg-accent);
  }

  .cg-card-badge {
    font-size: 11px;
    font-weight: 600;
    padding: 3px 10px;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.7);
    color: var(--cg-text-muted);
    border: 1px solid var(--border);
  }

  .cg-card-title {
    font-family: inherit;
    font-size: 18px;
    font-weight: 600;
    margin: 0 0 8px;
    color: var(--cg-text);
    position: relative;
    z-index: 3;
  }

  .cg-card-desc {
    font-size: 13px;
    line-height: 1.6;
    color: var(--cg-text-muted);
    margin: 0 0 20px;
    position: relative;
    z-index: 3;
  }

  .cg-card-stat {
    display: flex;
    gap: 16px;
    position: relative;
    z-index: 3;
  }

  .cg-card-stat-item {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .cg-card-stat-value {
    font-family: var(--font-geist-mono), ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
    font-size: 18px;
    font-weight: 500;
    color: var(--cg-accent);
  }

  .cg-card-stat-label {
    font-size: 11px;
    color: var(--cg-text-muted);
    text-transform: uppercase;
    letter-spacing: 0.06em;
  }

  /* ── Partition variant ── */

  .cg-partition-scene {
    position: relative;
    max-width: 1200px;
    margin: 0 auto;
    padding: 24px;
  }

  .cg-partition-bg {
    position: relative;
    border-radius: 20px;
    overflow: hidden;
    min-height: 340px;
    background: var(--cg-bg-b);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 40px;
    border: 1px solid var(--border);
  }

  .cg-partition-bg-blobs {
    position: absolute;
    inset: 0;
    pointer-events: none;
  }

  .cg-partition-layout {
    position: relative;
    z-index: 2;
    display: flex;
    align-items: center;
    gap: 0;
    width: 100%;
    max-width: 860px;
  }

  .cg-partition-side {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 20px;
  }

  .cg-partition-side-title {
    font-size: 15px;
    font-weight: 600;
    color: var(--cg-text);
  }

  .cg-partition-side-text {
    font-size: 13px;
    color: var(--cg-text-muted);
    line-height: 1.6;
  }

  .cg-partition-glass {
    width: 64px;
    min-height: 220px;
    border-radius: 12px;
    position: relative;
    overflow: hidden;
    flex-shrink: 0;
    display: flex;
    flex-direction: row;
    align-items: stretch;
  }

  .cg-partition-slat {
    flex: 1;
    background-blend-mode: overlay;
  }

  .cg-partition-border {
    position: absolute;
    inset: 0;
    border-radius: inherit;
    border: 1px solid rgba(23, 23, 23, 0.07);
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.45);
    pointer-events: none;
    z-index: 2;
  }

  .cg-partition-shimmer {
    position: absolute;
    inset: 0;
    border-radius: inherit;
    pointer-events: none;
    z-index: 3;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(255,255,255,0.08) 45%,
      rgba(255,255,255,0.14) 50%,
      rgba(255,255,255,0.08) 55%,
      transparent 100%
    );
    animation: cg-sweep var(--cg-caustic-speed) ease-in-out infinite;
  }

  /* ── Viewport band variant ── */

  .cg-band-scene {
    position: relative;
    max-width: 1200px;
    margin: 0 auto;
    padding: 24px;
  }

  .cg-band-bg {
    position: relative;
    border-radius: 20px;
    overflow: hidden;
    min-height: 400px;
    background: var(--cg-bg-c);
    display: flex;
    align-items: stretch;
    border: 1px solid var(--border);
  }

  .cg-band-bg-blobs {
    position: absolute;
    inset: 0;
    pointer-events: none;
  }

  .cg-band-clear-left {
    flex: 1;
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 40px;
    gap: 12px;
  }

  .cg-band-clear-title {
    font-size: 22px;
    font-weight: 700;
    color: var(--cg-text);
    letter-spacing: -0.02em;
  }

  .cg-band-clear-text {
    font-size: 14px;
    color: var(--cg-text-muted);
    line-height: 1.6;
    max-width: 320px;
  }

  .cg-band-glass {
    width: 40%;
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: row;
    align-items: stretch;
    overflow: hidden;
  }

  .cg-band-slat {
    flex: 1;
    background-blend-mode: overlay;
  }

  .cg-band-shimmer {
    position: absolute;
    inset: 0;
    pointer-events: none;
    z-index: 3;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(255,255,255,0.06) 40%,
      rgba(255,255,255,0.12) 50%,
      rgba(255,255,255,0.06) 60%,
      transparent 100%
    );
    animation: cg-sweep var(--cg-caustic-speed) ease-in-out infinite;
  }

  .cg-band-clear-right {
    flex: 1;
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    padding: 40px;
    gap: 8px;
    text-align: right;
  }

  .cg-band-stat-value {
    font-family: var(--font-geist-mono), ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
    font-size: 36px;
    font-weight: 700;
    color: var(--cg-accent);
    letter-spacing: -0.03em;
  }

  .cg-band-stat-label {
    font-size: 12px;
    color: var(--cg-text-muted);
    text-transform: uppercase;
    letter-spacing: 1.5px;
  }

  /* ── Responsive ── */

  @media (max-width: 640px) {
    .cg-sliders { grid-template-columns: 1fr; }
    .cg-cards-grid { grid-template-columns: 1fr; padding: 24px 16px; }
    .cg-partition-layout { flex-direction: column; }
    .cg-partition-glass { width: 100%; min-height: 48px; flex-direction: row; }
    .cg-band-bg { flex-direction: column; }
    .cg-band-glass { width: 100%; min-height: 80px; }
    .cg-overlay-heading { font-size: 24px; }
    .cg-band-clear-right { align-items: flex-start; text-align: left; }
  }
`;

const CARDS = [
  {
    icon: '\u{1F4A0}',
    badge: 'Louvered',
    title: 'Column Diffusion',
    desc: 'Content viewed through discrete glass columns with heavy cylindrical blur and convex light refraction.',
    stats: [
      { value: '38', label: 'Columns' },
      { value: '74px', label: 'Blur' },
    ],
  },
  {
    icon: '\u{1F300}',
    badge: 'Privacy',
    title: 'Optical Partition',
    desc: 'Asymmetric gradient overlay creates directional opacity — objects obscured differently depending on viewing angle.',
    stats: [
      { value: '80%', label: 'Peak' },
      { value: '100%', label: 'Coverage' },
    ],
  },
  {
    icon: '\u{2728}',
    badge: 'Ambient',
    title: 'Chromatic Bleed',
    desc: 'Heavy blur per slat allows ambient color from background blobs to bleed through with soft diffusion.',
    stats: [
      { value: '200%', label: 'Saturate' },
      { value: '0px', label: 'Gap' },
    ],
  },
  {
    icon: '\u{1F52E}',
    badge: 'Depth',
    title: 'Convex Surface',
    desc: 'Each column simulates a convex glass cylinder — light edges and a dark interior create physical depth.',
    stats: [
      { value: '3D', label: 'Effect' },
      { value: '0.2', label: 'Opacity' },
    ],
  },
];

type Palette = 'default' | 'violet' | 'amber' | 'rose';

export default function CustomGlassPage() {
  const [blur, setBlur] = useState(74);
  const [slatCount, setSlatCount] = useState(38);
  const [gradientPeak, setGradientPeak] = useState(80);
  const [opacity, setOpacity] = useState(20);
  const [gap, setGap] = useState(0);
  const [causticSpeed, setCausticSpeed] = useState(8);
  const [palette, setPalette] = useState<Palette>('default');

  const slatStyle = (blurMult: number = 1): React.CSSProperties => ({
    background: `linear-gradient(90deg, rgba(255,255,255,${opacity / 100}) 0%, rgba(0,0,0,${opacity / 100}) ${gradientPeak}%, rgba(255,255,255,${opacity / 100}) 100%)`,
    backgroundBlendMode: 'overlay',
    backdropFilter: `blur(${blur * blurMult}px) saturate(180%)`,
    WebkitBackdropFilter: `blur(${blur * blurMult}px) saturate(180%)`,
  });

  const borderStyle = (): React.CSSProperties => ({
    border: `1px solid rgba(23, 23, 23, ${0.04 + opacity / 500})`,
    boxShadow: `inset 0 1px 0 rgba(255, 255, 255, ${0.3 + opacity / 200})`,
  });

  return (
    <>
      <style>{cssStyles}</style>
      <section
        className="cg-root"
        data-palette={palette}
        style={{ '--cg-caustic-speed': `${causticSpeed}s` } as React.CSSProperties}
      >
        {/* Controls */}
        <div className="cg-controls">
          <h2 className="cg-controls-title">Parameters</h2>

          <div className="cg-sliders">
            <div className="cg-slider-group">
              <div className="cg-slider-header">
                <span className="cg-slider-label">Color Scheme</span>
              </div>
              <div className="cg-pill-row">
                {(['default', 'violet', 'amber', 'rose'] as Palette[]).map((p) => (
                  <button
                    key={p}
                    className="cg-pill"
                    data-active={String(palette === p)}
                    onClick={() => setPalette(p)}
                  >
                    {p.charAt(0).toUpperCase() + p.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            <div className="cg-slider-group">
              <div className="cg-slider-header">
                <span className="cg-slider-label">Slat Count</span>
                <span className="cg-slider-value">{slatCount}</span>
              </div>
              <input
                type="range" className="cg-slider"
                min={8} max={60} step={1} value={slatCount}
                onChange={(e) => setSlatCount(Number(e.target.value))}
              />
            </div>

            <div className="cg-slider-group">
              <div className="cg-slider-header">
                <span className="cg-slider-label">Blur Radius</span>
                <span className="cg-slider-value">{blur}px</span>
              </div>
              <input
                type="range" className="cg-slider"
                min={20} max={100} step={2} value={blur}
                onChange={(e) => setBlur(Number(e.target.value))}
              />
            </div>

            <div className="cg-slider-group">
              <div className="cg-slider-header">
                <span className="cg-slider-label">Gradient Peak</span>
                <span className="cg-slider-value">{gradientPeak}%</span>
              </div>
              <input
                type="range" className="cg-slider"
                min={50} max={95} step={1} value={gradientPeak}
                onChange={(e) => setGradientPeak(Number(e.target.value))}
              />
            </div>

            <div className="cg-slider-group">
              <div className="cg-slider-header">
                <span className="cg-slider-label">Overlay Opacity</span>
                <span className="cg-slider-value">{opacity}%</span>
              </div>
              <input
                type="range" className="cg-slider"
                min={5} max={40} step={1} value={opacity}
                onChange={(e) => setOpacity(Number(e.target.value))}
              />
            </div>

            <div className="cg-slider-group">
              <div className="cg-slider-header">
                <span className="cg-slider-label">Slat Gap</span>
                <span className="cg-slider-value">{gap}px</span>
              </div>
              <input
                type="range" className="cg-slider"
                min={0} max={4} step={0.5} value={gap}
                onChange={(e) => setGap(Number(e.target.value))}
              />
            </div>

            <div className="cg-slider-group">
              <div className="cg-slider-header">
                <span className="cg-slider-label">Shimmer Speed</span>
                <span className="cg-slider-value">{causticSpeed}s</span>
              </div>
              <input
                type="range" className="cg-slider"
                min={3} max={20} step={1} value={causticSpeed}
                onChange={(e) => setCausticSpeed(Number(e.target.value))}
              />
            </div>
          </div>
        </div>

        {/* Full panel showcase */}
        <div className="cg-scene">
          <div className="cg-backdrop">
            <div className="cg-backdrop-blobs">
              <div className="cg-blob" />
              <div className="cg-blob" />
              <div className="cg-blob" />
              <div className="cg-blob" />
            </div>

            <div className="cg-slats-wrap" style={{ gap: `${gap}px` }}>
              {Array.from({ length: slatCount }).map((_, i) => (
                <div key={i} className="cg-slat" style={slatStyle()} />
              ))}
            </div>

            <div className="cg-caustic-sweep" />

            <div className="cg-overlay-content">
              <div className="cg-overlay-eyebrow">Louvered Glass</div>
              <h3 className="cg-overlay-heading">Columnar Diffusion</h3>
              <p className="cg-overlay-subtext">
                Discrete glass columns with asymmetric convex gradients and heavy backdrop blur
                create an architectural louvered partition effect.
              </p>
            </div>
          </div>
        </div>

        {/* Cards showcase */}
        <div className="cg-section-label">Glass Cards</div>
        <div className="cg-scene">
          <div className="cg-backdrop">
            <div className="cg-backdrop-blobs">
              <div className="cg-blob" />
              <div className="cg-blob" />
              <div className="cg-blob" />
            </div>

            <div className="cg-cards-grid">
              {CARDS.map((card, i) => {
                const cardSlats = Math.max(6, Math.round(slatCount / 4));
                const blurMult = 0.3 + i * 0.1;
                return (
                  <div key={card.title} className="cg-card">
                    <div className="cg-card-glass">
                      {Array.from({ length: cardSlats }).map((_, j) => (
                        <div key={j} className="cg-card-slat" style={slatStyle(blurMult)} />
                      ))}
                    </div>
                    <div className="cg-card-border" style={borderStyle()} />
                    <div className="cg-card-header">
                      <div className="cg-card-icon">{card.icon}</div>
                      <span className="cg-card-badge">{card.badge}</span>
                    </div>
                    <h3 className="cg-card-title">{card.title}</h3>
                    <p className="cg-card-desc">{card.desc}</p>
                    <div className="cg-card-stat">
                      {card.stats.map((s) => (
                        <div key={s.label} className="cg-card-stat-item">
                          <span className="cg-card-stat-value">{s.value}</span>
                          <span className="cg-card-stat-label">{s.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Partition variant */}
        <div className="cg-section-label">Column Partition</div>
        <div className="cg-partition-scene">
          <div className="cg-partition-bg">
            <div className="cg-partition-bg-blobs">
              <div className="cg-blob" />
              <div className="cg-blob" />
            </div>

            <div className="cg-partition-layout">
              <div className="cg-partition-side">
                <div className="cg-partition-side-title">Clear Side</div>
                <div className="cg-partition-side-text">
                  Content on this side remains fully visible. The louvered glass partition creates a
                  physical boundary that still lets ambient light and color bleed through.
                </div>
              </div>

              <div className="cg-partition-glass" style={{ gap: `${gap}px` }}>
                {Array.from({ length: Math.max(4, Math.round(slatCount / 6)) }).map((_, i) => (
                  <div key={i} className="cg-partition-slat" style={slatStyle(1.2)} />
                ))}
                <div className="cg-partition-border" />
                <div className="cg-partition-shimmer" />
              </div>

              <div className="cg-partition-side">
                <div className="cg-partition-side-title">Diffused Side</div>
                <div className="cg-partition-side-text">
                  The columnar glass partition creates architectural depth — each glass cylinder
                  refracts light differently, producing a dimensional separation.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Band variant */}
        <div className="cg-section-label">Glass Band</div>
        <div className="cg-band-scene">
          <div className="cg-band-bg">
            <div className="cg-band-bg-blobs">
              <div className="cg-blob" />
              <div className="cg-blob" />
              <div className="cg-blob" />
            </div>

            <div className="cg-band-clear-left">
              <div className="cg-band-clear-title">Through the Columns</div>
              <div className="cg-band-clear-text">
                A vertical band of louvered glass columns bisects the viewport, creating a
                gradient from clarity to deep diffusion and back.
              </div>
            </div>

            <div className="cg-band-glass" style={{ gap: `${gap}px` }}>
              {Array.from({ length: Math.round(slatCount / 2) }).map((_, i) => (
                <div key={i} className="cg-band-slat" style={slatStyle(0.8)} />
              ))}
              <div className="cg-band-shimmer" />
            </div>

            <div className="cg-band-clear-right">
              <div className="cg-band-stat-value">{slatCount}</div>
              <div className="cg-band-stat-label">Glass Columns</div>
              <div style={{ height: 16 }} />
              <div className="cg-band-stat-value">{blur}px</div>
              <div className="cg-band-stat-label">Blur Depth</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
