'use client';

import React, { useCallback, useRef } from 'react';

const cssStyles = `
  .oo-showcase {
    --oo-cream: #F5F0E8;
    --oo-warm-white: #FAF7F2;
    --oo-black: #1A1A1A;
    --oo-blue: #3348FF;
    --oo-orange: #E85A2C;
    --oo-red: #E53935;
    --oo-green: #2E7D32;
    --oo-muted: #8A8680;
    --oo-border: #E0DCD5;
    --oo-light-sand: #D5D0C8;
    --oo-font: 'Inter', system-ui, -apple-system, sans-serif;

    background: var(--oo-cream);
    color: var(--oo-black);
    font-family: var(--oo-font);
    min-height: 100vh;
    overflow-x: hidden;
  }

  .oo-section {
    max-width: 1120px;
    margin: 0 auto;
    padding: 0 32px;
  }

  .oo-section + .oo-section {
    margin-top: 100px;
  }

  .oo-section-label {
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--oo-muted);
    margin-bottom: 24px;
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .oo-section-label::after {
    content: '';
    flex: 1;
    height: 1px;
    background: var(--oo-border);
  }

  /* ===== EGG SHAPE ===== */
  .oo-egg {
    background: var(--oo-blue);
    border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
    transition: transform 400ms ease;
  }

  .oo-egg:hover {
    transform: scale(1.05);
  }

  /* ===== LOUVERED GLASS PANEL ===== */
  .oo-glass-panel {
    border-radius: 20px;
    position: relative;
    overflow: hidden;
    isolation: isolate;
    -webkit-mask-image: -webkit-radial-gradient(white, black);
    mask-image: radial-gradient(white, black);
  }

  .oo-glass-panel-bg {
    position: absolute;
    inset: 0;
    background:
      radial-gradient(circle at 20% 25%, rgba(255,50,80,0.7) 0%, transparent 45%),
      radial-gradient(circle at 75% 70%, rgba(255,220,80,0.65) 0%, transparent 45%),
      radial-gradient(circle at 50% 10%, rgba(255,120,180,0.5) 0%, transparent 40%),
      radial-gradient(circle at 30% 80%, rgba(180,40,10,0.6) 0%, transparent 45%),
      radial-gradient(circle at 60% 40%, rgba(255,180,60,0.6) 0%, transparent 50%),
      linear-gradient(160deg, #FF7A45 0%, #E85A2C 40%, #C44518 100%);
  }

  .oo-glass-panel-slats {
    position: absolute;
    inset: 0;
    z-index: 1;
    display: flex;
    flex-direction: row;
    align-items: stretch;
    pointer-events: none;
  }

  .oo-glass-panel-slat {
    flex: 1;
    position: relative;
    background: linear-gradient(
      90deg,
      rgba(255,255,255,0.15) 0%,
      rgba(0,0,0,0.12) 80%,
      rgba(255,255,255,0.15) 100%
    );
    background-blend-mode: overlay;
    backdrop-filter: blur(18px) saturate(160%);
    -webkit-backdrop-filter: blur(18px) saturate(160%);
  }

  .oo-glass-panel-slat::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      180deg,
      rgba(255,255,255, calc(var(--slat-hl, 0) * 0.55)) 0%,
      rgba(255,255,255, calc(var(--slat-hl, 0) * 0.35)) 40%,
      rgba(255,255,255, calc(var(--slat-hl, 0) * 0.15)) 100%
    );
    pointer-events: none;
    transition: --slat-hl 120ms ease;
  }

  .oo-glass-panel-border {
    position: absolute;
    inset: 0;
    border-radius: inherit;
    border: 1px solid rgba(255,255,255,0.25);
    box-shadow: inset 0 1px 0 rgba(255,255,255,0.4), inset 0 -1px 0 rgba(0,0,0,0.05);
    pointer-events: none;
    z-index: 3;
  }

  /* ===== CORNER LABEL ===== */
  .oo-corner-label {
    font-size: 11px;
    font-weight: 500;
    color: var(--oo-muted);
    border: 1px solid var(--oo-border);
    border-radius: 999px;
    padding: 4px 12px;
    display: inline-block;
    letter-spacing: 0.02em;
  }

  /* ===== CAPSULE TAG ===== */
  .oo-tag {
    font-size: 12px;
    font-weight: 500;
    padding: 6px 14px;
    border-radius: 999px;
    border: 1px solid var(--oo-border);
    color: var(--oo-black);
    background: transparent;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: color 300ms ease, border-color 300ms ease;
    z-index: 0;
  }

  .oo-tag::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 0%;
    height: 100%;
    background: var(--oo-blue);
    transition: width 300ms ease;
    z-index: -1;
    border-radius: 999px;
  }

  .oo-tag:hover::before {
    width: 100%;
  }

  .oo-tag:hover {
    color: #fff;
    border-color: var(--oo-blue);
  }

  .oo-tag--filled-red {
    background: var(--oo-red);
    color: #fff;
    border-color: var(--oo-red);
  }

  .oo-tag--filled-red::before {
    display: none;
  }

  .oo-tag--filled-blue {
    background: var(--oo-blue);
    color: #fff;
    border-color: var(--oo-blue);
  }

  .oo-tag--filled-blue::before {
    display: none;
  }

  .oo-tag--filled-green {
    background: var(--oo-green);
    color: #fff;
    border-color: var(--oo-green);
  }

  .oo-tag--filled-green::before {
    display: none;
  }

  /* ===== BUTTONS ===== */
  .oo-btn {
    font-family: var(--oo-font);
    font-size: 15px;
    font-weight: 600;
    padding: 14px 32px;
    border-radius: 999px;
    border: 2px solid transparent;
    cursor: pointer;
    transition: all 300ms ease;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    text-decoration: none;
    position: relative;
    overflow: hidden;
  }

  .oo-btn-primary {
    background: var(--oo-blue);
    color: #fff;
    border-color: var(--oo-blue);
  }

  .oo-btn-primary:hover {
    background: #2838D9;
    border-color: #2838D9;
    box-shadow: 0 8px 24px rgba(51, 72, 255, 0.3);
  }

  .oo-btn-secondary {
    background: transparent;
    color: var(--oo-black);
    border-color: var(--oo-black);
  }

  .oo-btn-secondary:hover {
    background: var(--oo-black);
    color: var(--oo-cream);
  }

  .oo-btn-orange {
    background: var(--oo-orange);
    color: #fff;
    border-color: var(--oo-orange);
  }

  .oo-btn-orange:hover {
    background: #D14A20;
    border-color: #D14A20;
    box-shadow: 0 8px 24px rgba(232, 90, 44, 0.3);
  }

  .oo-btn-disabled {
    background: var(--oo-border);
    color: var(--oo-muted);
    border-color: var(--oo-border);
    cursor: not-allowed;
    opacity: 0.6;
  }

  .oo-btn-disabled:hover {
    box-shadow: none;
  }

  /* ===== CARDS ===== */
  .oo-card {
    background: var(--oo-warm-white);
    border-radius: 16px;
    padding: 28px;
    position: relative;
    transition: box-shadow 300ms ease;
    overflow: hidden;
  }

  .oo-card:hover {
    box-shadow: 0 12px 40px rgba(26, 26, 26, 0.08);
  }

  .oo-card-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 24px;
  }

  /* ===== POSTER CARDS ===== */
  .oo-poster-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto auto;
    gap: 20px;
  }

  .oo-poster-grid > :nth-child(4) {
    grid-column: 1 / -1;
  }

  .oo-poster {
    background: var(--oo-warm-white);
    border-radius: 16px;
    padding: 24px;
    position: relative;
    display: flex;
    flex-direction: column;
    transition: box-shadow 300ms ease;
    overflow: hidden;
  }

  .oo-poster:hover {
    box-shadow: 0 16px 48px rgba(26, 26, 26, 0.1);
  }

  .oo-poster:hover .oo-poster-egg {
    transform: scale(1.05);
  }

  .oo-poster-label {
    position: absolute;
    top: 16px;
    right: 16px;
    z-index: 3;
  }

  .oo-poster-heading {
    font-size: 34px;
    font-weight: 800;
    line-height: 0.95;
    letter-spacing: -0.03em;
  }

  .oo-poster-body {
    font-size: 13px;
    line-height: 1.55;
    color: var(--oo-muted);
  }

  .oo-poster-egg {
    transition: transform 400ms ease;
  }

  .oo-poster-tags {
    display: flex;
    gap: 6px;
    flex-wrap: wrap;
    margin-top: auto;
    padding-top: 20px;
  }

  .oo-poster-tag {
    font-size: 11px;
    font-weight: 500;
    padding: 4px 11px;
    border-radius: 999px;
    border: 1px solid var(--oo-border);
    color: var(--oo-black);
    background: transparent;
  }

  .oo-poster-tag--red {
    background: var(--oo-red);
    color: #fff;
    border-color: var(--oo-red);
  }

  .oo-poster-tag--blue {
    background: var(--oo-blue);
    color: #fff;
    border-color: var(--oo-blue);
  }

  /* ===== ACTION CARDS ===== */
  .oo-action-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin-top: 48px;
  }

  .oo-action-card {
    background: var(--oo-warm-white);
    border-radius: 16px;
    padding: 28px;
    display: flex;
    flex-direction: column;
    transition: box-shadow 300ms ease;
    overflow: hidden;
  }

  .oo-action-card:hover {
    box-shadow: 0 12px 40px rgba(26, 26, 26, 0.08);
  }

  .oo-action-card-eyebrow {
    font-size: 11px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: var(--oo-muted);
    margin-bottom: 16px;
  }

  .oo-action-card-title {
    font-size: 22px;
    font-weight: 700;
    line-height: 1.1;
    letter-spacing: -0.02em;
    margin-bottom: 10px;
  }

  .oo-action-card-desc {
    font-size: 14px;
    line-height: 1.5;
    color: var(--oo-muted);
    margin-bottom: 24px;
  }

  .oo-action-card-footer {
    margin-top: auto;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .oo-action-card-divider {
    border: none;
    border-top: 1px solid var(--oo-border);
    margin: 20px 0;
  }

  .oo-action-card-meta {
    font-size: 12px;
    color: var(--oo-muted);
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .oo-action-card-price {
    font-size: 36px;
    font-weight: 800;
    letter-spacing: -0.03em;
    line-height: 1;
  }

  .oo-action-card-price-period {
    font-size: 14px;
    font-weight: 400;
    color: var(--oo-muted);
  }

  .oo-action-card-feature {
    font-size: 13px;
    line-height: 1.6;
    color: var(--oo-black);
    padding-left: 16px;
    position: relative;
  }

  .oo-action-card-feature::before {
    content: '→';
    position: absolute;
    left: 0;
    color: var(--oo-blue);
    font-weight: 600;
  }

  /* ===== INPUTS ===== */
  .oo-input-group {
    margin-bottom: 20px;
  }

  .oo-label {
    font-size: 13px;
    font-weight: 600;
    color: var(--oo-black);
    margin-bottom: 8px;
    display: block;
  }

  .oo-input {
    width: 100%;
    font-family: var(--oo-font);
    font-size: 15px;
    padding: 12px 16px;
    border-radius: 12px;
    border: 1.5px solid var(--oo-border);
    background: var(--oo-warm-white);
    color: var(--oo-black);
    outline: none;
    transition: border-color 200ms ease, box-shadow 200ms ease;
    box-sizing: border-box;
  }

  .oo-input:focus {
    border-color: var(--oo-blue);
    box-shadow: 0 0 0 3px rgba(51, 72, 255, 0.12);
  }

  .oo-input--error {
    border-color: var(--oo-red);
  }

  .oo-input--error:focus {
    box-shadow: 0 0 0 3px rgba(229, 57, 53, 0.12);
  }

  .oo-error-text {
    font-size: 12px;
    color: var(--oo-red);
    margin-top: 6px;
  }

  .oo-select-wrapper {
    position: relative;
  }

  .oo-select-wrapper::after {
    content: '▾';
    position: absolute;
    right: 16px;
    top: 50%;
    transform: translateY(-50%);
    color: var(--oo-muted);
    pointer-events: none;
    font-size: 14px;
  }

  .oo-select {
    width: 100%;
    font-family: var(--oo-font);
    font-size: 15px;
    padding: 12px 40px 12px 16px;
    border-radius: 12px;
    border: 1.5px solid var(--oo-border);
    background: var(--oo-warm-white);
    color: var(--oo-black);
    outline: none;
    appearance: none;
    cursor: pointer;
    transition: border-color 200ms ease;
  }

  .oo-select:focus {
    border-color: var(--oo-blue);
  }

  .oo-toggle {
    width: 44px;
    height: 24px;
    border-radius: 999px;
    background: var(--oo-border);
    position: relative;
    cursor: pointer;
    transition: background 200ms ease;
    border: none;
  }

  .oo-toggle--active {
    background: var(--oo-blue);
  }

  .oo-toggle-knob {
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: #fff;
    position: absolute;
    top: 3px;
    left: 3px;
    transition: transform 200ms ease;
    box-shadow: 0 1px 3px rgba(0,0,0,0.15);
  }

  .oo-toggle--active .oo-toggle-knob {
    transform: translateX(20px);
  }

  /* ===== ALERTS ===== */
  .oo-alert {
    padding: 16px 20px;
    border-radius: 12px;
    font-size: 14px;
    font-weight: 500;
    display: flex;
    align-items: flex-start;
    gap: 12px;
    margin-bottom: 12px;
  }

  .oo-alert-icon {
    font-size: 18px;
    flex-shrink: 0;
    margin-top: 1px;
  }

  .oo-alert--success {
    background: rgba(46, 125, 50, 0.08);
    color: var(--oo-green);
    border: 1px solid rgba(46, 125, 50, 0.2);
  }

  .oo-alert--error {
    background: rgba(229, 57, 53, 0.08);
    color: var(--oo-red);
    border: 1px solid rgba(229, 57, 53, 0.2);
  }

  .oo-alert--warning {
    background: rgba(232, 90, 44, 0.08);
    color: var(--oo-orange);
    border: 1px solid rgba(232, 90, 44, 0.2);
  }

  .oo-alert--info {
    background: rgba(51, 72, 255, 0.08);
    color: var(--oo-blue);
    border: 1px solid rgba(51, 72, 255, 0.2);
  }

  .oo-progress-track {
    width: 100%;
    height: 8px;
    background: var(--oo-border);
    border-radius: 999px;
    overflow: hidden;
  }

  .oo-progress-fill {
    height: 100%;
    background: var(--oo-blue);
    border-radius: 999px;
    transition: width 600ms ease;
  }

  /* ===== CONTENT LIST ===== */
  .oo-list-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 0;
    border-bottom: 1px solid var(--oo-border);
    gap: 16px;
  }

  .oo-list-item:last-child {
    border-bottom: none;
  }

  .oo-badge {
    font-size: 11px;
    font-weight: 600;
    padding: 4px 10px;
    border-radius: 999px;
    text-transform: uppercase;
    letter-spacing: 0.04em;
  }

  .oo-badge--active {
    background: rgba(46, 125, 50, 0.12);
    color: var(--oo-green);
  }

  .oo-badge--inactive {
    background: rgba(138, 134, 128, 0.12);
    color: var(--oo-muted);
  }

  .oo-badge--new {
    background: rgba(51, 72, 255, 0.12);
    color: var(--oo-blue);
  }

  /* ===== LINKS ===== */
  .oo-link {
    color: var(--oo-blue);
    text-decoration: none;
    font-weight: 500;
    transition: opacity 200ms ease;
    cursor: pointer;
  }

  .oo-link:hover {
    opacity: 0.7;
  }

  /* ===== COLOR SWATCH ===== */
  .oo-swatch-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    gap: 16px;
  }

  .oo-swatch {
    border-radius: 12px;
    overflow: hidden;
    background: var(--oo-warm-white);
    border: 1px solid var(--oo-border);
  }

  .oo-swatch-color {
    height: 80px;
    width: 100%;
  }

  .oo-swatch-info {
    padding: 12px;
  }

  .oo-swatch-name {
    font-size: 13px;
    font-weight: 600;
    margin-bottom: 2px;
  }

  .oo-swatch-hex {
    font-size: 12px;
    color: var(--oo-muted);
    font-family: 'SF Mono', 'Fira Code', monospace;
  }

  /* ===== HERO ===== */
  .oo-hero {
    padding: 80px 32px 60px;
    max-width: 1120px;
    margin: 0 auto;
    position: relative;
  }

  .oo-hero-layout {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    align-items: center;
  }

  .oo-hero-title {
    font-size: 72px;
    font-weight: 800;
    line-height: 0.92;
    letter-spacing: -0.04em;
    margin-bottom: 20px;
  }

  .oo-hero-tagline {
    font-size: 18px;
    line-height: 1.55;
    color: var(--oo-muted);
    margin-bottom: 36px;
    max-width: 440px;
  }

  .oo-hero-visual {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 340px;
  }

  .oo-hero-glass {
    position: absolute;
    width: 240px;
    height: 180px;
    bottom: 20px;
    left: 20px;
    z-index: 1;
  }

  .oo-hero-egg {
    width: 220px;
    height: 260px;
    position: relative;
    z-index: 2;
  }

  .oo-hero-corner {
    position: absolute;
    top: 0;
    right: 0;
  }

  @media (max-width: 768px) {
    .oo-hero-layout {
      grid-template-columns: 1fr;
      gap: 40px;
    }
    .oo-hero-title {
      font-size: 48px;
    }
    .oo-poster-grid {
      grid-template-columns: 1fr;
    }
    .oo-poster-grid > :nth-child(4) {
      flex-direction: column;
      align-items: stretch;
    }
    .oo-card-grid {
      grid-template-columns: 1fr;
    }
    .oo-action-grid {
      grid-template-columns: 1fr;
    }
  }
`;

