import React from 'react';

const cssStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap');

  .la-showcase {
    /* Color Tokens — Liquid Amber */
    --linen: #F9F7F2;
    --espresso: #4A3B32;
    --espresso-secondary: rgba(74, 59, 50, 0.65);
    --espresso-tertiary: rgba(74, 59, 50, 0.4);

    --nectar-amber: #E68A5C;
    --sunset-peach: #FFC699;
    --berry-rose: #E89BB6;

    --glass-bg: rgba(255, 255, 255, 0.22);
    --glass-border: rgba(255, 255, 255, 0.5);
    --glass-highlight: rgba(255, 255, 255, 0.35);
    --glass-rib: rgba(255, 255, 255, 0.15);

    --shadow-warm: rgba(230, 138, 92, 0.18);
    --shadow-warm-deep: rgba(230, 138, 92, 0.3);

    --success: #7CB886;
    --success-bg: rgba(124, 184, 134, 0.15);
    --error: #D4726A;
    --error-bg: rgba(212, 114, 106, 0.15);
    --warning: #E6A84D;
    --warning-bg: rgba(230, 168, 77, 0.15);
    --info: #7BA5C9;
    --info-bg: rgba(123, 165, 201, 0.15);

    /* Typography */
    --font-display: 'Playfair Display', Georgia, serif;
    --font-body: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Segoe UI', sans-serif;

    font-family: var(--font-body);
    background: var(--linen);
    color: var(--espresso);
    min-height: 100vh;
    -webkit-font-smoothing: antialiased;
    position: relative;
  }

  /* ── Animated Mesh Background ── */
  .la-mesh-bg {
    position: fixed;
    inset: 0;
    z-index: 0;
    pointer-events: none;
    background-image:
      radial-gradient(ellipse 80% 60% at 15% 10%, var(--nectar-amber) 0%, transparent 55%),
      radial-gradient(ellipse 70% 50% at 85% 85%, var(--berry-rose) 0%, transparent 50%),
      radial-gradient(ellipse 60% 40% at 50% 40%, var(--sunset-peach) 0%, transparent 55%);
    filter: blur(70px);
    opacity: 0.55;
    animation: la-mesh-drift 20s ease-in-out infinite alternate;
  }

  @keyframes la-mesh-drift {
    0% { transform: translate(0, 0) scale(1); }
    50% { transform: translate(-20px, 15px) scale(1.03); }
    100% { transform: translate(10px, -10px) scale(0.98); }
  }

  .la-content {
    position: relative;
    z-index: 1;
    max-width: 1200px;
    margin: 0 auto;
    padding: 48px 24px;
  }

  /* ── Glass Section ── */
  .la-section {
    background: var(--glass-bg);
    backdrop-filter: blur(40px) saturate(180%);
    -webkit-backdrop-filter: blur(40px) saturate(180%);
    border-radius: 28px;
    padding: 40px;
    margin-bottom: 32px;
    border: 1px solid var(--glass-border);
    box-shadow:
      0 20px 50px var(--shadow-warm),
      inset 0 2px 15px var(--glass-highlight);
    /* Ribbed texture */
    background-image: repeating-linear-gradient(
      90deg,
      transparent 0px,
      transparent 22px,
      var(--glass-rib) 23px,
      transparent 24px
    );
    position: relative;
    overflow: hidden;
  }

  /* Specular highlight — studio light at top */
  .la-section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 60px;
    background: linear-gradient(180deg, rgba(255,255,255,0.25) 0%, transparent 100%);
    border-radius: 28px 28px 0 0;
    pointer-events: none;
  }

  .la-section-title {
    font-family: var(--font-display);
    font-size: 14px;
    font-weight: 700;
    color: var(--espresso-tertiary);
    margin-bottom: 28px;
    padding-bottom: 16px;
    border-bottom: 1px solid rgba(74, 59, 50, 0.1);
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }

  /* ── Hero ── */
  .la-hero {
    text-align: center;
    padding: 80px 40px;
    background: linear-gradient(180deg, rgba(255,255,255,0.3) 0%, var(--glass-bg) 100%);
  }

  .la-hero::before {
    height: 100px;
    background: linear-gradient(180deg, rgba(255,255,255,0.35) 0%, transparent 100%);
  }

  .la-hero-title {
    font-family: var(--font-display);
    font-size: 56px;
    font-weight: 700;
    color: var(--espresso);
    letter-spacing: -0.03em;
    line-height: 1.1;
    margin-bottom: 20px;
  }

  .la-hero-subtitle {
    font-size: 18px;
    color: var(--espresso-secondary);
    line-height: 1.7;
    margin-bottom: 40px;
    max-width: 560px;
    margin-left: auto;
    margin-right: auto;
  }

  .la-hero-actions {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
  }

  /* ── Buttons ── */
  .la-btn {
    font-family: var(--font-body);
    font-size: 15px;
    font-weight: 600;
    padding: 14px 28px;
    border-radius: 16px;
    border: none;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    display: inline-flex;
    align-items: center;
    gap: 8px;
    position: relative;
    overflow: hidden;
  }

  .la-btn-primary {
    background: linear-gradient(135deg, var(--nectar-amber), var(--berry-rose));
    color: #fff;
    box-shadow: 0 12px 30px rgba(230, 138, 92, 0.35);
  }

  .la-btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 18px 40px rgba(230, 138, 92, 0.45);
  }

  .la-btn-secondary {
    background: rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(20px) saturate(150%);
    -webkit-backdrop-filter: blur(20px) saturate(150%);
    color: var(--espresso);
    border: 1px solid rgba(74, 59, 50, 0.15);
    box-shadow: inset 0 1px 6px rgba(255, 255, 255, 0.3);
  }

  .la-btn-secondary:hover {
    background: rgba(255, 255, 255, 0.45);
    transform: translateY(-2px);
    border-color: rgba(74, 59, 50, 0.25);
  }

  .la-btn-ghost {
    background: transparent;
    color: var(--espresso-secondary);
    padding: 14px 20px;
  }

  .la-btn-ghost:hover {
    color: var(--espresso);
    background: rgba(255, 255, 255, 0.2);
  }

  .la-btn-disabled {
    background: rgba(74, 59, 50, 0.08);
    color: var(--espresso-tertiary);
    cursor: not-allowed;
    box-shadow: none;
  }

  .la-link-btn {
    background: none;
    border: none;
    color: var(--nectar-amber);
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    transition: color 0.2s ease;
  }

  .la-link-btn:hover {
    color: var(--espresso);
  }

  /* ── Color Palette ── */
  .la-color-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    gap: 16px;
  }

  .la-color-swatch {
    text-align: center;
  }

  .la-color-box {
    width: 100%;
    height: 80px;
    border-radius: 16px;
    margin-bottom: 10px;
    border: 1px solid rgba(74, 59, 50, 0.08);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.06);
  }

  .la-color-name {
    font-size: 13px;
    font-weight: 600;
    color: var(--espresso);
    margin-bottom: 3px;
  }

  .la-color-hex {
    font-size: 12px;
    color: var(--espresso-tertiary);
    font-family: 'SF Mono', 'Monaco', 'Menlo', monospace;
  }

  /* ── Typography ── */
  .la-type-sample {
    margin-bottom: 28px;
    padding-bottom: 24px;
    border-bottom: 1px solid rgba(74, 59, 50, 0.08);
  }

  .la-type-sample:last-child {
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 0;
  }

  .la-type-label {
    font-size: 11px;
    color: var(--espresso-tertiary);
    margin-bottom: 10px;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    font-weight: 500;
  }

  .la-h1 { font-family: var(--font-display); font-size: 56px; font-weight: 700; letter-spacing: -0.03em; color: var(--espresso); line-height: 1.1; }
  .la-h2 { font-family: var(--font-display); font-size: 36px; font-weight: 700; letter-spacing: -0.02em; color: var(--espresso); line-height: 1.15; }
  .la-h3 { font-family: var(--font-display); font-size: 24px; font-weight: 700; letter-spacing: -0.01em; color: var(--espresso); }
  .la-h4 { font-family: var(--font-display); font-size: 18px; font-weight: 700; color: var(--espresso); }
  .la-body-large { font-size: 17px; line-height: 1.7; color: var(--espresso-secondary); }
  .la-body-regular { font-size: 15px; line-height: 1.6; color: var(--espresso-secondary); }
  .la-body-small { font-size: 13px; line-height: 1.5; color: var(--espresso-tertiary); }
  .la-caption { font-size: 12px; line-height: 1.4; color: var(--espresso-tertiary); text-transform: uppercase; letter-spacing: 0.06em; font-weight: 500; }

  /* ── Buttons Grid ── */
  .la-buttons-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 14px;
    align-items: center;
  }

  /* ── Cards ── */
  .la-cards-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
  }

  .la-card {
    background: rgba(255, 255, 255, 0.25);
    backdrop-filter: blur(30px) saturate(160%);
    -webkit-backdrop-filter: blur(30px) saturate(160%);
    border: 1px solid var(--glass-border);
    border-radius: 24px;
    overflow: hidden;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    background-image: repeating-linear-gradient(
      90deg,
      transparent 0px,
      transparent 20px,
      rgba(255, 255, 255, 0.1) 21px,
      transparent 22px
    );
    box-shadow:
      0 16px 40px var(--shadow-warm),
      inset 0 1px 10px var(--glass-highlight);
  }

  .la-card:hover {
    transform: translateY(-4px);
    box-shadow:
      0 24px 50px var(--shadow-warm-deep),
      inset 0 1px 10px var(--glass-highlight);
  }

  .la-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 40px;
    background: linear-gradient(180deg, rgba(255,255,255,0.2) 0%, transparent 100%);
    pointer-events: none;
  }

  .la-card-accent {
    height: 6px;
    border-radius: 3px 3px 0 0;
  }

  .la-card-body {
    padding: 24px;
    position: relative;
  }

  .la-card-title {
    font-family: var(--font-display);
    font-size: 18px;
    font-weight: 700;
    color: var(--espresso);
    margin-bottom: 8px;
    letter-spacing: -0.01em;
  }

  .la-card-text {
    font-size: 14px;
    color: var(--espresso-secondary);
    margin-bottom: 16px;
    line-height: 1.5;
  }

  /* ── Badges ── */
  .la-badge {
    display: inline-flex;
    align-items: center;
    padding: 5px 12px;
    border-radius: 10px;
    font-size: 12px;
    font-weight: 600;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
  }

  .la-badge-amber {
    background: rgba(230, 138, 92, 0.18);
    color: #C06A3A;
  }

  .la-badge-rose {
    background: rgba(232, 155, 182, 0.2);
    color: #B86D8A;
  }

  .la-badge-peach {
    background: rgba(255, 198, 153, 0.3);
    color: #A07040;
  }

  .la-badge-success {
    background: var(--success-bg);
    color: var(--success);
  }

  .la-badge-error {
    background: var(--error-bg);
    color: var(--error);
  }

  /* ── Forms ── */
  .la-form-group {
    margin-bottom: 22px;
  }

  .la-form-label {
    display: block;
    font-size: 12px;
    font-weight: 600;
    color: var(--espresso-secondary);
    margin-bottom: 8px;
    text-transform: uppercase;
    letter-spacing: 0.04em;
  }

  .la-form-input {
    width: 100%;
    padding: 14px 16px;
    font-size: 15px;
    font-family: var(--font-body);
    border: 1px solid rgba(74, 59, 50, 0.12);
    border-radius: 14px;
    background: rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(20px) saturate(140%);
    -webkit-backdrop-filter: blur(20px) saturate(140%);
    color: var(--espresso);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: inset 0 1px 4px rgba(255, 255, 255, 0.2);
    box-sizing: border-box;
  }

  .la-form-input::placeholder {
    color: var(--espresso-tertiary);
  }

  .la-form-input:focus {
    outline: none;
    border-color: var(--nectar-amber);
    box-shadow:
      0 0 0 4px rgba(230, 138, 92, 0.15),
      inset 0 1px 4px rgba(255, 255, 255, 0.2);
  }

  .la-form-input.la-error {
    border-color: var(--error);
  }

  .la-error-message {
    font-size: 12px;
    color: var(--error);
    margin-top: 6px;
  }

  .la-checkbox-group {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .la-checkbox {
    width: 20px;
    height: 20px;
    border: 1.5px solid rgba(74, 59, 50, 0.2);
    border-radius: 6px;
    background: rgba(255, 255, 255, 0.4);
    cursor: pointer;
    accent-color: var(--nectar-amber);
  }

  /* ── Alerts ── */
  .la-alert {
    padding: 16px 20px;
    border-radius: 16px;
    margin-bottom: 14px;
    font-size: 14px;
    display: flex;
    align-items: center;
    gap: 12px;
    border: 1px solid;
    backdrop-filter: blur(15px) saturate(140%);
    -webkit-backdrop-filter: blur(15px) saturate(140%);
  }

  .la-alert-success {
    background: var(--success-bg);
    color: #4A7A52;
    border-color: rgba(124, 184, 134, 0.3);
  }

  .la-alert-error {
    background: var(--error-bg);
    color: #A84840;
    border-color: rgba(212, 114, 106, 0.3);
  }

  .la-alert-warning {
    background: var(--warning-bg);
    color: #8A6A2E;
    border-color: rgba(230, 168, 77, 0.3);
  }

  .la-alert-info {
    background: var(--info-bg);
    color: #4A7A9A;
    border-color: rgba(123, 165, 201, 0.3);
  }

  /* ── Progress ── */
  .la-progress-container {
    margin-top: 28px;
  }

  .la-progress-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }

  .la-progress-label {
    font-size: 13px;
    color: var(--espresso-tertiary);
  }

  .la-progress-value {
    font-size: 14px;
    font-weight: 600;
    color: var(--espresso);
  }

  .la-progress {
    width: 100%;
    height: 8px;
    background: rgba(74, 59, 50, 0.08);
    border-radius: 4px;
    overflow: hidden;
  }

  .la-progress-fill {
    height: 100%;
    background: linear-gradient(90deg, var(--nectar-amber), var(--berry-rose));
    border-radius: 4px;
    transition: width 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  }

  /* ── Sample Content ── */
  .la-content-list {
    display: flex;
    flex-direction: column;
    gap: 14px;
  }

  .la-content-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 18px 22px;
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(20px) saturate(150%);
    -webkit-backdrop-filter: blur(20px) saturate(150%);
    border-radius: 16px;
    border: 1px solid rgba(255, 255, 255, 0.4);
    transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: inset 0 1px 6px rgba(255, 255, 255, 0.2);
  }

  .la-content-item:hover {
    background: rgba(255, 255, 255, 0.35);
    transform: translateY(-2px);
    box-shadow:
      0 8px 24px var(--shadow-warm),
      inset 0 1px 6px rgba(255, 255, 255, 0.2);
  }

  .la-content-info {
    display: flex;
    align-items: center;
    gap: 14px;
    flex: 1;
  }

  .la-content-avatar {
    width: 40px;
    height: 40px;
    border-radius: 14px;
    flex-shrink: 0;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  .la-content-details {
    flex: 1;
  }

  .la-content-title {
    font-size: 15px;
    font-weight: 600;
    color: var(--espresso);
    margin-bottom: 2px;
  }

  .la-content-subtitle {
    font-size: 13px;
    color: var(--espresso-tertiary);
  }

  .la-content-actions {
    display: flex;
    gap: 12px;
    align-items: center;
  }

  .la-content-time {
    font-size: 12px;
    color: var(--espresso-tertiary);
  }

  .la-stats-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
    margin-top: 28px;
  }

  .la-stat-card {
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(20px) saturate(150%);
    -webkit-backdrop-filter: blur(20px) saturate(150%);
    border: 1px solid rgba(255, 255, 255, 0.4);
    border-radius: 18px;
    padding: 22px;
    box-shadow: inset 0 1px 8px rgba(255, 255, 255, 0.25);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .la-stat-card:hover {
    transform: translateY(-2px);
    box-shadow:
      0 12px 30px var(--shadow-warm),
      inset 0 1px 8px rgba(255, 255, 255, 0.25);
  }

  .la-stat-label {
    font-size: 12px;
    color: var(--espresso-tertiary);
    margin-bottom: 6px;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    font-weight: 500;
  }

  .la-stat-value {
    font-family: var(--font-display);
    font-size: 30px;
    font-weight: 700;
    letter-spacing: -0.02em;
    color: var(--espresso);
  }

  .la-color-group-title {
    font-size: 13px;
    font-weight: 600;
    margin-bottom: 16px;
    color: var(--espresso-secondary);
  }

  @media (max-width: 768px) {
    .la-hero-title { font-size: 36px; }
    .la-hero { padding: 48px 24px; }
    .la-section { padding: 24px; border-radius: 20px; }
    .la-stats-grid { grid-template-columns: repeat(2, 1fr); }
    .la-cards-grid { grid-template-columns: 1fr; }
  }
`;

export default function LiquidAmberShowcase() {
  return (
    <>
      <style>{cssStyles}</style>
      <main className="la-showcase">
        <div className="la-mesh-bg"></div>
        <div className="la-content">

          {/* Hero Section */}
          <section className="la-section la-hero">
            <h1 className="la-hero-title">Liquid Amber</h1>
            <p className="la-hero-subtitle">
              A digital translation of refractive light through colored glass.
              Warmth of sunset meets Apple&apos;s glassmorphic clarity.
            </p>
            <div className="la-hero-actions">
              <button className="la-btn la-btn-primary">Explore the Light</button>
              <button className="la-link-btn">View the Collection →</button>
            </div>
          </section>

          {/* Color Palette */}
          <section className="la-section">
            <h2 className="la-section-title">Color Palette</h2>

            <div style={{ marginBottom: '36px' }}>
              <h3 className="la-color-group-title">Light Source (Gradients)</h3>
              <div className="la-color-grid">
                <div className="la-color-swatch">
                  <div className="la-color-box" style={{ background: 'linear-gradient(135deg, #E68A5C, #FFC699)' }}></div>
                  <div className="la-color-name">Nectar Amber</div>
                  <div className="la-color-hex">#E68A5C</div>
                </div>
                <div className="la-color-swatch">
                  <div className="la-color-box" style={{ background: 'linear-gradient(135deg, #FFC699, #FFDDC1)' }}></div>
                  <div className="la-color-name">Sunset Peach</div>
                  <div className="la-color-hex">#FFC699</div>
                </div>
                <div className="la-color-swatch">
                  <div className="la-color-box" style={{ background: 'linear-gradient(135deg, #E89BB6, #F5C6D8)' }}></div>
                  <div className="la-color-name">Berry Rose</div>
                  <div className="la-color-hex">#E89BB6</div>
                </div>
              </div>
            </div>

            <div style={{ marginBottom: '36px' }}>
              <h3 className="la-color-group-title">Environment</h3>
              <div className="la-color-grid">
                <div className="la-color-swatch">
                  <div className="la-color-box" style={{ background: '#F9F7F2', border: '1px solid rgba(74,59,50,0.1)' }}></div>
                  <div className="la-color-name">Linen White</div>
                  <div className="la-color-hex">#F9F7F2</div>
                </div>
                <div className="la-color-swatch">
                  <div className="la-color-box" style={{ background: '#4A3B32' }}></div>
                  <div className="la-color-name">Espresso Brown</div>
                  <div className="la-color-hex">#4A3B32</div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="la-color-group-title">Functional Colors</h3>
              <div className="la-color-grid">
                <div className="la-color-swatch">
                  <div className="la-color-box" style={{ background: '#7CB886' }}></div>
                  <div className="la-color-name">Success</div>
                  <div className="la-color-hex">#7CB886</div>
                </div>
                <div className="la-color-swatch">
                  <div className="la-color-box" style={{ background: '#D4726A' }}></div>
                  <div className="la-color-name">Error</div>
                  <div className="la-color-hex">#D4726A</div>
                </div>
                <div className="la-color-swatch">
                  <div className="la-color-box" style={{ background: '#E6A84D' }}></div>
                  <div className="la-color-name">Warning</div>
                  <div className="la-color-hex">#E6A84D</div>
                </div>
                <div className="la-color-swatch">
                  <div className="la-color-box" style={{ background: '#7BA5C9' }}></div>
                  <div className="la-color-name">Info</div>
                  <div className="la-color-hex">#7BA5C9</div>
                </div>
              </div>
            </div>
          </section>

          {/* Typography Scale */}
          <section className="la-section">
            <h2 className="la-section-title">Typography Scale</h2>
            <div className="la-type-sample">
              <div className="la-type-label">H1 — Hero Title (Playfair Display)</div>
              <h1 className="la-h1">Refractive Beauty</h1>
            </div>
            <div className="la-type-sample">
              <div className="la-type-label">H2 — Section Title</div>
              <h2 className="la-h2">Warmth Through Glass</h2>
            </div>
            <div className="la-type-sample">
              <div className="la-type-label">H3 — Card Title</div>
              <h3 className="la-h3">The Liquid Material</h3>
            </div>
            <div className="la-type-sample">
              <div className="la-type-label">H4 — Subtitle</div>
              <h4 className="la-h4">Translucency Over Opacity</h4>
            </div>
            <div className="la-type-sample">
              <div className="la-type-label">Body Large (System Sans)</div>
              <p className="la-body-large">
                The aesthetic combines the warmth of a sunset dinner with the high-fidelity physics
                of Apple&apos;s VisionOS. Nothing is solid — UI elements are windows that distort and
                color the background beneath them.
              </p>
            </div>
            <div className="la-type-sample">
              <div className="la-type-label">Body Regular</div>
              <p className="la-body-regular">
                Interactive elements are rich, saturated, and warm. We simulate physical touch
                through ribbed patterns and wet reflections.
              </p>
            </div>
            <div className="la-type-sample">
              <div className="la-type-label">Caption</div>
              <p className="la-caption">Last updated 3 hours ago</p>
            </div>
          </section>

          {/* Buttons & Interactive Elements */}
          <section className="la-section">
            <h2 className="la-section-title">Buttons & Interactive Elements</h2>
            <div className="la-buttons-grid">
              <button className="la-btn la-btn-primary">Primary</button>
              <button className="la-btn la-btn-secondary">Secondary</button>
              <button className="la-btn la-btn-ghost">Ghost</button>
              <button className="la-btn la-btn-disabled" disabled>Disabled</button>
              <button className="la-link-btn">Link Button →</button>
            </div>
          </section>

          {/* Cards */}
          <section className="la-section">
            <h2 className="la-section-title">Cards</h2>
            <div className="la-cards-grid">
              <div className="la-card">
                <div className="la-card-accent" style={{ background: 'linear-gradient(90deg, #E68A5C, #FFC699)' }}></div>
                <div className="la-card-body">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                    <span className="la-badge la-badge-amber">Collection</span>
                  </div>
                  <div className="la-card-title">Sunset Vessels</div>
                  <div className="la-card-text">Hand-blown glass catching the last golden rays of daylight</div>
                  <button className="la-link-btn">View Details →</button>
                </div>
              </div>

              <div className="la-card">
                <div className="la-card-accent" style={{ background: 'linear-gradient(90deg, #E89BB6, #F5C6D8)' }}></div>
                <div className="la-card-body">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                    <span className="la-badge la-badge-rose">Featured</span>
                  </div>
                  <div className="la-card-title">Rose Decanters</div>
                  <div className="la-card-text">Ribbed crystal forms with berry-tinted translucency</div>
                  <button className="la-link-btn">View Details →</button>
                </div>
              </div>

              <div className="la-card">
                <div className="la-card-accent" style={{ background: 'linear-gradient(90deg, #FFC699, #E68A5C)' }}></div>
                <div className="la-card-body">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                    <span className="la-badge la-badge-peach">Limited</span>
                  </div>
                  <div className="la-card-title">Amber Flutes</div>
                  <div className="la-card-text">Tall silhouettes refracting warm nectar tones at every angle</div>
                  <button className="la-link-btn">View Details →</button>
                </div>
              </div>
            </div>
          </section>

          {/* Form Elements */}
          <section className="la-section">
            <h2 className="la-section-title">Form Elements</h2>
            <div style={{ maxWidth: '480px' }}>
              <div className="la-form-group">
                <label className="la-form-label">Full Name</label>
                <input type="text" className="la-form-input" placeholder="Enter your name" />
              </div>

              <div className="la-form-group">
                <label className="la-form-label">Email (Error State)</label>
                <input type="text" className="la-form-input la-error" placeholder="your@email.com" />
                <div className="la-error-message">Please enter a valid email address</div>
              </div>

              <div className="la-form-group">
                <div className="la-checkbox-group">
                  <input type="checkbox" className="la-checkbox" id="la-notify" defaultChecked />
                  <label htmlFor="la-notify" style={{ fontSize: '14px', color: 'var(--espresso-secondary)' }}>
                    Receive notifications about new collections
                  </label>
                </div>
              </div>

              <div className="la-form-group">
                <label className="la-form-label">Category</label>
                <select className="la-form-input">
                  <option>All Collections</option>
                  <option>Vessels</option>
                  <option>Decanters</option>
                  <option>Flutes</option>
                </select>
              </div>

              <button className="la-btn la-btn-primary">Submit</button>
            </div>
          </section>

          {/* Feedback & Status */}
          <section className="la-section">
            <h2 className="la-section-title">Feedback & Status</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '24px' }}>
              <span className="la-badge la-badge-amber">New Arrival</span>
              <span className="la-badge la-badge-rose">In Review</span>
              <span className="la-badge la-badge-peach">Pending</span>
              <span className="la-badge la-badge-success">Shipped</span>
              <span className="la-badge la-badge-error">Sold Out</span>
            </div>

            <div style={{ maxWidth: '560px' }}>
              <div className="la-alert la-alert-success">
                <span>&#10003;</span>
                <span>Your order has been confirmed and is being prepared</span>
              </div>
              <div className="la-alert la-alert-error">
                <span>&#10007;</span>
                <span>Payment failed. Please update your billing information.</span>
              </div>
              <div className="la-alert la-alert-warning">
                <span>&#9888;</span>
                <span>Limited edition — only 3 pieces remaining in stock</span>
              </div>
              <div className="la-alert la-alert-info">
                <span>&#8505;</span>
                <span>New summer collection launching next week</span>
              </div>
            </div>

            <div className="la-progress-container">
              <div className="la-progress-header">
                <span className="la-progress-label">Order Fulfillment</span>
                <span className="la-progress-value">68%</span>
              </div>
              <div className="la-progress">
                <div className="la-progress-fill" style={{ width: '68%' }}></div>
              </div>
            </div>
          </section>

          {/* Sample Content Layout */}
          <section className="la-section">
            <h2 className="la-section-title">Recent Activity</h2>
            <div className="la-content-list">
              <div className="la-content-item">
                <div className="la-content-info">
                  <div className="la-content-avatar" style={{ background: 'linear-gradient(135deg, #E68A5C, #FFC699)' }}></div>
                  <div className="la-content-details">
                    <div className="la-content-title">Sunset Vessel #42 shipped</div>
                    <div className="la-content-subtitle">Tracking number generated</div>
                  </div>
                </div>
                <div className="la-content-actions">
                  <span className="la-badge la-badge-success">Shipped</span>
                  <span className="la-content-time">2h</span>
                </div>
              </div>

              <div className="la-content-item">
                <div className="la-content-info">
                  <div className="la-content-avatar" style={{ background: 'linear-gradient(135deg, #E89BB6, #F5C6D8)' }}></div>
                  <div className="la-content-details">
                    <div className="la-content-title">Rose Decanter collection updated</div>
                    <div className="la-content-subtitle">3 new pieces added by studio</div>
                  </div>
                </div>
                <div className="la-content-actions">
                  <span className="la-badge la-badge-amber">Update</span>
                  <span className="la-content-time">6h</span>
                </div>
              </div>

              <div className="la-content-item">
                <div className="la-content-info">
                  <div className="la-content-avatar" style={{ background: 'linear-gradient(135deg, #FFC699, #E68A5C)' }}></div>
                  <div className="la-content-details">
                    <div className="la-content-title">Amber Flute #18 — sold out</div>
                    <div className="la-content-subtitle">Waitlist activated</div>
                  </div>
                </div>
                <div className="la-content-actions">
                  <span className="la-badge la-badge-error">Sold Out</span>
                  <span className="la-content-time">1d</span>
                </div>
              </div>
            </div>

            <div className="la-stats-grid">
              <div className="la-stat-card">
                <div className="la-stat-label">Collections</div>
                <div className="la-stat-value">24</div>
              </div>
              <div className="la-stat-card">
                <div className="la-stat-label">Pieces Sold</div>
                <div className="la-stat-value">1.2K</div>
              </div>
              <div className="la-stat-card">
                <div className="la-stat-label">Avg Rating</div>
                <div className="la-stat-value">4.9</div>
              </div>
              <div className="la-stat-card">
                <div className="la-stat-label">Revenue</div>
                <div className="la-stat-value">$84K</div>
              </div>
            </div>
          </section>

        </div>
      </main>
    </>
  );
}
