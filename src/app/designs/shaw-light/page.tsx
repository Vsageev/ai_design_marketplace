import React from 'react';

const cssStyles = `
  .sl-showcase {
    --sl-bg: #D6EDFA;
    --sl-surface: #FFF5E0;
    --sl-card-bg: #FFFFFF;
    --sl-text: #1A1A2E;
    --sl-text-secondary: #5A5A7A;
    --sl-caption: #8A8AA0;
    --sl-red: #E63926;
    --sl-blue: #2B4C9B;
    --sl-orange: #E8943A;
    --sl-green: #4A8C3F;
    --sl-yellow: #F5D547;
    --sl-success: #4A8C3F;
    --sl-error: #E63926;
    --sl-warning: #E8943A;
    --sl-info: #2B4C9B;
    --sl-font-display: 'Georgia', 'Times New Roman', serif;
    --sl-font-body: 'Helvetica Neue', 'Arial', sans-serif;
    --sl-font-mono: 'Courier New', monospace;
    --sl-radius-card: 16px;
    --sl-radius-btn: 12px;
    --sl-radius-input: 10px;
    --sl-shadow: 4px 4px 0px #1A1A2E;
    --sl-shadow-hover: 8px 8px 0px #1A1A2E;
    --sl-shadow-btn-hover: 6px 6px 0px #1A1A2E;

    font-family: var(--sl-font-body);
    color: var(--sl-text);
    background: var(--sl-bg);
    min-height: 100vh;
  }

  .sl-showcase *, .sl-showcase *::before, .sl-showcase *::after {
    box-sizing: border-box;
  }

  .sl-inner {
    max-width: 1100px;
    margin: 0 auto;
    padding: 60px 32px 120px;
  }

  /* ---- DASHED SEPARATOR motif ---- */
  .sl-dash-sep {
    border: none;
    border-top: 4px dashed var(--sl-text);
    opacity: 0.15;
    margin: 100px 0;
  }

  /* ---- HERO ---- */
  .sl-hero {
    position: relative;
    text-align: center;
    padding: 80px 0 120px;
  }

  .sl-hero-title {
    font-family: var(--sl-font-display);
    font-size: 80px;
    font-weight: 900;
    line-height: 0.92;
    text-transform: uppercase;
    letter-spacing: -0.02em;
    color: var(--sl-red);
    margin: 0 0 24px;
  }

  .sl-hero-tagline {
    font-family: var(--sl-font-body);
    font-size: 20px;
    font-weight: 400;
    line-height: 1.5;
    color: var(--sl-blue);
    max-width: 560px;
    margin: 0 auto 40px;
  }

  .sl-hero-cta {
    display: inline-block;
    font-family: var(--sl-font-display);
    font-size: 20px;
    font-weight: 800;
    color: #fff;
    background: var(--sl-red);
    border: 3px solid var(--sl-text);
    border-radius: var(--sl-radius-btn);
    padding: 16px 40px;
    box-shadow: var(--sl-shadow);
    cursor: pointer;
    text-transform: uppercase;
    letter-spacing: 0.03em;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    text-decoration: none;
  }

  .sl-hero-cta:hover {
    transform: translate(-2px, -2px);
    box-shadow: var(--sl-shadow-btn-hover);
  }

  /* star burst behind badge */
  .sl-starburst {
    position: relative;
    display: inline-block;
  }

  .sl-starburst::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 130%;
    height: 130%;
    background: var(--sl-yellow);
    border-radius: 50%;
    transform: translate(-50%, -50%) rotate(0deg);
    z-index: 0;
    clip-path: polygon(
      50% 0%, 61% 35%, 98% 35%, 68% 57%,
      79% 91%, 50% 70%, 21% 91%, 32% 57%,
      2% 35%, 39% 35%
    );
  }

  .sl-starburst > * {
    position: relative;
    z-index: 1;
  }

  /* ---- SECTION HEADERS ---- */
  .sl-section {
    margin-bottom: 100px;
  }

  .sl-section-title {
    font-family: var(--sl-font-display);
    font-size: 36px;
    font-weight: 800;
    line-height: 1.1;
    color: var(--sl-text);
    margin: 0 0 12px;
  }

  .sl-section-subtitle {
    font-size: 16px;
    color: var(--sl-text-secondary);
    line-height: 1.6;
    margin: 0 0 40px;
  }

  /* ---- COLOR PALETTE ---- */
  .sl-color-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    gap: 20px;
  }

  .sl-color-card {
    background: var(--sl-card-bg);
    border: 3px solid var(--sl-text);
    border-radius: var(--sl-radius-card);
    overflow: hidden;
    box-shadow: var(--sl-shadow);
  }

  .sl-color-swatch {
    height: 80px;
    border-bottom: 3px solid var(--sl-text);
  }

  .sl-color-info {
    padding: 14px 16px;
  }

  .sl-color-name {
    font-weight: 700;
    font-size: 14px;
    margin-bottom: 4px;
  }

  .sl-color-hex {
    font-family: var(--sl-font-mono);
    font-size: 13px;
    color: var(--sl-text-secondary);
  }

  /* ---- TYPOGRAPHY ---- */
  .sl-type-sample {
    margin-bottom: 32px;
  }

  .sl-type-label {
    font-family: var(--sl-font-mono);
    font-size: 12px;
    color: var(--sl-caption);
    text-transform: uppercase;
    letter-spacing: 0.08em;
    margin-bottom: 8px;
  }

  .sl-type-h1 {
    font-family: var(--sl-font-display);
    font-size: 72px;
    font-weight: 900;
    line-height: 0.95;
    text-transform: uppercase;
    color: var(--sl-red);
  }

  .sl-type-h2 {
    font-family: var(--sl-font-display);
    font-size: 48px;
    font-weight: 800;
    line-height: 1.05;
    color: var(--sl-text);
  }

  .sl-type-h3 {
    font-family: var(--sl-font-display);
    font-size: 36px;
    font-weight: 800;
    line-height: 1.1;
    color: var(--sl-text);
  }

  .sl-type-h4 {
    font-family: var(--sl-font-display);
    font-size: 28px;
    font-weight: 700;
    line-height: 1.2;
    color: var(--sl-blue);
  }

  .sl-type-h5 {
    font-family: var(--sl-font-display);
    font-size: 22px;
    font-weight: 700;
    line-height: 1.25;
    color: var(--sl-text);
  }

  .sl-type-h6 {
    font-family: var(--sl-font-display);
    font-size: 18px;
    font-weight: 700;
    line-height: 1.3;
    color: var(--sl-text-secondary);
  }

  .sl-type-body-lg {
    font-size: 18px;
    line-height: 1.6;
  }

  .sl-type-body {
    font-size: 16px;
    line-height: 1.6;
  }

  .sl-type-body-sm {
    font-size: 14px;
    line-height: 1.5;
    color: var(--sl-text-secondary);
  }

  .sl-type-caption {
    font-size: 13px;
    font-weight: 500;
    line-height: 1.4;
    color: var(--sl-caption);
  }

  .sl-type-paragraph {
    font-size: 16px;
    line-height: 1.7;
    max-width: 620px;
    color: var(--sl-text-secondary);
    margin-top: 24px;
    border-left: 4px dashed var(--sl-yellow);
    padding-left: 20px;
  }

  /* ---- BUTTONS ---- */
  .sl-btn-row {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    align-items: flex-start;
  }

  .sl-btn {
    font-family: var(--sl-font-display);
    font-size: 16px;
    font-weight: 700;
    padding: 14px 28px;
    border: 3px solid var(--sl-text);
    border-radius: var(--sl-radius-btn);
    cursor: pointer;
    text-transform: uppercase;
    letter-spacing: 0.02em;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    box-shadow: var(--sl-shadow);
    text-decoration: none;
    display: inline-block;
  }

  .sl-btn:hover {
    transform: translate(-2px, -2px);
    box-shadow: var(--sl-shadow-btn-hover);
  }

  .sl-btn-primary {
    background: var(--sl-red);
    color: #fff;
  }

  .sl-btn-secondary {
    background: var(--sl-card-bg);
    color: var(--sl-text);
  }

  .sl-btn-success {
    background: var(--sl-green);
    color: #fff;
  }

  .sl-btn-disabled {
    background: #d0d0d0;
    color: #999;
    cursor: not-allowed;
    box-shadow: 2px 2px 0px #bbb;
    border-color: #bbb;
  }

  .sl-btn-disabled:hover {
    transform: none;
    box-shadow: 2px 2px 0px #bbb;
  }

  .sl-link {
    font-weight: 600;
    color: var(--sl-blue);
    text-decoration: underline;
    text-decoration-thickness: 2px;
    text-underline-offset: 3px;
    transition: color 0.15s ease;
  }

  .sl-link:hover {
    color: var(--sl-red);
  }

  /* ---- CARDS ---- */
  .sl-card-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 28px;
  }

  .sl-card {
    background: var(--sl-card-bg);
    border: 3px solid var(--sl-text);
    border-radius: var(--sl-radius-card);
    overflow: hidden;
    box-shadow: var(--sl-shadow);
    transition: transform 0.25s ease, box-shadow 0.25s ease;
    position: relative;
  }

  .sl-card:hover {
    transform: translateY(-6px);
    box-shadow: var(--sl-shadow-hover);
  }

  .sl-card-header {
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 3px solid var(--sl-text);
    position: relative;
    overflow: hidden;
  }

  .sl-card-icon {
    font-size: 28px;
    z-index: 1;
  }

  .sl-card-body {
    padding: 24px;
  }

  .sl-card-title {
    font-family: var(--sl-font-display);
    font-size: 22px;
    font-weight: 700;
    line-height: 1.2;
    margin: 0 0 10px;
  }

  .sl-card-desc {
    font-size: 15px;
    line-height: 1.6;
    color: var(--sl-text-secondary);
    margin: 0 0 20px;
  }

  .sl-card-action {
    font-family: var(--sl-font-body);
    font-size: 14px;
    font-weight: 600;
    color: var(--sl-blue);
    text-decoration: none;
    border-bottom: 2px dashed var(--sl-blue);
    padding-bottom: 2px;
    transition: color 0.15s, border-color 0.15s;
  }

  .sl-card-action:hover {
    color: var(--sl-red);
    border-color: var(--sl-red);
  }

  /* ---- FORMS ---- */
  .sl-form-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 28px;
    max-width: 700px;
  }

  .sl-form-group {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .sl-form-label {
    font-weight: 700;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 0.04em;
  }

  .sl-form-input {
    font-family: var(--sl-font-body);
    font-size: 16px;
    padding: 12px 16px;
    border: 2px solid var(--sl-text);
    border-radius: var(--sl-radius-input);
    background: var(--sl-card-bg);
    outline: none;
    transition: border-color 0.2s, box-shadow 0.2s;
  }

  .sl-form-input:focus {
    border-color: var(--sl-blue);
    box-shadow: 0 0 0 3px rgba(43, 76, 155, 0.15);
  }

  .sl-form-input-error {
    border-color: var(--sl-error);
    background: #FFF0EE;
  }

  .sl-form-error-msg {
    font-size: 13px;
    color: var(--sl-error);
    font-weight: 600;
  }

  .sl-form-select {
    font-family: var(--sl-font-body);
    font-size: 16px;
    padding: 12px 16px;
    border: 2px solid var(--sl-text);
    border-radius: var(--sl-radius-input);
    background: var(--sl-card-bg);
    appearance: none;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%231A1A2E' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'%3E%3C/path%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 14px center;
    padding-right: 44px;
    cursor: pointer;
  }

  .sl-checkbox-row {
    display: flex;
    align-items: center;
    gap: 12px;
    cursor: pointer;
  }

  .sl-checkbox {
    width: 22px;
    height: 22px;
    border: 2px solid var(--sl-text);
    border-radius: 6px;
    background: var(--sl-card-bg);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .sl-checkbox-checked {
    background: var(--sl-blue);
    border-color: var(--sl-blue);
    color: #fff;
    font-weight: 900;
    font-size: 14px;
  }

  /* ---- ALERTS ---- */
  .sl-alert-stack {
    display: flex;
    flex-direction: column;
    gap: 20px;
    max-width: 600px;
  }

  .sl-alert {
    padding: 18px 24px;
    border: 3px solid var(--sl-text);
    border-radius: var(--sl-radius-card);
    font-size: 15px;
    font-weight: 500;
    line-height: 1.5;
    box-shadow: 3px 3px 0px rgba(0,0,0,0.08);
    display: flex;
    align-items: flex-start;
    gap: 12px;
  }

  .sl-alert-icon {
    font-size: 20px;
    flex-shrink: 0;
    margin-top: 1px;
  }

  .sl-alert-success {
    background: #EDFBE8;
    border-left: 6px solid var(--sl-success);
  }

  .sl-alert-error {
    background: #FFF0EE;
    border-left: 6px solid var(--sl-error);
  }

  .sl-alert-warning {
    background: #FFF6E5;
    border-left: 6px solid var(--sl-warning);
  }

  .sl-alert-info {
    background: #EBF0FF;
    border-left: 6px solid var(--sl-info);
  }

  .sl-progress-track {
    background: #E8E8F0;
    border-radius: 999px;
    height: 18px;
    border: 2px solid var(--sl-text);
    overflow: hidden;
  }

  .sl-progress-fill {
    height: 100%;
    background: var(--sl-orange);
    border-radius: 999px;
    transition: width 0.4s ease;
  }

  /* ---- CONTENT LAYOUT ---- */
  .sl-content-card {
    background: var(--sl-card-bg);
    border: 3px solid var(--sl-text);
    border-radius: var(--sl-radius-card);
    box-shadow: var(--sl-shadow);
    overflow: hidden;
    max-width: 700px;
  }

  .sl-content-header {
    padding: 24px 28px;
    border-bottom: 3px dashed var(--sl-text);
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .sl-content-header-title {
    font-family: var(--sl-font-display);
    font-size: 24px;
    font-weight: 800;
  }

  .sl-content-row {
    padding: 18px 28px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 2px dashed rgba(26, 26, 46, 0.1);
    transition: background 0.15s;
  }

  .sl-content-row:last-child {
    border-bottom: none;
  }

  .sl-content-row:hover {
    background: rgba(214, 237, 250, 0.4);
  }

  .sl-content-row-label {
    font-weight: 600;
    font-size: 15px;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .sl-content-row-right {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .sl-badge {
    font-family: var(--sl-font-mono);
    font-size: 12px;
    font-weight: 700;
    padding: 4px 12px;
    border-radius: 999px;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    border: 2px solid currentColor;
  }

  .sl-badge-active {
    color: var(--sl-green);
    background: rgba(74, 140, 63, 0.1);
  }

  .sl-badge-inactive {
    color: var(--sl-caption);
    background: rgba(138, 138, 160, 0.1);
  }

  .sl-mini-btn {
    font-family: var(--sl-font-body);
    font-size: 13px;
    font-weight: 700;
    padding: 6px 14px;
    border: 2px solid var(--sl-text);
    border-radius: 8px;
    background: var(--sl-surface);
    cursor: pointer;
    transition: background 0.15s;
    text-transform: uppercase;
    letter-spacing: 0.03em;
  }

  .sl-mini-btn:hover {
    background: var(--sl-yellow);
  }

  /* ---- BADGE SPIN hover ---- */
  .sl-spin-badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 56px;
    height: 56px;
    border-radius: 50%;
    background: var(--sl-yellow);
    border: 3px solid var(--sl-text);
    font-family: var(--sl-font-mono);
    font-size: 16px;
    font-weight: 900;
    box-shadow: 2px 2px 0px rgba(0,0,0,0.15);
    transition: transform 0.3s ease;
    cursor: default;
  }

  .sl-spin-badge:hover {
    transform: rotate(15deg) scale(1.1);
  }

  @media (max-width: 700px) {
    .sl-hero-title {
      font-size: 48px;
    }
    .sl-form-grid {
      grid-template-columns: 1fr;
    }
    .sl-card-grid {
      grid-template-columns: 1fr;
    }
    .sl-color-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;

const colors = [
  { name: 'Sky Blue', hex: '#D6EDFA', group: 'Base' },
  { name: 'Warm Cream', hex: '#FFF5E0', group: 'Base' },
  { name: 'White', hex: '#FFFFFF', group: 'Base' },
  { name: 'Deep Navy', hex: '#1A1A2E', group: 'Base' },
  { name: 'Poster Red', hex: '#E63926', group: 'Accent' },
  { name: 'Deep Blue', hex: '#2B4C9B', group: 'Accent' },
  { name: 'Warm Orange', hex: '#E8943A', group: 'Accent' },
  { name: 'Fresh Green', hex: '#4A8C3F', group: 'Accent' },
  { name: 'Bright Yellow', hex: '#F5D547', group: 'Accent' },
  { name: 'Success', hex: '#4A8C3F', group: 'Semantic' },
  { name: 'Error', hex: '#E63926', group: 'Semantic' },
  { name: 'Warning', hex: '#E8943A', group: 'Semantic' },
  { name: 'Info', hex: '#2B4C9B', group: 'Semantic' },
];

const cards = [
  {
    icon: '🍅',
    bg: '#E63926',
    title: 'Fresh Ingredients',
    desc: 'Hand-picked seasonal produce delivered straight from the market to your kitchen counter.',
  },
  {
    icon: '🥕',
    bg: '#E8943A',
    title: 'Classic Recipes',
    desc: 'Time-tested recipes passed down through generations, reimagined for the modern cook.',
  },
  {
    icon: '🥒',
    bg: '#4A8C3F',
    title: 'Festive Specials',
    desc: 'Holiday-ready dishes that bring everyone to the table. Bold flavors, bigger portions.',
  },
];

const contentRows = [
  { label: 'Olivier Salad', status: 'active', icon: '🥗' },
  { label: 'Borscht Classic', status: 'active', icon: '🍲' },
  { label: 'Pelmeni Pack', status: 'inactive', icon: '🥟' },
];

export default function ShawLightShowcase() {
  return (
    <>
      <style>{cssStyles}</style>
      <main className="sl-showcase">
        <div className="sl-inner">

          {/* ===== SECTION 1: HERO ===== */}
          <section className="sl-hero">
            <h1 className="sl-hero-title">Shaw<br/>Light</h1>
            <p className="sl-hero-tagline">
              Festive poster art meets digital design. Bold type, hand-drawn energy, and bright pastels — thick outlines and star bursts on every surface.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 24 }}>
              <a className="sl-hero-cta" href="#colors">Explore the Menu</a>
              <span className="sl-spin-badge">399</span>
            </div>
          </section>

          <hr className="sl-dash-sep" />

          {/* ===== SECTION 2: COLOR PALETTE ===== */}
          <section className="sl-section" id="colors">
            <h2 className="sl-section-title">Color Palette</h2>
            <p className="sl-section-subtitle">
              A festive spread of pastels and primaries. Bold accents bring poster energy to every surface.
            </p>
            <div className="sl-color-grid">
              {colors.map((c) => (
                <div key={c.name} className="sl-color-card">
                  <div
                    className="sl-color-swatch"
                    style={{
                      background: c.hex,
                      ...(c.hex === '#FFFFFF' ? { borderBottom: '3px solid #1A1A2E' } : {}),
                    }}
                  />
                  <div className="sl-color-info">
                    <div className="sl-color-name">{c.name}</div>
                    <div className="sl-color-hex">{c.hex} &middot; {c.group}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <hr className="sl-dash-sep" />

          {/* ===== SECTION 3: TYPOGRAPHY ===== */}
          <section className="sl-section">
            <h2 className="sl-section-title">Typography Scale</h2>
            <p className="sl-section-subtitle">
              Serif display headlines for poster impact, clean sans-serif body for readability.
            </p>

            <div className="sl-type-sample">
              <div className="sl-type-label">H1 &mdash; Display / 72px / 900</div>
              <div className="sl-type-h1">Holiday Special</div>
            </div>
            <div className="sl-type-sample">
              <div className="sl-type-label">H2 &mdash; 48px / 800</div>
              <div className="sl-type-h2">Fresh From the Market</div>
            </div>
            <div className="sl-type-sample">
              <div className="sl-type-label">H3 &mdash; 36px / 800</div>
              <div className="sl-type-h3">Classic Recipes</div>
            </div>
            <div className="sl-type-sample">
              <div className="sl-type-label">H4 &mdash; 28px / 700</div>
              <div className="sl-type-h4">Today&apos;s Special Menu</div>
            </div>
            <div className="sl-type-sample">
              <div className="sl-type-label">H5 &mdash; 22px / 700</div>
              <div className="sl-type-h5">Ingredient Spotlight</div>
            </div>
            <div className="sl-type-sample">
              <div className="sl-type-label">H6 &mdash; 18px / 700</div>
              <div className="sl-type-h6">Preparation Notes</div>
            </div>

            <div style={{ marginTop: 40 }}>
              <div className="sl-type-sample">
                <div className="sl-type-label">Body Large &mdash; 18px</div>
                <div className="sl-type-body-lg">The perfect Olivier salad starts with carefully diced potatoes and crisp pickled cucumbers.</div>
              </div>
              <div className="sl-type-sample">
                <div className="sl-type-label">Body &mdash; 16px</div>
                <div className="sl-type-body">Every ingredient plays its part, from the creamy dressing to the vibrant green peas scattered on top.</div>
              </div>
              <div className="sl-type-sample">
                <div className="sl-type-label">Small &mdash; 14px</div>
                <div className="sl-type-body-sm">Serves 6-8 people. Prep time: 40 minutes. Best served chilled.</div>
              </div>
              <div className="sl-type-sample">
                <div className="sl-type-label">Caption &mdash; 13px</div>
                <div className="sl-type-caption">Photography by Studio Feast &middot; Recipe #0247</div>
              </div>
            </div>

            <p className="sl-type-paragraph">
              The poster tradition demands impact. Oversized serif headlines anchored by a no-nonsense sans-serif body give each section a distinct layer. Dashed borders and thick outlines reinforce the hand-drawn aesthetic without sacrificing digital clarity.
            </p>
          </section>

          <hr className="sl-dash-sep" />

          {/* ===== SECTION 4: BUTTONS ===== */}
          <section className="sl-section">
            <h2 className="sl-section-title">Buttons &amp; Interactive</h2>
            <p className="sl-section-subtitle">
              Thick outlines, hard shadows, poster-pop hover. Every button pops off the page like a price tag.
            </p>

            <div className="sl-btn-row" style={{ marginBottom: 32 }}>
              <button className="sl-btn sl-btn-primary">Order Now</button>
              <button className="sl-btn sl-btn-secondary">View Menu</button>
              <button className="sl-btn sl-btn-success">Confirmed</button>
              <button className="sl-btn sl-btn-disabled" disabled>Sold Out</button>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 24, flexWrap: 'wrap' }}>
              <a href="#" className="sl-link">View full recipe catalog</a>
              <span className="sl-spin-badge">NEW</span>
              <span className="sl-spin-badge" style={{ background: '#E63926', color: '#fff' }}>HOT</span>
            </div>
          </section>

          <hr className="sl-dash-sep" />

          {/* ===== SECTION 5: CARDS ===== */}
          <section className="sl-section">
            <h2 className="sl-section-title">Cards</h2>
            <p className="sl-section-subtitle">
              Thick-bordered poster panels with color header bands. Hover to see them pop up with shadow expansion.
            </p>

            <div className="sl-card-grid">
              {cards.map((card, i) => (
                <div key={i} className="sl-card">
                  <div className="sl-card-header" style={{ background: card.bg }}>
                    <span className="sl-card-icon">{card.icon}</span>
                  </div>
                  <div className="sl-card-body">
                    <h3 className="sl-card-title">{card.title}</h3>
                    <p className="sl-card-desc">{card.desc}</p>
                    <a href="#" className="sl-card-action">Learn more &rarr;</a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <hr className="sl-dash-sep" />

          {/* ===== SECTION 6: FORMS ===== */}
          <section className="sl-section">
            <h2 className="sl-section-title">Form Elements</h2>
            <p className="sl-section-subtitle">
              Thick-border inputs with poster styling. Focus brings a blue glow; errors flash red.
            </p>

            <div className="sl-form-grid">
              <div className="sl-form-group">
                <label className="sl-form-label">Full Name</label>
                <input className="sl-form-input" type="text" placeholder="Enter your name" readOnly />
              </div>
              <div className="sl-form-group">
                <label className="sl-form-label">Email Address</label>
                <input
                  className="sl-form-input sl-form-input-error"
                  type="email"
                  defaultValue="invalid-email"
                  readOnly
                />
                <span className="sl-form-error-msg">Please enter a valid email address</span>
              </div>
              <div className="sl-form-group">
                <label className="sl-form-label">Favorite Dish</label>
                <select className="sl-form-select" defaultValue="olivier">
                  <option value="olivier">Olivier Salad</option>
                  <option value="borscht">Borscht</option>
                  <option value="pelmeni">Pelmeni</option>
                </select>
              </div>
              <div className="sl-form-group" style={{ justifyContent: 'center' }}>
                <div className="sl-checkbox-row">
                  <div className="sl-checkbox sl-checkbox-checked">&#10003;</div>
                  <span style={{ fontWeight: 600, fontSize: 14 }}>Subscribe to weekly specials</span>
                </div>
              </div>
            </div>

            <div style={{ marginTop: 32 }}>
              <button className="sl-btn sl-btn-primary">Submit Order</button>
            </div>
          </section>

          <hr className="sl-dash-sep" />

          {/* ===== SECTION 7: FEEDBACK ===== */}
          <section className="sl-section">
            <h2 className="sl-section-title">Feedback &amp; Status</h2>
            <p className="sl-section-subtitle">
              Poster-weight alerts with thick left borders in semantic colors. Progress bar with chunky rounded track.
            </p>

            <div className="sl-alert-stack">
              <div className="sl-alert sl-alert-success">
                <span className="sl-alert-icon">&#9989;</span>
                <span>Order placed successfully! Your festive platter is being prepared.</span>
              </div>
              <div className="sl-alert sl-alert-error">
                <span className="sl-alert-icon">&#10060;</span>
                <span>Payment failed. Please check your card details and try again.</span>
              </div>
              <div className="sl-alert sl-alert-warning">
                <span className="sl-alert-icon">&#9888;&#65039;</span>
                <span>Stock is running low on Olivier Salad. Order soon to secure yours.</span>
              </div>
              <div className="sl-alert sl-alert-info">
                <span className="sl-alert-icon">&#8505;&#65039;</span>
                <span>New holiday menu items will be available starting next week.</span>
              </div>
            </div>

            <div style={{ marginTop: 40, maxWidth: 500 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                <span style={{ fontWeight: 700, fontSize: 14 }}>Order Progress</span>
                <span style={{ fontFamily: 'var(--sl-font-mono)', fontWeight: 700, fontSize: 14 }}>65%</span>
              </div>
              <div className="sl-progress-track">
                <div className="sl-progress-fill" style={{ width: '65%' }} />
              </div>
            </div>
          </section>

          <hr className="sl-dash-sep" />

          {/* ===== SECTION 8: CONTENT LAYOUT ===== */}
          <section className="sl-section">
            <h2 className="sl-section-title">Sample Content Layout</h2>
            <p className="sl-section-subtitle">
              A realistic menu list combining header, status badges, and action buttons. Dashed-separator motif ties it to the poster theme.
            </p>

            <div className="sl-content-card">
              <div className="sl-content-header">
                <span className="sl-content-header-title">Today&apos;s Menu</span>
                <span className="sl-spin-badge" style={{ width: 40, height: 40, fontSize: 12 }}>TOP</span>
              </div>
              {contentRows.map((row, i) => (
                <div key={i} className="sl-content-row">
                  <span className="sl-content-row-label">
                    <span>{row.icon}</span>
                    {row.label}
                  </span>
                  <div className="sl-content-row-right">
                    <span className={`sl-badge ${row.status === 'active' ? 'sl-badge-active' : 'sl-badge-inactive'}`}>
                      {row.status}
                    </span>
                    <button className="sl-mini-btn">Order</button>
                  </div>
                </div>
              ))}
            </div>
          </section>

        </div>
      </main>
    </>
  );
}
