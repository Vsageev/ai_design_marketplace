import React from 'react';

const cssStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600&family=JetBrains+Mono:wght@400;500&family=Inter:wght@400;500;600&display=swap');

  .te-showcase {
    --te-canvas: #fafafa;
    --te-paper: #ffffff;
    --te-text: #0a0a0a;
    --te-text-secondary: #525252;
    --te-text-tertiary: #a3a3a3;
    --te-grid-fine: rgba(0, 0, 0, 0.04);
    --te-grid-cross: rgba(0, 0, 0, 0.08);
    --te-bracket: rgba(0, 0, 0, 0.2);
    --te-ruler: rgba(0, 0, 0, 0.12);
    --te-border: rgba(0, 0, 0, 0.08);
    --te-green: #22c55e;
    --te-red: #ef4444;
    --te-blue: #3b82f6;

    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    background: var(--te-canvas);
    color: var(--te-text);
    min-height: 100vh;
    position: relative;
    overflow-x: hidden;
  }

  /* Plus Grid Background */
  .te-grid-plus {
    position: fixed;
    inset: 0;
    background-image: radial-gradient(circle at center, var(--te-grid-cross) 1px, transparent 1px);
    background-size: 32px 32px;
    pointer-events: none;
    z-index: 0;
  }

  /* Coordinate Rulers */
  .te-ruler-y {
    position: fixed;
    left: 16px;
    top: 100px;
    bottom: 100px;
    width: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    pointer-events: none;
    z-index: 1;
  }

  .te-ruler-x {
    position: fixed;
    bottom: 16px;
    left: 100px;
    right: 100px;
    height: 20px;
    display: flex;
    justify-content: space-between;
    pointer-events: none;
    z-index: 1;
  }

  .te-coord {
    font-family: 'JetBrains Mono', monospace;
    font-size: 9px;
    color: var(--te-ruler);
    letter-spacing: 0;
  }

  /* Main Content */
  .te-content {
    position: relative;
    z-index: 2;
    max-width: 1100px;
    margin: 0 auto;
    padding: 100px 60px 140px;
  }

  /* Section */
  .te-section {
    margin-bottom: 100px;
    animation: te-reveal 0.5s ease-out both;
  }

  .te-section:last-child {
    margin-bottom: 0;
  }

  /* Bracketed Container */
  .te-bracketed {
    position: relative;
    padding: 32px;
  }

  .te-bracketed::before,
  .te-bracketed::after {
    content: '';
    position: absolute;
    width: 24px;
    height: 24px;
    border-color: var(--te-bracket);
    border-style: solid;
    pointer-events: none;
  }

  .te-bracketed::before {
    top: 0;
    left: 0;
    border-width: 1px 0 0 1px;
  }

  .te-bracketed::after {
    top: 0;
    right: 0;
    border-width: 1px 1px 0 0;
  }

  .te-bracketed-inner::before,
  .te-bracketed-inner::after {
    content: '';
    position: absolute;
    width: 24px;
    height: 24px;
    border-color: var(--te-bracket);
    border-style: solid;
    pointer-events: none;
  }

  .te-bracketed-inner::before {
    bottom: 0;
    left: 0;
    border-width: 0 0 1px 1px;
  }

  .te-bracketed-inner::after {
    bottom: 0;
    right: 0;
    border-width: 0 1px 1px 0;
  }

  /* Hero */
  .te-hero {
    min-height: 70vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 80px 0;
  }

  .te-hero-label {
    font-family: 'JetBrains Mono', monospace;
    font-size: 11px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.14em;
    color: var(--te-text-tertiary);
    margin-bottom: 24px;
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .te-hero-label::before {
    content: '';
    width: 40px;
    height: 1px;
    background: var(--te-bracket);
  }

  .te-hero-title {
    font-family: 'Playfair Display', Georgia, serif;
    font-size: 72px;
    font-weight: 400;
    letter-spacing: -0.03em;
    line-height: 0.95;
    margin-bottom: 32px;
    max-width: 900px;
  }

  .te-hero-subtitle {
    font-size: 18px;
    color: var(--te-text-secondary);
    line-height: 1.7;
    max-width: 540px;
    margin-bottom: 48px;
  }

  .te-cta-row {
    display: flex;
    gap: 32px;
    align-items: center;
  }

  /* Terminal-style Button */
  .te-btn {
    font-family: 'JetBrains Mono', monospace;
    font-size: 13px;
    font-weight: 500;
    background: none;
    border: none;
    color: var(--te-text);
    cursor: pointer;
    padding: 0;
    display: flex;
    align-items: center;
    gap: 8px;
    position: relative;
  }

  .te-btn::after {
    content: '_';
    animation: te-blink 1s steps(2) infinite;
  }

  .te-btn:hover {
    text-decoration: underline;
    text-underline-offset: 4px;
  }

  .te-btn-bracket {
    color: var(--te-text-tertiary);
    font-weight: 400;
  }

  .te-btn-secondary {
    border: 1px solid rgba(0, 0, 0, 0.15);
    padding: 12px 20px;
    letter-spacing: 0.06em;
  }

  .te-btn-secondary::after {
    display: none;
  }

  /* Floating Agent Labels */
  .te-agents {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .te-agent {
    display: flex;
    align-items: center;
    gap: 10px;
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(8px);
    border: 1px solid var(--te-border);
    padding: 8px 14px;
    font-family: 'JetBrains Mono', monospace;
    font-size: 11px;
    animation: te-float 3s ease-in-out infinite alternate;
  }

  .te-agent:nth-child(2) {
    animation-delay: -1s;
    margin-left: 24px;
  }

  .te-agent:nth-child(3) {
    animation-delay: -2s;
    margin-left: 12px;
  }

  .te-agent-cursor {
    width: 12px;
    height: 12px;
    position: relative;
  }

  .te-agent-cursor::before {
    content: '';
    position: absolute;
    inset: 0;
    border-left: 2px solid var(--te-blue);
    border-top: 2px solid var(--te-blue);
    transform: rotate(-45deg) translate(2px, 2px);
  }

  .te-agent-status {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--te-green);
    animation: te-pulse 2s ease-in-out infinite;
  }

  /* Section Headers */
  .te-section-header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 40px;
    padding-bottom: 16px;
    border-bottom: 1px solid var(--te-border);
  }

  .te-section-title {
    font-family: 'Playfair Display', Georgia, serif;
    font-size: 40px;
    font-weight: 400;
    letter-spacing: -0.02em;
  }

  .te-section-label {
    font-family: 'JetBrains Mono', monospace;
    font-size: 10px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.14em;
    color: var(--te-text-tertiary);
  }

  /* Color Palette */
  .te-palette {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 20px;
  }

  .te-swatch {
    border: 1px solid var(--te-border);
    background: var(--te-paper);
    transition: border-color 0.15s ease-out;
  }

  .te-swatch:hover {
    border-color: var(--te-bracket);
  }

  .te-swatch-color {
    height: 80px;
    position: relative;
  }

  .te-swatch-color::after {
    content: '';
    position: absolute;
    inset: 0;
    background-image: radial-gradient(circle at center, rgba(0,0,0,0.15) 1px, transparent 1px);
    background-size: 4px 4px;
    opacity: 0;
    transition: opacity 0.15s ease-out;
  }

  .te-swatch:hover .te-swatch-color::after {
    opacity: 1;
  }

  .te-swatch-info {
    padding: 14px;
    font-family: 'JetBrains Mono', monospace;
    font-size: 11px;
    color: var(--te-text-secondary);
  }

  .te-swatch-name {
    font-weight: 500;
    color: var(--te-text);
    margin-bottom: 4px;
  }

  /* Typography */
  .te-type-grid {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .te-type-sample {
    padding: 24px;
    border: 1px solid var(--te-border);
    background: var(--te-paper);
    position: relative;
  }

  .te-type-label {
    font-family: 'JetBrains Mono', monospace;
    font-size: 10px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: var(--te-text-tertiary);
    margin-bottom: 12px;
    display: block;
  }

  .te-type-serif {
    font-family: 'Playfair Display', Georgia, serif;
  }

  .te-type-mono {
    font-family: 'JetBrains Mono', monospace;
  }

  /* Buttons Section */
  .te-btn-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
    align-items: center;
  }

  .te-btn-disabled {
    color: var(--te-text-tertiary);
    cursor: not-allowed;
  }

  .te-btn-disabled::after {
    animation: none;
    opacity: 0.3;
  }

  .te-link {
    font-family: 'JetBrains Mono', monospace;
    font-size: 13px;
    color: var(--te-text);
    text-decoration: underline;
    text-underline-offset: 4px;
    text-decoration-color: var(--te-text-tertiary);
    transition: text-decoration-color 0.15s ease-out;
  }

  .te-link:hover {
    text-decoration-color: var(--te-text);
  }

  /* Cards */
  .te-card-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 24px;
  }

  .te-card {
    border: 1px solid var(--te-border);
    background: var(--te-paper);
    padding: 28px;
    position: relative;
    transition: border-color 0.15s ease-out;
  }

  .te-card:hover {
    border-color: var(--te-bracket);
  }

  .te-card:hover::before,
  .te-card:hover::after {
    opacity: 1;
  }

  .te-card::before,
  .te-card::after {
    content: '';
    position: absolute;
    width: 16px;
    height: 16px;
    border-color: var(--te-bracket);
    border-style: solid;
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.15s ease-out;
  }

  .te-card::before {
    top: -1px;
    left: -1px;
    border-width: 1px 0 0 1px;
  }

  .te-card::after {
    bottom: -1px;
    right: -1px;
    border-width: 0 1px 1px 0;
  }

  .te-card-header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: 16px;
  }

  .te-card-title {
    font-family: 'Playfair Display', Georgia, serif;
    font-size: 22px;
    font-weight: 400;
    letter-spacing: -0.01em;
  }

  .te-card-status {
    font-family: 'JetBrains Mono', monospace;
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--te-green);
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .te-card-status-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: currentColor;
  }

  .te-card-desc {
    font-size: 14px;
    color: var(--te-text-secondary);
    line-height: 1.6;
    margin-bottom: 20px;
  }

  .te-card-meta {
    font-family: 'JetBrains Mono', monospace;
    font-size: 11px;
    color: var(--te-text-tertiary);
    display: flex;
    gap: 16px;
  }

  /* Form Elements */
  .te-form-grid {
    display: grid;
    gap: 24px;
    max-width: 480px;
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
    transition: border-color 0.15s ease-out;
  }

  .te-input:focus {
    border-color: var(--te-text);
  }

  .te-input::placeholder {
    color: var(--te-text-tertiary);
  }

  .te-input-error {
    border-color: var(--te-red);
  }

  .te-checkbox {
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 14px;
    cursor: pointer;
  }

  .te-checkbox input {
    width: 16px;
    height: 16px;
    accent-color: var(--te-text);
  }

  .te-select {
    position: relative;
  }

  .te-select select {
    appearance: none;
    width: 100%;
  }

  .te-select::after {
    content: '↓';
    position: absolute;
    right: 16px;
    top: 50%;
    transform: translateY(-50%);
    font-family: 'JetBrains Mono', monospace;
    font-size: 12px;
    color: var(--te-text-tertiary);
    pointer-events: none;
  }

  /* Alerts */
  .te-alert-grid {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .te-alert {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 20px;
    border: 1px solid var(--te-border);
    background: var(--te-paper);
    font-size: 14px;
  }

  .te-alert-success {
    border-left: 3px solid var(--te-green);
  }

  .te-alert-error {
    border-left: 3px solid var(--te-red);
  }

  .te-alert-warning {
    border-left: 3px solid #f59e0b;
  }

  .te-alert-info {
    border-left: 3px solid var(--te-blue);
  }

  .te-alert-action {
    font-family: 'JetBrains Mono', monospace;
    font-size: 11px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: var(--te-text-secondary);
  }

  /* Progress */
  .te-progress {
    height: 4px;
    background: var(--te-border);
    position: relative;
    overflow: hidden;
  }

  .te-progress-bar {
    height: 100%;
    width: 65%;
    background: var(--te-text);
  }

  /* Content Layout */
  .te-content-grid {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .te-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 18px 24px;
    border: 1px solid var(--te-border);
    background: var(--te-paper);
    transition: border-color 0.15s ease-out;
  }

  .te-row:hover {
    border-color: var(--te-bracket);
  }

  .te-row-title {
    font-weight: 500;
    margin-bottom: 4px;
  }

  .te-row-desc {
    font-family: 'JetBrains Mono', monospace;
    font-size: 12px;
    color: var(--te-text-tertiary);
  }

  .te-row-actions {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  .te-badge {
    font-family: 'JetBrains Mono', monospace;
    font-size: 10px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    padding: 6px 12px;
    border: 1px solid var(--te-border);
    color: var(--te-text-secondary);
  }

  .te-badge-active {
    border-color: var(--te-green);
    color: var(--te-green);
  }

  /* Stippled Sphere */
  .te-sphere {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background:
      radial-gradient(circle at 30% 30%, rgba(255,255,255,0.8), transparent 60%),
      radial-gradient(circle at center, var(--te-canvas), var(--te-text-tertiary));
    position: relative;
    margin: 40px auto;
  }

  .te-sphere::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 50%;
    background-image: radial-gradient(circle at center, var(--te-text) 1px, transparent 1px);
    background-size: 6px 6px;
    opacity: 0.3;
    mask-image: radial-gradient(circle at center, black, transparent 70%);
    -webkit-mask-image: radial-gradient(circle at center, black, transparent 70%);
  }

  /* Animations */
  @keyframes te-reveal {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes te-blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }

  @keyframes te-float {
    from { transform: translateY(-4px); }
    to { transform: translateY(4px); }
  }

  @keyframes te-pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
  }

  /* Responsive */
  @media (max-width: 768px) {
    .te-content {
      padding: 60px 24px 100px;
    }

    .te-hero-title {
      font-size: 48px;
    }

    .te-section-title {
      font-size: 32px;
    }

    .te-agents {
      display: none;
    }

    .te-ruler-y,
    .te-ruler-x {
      display: none;
    }
  }
