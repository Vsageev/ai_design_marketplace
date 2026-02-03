'use client';

import React, { useState } from 'react';

const cssStyles = `
  .mg-root {
    --mg-blur: 20px;
    --mg-opacity: 0.12;
    --mg-saturation: 140;
    --mg-tint: 255, 255, 255;
    --mg-border: 0.12;
    --mg-bg-a: #f6f7fb;
    --mg-bg-b: #edf1f7;
    --mg-bg-c: #e4eaf4;
    --mg-text: var(--foreground);
    --mg-text-muted: var(--muted);
    --mg-accent: var(--accent);
    --mg-radius: 14px;

    font-family: inherit;
    background: var(--background);
    color: var(--mg-text);
    padding: 24px 0 48px;
    margin: 0;
  }

  .mg-root[data-scheme="warm"] {
    --mg-bg-a: #f8f4f1;
    --mg-bg-b: #f1e6df;
    --mg-bg-c: #eadad0;
    --mg-accent: #c2410c;
  }

  .mg-root[data-scheme="ocean"] {
    --mg-bg-a: #f2f7fb;
    --mg-bg-b: #e6eff7;
    --mg-bg-c: #d7e6f2;
    --mg-accent: #0ea5e9;
  }

  .mg-root[data-scheme="forest"] {
    --mg-bg-a: #f3f8f3;
    --mg-bg-b: #e6f1e7;
    --mg-bg-c: #d6e7d8;
    --mg-accent: #16a34a;
  }

  /* ── Controls ── */

  .mg-controls {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 24px 24px;
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .mg-controls-title {
    font-size: 14px;
    font-weight: 600;
    color: var(--mg-text-muted);
    padding-bottom: 12px;
    border-bottom: 1px solid var(--border);
    margin: 0;
  }

  .mg-sliders {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 24px;
  }

  .mg-slider-group {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .mg-slider-header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }

  .mg-slider-label {
    font-size: 14px;
    font-weight: 500;
    color: var(--mg-text);
  }

  .mg-slider-value {
    font-family: var(--font-geist-mono), ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
    font-size: 12px;
    color: var(--mg-text-muted);
  }

  .mg-slider {
    -webkit-appearance: none;
    appearance: none;
    width: 100%;
    height: 4px;
    border-radius: 2px;
    background: var(--border);
    outline: none;
  }

  .mg-slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: var(--mg-accent);
    cursor: pointer;
    border: 2px solid #fff;
    box-shadow: 0 2px 6px rgba(15, 23, 42, 0.15);
  }

  .mg-slider::-moz-range-thumb {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: var(--mg-accent);
    cursor: pointer;
    border: 2px solid #fff;
    box-shadow: 0 2px 6px rgba(15, 23, 42, 0.15);
  }

  .mg-pill-row {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
  }

  .mg-pill {
    font-family: inherit;
    font-size: 14px;
    font-weight: 600;
    padding: 8px 14px;
    border-radius: 999px;
    border: 1px solid var(--border);
    background: #fff;
    color: var(--mg-text);
    cursor: pointer;
    transition: box-shadow 0.2s ease, transform 0.2s ease, color 0.2s ease, border-color 0.2s ease, background 0.2s ease;
  }

  .mg-pill:hover {
    border-color: rgba(37, 99, 235, 0.35);
    color: var(--mg-accent);
  }

  .mg-pill[data-active='true'] {
    background: rgba(37, 99, 235, 0.12);
    border-color: rgba(37, 99, 235, 0.35);
    color: var(--mg-accent);
  }

  /* ── Scene background ── */

  .mg-scene {
    position: relative;
    max-width: 1200px;
    margin: 0 auto;
    padding: 24px;
  }

  .mg-backdrop {
    position: relative;
    border-radius: 20px;
    overflow: hidden;
    min-height: 500px;
    background: var(--mg-bg-b);
    border: 1px solid var(--border);
  }

  .mg-backdrop-orbs {
    position: absolute;
    inset: 0;
    pointer-events: none;
  }

  .mg-orb {
    position: absolute;
    border-radius: 50%;
    filter: blur(40px);
    animation: mg-float 12s ease-in-out infinite;
  }

  .mg-orb:nth-child(1) {
    width: 220px;
    height: 220px;
    background: rgba(37, 99, 235, 0.14);
    top: 25%;
    left: 30%;
  }

  @keyframes mg-float {
    0%, 100% { transform: translate(0, 0) scale(1); }
    33% { transform: translate(20px, -15px) scale(1.05); }
    66% { transform: translate(-15px, 10px) scale(0.95); }
  }

  @media (prefers-reduced-motion: reduce) {
    .mg-orb { animation: none !important; }
    .mg-panel { transition: none !important; }
  }

  /* ── Glass panels ── */

  .mg-panels-grid {
    position: relative;
    z-index: 2;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 20px;
    padding: 40px 32px;
  }

  .mg-panel {
    border-radius: var(--mg-radius);
    padding: 28px 24px;
    position: relative;
    overflow: hidden;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }

  .mg-panel:hover {
    transform: translateY(-2px);
    box-shadow: 0 18px 32px rgba(15, 23, 42, 0.12);
  }

  .mg-panel::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
    opacity: 0.03;
    pointer-events: none;
  }

  .mg-panel-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;
  }

  .mg-panel-icon {
    width: 36px;
    height: 36px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    background: rgba(255, 255, 255, 0.8);
    border: 1px solid var(--border);
    color: var(--mg-accent);
  }

  .mg-panel-badge {
    font-size: 11px;
    font-weight: 600;
    padding: 3px 10px;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.7);
    color: var(--mg-text-muted);
    border: 1px solid var(--border);
  }

  .mg-panel-title {
    font-family: inherit;
    font-size: 18px;
    font-weight: 600;
    margin: 0 0 8px;
    color: var(--mg-text);
  }

  .mg-panel-desc {
    font-size: 13px;
    line-height: 1.6;
    color: var(--mg-text-muted);
    margin: 0 0 20px;
  }

  .mg-panel-stat {
    display: flex;
    gap: 16px;
  }

  .mg-panel-stat-item {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .mg-panel-stat-value {
    font-family: var(--font-geist-mono), ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
    font-size: 18px;
    font-weight: 500;
    color: var(--mg-accent);
  }

  .mg-panel-stat-label {
    font-size: 11px;
    color: var(--mg-text-muted);
    text-transform: uppercase;
    letter-spacing: 0.06em;
  }

  /* ── Section label ── */

  .mg-section-label {
    font-size: 14px;
    font-weight: 600;
    color: var(--mg-text-muted);
    padding: 40px 24px 16px;
    max-width: 1200px;
    margin: 0 auto 8px;
    border-bottom: 1px solid var(--border);
  }

  /* ── Toolbar variant ── */

  .mg-toolbar-scene {
    position: relative;
    max-width: 1200px;
    margin: 0 auto;
    padding: 24px;
  }

  .mg-toolbar-bg {
    position: relative;
    border-radius: 20px;
    overflow: hidden;
    min-height: 300px;
    background: var(--mg-bg-b);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 16px;
    padding: 40px;
    border: 1px solid var(--border);
  }

  .mg-toolbar-bg-orbs {
    position: absolute;
    inset: 0;
    pointer-events: none;
  }

  .mg-toolbar-bg-orbs .mg-orb:nth-child(1) {
    width: 180px;
    height: 180px;
    background: rgba(37, 99, 235, 0.12);
    top: 25%;
    left: 35%;
  }

  .mg-toolbar {
    position: relative;
    z-index: 2;
    display: flex;
    gap: 8px;
    align-items: center;
    border-radius: 14px;
    padding: 10px 16px;
  }

  .mg-toolbar-btn {
    font-family: inherit;
    font-size: 13px;
    font-weight: 600;
    border: 1px solid var(--border);
    background: rgba(255, 255, 255, 0.6);
    color: var(--mg-text);
    padding: 8px 16px;
    border-radius: 8px;
    cursor: pointer;
    transition: background 0.2s, color 0.2s, border-color 0.2s;
  }

  .mg-toolbar-btn:hover {
    background: #fff;
    border-color: rgba(37, 99, 235, 0.35);
    color: var(--mg-accent);
  }

  .mg-toolbar-btn.active {
    background: rgba(37, 99, 235, 0.12);
    border-color: rgba(37, 99, 235, 0.35);
    color: var(--mg-accent);
  }

  .mg-toolbar-sep {
    width: 1px;
    height: 24px;
    background: var(--border);
    margin: 0 4px;
  }

  .mg-toast {
    position: relative;
    z-index: 2;
    max-width: 360px;
    border-radius: 14px;
    padding: 16px 20px;
    display: flex;
    gap: 12px;
    align-items: flex-start;
  }

  .mg-toast-icon {
    width: 28px;
    height: 28px;
    border-radius: 8px;
    background: rgba(16, 185, 129, 0.12);
    color: #059669;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    flex-shrink: 0;
  }

  .mg-toast-content {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .mg-toast-title {
    font-size: 13px;
    font-weight: 600;
    color: var(--mg-text);
  }

  .mg-toast-msg {
    font-size: 12px;
    color: var(--mg-text-muted);
    line-height: 1.5;
  }

  .mg-modal-scene {
    position: relative;
    max-width: 1200px;
    margin: 0 auto;
    padding: 24px;
  }

  .mg-modal-bg {
    position: relative;
    border-radius: 20px;
    overflow: hidden;
    min-height: 400px;
    background: var(--mg-bg-b);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 40px;
    border: 1px solid var(--border);
  }

  .mg-modal-bg-orbs {
    position: absolute;
    inset: 0;
    pointer-events: none;
  }

  .mg-modal-bg-orbs .mg-orb:nth-child(1) {
    width: 180px;
    height: 180px;
    background: rgba(99, 102, 241, 0.12);
    top: 20%;
    right: 25%;
  }

  .mg-modal {
    position: relative;
    z-index: 2;
    width: 100%;
    max-width: 420px;
    border-radius: 20px;
    padding: 36px 32px;
    text-align: center;
  }

  .mg-modal::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
    opacity: 0.03;
    pointer-events: none;
  }

  .mg-modal-emoji {
    font-size: 40px;
    margin-bottom: 16px;
  }

  .mg-modal-heading {
    font-family: inherit;
    font-size: 22px;
    font-weight: 600;
    margin: 0 0 10px;
    color: var(--mg-text);
  }

  .mg-modal-text {
    font-size: 14px;
    line-height: 1.6;
    color: var(--mg-text-muted);
    margin: 0 0 24px;
  }

  .mg-modal-actions {
    display: flex;
    gap: 10px;
    justify-content: center;
  }

  .mg-modal-btn {
    font-family: inherit;
    font-size: 14px;
    font-weight: 600;
    padding: 10px 24px;
    border-radius: 10px;
    cursor: pointer;
    border: 1px solid transparent;
    transition: transform 0.15s, box-shadow 0.15s, border-color 0.2s, background 0.2s;
  }

  .mg-modal-btn:hover {
    transform: translateY(-1px);
  }

  .mg-modal-btn.primary {
    background: rgba(37, 99, 235, 0.12);
    color: var(--mg-accent);
    border-color: rgba(37, 99, 235, 0.35);
    box-shadow: 0 6px 18px rgba(37, 99, 235, 0.12);
  }

  .mg-modal-btn.primary:hover {
    box-shadow: 0 8px 22px rgba(37, 99, 235, 0.18);
  }

  .mg-modal-btn.secondary {
    background: rgba(255,255,255,0.8);
    color: var(--mg-text);
    border-color: var(--border);
  }

  .mg-modal-btn.secondary:hover {
    background: #fff;
    border-color: rgba(37, 99, 235, 0.35);
    color: var(--mg-accent);
  }

  /* ── Responsive ── */

  @media (max-width: 640px) {
    .mg-sliders { grid-template-columns: 1fr; }
    .mg-panels-grid { grid-template-columns: 1fr; padding: 24px 16px; }
    .mg-toolbar { flex-wrap: wrap; }
    .mg-modal { padding: 28px 20px; }
  }
`;

