import React from 'react';

const cssStyles = `
  .xlow-showcase {
    --xlow-bg: #ffffff;
    --xlow-surface: #f7f9fb;
    --xlow-panel: #ffffff;
    --xlow-divider: #e6ecf0;
    --xlow-text: #0f1419;
    --xlow-text-secondary: #536471;
    --xlow-text-muted: #8899a6;
    --xlow-inverse: #ffffff;
    --xlow-blue: #1d9bf0;
    --xlow-blue-soft: #e8f4fd;
    --xlow-green: #00ba7c;
    --xlow-orange: #f59e0b;
    --xlow-red: #f4212e;
    --xlow-shadow-soft: 0 8px 24px rgba(15, 20, 25, 0.08);
    --xlow-shadow-lift: 0 16px 32px rgba(15, 20, 25, 0.12);
    --xlow-radius-pill: 999px;
    --xlow-radius-card: 16px;
    --xlow-radius-input: 12px;
    --xlow-radius-badge: 10px;
    --xlow-duration: 180ms;
    --xlow-duration-slow: 240ms;
    --xlow-ease: cubic-bezier(0.2, 0.8, 0.2, 1);
    background: var(--xlow-bg);
    color: var(--xlow-text);
    font-family: 'Plus Jakarta Sans', 'SF Pro Text', 'Segoe UI', sans-serif;
    padding: 56px 24px 120px;
  }

  .xlow-container {
    max-width: 1100px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 96px;
  }

  .xlow-hairline {
    height: 1px;
    width: 100%;
    background: var(--xlow-divider);
  }

  .xlow-section {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  .xlow-section-title {
    font-size: 32px;
    font-weight: 700;
    letter-spacing: -0.01em;
    margin: 0;
  }

  .xlow-section-subtitle {
    color: var(--xlow-text-secondary);
    font-size: 16px;
    margin: 8px 0 0;
    max-width: 640px;
  }

  .xlow-hero {
    display: grid;
    grid-template-columns: minmax(0, 1.1fr) minmax(0, 0.9fr);
    gap: 48px;
    align-items: center;
  }

  .xlow-hero h1 {
    font-size: 48px;
    font-weight: 700;
    letter-spacing: -0.02em;
    line-height: 1.05;
    margin: 0 0 16px;
  }

  .xlow-hero p {
    font-size: 16px;
    color: var(--xlow-text-secondary);
    line-height: 1.6;
    margin: 0 0 24px;
  }

  .xlow-hero-cta {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
  }

  .xlow-btn {
    border: none;
    border-radius: var(--xlow-radius-pill);
    font-weight: 600;
    font-size: 14px;
    padding: 12px 22px;
    cursor: pointer;
    transition: transform var(--xlow-duration) var(--xlow-ease), box-shadow var(--xlow-duration) var(--xlow-ease), background var(--xlow-duration) var(--xlow-ease);
    position: relative;
    overflow: hidden;
  }

  .xlow-btn-primary {
    background: var(--xlow-blue);
    color: var(--xlow-inverse);
    box-shadow: 0 0 0 0 rgba(29, 155, 240, 0.25);
  }

  .xlow-btn-primary::after {
    content: '';
    position: absolute;
    inset: 3px;
    border-radius: inherit;
    border: 1px solid rgba(255, 255, 255, 0.45);
    opacity: 0;
    transition: opacity var(--xlow-duration) var(--xlow-ease);
  }

  .xlow-btn-primary:hover {
    background: #1482cc;
    box-shadow: 0 0 0 6px rgba(29, 155, 240, 0.15);
  }

  .xlow-btn-primary:hover::after {
    opacity: 1;
  }

  .xlow-btn-secondary {
    background: var(--xlow-blue-soft);
    color: var(--xlow-blue);
  }

  .xlow-btn-secondary span {
    position: relative;
  }

  .xlow-btn-secondary span::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -4px;
    height: 2px;
    width: 0;
    background: var(--xlow-blue);
    transition: width var(--xlow-duration) var(--xlow-ease);
  }

  .xlow-btn-secondary:hover span::after {
    width: 100%;
  }

  .xlow-btn-ghost {
    background: transparent;
    color: var(--xlow-text-secondary);
    border: 1px solid var(--xlow-divider);
  }

  .xlow-btn-ghost:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .xlow-ring-stack {
    display: grid;
    gap: 16px;
  }

  .xlow-ring-card {
    background: var(--xlow-panel);
    border: 1px solid var(--xlow-divider);
    border-radius: var(--xlow-radius-card);
    padding: 20px;
    box-shadow: var(--xlow-shadow-soft);
  }

  .xlow-ring-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
  }

  .xlow-tabs {
    display: flex;
    gap: 16px;
    position: relative;
  }

  .xlow-tab {
    font-size: 14px;
    font-weight: 600;
    color: var(--xlow-text-secondary);
    padding-bottom: 10px;
    position: relative;
    cursor: pointer;
  }

  .xlow-tab::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    height: 3px;
    width: 0;
    background: var(--xlow-blue);
    border-radius: 999px;
    transition: width var(--xlow-duration) var(--xlow-ease);
  }

  .xlow-tab.active {
    color: var(--xlow-text);
  }

  .xlow-tab.active::after {
    width: 100%;
  }

  .xlow-avatar-row {
    display: flex;
    gap: 6px;
    align-items: center;
  }

  .xlow-avatar {
    width: 34px;
    height: 34px;
    border-radius: 50%;
    background: linear-gradient(135deg, #e8f4fd, #ffffff);
    border: 2px solid var(--xlow-blue-soft);
    display: grid;
    place-items: center;
    color: var(--xlow-blue);
    font-weight: 700;
    font-size: 12px;
  }

  .xlow-ringed {
    border: 2px solid var(--xlow-blue-soft);
    box-shadow: inset 0 0 0 2px rgba(29, 155, 240, 0.15);
  }

  .xlow-palette {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 16px;
  }

  .xlow-swatch {
    border-radius: 14px;
    padding: 14px;
    border: 1px solid var(--xlow-divider);
    background: var(--xlow-panel);
  }

  .xlow-swatch-color {
    height: 64px;
    border-radius: 12px;
    margin-bottom: 12px;
  }

  .xlow-typography {
    display: grid;
    gap: 18px;
  }

  .xlow-typography h2,
  .xlow-typography h3,
  .xlow-typography h4,
  .xlow-typography h5,
  .xlow-typography h6 {
    margin: 0;
  }

  .xlow-btn-row {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
  }

  .xlow-card-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 18px;
  }

  .xlow-card {
    position: relative;
    border-radius: var(--xlow-radius-card);
    border: 1px solid var(--xlow-divider);
    padding: 20px;
    background: var(--xlow-panel);
    transition: transform var(--xlow-duration) var(--xlow-ease), box-shadow var(--xlow-duration) var(--xlow-ease), border-color var(--xlow-duration) var(--xlow-ease);
    overflow: hidden;
  }

  .xlow-card::after {
    content: '';
    position: absolute;
    inset: 8px;
    border-radius: 14px;
    border: 1px solid rgba(29, 155, 240, 0.35);
    opacity: 0;
    transition: opacity var(--xlow-duration) var(--xlow-ease);
    pointer-events: none;
  }

  .xlow-card:hover {
    transform: translateY(-4px);
    box-shadow: var(--xlow-shadow-lift);
    border-color: rgba(29, 155, 240, 0.35);
  }

  .xlow-card:hover::after {
    opacity: 1;
  }

  .xlow-card-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 12px;
  }

  .xlow-pill {
    background: var(--xlow-blue-soft);
    color: var(--xlow-blue);
    border-radius: var(--xlow-radius-pill);
    padding: 4px 10px;
    font-size: 12px;
    font-weight: 600;
  }

  .xlow-form {
    display: grid;
    gap: 16px;
    max-width: 540px;
  }

  .xlow-label {
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--xlow-text-muted);
  }

  .xlow-input,
  .xlow-select {
    width: 100%;
    border: 1px solid var(--xlow-divider);
    border-radius: var(--xlow-radius-input);
    padding: 12px 14px;
    font-size: 14px;
    background: var(--xlow-surface);
    color: var(--xlow-text);
    transition: border-color var(--xlow-duration) var(--xlow-ease), box-shadow var(--xlow-duration) var(--xlow-ease);
  }

  .xlow-input:focus,
  .xlow-select:focus {
    outline: none;
    border-color: var(--xlow-blue);
    box-shadow: 0 0 0 4px rgba(29, 155, 240, 0.15);
  }

  .xlow-input-error {
    border-color: var(--xlow-red);
    box-shadow: 0 0 0 4px rgba(244, 33, 46, 0.1);
  }

  .xlow-check {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .xlow-check input {
    width: 18px;
    height: 18px;
    accent-color: var(--xlow-blue);
  }

  .xlow-alerts {
    display: grid;
    gap: 12px;
  }

  .xlow-alert {
    border-radius: 14px;
    padding: 14px 16px;
    border: 1px solid var(--xlow-divider);
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: var(--xlow-panel);
  }

  .xlow-alert strong {
    font-size: 14px;
  }

  .xlow-progress {
    height: 10px;
    background: var(--xlow-divider);
    border-radius: 999px;
    overflow: hidden;
  }

  .xlow-progress span {
    display: block;
    height: 100%;
    width: 65%;
    background: var(--xlow-blue);
    border-radius: inherit;
  }

  .xlow-content {
    border-radius: var(--xlow-radius-card);
    border: 1px solid var(--xlow-divider);
    background: var(--xlow-panel);
    padding: 24px;
    display: grid;
    gap: 16px;
  }

  .xlow-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    padding-bottom: 12px;
    border-bottom: 1px solid var(--xlow-divider);
  }

  .xlow-row:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }

  .xlow-badge {
    border-radius: var(--xlow-radius-badge);
    padding: 4px 10px;
    font-size: 12px;
    font-weight: 600;
    background: var(--xlow-blue-soft);
    color: var(--xlow-blue);
  }

  .xlow-muted {
    color: var(--xlow-text-muted);
  }

  .xlow-meta {
    display: flex;
    gap: 12px;
    align-items: center;
  }

  @media (max-width: 900px) {
    .xlow-hero {
      grid-template-columns: 1fr;
    }
  }
`;