`;

export default function DesignShowcase() {
  return (
    <>
      <style>{cssStyles}</style>
      <main className="te-showcase">
        {/* Plus Grid Background */}
        <div className="te-grid-plus" />

        {/* Coordinate Rulers */}
        <div className="te-ruler-y">
          <span className="te-coord">000</span>
          <span className="te-coord">100</span>
          <span className="te-coord">200</span>
          <span className="te-coord">300</span>
          <span className="te-coord">400</span>
          <span className="te-coord">500</span>
        </div>
        <div className="te-ruler-x">
          <span className="te-coord">000</span>
          <span className="te-coord">200</span>
          <span className="te-coord">400</span>
          <span className="te-coord">600</span>
          <span className="te-coord">800</span>
          <span className="te-coord">1000</span>
        </div>

        <div className="te-content">
          {/* Hero Section */}
          <section className="te-section te-hero" style={{ animationDelay: '0s' }}>
            <div className="te-bracketed te-bracketed-inner">
              <span className="te-hero-label">Continuous Security Platform</span>
              <h1 className="te-hero-title">The machine watches<br />while you build.</h1>
              <p className="te-hero-subtitle">
                Autonomous agents scan your attack surface around the clock. No dashboards to check.
                No alerts to miss. Just coverage that adapts as your infrastructure evolves.
              </p>
              <div className="te-cta-row">
                <button className="te-btn">
                  <span className="te-btn-bracket">[</span>
                  Book a call
                  <span className="te-btn-bracket">]</span>
                </button>
                <button className="te-btn te-btn-secondary">View documentation</button>
              </div>
            </div>

            {/* Floating Agent Labels */}
            <div className="te-agents">
              <div className="te-agent">
                <span className="te-agent-cursor" />
                <span>Prama</span>
                <span className="te-agent-status" />
              </div>
              <div className="te-agent">
                <span className="te-agent-cursor" />
                <span>Ahmad</span>
                <span className="te-agent-status" />
              </div>
              <div className="te-agent">
                <span className="te-agent-cursor" />
                <span>Scanner-7</span>
                <span className="te-agent-status" />
              </div>
            </div>
          </section>

          {/* Stippled Sphere */}
          <div className="te-sphere" />

          {/* Color Palette */}
          <section className="te-section" style={{ animationDelay: '0.1s' }}>
            <div className="te-section-header">
              <h2 className="te-section-title">Color Palette</h2>
              <span className="te-section-label">Design Tokens</span>
            </div>
            <div className="te-palette">
              <div className="te-swatch">
                <div className="te-swatch-color" style={{ background: '#fafafa' }} />
                <div className="te-swatch-info">
                  <div className="te-swatch-name">Canvas</div>
                  #fafafa
                </div>
              </div>
              <div className="te-swatch">
                <div className="te-swatch-color" style={{ background: '#ffffff' }} />
                <div className="te-swatch-info">
                  <div className="te-swatch-name">Paper</div>
                  #ffffff
                </div>
              </div>
              <div className="te-swatch">
                <div className="te-swatch-color" style={{ background: '#0a0a0a' }} />
                <div className="te-swatch-info">
                  <div className="te-swatch-name">Primary Text</div>
                  #0a0a0a
                </div>
              </div>
              <div className="te-swatch">
                <div className="te-swatch-color" style={{ background: '#525252' }} />
                <div className="te-swatch-info">
                  <div className="te-swatch-name">Secondary Text</div>
                  #525252
                </div>
              </div>
              <div className="te-swatch">
                <div className="te-swatch-color" style={{ background: '#a3a3a3' }} />
                <div className="te-swatch-info">
                  <div className="te-swatch-name">Tertiary</div>
                  #a3a3a3
                </div>
              </div>
              <div className="te-swatch">
                <div className="te-swatch-color" style={{ background: '#22c55e' }} />
                <div className="te-swatch-info">
                  <div className="te-swatch-name">Terminal Green</div>
                  #22c55e
                </div>
              </div>
              <div className="te-swatch">
                <div className="te-swatch-color" style={{ background: '#ef4444' }} />
                <div className="te-swatch-info">
                  <div className="te-swatch-name">Signal Red</div>
                  #ef4444
                </div>
              </div>
              <div className="te-swatch">
                <div className="te-swatch-color" style={{ background: '#3b82f6' }} />
                <div className="te-swatch-info">
                  <div className="te-swatch-name">Cursor Blue</div>
                  #3b82f6
                </div>
              </div>
            </div>
          </section>

          {/* Typography */}
          <section className="te-section" style={{ animationDelay: '0.15s' }}>
            <div className="te-section-header">
              <h2 className="te-section-title">Typography Scale</h2>
              <span className="te-section-label">Serif + Sans + Mono</span>
            </div>
            <div className="te-type-grid">
              <div className="te-type-sample">
                <span className="te-type-label">Hero / 72px Playfair</span>
                <h1 className="te-type-serif" style={{ fontSize: '56px', fontWeight: 400, letterSpacing: '-0.03em', lineHeight: 1 }}>
                  Precision in every scan.
                </h1>
              </div>
              <div className="te-type-sample">
                <span className="te-type-label">H2 / 40px Playfair</span>
                <h2 className="te-type-serif" style={{ fontSize: '40px', fontWeight: 400, letterSpacing: '-0.02em' }}>
                  The editorial authority of print.
                </h2>
              </div>
              <div className="te-type-sample">
                <span className="te-type-label">H3 / 28px Inter</span>
                <h3 style={{ fontSize: '28px', fontWeight: 500, letterSpacing: '-0.015em' }}>
                  Clean hierarchy for critical data.
                </h3>
              </div>
              <div className="te-type-sample">
                <span className="te-type-label">Body / 15px Inter</span>
                <p style={{ fontSize: '15px', lineHeight: 1.6, color: 'var(--te-text-secondary)' }}>
                  This design uses sophisticated tension between two font styles. Large, elegant serif typography
                  gives the product an air of authority. Small typewriter-style text signals to developers that
                  this is a technical tool built for them.
                </p>
              </div>
              <div className="te-type-sample">
                <span className="te-type-label">Monospace / 11px JetBrains Mono</span>
                <p className="te-type-mono" style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--te-text-tertiary)' }}>
                  System Status: All agents operational · Last scan: 2 minutes ago
                </p>
              </div>
            </div>
          </section>

          {/* Buttons */}
          <section className="te-section" style={{ animationDelay: '0.2s' }}>
            <div className="te-section-header">
              <h2 className="te-section-title">Buttons & Interactions</h2>
              <span className="te-section-label">Terminal Style</span>
            </div>
            <div className="te-btn-grid">
              <button className="te-btn">
                <span className="te-btn-bracket">[</span>
                Start scan
                <span className="te-btn-bracket">]</span>
              </button>
              <button className="te-btn te-btn-secondary">View reports</button>
              <button className="te-btn te-btn-disabled">
                <span className="te-btn-bracket">[</span>
                Disabled
                <span className="te-btn-bracket">]</span>
              </button>
              <a className="te-link" href="#">Agent documentation →</a>
            </div>
          </section>

          {/* Cards */}
          <section className="te-section" style={{ animationDelay: '0.25s' }}>
            <div className="te-section-header">
              <h2 className="te-section-title">Cards</h2>
              <span className="te-section-label">Findings</span>
            </div>
            <div className="te-card-grid">
              <article className="te-card">
                <div className="te-card-header">
                  <h3 className="te-card-title">API Surface Scan</h3>
                  <span className="te-card-status">
                    <span className="te-card-status-dot" />
                    Active
                  </span>
                </div>
                <p className="te-card-desc">
                  Maps every endpoint in your service mesh and tracks new routes as they appear.
                </p>
                <div className="te-card-meta">
                  <span>Coverage: 98%</span>
                  <span>Last run: 4m ago</span>
                </div>
              </article>
              <article className="te-card">
                <div className="te-card-header">
                  <h3 className="te-card-title">Credential Audit</h3>
                  <span className="te-card-status" style={{ color: 'var(--te-red)' }}>
                    <span className="te-card-status-dot" />
                    Critical
                  </span>
                </div>
                <p className="te-card-desc">
                  Detects leaked secrets in build logs and verifies revocation status automatically.
                </p>
                <div className="te-card-meta">
                  <span>3 findings</span>
                  <span>Priority: High</span>
                </div>
              </article>
              <article className="te-card">
                <div className="te-card-header">
                  <h3 className="te-card-title">Runtime Monitor</h3>
                  <span className="te-card-status">
                    <span className="te-card-status-dot" />
                    Active
                  </span>
                </div>
                <p className="te-card-desc">
                  Tracks anomalous traffic patterns and highlights active exploit attempts in real-time.
                </p>
                <div className="te-card-meta">
                  <span>0 anomalies</span>
                  <span>Uptime: 99.9%</span>
                </div>
              </article>
            </div>
          </section>

          {/* Form Elements */}
          <section className="te-section" style={{ animationDelay: '0.3s' }}>
            <div className="te-section-header">
              <h2 className="te-section-title">Form Elements</h2>
              <span className="te-section-label">Inputs</span>
            </div>
            <div className="te-form-grid">
              <div className="te-input-group">
                <label className="te-input-label">Target Domain</label>
                <input className="te-input" placeholder="api.example.com" />
              </div>
              <div className="te-input-group">
                <label className="te-input-label">API Key (Error State)</label>
                <input className="te-input te-input-error" placeholder="Invalid key format" />
              </div>
              <label className="te-checkbox">
                <input type="checkbox" defaultChecked />
                Enable continuous monitoring
              </label>
              <div className="te-input-group te-select">
                <label className="te-input-label">Scan Frequency</label>
                <select className="te-input">
                  <option>Every 6 hours</option>
                  <option>Daily</option>
                  <option>Weekly</option>
                </select>
              </div>
              <button className="te-btn">
                <span className="te-btn-bracket">[</span>
                Submit configuration
                <span className="te-btn-bracket">]</span>
              </button>
            </div>
          </section>

          {/* Alerts */}
          <section className="te-section" style={{ animationDelay: '0.35s' }}>
            <div className="te-section-header">
              <h2 className="te-section-title">Feedback & Status</h2>
              <span className="te-section-label">Alerts</span>
            </div>
            <div className="te-alert-grid">
              <div className="te-alert te-alert-success">
                <span>Critical vulnerability patched successfully.</span>
                <span className="te-alert-action">Resolved</span>
              </div>
              <div className="te-alert te-alert-error">
                <span>Agent connection failed. Retrying in 30s.</span>
                <span className="te-alert-action">Retry</span>
              </div>
              <div className="te-alert te-alert-warning">
                <span>New attack surface detected in production.</span>
                <span className="te-alert-action">Review</span>
              </div>
              <div className="te-alert te-alert-info">
                <span>Next scheduled scan begins in 45 minutes.</span>
                <span className="te-alert-action">Scheduled</span>
              </div>
              <div className="te-input-group">
                <span className="te-type-label">Progress</span>
                <div className="te-progress">
                  <div className="te-progress-bar" />
                </div>
              </div>
            </div>
          </section>

          {/* Sample Layout */}
          <section className="te-section" style={{ animationDelay: '0.4s' }}>
            <div className="te-section-header">
              <h2 className="te-section-title">Sample Content Layout</h2>
              <span className="te-section-label">Operations</span>
            </div>
            <div className="te-content-grid">
              <div className="te-row">
                <div>
                  <div className="te-row-title">Service perimeter scan</div>
                  <div className="te-row-desc">Running in us-east-1 · Agent: Prama</div>
                </div>
                <div className="te-row-actions">
                  <span className="te-badge te-badge-active">Active</span>
                  <button className="te-btn te-btn-secondary">Pause</button>
                </div>
              </div>
              <div className="te-row">
                <div>
                  <div className="te-row-title">Credential rotation audit</div>
                  <div className="te-row-desc">Scheduled · Next run: 2 hours</div>
                </div>
                <div className="te-row-actions">
                  <span className="te-badge">Queued</span>
                  <button className="te-btn te-btn-secondary">Reschedule</button>
                </div>
              </div>
              <div className="te-row">
                <div>
                  <div className="te-row-title">Zero trust validation</div>
                  <div className="te-row-desc">Awaiting policy update</div>
                </div>
                <div className="te-row-actions">
                  <span className="te-badge">Inactive</span>
                  <button className="te-btn te-btn-secondary">Configure</button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