function GlassPanel({ className, style, slats = 20 }: { className?: string; style?: React.CSSProperties; slats?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const slatsRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((e: React.MouseEvent) => {
    const el = ref.current;
    const container = slatsRef.current;
    if (!el || !container) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const children = container.children;
    const count = children.length;
    for (let i = 0; i < count; i++) {
      const slatCenter = (i + 0.5) / count;
      const dist = Math.abs(x - slatCenter);
      const hl = Math.max(0, 1 - dist * 5);
      (children[i] as HTMLElement).style.setProperty('--slat-hl', hl.toFixed(3));
    }
  }, []);

  const handleLeave = useCallback(() => {
    const container = slatsRef.current;
    if (!container) return;
    const children = container.children;
    for (let i = 0; i < children.length; i++) {
      (children[i] as HTMLElement).style.setProperty('--slat-hl', '0');
    }
  }, []);

  return (
    <div
      ref={ref}
      className={`oo-glass-panel ${className || ''}`}
      style={style}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      <div className="oo-glass-panel-bg" />
      <div ref={slatsRef} className="oo-glass-panel-slats">
        {Array.from({ length: slats }).map((_, i) => (
          <div key={i} className="oo-glass-panel-slat" />
        ))}
      </div>
      <div className="oo-glass-panel-border" />
    </div>
  );
}

export default function OneOrangeShowcase() {
  return (
    <>
      <style>{cssStyles}</style>
      <main className="oo-showcase">

        {/* ===== SECTION 1: HERO ===== */}
        <section className="oo-hero">
          <div className="oo-hero-layout">
            <div>
              <div style={{ marginBottom: 20 }}>
                <span className="oo-corner-label">capsule</span>
              </div>
              <h1 className="oo-hero-title">
                One<br />Orange
              </h1>
              <p className="oo-hero-tagline">
                Constructivist poster design meets modern web. Bold geometric shapes,
                organic forms, and warm accents on a cream canvas.
              </p>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <button className="oo-btn oo-btn-primary">Explore Design</button>
                <button className="oo-btn oo-btn-secondary">View Tokens</button>
              </div>
            </div>
            <div className="oo-hero-visual">
              <div className="oo-hero-corner">
                <span className="oo-corner-label">capsule</span>
              </div>
              <GlassPanel className="oo-hero-glass" slats={20} />
              <div className="oo-egg oo-hero-egg" />
            </div>
          </div>
        </section>

        {/* ===== SECTION 2: COLOR PALETTE ===== */}
        <section className="oo-section">
          <div className="oo-section-label">Color Palette</div>

          <h2 style={{ fontSize: 40, fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 0.95, marginBottom: 12 }}>
            Warm & Bold
          </h2>
          <p style={{ fontSize: 16, color: '#8A8680', marginBottom: 40, maxWidth: 500, lineHeight: 1.55 }}>
            A cream canvas paired with cobalt blue and warm orange for striking contrast and visual depth.
          </p>

          <div className="oo-swatch-grid">
            {[
              { name: 'Cream Canvas', hex: '#F5F0E8', color: '#F5F0E8', border: true },
              { name: 'Warm White', hex: '#FAF7F2', color: '#FAF7F2', border: true },
              { name: 'Deep Black', hex: '#1A1A1A', color: '#1A1A1A' },
              { name: 'Cobalt Blue', hex: '#3348FF', color: '#3348FF' },
              { name: 'Warm Orange', hex: '#E85A2C', color: '#E85A2C' },
              { name: 'Signal Red', hex: '#E53935', color: '#E53935' },
              { name: 'Forest Green', hex: '#2E7D32', color: '#2E7D32' },
              { name: 'Muted Stone', hex: '#8A8680', color: '#8A8680' },
              { name: 'Border Sand', hex: '#E0DCD5', color: '#E0DCD5', border: true },
            ].map((s) => (
              <div key={s.hex} className="oo-swatch">
                <div
                  className="oo-swatch-color"
                  style={{
                    background: s.color,
                    borderBottom: s.border ? '1px solid #E0DCD5' : undefined,
                  }}
                />
                <div className="oo-swatch-info">
                  <div className="oo-swatch-name">{s.name}</div>
                  <div className="oo-swatch-hex">{s.hex}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ===== SECTION 3: TYPOGRAPHY SCALE ===== */}
        <section className="oo-section">
          <div className="oo-section-label">Typography</div>

          <div style={{ marginBottom: 60 }}>
            {[
              { tag: 'Display', size: 72, weight: 800 },
              { tag: 'H1', size: 56, weight: 800 },
              { tag: 'H2', size: 40, weight: 800 },
              { tag: 'H3', size: 28, weight: 700 },
              { tag: 'H4', size: 22, weight: 700 },
              { tag: 'H5', size: 18, weight: 600 },
              { tag: 'H6', size: 15, weight: 600 },
            ].map((t) => (
              <div key={t.tag} style={{ marginBottom: 20, display: 'flex', alignItems: 'baseline', gap: 20 }}>
                <span style={{ fontSize: 11, fontWeight: 500, color: '#8A8680', minWidth: 56, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  {t.tag}
                </span>
                <span style={{ fontSize: t.size, fontWeight: t.weight, lineHeight: 1, letterSpacing: '-0.03em' }}>
                  Bold Shapes
                </span>
              </div>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40 }}>
            <div>
              <div style={{ fontSize: 13, fontWeight: 600, color: '#8A8680', marginBottom: 12, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Body Large</div>
              <p style={{ fontSize: 18, lineHeight: 1.6, maxWidth: 480 }}>
                The design language draws from constructivist poster traditions — bold contrasts, geometric interplay, and organic shapes that create visual tension and harmony.
              </p>
            </div>
            <div>
              <div style={{ fontSize: 13, fontWeight: 600, color: '#8A8680', marginBottom: 12, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Body Regular</div>
              <p style={{ fontSize: 16, lineHeight: 1.55 }}>
                Capsule tags and pill-shaped elements provide rhythm and structure. The warm cream background ensures readability while maintaining a distinctive, non-sterile aesthetic.
              </p>
              <p style={{ fontSize: 14, lineHeight: 1.5, color: '#8A8680', marginTop: 12 }}>
                Small — Secondary text and captions use muted stone for a gentle hierarchy that never fights the primary content.
              </p>
            </div>
          </div>
        </section>

        {/* ===== SECTION 4: BUTTONS & INTERACTIVE ===== */}
        <section className="oo-section">
          <div className="oo-section-label">Buttons & Interactive</div>

          <h2 style={{ fontSize: 40, fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 0.95, marginBottom: 12 }}>
            Capsule Controls
          </h2>
          <p style={{ fontSize: 16, color: '#8A8680', marginBottom: 40, maxWidth: 500, lineHeight: 1.55 }}>
            Pill-shaped buttons with sweep-fill hover effects and smooth color transitions.
          </p>

          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginBottom: 40, alignItems: 'center' }}>
            <button className="oo-btn oo-btn-primary">Primary Action</button>
            <button className="oo-btn oo-btn-secondary">Secondary</button>
            <button className="oo-btn oo-btn-orange">Accent Orange</button>
            <button className="oo-btn oo-btn-disabled" disabled>Disabled</button>
          </div>

          <div style={{ marginBottom: 20 }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: '#8A8680', marginBottom: 16, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Capsule Tags</div>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              <span className="oo-tag">capsule</span>
              <span className="oo-tag">design</span>
              <span className="oo-tag">poster</span>
              <span className="oo-tag oo-tag--filled-red">alert</span>
              <span className="oo-tag oo-tag--filled-blue">active</span>
              <span className="oo-tag oo-tag--filled-green">live</span>
            </div>
          </div>

          <div style={{ marginTop: 24 }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: '#8A8680', marginBottom: 12, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Links</div>
            <span className="oo-link">View all designs →</span>
            <span style={{ margin: '0 16px', color: '#E0DCD5' }}>|</span>
            <span className="oo-link">Documentation</span>
            <span style={{ margin: '0 16px', color: '#E0DCD5' }}>|</span>
            <span className="oo-link">Source code</span>
          </div>
        </section>

        {/* ===== SECTION 5: CARDS ===== */}
        <section className="oo-section">
          <div className="oo-section-label">Cards</div>

          <h2 style={{ fontSize: 40, fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 0.95, marginBottom: 12 }}>
            Poster Cards
          </h2>
          <p style={{ fontSize: 16, color: '#8A8680', marginBottom: 40, maxWidth: 500, lineHeight: 1.55 }}>
            Each card is a miniature poster — bold type, organic shape, and structured tags.
          </p>

          <div className="oo-poster-grid">

            {/* Card 1 — Text-led vertical: heading + body stacked, egg anchored bottom-right */}
            <div className="oo-poster" style={{ minHeight: 400, paddingTop: 44 }}>
              <div className="oo-poster-label">
                <span className="oo-corner-label">capsule</span>
              </div>
              <div className="oo-poster-heading">Heading<br />in Two Words</div>
              <p className="oo-poster-body" style={{ marginTop: 12 }}>
                Main text conveying meaning, decoding the core idea and communicating information.
              </p>
              <div style={{ flex: 1, position: 'relative', minHeight: 140 }}>
                <GlassPanel style={{ width: 150, height: 110, position: 'absolute', bottom: 0, left: -4, zIndex: 1, borderRadius: 16 }} slats={14} />
                <div className="oo-egg oo-poster-egg" style={{ width: 110, height: 136, position: 'absolute', bottom: 0, left: 76, zIndex: 2 }} />
              </div>
              <div className="oo-poster-tags">
                <span className="oo-poster-tag">capsule</span>
                <span className="oo-poster-tag">capsule</span>
                <span className="oo-poster-tag oo-poster-tag--red">capsule</span>
                <span className="oo-poster-tag oo-poster-tag--blue">capsule</span>
              </div>
            </div>

            {/* Card 2 — Visual-first: large centered egg, text anchored below */}
            <div className="oo-poster" style={{ minHeight: 400, paddingTop: 44 }}>
              <div className="oo-poster-label">
                <span className="oo-corner-label">capsule</span>
              </div>
              <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div className="oo-egg oo-poster-egg" style={{ width: 130, height: 162 }} />
              </div>
              <div className="oo-poster-heading" style={{ marginTop: 16 }}>Heading<br />in Two Words</div>
              <p className="oo-poster-body" style={{ marginTop: 10 }}>
                Main text conveying meaning, decoding the core idea and communicating information.
              </p>
              <div className="oo-poster-tags">
                <span className="oo-poster-tag">capsule</span>
                <span className="oo-poster-tag">capsule</span>
                <span className="oo-poster-tag oo-poster-tag--red">capsule</span>
                <span className="oo-poster-tag oo-poster-tag--blue">capsule</span>
              </div>
            </div>

            {/* Card 3 — Duo composition: egg with offset shadow + heading to the right */}
            <div className="oo-poster" style={{ minHeight: 400, paddingTop: 44 }}>
              <div className="oo-poster-label">
                <span className="oo-corner-label">capsule</span>
              </div>
              <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
                  <div style={{ position: 'relative', flexShrink: 0, width: 110, height: 138 }}>
                    <div style={{
                      width: 100, height: 125,
                      background: '#5BB8A0',
                      borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
                      position: 'absolute',
                      top: 10, left: 10,
                      opacity: 0.5,
                    }} />
                    <div className="oo-egg oo-poster-egg" style={{ width: 100, height: 125, position: 'relative', zIndex: 2 }} />
                  </div>
                  <div style={{ paddingTop: 6 }}>
                    <div className="oo-poster-heading" style={{ fontSize: 30 }}>Heading<br />in Two<br />Words</div>
                  </div>
                </div>
              </div>
              <p className="oo-poster-body" style={{ marginTop: 16 }}>
                Main text conveying meaning, decoding the core idea and communicating information.
              </p>
              <div className="oo-poster-tags">
                <span className="oo-poster-tag">capsule</span>
                <span className="oo-poster-tag">capsule</span>
                <span className="oo-poster-tag oo-poster-tag--red">capsule</span>
                <span className="oo-poster-tag oo-poster-tag--blue">capsule</span>
              </div>
            </div>

            {/* Card 4 — Full-width banner: horizontal layout with glass, egg, and text */}
            <div className="oo-poster" style={{ flexDirection: 'row', alignItems: 'center', gap: 32, padding: '28px 32px' }}>
              <div className="oo-poster-label">
                <span className="oo-corner-label">capsule</span>
              </div>
              <div style={{ flexShrink: 0 }}>
                <div className="oo-egg oo-poster-egg" style={{ width: 72, height: 90 }} />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div className="oo-poster-heading" style={{ fontSize: 28 }}>Heading in Two Words</div>
                <p className="oo-poster-body" style={{ marginTop: 8, maxWidth: 420 }}>
                  Main text conveying meaning, decoding the core idea and communicating information.
                </p>
              </div>
              <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', flexShrink: 0 }}>
                <span className="oo-poster-tag">capsule</span>
                <span className="oo-poster-tag">capsule</span>
                <span className="oo-poster-tag oo-poster-tag--red">capsule</span>
                <span className="oo-poster-tag oo-poster-tag--blue">capsule</span>
              </div>
            </div>

          </div>

          <div style={{ marginTop: 16 }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: '#8A8680', marginBottom: 20, textTransform: 'uppercase', letterSpacing: '0.08em' }}>With Actions</div>
          </div>

          <div className="oo-action-grid">

            {/* Action Card 1 — CTA card */}
            <div className="oo-action-card">
              <div className="oo-action-card-eyebrow">Getting Started</div>
              <div className="oo-action-card-title">Create Your First Design</div>
              <p className="oo-action-card-desc">
                Set up a new project with our design tokens and start building with the One Orange system.
              </p>
              <div className="oo-action-card-footer">
                <button className="oo-btn oo-btn-primary" style={{ fontSize: 13, padding: '10px 24px' }}>Get Started</button>
                <span className="oo-link" style={{ fontSize: 13 }}>Learn more →</span>
              </div>
            </div>

            {/* Action Card 2 — Pricing / value card */}
            <div className="oo-action-card">
              <div className="oo-action-card-eyebrow">Pro Plan</div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, marginBottom: 16 }}>
                <span className="oo-action-card-price">$24</span>
                <span className="oo-action-card-price-period">/ month</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 24 }}>
                <div className="oo-action-card-feature">Unlimited poster exports</div>
                <div className="oo-action-card-feature">Custom glass panel themes</div>
                <div className="oo-action-card-feature">Priority support</div>
              </div>
              <div className="oo-action-card-footer">
                <button className="oo-btn oo-btn-orange" style={{ fontSize: 13, padding: '10px 24px', width: '100%', justifyContent: 'center' }}>Upgrade Now</button>
              </div>
            </div>

            {/* Action Card 3 — Confirmation / status card */}
            <div className="oo-action-card">
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                <div style={{ width: 36, height: 36, borderRadius: '50%', background: '#2E7D32', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 16, fontWeight: 700, flexShrink: 0 }}>✓</div>
                <div className="oo-action-card-title" style={{ marginBottom: 0 }}>Design Published</div>
              </div>
              <p className="oo-action-card-desc">
                Your poster is live and visible in the public gallery. Share it or make changes at any time.
              </p>
              <hr className="oo-action-card-divider" />
              <div className="oo-action-card-meta" style={{ marginBottom: 16 }}>
                <span>Published 2 min ago</span>
                <span style={{ color: 'var(--oo-border)' }}>·</span>
                <span>3 views</span>
              </div>
              <div className="oo-action-card-footer">
                <button className="oo-btn oo-btn-secondary" style={{ fontSize: 13, padding: '10px 24px' }}>View Live</button>
                <button className="oo-btn oo-btn-secondary" style={{ fontSize: 13, padding: '10px 24px' }}>Edit</button>
              </div>
            </div>

          </div>
        </section>

        {/* ===== SECTION 6: FORM ELEMENTS ===== */}
        <section className="oo-section">
          <div className="oo-section-label">Form Elements</div>

          <h2 style={{ fontSize: 40, fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 0.95, marginBottom: 40 }}>
            Inputs & Controls
          </h2>

          <div style={{ maxWidth: 480 }}>
            <div className="oo-input-group">
              <label className="oo-label">Full Name</label>
              <input className="oo-input" type="text" placeholder="Enter your name" readOnly />
            </div>

            <div className="oo-input-group">
              <label className="oo-label">Email Address</label>
              <input className="oo-input oo-input--error" type="email" defaultValue="invalid-email" readOnly />
              <div className="oo-error-text">Please enter a valid email address</div>
            </div>

            <div className="oo-input-group">
              <label className="oo-label">Category</label>
              <div className="oo-select-wrapper">
                <select className="oo-select" defaultValue="poster">
                  <option value="poster">Poster Design</option>
                  <option value="editorial">Editorial</option>
                  <option value="brand">Brand Identity</option>
                </select>
              </div>
            </div>

            <div className="oo-input-group">
              <label className="oo-label">Notifications</label>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div className="oo-toggle oo-toggle--active">
                  <div className="oo-toggle-knob" />
                </div>
                <span style={{ fontSize: 14, color: '#8A8680' }}>Enabled</span>
              </div>
            </div>

            <div style={{ marginTop: 32 }}>
              <button className="oo-btn oo-btn-primary">Submit Form</button>
            </div>
          </div>
        </section>

        {/* ===== SECTION 7: FEEDBACK & STATUS ===== */}
        <section className="oo-section">
          <div className="oo-section-label">Feedback & Status</div>

          <h2 style={{ fontSize: 40, fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 0.95, marginBottom: 40 }}>
            Alerts & Progress
          </h2>

          <div style={{ maxWidth: 560 }}>
            <div className="oo-alert oo-alert--success">
              <span className="oo-alert-icon">●</span>
              <div>
                <strong>Success.</strong> Your design has been published and is now live.
              </div>
            </div>
            <div className="oo-alert oo-alert--error">
              <span className="oo-alert-icon">●</span>
              <div>
                <strong>Error.</strong> Failed to upload the asset. Please check the file format.
              </div>
            </div>
            <div className="oo-alert oo-alert--warning">
              <span className="oo-alert-icon">●</span>
              <div>
                <strong>Warning.</strong> Your storage quota is almost full. Consider archiving older files.
              </div>
            </div>
            <div className="oo-alert oo-alert--info">
              <span className="oo-alert-icon">●</span>
              <div>
                <strong>Info.</strong> A new version of the design system is available for review.
              </div>
            </div>

            <div style={{ marginTop: 32 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                <span style={{ fontSize: 13, fontWeight: 600 }}>Upload Progress</span>
                <span style={{ fontSize: 13, color: '#8A8680' }}>65%</span>
              </div>
              <div className="oo-progress-track">
                <div className="oo-progress-fill" style={{ width: '65%' }} />
              </div>
            </div>
          </div>
        </section>

        {/* ===== SECTION 8: CONTENT LAYOUT ===== */}
        <section className="oo-section" style={{ paddingBottom: 100 }}>
          <div className="oo-section-label">Sample Content</div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, alignItems: 'start' }}>
            <div>
              <h2 style={{ fontSize: 40, fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 0.95, marginBottom: 12 }}>
                Feature Modules
              </h2>
              <p style={{ fontSize: 16, color: '#8A8680', marginBottom: 32, lineHeight: 1.55 }}>
                Structured content blocks with status indicators and capsule actions.
              </p>

              <div>
                {[
                  { name: 'Poster Grid Layout', status: 'active', badge: 'active' },
                  { name: 'Organic Shape Engine', status: 'active', badge: 'active' },
                  { name: 'Capsule Tag System', status: 'new', badge: 'new' },
                  { name: 'Louvered Glass Panels', status: 'inactive', badge: 'inactive' },
                  { name: 'Color Token Export', status: 'active', badge: 'active' },
                ].map((item) => (
                  <div key={item.name} className="oo-list-item">
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                      <div style={{
                        width: 8, height: 8, borderRadius: '50%',
                        background: item.status === 'active' ? '#2E7D32' : item.status === 'new' ? '#3348FF' : '#E0DCD5',
                      }} />
                      <span style={{ fontSize: 15, fontWeight: 500 }}>{item.name}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                      <span className={`oo-badge oo-badge--${item.badge}`}>{item.badge}</span>
                      <span className="oo-link" style={{ fontSize: 13 }}>Configure</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ position: 'relative' }}>
              <div className="oo-card" style={{ marginBottom: 24 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20 }}>
                  <div>
                    <div style={{ fontSize: 11, fontWeight: 500, color: '#8A8680', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 4 }}>Latest</div>
                    <div style={{ fontSize: 22, fontWeight: 700, letterSpacing: '-0.02em' }}>Design Sprint</div>
                  </div>
                  <span className="oo-corner-label">capsule</span>
                </div>
                <p style={{ fontSize: 14, lineHeight: 1.55, color: '#8A8680', marginBottom: 20 }}>
                  Three-day poster series exploring the intersection of organic and geometric forms.
                </p>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  <span className="oo-tag">poster</span>
                  <span className="oo-tag">organic</span>
                  <span className="oo-tag oo-tag--filled-blue">featured</span>
                </div>
              </div>

              {/* Decorative egg */}
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div className="oo-egg" style={{ width: 80, height: 96, opacity: 0.15 }} />
              </div>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
