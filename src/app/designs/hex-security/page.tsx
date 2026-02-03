import React from 'react';

const cssStyles = `
  .hex-showcase {
    --hex-bg: #f7f7f7;
    --hex-surface: #ffffff;
    --hex-surface-soft: rgba(237, 237, 237, 0.3);
    --hex-text: #000000;
    --hex-text-muted: #5e5e5e;
    --hex-border: #c7c7c7;
    --hex-line: rgba(0, 0, 0, 0.1);
    --hex-line-strong: rgba(0, 0, 0, 0.18);
    --hex-accent: #fa651e;
    --hex-accent-strong: #ff8b17;
    --hex-danger: #ff312f;

    font-family: 'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.02), transparent 40%), var(--hex-bg);
    color: var(--hex-text);
    min-height: 100vh;
    padding: 72px 6vw 120px;
    position: relative;
    overflow: hidden;
  }

  .hex-grid {
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(to right, var(--hex-line) 1px, transparent 1px),
      linear-gradient(to bottom, var(--hex-line) 1px, transparent 1px);
    background-size: 56px 56px;
    opacity: 0.35;
    animation: hex-grid-drift 16s linear infinite;
    pointer-events: none;
  }

  .hex-showcase-content {
    position: relative;
    z-index: 1;
  }

  .hex-section {
    max-width: 1080px;
    margin: 0 auto 72px;
    padding: 32px;
    border: 1px solid var(--hex-border);
    border-radius: 16px;
    background: var(--hex-surface);
    animation: hex-rise 0.6s ease-out both;
    will-change: transform, opacity;
  }

  .hex-section:last-child {
    margin-bottom: 0;
  }

  .hex-section-header {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 16px;
    margin-bottom: 28px;
  }

  .hex-section-title {
    font-size: 28px;
    font-weight: 600;
    letter-spacing: -0.02em;
  }

  .hex-section-label {
    font-family: 'DM Mono', 'SFMono-Regular', Menlo, monospace;
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    color: var(--hex-text-muted);
  }

  .hex-hero {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 32px;
    align-items: center;
    background: linear-gradient(120deg, rgba(0, 0, 0, 0.04), transparent 45%),
      var(--hex-surface);
  }

  .hex-hero-title {
    font-family: 'Kalice-Trial Regular', 'Times New Roman', serif;
    font-size: 64px;
    font-weight: 400;
    letter-spacing: -0.02em;
    line-height: 1.02;
    margin-bottom: 16px;
  }

  .hex-hero-subtitle {
    font-size: 17px;
    color: var(--hex-text-muted);
    line-height: 1.6;
    margin-bottom: 24px;
    max-width: 420px;
  }

  .hex-cta-row {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    align-items: center;
  }

  .hex-btn {
    border-radius: 8px;
    padding: 12px 18px;
    font-size: 14px;
    font-weight: 600;
    border: 1px solid transparent;
    cursor: pointer;
    transition: all 0.18s ease;
    background: var(--hex-accent);
    color: #ffffff;
  }

  .hex-btn:hover {
    background: var(--hex-accent-strong);
    transform: translateY(-1px);
  }

  .hex-btn:active {
    transform: translateY(0);
  }

  .hex-btn-secondary {
    background: transparent;
    color: var(--hex-text);
    border-color: var(--hex-border);
  }

  .hex-btn-secondary:hover {
    border-color: var(--hex-line-strong);
    background: var(--hex-surface-soft);
  }

  .hex-hero-panel {
    border: 1px solid var(--hex-border);
    border-radius: 14px;
    padding: 20px;
    background: var(--hex-surface);
    position: relative;
  }

  .hex-hero-panel:before {
    content: "";
    position: absolute;
    inset: 10px;
    border: 1px dashed var(--hex-line-strong);
    border-radius: 10px;
    pointer-events: none;
  }

  .hex-hero-panel-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 12px;
  }

  .hex-hero-stat {
    border: 1px solid var(--hex-border);
    border-radius: 10px;
    padding: 14px;
    background: var(--hex-surface-soft);
    transition: transform 0.18s ease, border-color 0.18s ease;
    animation: hex-fade-in 0.45s ease-out both;
  }

  .hex-hero-stat:hover {
    transform: translateY(-2px);
    border-color: var(--hex-line-strong);
  }

  .hex-hero-stat-label {
    font-family: 'DM Mono', 'SFMono-Regular', Menlo, monospace;
    font-size: 10px;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--hex-text-muted);
    margin-bottom: 6px;
  }

  .hex-hero-stat-value {
    font-size: 20px;
    font-weight: 600;
  }

  .hex-palette-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: 16px;
  }

  .hex-swatch {
    border: 1px solid var(--hex-border);
    border-radius: 12px;
    overflow: hidden;
    background: var(--hex-surface);
    transition: transform 0.18s ease, border-color 0.18s ease;
    animation: hex-fade-in 0.45s ease-out both;
  }

  .hex-swatch:hover {
    transform: translateY(-2px);
    border-color: var(--hex-line-strong);
  }

  .hex-swatch-color {
    height: 78px;
  }

  .hex-swatch-body {
    padding: 12px;
    font-size: 12px;
    color: var(--hex-text-muted);
  }

  .hex-type-grid {
    display: grid;
    gap: 12px;
  }

  .hex-type-sample {
    border: 1px solid var(--hex-border);
    border-radius: 12px;
    padding: 16px;
    background: var(--hex-surface-soft);
    transition: border-color 0.18s ease;
  }

  .hex-type-sample:hover {
    border-color: var(--hex-line-strong);
  }

  .hex-label {
    font-family: 'DM Mono', 'SFMono-Regular', Menlo, monospace;
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 0.18em;
    color: var(--hex-text-muted);
    display: block;
    margin-bottom: 6px;
  }

  .hex-btn-row {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    align-items: center;
  }

  .hex-btn-outline {
    background: transparent;
    border: 1px solid var(--hex-border);
    color: var(--hex-text);
  }

  .hex-btn-outline:hover {
    border-color: var(--hex-line-strong);
  }

  .hex-btn-success {
    background: #111111;
    color: #ffffff;
  }

  .hex-btn-disabled {
    background: var(--hex-surface-soft);
    color: var(--hex-text-muted);
    border: 1px solid var(--hex-border);
    cursor: not-allowed;
  }

  .hex-link {
    color: var(--hex-text);
    text-decoration: underline;
    text-underline-offset: 4px;
    transition: color 0.18s ease;
  }

  .hex-link:hover {
    color: var(--hex-accent);
  }

  .hex-card-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 16px;
  }

  .hex-card {
    border: 1px solid var(--hex-border);
    border-radius: 12px;
    padding: 16px;
    background: var(--hex-surface);
    transition: border 0.18s ease, transform 0.18s ease, box-shadow 0.18s ease;
    animation: hex-fade-in 0.45s ease-out both;
  }

  .hex-card:hover {
    border-color: var(--hex-line-strong);
    transform: translateY(-3px);
    box-shadow: 0 20px 40px -28px rgba(0, 0, 0, 0.35);
  }

  .hex-card-header {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 12px;
  }

  .hex-card-icon {
    width: 28px;
    height: 28px;
    border-radius: 8px;
    background: linear-gradient(135deg, var(--hex-accent), var(--hex-accent-strong));
  }

  .hex-card-title {
    font-weight: 600;
  }

  .hex-card-desc {
    color: var(--hex-text-muted);
    font-size: 14px;
    line-height: 1.5;
  }

  .hex-form-grid {
    display: grid;
    gap: 16px;
  }

  .hex-input {
    width: 100%;
    padding: 12px 14px;
    border-radius: 8px;
    border: 1px solid var(--hex-border);
    background: var(--hex-surface);
    font-size: 14px;
  }

  .hex-input:focus {
    outline: none;
    border-color: var(--hex-text);
    box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.08);
  }

  .hex-input-error {
    border-color: var(--hex-danger);
  }

  .hex-select {
    position: relative;
  }

  .hex-select select {
    appearance: none;
  }

  .hex-select:after {
    content: "";
    position: absolute;
    right: 14px;
    top: 50%;
    width: 8px;
    height: 8px;
    border-right: 1.5px solid var(--hex-text);
    border-bottom: 1.5px solid var(--hex-text);
    transform: translateY(-50%) rotate(45deg);
    pointer-events: none;
  }

  .hex-checkbox {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 14px;
  }

  .hex-checkbox input {
    width: 16px;
    height: 16px;
    accent-color: var(--hex-accent);
  }

  .hex-alert-grid {
    display: grid;
    gap: 12px;
  }

  .hex-alert {
    border-radius: 10px;
    border: 1px solid var(--hex-border);
    padding: 12px 14px;
    font-size: 14px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: transform 0.18s ease, border-color 0.18s ease;
    animation: hex-fade-in 0.45s ease-out both;
  }

  .hex-alert:hover {
    transform: translateY(-2px);
    border-color: var(--hex-line-strong);
  }

  .hex-alert-success {
    border-color: rgba(250, 101, 30, 0.35);
    background: rgba(250, 101, 30, 0.12);
  }

  .hex-alert-error {
    border-color: rgba(255, 49, 47, 0.4);
    background: rgba(255, 49, 47, 0.12);
  }

  .hex-alert-warning {
    border-color: rgba(255, 139, 23, 0.4);
    background: rgba(255, 139, 23, 0.12);
  }

  .hex-alert-info {
    border-color: rgba(0, 0, 0, 0.18);
    background: rgba(0, 0, 0, 0.04);
  }

  .hex-progress {
    height: 10px;
    border-radius: 999px;
    background: var(--hex-surface-soft);
    overflow: hidden;
  }

  .hex-progress-bar {
    height: 100%;
    width: 65%;
    background: linear-gradient(90deg, var(--hex-accent), var(--hex-accent-strong));
  }

  .hex-content-grid {
    display: grid;
    gap: 12px;
  }

  .hex-row {
    display: flex;
    justify-content: space-between;
    gap: 12px;
    padding: 12px 14px;
    border: 1px solid var(--hex-border);
    border-radius: 10px;
    background: var(--hex-surface);
    transition: transform 0.18s ease, border-color 0.18s ease;
    animation: hex-fade-in 0.45s ease-out both;
  }

  .hex-row:hover {
    transform: translateY(-2px);
    border-color: var(--hex-line-strong);
  }

  .hex-badge {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 4px 10px;
    border-radius: 999px;
    background: rgba(250, 101, 30, 0.15);
    color: var(--hex-accent);
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .hex-actions {
    display: flex;
    gap: 8px;
  }

  .hex-cornered {
    position: relative;
  }

  .hex-cornered:after {
    content: "";
    position: absolute;
    inset: 0;
    pointer-events: none;
    border-radius: inherit;
    background:
      linear-gradient(var(--hex-line-strong), var(--hex-line-strong)) left top / 12px 1px no-repeat,
      linear-gradient(var(--hex-line-strong), var(--hex-line-strong)) left top / 1px 12px no-repeat,
      linear-gradient(var(--hex-line-strong), var(--hex-line-strong)) right top / 12px 1px no-repeat,
      linear-gradient(var(--hex-line-strong), var(--hex-line-strong)) right top / 1px 12px no-repeat,
      linear-gradient(var(--hex-line-strong), var(--hex-line-strong)) left bottom / 12px 1px no-repeat,
      linear-gradient(var(--hex-line-strong), var(--hex-line-strong)) left bottom / 1px 12px no-repeat,
      linear-gradient(var(--hex-line-strong), var(--hex-line-strong)) right bottom / 12px 1px no-repeat,
      linear-gradient(var(--hex-line-strong), var(--hex-line-strong)) right bottom / 1px 12px no-repeat;
    opacity: 0.6;
  }

  @keyframes hex-rise {
    from {
      opacity: 0;
      transform: translateY(16px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes hex-fade-in {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes hex-grid-drift {
    0% {
      background-position: 0 0, 0 0;
    }
    100% {
      background-position: 56px 56px, 56px 56px;
    }
  }

  @media (max-width: 720px) {
    .hex-showcase {
      padding: 48px 5vw 88px;
    }

    .hex-section {
      padding: 24px;
    }

    .hex-hero-title {
      font-size: 44px;
    }
  }
`;

