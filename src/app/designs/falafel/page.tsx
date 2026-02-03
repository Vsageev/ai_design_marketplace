import React from 'react';

const cssStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Georgia&display=swap');

  .fl-showcase {
    /* Base */
    --fl-bg: #111111;
    --fl-surface: #1a1a1a;
    --fl-surface-elevated: #222222;

    /* Text */
    --fl-text: #f5f0e8;
    --fl-text-secondary: #a39e93;
    --fl-text-caption: #6b6560;

    /* Accents */
    --fl-orange: #e8742a;
    --fl-red: #c0392b;
    --fl-green: #4a7c3f;
    --fl-cream: #f2e6c9;
    --fl-blue: #5b8fb9;

    /* Semantic */
    --fl-success: #4a7c3f;
    --fl-error: #c0392b;
    --fl-warning: #e8742a;
    --fl-info: #5b8fb9;

    background: var(--fl-bg);
    color: var(--fl-text);
    font-family: 'Georgia', 'Times New Roman', serif;
    font-size: 16px;
    line-height: 1.6;
    min-height: 100vh;
    padding: 0;
    margin: 0;
  }

  .fl-showcase *,
  .fl-showcase *::before,
  .fl-showcase *::after {
    box-sizing: border-box;
  }

  /* ---- Layout ---- */
  .fl-container {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 32px;
  }

  .fl-section {
    padding: 96px 0;
    border-bottom: 1px solid #2a2a2a;
  }

  .fl-section:last-child {
    border-bottom: none;
  }

  .fl-section-label {
    font-family: 'Courier New', 'Courier', monospace;
    font-size: 11px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: var(--fl-orange);
    margin-bottom: 12px;
  }

  .fl-section-title {
    font-family: Impact, 'Haettenschweiler', 'Arial Narrow Bold', sans-serif;
    font-size: 32px;
    font-weight: 700;
    line-height: 1.0;
    text-transform: uppercase;
    color: var(--fl-text);
    margin: 0 0 48px 0;
  }

  /* ---- Hero ---- */
  .fl-hero {
    padding: 120px 0 96px;
    position: relative;
    border-bottom: 3px solid var(--fl-orange);
  }

  .fl-hero::before {
    content: '///////////';
    position: absolute;
    top: 32px;
    left: 32px;
    font-family: 'Courier New', monospace;
    font-size: 14px;
    color: var(--fl-orange);
    opacity: 0.4;
    letter-spacing: 2px;
  }

  .fl-hero::after {
    content: '';
    position: absolute;
    bottom: -3px;
    right: 60px;
    width: 80px;
    height: 3px;
    background: var(--fl-cream);
  }

  .fl-hero-title {
    font-family: Impact, 'Haettenschweiler', 'Arial Narrow Bold', sans-serif;
    font-size: 72px;
    font-weight: 900;
    line-height: 0.9;
    letter-spacing: -0.02em;
    text-transform: uppercase;
    color: var(--fl-text);
    margin: 0 0 24px 0;
    max-width: 700px;
  }

  .fl-hero-title span {
    color: var(--fl-orange);
  }

  .fl-hero-tagline {
    font-size: 18px;
    color: var(--fl-text-secondary);
    max-width: 520px;
    margin: 0 0 40px 0;
    line-height: 1.6;
  }

  .fl-hero-cta {
    display: inline-block;
    font-family: Impact, 'Haettenschweiler', 'Arial Narrow Bold', sans-serif;
    font-size: 18px;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    color: var(--fl-bg);
    background: var(--fl-orange);
    border: 3px solid var(--fl-orange);
    padding: 14px 40px;
    border-radius: 2px;
    cursor: pointer;
    transition: transform 0.15s ease-out, border-color 0.15s ease-out;
    text-decoration: none;
  }

  .fl-hero-cta:hover {
    transform: scale(0.97);
    border-color: var(--fl-cream);
  }

  .fl-hero-badge {
    position: absolute;
    top: 80px;
    right: 60px;
    background: var(--fl-red);
    color: var(--fl-cream);
    font-family: Impact, 'Haettenschweiler', 'Arial Narrow Bold', sans-serif;
    font-size: 16px;
    text-transform: uppercase;
    padding: 10px 18px;
    transform: rotate(6deg);
    border-radius: 2px;
    letter-spacing: 0.02em;
  }

  /* ---- Color Palette ---- */
  .fl-palette-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    gap: 16px;
  }

  .fl-palette-group-title {
    font-family: 'Courier New', monospace;
    font-size: 13px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    color: var(--fl-text-secondary);
    margin: 32px 0 16px 0;
    padding-bottom: 8px;
    border-bottom: 1px dashed var(--fl-text-caption);
  }

  .fl-swatch {
    background: var(--fl-surface);
    border: 3px solid #2a2a2a;
    border-radius: 4px;
    overflow: hidden;
    transition: transform 0.15s ease-out, border-color 0.15s ease-out;
  }

  .fl-swatch:hover {
    transform: scale(0.97);
    border-color: var(--fl-orange);
  }

  .fl-swatch-color {
    height: 80px;
    width: 100%;
  }

  .fl-swatch-info {
    padding: 12px;
  }

  .fl-swatch-name {
    font-family: 'Courier New', monospace;
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    color: var(--fl-text);
    margin-bottom: 4px;
  }

  .fl-swatch-hex {
    font-family: 'Courier New', monospace;
    font-size: 11px;
    color: var(--fl-text-caption);
  }

  /* ---- Typography ---- */
  .fl-type-display {
    font-family: Impact, 'Haettenschweiler', 'Arial Narrow Bold', sans-serif;
    text-transform: uppercase;
    color: var(--fl-text);
    margin: 0 0 24px 0;
  }

  .fl-type-body-sample {
    max-width: 600px;
    color: var(--fl-text-secondary);
    margin: 24px 0;
    padding: 24px;
    border-left: 3px solid var(--fl-orange);
    background: var(--fl-surface);
    border-radius: 0 4px 4px 0;
  }

  .fl-type-label {
    font-family: 'Courier New', monospace;
    font-size: 11px;
    color: var(--fl-text-caption);
    text-transform: uppercase;
    letter-spacing: 0.06em;
    margin-bottom: 4px;
    display: block;
  }

  /* ---- Buttons ---- */
  .fl-btn-row {
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
    align-items: center;
    margin-bottom: 24px;
  }

  .fl-btn {
    font-family: Impact, 'Haettenschweiler', 'Arial Narrow Bold', sans-serif;
    font-size: 16px;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    padding: 12px 32px;
    border-radius: 2px;
    border: 3px solid transparent;
    cursor: pointer;
    transition: transform 0.15s ease-out, border-color 0.15s ease-out, background 0.15s ease-out;
    text-decoration: none;
    display: inline-block;
  }

  .fl-btn:hover {
    transform: scale(0.97);
  }

  .fl-btn-primary {
    background: var(--fl-orange);
    color: var(--fl-bg);
    border-color: var(--fl-orange);
  }

  .fl-btn-primary:hover {
    border-color: var(--fl-cream);
  }

  .fl-btn-secondary {
    background: transparent;
    color: var(--fl-text);
    border-color: var(--fl-text);
  }

  .fl-btn-secondary:hover {
    border-color: var(--fl-orange);
    color: var(--fl-orange);
  }

  .fl-btn-success {
    background: var(--fl-green);
    color: var(--fl-cream);
    border-color: var(--fl-green);
  }

  .fl-btn-success:hover {
    border-color: var(--fl-cream);
  }

  .fl-btn-disabled {
    background: #2a2a2a;
    color: var(--fl-text-caption);
    border-color: #2a2a2a;
    cursor: not-allowed;
    opacity: 0.5;
  }

  .fl-btn-disabled:hover {
    transform: none;
  }

  .fl-link {
    color: var(--fl-orange);
    text-decoration: none;
    border-bottom: 1px dashed var(--fl-orange);
    transition: color 0.15s ease-out;
    cursor: pointer;
  }

  .fl-link:hover {
    color: var(--fl-cream);
    border-bottom-color: var(--fl-cream);
  }

  /* ---- Cards ---- */
  .fl-card-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 24px;
  }

  .fl-card {
    background: var(--fl-surface);
    border: 3px solid #2a2a2a;
    border-radius: 4px;
    overflow: hidden;
    transition: transform 0.15s ease-out, border-color 0.15s ease-out;
    position: relative;
  }

  .fl-card:hover {
    transform: scale(0.97);
    border-color: var(--fl-orange);
  }

  .fl-card-header {
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .fl-card-header-icon {
    font-size: 40px;
    font-family: Impact, 'Haettenschweiler', 'Arial Narrow Bold', sans-serif;
    text-transform: uppercase;
    color: var(--fl-bg);
    opacity: 0.9;
  }

  .fl-card-body {
    padding: 24px;
  }

  .fl-card-title {
    font-family: Impact, 'Haettenschweiler', 'Arial Narrow Bold', sans-serif;
    font-size: 20px;
    text-transform: uppercase;
    color: var(--fl-text);
    margin: 0 0 8px 0;
    line-height: 1.1;
  }

  .fl-card-desc {
    font-size: 14px;
    color: var(--fl-text-secondary);
    line-height: 1.5;
    margin: 0 0 16px 0;
  }

  .fl-card-action {
    font-family: 'Courier New', monospace;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    color: var(--fl-orange);
    text-decoration: none;
    border-bottom: 1px dashed var(--fl-orange);
    cursor: pointer;
    transition: color 0.15s ease-out;
  }

  .fl-card-action:hover {
    color: var(--fl-cream);
    border-bottom-color: var(--fl-cream);
  }

  .fl-card-badge {
    position: absolute;
    top: 10px;
    right: -6px;
    background: var(--fl-red);
    color: var(--fl-cream);
    font-family: Impact, 'Haettenschweiler', 'Arial Narrow Bold', sans-serif;
    font-size: 11px;
    text-transform: uppercase;
    padding: 4px 12px;
    transform: rotate(3deg);
    border-radius: 2px;
  }

  /* ---- Forms ---- */
  .fl-form-group {
    margin-bottom: 24px;
    max-width: 480px;
  }

  .fl-label {
    display: block;
    font-family: 'Courier New', monospace;
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    color: var(--fl-text-secondary);
    margin-bottom: 8px;
  }

  .fl-input {
    width: 100%;
    padding: 12px 16px;
    background: var(--fl-surface);
    border: 3px solid #2a2a2a;
    border-radius: 4px;
    color: var(--fl-text);
    font-family: 'Georgia', serif;
    font-size: 15px;
    transition: border-color 0.15s ease-out;
    outline: none;
  }

  .fl-input:focus {
    border-color: var(--fl-orange);
  }

  .fl-input-error {
    border-color: var(--fl-red);
  }

  .fl-error-text {
    font-size: 12px;
    color: var(--fl-red);
    margin-top: 6px;
    font-family: 'Courier New', monospace;
  }

  .fl-checkbox-row {
    display: flex;
    align-items: center;
    gap: 12px;
    cursor: pointer;
  }

  .fl-checkbox {
    width: 20px;
    height: 20px;
    background: var(--fl-surface);
    border: 3px solid #2a2a2a;
    border-radius: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .fl-checkbox-checked {
    background: var(--fl-orange);
    border-color: var(--fl-orange);
  }

  .fl-checkbox-mark {
    color: var(--fl-bg);
    font-weight: 900;
    font-size: 14px;
    line-height: 1;
  }

  .fl-select {
    width: 100%;
    padding: 12px 16px;
    background: var(--fl-surface);
    border: 3px solid #2a2a2a;
    border-radius: 4px;
    color: var(--fl-text);
    font-family: 'Georgia', serif;
    font-size: 15px;
    appearance: none;
    cursor: pointer;
    background-image: url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L6 6L11 1' stroke='%23a39e93' stroke-width='2'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 16px center;
  }

  .fl-select:focus {
    border-color: var(--fl-orange);
    outline: none;
  }

  /* ---- Alerts ---- */
  .fl-alert {
    padding: 16px 20px;
    border-radius: 4px;
    border-left: 4px solid;
    margin-bottom: 16px;
    font-size: 14px;
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .fl-alert-success {
    background: rgba(74, 124, 63, 0.12);
    border-color: var(--fl-green);
    color: #8abf7a;
  }

  .fl-alert-error {
    background: rgba(192, 57, 43, 0.12);
    border-color: var(--fl-red);
    color: #e07a6e;
  }

  .fl-alert-warning {
    background: rgba(232, 116, 42, 0.12);
    border-color: var(--fl-orange);
    color: #f0a06a;
  }

  .fl-alert-info {
    background: rgba(91, 143, 185, 0.12);
    border-color: var(--fl-blue);
    color: #8bb8d8;
  }

  .fl-alert-icon {
    font-size: 18px;
    flex-shrink: 0;
  }

  /* ---- Progress ---- */
  .fl-progress-track {
    width: 100%;
    height: 12px;
    background: #2a2a2a;
    border-radius: 2px;
    overflow: hidden;
    border: 1px solid #333;
  }

  .fl-progress-bar {
    height: 100%;
    background: var(--fl-orange);
    border-radius: 2px;
    transition: width 0.3s ease-out;
  }

  .fl-progress-label {
    font-family: 'Courier New', monospace;
    font-size: 12px;
    color: var(--fl-text-secondary);
    margin-top: 6px;
    text-transform: uppercase;
    letter-spacing: 0.04em;
  }

  /* ---- Content Layout ---- */
  .fl-content-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .fl-content-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 20px;
    background: var(--fl-surface);
    border: 1px solid #2a2a2a;
    border-radius: 4px;
    margin-bottom: 8px;
    transition: border-color 0.15s ease-out;
  }

  .fl-content-item:hover {
    border-color: var(--fl-orange);
  }

  .fl-content-item-left {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  .fl-content-item-title {
    font-family: Impact, 'Haettenschweiler', 'Arial Narrow Bold', sans-serif;
    font-size: 15px;
    text-transform: uppercase;
    color: var(--fl-text);
  }

  .fl-content-item-desc {
    font-size: 13px;
    color: var(--fl-text-caption);
    margin-top: 2px;
  }

  .fl-badge {
    font-family: 'Courier New', monospace;
    font-size: 10px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    padding: 4px 10px;
    border-radius: 2px;
    display: inline-block;
  }

  .fl-badge-active {
    background: rgba(74, 124, 63, 0.15);
    color: #8abf7a;
    border: 1px solid rgba(74, 124, 63, 0.3);
  }

  .fl-badge-inactive {
    background: rgba(107, 101, 96, 0.15);
    color: var(--fl-text-caption);
    border: 1px solid rgba(107, 101, 96, 0.3);
  }

  .fl-content-actions {
    display: flex;
    gap: 8px;
    align-items: center;
  }

  .fl-btn-small {
    font-family: 'Courier New', monospace;
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    padding: 6px 14px;
    border-radius: 2px;
    border: 2px solid #2a2a2a;
    background: transparent;
    color: var(--fl-text-secondary);
    cursor: pointer;
    transition: border-color 0.15s ease-out, color 0.15s ease-out;
  }

  .fl-btn-small:hover {
    border-color: var(--fl-orange);
    color: var(--fl-orange);
  }

  /* ---- Splatter decoration ---- */
  .fl-splatter {
    position: relative;
  }

  .fl-splatter::after {
    content: '• • •';
    position: absolute;
    top: -8px;
    right: -20px;
    font-size: 8px;
    color: var(--fl-orange);
    letter-spacing: 4px;
    opacity: 0.5;
  }

  /* Ink spread hover for cards */
  .fl-ink-card {
    position: relative;
    overflow: hidden;
  }

  .fl-ink-card::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    background: rgba(232, 116, 42, 0.06);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition: width 0.3s ease-out, height 0.3s ease-out;
    z-index: 0;
  }

  .fl-ink-card:hover::before {
    width: 400%;
    height: 400%;
  }

  .fl-ink-card > * {
    position: relative;
    z-index: 1;
  }
`;

export default function FalafelShowcase() {
  return (
    <>
      <style>{cssStyles}</style>
      <main className="fl-showcase">
        {/* ======== HERO ======== */}
        <section className="fl-hero">
          <div className="fl-container">
            <div className="fl-hero-badge">Fresh Daily</div>
            <h1 className="fl-hero-title">
              Street Food<br />
              <span>Poster Art</span>
            </h1>
            <p className="fl-hero-tagline">
              Bold hand-drawn lines, thick outlines, and condensed type slammed onto dark backgrounds.
              Late-night shawarma joint meets indie zine culture.
            </p>
            <button className="fl-hero-cta">Explore the Menu</button>
          </div>
        </section>

        {/* ======== COLOR PALETTE ======== */}
        <section className="fl-section">
          <div className="fl-container">
            <div className="fl-section-label">Section 01</div>
            <h2 className="fl-section-title fl-splatter">Color Palette</h2>

            <div className="fl-palette-group-title">Base</div>
            <div className="fl-palette-grid">
              {[
                { name: 'Background', hex: '#111111', color: '#111111' },
                { name: 'Surface', hex: '#1a1a1a', color: '#1a1a1a' },
                { name: 'Elevated', hex: '#222222', color: '#222222' },
              ].map((c) => (
                <div key={c.name} className="fl-swatch">
                  <div className="fl-swatch-color" style={{ background: c.color, border: '1px solid #333' }} />
                  <div className="fl-swatch-info">
                    <div className="fl-swatch-name">{c.name}</div>
                    <div className="fl-swatch-hex">{c.hex}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="fl-palette-group-title">Accents</div>
            <div className="fl-palette-grid">
              {[
                { name: 'Orange', hex: '#e8742a', color: '#e8742a' },
                { name: 'Red', hex: '#c0392b', color: '#c0392b' },
                { name: 'Green', hex: '#4a7c3f', color: '#4a7c3f' },
                { name: 'Cream', hex: '#f2e6c9', color: '#f2e6c9' },
                { name: 'Blue', hex: '#5b8fb9', color: '#5b8fb9' },
              ].map((c) => (
                <div key={c.name} className="fl-swatch">
                  <div className="fl-swatch-color" style={{ background: c.color }} />
                  <div className="fl-swatch-info">
                    <div className="fl-swatch-name">{c.name}</div>
                    <div className="fl-swatch-hex">{c.hex}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="fl-palette-group-title">Semantic</div>
            <div className="fl-palette-grid">
              {[
                { name: 'Success', hex: '#4a7c3f', color: '#4a7c3f' },
                { name: 'Error', hex: '#c0392b', color: '#c0392b' },
                { name: 'Warning', hex: '#e8742a', color: '#e8742a' },
                { name: 'Info', hex: '#5b8fb9', color: '#5b8fb9' },
              ].map((c) => (
                <div key={c.name} className="fl-swatch">
                  <div className="fl-swatch-color" style={{ background: c.color }} />
                  <div className="fl-swatch-info">
                    <div className="fl-swatch-name">{c.name}</div>
                    <div className="fl-swatch-hex">{c.hex}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ======== TYPOGRAPHY ======== */}
        <section className="fl-section">
          <div className="fl-container">
            <div className="fl-section-label">Section 02</div>
            <h2 className="fl-section-title fl-splatter">Typography Scale</h2>

            <div style={{ marginBottom: 32 }}>
              <span className="fl-type-label">Hero — 72px / Impact / Uppercase</span>
              <div className="fl-type-display" style={{ fontSize: 72, fontWeight: 900, lineHeight: 0.9, letterSpacing: '-0.02em' }}>
                Night Market
              </div>
            </div>

            <div style={{ marginBottom: 32 }}>
              <span className="fl-type-label">H1 — 48px</span>
              <div className="fl-type-display" style={{ fontSize: 48, fontWeight: 900, lineHeight: 0.95 }}>
                Bold Flavors
              </div>
            </div>

            <div style={{ marginBottom: 32 }}>
              <span className="fl-type-label">H2 — 32px</span>
              <div className="fl-type-display" style={{ fontSize: 32, fontWeight: 700, lineHeight: 1.0 }}>
                Crispy Golden Wrap
              </div>
            </div>

            <div style={{ marginBottom: 32 }}>
              <span className="fl-type-label">H3 — 22px</span>
              <div className="fl-type-display" style={{ fontSize: 22, fontWeight: 700, lineHeight: 1.15, textTransform: 'none' }}>
                Fresh Ingredients Daily
              </div>
            </div>

            <div style={{ marginBottom: 32 }}>
              <span className="fl-type-label">Body — 16px / Georgia</span>
              <p style={{ fontSize: 16, lineHeight: 1.6, color: 'var(--fl-text-secondary)', maxWidth: 600, margin: 0 }}>
                Every wrap tells a story. The crunch of freshly fried falafel, the tang of pickled vegetables,
                the warmth of hand-rolled flatbread. This is food that doesn&apos;t apologize.
              </p>
            </div>

            <div style={{ marginBottom: 32 }}>
              <span className="fl-type-label">Small — 13px</span>
              <p style={{ fontSize: 13, lineHeight: 1.5, color: 'var(--fl-text-secondary)', margin: 0 }}>
                Open daily from 11 AM to 3 AM. No reservations needed.
              </p>
            </div>

            <div>
              <span className="fl-type-label">Caption — 11px / Courier / Uppercase</span>
              <p style={{ fontFamily: "'Courier New', monospace", fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--fl-text-caption)', margin: 0 }}>
                Menu item #042 — seasonal special
              </p>
            </div>

            <div className="fl-type-body-sample">
              <span className="fl-type-label">Reading Sample</span>
              <p style={{ margin: '8px 0 0' }}>
                The best street food is made with conviction. No half-measures, no timid seasoning,
                no apologies. You taste the char from the grill, the bite of raw onion,
                the heat that builds slowly then hits you all at once.
              </p>
            </div>
          </div>
        </section>

        {/* ======== BUTTONS ======== */}
        <section className="fl-section">
          <div className="fl-container">
            <div className="fl-section-label">Section 03</div>
            <h2 className="fl-section-title fl-splatter">Buttons &amp; Interactive</h2>

            <div className="fl-btn-row">
              <button className="fl-btn fl-btn-primary">Order Now</button>
              <button className="fl-btn fl-btn-secondary">View Menu</button>
              <button className="fl-btn fl-btn-success">Confirm Order</button>
              <button className="fl-btn fl-btn-disabled" disabled>Sold Out</button>
            </div>

            <div style={{ marginTop: 32 }}>
              <span className="fl-type-label">Link Style</span>
              <p style={{ marginTop: 8 }}>
                Check our <span className="fl-link">daily specials</span> or read about our{' '}
                <span className="fl-link">sourcing philosophy</span>.
              </p>
            </div>
          </div>
        </section>

        {/* ======== CARDS ======== */}
        <section className="fl-section">
          <div className="fl-container">
            <div className="fl-section-label">Section 04</div>
            <h2 className="fl-section-title fl-splatter">Cards</h2>

            <div className="fl-card-grid">
              <div className="fl-card fl-ink-card">
                <div className="fl-card-header" style={{ background: 'var(--fl-orange)' }}>
                  <span className="fl-card-header-icon">&#9670;</span>
                </div>
                <div className="fl-card-body">
                  <h3 className="fl-card-title">Classic Falafel Wrap</h3>
                  <p className="fl-card-desc">
                    Crispy chickpea falafel, tahini, pickled turnip, fresh herbs, wrapped in warm flatbread.
                  </p>
                  <span className="fl-card-action">View Details →</span>
                </div>
              </div>

              <div className="fl-card fl-ink-card">
                <div className="fl-card-badge">New</div>
                <div className="fl-card-header" style={{ background: 'var(--fl-red)' }}>
                  <span className="fl-card-header-icon">&#9733;</span>
                </div>
                <div className="fl-card-body">
                  <h3 className="fl-card-title">Spicy Shawarma Plate</h3>
                  <p className="fl-card-desc">
                    Slow-roasted lamb, garlic sauce, chili oil, grilled vegetables, served with rice.
                  </p>
                  <span className="fl-card-action">View Details →</span>
                </div>
              </div>

              <div className="fl-card fl-ink-card">
                <div className="fl-card-header" style={{ background: 'var(--fl-green)' }}>
                  <span className="fl-card-header-icon">&#9827;</span>
                </div>
                <div className="fl-card-body">
                  <h3 className="fl-card-title">Garden Mezze Bowl</h3>
                  <p className="fl-card-desc">
                    Hummus, tabbouleh, grilled halloumi, olives, and fresh pita on the side.
                  </p>
                  <span className="fl-card-action">View Details →</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ======== FORMS ======== */}
        <section className="fl-section">
          <div className="fl-container">
            <div className="fl-section-label">Section 05</div>
            <h2 className="fl-section-title fl-splatter">Form Elements</h2>

            <div className="fl-form-group">
              <label className="fl-label">Your Name</label>
              <input className="fl-input" type="text" placeholder="Enter your name" readOnly />
            </div>

            <div className="fl-form-group">
              <label className="fl-label">Email Address</label>
              <input className="fl-input fl-input-error" type="email" defaultValue="not-an-email" readOnly />
              <div className="fl-error-text">Please enter a valid email address</div>
            </div>

            <div className="fl-form-group">
              <div className="fl-checkbox-row">
                <div className="fl-checkbox fl-checkbox-checked">
                  <span className="fl-checkbox-mark">✓</span>
                </div>
                <span style={{ fontSize: 14, color: 'var(--fl-text-secondary)' }}>Add extra hot sauce</span>
              </div>
            </div>

            <div className="fl-form-group">
              <div className="fl-checkbox-row">
                <div className="fl-checkbox" />
                <span style={{ fontSize: 14, color: 'var(--fl-text-secondary)' }}>Subscribe to weekly specials</span>
              </div>
            </div>

            <div className="fl-form-group">
              <label className="fl-label">Pickup Location</label>
              <select className="fl-select" defaultValue="downtown">
                <option value="downtown">Downtown — Main Street</option>
                <option value="east">East Side — Market Square</option>
                <option value="west">West End — Food Court</option>
              </select>
            </div>

            <button className="fl-btn fl-btn-primary" style={{ marginTop: 8 }}>Submit Order</button>
          </div>
        </section>

        {/* ======== FEEDBACK ======== */}
        <section className="fl-section">
          <div className="fl-container">
            <div className="fl-section-label">Section 06</div>
            <h2 className="fl-section-title fl-splatter">Feedback &amp; Status</h2>

            <div className="fl-alert fl-alert-success">
              <span className="fl-alert-icon">✓</span>
              Order confirmed. Your falafel wrap is being prepared.
            </div>

            <div className="fl-alert fl-alert-error">
              <span className="fl-alert-icon">✕</span>
              Payment failed. Please check your card details and try again.
            </div>

            <div className="fl-alert fl-alert-warning">
              <span className="fl-alert-icon">!</span>
              Limited stock remaining. The lamb shawarma may sell out today.
            </div>

            <div className="fl-alert fl-alert-info">
              <span className="fl-alert-icon">i</span>
              New location opening next month at Boom Mall, food court, 4th floor.
            </div>

            <div style={{ marginTop: 40 }}>
              <span className="fl-type-label">Order Progress</span>
              <div className="fl-progress-track" style={{ marginTop: 8 }}>
                <div className="fl-progress-bar" style={{ width: '65%' }} />
              </div>
              <div className="fl-progress-label">65% — Preparing your order</div>
            </div>
          </div>
        </section>

        {/* ======== SAMPLE CONTENT ======== */}
        <section className="fl-section">
          <div className="fl-container">
            <div className="fl-section-label">Section 07</div>
            <h2 className="fl-section-title fl-splatter">Menu Board</h2>

            <ul className="fl-content-list">
              <li className="fl-content-item">
                <div className="fl-content-item-left">
                  <div>
                    <div className="fl-content-item-title">Classic Falafel</div>
                    <div className="fl-content-item-desc">Chickpea, herbs, tahini, pickled veg</div>
                  </div>
                </div>
                <div className="fl-content-actions">
                  <span className="fl-badge fl-badge-active">Available</span>
                  <button className="fl-btn-small">Add</button>
                </div>
              </li>

              <li className="fl-content-item">
                <div className="fl-content-item-left">
                  <div>
                    <div className="fl-content-item-title">Lamb Shawarma</div>
                    <div className="fl-content-item-desc">Slow-roasted lamb, garlic sauce, chili</div>
                  </div>
                </div>
                <div className="fl-content-actions">
                  <span className="fl-badge fl-badge-active">Available</span>
                  <button className="fl-btn-small">Add</button>
                </div>
              </li>

              <li className="fl-content-item">
                <div className="fl-content-item-left">
                  <div>
                    <div className="fl-content-item-title">Olivier Special</div>
                    <div className="fl-content-item-desc">Holiday seasonal wrap with mustard sauce</div>
                  </div>
                </div>
                <div className="fl-content-actions">
                  <span className="fl-badge fl-badge-inactive">Seasonal</span>
                  <button className="fl-btn-small">Add</button>
                </div>
              </li>
            </ul>

            <div style={{ marginTop: 40, padding: '24px', background: 'var(--fl-surface)', border: '3px dashed var(--fl-orange)', borderRadius: 4 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
                <div>
                  <div style={{ fontFamily: "Impact, 'Haettenschweiler', 'Arial Narrow Bold', sans-serif", fontSize: 20, textTransform: 'uppercase', color: 'var(--fl-cream)' }}>
                    First 50 Wraps Free
                  </div>
                  <div style={{ fontSize: 13, color: 'var(--fl-text-caption)', marginTop: 4 }}>
                    Grand opening promo — one per customer
                  </div>
                </div>
                <button className="fl-btn fl-btn-primary" style={{ padding: '10px 24px', fontSize: 14 }}>
                  Claim Offer
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