const PANELS = [
  {
    icon: '\u2728',
    badge: 'Card',
    title: 'Ethereal Metrics',
    desc: 'Real-time analytics rendered through a frosted viewport with variable diffusion.',
    stats: [
      { value: '2.4k', label: 'Active' },
      { value: '98%', label: 'Uptime' },
    ],
  },
  {
    icon: '\u26a1',
    badge: 'Widget',
    title: 'Signal Processor',
    desc: 'Live data streams visualized behind layered glass with adaptive saturation control.',
    stats: [
      { value: '340ms', label: 'Latency' },
      { value: '12M', label: 'Events' },
    ],
  },
  {
    icon: '\ud83c\udf10',
    badge: 'Panel',
    title: 'Network Lens',
    desc: 'Distributed node topology viewed through frosted panels with depth-based blur.',
    stats: [
      { value: '64', label: 'Nodes' },
      { value: '99.9%', label: 'SLA' },
    ],
  },
  {
    icon: '\ud83d\udd12',
    badge: 'Overlay',
    title: 'Vault Gateway',
    desc: 'Secure access portal with multi-layer frost providing visual depth hierarchy.',
    stats: [
      { value: 'AES-256', label: 'Cipher' },
      { value: '0', label: 'Breaches' },
    ],
  },
];