export default function DesignShowcase() {
  return (
    <>
      <style>{cssStyles}</style>
      <main className="hex-showcase">
        <div className="hex-grid"></div>
        <div className="hex-showcase-content">
          <section className="hex-section hex-hero hex-cornered" style={{ animationDelay: '0.05s' }}>
            <div>
              <span className="hex-section-label">Design System</span>
              <h1 className="hex-hero-title">Hex Security Interface</h1>
              <p className="hex-hero-subtitle">
                A crisp, technical UI for continuous security. Serif headlines, mono labels, and a grid-first
                layout bring focus to every signal.
              </p>
              <div className="hex-cta-row">
                <button className="hex-btn">Start a scan</button>
                <button className="hex-btn hex-btn-secondary">View report</button>
              </div>
            </div>
            <div className="hex-hero-panel hex-cornered">
              <div className="hex-hero-panel-grid">
                <div className="hex-hero-stat hex-cornered">
                  <div className="hex-hero-stat-label">Agents Online</div>
                  <div className="hex-hero-stat-value">12</div>
                </div>
                <div className="hex-hero-stat hex-cornered">
                  <div className="hex-hero-stat-label">Active Targets</div>
                  <div className="hex-hero-stat-value">48</div>
                </div>
                <div className="hex-hero-stat hex-cornered">
                  <div className="hex-hero-stat-label">Critical Findings</div>
                  <div className="hex-hero-stat-value">3</div>
                </div>
                <div className="hex-hero-stat hex-cornered">
                  <div className="hex-hero-stat-label">Mean Time to Fix</div>
                  <div className="hex-hero-stat-value">2.1d</div>
                </div>
              </div>
            </div>
          </section>

          <section className="hex-section hex-cornered" style={{ animationDelay: '0.1s' }}>
            <div className="hex-section-header">
              <h2 className="hex-section-title">Color Palette</h2>
              <span className="hex-section-label">Tokens</span>
            </div>
            <div className="hex-palette-grid">
              <div className="hex-swatch hex-cornered">
                <div className="hex-swatch-color" style={{ background: '#f7f7f7' }}></div>
                <div className="hex-swatch-body">Primary Background · #f7f7f7</div>
              </div>
              <div className="hex-swatch hex-cornered">
                <div className="hex-swatch-color" style={{ background: '#ffffff' }}></div>
                <div className="hex-swatch-body">Surface · #ffffff</div>
              </div>
              <div className="hex-swatch hex-cornered">
                <div className="hex-swatch-color" style={{ background: '#c7c7c7' }}></div>
                <div className="hex-swatch-body">Border · #c7c7c7</div>
              </div>
              <div className="hex-swatch hex-cornered">
                <div className="hex-swatch-color" style={{ background: '#000000' }}></div>
                <div className="hex-swatch-body">Primary Text · #000000</div>
              </div>
              <div className="hex-swatch hex-cornered">
                <div className="hex-swatch-color" style={{ background: '#5e5e5e' }}></div>
                <div className="hex-swatch-body">Secondary Text · #5e5e5e</div>
              </div>
              <div className="hex-swatch hex-cornered">
                <div className="hex-swatch-color" style={{ background: '#fa651e' }}></div>
                <div className="hex-swatch-body">Signal Orange · #fa651e</div>
              </div>
              <div className="hex-swatch hex-cornered">
                <div className="hex-swatch-color" style={{ background: '#ff8b17' }}></div>
                <div className="hex-swatch-body">Warm Orange · #ff8b17</div>
              </div>
              <div className="hex-swatch hex-cornered">
                <div className="hex-swatch-color" style={{ background: '#ff312f' }}></div>
                <div className="hex-swatch-body">Alert Red · #ff312f</div>
              </div>
            </div>
          </section>

          <section className="hex-section hex-cornered" style={{ animationDelay: '0.15s' }}>
            <div className="hex-section-header">
              <h2 className="hex-section-title">Typography Scale</h2>
              <span className="hex-section-label">Serif + Sans + Mono</span>
            </div>
            <div className="hex-type-grid">
              <div className="hex-type-sample hex-cornered">
                <span className="hex-label">H1 / Hero</span>
                <h1 style={{ fontFamily: "'Kalice-Trial Regular', 'Times New Roman', serif", fontSize: '52px' }}>
                  The system sees every surface.
                </h1>
              </div>
              <div className="hex-type-sample hex-cornered">
                <span className="hex-label">H2</span>
                <h2 style={{ fontSize: '36px', fontWeight: 500 }}>Continuous coverage with disciplined type.</h2>
              </div>
              <div className="hex-type-sample hex-cornered">
                <span className="hex-label">H3</span>
                <h3 style={{ fontSize: '28px', fontWeight: 500 }}>A clear hierarchy for critical data.</h3>
              </div>
              <div className="hex-type-sample hex-cornered">
                <span className="hex-label">H4</span>
                <h4 style={{ fontSize: '22px', fontWeight: 500 }}>Precision in every label.</h4>
              </div>
              <div className="hex-type-sample hex-cornered">
                <span className="hex-label">H5</span>
                <h5 style={{ fontSize: '18px', fontWeight: 500 }}>Meticulous data scanning.</h5>
              </div>
              <div className="hex-type-sample hex-cornered">
                <span className="hex-label">H6</span>
                <h6 style={{ fontSize: '16px', fontWeight: 500 }}>Signal confidence.</h6>
              </div>
              <div className="hex-type-sample hex-cornered">
                <span className="hex-label">Body</span>
                <p style={{ fontSize: '16px', lineHeight: 1.6, color: 'var(--hex-text-muted)' }}>
                  Hex Security balances a serif headline with a clean sans body for clarity. Mono labels and small
                  caps support data-heavy interfaces without losing warmth.
                </p>
              </div>
            </div>
          </section>

          <section className="hex-section hex-cornered" style={{ animationDelay: '0.2s' }}>
            <div className="hex-section-header">
              <h2 className="hex-section-title">Buttons & Interactions</h2>
              <span className="hex-section-label">Action Layer</span>
            </div>
            <div className="hex-btn-row">
              <button className="hex-btn">Run audit</button>
              <button className="hex-btn hex-btn-outline">Schedule scan</button>
              <button className="hex-btn hex-btn-success">Confirm fix</button>
              <button className="hex-btn hex-btn-disabled">Disabled</button>
              <a className="hex-link" href="#">View agent logs</a>
            </div>
          </section>

          <section className="hex-section hex-cornered" style={{ animationDelay: '0.25s' }}>
            <div className="hex-section-header">
              <h2 className="hex-section-title">Cards</h2>
              <span className="hex-section-label">Findings</span>
            </div>
            <div className="hex-card-grid">
              <article className="hex-card hex-cornered">
                <div className="hex-card-header">
                  <div className="hex-card-icon"></div>
                  <div>
                    <div className="hex-card-title">API Surface Mapping</div>
                    <span className="hex-label">Coverage 98%</span>
                  </div>
                </div>
                <p className="hex-card-desc">
                  Enumerates every endpoint and traces new drift in the service mesh.
                </p>
                <a className="hex-link" href="#">Review map</a>
              </article>
              <article className="hex-card hex-cornered">
                <div className="hex-card-header">
                  <div className="hex-card-icon"></div>
                  <div>
                    <div className="hex-card-title">Credential Exposure</div>
                    <span className="hex-label">Priority High</span>
                  </div>
                </div>
                <p className="hex-card-desc">
                  Detects leaked secrets in build logs and verifies revocation status.
                </p>
                <a className="hex-link" href="#">Open incident</a>
              </article>
              <article className="hex-card hex-cornered">
                <div className="hex-card-header">
                  <div className="hex-card-icon"></div>
                  <div>
                    <div className="hex-card-title">Runtime Monitoring</div>
                    <span className="hex-label">Live</span>
                  </div>
                </div>
                <p className="hex-card-desc">
                  Tracks anomalous traffic and highlights active exploit attempts.
                </p>
                <a className="hex-link" href="#">View stream</a>
              </article>
            </div>
          </section>

          <section className="hex-section hex-cornered" style={{ animationDelay: '0.3s' }}>
            <div className="hex-section-header">
              <h2 className="hex-section-title">Form Elements</h2>
              <span className="hex-section-label">Inputs</span>
            </div>
            <div className="hex-form-grid">
              <label>
                <span className="hex-label">Target domain</span>
                <input className="hex-input" placeholder="api.hex-secure.com" />
              </label>
              <label>
                <span className="hex-label">API key (error state)</span>
                <input className="hex-input hex-input-error" placeholder="Invalid key" />
              </label>
              <label className="hex-checkbox">
                <input type="checkbox" defaultChecked /> Enable continuous testing
              </label>
              <label className="hex-select">
                <span className="hex-label">Scan cadence</span>
                <select className="hex-input">
                  <option>Every 6 hours</option>
                  <option>Daily</option>
                  <option>Weekly</option>
                </select>
              </label>
              <button className="hex-btn">Submit scan</button>
            </div>
          </section>

          <section className="hex-section hex-cornered" style={{ animationDelay: '0.35s' }}>
            <div className="hex-section-header">
              <h2 className="hex-section-title">Feedback & Status</h2>
              <span className="hex-section-label">Alerts</span>
            </div>
            <div className="hex-alert-grid">
              <div className="hex-alert hex-alert-success hex-cornered">
                <span>Success: Critical issue resolved.</span>
                <strong>Resolved</strong>
              </div>
              <div className="hex-alert hex-alert-error hex-cornered">
                <span>Error: Agent failed handshake.</span>
                <strong>Retry</strong>
              </div>
              <div className="hex-alert hex-alert-warning hex-cornered">
                <span>Warning: New surface detected.</span>
                <strong>Review</strong>
              </div>
              <div className="hex-alert hex-alert-info hex-cornered">
                <span>Info: Next scan begins in 45 minutes.</span>
                <strong>Scheduled</strong>
              </div>
              <div>
                <span className="hex-label">Progress</span>
                <div className="hex-progress">
                  <div className="hex-progress-bar"></div>
                </div>
              </div>
            </div>
          </section>

          <section className="hex-section hex-cornered" style={{ animationDelay: '0.4s' }}>
            <div className="hex-section-header">
              <h2 className="hex-section-title">Sample Content Layout</h2>
              <span className="hex-section-label">Operations</span>
            </div>
            <div className="hex-content-grid">
              <div className="hex-row hex-cornered">
                <div>
                  <div className="hex-card-title">Service perimeter scan</div>
                  <div className="hex-card-desc">Running in us-east-1</div>
                </div>
                <div className="hex-actions">
                  <span className="hex-badge">Active</span>
                  <button className="hex-btn hex-btn-outline">Pause</button>
                </div>
              </div>
              <div className="hex-row hex-cornered">
                <div>
                  <div className="hex-card-title">Credential rotation audit</div>
                  <div className="hex-card-desc">Next execution in 2 hours</div>
                </div>
                <div className="hex-actions">
                  <span className="hex-badge">Queued</span>
                  <button className="hex-btn hex-btn-outline">Reschedule</button>
                </div>
              </div>
              <div className="hex-row hex-cornered">
                <div>
                  <div className="hex-card-title">Zero trust validation</div>
                  <div className="hex-card-desc">Awaiting new policy</div>
                </div>
                <div className="hex-actions">
                  <span className="hex-badge">Inactive</span>
                  <button className="hex-btn hex-btn-outline">Activate</button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
