import React from 'react';

const cssStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=DM+Sans:wght@400;500;600;700&display=swap');

  .af-showcase {
    --linen: #FDF6EC;
    --alabaster: #FAF0E6;
    --frost: #F5EDE4;
    --vellum: #EDE3D8;

    --deep-amethyst: #7B2D8E;
    --amethyst: #9B59B6;
    --orchid: #B07CC6;
    --blush: #D5A6C0;
    --apricot: #F0B27A;
    --honey-rim: #E59866;

    --plum-ink: #3D1F47;
    --fig: #6B4A5E;
    --mauve: #9E8490;
    --dusty-rose: #C4A5B0;

    --success: #6A9F7B;
    --warning: #D4A34E;
    --error: #C25D5D;
    --info: #7A9EB8;

    --shadow-soft: 0 16px 48px rgba(123, 45, 142, 0.12);
    --shadow-lifted: 0 24px 64px rgba(123, 45, 142, 0.18);
    --shadow-inner: inset 0 2px 8px rgba(123, 45, 142, 0.06);

    --radius-xl: 24px;
    --radius-lg: 18px;
    --radius-md: 12px;
    --radius-sm: 8px;

    font-family: 'DM Sans', 'Helvetica Neue', sans-serif;
    color: var(--plum-ink);
    background: var(--linen);
    min-height: 100vh;
    padding: 48px 24px 120px;
    -webkit-font-smoothing: antialiased;
  }

  .af-inner {
    max-width: 1120px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 96px;
  }

  /* ---- FLUTE OVERLAY (vertical ribbing motif) ---- */
  .af-fluted::before {
    content: '';
    position: absolute;
    inset: 0;
    background: repeating-linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.55) 0px,
      rgba(255, 255, 255, 0.55) 2px,
      transparent 2px,
      transparent 10px
    );
    opacity: 0.35;
    pointer-events: none;
    z-index: 1;
  }

  /* ---- HERO ---- */
  .af-hero {
    background: linear-gradient(135deg, rgba(123, 45, 142, 0.14), rgba(155, 89, 182, 0.1) 40%, rgba(240, 178, 122, 0.14) 80%, rgba(229, 152, 102, 0.1));
    border-radius: var(--radius-xl);
    padding: 64px 56px 72px;
    position: relative;
    overflow: hidden;
    border: 1px solid rgba(155, 89, 182, 0.18);
    box-shadow: var(--shadow-soft);
  }

  .af-hero::after {
    content: '';
    position: absolute;
    bottom: -60px;
    right: 60px;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(240, 178, 122, 0.25), transparent 70%);
    z-index: 0;
  }

  .af-hero-stem {
    position: absolute;
    left: 48px;
    top: 0;
    bottom: 0;
    width: 1px;
    background: linear-gradient(180deg, var(--amethyst), var(--apricot));
    opacity: 0.3;
    z-index: 0;
  }

  .af-eyebrow {
    font-family: 'DM Sans', sans-serif;
    text-transform: uppercase;
    letter-spacing: 0.18em;
    font-size: 11px;
    font-weight: 600;
    color: var(--mauve);
    margin-bottom: 12px;
    position: relative;
    z-index: 2;
  }

  .af-hero-title {
    font-family: 'Cormorant Garamond', 'Garamond', serif;
    font-size: 56px;
    font-weight: 600;
    line-height: 1.05;
    letter-spacing: -0.02em;
    margin: 0 0 20px;
    position: relative;
    z-index: 2;
    background: linear-gradient(135deg, var(--deep-amethyst), var(--amethyst) 50%, var(--honey-rim));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .af-hero-subtitle {
    font-size: 18px;
    line-height: 1.7;
    max-width: 560px;
    color: var(--fig);
    margin-bottom: 32px;
    position: relative;
    z-index: 2;
  }

  .af-hero-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    align-items: center;
    position: relative;
    z-index: 2;
  }

  /* ---- BUTTONS ---- */
  .af-btn {
    font-family: 'DM Sans', sans-serif;
    border: none;
    border-radius: var(--radius-md);
    padding: 14px 28px;
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: box-shadow 0.3s ease, transform 0.3s ease;
  }

  .af-btn-primary {
    background: linear-gradient(135deg, var(--amethyst), var(--orchid) 50%, var(--apricot));
    color: white;
    box-shadow: 0 12px 32px rgba(155, 89, 182, 0.25);
  }

  .af-btn-primary::after {
    content: '';
    position: absolute;
    top: -50%;
    left: -30%;
    width: 40%;
    height: 200%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.5), transparent);
    transform: skewX(-20deg) translateX(-150%);
    transition: transform 0.5s ease;
  }

  .af-btn-primary:hover::after {
    transform: skewX(-20deg) translateX(350%);
  }

  .af-btn-primary:hover {
    box-shadow: 0 16px 40px rgba(155, 89, 182, 0.32);
    transform: translateY(-2px);
  }

  .af-btn-secondary {
    background: transparent;
    color: var(--fig);
    border: 1px solid var(--vellum);
  }

  .af-btn-secondary:hover {
    border-color: var(--orchid);
    box-shadow: 0 0 0 3px rgba(176, 124, 198, 0.12);
  }

  .af-btn-success {
    background: var(--success);
    color: white;
  }

  .af-btn-disabled {
    background: var(--frost);
    color: var(--dusty-rose);
    cursor: not-allowed;
  }

  .af-link {
    color: var(--amethyst);
    font-weight: 600;
    text-decoration: none;
    position: relative;
    padding-bottom: 2px;
  }

  .af-link::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, var(--amethyst), var(--apricot));
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
  }

  .af-link:hover::after {
    transform: scaleX(1);
  }

  /* ---- SECTIONS ---- */
  .af-section {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  .af-section-title {
    font-family: 'Cormorant Garamond', 'Garamond', serif;
    font-size: 40px;
    font-weight: 600;
    letter-spacing: -0.01em;
    line-height: 1.1;
    margin: 0;
  }

  .af-section-subtitle {
    font-size: 16px;
    color: var(--fig);
    margin-top: 8px;
  }

  /* ---- COLOR PALETTE ---- */
  .af-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    gap: 16px;
  }

  .af-swatch {
    background: var(--alabaster);
    border-radius: var(--radius-lg);
    border: 1px solid var(--vellum);
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .af-swatch-color {
    height: 56px;
    border-radius: var(--radius-md);
    border: 1px solid rgba(0, 0, 0, 0.04);
  }

  .af-swatch-name {
    font-size: 13px;
    font-weight: 600;
    color: var(--plum-ink);
  }

  .af-swatch-hex {
    font-size: 12px;
    color: var(--mauve);
    font-family: 'DM Sans', monospace;
  }

  /* ---- TYPOGRAPHY ---- */
  .af-type-panel {
    background: var(--alabaster);
    border-radius: var(--radius-xl);
    padding: 36px;
    border: 1px solid var(--vellum);
    display: grid;
    gap: 20px;
  }

  .af-type-panel h1,
  .af-type-panel h2,
  .af-type-panel h3,
  .af-type-panel h4 {
    font-family: 'Cormorant Garamond', 'Garamond', serif;
    margin: 0;
    color: var(--plum-ink);
  }

  .af-type-panel p {
    margin: 0;
    color: var(--fig);
  }

  .af-type-label {
    font-size: 11px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.14em;
    color: var(--mauve);
    margin-bottom: -10px;
  }

  .af-type-divider {
    height: 1px;
    background: linear-gradient(90deg, var(--vellum), transparent);
  }

  /* ---- BUTTONS SHOWCASE ---- */
  .af-button-row {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    align-items: center;
  }

  /* ---- CARDS ---- */
  .af-cards-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 20px;
  }

  .af-card {
    background: var(--alabaster);
    border: 1px solid var(--vellum);
    border-radius: var(--radius-lg);
    overflow: hidden;
    position: relative;
    box-shadow: var(--shadow-soft);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .af-card::before {
    content: '';
    position: absolute;
    inset: 0;
    background: repeating-linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.6) 0px,
      rgba(255, 255, 255, 0.6) 2px,
      transparent 2px,
      transparent 10px
    );
    opacity: 0;
    pointer-events: none;
    z-index: 1;
    transition: opacity 0.3s ease;
  }

  .af-card:hover::before {
    opacity: 0.3;
  }

  .af-card::after {
    content: '';
    position: absolute;
    top: -40px;
    right: -40px;
    width: 160px;
    height: 160px;
    background: radial-gradient(circle, rgba(155, 89, 182, 0.2), transparent 70%);
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 0;
  }

  .af-card:hover::after {
    opacity: 1;
  }

  .af-card:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-lifted);
  }

  .af-card-header {
    padding: 14px 20px;
    background: linear-gradient(135deg, rgba(123, 45, 142, 0.1), rgba(240, 178, 122, 0.12));
    font-size: 11px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.14em;
    color: var(--mauve);
    border-bottom: 1px solid var(--vellum);
    position: relative;
    z-index: 2;
  }

  .af-card-body {
    padding: 22px;
    position: relative;
    z-index: 2;
  }

  .af-card-title {
    font-family: 'Cormorant Garamond', 'Garamond', serif;
    font-size: 22px;
    font-weight: 600;
    margin: 0 0 8px;
  }

  .af-card-text {
    font-size: 15px;
    color: var(--fig);
    line-height: 1.6;
    margin-bottom: 14px;
  }

  /* ---- FORMS ---- */
  .af-form-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 20px;
  }

  .af-field {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .af-label {
    font-size: 11px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.14em;
    color: var(--mauve);
  }

  .af-input,
  .af-select {
    padding: 12px 16px;
    border-radius: var(--radius-md);
    border: 1px solid var(--vellum);
    background: var(--frost);
    font-size: 15px;
    font-family: 'DM Sans', sans-serif;
    color: var(--plum-ink);
    transition: border-color 0.2s ease, box-shadow 0.2s ease;
    box-shadow: var(--shadow-inner);
  }

  .af-input::placeholder {
    color: var(--dusty-rose);
  }

  .af-input:focus,
  .af-select:focus {
    outline: none;
    border-color: var(--orchid);
    box-shadow: 0 0 0 3px rgba(155, 89, 182, 0.15);
  }

  .af-input-error {
    border-color: rgba(194, 93, 93, 0.6);
    background: rgba(194, 93, 93, 0.05);
  }

  .af-error-text {
    font-size: 12px;
    color: var(--error);
  }

  .af-checkbox-row {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 15px;
    color: var(--fig);
  }

  .af-checkbox-row input[type="checkbox"] {
    width: 18px;
    height: 18px;
    accent-color: var(--amethyst);
  }

  /* ---- ALERTS ---- */
  .af-alerts-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 16px;
  }

  .af-alert {
    padding: 16px 20px;
    border-radius: var(--radius-md);
    border: 1px solid;
    display: flex;
    flex-direction: column;
    gap: 4px;
    font-size: 14px;
    line-height: 1.5;
  }

  .af-alert strong {
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 0.12em;
  }

  .af-alert-success {
    background: rgba(106, 159, 123, 0.12);
    border-color: rgba(106, 159, 123, 0.35);
    color: #3D6B4E;
  }

  .af-alert-error {
    background: rgba(194, 93, 93, 0.1);
    border-color: rgba(194, 93, 93, 0.35);
    color: #8B3A3A;
  }

  .af-alert-warning {
    background: rgba(212, 163, 78, 0.12);
    border-color: rgba(212, 163, 78, 0.35);
    color: #7A5E24;
  }

  .af-alert-info {
    background: rgba(122, 158, 184, 0.12);
    border-color: rgba(122, 158, 184, 0.35);
    color: #3D5F75;
  }

  /* ---- PROGRESS ---- */
  .af-progress-wrap {
    margin-top: 8px;
  }

  .af-progress-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
  }

  .af-progress-label {
    font-size: 11px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.14em;
    color: var(--mauve);
  }

  .af-progress-value {
    font-size: 14px;
    font-weight: 600;
    color: var(--plum-ink);
  }

  .af-progress {
    height: 8px;
    background: var(--frost);
    border-radius: 999px;
    overflow: hidden;
  }

  .af-progress-fill {
    height: 100%;
    width: 65%;
    background: linear-gradient(90deg, var(--amethyst), var(--orchid), var(--apricot));
    border-radius: 999px;
  }

  /* ---- BADGES ---- */
  .af-badge {
    display: inline-flex;
    align-items: center;
    padding: 4px 12px;
    border-radius: var(--radius-sm);
    font-size: 12px;
    font-weight: 600;
  }

  .af-badge-active {
    background: rgba(106, 159, 123, 0.15);
    color: var(--success);
  }

  .af-badge-paused {
    background: rgba(212, 163, 78, 0.15);
    color: var(--warning);
  }

  .af-badge-archived {
    background: rgba(158, 132, 144, 0.15);
    color: var(--mauve);
  }

  /* ---- CONTENT LAYOUT ---- */
  .af-layout-panel {
    background: var(--alabaster);
    border-radius: var(--radius-xl);
    padding: 32px;
    border: 1px solid var(--vellum);
    position: relative;
    overflow: hidden;
  }

  .af-layout-header {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 24px;
    position: relative;
    z-index: 2;
  }

  .af-layout-icon {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: linear-gradient(135deg, rgba(155, 89, 182, 0.2), rgba(240, 178, 122, 0.2));
    border: 1px solid rgba(155, 89, 182, 0.2);
    flex-shrink: 0;
  }

  .af-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 0;
    border-bottom: 1px solid var(--vellum);
    position: relative;
    z-index: 2;
  }

  .af-row:last-child {
    border-bottom: none;
  }

  .af-row-stem {
    position: absolute;
    left: -16px;
    top: 50%;
    transform: translateY(-50%);
    width: 1px;
    height: 32px;
    background: linear-gradient(180deg, var(--amethyst), var(--apricot));
    opacity: 0.5;
  }

  .af-row-info {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .af-row-title {
    font-weight: 600;
    font-size: 15px;
  }

  .af-row-sub {
    font-size: 13px;
    color: var(--mauve);
  }

  .af-row-actions {
    display: flex;
    gap: 8px;
    align-items: center;
  }

  .af-pill {
    padding: 6px 14px;
    border-radius: 999px;
    font-size: 12px;
    font-weight: 600;
    border: 1px solid var(--vellum);
    background: var(--linen);
    color: var(--fig);
    cursor: pointer;
    transition: border-color 0.2s ease;
  }

  .af-pill:hover {
    border-color: var(--orchid);
  }

  @media (max-width: 768px) {
    .af-hero {
      padding: 40px 28px 48px;
    }
    .af-hero-title {
      font-size: 40px;
    }
    .af-section-title {
      font-size: 32px;
    }
    .af-inner {
      gap: 64px;
    }
  }
`;

export default function AmethystFluteShowcase() {
  return (
    <>
      <style>{cssStyles}</style>
      <main className="af-showcase">
        <div className="af-inner">

          {/* HERO */}
          <section className="af-hero af-fluted">
            <div className="af-hero-stem" aria-hidden="true" />
            <div className="af-eyebrow">Amethyst Flute Design System</div>
            <h1 className="af-hero-title">Light through colored glass, captured in every surface.</h1>
            <p className="af-hero-subtitle">
              A luminous design language drawn from fluted glassware in purple-to-peach ombre.
              Vertical ridges structure the rhythm while warm gradients carry the eye from amethyst depths to sunlit rims.
            </p>
            <div className="af-hero-actions">
              <button className="af-btn af-btn-primary">Explore Collection</button>
              <button className="af-btn af-btn-secondary">View Motifs</button>
            </div>
          </section>

          {/* COLOR PALETTE */}
          <section className="af-section">
            <div>
              <h2 className="af-section-title">Color Palette</h2>
              <p className="af-section-subtitle">Amethyst anchors, peach highlights, and warm linen grounds.</p>
            </div>

            <div style={{ marginBottom: '12px' }}>
              <div className="af-label" style={{ marginBottom: '12px' }}>Backgrounds</div>
              <div className="af-grid">
                {[
                  { name: 'Linen', hex: '#FDF6EC' },
                  { name: 'Alabaster', hex: '#FAF0E6' },
                  { name: 'Frost', hex: '#F5EDE4' },
                  { name: 'Vellum', hex: '#EDE3D8' },
                ].map(s => (
                  <div key={s.name} className="af-swatch">
                    <div className="af-swatch-color" style={{ background: s.hex }} />
                    <div className="af-swatch-name">{s.name}</div>
                    <div className="af-swatch-hex">{s.hex}</div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ marginBottom: '12px' }}>
              <div className="af-label" style={{ marginBottom: '12px' }}>Ombre Gradient</div>
              <div className="af-grid">
                {[
                  { name: 'Deep Amethyst', hex: '#7B2D8E' },
                  { name: 'Amethyst', hex: '#9B59B6' },
                  { name: 'Orchid', hex: '#B07CC6' },
                  { name: 'Blush', hex: '#D5A6C0' },
                  { name: 'Apricot', hex: '#F0B27A' },
                  { name: 'Honey Rim', hex: '#E59866' },
                ].map(s => (
                  <div key={s.name} className="af-swatch">
                    <div className="af-swatch-color" style={{ background: s.hex }} />
                    <div className="af-swatch-name">{s.name}</div>
                    <div className="af-swatch-hex">{s.hex}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="af-label" style={{ marginBottom: '12px' }}>Semantic</div>
              <div className="af-grid">
                {[
                  { name: 'Success', hex: '#6A9F7B' },
                  { name: 'Warning', hex: '#D4A34E' },
                  { name: 'Error', hex: '#C25D5D' },
                  { name: 'Info', hex: '#7A9EB8' },
                ].map(s => (
                  <div key={s.name} className="af-swatch">
                    <div className="af-swatch-color" style={{ background: s.hex }} />
                    <div className="af-swatch-name">{s.name}</div>
                    <div className="af-swatch-hex">{s.hex}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* TYPOGRAPHY */}
          <section className="af-section">
            <div>
              <h2 className="af-section-title">Typography Scale</h2>
              <p className="af-section-subtitle">Cormorant Garamond display with DM Sans body text.</p>
            </div>
            <div className="af-type-panel">
              <div className="af-type-label">H1 — Display</div>
              <h1 style={{ fontSize: '56px', fontWeight: 600, letterSpacing: '-0.02em', lineHeight: 1.05 }}>
                Ridged Light
              </h1>
              <div className="af-type-divider" />
              <div className="af-type-label">H2 — Section</div>
              <h2 style={{ fontSize: '40px', fontWeight: 600, letterSpacing: '-0.01em' }}>
                Fluted Surfaces
              </h2>
              <div className="af-type-divider" />
              <div className="af-type-label">H3 — Card</div>
              <h3 style={{ fontSize: '28px', fontWeight: 500 }}>
                Ombre Transitions
              </h3>
              <div className="af-type-divider" />
              <div className="af-type-label">H4 — Supporting</div>
              <h4 style={{ fontSize: '20px', fontWeight: 500 }}>
                Warm Refractions
              </h4>
              <div className="af-type-divider" />
              <div className="af-type-label">Body Large</div>
              <p style={{ fontSize: '18px', lineHeight: 1.7 }}>
                The design captures afternoon light filtering through ribbed crystal —
                each vertical groove bending color from deep violet to soft apricot,
                creating a sense of warmth and quiet luxury.
              </p>
              <div className="af-type-divider" />
              <div className="af-type-label">Body</div>
              <p style={{ fontSize: '15px', lineHeight: 1.65 }}>
                Surfaces feel tactile yet translucent. Typography moves between high-contrast serif headlines
                and a clean geometric sans body, echoing the contrast between the glass's sculptural form
                and its transparent nature.
              </p>
              <div className="af-type-divider" />
              <div className="af-type-label">Caption</div>
              <p style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.14em', fontWeight: 600, color: 'var(--mauve)' }}>
                Stem detail — fluted crystal
              </p>
            </div>
          </section>

          {/* BUTTONS */}
          <section className="af-section">
            <div>
              <h2 className="af-section-title">Buttons & Interactive Elements</h2>
              <p className="af-section-subtitle">Light-refraction sweeps and gradient fills define interaction.</p>
            </div>
            <div className="af-button-row">
              <button className="af-btn af-btn-primary">Primary Action</button>
              <button className="af-btn af-btn-secondary">Secondary</button>
              <button className="af-btn af-btn-success">Confirm</button>
              <button className="af-btn af-btn-disabled" disabled>Disabled</button>
              <a className="af-link" href="#">Gradient Underline Link</a>
            </div>
          </section>

          {/* CARDS */}
          <section className="af-section">
            <div>
              <h2 className="af-section-title">Cards</h2>
              <p className="af-section-subtitle">Fluted ribbing fades in on hover with a refraction glow bloom.</p>
            </div>
            <div className="af-cards-grid">
              {[
                {
                  label: 'Vessel',
                  title: 'Ribbed Stemware',
                  text: 'Vertical grooves catch and bend light across translucent surfaces, creating prismatic depth.',
                },
                {
                  label: 'Palette',
                  title: 'Ombre Gradient',
                  text: 'Deep amethyst at the base blooming to warm apricot at the rim — a signature color journey.',
                },
                {
                  label: 'Texture',
                  title: 'Frosted Luminance',
                  text: 'Soft matte finishes meet polished ridges, balancing tactile warmth with visual clarity.',
                },
              ].map(card => (
                <div key={card.title} className="af-card">
                  <div className="af-card-header">{card.label}</div>
                  <div className="af-card-body">
                    <h3 className="af-card-title">{card.title}</h3>
                    <p className="af-card-text">{card.text}</p>
                    <a className="af-link" href="#">View details</a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* FORM ELEMENTS */}
          <section className="af-section">
            <div>
              <h2 className="af-section-title">Form Elements</h2>
              <p className="af-section-subtitle">Frost-backed fields with amethyst focus rings.</p>
            </div>
            <div className="af-form-grid">
              <div className="af-field">
                <label className="af-label">Collection Name</label>
                <input className="af-input" placeholder="Fluted Crystal Series" />
              </div>
              <div className="af-field">
                <label className="af-label">Email Address</label>
                <input className="af-input af-input-error" placeholder="studio@amethyst.co" />
                <span className="af-error-text">A valid email is required</span>
              </div>
              <div className="af-field">
                <label className="af-label">Glass Finish</label>
                <select className="af-select">
                  <option>Ribbed Crystal</option>
                  <option>Frosted Matte</option>
                  <option>Polished Clear</option>
                </select>
              </div>
              <div className="af-field">
                <label className="af-label">Preferences</label>
                <div className="af-checkbox-row">
                  <input type="checkbox" defaultChecked />
                  <span>Include ombre gradient finish</span>
                </div>
              </div>
              <div className="af-field">
                <button className="af-btn af-btn-primary" style={{ alignSelf: 'flex-start' }}>
                  Submit Order
                </button>
              </div>
            </div>
          </section>

          {/* FEEDBACK & STATUS */}
          <section className="af-section">
            <div>
              <h2 className="af-section-title">Feedback & Status</h2>
              <p className="af-section-subtitle">Semantic tones tuned to the warm palette.</p>
            </div>
            <div className="af-alerts-grid">
              <div className="af-alert af-alert-success">
                <strong>Success</strong>
                Collection published to the evening catalog.
              </div>
              <div className="af-alert af-alert-error">
                <strong>Error</strong>
                Glass finish specification is missing.
              </div>
              <div className="af-alert af-alert-warning">
                <strong>Warning</strong>
                Limited amethyst stock for this batch.
              </div>
              <div className="af-alert af-alert-info">
                <strong>Info</strong>
                Next kiln firing scheduled in 48 hours.
              </div>
            </div>
            <div className="af-progress-wrap">
              <div className="af-progress-header">
                <span className="af-progress-label">Production</span>
                <span className="af-progress-value">65%</span>
              </div>
              <div className="af-progress">
                <div className="af-progress-fill" />
              </div>
            </div>
          </section>

          {/* SAMPLE CONTENT LAYOUT */}
          <section className="af-section">
            <div>
              <h2 className="af-section-title">Sample Content Layout</h2>
              <p className="af-section-subtitle">Stem-line accents and ombre badges guide the list rhythm.</p>
            </div>
            <div className="af-layout-panel af-fluted">
              <div className="af-layout-header">
                <div className="af-layout-icon" aria-hidden="true" />
                <div>
                  <div className="af-label">Current Release</div>
                  <div style={{ fontSize: '22px', fontWeight: 600, fontFamily: "'Cormorant Garamond', serif" }}>
                    Fluted Crystal Collection
                  </div>
                </div>
              </div>

              {[
                { name: 'Amethyst Goblet Set', status: 'Active', badge: 'active' },
                { name: 'Peach Coupe Pair', status: 'In Review', badge: 'paused' },
                { name: 'Ombre Carafe', status: 'Archived', badge: 'archived' },
              ].map(item => (
                <div key={item.name} className="af-row">
                  <div className="af-row-stem" aria-hidden="true" />
                  <div className="af-row-info">
                    <div className="af-row-title">{item.name}</div>
                    <div className="af-row-sub">Status: {item.status}</div>
                  </div>
                  <div className="af-row-actions">
                    <span className={`af-badge af-badge-${item.badge}`}>{item.status}</span>
                    <button className="af-pill">Review</button>
                    <button className="af-pill">Edit</button>
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