type Scheme = 'default' | 'warm' | 'ocean' | 'forest';

export default function MatGlassPage() {
  const [blur, setBlur] = useState(20);
  const [opacity, setOpacity] = useState(10);
  const [saturation, setSaturation] = useState(150);
  const [borderAlpha, setBorderAlpha] = useState(15);
  const [scheme, setScheme] = useState<Scheme>('default');

  const glassStyle = (multiplier: number = 1): React.CSSProperties => ({
    backdropFilter: `blur(${blur * multiplier}px) saturate(${saturation}%)`,
    WebkitBackdropFilter: `blur(${blur * multiplier}px) saturate(${saturation}%)`,
    background: `rgba(var(--mg-tint), ${(opacity * multiplier) / 100})`,
    border: `1px solid rgba(23, 23, 23, ${borderAlpha / 100})`,
    boxShadow: `inset 0 1px 0 rgba(255, 255, 255, ${borderAlpha / 160}), 0 18px 40px rgba(15, 23, 42, 0.08)`,
  });

  return (
    <>
      <style>{cssStyles}</style>
      <section className="mg-root" data-scheme={scheme}>
        {/* Controls */}
        <div className="mg-controls">
          <h2 className="mg-controls-title">Parameters</h2>

          <div className="mg-sliders">
            <div className="mg-slider-group">
              <div className="mg-slider-header">
                <span className="mg-slider-label">Color Scheme</span>
              </div>
              <div className="mg-pill-row">
                {(['default', 'warm', 'ocean', 'forest'] as Scheme[]).map((s) => (
                  <button
                    key={s}
                    className="mg-pill"
                    data-active={String(scheme === s)}
                    onClick={() => setScheme(s)}
                  >
                    {s.charAt(0).toUpperCase() + s.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            <div className="mg-slider-group">
              <div className="mg-slider-header">
                <span className="mg-slider-label">Blur Radius</span>
                <span className="mg-slider-value">{blur}px</span>
              </div>
              <input
                type="range" className="mg-slider"
                min={4} max={50} step={1} value={blur}
                onChange={(e) => setBlur(Number(e.target.value))}
              />
            </div>

            <div className="mg-slider-group">
              <div className="mg-slider-header">
                <span className="mg-slider-label">Glass Opacity</span>
                <span className="mg-slider-value">{opacity}%</span>
              </div>
              <input
                type="range" className="mg-slider"
                min={2} max={40} step={1} value={opacity}
                onChange={(e) => setOpacity(Number(e.target.value))}
              />
            </div>

            <div className="mg-slider-group">
              <div className="mg-slider-header">
                <span className="mg-slider-label">Saturation</span>
                <span className="mg-slider-value">{saturation}%</span>
              </div>
              <input
                type="range" className="mg-slider"
                min={100} max={250} step={10} value={saturation}
                onChange={(e) => setSaturation(Number(e.target.value))}
              />
            </div>

            <div className="mg-slider-group">
              <div className="mg-slider-header">
                <span className="mg-slider-label">Border Intensity</span>
                <span className="mg-slider-value">{borderAlpha}%</span>
              </div>
              <input
                type="range" className="mg-slider"
                min={0} max={40} step={1} value={borderAlpha}
                onChange={(e) => setBorderAlpha(Number(e.target.value))}
              />
            </div>
          </div>
        </div>

        {/* Cards showcase */}
        <div className="mg-scene">
          <div className="mg-backdrop">
            <div className="mg-backdrop-orbs">
              <div className="mg-orb" />
            </div>

            <div className="mg-panels-grid">
              {PANELS.map((panel, i) => (
                <div
                  key={panel.title}
                  className="mg-panel"
                  style={glassStyle(0.7 + i * 0.2)}
                >
                  <div className="mg-panel-header">
                    <div className="mg-panel-icon">{panel.icon}</div>
                    <span className="mg-panel-badge">{panel.badge}</span>
                  </div>
                  <h3 className="mg-panel-title">{panel.title}</h3>
                  <p className="mg-panel-desc">{panel.desc}</p>
                  <div className="mg-panel-stat">
                    {panel.stats.map((s) => (
                      <div key={s.label} className="mg-panel-stat-item">
                        <span className="mg-panel-stat-value">{s.value}</span>
                        <span className="mg-panel-stat-label">{s.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Toolbar + Toast variant */}
        <div className="mg-section-label">Toolbar &amp; Toast Variants</div>
        <div className="mg-toolbar-scene">
          <div className="mg-toolbar-bg">
            <div className="mg-toolbar-bg-orbs">
              <div className="mg-orb" />
            </div>

            <div className="mg-toolbar" style={glassStyle(1)}>
              <button className="mg-toolbar-btn active">Dashboard</button>
              <button className="mg-toolbar-btn">Analytics</button>
              <div className="mg-toolbar-sep" />
              <button className="mg-toolbar-btn">Settings</button>
              <button className="mg-toolbar-btn">Export</button>
            </div>

            <div className="mg-toast" style={glassStyle(1.2)}>
              <div className="mg-toast-icon">{'\u2713'}</div>
              <div className="mg-toast-content">
                <span className="mg-toast-title">Deployment Successful</span>
                <span className="mg-toast-msg">Your changes are now live across all edge regions.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Modal variant */}
        <div className="mg-section-label">Modal Variant</div>
        <div className="mg-modal-scene">
          <div className="mg-modal-bg">
            <div className="mg-modal-bg-orbs">
              <div className="mg-orb" />
            </div>

            <div className="mg-modal" style={glassStyle(1.5)}>
              <div className="mg-modal-emoji">{'\ud83d\ude80'}</div>
              <h3 className="mg-modal-heading">Ready to Launch?</h3>
              <p className="mg-modal-text">
                Your project has passed all checks and is ready for production deployment.
              </p>
              <div className="mg-modal-actions">
                <button className="mg-modal-btn secondary">Cancel</button>
                <button className="mg-modal-btn primary">Deploy Now</button>
              </div>
            </div>
          </div>
        </div>

      </section>
    </>
  );
}
