import React from 'react';

const cssStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=DM+Mono:wght@400;500&display=swap');

  .hex-showcase {
    /* Color Tokens */
    --bg-primary: #f7f7f7;
    --bg-white: #ffffff;
    --bg-subtle: #eeeeee;

    --text-primary: #000000;
    --text-secondary: #5e5e5e;
    --text-muted: #888888;

    --accent-cyan: #0099ff;
    --accent-cyan-hover: #0088ee;
    --accent-orange: #ff8b17;
    --accent-red: #ff312f;
    --accent-green: #00c853;

    --border-default: #e0e0e0;
    --border-subtle: #ebebeb;

    /* Typography */
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    background: var(--bg-primary);
    color: var(--text-primary);
    min-height: 100vh;
    padding: 48px 24px;
    -webkit-font-smoothing: antialiased;
  }

  .hex-container {
    max-width: 1340px;
    margin: 0 auto;
  }

  .hex-section {
    background: var(--bg-white);
    border-radius: 16px;
    padding: 32px;
    margin-bottom: 24px;
    border: 1px solid var(--border-default);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  }

  .hex-section-title {
    font-size: 12px;
    font-weight: 500;
    color: var(--text-muted);
    margin-bottom: 24px;
    padding-bottom: 16px;
    border-bottom: 1px solid var(--border-subtle);
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  /* Hero Section */
  .hex-hero {
    text-align: center;
    padding: 80px 40px;
    background: var(--bg-white);
    position: relative;
    overflow: hidden;
  }

  .hex-hero::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, var(--accent-cyan), var(--accent-orange), var(--accent-red));
  }

  .hex-hero-title {
    font-size: 56px;
    font-weight: 700;
    color: var(--text-primary);
    letter-spacing: -0.02em;
    line-height: 1.1;
    margin-bottom: 16px;
  }

  .hex-hero-subtitle {
    font-size: 18px;
    color: var(--text-secondary);
    line-height: 1.6;
    margin-bottom: 32px;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }

  .hex-hero-actions {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
  }

  /* Buttons */
  .hex-btn {
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    font-weight: 500;
    padding: 12px 24px;
    border-radius: 100px;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-out;
    display: inline-flex;
    align-items: center;
    gap: 8px;
  }

  .hex-btn-primary {
    background: var(--accent-cyan);
    color: #ffffff;
  }

  .hex-btn-primary:hover {
    background: var(--accent-cyan-hover);
  }

  .hex-btn-secondary {
    background: var(--bg-white);
    color: var(--text-primary);
    border: 1px solid var(--border-default);
  }

  .hex-btn-secondary:hover {
    background: var(--bg-primary);
  }

  .hex-btn-ghost {
    background: transparent;
    color: var(--text-secondary);
  }

  .hex-btn-ghost:hover {
    color: var(--text-primary);
  }

  .hex-btn-disabled {
    background: var(--bg-subtle);
    color: var(--text-muted);
    cursor: not-allowed;
  }

  .hex-link-btn {
    background: none;
    border: none;
    color: var(--accent-cyan);
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    transition: color 0.2s ease-out;
    text-decoration: none;
  }

  .hex-link-btn:hover {
    text-decoration: underline;
  }

  /* Color Palette Grid */
  .hex-color-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    gap: 16px;
  }

  .hex-color-swatch {
    text-align: center;
  }

  .hex-color-box {
    width: 100%;
    height: 80px;
    border-radius: 12px;
    margin-bottom: 10px;
    border: 1px solid var(--border-subtle);
  }

  .hex-color-name {
    font-size: 13px;
    font-weight: 500;
    color: var(--text-primary);
    margin-bottom: 4px;
  }

  .hex-color-hex {
    font-size: 12px;
    color: var(--text-muted);
    font-family: 'DM Mono', monospace;
  }

  /* Typography */
  .hex-type-sample {
    margin-bottom: 24px;
    padding-bottom: 20px;
    border-bottom: 1px solid var(--border-subtle);
  }

  .hex-type-sample:last-child {
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 0;
  }

  .hex-type-label {
    font-size: 12px;
    color: var(--text-muted);
    margin-bottom: 10px;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .hex-h1-sample { font-size: 56px; font-weight: 700; letter-spacing: -0.02em; color: var(--text-primary); line-height: 1.1; }
  .hex-h2-sample { font-size: 40px; font-weight: 600; letter-spacing: -0.02em; color: var(--text-primary); }
  .hex-h3-sample { font-size: 24px; font-weight: 600; color: var(--text-primary); }
  .hex-h4-sample { font-size: 20px; font-weight: 600; color: var(--text-primary); }
  .hex-body-large { font-size: 18px; line-height: 1.6; color: var(--text-secondary); }
  .hex-body-regular { font-size: 16px; line-height: 1.6; color: var(--text-secondary); }
  .hex-body-small { font-size: 14px; line-height: 1.5; color: var(--text-muted); }
  .hex-caption { font-size: 12px; line-height: 1.4; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.05em; }
  .hex-code { font-size: 14px; font-family: 'DM Mono', monospace; color: var(--text-primary); background: var(--bg-primary); padding: 2px 6px; border-radius: 4px; }

  /* Buttons Grid */
  .hex-buttons-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    align-items: center;
  }

  /* Cards */
  .hex-cards-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
  }

  .hex-card {
    background: var(--bg-white);
    border: 1px solid var(--border-default);
    border-radius: 16px;
    overflow: hidden;
    transition: all 0.2s ease-out;
    position: relative;
  }

  .hex-card:hover {
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  }

  .hex-card-accent {
    position: absolute;
    top: 0;
    left: 0;
    width: 10px;
    height: 10px;
    border-bottom-right-radius: 10px;
  }

  .hex-card-accent-cyan { background: var(--accent-cyan); }
  .hex-card-accent-orange { background: var(--accent-orange); }
  .hex-card-accent-green { background: var(--accent-green); }
  .hex-card-accent-red { background: var(--accent-red); }

  .hex-card-header {
    padding: 20px 24px;
    background: var(--bg-primary);
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid var(--border-subtle);
  }

  .hex-card-header-title {
    font-size: 12px;
    font-weight: 500;
    color: var(--text-muted);
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .hex-card-body {
    padding: 24px;
  }

  .hex-card-title {
    font-size: 18px;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 8px;
  }

  .hex-card-text {
    font-size: 14px;
    color: var(--text-secondary);
    line-height: 1.5;
    margin-bottom: 16px;
  }

  /* Badges */
  .hex-badge {
    display: inline-flex;
    align-items: center;
    padding: 4px 12px;
    border-radius: 100px;
    font-size: 12px;
    font-weight: 500;
  }

  .hex-badge-cyan {
    background: rgba(0, 153, 255, 0.1);
    color: var(--accent-cyan);
  }

  .hex-badge-orange {
    background: rgba(255, 139, 23, 0.1);
    color: var(--accent-orange);
  }

  .hex-badge-green {
    background: rgba(0, 200, 83, 0.1);
    color: var(--accent-green);
  }

  .hex-badge-red {
    background: rgba(255, 49, 47, 0.1);
    color: var(--accent-red);
  }

  .hex-badge-gray {
    background: var(--bg-subtle);
    color: var(--text-secondary);
  }

  /* Forms */
  .hex-form-group {
    margin-bottom: 20px;
  }

  .hex-form-label {
    display: block;
    font-size: 13px;
    font-weight: 500;
    color: var(--text-primary);
    margin-bottom: 8px;
  }

  .hex-form-input {
    width: 100%;
    padding: 12px 16px;
    font-size: 14px;
    font-family: 'Inter', sans-serif;
    border: 1px solid var(--border-default);
    border-radius: 8px;
    background: var(--bg-white);
    color: var(--text-primary);
    transition: all 0.2s ease-out;
  }

  .hex-form-input::placeholder {
    color: var(--text-muted);
  }

  .hex-form-input:focus {
    outline: none;
    border-color: var(--accent-cyan);
  }

  .hex-form-input.hex-error {
    border-color: var(--accent-red);
  }

  .hex-error-message {
    font-size: 12px;
    color: var(--accent-red);
    margin-top: 6px;
  }

  .hex-checkbox-group {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .hex-checkbox {
    width: 18px;
    height: 18px;
    border: 1px solid var(--border-default);
    border-radius: 4px;
    background: var(--bg-white);
    cursor: pointer;
    accent-color: var(--accent-cyan);
  }

  /* Alerts */
  .hex-alert {
    padding: 14px 16px;
    border-radius: 12px;
    margin-bottom: 12px;
    font-size: 14px;
    display: flex;
    align-items: center;
    gap: 10px;
    border: 1px solid;
  }

  .hex-alert-success {
    background: rgba(0, 200, 83, 0.08);
    color: var(--accent-green);
    border-color: rgba(0, 200, 83, 0.2);
  }

  .hex-alert-error {
    background: rgba(255, 49, 47, 0.08);
    color: var(--accent-red);
    border-color: rgba(255, 49, 47, 0.2);
  }

  .hex-alert-warning {
    background: rgba(255, 139, 23, 0.08);
    color: var(--accent-orange);
    border-color: rgba(255, 139, 23, 0.2);
  }

  .hex-alert-info {
    background: rgba(0, 153, 255, 0.08);
    color: var(--accent-cyan);
    border-color: rgba(0, 153, 255, 0.2);
  }

  /* Progress Bar */
  .hex-progress-container {
    margin-top: 24px;
  }

  .hex-progress-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
  }

  .hex-progress-label {
    font-size: 13px;
    color: var(--text-secondary);
  }

  .hex-progress-value {
    font-size: 14px;
    font-weight: 500;
    color: var(--text-primary);
  }

  .hex-progress {
    width: 100%;
    height: 8px;
    background: var(--bg-subtle);
    border-radius: 4px;
    overflow: hidden;
  }

  .hex-progress-fill {
    height: 100%;
    background: linear-gradient(90deg, var(--accent-cyan), var(--accent-green));
    border-radius: 4px;
    transition: width 0.3s ease;
  }

  /* Data Table */
  .hex-data-list {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .hex-data-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 20px;
    background: var(--bg-primary);
    border-radius: 12px;
    border: 1px solid var(--border-subtle);
    transition: all 0.2s ease-out;
  }

  .hex-data-item:hover {
    border-color: var(--border-default);
    background: var(--bg-white);
  }

  .hex-data-info {
    display: flex;
    align-items: center;
    gap: 14px;
    flex: 1;
  }

  .hex-data-icon {
    width: 40px;
    height: 40px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    flex-shrink: 0;
  }

  .hex-data-content {
    flex: 1;
  }

  .hex-data-title {
    font-size: 14px;
    font-weight: 500;
    color: var(--text-primary);
    margin-bottom: 2px;
  }

  .hex-data-subtitle {
    font-size: 13px;
    color: var(--text-muted);
    font-family: 'DM Mono', monospace;
  }

  .hex-data-actions {
    display: flex;
    gap: 12px;
    align-items: center;
  }

  /* Stats Grid */
  .hex-stats-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
    margin-top: 24px;
  }

  .hex-stat-card {
    background: var(--bg-primary);
    border: 1px solid var(--border-subtle);
    border-radius: 12px;
    padding: 20px;
  }

  .hex-stat-label {
    font-size: 12px;
    color: var(--text-muted);
    margin-bottom: 6px;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .hex-stat-value {
    font-size: 32px;
    font-weight: 700;
    letter-spacing: -0.02em;
    color: var(--text-primary);
  }

  .hex-stat-change {
    font-size: 13px;
    font-weight: 500;
    margin-top: 4px;
  }

  .hex-stat-change-positive { color: var(--accent-green); }
  .hex-stat-change-negative { color: var(--accent-red); }

  /* Code Block */
  .hex-code-block {
    background: var(--bg-primary);
    border: 1px solid var(--border-default);
    border-radius: 8px;
    padding: 16px;
    font-family: 'DM Mono', monospace;
    font-size: 14px;
    color: var(--text-primary);
    overflow-x: auto;
  }

  .hex-code-keyword { color: var(--accent-cyan); }
  .hex-code-string { color: var(--accent-orange); }
  .hex-code-comment { color: var(--text-muted); }

  @media (max-width: 768px) {
    .hex-stats-grid {
      grid-template-columns: repeat(2, 1fr);
    }

    .hex-hero-title {
      font-size: 36px;
    }
  }
`;

export default function HexAnalyticsShowcase() {
  return (
    <>
      <style>{cssStyles}</style>
      <main className="hex-showcase">
        <div className="hex-container">
          {/* Hero Section */}
          <section className="hex-section hex-hero">
            <h1 className="hex-hero-title">Hex Analytics</h1>
            <p className="hex-hero-subtitle">
              A sophisticated design system for modern data analytics products. Clean interfaces with technical refinement and bright accent colors.
            </p>
            <div className="hex-hero-actions">
              <button className="hex-btn hex-btn-primary">Get Started</button>
              <button className="hex-btn hex-btn-secondary">View Documentation</button>
            </div>
          </section>

          {/* Color Palette */}
          <section className="hex-section">
            <h2 className="hex-section-title">Color Palette</h2>

            <div style={{ marginBottom: '32px' }}>
              <h3 style={{ fontSize: '13px', fontWeight: '500', marginBottom: '16px', color: '#5e5e5e' }}>Backgrounds</h3>
              <div className="hex-color-grid">
                <div className="hex-color-swatch">
                  <div className="hex-color-box" style={{ background: '#f7f7f7' }}></div>
                  <div className="hex-color-name">Primary</div>
                  <div className="hex-color-hex">#f7f7f7</div>
                </div>
                <div className="hex-color-swatch">
                  <div className="hex-color-box" style={{ background: '#ffffff' }}></div>
                  <div className="hex-color-name">White</div>
                  <div className="hex-color-hex">#ffffff</div>
                </div>
                <div className="hex-color-swatch">
                  <div className="hex-color-box" style={{ background: '#eeeeee' }}></div>
                  <div className="hex-color-name">Subtle</div>
                  <div className="hex-color-hex">#eeeeee</div>
                </div>
              </div>
            </div>

            <div style={{ marginBottom: '32px' }}>
              <h3 style={{ fontSize: '13px', fontWeight: '500', marginBottom: '16px', color: '#5e5e5e' }}>Text Colors</h3>
              <div className="hex-color-grid">
                <div className="hex-color-swatch">
                  <div className="hex-color-box" style={{ background: '#000000' }}></div>
                  <div className="hex-color-name">Primary</div>
                  <div className="hex-color-hex">#000000</div>
                </div>
                <div className="hex-color-swatch">
                  <div className="hex-color-box" style={{ background: '#5e5e5e' }}></div>
                  <div className="hex-color-name">Secondary</div>
                  <div className="hex-color-hex">#5e5e5e</div>
                </div>
                <div className="hex-color-swatch">
                  <div className="hex-color-box" style={{ background: '#888888' }}></div>
                  <div className="hex-color-name">Muted</div>
                  <div className="hex-color-hex">#888888</div>
                </div>
              </div>
            </div>

            <div>
              <h3 style={{ fontSize: '13px', fontWeight: '500', marginBottom: '16px', color: '#5e5e5e' }}>Accent Colors</h3>
              <div className="hex-color-grid">
                <div className="hex-color-swatch">
                  <div className="hex-color-box" style={{ background: '#0099ff' }}></div>
                  <div className="hex-color-name">Cyan</div>
                  <div className="hex-color-hex">#0099ff</div>
                </div>
                <div className="hex-color-swatch">
                  <div className="hex-color-box" style={{ background: '#ff8b17' }}></div>
                  <div className="hex-color-name">Orange</div>
                  <div className="hex-color-hex">#ff8b17</div>
                </div>
                <div className="hex-color-swatch">
                  <div className="hex-color-box" style={{ background: '#00c853' }}></div>
                  <div className="hex-color-name">Green</div>
                  <div className="hex-color-hex">#00c853</div>
                </div>
                <div className="hex-color-swatch">
                  <div className="hex-color-box" style={{ background: '#ff312f' }}></div>
                  <div className="hex-color-name">Red</div>
                  <div className="hex-color-hex">#ff312f</div>
                </div>
              </div>
            </div>
          </section>

          {/* Typography */}
          <section className="hex-section">
            <h2 className="hex-section-title">Typography Scale</h2>
            <div className="hex-type-sample">
              <div className="hex-type-label">H1 - Hero Title</div>
              <h1 className="hex-h1-sample">The magic of data</h1>
            </div>
            <div className="hex-type-sample">
              <div className="hex-type-label">H2 - Section Title</div>
              <h2 className="hex-h2-sample">Collaborative analytics</h2>
            </div>
            <div className="hex-type-sample">
              <div className="hex-type-label">H3 - Card Title</div>
              <h3 className="hex-h3-sample">Built for data teams</h3>
            </div>
            <div className="hex-type-sample">
              <div className="hex-type-label">H4 - Subtitle</div>
              <h4 className="hex-h4-sample">Query, visualize, share</h4>
            </div>
            <div className="hex-type-sample">
              <div className="hex-type-label">Body Large</div>
              <p className="hex-body-large">
                Hex combines the power of a notebook-style editor with beautiful visualizations and
                native app capabilities, enabling data teams to do their best work together.
              </p>
            </div>
            <div className="hex-type-sample">
              <div className="hex-type-label">Body Regular</div>
              <p className="hex-body-regular">
                Write SQL, Python, or use our no-code tools to analyze your data and build interactive apps.
              </p>
            </div>
            <div className="hex-type-sample">
              <div className="hex-type-label">Code Sample</div>
              <code className="hex-code">SELECT * FROM analytics WHERE date &gt; &apos;2024-01-01&apos;</code>
            </div>
            <div className="hex-type-sample">
              <div className="hex-type-label">Caption</div>
              <p className="hex-caption">Last synced 5 minutes ago</p>
            </div>
          </section>

          {/* Buttons */}
          <section className="hex-section">
            <h2 className="hex-section-title">Buttons & Interactive Elements</h2>
            <div className="hex-buttons-grid">
              <button className="hex-btn hex-btn-primary">Primary</button>
              <button className="hex-btn hex-btn-secondary">Secondary</button>
              <button className="hex-btn hex-btn-ghost">Ghost</button>
              <button className="hex-btn hex-btn-disabled" disabled>Disabled</button>
              <a className="hex-link-btn">Learn more →</a>
            </div>
          </section>

          {/* Cards */}
          <section className="hex-section">
            <h2 className="hex-section-title">Cards</h2>
            <div className="hex-cards-grid">
              <div className="hex-card">
                <div className="hex-card-accent hex-card-accent-cyan"></div>
                <div className="hex-card-header">
                  <span className="hex-card-header-title">SQL Query</span>
                  <span className="hex-badge hex-badge-cyan">Active</span>
                </div>
                <div className="hex-card-body">
                  <div className="hex-card-title">Revenue Analysis Q4</div>
                  <div className="hex-card-text">Analyzing quarterly revenue trends across product lines and regions.</div>
                  <a className="hex-link-btn">Open notebook →</a>
                </div>
              </div>

              <div className="hex-card">
                <div className="hex-card-accent hex-card-accent-orange"></div>
                <div className="hex-card-header">
                  <span className="hex-card-header-title">Python</span>
                  <span className="hex-badge hex-badge-orange">Draft</span>
                </div>
                <div className="hex-card-body">
                  <div className="hex-card-title">Customer Segmentation</div>
                  <div className="hex-card-text">Machine learning model for user clustering and behavior analysis.</div>
                  <a className="hex-link-btn">Open notebook →</a>
                </div>
              </div>

              <div className="hex-card">
                <div className="hex-card-accent hex-card-accent-green"></div>
                <div className="hex-card-header">
                  <span className="hex-card-header-title">Dashboard</span>
                  <span className="hex-badge hex-badge-green">Published</span>
                </div>
                <div className="hex-card-body">
                  <div className="hex-card-title">Executive KPIs</div>
                  <div className="hex-card-text">Real-time metrics dashboard for leadership team review.</div>
                  <a className="hex-link-btn">Open notebook →</a>
                </div>
              </div>
            </div>
          </section>

          {/* Form Elements */}
          <section className="hex-section">
            <h2 className="hex-section-title">Form Elements</h2>
            <div style={{ maxWidth: '480px' }}>
              <div className="hex-form-group">
                <label className="hex-form-label">Query Name</label>
                <input type="text" className="hex-form-input" placeholder="Enter a descriptive name..." />
              </div>

              <div className="hex-form-group">
                <label className="hex-form-label">Database Connection (Error State)</label>
                <input type="text" className="hex-form-input hex-error" placeholder="Select a data source..." />
                <div className="hex-error-message">Connection failed. Please check your credentials.</div>
              </div>

              <div className="hex-form-group">
                <div className="hex-checkbox-group">
                  <input type="checkbox" className="hex-checkbox" id="cache" defaultChecked />
                  <label htmlFor="cache" style={{ fontSize: '14px', color: '#5e5e5e' }}>
                    Enable query caching for faster results
                  </label>
                </div>
              </div>

              <div className="hex-form-group">
                <label className="hex-form-label">Output Format</label>
                <select className="hex-form-input">
                  <option>Table</option>
                  <option>Chart</option>
                  <option>JSON</option>
                  <option>CSV Export</option>
                </select>
              </div>

              <button className="hex-btn hex-btn-primary">Run Query</button>
            </div>
          </section>

          {/* Badges */}
          <section className="hex-section">
            <h2 className="hex-section-title">Badges & Status</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '24px' }}>
              <span className="hex-badge hex-badge-cyan">SQL</span>
              <span className="hex-badge hex-badge-orange">Python</span>
              <span className="hex-badge hex-badge-green">Published</span>
              <span className="hex-badge hex-badge-red">Error</span>
              <span className="hex-badge hex-badge-gray">Archived</span>
            </div>

            <div className="hex-progress-container">
              <div className="hex-progress-header">
                <span className="hex-progress-label">Query Execution</span>
                <span className="hex-progress-value">65%</span>
              </div>
              <div className="hex-progress">
                <div className="hex-progress-fill" style={{ width: '65%' }}></div>
              </div>
            </div>
          </section>

          {/* Alerts */}
          <section className="hex-section">
            <h2 className="hex-section-title">Alerts & Notifications</h2>
            <div style={{ maxWidth: '560px' }}>
              <div className="hex-alert hex-alert-success">
                <span>✓</span>
                <span>Query completed successfully. 1,284 rows returned.</span>
              </div>
              <div className="hex-alert hex-alert-error">
                <span>✕</span>
                <span>Syntax error at line 12: Unexpected token LIMIT</span>
              </div>
              <div className="hex-alert hex-alert-warning">
                <span>⚠</span>
                <span>Query timeout approaching. Consider adding a LIMIT clause.</span>
              </div>
              <div className="hex-alert hex-alert-info">
                <span>ℹ</span>
                <span>New version available: Hex 3.2 includes Python 3.11 support</span>
              </div>
            </div>
          </section>

          {/* Code Block */}
          <section className="hex-section">
            <h2 className="hex-section-title">Code Block</h2>
            <div className="hex-code-block">
              <span className="hex-code-comment">-- Revenue analysis query</span><br />
              <span className="hex-code-keyword">SELECT</span><br />
              &nbsp;&nbsp;product_category,<br />
              &nbsp;&nbsp;<span className="hex-code-keyword">SUM</span>(revenue) <span className="hex-code-keyword">AS</span> total_revenue,<br />
              &nbsp;&nbsp;<span className="hex-code-keyword">COUNT</span>(<span className="hex-code-keyword">DISTINCT</span> customer_id) <span className="hex-code-keyword">AS</span> customers<br />
              <span className="hex-code-keyword">FROM</span> sales<br />
              <span className="hex-code-keyword">WHERE</span> order_date {'>'}= <span className="hex-code-string">&apos;2024-01-01&apos;</span><br />
              <span className="hex-code-keyword">GROUP BY</span> product_category<br />
              <span className="hex-code-keyword">ORDER BY</span> total_revenue <span className="hex-code-keyword">DESC</span>;
            </div>
          </section>

          {/* Sample Content - Notebooks */}
          <section className="hex-section">
            <h2 className="hex-section-title">Recent Notebooks</h2>
            <div className="hex-data-list">
              <div className="hex-data-item">
                <div className="hex-data-info">
                  <div className="hex-data-icon" style={{ background: 'rgba(0, 153, 255, 0.1)', color: '#0099ff' }}>📊</div>
                  <div className="hex-data-content">
                    <div className="hex-data-title">Revenue Dashboard 2024</div>
                    <div className="hex-data-subtitle">Last edited 2 hours ago</div>
                  </div>
                </div>
                <div className="hex-data-actions">
                  <span className="hex-badge hex-badge-green">Published</span>
                  <button className="hex-btn hex-btn-ghost">Open</button>
                </div>
              </div>

              <div className="hex-data-item">
                <div className="hex-data-info">
                  <div className="hex-data-icon" style={{ background: 'rgba(255, 139, 23, 0.1)', color: '#ff8b17' }}>🐍</div>
                  <div className="hex-data-content">
                    <div className="hex-data-title">Churn Prediction Model</div>
                    <div className="hex-data-subtitle">Last edited 1 day ago</div>
                  </div>
                </div>
                <div className="hex-data-actions">
                  <span className="hex-badge hex-badge-orange">Draft</span>
                  <button className="hex-btn hex-btn-ghost">Open</button>
                </div>
              </div>

              <div className="hex-data-item">
                <div className="hex-data-info">
                  <div className="hex-data-icon" style={{ background: 'rgba(0, 200, 83, 0.1)', color: '#00c853' }}>📈</div>
                  <div className="hex-data-content">
                    <div className="hex-data-title">Marketing Attribution</div>
                    <div className="hex-data-subtitle">Last edited 3 days ago</div>
                  </div>
                </div>
                <div className="hex-data-actions">
                  <span className="hex-badge hex-badge-cyan">Active</span>
                  <button className="hex-btn hex-btn-ghost">Open</button>
                </div>
              </div>
            </div>

            <div className="hex-stats-grid">
              <div className="hex-stat-card">
                <div className="hex-stat-label">Total Queries</div>
                <div className="hex-stat-value">12.4K</div>
                <div className="hex-stat-change hex-stat-change-positive">+24%</div>
              </div>
              <div className="hex-stat-card">
                <div className="hex-stat-label">Notebooks</div>
                <div className="hex-stat-value">847</div>
                <div className="hex-stat-change hex-stat-change-positive">+12%</div>
              </div>
              <div className="hex-stat-card">
                <div className="hex-stat-label">Team Members</div>
                <div className="hex-stat-value">32</div>
                <div className="hex-stat-change hex-stat-change-positive">+3</div>
              </div>
              <div className="hex-stat-card">
                <div className="hex-stat-label">Avg Query Time</div>
                <div className="hex-stat-value">2.1s</div>
                <div className="hex-stat-change hex-stat-change-negative">-15%</div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