export default function DesignShowcase() {
  return (
    <>
      <style>{cssStyles}</style>
      <main className="xlow-showcase">
        <div className="xlow-container">
          <section className="xlow-hero">
            <div>
              <h1>X-Low</h1>
              <p>
                A bright, scan-first UI language built on hairline rules, ringed circles, and pill tabs. The
                motif system keeps timelines calm without losing personality.
              </p>
              <div className="xlow-hero-cta">
                <button className="xlow-btn xlow-btn-primary">Post update</button>
                <button className="xlow-btn xlow-btn-secondary"><span>Explore feed</span></button>
                <button className="xlow-btn xlow-btn-ghost">Quiet mode</button>
              </div>
            </div>
            <div className="xlow-ring-stack">
              <div className="xlow-ring-card">
                <div className="xlow-ring-header">
                  <div>
                    <div className="xlow-section-title" style={{ fontSize: '22px', marginBottom: 4 }}>Notifications</div>
                    <div className="xlow-muted" style={{ fontSize: '13px' }}>Timeline-ready, low-noise alerts</div>
                  </div>
                  <div className="xlow-avatar xlow-ringed">X</div>
                </div>
                <div className="xlow-tabs">
                  <div className="xlow-tab active">All</div>
                  <div className="xlow-tab">Mentions</div>
                  <div className="xlow-tab">Verified</div>
                </div>
                <div className="xlow-hairline" style={{ margin: '16px 0' }} />
                <div className="xlow-avatar-row">
                  <div className="xlow-avatar">JS</div>
                  <div className="xlow-avatar">LK</div>
                  <div className="xlow-avatar">TR</div>
                  <span className="xlow-muted" style={{ fontSize: '13px' }}>4 new rings</span>
                </div>
              </div>
            </div>
          </section>

          <section className="xlow-section">
            <div>
              <h2 className="xlow-section-title">Color Palette</h2>
              <p className="xlow-section-subtitle">Neutral surfaces with a confident blue accent keep density readable.</p>
            </div>
            <div className="xlow-palette">
              {[
                { name: 'Background', value: '#ffffff' },
                { name: 'Surface', value: '#f7f9fb' },
                { name: 'Panel', value: '#ffffff' },
                { name: 'Divider', value: '#e6ecf0' },
                { name: 'Text Primary', value: '#0f1419' },
                { name: 'Text Secondary', value: '#536471' },
                { name: 'Muted', value: '#8899a6' },
                { name: 'Blue', value: '#1d9bf0' },
                { name: 'Blue Soft', value: '#e8f4fd' },
                { name: 'Green', value: '#00ba7c' },
                { name: 'Orange', value: '#f59e0b' },
                { name: 'Red', value: '#f4212e' },
              ].map((color) => (
                <div key={color.name} className="xlow-swatch">
                  <div className="xlow-swatch-color" style={{ background: color.value }} />
                  <div style={{ fontWeight: 600 }}>{color.name}</div>
                  <div className="xlow-muted" style={{ fontSize: '12px' }}>{color.value}</div>
                </div>
              ))}
            </div>
          </section>

          <section className="xlow-section">
            <div>
              <h2 className="xlow-section-title">Typography Scale</h2>
              <p className="xlow-section-subtitle">High-contrast headers and relaxed body text match scanning behavior.</p>
            </div>
            <div className="xlow-typography">
              <h1 style={{ fontSize: '48px', margin: 0, letterSpacing: '-0.02em' }}>Hero Title · 48px</h1>
              <h2 style={{ fontSize: '32px' }}>Section Title · 32px</h2>
              <h3 style={{ fontSize: '24px' }}>Headline · 24px</h3>
              <h4 style={{ fontSize: '20px' }}>Subhead · 20px</h4>
              <h5 style={{ fontSize: '18px' }}>Card Title · 18px</h5>
              <h6 style={{ fontSize: '16px' }}>Body · 16px</h6>
              <p style={{ fontSize: '16px', lineHeight: 1.6, maxWidth: 640, margin: 0 }}>
                The X-Low system balances compact density with clarity. Line height keeps text airy enough to scan quickly
                while headings anchor the visual rhythm in every section.
              </p>
              <p className="xlow-muted" style={{ fontSize: '14px', margin: 0 }}>Small · 14px · Medium</p>
              <p style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.08em', margin: 0 }}>Caption · 12px</p>
            </div>
          </section>

          <section className="xlow-section">
            <div>
              <h2 className="xlow-section-title">Buttons & Interactive Elements</h2>
              <p className="xlow-section-subtitle">Primary actions glow, while secondary actions show underline sweeps.</p>
            </div>
            <div className="xlow-btn-row">
              <button className="xlow-btn xlow-btn-primary">Primary</button>
              <button className="xlow-btn xlow-btn-secondary"><span>Secondary</span></button>
              <button className="xlow-btn xlow-btn-primary" style={{ background: 'var(--xlow-green)' }}>Success</button>
              <button className="xlow-btn xlow-btn-ghost" disabled>Disabled</button>
              <a className="xlow-btn xlow-btn-secondary" href="#"><span>Text Link</span></a>
            </div>
          </section>

          <section className="xlow-section">
            <div>
              <h2 className="xlow-section-title">Cards</h2>
              <p className="xlow-section-subtitle">Ring overlays and hairline rules bring soft structure to dense layouts.</p>
            </div>
            <div className="xlow-card-grid">
              {[
                { title: 'Notifications', desc: 'Keep alerts readable with ringed avatars and micro copy.' },
                { title: 'Who to follow', desc: 'Sidebar cards with pill actions and quick context.' },
                { title: 'Trending', desc: 'Topic clusters separated by hairline rules.' },
              ].map((card) => (
                <div key={card.title} className="xlow-card">
                  <div className="xlow-card-header">
                    <div className="xlow-avatar">XL</div>
                    <span className="xlow-pill">New</span>
                  </div>
                  <div style={{ fontWeight: 600, marginBottom: 8 }}>{card.title}</div>
                  <div className="xlow-muted" style={{ fontSize: '14px', lineHeight: 1.5 }}>{card.desc}</div>
                  <div style={{ marginTop: 12 }}>
                    <button className="xlow-btn xlow-btn-secondary"><span>Open</span></button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="xlow-section">
            <div>
              <h2 className="xlow-section-title">Form Elements</h2>
              <p className="xlow-section-subtitle">Inputs echo the soft panels and glow with the blue ring on focus.</p>
            </div>
            <div className="xlow-form">
              <label className="xlow-label">Search</label>
              <input className="xlow-input" placeholder="Search timeline" />
              <label className="xlow-label">Handle (error)</label>
              <input className="xlow-input xlow-input-error" placeholder="@username" value="@xlow" readOnly />
              <div className="xlow-check">
                <input type="checkbox" defaultChecked />
                <span>Mute suggested posts</span>
              </div>
              <select className="xlow-select" defaultValue="all">
                <option value="all">All notifications</option>
                <option value="mentions">Mentions</option>
                <option value="verified">Verified only</option>
              </select>
              <button className="xlow-btn xlow-btn-primary">Save preferences</button>
            </div>
          </section>

          <section className="xlow-section">
            <div>
              <h2 className="xlow-section-title">Feedback & Status</h2>
              <p className="xlow-section-subtitle">Clean status surfaces with colored accents keep attention precise.</p>
            </div>
            <div className="xlow-alerts">
              <div className="xlow-alert">
                <strong style={{ color: 'var(--xlow-green)' }}>Success</strong>
                <span className="xlow-muted">Timeline refreshed</span>
              </div>
              <div className="xlow-alert">
                <strong style={{ color: 'var(--xlow-red)' }}>Error</strong>
                <span className="xlow-muted">Message failed to send</span>
              </div>
              <div className="xlow-alert">
                <strong style={{ color: 'var(--xlow-orange)' }}>Warning</strong>
                <span className="xlow-muted">Slow connection detected</span>
              </div>
              <div className="xlow-alert">
                <strong style={{ color: 'var(--xlow-blue)' }}>Info</strong>
                <span className="xlow-muted">New topics ready</span>
              </div>
              <div className="xlow-progress"><span /></div>
            </div>
          </section>

          <section className="xlow-section">
            <div>
              <h2 className="xlow-section-title">Sample Content Layout</h2>
              <p className="xlow-section-subtitle">A timeline-inspired layout with rules, rings, and pill tabs.</p>
            </div>
            <div className="xlow-content">
              <div className="xlow-row">
                <div className="xlow-meta">
                  <div className="xlow-avatar">AL</div>
                  <div>
                    <div style={{ fontWeight: 600 }}>Alex liked your reply</div>
                    <div className="xlow-muted" style={{ fontSize: '13px' }}>12m · Following</div>
                  </div>
                </div>
                <span className="xlow-badge">Active</span>
              </div>
              <div className="xlow-row">
                <div className="xlow-meta">
                  <div className="xlow-avatar">RB</div>
                  <div>
                    <div style={{ fontWeight: 600 }}>Riley mentioned you</div>
                    <div className="xlow-muted" style={{ fontSize: '13px' }}>42m · Mentions</div>
                  </div>
                </div>
                <span className="xlow-badge" style={{ background: 'rgba(244,33,46,0.1)', color: 'var(--xlow-red)' }}>Alert</span>
              </div>
              <div className="xlow-row">
                <div className="xlow-meta">
                  <div className="xlow-avatar">TM</div>
                  <div>
                    <div style={{ fontWeight: 600 }}>Team digest is ready</div>
                    <div className="xlow-muted" style={{ fontSize: '13px' }}>1h · Digest</div>
                  </div>
                </div>
                <div className="xlow-btn-row">
                  <button className="xlow-btn xlow-btn-secondary"><span>Open</span></button>
                  <button className="xlow-btn xlow-btn-ghost">Dismiss</button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
