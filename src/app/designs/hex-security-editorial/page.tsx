import React from 'react';

const cssStyles = `
  .hexed-showcase {
    --hexed-paper: #f5f4f2;
    --hexed-surface: #ffffff;
    --hexed-soft: rgba(30, 30, 30, 0.03);
    --hexed-ink: #141414;
    --hexed-graphite: #4b4b4b;
    --hexed-muted: #7b7b7b;
    --hexed-rule: #d2d0cb;
    --hexed-grid: rgba(20, 20, 20, 0.1);
    --hexed-bracket: rgba(20, 20, 20, 0.3);
    --hexed-orange: #ff6a2b;
    --hexed-orange-strong: #ff7e46;
    --hexed-teal: #0f8f8c;
    --hexed-alert: #e3362c;

    font-family: 'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    background: var(--hexed-paper);
    color: var(--hexed-ink);
    min-height: 100vh;
    padding: 72px 6vw 120px;
    position: relative;
    overflow: hidden;
  }

  .hexed-grid {
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(to right, var(--hexed-grid) 1px, transparent 1px),
      linear-gradient(to bottom, var(--hexed-grid) 1px, transparent 1px);
    background-size: 60px 60px;
    opacity: 0.35;
    pointer-events: none;
    animation: hexed-grid-drift 18s linear infinite;
  }

  .hexed-dotfield {
    position: absolute;
    inset: 0;
    background-image: radial-gradient(rgba(20, 20, 20, 0.18) 0.5px, transparent 0.5px);
    background-size: 12px 12px;
    opacity: 0.18;
    pointer-events: none;
    mix-blend-mode: multiply;
  }

  .hexed-rulers {
    position: absolute;
    inset: 0;
    pointer-events: none;
  }

  .hexed-ruler-x,
  .hexed-ruler-y {
    position: absolute;
    font-family: 'DM Mono', 'SFMono-Regular', Menlo, monospace;
    font-size: 10px;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--hexed-muted);
    opacity: 0.6;
  }

  .hexed-ruler-x {
    top: 24px;
    left: 8vw;
    display: flex;
    gap: 24px;
  }

  .hexed-ruler-y {
    left: 24px;
    top: 20vh;
    writing-mode: vertical-rl;
    text-orientation: mixed;
    display: flex;
    gap: 18px;
  }

  .hexed-showcase-content {
    position: relative;
    z-index: 1;
  }

  .hexed-section {
    max-width: 1080px;
    margin: 0 auto 72px;
    padding: 32px;
    border: 1px solid var(--hexed-rule);
    border-radius: 14px;
    background: var(--hexed-surface);
    animation: hexed-rise 0.4s ease-out both;
    will-change: transform, opacity;
    position: relative;
  }

  .hexed-section:last-child {
    margin-bottom: 0;
  }

  .hexed-section-header {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 16px;
    margin-bottom: 28px;
  }

  .hexed-section-title {
    font-size: 28px;
    font-weight: 600;
    letter-spacing: -0.02em;
  }

  .hexed-section-label {
    font-family: 'DM Mono', 'SFMono-Regular', Menlo, monospace;
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 0.18em;
    color: var(--hexed-muted);
  }

  .hexed-hero {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 32px;
    align-items: center;
    background: linear-gradient(120deg, var(--hexed-soft), transparent 50%);
  }

  .hexed-hero-title {
    font-family: 'Noe Display', 'Times New Roman', serif;
    font-size: 62px;
    font-weight: 400;
    letter-spacing: -0.02em;
    line-height: 1.02;
    margin-bottom: 16px;
  }

  .hexed-hero-subtitle {
    font-size: 17px;
    color: var(--hexed-graphite);
    line-height: 1.65;
    margin-bottom: 24px;
    max-width: 440px;
  }

  .hexed-hero-meta {
    font-family: 'DM Mono', 'SFMono-Regular', Menlo, monospace;
    font-size: 11px;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--hexed-muted);
    margin-bottom: 18px;
  }

  .hexed-cta-row {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    align-items: center;
  }

  .hexed-btn {
    border-radius: 6px;
    padding: 12px 18px;
    font-size: 14px;
    font-weight: 600;
    border: 1px solid transparent;
    cursor: pointer;
    transition: all 0.2s ease;
    background: var(--hexed-orange);
    color: #ffffff;
  }

  .hexed-btn:hover {
    background: var(--hexed-orange-strong);
    transform: translateY(-1px);
  }

  .hexed-btn:active {
    transform: translateY(0);
  }

  .hexed-btn-secondary {
    background: transparent;
    color: var(--hexed-ink);
    border-color: var(--hexed-rule);
  }

  .hexed-btn-secondary:hover {
    border-color: var(--hexed-bracket);
    background: var(--hexed-soft);
  }

  .hexed-btn-ghost {
    background: rgba(15, 143, 140, 0.12);
    border: 1px dashed rgba(15, 143, 140, 0.35);
    color: var(--hexed-teal);
  }

  .hexed-btn-ghost:hover {
    border-color: var(--hexed-teal);
  }

  .hexed-hero-panel {
    border: 1px solid var(--hexed-rule);
    border-radius: 12px;
    padding: 20px;
    background: var(--hexed-surface);
    position: relative;
  }

  .hexed-hero-panel:before {
    content: "";
    position: absolute;
    inset: 12px;
    border: 1px dashed var(--hexed-bracket);
    border-radius: 10px;
    pointer-events: none;
  }

  .hexed-hero-panel-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 14px;
  }

  .hexed-hero-stat {
    border: 1px solid var(--hexed-rule);
    border-radius: 10px;
    padding: 14px;
    background: var(--hexed-soft);
    transition: transform 0.2s ease, border-color 0.2s ease;
    animation: hexed-fade-in 0.4s ease-out both;
  }

  .hexed-hero-stat:hover {
    transform: translateY(-2px);
    border-color: var(--hexed-bracket);
  }

  .hexed-hero-stat-label {
    font-family: 'DM Mono', 'SFMono-Regular', Menlo, monospace;
    font-size: 10px;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: var(--hexed-muted);
    margin-bottom: 6px;
  }

  .hexed-hero-stat-value {
    font-size: 20px;
    font-weight: 600;
  }

  .hexed-agents {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 14px;
  }

  .hexed-agent-tag {
    font-family: 'DM Mono', 'SFMono-Regular', Menlo, monospace;
    font-size: 10px;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    padding: 6px 10px;
    border: 1px solid var(--hexed-rule);
    border-radius: 999px;
    background: var(--hexed-surface);
    color: var(--hexed-graphite);
    position: relative;
  }

  .hexed-agent-tag:after {
    content: "▮";
    color: var(--hexed-orange);
    margin-left: 6px;
  }

  .hexed-palette-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: 16px;
  }

  .hexed-swatch {
    border: 1px solid var(--hexed-rule);
    border-radius: 12px;
    overflow: hidden;
    background: var(--hexed-surface);
    transition: transform 0.2s ease, border-color 0.2s ease;
    animation: hexed-fade-in 0.4s ease-out both;
  }

  .hexed-swatch:hover {
    transform: translateY(-2px);
    border-color: var(--hexed-bracket);
  }

  .hexed-swatch-color {
    height: 78px;
  }

  .hexed-swatch-body {
    padding: 12px;
    display: grid;
    gap: 6px;
  }

  .hexed-swatch-title {
    font-size: 13px;
    font-weight: 600;
  }

  .hexed-swatch-hex {
    font-family: 'DM Mono', 'SFMono-Regular', Menlo, monospace;
    font-size: 11px;
    color: var(--hexed-muted);
  }

  .hexed-type-grid {
    display: grid;
    gap: 18px;
  }

  .hexed-type-sample h1,
  .hexed-type-sample h2,
  .hexed-type-sample h3,
  .hexed-type-sample h4,
  .hexed-type-sample h5,
  .hexed-type-sample h6 {
    font-family: 'Noe Display', 'Times New Roman', serif;
    margin: 0 0 6px;
  }

  .hexed-type-sample h1 {
    font-size: 54px;
    font-weight: 400;
  }

  .hexed-type-sample h2 {
    font-size: 38px;
    font-weight: 400;
  }

  .hexed-type-sample h3 {
    font-size: 28px;
    font-weight: 500;
  }

  .hexed-type-sample h4 {
    font-size: 22px;
    font-weight: 500;
  }

  .hexed-type-sample h5 {
    font-size: 18px;
    font-weight: 500;
  }

  .hexed-type-sample h6 {
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  .hexed-type-body {
    font-size: 16px;
    color: var(--hexed-graphite);
    line-height: 1.65;
  }

  .hexed-type-small {
    font-size: 13px;
    font-weight: 500;
    color: var(--hexed-muted);
  }

  .hexed-label {
    font-family: 'DM Mono', 'SFMono-Regular', Menlo, monospace;
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 0.18em;
    color: var(--hexed-muted);
  }

  .hexed-button-row {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    align-items: center;
  }

  .hexed-link {
    color: var(--hexed-teal);
    text-decoration: none;
    font-weight: 600;
    display: inline-flex;
    gap: 6px;
    align-items: center;
  }

  .hexed-link:hover {
    color: var(--hexed-ink);
  }

  .hexed-card-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 16px;
  }

  .hexed-card {
    border: 1px solid var(--hexed-rule);
    border-radius: 12px;
    padding: 18px;
    background: var(--hexed-surface);
    position: relative;
    transition: border-color 0.2s ease, transform 0.2s ease;
  }

  .hexed-card:before,
  .hexed-card:after {
    content: "";
    position: absolute;
    width: 12px;
    height: 12px;
    border: 2px solid var(--hexed-bracket);
    pointer-events: none;
  }

  .hexed-card:before {
    top: 12px;
    left: 12px;
    border-right: none;
    border-bottom: none;
  }

  .hexed-card:after {
    bottom: 12px;
    right: 12px;
    border-left: none;
    border-top: none;
  }

  .hexed-card:hover {
    border-color: var(--hexed-bracket);
    transform: translateY(-2px);
  }

  .hexed-card-title {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 8px;
  }

  .hexed-card-desc {
    color: var(--hexed-graphite);
    margin-bottom: 14px;
  }

  .hexed-card-meta {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: 'DM Mono', 'SFMono-Regular', Menlo, monospace;
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 0.16em;
    color: var(--hexed-muted);
  }

  .hexed-form-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 16px;
  }

  .hexed-input {
    width: 100%;
    padding: 10px 12px;
    border-radius: 6px;
    border: 1px solid var(--hexed-rule);
    font-size: 14px;
    background: var(--hexed-surface);
  }

  .hexed-input:focus {
    outline: none;
    border-color: var(--hexed-ink);
  }

  .hexed-input-error {
    border-color: var(--hexed-alert);
  }

  .hexed-checkbox {
    display: flex;
    gap: 10px;
    align-items: center;
    font-size: 14px;
  }

  .hexed-checkbox input {
    width: 16px;
    height: 16px;
    accent-color: var(--hexed-orange);
  }

  .hexed-select {
    appearance: none;
    background-image: linear-gradient(45deg, transparent 50%, var(--hexed-muted) 50%),
      linear-gradient(135deg, var(--hexed-muted) 50%, transparent 50%);
    background-position: calc(100% - 18px) 16px, calc(100% - 12px) 16px;
    background-size: 6px 6px, 6px 6px;
    background-repeat: no-repeat;
  }

  .hexed-alerts {
    display: grid;
    gap: 12px;
  }

  .hexed-alert {
    border-radius: 10px;
    padding: 14px 16px;
    border: 1px solid var(--hexed-rule);
    background: var(--hexed-soft);
  }

  .hexed-alert.success {
    border-color: rgba(15, 143, 140, 0.35);
    color: var(--hexed-teal);
  }

  .hexed-alert.error {
    border-color: rgba(227, 54, 44, 0.35);
    color: var(--hexed-alert);
  }

  .hexed-alert.warning {
    border-color: rgba(255, 106, 43, 0.35);
    color: var(--hexed-orange);
  }

  .hexed-alert.info {
    border-color: rgba(20, 20, 20, 0.35);
    color: var(--hexed-graphite);
  }

  .hexed-progress {
    width: 100%;
    height: 8px;
    border-radius: 999px;
    background: rgba(20, 20, 20, 0.08);
    overflow: hidden;
    margin-top: 10px;
  }

  .hexed-progress span {
    display: block;
    height: 100%;
    width: 65%;
    background: var(--hexed-orange);
  }

  .hexed-layout {
    display: grid;
    gap: 18px;
  }

  .hexed-data-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 14px;
    border: 1px solid var(--hexed-rule);
    border-radius: 10px;
    background: var(--hexed-surface);
  }

  .hexed-badge {
    padding: 4px 10px;
    border-radius: 999px;
    background: rgba(255, 106, 43, 0.15);
    color: var(--hexed-orange);
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  .hexed-badge-muted {
    background: rgba(20, 20, 20, 0.08);
    color: var(--hexed-muted);
  }

  @keyframes hexed-grid-drift {
    0% {
      background-position: 0 0, 0 0;
    }
    100% {
      background-position: 60px 60px, 60px 60px;
    }
  }

  @keyframes hexed-rise {
    from {
      opacity: 0;
      transform: translateY(18px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes hexed-fade-in {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export default function DesignShowcase() {
  return (
    <>
      <style>{cssStyles}</style>
      <main className="hexed-showcase">
        <div className="hexed-grid"></div>
        <div className="hexed-dotfield"></div>
        <div className="hexed-rulers">
          <div className="hexed-ruler-x">
            <span>00</span>
            <span>08</span>
            <span>16</span>
            <span>24</span>
            <span>32</span>
          </div>
          <div className="hexed-ruler-y">
            <span>AX-01</span>
            <span>BX-02</span>
            <span>CX-03</span>
          </div>
        </div>
        <div className="hexed-showcase-content">
          <section className="hexed-section hexed-hero">
            <div>
              <div className="hexed-hero-meta">Technical Editorial System</div>
              <h1 className="hexed-hero-title">Hex Security Editorial</h1>
              <p className="hexed-hero-subtitle">
                A high-low typographic system that pairs serif authority with mono precision. Blueprint grids,
                bracketed frames, and signal accents keep the interface calm, methodical, and quietly alive.
              </p>
              <div className="hexed-cta-row">
                <button className="hexed-btn">Book a call</button>
                <button className="hexed-btn hexed-btn-secondary">View dossier</button>
                <button className="hexed-btn hexed-btn-ghost">Run agent scan</button>
              </div>
            </div>
            <div className="hexed-hero-panel">
              <div className="hexed-hero-panel-grid">
                <div className="hexed-hero-stat">
                  <div className="hexed-hero-stat-label">Active agents</div>
                  <div className="hexed-hero-stat-value">07 online</div>
                </div>
                <div className="hexed-hero-stat">
                  <div className="hexed-hero-stat-label">Coverage</div>
                  <div className="hexed-hero-stat-value">98.4%</div>
                </div>
                <div className="hexed-hero-stat">
                  <div className="hexed-hero-stat-label">Threat window</div>
                  <div className="hexed-hero-stat-value">12 hrs</div>
                </div>
                <div className="hexed-hero-stat">
                  <div className="hexed-hero-stat-label">Response time</div>
                  <div className="hexed-hero-stat-value">2.3 min</div>
                </div>
              </div>
              <div className="hexed-agents">
                <span className="hexed-agent-tag">Prama</span>
                <span className="hexed-agent-tag">Ahmad</span>
                <span className="hexed-agent-tag">Zeta</span>
              </div>
            </div>
          </section>

          <section className="hexed-section">
            <div className="hexed-section-header">
              <h2 className="hexed-section-title">Color Palette</h2>
              <span className="hexed-section-label">Palette</span>
            </div>
            <div className="hexed-palette-grid">
              {[
                { name: 'Paper', value: '#f5f4f2' },
                { name: 'Surface', value: '#ffffff' },
                { name: 'Soft Field', value: 'rgba(30, 30, 30, 0.03)' },
                { name: 'Rule', value: '#d2d0cb' },
                { name: 'Grid', value: 'rgba(20, 20, 20, 0.10)' },
                { name: 'Bracket', value: 'rgba(20, 20, 20, 0.30)' },
                { name: 'Ink', value: '#141414' },
                { name: 'Graphite', value: '#4b4b4b' },
                { name: 'Muted', value: '#7b7b7b' },
                { name: 'Signal Orange', value: '#ff6a2b' },
                { name: 'Data Teal', value: '#0f8f8c' },
                { name: 'Alert Red', value: '#e3362c' },
              ].map((swatch) => (
                <div key={swatch.name} className="hexed-swatch">
                  <div className="hexed-swatch-color" style={{ background: swatch.value }}></div>
                  <div className="hexed-swatch-body">
                    <div className="hexed-swatch-title">{swatch.name}</div>
                    <div className="hexed-swatch-hex">{swatch.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="hexed-section">
            <div className="hexed-section-header">
              <h2 className="hexed-section-title">Typography Scale</h2>
              <span className="hexed-section-label">Type</span>
            </div>
            <div className="hexed-type-grid">
              <div className="hexed-type-sample">
                <h1>Editorial Command Surface</h1>
                <h2>System narrative and operational clarity</h2>
                <h3>Security posture overview</h3>
                <h4>Continuous verification cycles</h4>
                <h5>Agentic attribution layer</h5>
                <h6>Label / Meta</h6>
              </div>
              <p className="hexed-type-body">
                The interface reads like a technical dossier: serif headlines establish authority while the sans body
                text stays calm and legible. Mono metadata keeps every datapoint crisp and accountable.
              </p>
              <div className="hexed-type-small">Small caption: Runbook updated 14 minutes ago.</div>
              <div className="hexed-label">Mono label: Live scans</div>
            </div>
          </section>

          <section className="hexed-section">
            <div className="hexed-section-header">
              <h2 className="hexed-section-title">Buttons & Interactive Elements</h2>
              <span className="hexed-section-label">Controls</span>
            </div>
            <div className="hexed-button-row">
              <button className="hexed-btn">Primary action</button>
              <button className="hexed-btn hexed-btn-secondary">Secondary action</button>
              <button className="hexed-btn hexed-btn-ghost">Ghost action</button>
              <button className="hexed-btn" disabled style={{ opacity: 0.5, cursor: 'not-allowed' }}>
                Disabled
              </button>
              <a className="hexed-link" href="#">
                View logs <span>→</span>
              </a>
            </div>
          </section>

          <section className="hexed-section">
            <div className="hexed-section-header">
              <h2 className="hexed-section-title">Cards</h2>
              <span className="hexed-section-label">Surfaces</span>
            </div>
            <div className="hexed-card-grid">
              {[
                {
                  title: 'Threat rehearsal',
                  desc: 'Simulated breaches mapped against the production perimeter.',
                  meta: 'Runbook 12A',
                },
                {
                  title: 'Agent notes',
                  desc: 'Autonomous scans flagged three exposure windows.',
                  meta: 'Agent Zeta',
                },
                {
                  title: 'Compliance pulse',
                  desc: 'Quarterly attestations aligned to zero-trust policy.',
                  meta: 'Audit 04',
                },
              ].map((card) => (
                <div key={card.title} className="hexed-card">
                  <div className="hexed-card-title">{card.title}</div>
                  <div className="hexed-card-desc">{card.desc}</div>
                  <div className="hexed-card-meta">
                    <span>{card.meta}</span>
                    <span>View →</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="hexed-section">
            <div className="hexed-section-header">
              <h2 className="hexed-section-title">Form Elements</h2>
              <span className="hexed-section-label">Input</span>
            </div>
            <div className="hexed-form-grid">
              <label>
                <div className="hexed-label">Workspace</div>
                <input className="hexed-input" placeholder="Hex editorial" />
              </label>
              <label>
                <div className="hexed-label">API key</div>
                <input className="hexed-input hexed-input-error" placeholder="Missing key" />
              </label>
              <label className="hexed-checkbox">
                <input type="checkbox" defaultChecked />
                Auto-escalate critical findings
              </label>
              <label>
                <div className="hexed-label">Scan cadence</div>
                <select className="hexed-input hexed-select">
                  <option>Every 15 minutes</option>
                  <option>Hourly</option>
                  <option>Daily</option>
                </select>
              </label>
              <button className="hexed-btn">Submit request</button>
            </div>
          </section>

          <section className="hexed-section">
            <div className="hexed-section-header">
              <h2 className="hexed-section-title">Feedback & Status</h2>
              <span className="hexed-section-label">Signals</span>
            </div>
            <div className="hexed-alerts">
              <div className="hexed-alert success">Success: new agent runbook approved.</div>
              <div className="hexed-alert error">Error: audit trail missing for one endpoint.</div>
              <div className="hexed-alert warning">Warning: certificate renewal due in 8 days.</div>
              <div className="hexed-alert info">Info: surveillance mode is active.</div>
              <div>
                <div className="hexed-label">Progress</div>
                <div className="hexed-progress">
                  <span></span>
                </div>
              </div>
            </div>
          </section>

          <section className="hexed-section">
            <div className="hexed-section-header">
              <h2 className="hexed-section-title">Sample Content Layout</h2>
              <span className="hexed-section-label">Layout</span>
            </div>
            <div className="hexed-layout">
              <div>
                <div className="hexed-hero-meta">Feature ledger</div>
                <h3 className="hexed-section-title">Active exposure review</h3>
              </div>
              <div className="hexed-data-row">
                <div>
                  <div className="hexed-card-title">Shadow API inventory</div>
                  <div className="hexed-type-small">Updated by Agent Prama</div>
                </div>
                <span className="hexed-badge">Active</span>
              </div>
              <div className="hexed-data-row">
                <div>
                  <div className="hexed-card-title">Zero-trust validation</div>
                  <div className="hexed-type-small">Pending red team review</div>
                </div>
                <span className="hexed-badge hexed-badge-muted">Queued</span>
              </div>
              <div className="hexed-data-row">
                <div>
                  <div className="hexed-card-title">Credential drift monitor</div>
                  <div className="hexed-type-small">Last scan 2 hours ago</div>
                </div>
                <div className="hexed-button-row">
                  <button className="hexed-btn hexed-btn-secondary">View</button>
                  <button className="hexed-btn">Resolve</button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
