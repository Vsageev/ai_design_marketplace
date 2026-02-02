import React from 'react';

const cssStyles = `
  @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=IBM+Plex+Sans:wght@400;500;600&family=Space+Grotesk:wght@500;600;700&display=swap');

  .hexsec-showcase {
    --bg-void: #0b0c0f;
    --bg-panel: #12151a;
    --bg-panel-light: #171b22;
    --border-panel: #202530;

    --text-primary: #f5f7fb;
    --text-secondary: #c4c9d4;
    --text-muted: #8b93a5;

    --accent-lime: #b7ff3c;
    --accent-lime-deep: #8be21a;
    --accent-cyan: #4fd7ff;
    --accent-amber: #ffb23f;
    --accent-red: #ff4d5e;

    --tint-lime: rgba(183, 255, 60, 0.12);
    --tint-cyan: rgba(79, 215, 255, 0.12);
    --tint-amber: rgba(255, 178, 63, 0.12);
    --tint-red: rgba(255, 77, 94, 0.12);

    --shadow-surface: 0 12px 28px rgba(0, 0, 0, 0.35);
    --shadow-glow: 0 0 24px rgba(183, 255, 60, 0.18);

    font-family: 'IBM Plex Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    background: radial-gradient(circle at top, rgba(183, 255, 60, 0.08), transparent 45%),
      linear-gradient(135deg, rgba(79, 215, 255, 0.06), transparent 55%),
      var(--bg-void);
    color: var(--text-primary);
    min-height: 100vh;
    padding: 56px 24px 80px;
  }

  .hexsec-grid-backdrop {
    background-image:
      linear-gradient(90deg, rgba(255, 255, 255, 0.04) 1px, transparent 1px),
      linear-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px);
    background-size: 48px 48px;
    background-position: center;
  }

  .hexsec-container {
    max-width: 1200px;
    margin: 0 auto;
  }

  .hexsec-section {
    background: var(--bg-panel);
    border: 1px solid var(--border-panel);
    border-radius: 18px;
    padding: 32px;
    margin-bottom: 28px;
    box-shadow: var(--shadow-surface);
  }

  .hexsec-section-title {
    font-size: 11px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--text-muted);
    margin-bottom: 24px;
  }

  .hexsec-hero {
    position: relative;
    overflow: hidden;
    padding: 72px 56px;
  }

  .hexsec-hero::after {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at 15% 20%, rgba(183, 255, 60, 0.18), transparent 40%);
    opacity: 0.7;
    pointer-events: none;
  }

  .hexsec-hero-content {
    position: relative;
    z-index: 1;
  }

  .hexsec-hero-label {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    color: var(--accent-lime);
    margin-bottom: 18px;
  }

  .hexsec-hero-title {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 56px;
    font-weight: 700;
    letter-spacing: -0.02em;
    margin-bottom: 18px;
  }

  .hexsec-hero-subtitle {
    font-size: 17px;
    color: var(--text-secondary);
    line-height: 1.7;
    max-width: 620px;
    margin-bottom: 32px;
  }

  .hexsec-hero-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 14px;
  }

  .hexsec-btn {
    border-radius: 12px;
    border: 1px solid transparent;
    padding: 12px 22px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.18s cubic-bezier(0.2, 0.8, 0.2, 1);
    display: inline-flex;
    align-items: center;
    gap: 8px;
  }

  .hexsec-btn-primary {
    background: var(--accent-lime);
    color: var(--bg-void);
    box-shadow: var(--shadow-glow);
  }

  .hexsec-btn-primary:hover {
    background: var(--accent-lime-deep);
    box-shadow: 0 0 28px rgba(183, 255, 60, 0.28);
  }

  .hexsec-btn-secondary {
    background: var(--bg-panel-light);
    color: var(--text-primary);
    border-color: var(--border-panel);
  }

  .hexsec-btn-secondary:hover {
    border-color: var(--accent-lime);
  }

  .hexsec-btn-ghost {
    background: transparent;
    color: var(--text-secondary);
  }

  .hexsec-btn-ghost:hover {
    color: var(--text-primary);
  }

  .hexsec-btn-disabled {
    background: rgba(255, 255, 255, 0.06);
    color: var(--text-muted);
    cursor: not-allowed;
  }

  .hexsec-link {
    color: var(--accent-cyan);
    font-weight: 600;
    text-decoration: none;
  }

  .hexsec-link:hover {
    text-decoration: underline;
  }

  .hexsec-color-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 16px;
  }

  .hexsec-color-card {
    background: var(--bg-panel-light);
    border: 1px solid var(--border-panel);
    border-radius: 14px;
    padding: 12px;
  }

  .hexsec-color-swatch {
    height: 72px;
    border-radius: 12px;
    margin-bottom: 12px;
    border: 1px solid rgba(255, 255, 255, 0.08);
  }

  .hexsec-color-name {
    font-size: 12px;
    color: var(--text-secondary);
  }

  .hexsec-color-value {
    font-size: 12px;
    color: var(--text-muted);
    font-family: 'IBM Plex Mono', monospace;
  }

  .hexsec-type-sample {
    padding: 18px 0;
    border-bottom: 1px solid var(--border-panel);
  }

  .hexsec-type-sample:last-child {
    border-bottom: none;
  }

  .hexsec-type-label {
    font-size: 11px;
    color: var(--text-muted);
    letter-spacing: 0.12em;
    text-transform: uppercase;
    margin-bottom: 10px;
  }

  .hexsec-h1 { font-family: 'Space Grotesk', sans-serif; font-size: 56px; font-weight: 700; letter-spacing: -0.02em; }
  .hexsec-h2 { font-family: 'Space Grotesk', sans-serif; font-size: 32px; font-weight: 600; letter-spacing: -0.01em; }
  .hexsec-h3 { font-family: 'Space Grotesk', sans-serif; font-size: 24px; font-weight: 600; }
  .hexsec-h4 { font-family: 'Space Grotesk', sans-serif; font-size: 20px; font-weight: 600; }
  .hexsec-body-large { font-size: 17px; line-height: 1.7; color: var(--text-secondary); }
  .hexsec-body { font-size: 15px; line-height: 1.6; color: var(--text-secondary); }
  .hexsec-body-small { font-size: 13px; line-height: 1.5; color: var(--text-muted); }
  .hexsec-caption { font-size: 11px; line-height: 1.4; color: var(--text-muted); letter-spacing: 0.12em; text-transform: uppercase; }
  .hexsec-code { font-family: 'IBM Plex Mono', monospace; font-size: 13px; background: var(--bg-panel-light); border: 1px solid var(--border-panel); padding: 4px 8px; border-radius: 8px; }

  .hexsec-button-row {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    align-items: center;
  }

  .hexsec-cards-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 20px;
  }

  .hexsec-card {
    background: var(--bg-panel-light);
    border: 1px solid var(--border-panel);
    border-radius: 18px;
    padding: 22px;
    transition: all 0.18s cubic-bezier(0.2, 0.8, 0.2, 1);
  }

  .hexsec-card:hover {
    border-color: var(--accent-lime);
    box-shadow: var(--shadow-glow);
  }

  .hexsec-card-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 18px;
  }

  .hexsec-card-icon {
    width: 40px;
    height: 40px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(183, 255, 60, 0.15);
    color: var(--accent-lime);
    font-size: 18px;
  }

  .hexsec-card-title {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 10px;
  }

  .hexsec-card-text {
    font-size: 14px;
    color: var(--text-secondary);
    line-height: 1.5;
    margin-bottom: 16px;
  }

  .hexsec-form-group {
    margin-bottom: 18px;
  }

  .hexsec-label {
    display: block;
    font-size: 12px;
    color: var(--text-muted);
    text-transform: uppercase;
    letter-spacing: 0.12em;
    margin-bottom: 8px;
  }

  .hexsec-input {
    width: 100%;
    padding: 12px 14px;
    border-radius: 12px;
    border: 1px solid var(--border-panel);
    background: var(--bg-panel-light);
    color: var(--text-primary);
    font-size: 14px;
    transition: border 0.18s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.18s cubic-bezier(0.2, 0.8, 0.2, 1);
  }

  .hexsec-input:focus {
    outline: none;
    border-color: var(--accent-lime);
    box-shadow: 0 0 0 3px rgba(183, 255, 60, 0.12);
  }

  .hexsec-input-error {
    border-color: var(--accent-red);
  }

  .hexsec-error-text {
    font-size: 12px;
    color: var(--accent-red);
    margin-top: 6px;
  }

  .hexsec-checkbox {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 14px;
    color: var(--text-secondary);
  }

  .hexsec-checkbox input {
    accent-color: var(--accent-lime);
    width: 16px;
    height: 16px;
  }

  .hexsec-alert {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 14px 16px;
    border-radius: 14px;
    border: 1px solid transparent;
    margin-bottom: 12px;
    font-size: 14px;
  }

  .hexsec-alert-success { background: var(--tint-lime); color: var(--accent-lime); border-color: rgba(183, 255, 60, 0.3); }
  .hexsec-alert-error { background: var(--tint-red); color: var(--accent-red); border-color: rgba(255, 77, 94, 0.3); }
  .hexsec-alert-warning { background: var(--tint-amber); color: var(--accent-amber); border-color: rgba(255, 178, 63, 0.3); }
  .hexsec-alert-info { background: var(--tint-cyan); color: var(--accent-cyan); border-color: rgba(79, 215, 255, 0.3); }

  .hexsec-progress {
    margin-top: 20px;
  }

  .hexsec-progress-head {
    display: flex;
    justify-content: space-between;
    font-size: 13px;
    color: var(--text-secondary);
    margin-bottom: 8px;
  }

  .hexsec-progress-bar {
    height: 8px;
    background: var(--bg-panel-light);
    border-radius: 999px;
    border: 1px solid var(--border-panel);
    overflow: hidden;
  }

  .hexsec-progress-fill {
    height: 100%;
    width: 65%;
    background: linear-gradient(90deg, var(--accent-lime), var(--accent-cyan));
  }

  .hexsec-sample-list {
    display: flex;
    flex-direction: column;
    gap: 14px;
  }

  .hexsec-sample-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: var(--bg-panel-light);
    border: 1px solid var(--border-panel);
    border-radius: 14px;
    padding: 16px 18px;
  }

  .hexsec-sample-meta {
    display: flex;
    align-items: center;
    gap: 14px;
  }

  .hexsec-sample-icon {
    width: 40px;
    height: 40px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(79, 215, 255, 0.15);
    color: var(--accent-cyan);
    font-size: 18px;
  }

  .hexsec-badge {
    padding: 4px 10px;
    border-radius: 999px;
    font-size: 11px;
    font-weight: 600;
  }

  .hexsec-badge-active { background: var(--tint-lime); color: var(--accent-lime); }
  .hexsec-badge-watch { background: rgba(255, 255, 255, 0.06); color: var(--text-secondary); }
  .hexsec-badge-risk { background: var(--tint-amber); color: var(--accent-amber); }

  @media (max-width: 768px) {
    .hexsec-hero {
      padding: 56px 24px;
    }

    .hexsec-hero-title {
      font-size: 38px;
    }
  }
`;

