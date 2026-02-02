import React from 'react';

const cssStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Source+Serif+4:ital,opsz,wght@0,8..60,200..900;1,8..60,200..900&family=Outfit:wght@100..900&display=swap');

  .yce-showcase {
    --beige-light: #f5f5ee;
    --pure-black: #000000;
    --deep-charcoal: #16140f;
    --medium-gray: #6b7280;
    --dark-gray: #374151;
    --pure-white: #ffffff;
    --yc-orange: #f26522;

    --font-serif: 'Source Serif 4', Georgia, serif;
    --font-sans: 'Outfit', -apple-system, BlinkMacSystemFont, sans-serif;

    --text-hero: clamp(2.5rem, 5vw, 3.75rem);
    --text-section: 1.75rem;
    --text-subheader: 1.25rem;
    --text-body: 18px;
    --text-regular: 16px;
    --text-small: 14px;

    --duration-fast: 200ms;
    --duration-medium: 300ms;
    --ease-out: ease-out;
    --ease-default: ease;

    font-family: var(--font-sans);
    background: var(--beige-light);
    color: var(--deep-charcoal);
    min-height: 100vh;
    padding: 48px 24px;
    line-height: 1.7;
    font-weight: 300;
  }

  .yce-container {
    max-width: 1200px;
    margin: 0 auto;
  }

  .yce-section {
    margin-bottom: 56px;
  }

  .yce-section-title {
    font-family: var(--font-serif);
    font-size: var(--text-section);
    font-weight: 500;
    font-style: italic;
    line-height: 1.2;
    margin-bottom: 24px;
    color: var(--deep-charcoal);
  }

  .yce-hero {
    padding-bottom: 40px;
    border-bottom: 1px solid rgba(22, 20, 15, 0.1);
    margin-bottom: 56px;
  }

  .yce-hero-title {
    font-family: var(--font-serif);
    font-size: var(--text-hero);
    font-weight: 500;
    font-style: italic;
    letter-spacing: -0.02em;
    line-height: 1.1;
    margin-bottom: 16px;
  }

  .yce-hero-tagline {
    font-size: var(--text-body);
    max-width: 640px;
    margin-bottom: 28px;
  }

  .yce-btn-primary-lg {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 80px;
    padding: 0 40px 4px;
    background: var(--pure-black);
    color: var(--beige-light);
    font-family: var(--font-serif);
    font-size: var(--text-section);
    font-weight: 400;
    font-style: italic;
    letter-spacing: 0.015rem;
    border-radius: 9999px;
    border: none;
    cursor: pointer;
    transition: opacity var(--duration-medium) var(--ease-out);
  }

  .yce-btn-primary-lg:hover,
  .yce-btn-primary:hover,
  .yce-btn-success:hover {
    opacity: 0.8;
  }

  .yce-btn-primary,
  .yce-btn-secondary,
  .yce-btn-success,
  .yce-btn-disabled {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    padding: 0 20px 2px;
    font-family: var(--font-serif);
    font-size: var(--text-small);
    font-weight: 400;
    font-style: italic;
    letter-spacing: 0.015rem;
    border-radius: 9999px;
    border: none;
    cursor: pointer;
    transition: opacity var(--duration-fast) var(--ease-default),
      background var(--duration-fast) var(--ease-default),
      color var(--duration-fast) var(--ease-default);
  }

  .yce-btn-primary {
    background: var(--pure-black);
    color: var(--pure-white);
  }

  .yce-btn-secondary {
    background: transparent;
    color: var(--deep-charcoal);
    border: 1px solid var(--deep-charcoal);
  }

  .yce-btn-secondary:hover {
    background: var(--deep-charcoal);
    color: var(--beige-light);
  }

  .yce-btn-success {
    background: var(--yc-orange);
    color: var(--pure-white);
  }

  .yce-btn-disabled {
    background: rgba(0, 0, 0, 0.08);
    color: var(--medium-gray);
    cursor: not-allowed;
  }

  .yce-link {
    color: var(--deep-charcoal);
    text-decoration: underline;
    text-decoration-color: var(--medium-gray);
    text-underline-offset: 2px;
    transition: text-decoration-color var(--duration-fast) var(--ease-default);
  }

  .yce-link:hover {
    text-decoration-color: var(--dark-gray);
  }

  .yce-color-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 16px;
  }

  .yce-color-swatch {
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
    background: var(--pure-white);
  }

  .yce-color-preview {
    height: 80px;
  }

  .yce-color-info {
    padding: 12px;
  }

  .yce-color-name {
    font-size: var(--text-small);
    font-weight: 500;
  }

  .yce-color-hex {
    font-size: 13px;
    color: var(--medium-gray);
  }

  .yce-type-sample {
    margin-bottom: 24px;
    padding-bottom: 24px;
    border-bottom: 1px solid rgba(22, 20, 15, 0.1);
  }

  .yce-type-label {
    font-size: 12px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--medium-gray);
    margin-bottom: 8px;
  }

  .yce-card-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 24px;
  }

  .yce-card {
    background: var(--pure-white);
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    overflow: hidden;
    transition: box-shadow var(--duration-medium) var(--ease-out);
  }

  .yce-card:hover {
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  }

  .yce-card-header {
    height: 4px;
    background: var(--yc-orange);
  }

  .yce-card-body {
    padding: 24px;
  }

  .yce-card-title {
    font-family: var(--font-serif);
    font-size: var(--text-subheader);
    font-weight: 500;
    font-style: italic;
    margin-bottom: 10px;
  }

  .yce-card-text {
    font-size: var(--text-regular);
    margin-bottom: 16px;
  }

  .yce-form-group {
    margin-bottom: 18px;
  }

  .yce-label {
    display: block;
    font-size: var(--text-small);
    font-weight: 500;
    margin-bottom: 8px;
  }

  .yce-input,
  .yce-select {
    width: 100%;
    border: 1px solid var(--medium-gray);
    border-radius: 8px;
    padding: 12px 16px;
    font-family: var(--font-sans);
    font-size: var(--text-regular);
    font-weight: 300;
    background: var(--pure-white);
    color: var(--deep-charcoal);
    transition: border-color var(--duration-fast) var(--ease-default),
      box-shadow var(--duration-fast) var(--ease-default);
  }

  .yce-input:focus,
  .yce-select:focus {
    outline: none;
    border-color: var(--deep-charcoal);
    box-shadow: 0 0 0 3px rgba(22, 20, 15, 0.1);
  }

  .yce-input::placeholder {
    color: var(--medium-gray);
  }

  .yce-input-error {
    border-color: var(--yc-orange);
  }

  .yce-error-text {
    font-size: 12px;
    color: var(--yc-orange);
    margin-top: 6px;
  }

  .yce-checkbox-row {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: var(--text-regular);
  }

  .yce-checkbox {
    width: 18px;
    height: 18px;
    accent-color: var(--deep-charcoal);
  }

  .yce-alert {
    border-radius: 10px;
    padding: 14px 16px;
    border: 1px solid;
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: var(--text-regular);
    margin-bottom: 12px;
  }

  .yce-alert-success {
    background: rgba(242, 101, 34, 0.12);
    border-color: rgba(242, 101, 34, 0.4);
  }

  .yce-alert-error {
    background: rgba(0, 0, 0, 0.08);
    border-color: rgba(22, 20, 15, 0.2);
  }

  .yce-alert-warning {
    background: rgba(22, 20, 15, 0.05);
    border-color: rgba(22, 20, 15, 0.15);
  }

  .yce-alert-info {
    background: rgba(245, 245, 238, 0.8);
    border-color: rgba(22, 20, 15, 0.12);
  }

  .yce-progress {
    margin-top: 20px;
  }

  .yce-progress-header {
    display: flex;
    justify-content: space-between;
    font-size: var(--text-small);
    margin-bottom: 8px;
  }

  .yce-progress-bar {
    height: 6px;
    background: rgba(0, 0, 0, 0.08);
    border-radius: 9999px;
    overflow: hidden;
  }

  .yce-progress-fill {
    height: 100%;
    width: 65%;
    background: var(--deep-charcoal);
  }

  .yce-status-badge {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 4px 12px;
    border-radius: 9999px;
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 0.05em;
    text-transform: uppercase;
  }

  .yce-status-active {
    background: var(--yc-orange);
    color: var(--pure-white);
  }

  .yce-status-neutral {
    background: rgba(0, 0, 0, 0.08);
    color: var(--deep-charcoal);
  }

  .yce-list {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .yce-list-row {
    background: var(--pure-white);
    border-radius: 10px;
    padding: 16px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  }

  .yce-list-title {
    font-family: var(--font-serif);
    font-size: var(--text-regular);
    font-style: italic;
    font-weight: 500;
    margin-bottom: 4px;
  }

  .yce-list-subtitle {
    font-size: var(--text-small);
    color: var(--medium-gray);
  }

  .yce-list-actions {
    display: flex;
    align-items: center;
    gap: 12px;
  }
`;

const colors = {
  base: [
    { name: 'Beige Light', hex: '#f5f5ee' },
    { name: 'Pure Black', hex: '#000000' },
    { name: 'Deep Charcoal', hex: '#16140f' },
    { name: 'Pure White', hex: '#ffffff' },
  ],
  gray: [
    { name: 'Medium Gray', hex: '#6b7280' },
    { name: 'Dark Gray', hex: '#374151' },
  ],
  accent: [{ name: 'YC Orange', hex: '#f26522' }],
  semantic: [
    { name: 'Success/Active', hex: '#f26522' },
    { name: 'Link Underline', hex: '#6b7280' },
  ],
};

export default function YCWarmEditorialShowcase() {
  return (
    <>
      <style>{cssStyles}</style>
      <main className="yce-showcase">
        <div className="yce-container">
          {/* Section 1: Hero Header */}
          <section className="yce-hero">
            <h1 className="yce-hero-title">Make something people want.</h1>
            <p className="yce-hero-tagline">
              Editorial elegance with warm neutrals, serif italics, and confident restraint.
              Designed to feel authoritative yet welcoming for founders.
            </p>
            <button className="yce-btn-primary-lg">Apply to YC</button>
          </section>

          {/* Section 2: Color Palette */}
          <section className="yce-section">
            <h2 className="yce-section-title">Color Palette</h2>
            <div style={{ marginBottom: '28px' }}>
              <h3 style={{ fontSize: '16px', fontWeight: 500, marginBottom: '12px' }}>Base Colors</h3>
              <div className="yce-color-grid">
                {colors.base.map((color) => (
                  <div key={color.hex} className="yce-color-swatch">
                    <div
                      className="yce-color-preview"
                      style={{
                        background: color.hex,
                        border: color.hex === '#ffffff' || color.hex === '#f5f5ee' ? '1px solid #e5e5e5' : 'none',
                      }}
                    />
                    <div className="yce-color-info">
                      <div className="yce-color-name">{color.name}</div>
                      <div className="yce-color-hex">{color.hex}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ marginBottom: '28px' }}>
              <h3 style={{ fontSize: '16px', fontWeight: 500, marginBottom: '12px' }}>Gray Scale</h3>
              <div className="yce-color-grid">
                {colors.gray.map((color) => (
                  <div key={color.hex} className="yce-color-swatch">
                    <div className="yce-color-preview" style={{ background: color.hex }} />
                    <div className="yce-color-info">
                      <div className="yce-color-name">{color.name}</div>
                      <div className="yce-color-hex">{color.hex}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ marginBottom: '28px' }}>
              <h3 style={{ fontSize: '16px', fontWeight: 500, marginBottom: '12px' }}>Accent</h3>
              <div className="yce-color-grid">
                {colors.accent.map((color) => (
                  <div key={color.hex} className="yce-color-swatch">
                    <div className="yce-color-preview" style={{ background: color.hex }} />
                    <div className="yce-color-info">
                      <div className="yce-color-name">{color.name}</div>
                      <div className="yce-color-hex">{color.hex}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 style={{ fontSize: '16px', fontWeight: 500, marginBottom: '12px' }}>Semantic</h3>
              <div className="yce-color-grid">
                {colors.semantic.map((color) => (
                  <div key={color.hex} className="yce-color-swatch">
                    <div className="yce-color-preview" style={{ background: color.hex }} />
                    <div className="yce-color-info">
                      <div className="yce-color-name">{color.name}</div>
                      <div className="yce-color-hex">{color.hex}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section 3: Typography Scale */}
          <section className="yce-section">
            <h2 className="yce-section-title">Typography Scale</h2>
            <div className="yce-type-sample">
              <div className="yce-type-label">H1 Hero</div>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-hero)', fontStyle: 'italic', fontWeight: 500 }}>
                Editorial hero heading
              </div>
            </div>
            <div className="yce-type-sample">
              <div className="yce-type-label">H2 Section</div>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-section)', fontStyle: 'italic', fontWeight: 500 }}>
                Section header with gravitas
              </div>
            </div>
            <div className="yce-type-sample">
              <div className="yce-type-label">H3 Subheader</div>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-subheader)', fontStyle: 'italic', fontWeight: 500 }}>
                Subheader for content blocks
              </div>
            </div>
            <div className="yce-type-sample">
              <div className="yce-type-label">Body Large</div>
              <p style={{ fontSize: 'var(--text-body)' }}>
                Light, airy body text that balances authority with warmth. The generous line height creates an editorial flow.
              </p>
            </div>
            <div className="yce-type-sample">
              <div className="yce-type-label">Body Regular</div>
              <p style={{ fontSize: 'var(--text-regular)' }}>
                Standard reading size for navigation labels and paragraph text in supporting sections.
              </p>
            </div>
            <div className="yce-type-sample" style={{ borderBottom: 'none' }}>
              <div className="yce-type-label">Caption</div>
              <p style={{ fontSize: 'var(--text-small)' }}>Metadata and helper text in subtle tones.</p>
            </div>
          </section>

          {/* Section 4: Buttons & Interactive Elements */}
          <section className="yce-section">
            <h2 className="yce-section-title">Buttons & Interactive Elements</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'center', marginBottom: '20px' }}>
              <button className="yce-btn-primary">Primary</button>
              <button className="yce-btn-secondary">Secondary</button>
              <button className="yce-btn-success">Success</button>
              <button className="yce-btn-disabled" disabled>Disabled</button>
              <a className="yce-link" href="#">Editorial link style</a>
            </div>
            <p style={{ fontSize: 'var(--text-small)', color: 'var(--medium-gray)' }}>
              Hover states rely on opacity and underline color changes for restrained feedback.
            </p>
          </section>

          {/* Section 5: Cards */}
          <section className="yce-section">
            <h2 className="yce-section-title">Cards</h2>
            <div className="yce-card-grid">
              {[
                { title: 'Startup School', copy: 'Weekly lectures, proven playbooks, and community guidance.' },
                { title: 'Library Essays', copy: 'Founder-focused reading with practical, honest advice.' },
                { title: 'Co-Founder Match', copy: 'Find the right partner with shared values and ambition.' },
              ].map((card) => (
                <div key={card.title} className="yce-card">
                  <div className="yce-card-header" />
                  <div className="yce-card-body">
                    <div className="yce-card-title">{card.title}</div>
                    <p className="yce-card-text">{card.copy}</p>
                    <button className="yce-btn-secondary">Learn more</button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 6: Form Elements */}
          <section className="yce-section">
            <h2 className="yce-section-title">Form Elements</h2>
            <div style={{ maxWidth: '480px' }}>
              <div className="yce-form-group">
                <label className="yce-label">Company name</label>
                <input className="yce-input" type="text" placeholder="Enter your company name" />
              </div>
              <div className="yce-form-group">
                <label className="yce-label">Founder email (error)</label>
                <input className="yce-input yce-input-error" type="email" placeholder="founder@company.com" />
                <div className="yce-error-text">Please enter a valid email address.</div>
              </div>
              <div className="yce-form-group">
                <label className="yce-label">Stage</label>
                <select className="yce-select">
                  <option>Idea stage</option>
                  <option>Prototype</option>
                  <option>Early traction</option>
                  <option>Scaling</option>
                </select>
              </div>
              <div className="yce-form-group yce-checkbox-row">
                <input className="yce-checkbox" type="checkbox" id="updates" defaultChecked />
                <label htmlFor="updates">Send weekly updates and founder stories</label>
              </div>
              <button className="yce-btn-primary">Submit application</button>
            </div>
          </section>

          {/* Section 7: Feedback & Status */}
          <section className="yce-section">
            <h2 className="yce-section-title">Feedback & Status</h2>
            <div style={{ maxWidth: '560px' }}>
              <div className="yce-alert yce-alert-success">
                <strong>Accepted:</strong> Your application moved to partner review.
              </div>
              <div className="yce-alert yce-alert-error">
                <strong>Attention:</strong> Missing traction metrics for last month.
              </div>
              <div className="yce-alert yce-alert-warning">
                <strong>Reminder:</strong> Interviews close in 48 hours.
              </div>
              <div className="yce-alert yce-alert-info">
                <strong>Info:</strong> New batch dates are now live.
              </div>
              <div className="yce-progress">
                <div className="yce-progress-header">
                  <span>Application progress</span>
                  <span>65%</span>
                </div>
                <div className="yce-progress-bar">
                  <div className="yce-progress-fill" />
                </div>
              </div>
            </div>
          </section>

          {/* Section 8: Sample Content Layout */}
          <section className="yce-section">
            <h2 className="yce-section-title">Founder Pipeline</h2>
            <div className="yce-list">
              {[
                { title: 'Brightside AI', subtitle: 'B2B workflow automation', status: 'Active', action: 'Review' },
                { title: 'Harbor Health', subtitle: 'Remote care platform', status: 'Interview', action: 'Schedule' },
                { title: 'Signal Ridge', subtitle: 'Fintech infra', status: 'Pending', action: 'Follow up' },
              ].map((row) => (
                <div key={row.title} className="yce-list-row">
                  <div>
                    <div className="yce-list-title">{row.title}</div>
                    <div className="yce-list-subtitle">{row.subtitle}</div>
                  </div>
                  <div className="yce-list-actions">
                    <span className={`yce-status-badge ${row.status === 'Active' ? 'yce-status-active' : 'yce-status-neutral'}`}>
                      {row.status}
                    </span>
                    <button className="yce-btn-secondary">{row.action}</button>
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
