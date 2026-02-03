import React from 'react';

const cssStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400&family=JetBrains+Mono:wght@300;400;500&family=Inter:wght@300;400;500;600&display=swap');

  .te-showcase {
    --te-canvas: #fafafa;
    --te-paper: #ffffff;
    --te-text: #0a0a0a;
    --te-text-secondary: #525252;
    --te-text-tertiary: #a3a3a3;
    --te-grid-fine: rgba(0, 0, 0, 0.03);
    --te-grid-cross: rgba(0, 0, 0, 0.07);
    --te-bracket: rgba(0, 0, 0, 0.22);
    --te-ruler: rgba(0, 0, 0, 0.12);
    --te-border: rgba(0, 0, 0, 0.08);
    --te-green: #22c55e;
    --te-green-dim: rgba(34, 197, 94, 0.08);
    --te-red: #ef4444;
    --te-red-dim: rgba(239, 68, 68, 0.06);
    --te-blue: #3b82f6;
    --te-blue-dim: rgba(59, 130, 246, 0.06);
    --te-amber: #f59e0b;
    --te-amber-dim: rgba(245, 158, 11, 0.06);

    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    background: var(--te-canvas);
    color: var(--te-text);
    min-height: 100vh;
    position: relative;
    overflow-x: hidden;
  }

  /* ═══ GRID LAYER ═══ */
  .te-grid-plus {
    position: fixed;
    inset: 0;
    background-image: radial-gradient(circle at center, var(--te-grid-cross) 0.8px, transparent 0.8px);
    background-size: 32px 32px;
    pointer-events: none;
    z-index: 0;
  }

  /* ═══ COORDINATE RULERS ═══ */
  .te-ruler-y {
    position: fixed;
    left: 14px;
    top: 80px;
    bottom: 80px;
    width: 24px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    pointer-events: none;
    z-index: 1;
  }

  .te-ruler-x {
    position: fixed;
    bottom: 14px;
    left: 80px;
    right: 80px;
    height: 20px;
    display: flex;
    justify-content: space-between;
    pointer-events: none;
    z-index: 1;
  }

  .te-coord {
    font-family: 'JetBrains Mono', monospace;
    font-size: 8px;
    font-weight: 300;
    color: var(--te-ruler);
    letter-spacing: 0.04em;
  }

  /* ═══ MAIN CONTENT ═══ */
  .te-content {
    position: relative;
    z-index: 2;
    max-width: 1060px;
    margin: 0 auto;
    padding: 80px 64px 160px;
  }

  /* ═══ SECTION ═══ */
  .te-section {
    margin-bottom: 120px;
  }

  .te-section:last-child {
    margin-bottom: 0;
  }

  /* ═══ DASHED DIVIDER MOTIF ═══ */
  .te-divider {
    width: 100%;
    height: 1px;
    background-image: linear-gradient(to right, var(--te-bracket) 4px, transparent 4px);
    background-size: 12px 1px;
    margin: 0 0 120px;
  }

  /* ═══ BRACKETED CONTAINER ═══ */
  .te-bracketed {
    position: relative;
    padding: 40px;
  }

  .te-bracket-corner {
    position: absolute;
    width: 20px;
    height: 20px;
    pointer-events: none;
  }

  .te-bracket-corner::before,
  .te-bracket-corner::after {
    content: '';
    position: absolute;
    background: var(--te-bracket);
  }

  .te-bracket-tl { top: 0; left: 0; }
  .te-bracket-tl::before { top: 0; left: 0; width: 20px; height: 1px; }
  .te-bracket-tl::after { top: 0; left: 0; width: 1px; height: 20px; }

  .te-bracket-tr { top: 0; right: 0; }
  .te-bracket-tr::before { top: 0; right: 0; width: 20px; height: 1px; }
  .te-bracket-tr::after { top: 0; right: 0; width: 1px; height: 20px; }

  .te-bracket-bl { bottom: 0; left: 0; }
  .te-bracket-bl::before { bottom: 0; left: 0; width: 20px; height: 1px; }
  .te-bracket-bl::after { bottom: 0; left: 0; width: 1px; height: 20px; }

  .te-bracket-br { bottom: 0; right: 0; }
  .te-bracket-br::before { bottom: 0; right: 0; width: 20px; height: 1px; }
  .te-bracket-br::after { bottom: 0; right: 0; width: 1px; height: 20px; }

  /* ═══ HERO ═══ */
  .te-hero {
    min-height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 60px 0 40px;
    position: relative;
  }

  .te-hero-label {
    font-family: 'JetBrains Mono', monospace;
    font-size: 11px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.16em;
    color: var(--te-text-tertiary);
    margin-bottom: 28px;
    display: flex;
    align-items: center;
    gap: 14px;
  }

  .te-hero-label::before {
    content: '';
    width: 48px;
    height: 1px;
    background: var(--te-bracket);
  }

  .te-hero-title {
    font-family: 'Playfair Display', Georgia, serif;
    font-size: 76px;
    font-weight: 400;
    letter-spacing: -0.035em;
    line-height: 0.92;
    margin-bottom: 36px;
    max-width: 800px;
  }

  .te-hero-title em {
    font-style: italic;
    color: var(--te-text-secondary);
  }

  .te-hero-subtitle {
    font-size: 17px;
    font-weight: 400;
    color: var(--te-text-secondary);
    line-height: 1.75;
    max-width: 520px;
    margin-bottom: 52px;
  }

  .te-cta-row {
    display: flex;
    gap: 36px;
    align-items: center;
  }

  /* ═══ TERMINAL-STYLE BUTTONS ═══ */
  .te-btn {
    font-family: 'JetBrains Mono', monospace;
    font-size: 13px;
    font-weight: 500;
    background: none;
    border: none;
    color: var(--te-text);
    cursor: pointer;
    padding: 0;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    position: relative;
    text-decoration: none;
  }

  .te-btn-text {
    position: relative;
  }

  .te-btn-text::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 0;
    height: 1px;
    background: var(--te-text);
    transition: width 0.25s cubic-bezier(0.22, 1, 0.36, 1);
  }

  .te-btn:hover .te-btn-text::after {
    width: 100%;
  }

  .te-btn-cursor {
    display: inline-block;
    width: 7px;
    height: 14px;
    background: var(--te-text);
    animation: te-blink 1s steps(2) infinite;
    margin-left: 2px;
    vertical-align: middle;
  }

  .te-btn-bracket {
    color: var(--te-text-tertiary);
    font-weight: 300;
    transition: color 0.15s ease-out;
  }

  .te-btn:hover .te-btn-bracket {
    color: var(--te-text);
  }

  .te-btn-secondary {
    border: 1px solid rgba(0, 0, 0, 0.12);
    padding: 12px 22px;
    letter-spacing: 0.06em;
    transition: border-color 0.15s ease-out, background 0.15s ease-out;
  }

  .te-btn-secondary:hover {
    border-color: var(--te-text);
    background: rgba(0, 0, 0, 0.02);
  }

  .te-btn-secondary .te-btn-cursor {
    display: none;
  }

  .te-btn-disabled {
    color: var(--te-text-tertiary);
    cursor: not-allowed;
  }

  .te-btn-disabled .te-btn-cursor {
    animation: none;
    opacity: 0.25;
  }

  .te-btn-disabled .te-btn-text::after {
    display: none;
  }

  /* ═══ SECTION HEADERS ═══ */
  .te-section-header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 48px;
    padding-bottom: 18px;
    border-bottom: 1px solid var(--te-border);
    position: relative;
  }

  .te-section-header::after {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 60px;
    height: 1px;
    background: var(--te-text);
  }

  .te-section-title {
    font-family: 'Playfair Display', Georgia, serif;
    font-size: 40px;
    font-weight: 400;
    letter-spacing: -0.02em;
    line-height: 1.1;
  }

  .te-section-label {
    font-family: 'JetBrains Mono', monospace;
    font-size: 10px;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 0.14em;
    color: var(--te-text-tertiary);
  }

  /* ═══ COLOR PALETTE ═══ */
  .te-palette {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
  }

  .te-swatch {
    border: 1px solid var(--te-border);
    background: var(--te-paper);
    transition: border-color 0.15s ease-out;
    position: relative;
    overflow: hidden;
  }

  .te-swatch:hover {
    border-color: var(--te-bracket);
  }

  .te-swatch-color {
    height: 72px;
    position: relative;
  }

  .te-swatch-color::after {
    content: '';
    position: absolute;
    inset: 0;
    background-image: radial-gradient(circle at center, rgba(0,0,0,0.12) 0.6px, transparent 0.6px);
    background-size: 4px 4px;
    opacity: 0;
    transition: opacity 0.2s ease-out;
  }

  .te-swatch:hover .te-swatch-color::after {
    opacity: 1;
  }

  .te-swatch-info {
    padding: 12px 14px;
    font-family: 'JetBrains Mono', monospace;
    font-size: 10px;
    color: var(--te-text-secondary);
  }

  .te-swatch-name {
    font-weight: 500;
    color: var(--te-text);
    margin-bottom: 3px;
    font-size: 11px;
  }

  /* ═══ TYPOGRAPHY ═══ */
  .te-type-grid {
    display: flex;
    flex-direction: column;
    gap: 0;
  }

  .te-type-sample {
    padding: 28px 32px;
    border: 1px solid var(--te-border);
    border-bottom: none;
    background: var(--te-paper);
    position: relative;
    display: grid;
    grid-template-columns: 140px 1fr;
    align-items: baseline;
    gap: 24px;
  }

  .te-type-sample:last-child {
    border-bottom: 1px solid var(--te-border);
  }

  .te-type-label {
    font-family: 'JetBrains Mono', monospace;
    font-size: 9px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--te-text-tertiary);
    padding-top: 4px;
    align-self: start;
  }

  .te-type-serif {
    font-family: 'Playfair Display', Georgia, serif;
  }

  .te-type-mono {
    font-family: 'JetBrains Mono', monospace;
  }

  /* ═══ LINK STYLE ═══ */
  .te-link {
    font-family: 'JetBrains Mono', monospace;
    font-size: 13px;
    color: var(--te-text);
    text-decoration: none;
    position: relative;
    display: inline-flex;
    align-items: center;
    gap: 6px;
  }

  .te-link::after {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 100%;
    height: 1px;
    background: var(--te-text-tertiary);
    transition: background 0.15s ease-out;
  }

  .te-link:hover::after {
    background: var(--te-text);
  }

  /* ═══ CARDS ═══ */
  .te-card-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }

  .te-card {
    border: 1px solid var(--te-border);
    background: var(--te-paper);
    padding: 28px;
    position: relative;
    transition: border-color 0.2s ease-out;
  }

  .te-card::before,
  .te-card::after {
    content: '';
    position: absolute;
    pointer-events: none;
    transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1);
  }

  .te-card::before {
    top: -1px;
    left: -1px;
    width: 0;
    height: 0;
    border-top: 1px solid transparent;
    border-left: 1px solid transparent;
  }

  .te-card::after {
    bottom: -1px;
    right: -1px;
    width: 0;
    height: 0;
    border-bottom: 1px solid transparent;
    border-right: 1px solid transparent;
  }

  .te-card:hover {
    border-color: var(--te-bracket);
  }

  .te-card:hover::before {
    width: 20px;
    height: 20px;
    border-top-color: var(--te-text);
    border-left-color: var(--te-text);
  }

  .te-card:hover::after {
    width: 20px;
    height: 20px;
    border-bottom-color: var(--te-text);
    border-right-color: var(--te-text);
  }

  .te-card-icon {
    width: 32px;
    height: 32px;
    margin-bottom: 20px;
    position: relative;
  }

  .te-card-icon-stipple {
    width: 100%;
    height: 100%;
    background-image: radial-gradient(circle at center, var(--te-text) 0.8px, transparent 0.8px);
    background-size: 4px 4px;
    opacity: 0.35;
    border-radius: 2px;
  }

  .te-card-header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: 14px;
  }

  .te-card-title {
    font-family: 'Playfair Display', Georgia, serif;
    font-size: 21px;
    font-weight: 400;
    letter-spacing: -0.01em;
    line-height: 1.2;
  }

  .te-card-status {
    font-family: 'JetBrains Mono', monospace;
    font-size: 9px;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--te-green);
    display: flex;
    align-items: center;
    gap: 5px;
    flex-shrink: 0;
    margin-top: 4px;
  }

  .te-card-status-dot {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: currentColor;
  }

  .te-card-desc {
    font-size: 14px;
    color: var(--te-text-secondary);
    line-height: 1.65;
    margin-bottom: 20px;
  }

  .te-card-meta {
    font-family: 'JetBrains Mono', monospace;
    font-size: 10px;
    color: var(--te-text-tertiary);
    display: flex;
    gap: 16px;
    padding-top: 16px;
    border-top: 1px solid var(--te-border);
  }

  /* ═══ FORM ELEMENTS ═══ */
  .te-form-grid {
    display: grid;
    gap: 28px;
    max-width: 500px;
  }

  .te-input-group {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .te-input-label {
    font-family: 'JetBrains Mono', monospace;
    font-size: 10px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: var(--te-text-secondary);
  }

  .te-input {
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    padding: 14px 16px;
    border: 1px solid var(--te-border);
    background: var(--te-paper);
    color: var(--te-text);
    outline: none;
    transition: border-color 0.15s ease-out, box-shadow 0.15s ease-out;
  }

  .te-input:focus {
    border-color: var(--te-text);
    box-shadow: 0 0 0 1px var(--te-text);
  }

  .te-input::placeholder {
    color: var(--te-text-tertiary);
  }

  .te-input-error {
    border-color: var(--te-red);
  }

  .te-input-error:focus {
    border-color: var(--te-red);
    box-shadow: 0 0 0 1px var(--te-red);
  }

  .te-error-msg {
    font-family: 'JetBrains Mono', monospace;
    font-size: 10px;
    color: var(--te-red);
    letter-spacing: 0.02em;
  }

  .te-checkbox-wrap {
    display: flex;
    align-items: center;
    gap: 12px;
    cursor: pointer;
  }

  .te-checkbox-box {
    width: 16px;
    height: 16px;
    border: 1px solid var(--te-bracket);
    display: grid;
    place-items: center;
    flex-shrink: 0;
    position: relative;
    transition: background 0.1s ease-out;
  }

  .te-checkbox-box-checked {
    background: var(--te-text);
  }

  .te-checkbox-box-checked::after {
    content: '';
    width: 8px;
    height: 5px;
    border-left: 1.5px solid white;
    border-bottom: 1.5px solid white;
    transform: rotate(-45deg) translateY(-1px);
  }

  .te-checkbox-label {
    font-size: 14px;
    color: var(--te-text-secondary);
  }

  .te-select-wrap {
    position: relative;
  }

  .te-select-wrap::after {
    content: '\\2193';
    position: absolute;
    right: 16px;
    top: 50%;
    transform: translateY(-50%);
    font-family: 'JetBrains Mono', monospace;
    font-size: 11px;
    color: var(--te-text-tertiary);
    pointer-events: none;
  }

  .te-select-wrap select {
    appearance: none;
    width: 100%;
  }

  /* ═══ ALERTS ═══ */
  .te-alert-grid {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .te-alert {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 18px 24px;
    border: 1px solid var(--te-border);
    background: var(--te-paper);
    font-size: 14px;
    position: relative;
    transition: border-color 0.15s ease-out;
  }

  .te-alert:hover {
    border-color: var(--te-bracket);
  }

  .te-alert-indicator {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 3px;
  }

  .te-alert-content {
    display: flex;
    align-items: center;
    gap: 14px;
  }

  .te-alert-icon {
    font-family: 'JetBrains Mono', monospace;
    font-size: 10px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    flex-shrink: 0;
    padding: 4px 8px;
  }

  .te-alert-action {
    font-family: 'JetBrains Mono', monospace;
    font-size: 10px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: var(--te-text-secondary);
    cursor: pointer;
    transition: color 0.15s ease-out;
  }

  .te-alert-action:hover {
    color: var(--te-text);
  }

  /* ═══ PROGRESS ═══ */
  .te-progress-wrap {
    margin-top: 8px;
  }

  .te-progress-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }

  .te-progress-label {
    font-family: 'JetBrains Mono', monospace;
    font-size: 10px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: var(--te-text-tertiary);
  }

  .te-progress {
    height: 3px;
    background: var(--te-border);
    position: relative;
    overflow: hidden;
  }

  .te-progress-bar {
    height: 100%;
    background: var(--te-text);
    transition: width 0.3s ease-out;
  }

  /* ═══ CONTENT LAYOUT / OPERATIONS ═══ */
  .te-ops-grid {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .te-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 28px;
    border: 1px solid var(--te-border);
    background: var(--te-paper);
    transition: border-color 0.15s ease-out;
    position: relative;
  }

  .te-row::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 0;
    background: var(--te-text);
    transition: width 0.2s cubic-bezier(0.22, 1, 0.36, 1);
  }

  .te-row:hover {
    border-color: var(--te-bracket);
  }

  .te-row:hover::before {
    width: 3px;
  }

  .te-row-info {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .te-row-title {
    font-weight: 500;
    font-size: 15px;
  }

  .te-row-desc {
    font-family: 'JetBrains Mono', monospace;
    font-size: 11px;
    color: var(--te-text-tertiary);
    letter-spacing: 0.02em;
  }

  .te-row-actions {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  .te-badge {
    font-family: 'JetBrains Mono', monospace;
    font-size: 9px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    padding: 5px 12px;
    border: 1px solid var(--te-border);
    color: var(--te-text-tertiary);
  }

  .te-badge-active {
    border-color: var(--te-green);
    color: var(--te-green);
    background: var(--te-green-dim);
  }

  .te-badge-queued {
    border-color: var(--te-blue);
    color: var(--te-blue);
    background: var(--te-blue-dim);
  }

  /* ═══ BUTTON SHOWCASE GRID ═══ */
  .te-btn-showcase {
    display: flex;
    flex-wrap: wrap;
    gap: 32px;
    align-items: center;
    padding: 40px;
    border: 1px solid var(--te-border);
    background: var(--te-paper);
    position: relative;
  }

  .te-btn-showcase .te-bracket-corner::before,
  .te-btn-showcase .te-bracket-corner::after {
    background: var(--te-grid-cross);
  }

  /* ═══ ANIMATIONS ═══ */
  @keyframes te-blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }

  /* ═══ RESPONSIVE ═══ */
  @media (max-width: 768px) {
    .te-content {
      padding: 48px 20px 100px;
    }

    .te-hero-title {
      font-size: 44px;
    }

    .te-section {
      margin-bottom: 80px;
    }

    .te-section-title {
      font-size: 30px;
    }

    .te-palette {
      grid-template-columns: repeat(2, 1fr);
    }

    .te-card-grid {
      grid-template-columns: 1fr;
    }

    .te-ruler-y,
    .te-ruler-x {
      display: none;
    }

    .te-type-sample {
      grid-template-columns: 1fr;
      gap: 8px;
    }

    .te-btn-showcase {
      padding: 24px;
    }
  }
`;

export default function DesignShowcase() {
  return (
    <>
      <style>{cssStyles}</style>
      <main className="te-showcase">
        {/* Grid Layer */}
        <div className="te-grid-plus" />

        {/* Coordinate Rulers */}
        <div className="te-ruler-y">
          {['000', '080', '160', '240', '320', '400', '480'].map(v => (
            <span key={v} className="te-coord">{v}</span>
          ))}
        </div>
        <div className="te-ruler-x">
          {['000', '160', '320', '480', '640', '800', '960'].map(v => (
            <span key={v} className="te-coord">{v}</span>
          ))}
        </div>

        <div className="te-content">
          {/* ─── HERO ─── */}
          <section className="te-section te-hero">
            <div className="te-bracketed">
              <div className="te-bracket-corner te-bracket-tl" />
              <div className="te-bracket-corner te-bracket-tr" />
              <div className="te-bracket-corner te-bracket-bl" />
              <div className="te-bracket-corner te-bracket-br" />

              <span className="te-hero-label">Continuous Security Platform</span>
              <h1 className="te-hero-title">
                The machine watches<br />while <em>you</em> build.
              </h1>
              <p className="te-hero-subtitle">
                Autonomous agents scan your attack surface around the clock. No dashboards to check.
                No alerts to miss. Just coverage that adapts as your infrastructure evolves.
              </p>
              <div className="te-cta-row">
                <button className="te-btn">
                  <span className="te-btn-bracket">[</span>
                  <span className="te-btn-text">Book a call</span>
                  <span className="te-btn-bracket">]</span>
                  <span className="te-btn-cursor" />
                </button>
                <button className="te-btn te-btn-secondary">
                  <span className="te-btn-text">View documentation</span>
                </button>
              </div>
            </div>

          </section>

          <div className="te-divider" />

          {/* ─── COLOR PALETTE ─── */}
          <section className="te-section">
            <div className="te-section-header">
              <h2 className="te-section-title">Color Palette</h2>
              <span className="te-section-label">Design Tokens</span>
            </div>
            <div className="te-palette">
              {[
                { name: 'Canvas', hex: '#fafafa', bg: '#fafafa' },
                { name: 'Paper', hex: '#ffffff', bg: '#ffffff' },
                { name: 'Primary Text', hex: '#0a0a0a', bg: '#0a0a0a' },
                { name: 'Secondary', hex: '#525252', bg: '#525252' },
                { name: 'Tertiary', hex: '#a3a3a3', bg: '#a3a3a3' },
                { name: 'Terminal Green', hex: '#22c55e', bg: '#22c55e' },
                { name: 'Signal Red', hex: '#ef4444', bg: '#ef4444' },
                { name: 'Cursor Blue', hex: '#3b82f6', bg: '#3b82f6' },
              ].map(c => (
                <div key={c.name} className="te-swatch">
                  <div className="te-swatch-color" style={{ background: c.bg }} />
                  <div className="te-swatch-info">
                    <div className="te-swatch-name">{c.name}</div>
                    {c.hex}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ─── TYPOGRAPHY ─── */}
          <section className="te-section">
            <div className="te-section-header">
              <h2 className="te-section-title">Typography Scale</h2>
              <span className="te-section-label">Serif + Sans + Mono</span>
            </div>
            <div className="te-type-grid">
              <div className="te-type-sample">
                <span className="te-type-label">Hero / 76px</span>
                <h1 className="te-type-serif" style={{ fontSize: '52px', fontWeight: 400, letterSpacing: '-0.035em', lineHeight: 0.95 }}>
                  Precision in every scan.
                </h1>
              </div>
              <div className="te-type-sample">
                <span className="te-type-label">H2 / 40px</span>
                <h2 className="te-type-serif" style={{ fontSize: '36px', fontWeight: 400, letterSpacing: '-0.02em', lineHeight: 1.1 }}>
                  The editorial authority of print.
                </h2>
              </div>
              <div className="te-type-sample">
                <span className="te-type-label">H3 / 28px</span>
                <h3 style={{ fontSize: '24px', fontWeight: 500, letterSpacing: '-0.015em', lineHeight: 1.3 }}>
                  Clean hierarchy for critical data.
                </h3>
              </div>
              <div className="te-type-sample">
                <span className="te-type-label">Body / 15px</span>
                <p style={{ fontSize: '15px', lineHeight: 1.7, color: 'var(--te-text-secondary)', maxWidth: '560px' }}>
                  This system uses deliberate tension between serif authority and monospace precision.
                  Large Playfair headlines communicate editorial confidence while JetBrains Mono labels
                  signal that this is a technical tool built for engineers who value clarity.
                </p>
              </div>
              <div className="te-type-sample">
                <span className="te-type-label">Mono / 11px</span>
                <p className="te-type-mono" style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--te-text-tertiary)' }}>
                  System Status: All agents operational · Last scan: 2 minutes ago · Coverage: 98.4%
                </p>
              </div>
            </div>
          </section>

          {/* ─── BUTTONS ─── */}
          <section className="te-section">
            <div className="te-section-header">
              <h2 className="te-section-title">Buttons & Interactions</h2>
              <span className="te-section-label">Terminal Style</span>
            </div>
            <div className="te-btn-showcase">
              <div className="te-bracket-corner te-bracket-tl" />
              <div className="te-bracket-corner te-bracket-tr" />
              <div className="te-bracket-corner te-bracket-bl" />
              <div className="te-bracket-corner te-bracket-br" />

              <button className="te-btn">
                <span className="te-btn-bracket">[</span>
                <span className="te-btn-text">Start scan</span>
                <span className="te-btn-bracket">]</span>
                <span className="te-btn-cursor" />
              </button>
              <button className="te-btn te-btn-secondary">
                <span className="te-btn-text">View reports</span>
              </button>
              <button className="te-btn te-btn-disabled">
                <span className="te-btn-bracket">[</span>
                <span className="te-btn-text">Disabled</span>
                <span className="te-btn-bracket">]</span>
                <span className="te-btn-cursor" />
              </button>
              <a className="te-link" href="#">Agent documentation</a>
            </div>
          </section>

          {/* ─── CARDS ─── */}
          <section className="te-section">
            <div className="te-section-header">
              <h2 className="te-section-title">Cards</h2>
              <span className="te-section-label">Agent Findings</span>
            </div>
            <div className="te-card-grid">
              <article className="te-card">
                <div className="te-card-icon"><div className="te-card-icon-stipple" /></div>
                <div className="te-card-header">
                  <h3 className="te-card-title">API Surface Scan</h3>
                  <span className="te-card-status">
                    <span className="te-card-status-dot" />
                    Active
                  </span>
                </div>
                <p className="te-card-desc">
                  Maps every endpoint across your service mesh and tracks new routes as they appear in staging and production.
                </p>
                <div className="te-card-meta">
                  <span>Coverage: 98%</span>
                  <span>Last run: 4m ago</span>
                </div>
              </article>
              <article className="te-card">
                <div className="te-card-icon"><div className="te-card-icon-stipple" /></div>
                <div className="te-card-header">
                  <h3 className="te-card-title">Credential Audit</h3>
                  <span className="te-card-status" style={{ color: 'var(--te-red)' }}>
                    <span className="te-card-status-dot" />
                    Critical
                  </span>
                </div>
                <p className="te-card-desc">
                  Detects leaked secrets in build logs, environment snapshots, and CI artifacts. Verifies revocation status automatically.
                </p>
                <div className="te-card-meta">
                  <span>3 findings</span>
                  <span>Priority: High</span>
                </div>
              </article>
              <article className="te-card">
                <div className="te-card-icon"><div className="te-card-icon-stipple" /></div>
                <div className="te-card-header">
                  <h3 className="te-card-title">Runtime Monitor</h3>
                  <span className="te-card-status">
                    <span className="te-card-status-dot" />
                    Active
                  </span>
                </div>
                <p className="te-card-desc">
                  Tracks anomalous traffic patterns and highlights active exploit attempts across your ingress layer in real-time.
                </p>
                <div className="te-card-meta">
                  <span>0 anomalies</span>
                  <span>Uptime: 99.97%</span>
                </div>
              </article>
            </div>
          </section>

          {/* ─── FORM ELEMENTS ─── */}
          <section className="te-section">
            <div className="te-section-header">
              <h2 className="te-section-title">Form Elements</h2>
              <span className="te-section-label">Configuration</span>
            </div>
            <div className="te-form-grid">
              <div className="te-input-group">
                <label className="te-input-label">Target Domain</label>
                <input className="te-input" placeholder="api.example.com" readOnly />
              </div>
              <div className="te-input-group">
                <label className="te-input-label">API Key</label>
                <input className="te-input te-input-error" placeholder="sk_live_..." readOnly />
                <span className="te-error-msg">Invalid key format. Expected prefix: sk_live_</span>
              </div>
              <div className="te-checkbox-wrap">
                <div className="te-checkbox-box te-checkbox-box-checked" />
                <span className="te-checkbox-label">Enable continuous monitoring</span>
              </div>
              <div className="te-input-group">
                <label className="te-input-label">Scan Frequency</label>
                <div className="te-select-wrap">
                  <select className="te-input">
                    <option>Every 6 hours</option>
                    <option>Daily</option>
                    <option>Weekly</option>
                  </select>
                </div>
              </div>
              <div>
                <button className="te-btn">
                  <span className="te-btn-bracket">[</span>
                  <span className="te-btn-text">Submit configuration</span>
                  <span className="te-btn-bracket">]</span>
                  <span className="te-btn-cursor" />
                </button>
              </div>
            </div>
          </section>

          {/* ─── FEEDBACK & STATUS ─── */}
          <section className="te-section">
            <div className="te-section-header">
              <h2 className="te-section-title">Feedback & Status</h2>
              <span className="te-section-label">System Alerts</span>
            </div>
            <div className="te-alert-grid">
              <div className="te-alert">
                <div className="te-alert-indicator" style={{ background: 'var(--te-green)' }} />
                <div className="te-alert-content">
                  <span className="te-alert-icon" style={{ color: 'var(--te-green)', background: 'var(--te-green-dim)' }}>OK</span>
                  <span>Critical vulnerability CVE-2024-3094 patched successfully.</span>
                </div>
                <span className="te-alert-action">Dismiss</span>
              </div>
              <div className="te-alert">
                <div className="te-alert-indicator" style={{ background: 'var(--te-red)' }} />
                <div className="te-alert-content">
                  <span className="te-alert-icon" style={{ color: 'var(--te-red)', background: 'var(--te-red-dim)' }}>ERR</span>
                  <span>Agent connection failed on us-west-2. Retrying in 30s.</span>
                </div>
                <span className="te-alert-action">Retry</span>
              </div>
              <div className="te-alert">
                <div className="te-alert-indicator" style={{ background: 'var(--te-amber)' }} />
                <div className="te-alert-content">
                  <span className="te-alert-icon" style={{ color: 'var(--te-amber)', background: 'var(--te-amber-dim)' }}>WARN</span>
                  <span>New attack surface detected in production cluster.</span>
                </div>
                <span className="te-alert-action">Review</span>
              </div>
              <div className="te-alert">
                <div className="te-alert-indicator" style={{ background: 'var(--te-blue)' }} />
                <div className="te-alert-content">
                  <span className="te-alert-icon" style={{ color: 'var(--te-blue)', background: 'var(--te-blue-dim)' }}>INFO</span>
                  <span>Scheduled deep scan begins in 45 minutes.</span>
                </div>
                <span className="te-alert-action">Details</span>
              </div>
            </div>

            <div className="te-progress-wrap">
              <div className="te-progress-header">
                <span className="te-progress-label">Scan Progress</span>
                <span className="te-progress-label">65%</span>
              </div>
              <div className="te-progress">
                <div className="te-progress-bar" style={{ width: '65%' }} />
              </div>
            </div>
          </section>

          {/* ─── SAMPLE CONTENT LAYOUT ─── */}
          <section className="te-section">
            <div className="te-section-header">
              <h2 className="te-section-title">Operations</h2>
              <span className="te-section-label">Active Processes</span>
            </div>
            <div className="te-ops-grid">
              <div className="te-row">
                <div className="te-row-info">
                  <div className="te-row-title">Service perimeter scan</div>
                  <div className="te-row-desc">us-east-1 · Agent: Prama · PID 4401</div>
                </div>
                <div className="te-row-actions">
                  <span className="te-badge te-badge-active">Active</span>
                  <button className="te-btn te-btn-secondary" style={{ padding: '8px 16px', fontSize: '11px' }}>
                    <span className="te-btn-text">Pause</span>
                  </button>
                </div>
              </div>
              <div className="te-row">
                <div className="te-row-info">
                  <div className="te-row-title">Credential rotation audit</div>
                  <div className="te-row-desc">Scheduled · Next run in 2h · Agent: Ahmad</div>
                </div>
                <div className="te-row-actions">
                  <span className="te-badge te-badge-queued">Queued</span>
                  <button className="te-btn te-btn-secondary" style={{ padding: '8px 16px', fontSize: '11px' }}>
                    <span className="te-btn-text">Reschedule</span>
                  </button>
                </div>
              </div>
              <div className="te-row">
                <div className="te-row-info">
                  <div className="te-row-title">Zero-trust policy validation</div>
                  <div className="te-row-desc">Awaiting policy update · Manual trigger</div>
                </div>
                <div className="te-row-actions">
                  <span className="te-badge">Inactive</span>
                  <button className="te-btn te-btn-secondary" style={{ padding: '8px 16px', fontSize: '11px' }}>
                    <span className="te-btn-text">Configure</span>
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