export default function HexSecurityShowcase() {
  return (
    <>
      <style>{cssStyles}</style>
      <main className="hexsec-showcase hexsec-grid-backdrop">
        <div className="hexsec-container">
          <section className="hexsec-section hexsec-hero">
            <div className="hexsec-hero-content">
              <div className="hexsec-hero-label">Backed by Y Combinator</div>
              <h1 className="hexsec-hero-title">Security at the speed of development.</h1>
              <p className="hexsec-hero-subtitle">
                Attackers have AI. Defenders need it too. A high-clarity monitoring interface built for rapid detection,
                triage, and response.
              </p>
              <div className="hexsec-hero-actions">
                <button className="hexsec-btn hexsec-btn-primary">Start monitoring</button>
                <button className="hexsec-btn hexsec-btn-secondary">View threat map</button>
              </div>
            </div>
          </section>

          <section className="hexsec-section">
            <h2 className="hexsec-section-title">Color Palette</h2>

            <div style={{ marginBottom: '24px' }}>
              <p className="hexsec-type-label">Backgrounds</p>
              <div className="hexsec-color-grid">
                {[
                  { name: 'Void', value: '#0b0c0f' },
                  { name: 'Panel', value: '#12151a' },
                  { name: 'Panel Light', value: '#171b22' },
                  { name: 'Panel Edge', value: '#202530' },
                ].map((color) => (
                  <div key={color.name} className="hexsec-color-card">
                    <div className="hexsec-color-swatch" style={{ background: color.value }}></div>
                    <div className="hexsec-color-name">{color.name}</div>
                    <div className="hexsec-color-value">{color.value}</div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ marginBottom: '24px' }}>
              <p className="hexsec-type-label">Text</p>
              <div className="hexsec-color-grid">
                {[
                  { name: 'Primary', value: '#f5f7fb' },
                  { name: 'Secondary', value: '#c4c9d4' },
                  { name: 'Muted', value: '#8b93a5' },
                ].map((color) => (
                  <div key={color.name} className="hexsec-color-card">
                    <div className="hexsec-color-swatch" style={{ background: color.value }}></div>
                    <div className="hexsec-color-name">{color.name}</div>
                    <div className="hexsec-color-value">{color.value}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="hexsec-type-label">Accents</p>
              <div className="hexsec-color-grid">
                {[
                  { name: 'Lime', value: '#b7ff3c' },
                  { name: 'Lime Deep', value: '#8be21a' },
                  { name: 'Cyan', value: '#4fd7ff' },
                  { name: 'Amber', value: '#ffb23f' },
                  { name: 'Red', value: '#ff4d5e' },
                ].map((color) => (
                  <div key={color.name} className="hexsec-color-card">
                    <div className="hexsec-color-swatch" style={{ background: color.value }}></div>
                    <div className="hexsec-color-name">{color.name}</div>
                    <div className="hexsec-color-value">{color.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="hexsec-section">
            <h2 className="hexsec-section-title">Typography Scale</h2>
            <div className="hexsec-type-sample">
              <div className="hexsec-type-label">H1 - Hero Title</div>
              <div className="hexsec-h1">Security posture at a glance.</div>
            </div>
            <div className="hexsec-type-sample">
              <div className="hexsec-type-label">H2 - Section Title</div>
              <div className="hexsec-h2">Live anomaly detection</div>
            </div>
            <div className="hexsec-type-sample">
              <div className="hexsec-type-label">H3 - Card Title</div>
              <div className="hexsec-h3">Suspicious session cluster</div>
            </div>
            <div className="hexsec-type-sample">
              <div className="hexsec-type-label">H4 - Subtitle</div>
              <div className="hexsec-h4">Auth chain monitoring</div>
            </div>
            <div className="hexsec-type-sample">
              <div className="hexsec-type-label">Body Large</div>
              <p className="hexsec-body-large">
                Hex Security surfaces the few signals that matter most, blending streaming telemetry with curated risk
                scoring so your team can respond faster.
              </p>
            </div>
            <div className="hexsec-type-sample">
              <div className="hexsec-type-label">Body</div>
              <p className="hexsec-body">
                Every workflow is tuned for clarity: clean grid alignment, readable contrast, and a deliberate spacing
                system that keeps noise low.
              </p>
            </div>
            <div className="hexsec-type-sample">
              <div className="hexsec-type-label">Code</div>
              <code className="hexsec-code">rule: anomaly_rate &gt; 1.8 - window: 5m</code>
            </div>
            <div className="hexsec-type-sample">
              <div className="hexsec-type-label">Caption</div>
              <p className="hexsec-caption">Last refreshed 90 seconds ago</p>
            </div>
          </section>

          <section className="hexsec-section">
            <h2 className="hexsec-section-title">Buttons & Interactive Elements</h2>
            <div className="hexsec-button-row">
              <button className="hexsec-btn hexsec-btn-primary">Primary</button>
              <button className="hexsec-btn hexsec-btn-secondary">Secondary</button>
              <button className="hexsec-btn hexsec-btn-ghost">Ghost</button>
              <button className="hexsec-btn hexsec-btn-disabled" disabled>Disabled</button>
              <a className="hexsec-link">Read the playbook -&gt;</a>
            </div>
          </section>

          <section className="hexsec-section">
            <h2 className="hexsec-section-title">Cards</h2>
            <div className="hexsec-cards-grid">
              {[
                { icon: 'SAT', title: 'Sensor Grid', text: 'Track every endpoint and identity with continuous signal coverage.' },
                { icon: 'NAV', title: 'Path Insights', text: 'Map suspicious paths from entry point to privilege escalation.' },
                { icon: 'RAP', title: 'Rapid Response', text: 'Trigger automated containment within your defined guardrails.' },
              ].map((card) => (
                <div key={card.title} className="hexsec-card">
                  <div className="hexsec-card-header">
                    <div className="hexsec-card-icon">{card.icon}</div>
                    <span className="hexsec-badge hexsec-badge-watch">Live</span>
                  </div>
                  <div className="hexsec-card-title">{card.title}</div>
                  <p className="hexsec-card-text">{card.text}</p>
                  <a className="hexsec-link">View details -&gt;</a>
                </div>
              ))}
            </div>
          </section>

          <section className="hexsec-section">
            <h2 className="hexsec-section-title">Form Elements</h2>
            <div style={{ maxWidth: '480px' }}>
              <div className="hexsec-form-group">
                <label className="hexsec-label">Investigation Name</label>
                <input className="hexsec-input" type="text" placeholder="Credential Access Sweep" />
              </div>
              <div className="hexsec-form-group">
                <label className="hexsec-label">Region Filter (Error)</label>
                <input className="hexsec-input hexsec-input-error" type="text" placeholder="Select a region" />
                <div className="hexsec-error-text">No telemetry detected for this region.</div>
              </div>
              <div className="hexsec-form-group hexsec-checkbox">
                <input type="checkbox" id="auto-triage" defaultChecked />
                <label htmlFor="auto-triage">Enable automated triage recommendations</label>
              </div>
              <div className="hexsec-form-group">
                <label className="hexsec-label">Response Strategy</label>
                <select className="hexsec-input">
                  <option>Observe only</option>
                  <option>Notify analyst</option>
                  <option>Isolate endpoint</option>
                  <option>Lock account</option>
                </select>
              </div>
              <button className="hexsec-btn hexsec-btn-primary">Create investigation</button>
            </div>
          </section>

          <section className="hexsec-section">
            <h2 className="hexsec-section-title">Feedback & Status</h2>
            <div style={{ maxWidth: '560px' }}>
              <div className="hexsec-alert hexsec-alert-success">OK: All sensors synced within the last 2 minutes.</div>
              <div className="hexsec-alert hexsec-alert-error">ERR: Credential theft pattern confirmed in zone 3.</div>
              <div className="hexsec-alert hexsec-alert-warning">WARN: Elevated failed logins from a new ASN.</div>
              <div className="hexsec-alert hexsec-alert-info">INFO: Risk score recalculated with latest telemetry.</div>

              <div className="hexsec-progress">
                <div className="hexsec-progress-head">
                  <span>Investigation readiness</span>
                  <span>65%</span>
                </div>
                <div className="hexsec-progress-bar">
                  <div className="hexsec-progress-fill"></div>
                </div>
              </div>
            </div>
          </section>

          <section className="hexsec-section">
            <h2 className="hexsec-section-title">Sample Content Layout</h2>
            <div className="hexsec-sample-list">
              {[
                { icon: 'AI', title: 'AI-flagged session cluster', meta: 'Detections - 7 alerts', badge: 'Active' },
                { icon: 'ZT', title: 'Zero-trust boundary scan', meta: 'Policy - 3 anomalies', badge: 'Watching' },
                { icon: 'NET', title: 'External access spike', meta: 'Network - 2 risk paths', badge: 'Risk' },
              ].map((item) => (
                <div key={item.title} className="hexsec-sample-item">
                  <div className="hexsec-sample-meta">
                    <div className="hexsec-sample-icon">{item.icon}</div>
                    <div>
                      <div style={{ fontSize: '15px', fontWeight: 600 }}>{item.title}</div>
                      <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{item.meta}</div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                    <span className={`hexsec-badge ${
                      item.badge === 'Active'
                        ? 'hexsec-badge-active'
                        : item.badge === 'Risk'
                          ? 'hexsec-badge-risk'
                          : 'hexsec-badge-watch'
                    }`}>{item.badge}</span>
                    <button className="hexsec-btn hexsec-btn-ghost">Open</button>
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
