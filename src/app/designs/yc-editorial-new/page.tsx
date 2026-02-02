import React from 'react';

const cssStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Source+Serif+4:ital,opsz,wght@0,8..60,200..900;1,8..60,200..900&family=Outfit:wght@100..900&display=swap');

  .ycen-page {
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

    font-family: var(--font-sans);
    background: var(--beige-light);
    color: var(--deep-charcoal);
    min-height: 100vh;
    line-height: 1.7;
    font-weight: 300;
  }

  /* Navigation */
  .ycen-nav {
    position: sticky;
    top: 0;
    z-index: 50;
    background: var(--beige-light);
    border-bottom: 1px solid rgba(22, 20, 15, 0.08);
  }

  .ycen-nav-inner {
    max-width: 1400px;
    margin: 0 auto;
    padding: 12px 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
  }

  .ycen-nav-logo {
    width: 40px;
    height: 40px;
    background: linear-gradient(135deg, var(--yc-orange), #ff8c42);
    border-radius: 6px;
    flex-shrink: 0;
  }

  .ycen-nav-links {
    display: flex;
    align-items: center;
    gap: 32px;
    font-size: var(--text-regular);
  }

  .ycen-nav-link {
    color: var(--deep-charcoal);
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 4px;
    transition: opacity 0.2s ease;
  }

  .ycen-nav-link:hover {
    opacity: 0.7;
  }

  .ycen-nav-cta {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    padding: 0 20px 2px;
    background: var(--pure-black);
    color: var(--pure-white);
    font-family: var(--font-serif);
    font-size: var(--text-small);
    font-weight: 400;
    font-style: italic;
    letter-spacing: 0.015rem;
    border-radius: 9999px;
    border: none;
    cursor: pointer;
    text-decoration: none;
    transition: opacity 0.2s ease;
  }

  .ycen-nav-cta:hover {
    opacity: 0.8;
  }

  /* Main content */
  .ycen-main {
    padding: 48px 24px;
    max-width: 1200px;
    margin: 0 auto;
  }

  .ycen-section {
    margin-bottom: 64px;
  }

  .ycen-section-title {
    font-family: var(--font-serif);
    font-size: var(--text-section);
    font-weight: 500;
    font-style: italic;
    line-height: 1.2;
    margin-bottom: 24px;
    color: var(--deep-charcoal);
  }

  /* Hero */
  .ycen-hero {
    text-align: center;
    padding: 48px 0 64px;
    border-bottom: 1px solid rgba(22, 20, 15, 0.1);
    margin-bottom: 64px;
  }

  .ycen-hero-title {
    font-family: var(--font-serif);
    font-size: var(--text-hero);
    font-weight: 500;
    font-style: italic;
    letter-spacing: -0.02em;
    line-height: 1.1;
    margin-bottom: 20px;
  }

  .ycen-hero-subtitle {
    font-size: var(--text-body);
    max-width: 560px;
    margin: 0 auto 32px;
    color: var(--deep-charcoal);
  }

  .ycen-btn-primary-lg {
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
    text-decoration: none;
    transition: opacity 0.3s ease-out;
  }

  .ycen-btn-primary-lg:hover {
    opacity: 0.8;
  }

  /* Color palette */
  .ycen-color-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    gap: 16px;
    margin-bottom: 32px;
  }

  .ycen-color-swatch {
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
    background: var(--pure-white);
  }

  .ycen-color-preview {
    height: 72px;
  }

  .ycen-color-info {
    padding: 12px;
  }

  .ycen-color-name {
    font-size: var(--text-small);
    font-weight: 500;
    margin-bottom: 2px;
  }

  .ycen-color-hex {
    font-size: 12px;
    color: var(--medium-gray);
    font-family: monospace;
  }

  .ycen-color-section-label {
    font-size: var(--text-small);
    font-weight: 500;
    margin-bottom: 12px;
    color: var(--deep-charcoal);
  }

  /* Typography samples */
  .ycen-type-sample {
    margin-bottom: 28px;
    padding-bottom: 28px;
    border-bottom: 1px solid rgba(22, 20, 15, 0.1);
  }

  .ycen-type-sample:last-child {
    border-bottom: none;
  }

  .ycen-type-label {
    font-size: 11px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--medium-gray);
    margin-bottom: 8px;
  }

  /* Buttons */
  .ycen-btn-row {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    align-items: center;
    margin-bottom: 20px;
  }

  .ycen-btn-primary,
  .ycen-btn-secondary,
  .ycen-btn-accent,
  .ycen-btn-disabled {
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
    transition: opacity 0.2s ease, background 0.2s ease, color 0.2s ease;
  }

  .ycen-btn-primary {
    background: var(--pure-black);
    color: var(--pure-white);
  }

  .ycen-btn-primary:hover {
    opacity: 0.8;
  }

  .ycen-btn-secondary {
    background: transparent;
    color: var(--deep-charcoal);
    border: 1px solid var(--deep-charcoal);
  }

  .ycen-btn-secondary:hover {
    background: var(--deep-charcoal);
    color: var(--beige-light);
  }

  .ycen-btn-accent {
    background: var(--yc-orange);
    color: var(--pure-white);
  }

  .ycen-btn-accent:hover {
    opacity: 0.85;
  }

  .ycen-btn-disabled {
    background: rgba(0, 0, 0, 0.08);
    color: var(--medium-gray);
    cursor: not-allowed;
  }

  /* Links */
  .ycen-link {
    color: var(--deep-charcoal);
    text-decoration: underline;
    text-decoration-color: var(--medium-gray);
    text-underline-offset: 3px;
    transition: text-decoration-color 0.2s ease;
  }

  .ycen-link:hover {
    text-decoration-color: var(--dark-gray);
  }

  /* Cards */
  .ycen-card-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 24px;
  }

  .ycen-card {
    background: var(--pure-white);
    border-radius: 10px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
    overflow: hidden;
    transition: box-shadow 0.3s ease, transform 0.3s ease;
  }

  .ycen-card:hover {
    box-shadow: 0 8px 28px rgba(0, 0, 0, 0.12);
    transform: translateY(-2px);
  }

  .ycen-card-accent {
    height: 4px;
    background: var(--yc-orange);
  }

  .ycen-card-body {
    padding: 24px;
  }

  .ycen-card-title {
    font-family: var(--font-serif);
    font-size: var(--text-subheader);
    font-weight: 500;
    font-style: italic;
    margin-bottom: 10px;
  }

  .ycen-card-text {
    font-size: var(--text-regular);
    margin-bottom: 16px;
    color: var(--deep-charcoal);
  }

  /* Forms */
  .ycen-form-section {
    max-width: 480px;
  }

  .ycen-form-group {
    margin-bottom: 20px;
  }

  .ycen-label {
    display: block;
    font-size: var(--text-small);
    font-weight: 500;
    margin-bottom: 8px;
  }

  .ycen-input,
  .ycen-select,
  .ycen-textarea {
    width: 100%;
    border: 1px solid var(--medium-gray);
    border-radius: 8px;
    padding: 12px 16px;
    font-family: var(--font-sans);
    font-size: var(--text-regular);
    font-weight: 300;
    background: var(--pure-white);
    color: var(--deep-charcoal);
    transition: border-color 0.2s ease, box-shadow 0.2s ease;
  }

  .ycen-textarea {
    min-height: 100px;
    resize: vertical;
  }

  .ycen-input:focus,
  .ycen-select:focus,
  .ycen-textarea:focus {
    outline: none;
    border-color: var(--deep-charcoal);
    box-shadow: 0 0 0 3px rgba(22, 20, 15, 0.1);
  }

  .ycen-input::placeholder,
  .ycen-textarea::placeholder {
    color: var(--medium-gray);
  }

  .ycen-input-error {
    border-color: var(--yc-orange);
  }

  .ycen-error-text {
    font-size: 12px;
    color: var(--yc-orange);
    margin-top: 6px;
  }

  .ycen-checkbox-row {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .ycen-checkbox {
    width: 18px;
    height: 18px;
    accent-color: var(--deep-charcoal);
  }

  /* Alerts */
  .ycen-alert {
    border-radius: 10px;
    padding: 14px 18px;
    border: 1px solid;
    display: flex;
    align-items: flex-start;
    gap: 12px;
    font-size: var(--text-regular);
    margin-bottom: 12px;
  }

  .ycen-alert-success {
    background: rgba(242, 101, 34, 0.1);
    border-color: rgba(242, 101, 34, 0.3);
  }

  .ycen-alert-error {
    background: rgba(220, 38, 38, 0.08);
    border-color: rgba(220, 38, 38, 0.2);
  }

  .ycen-alert-warning {
    background: rgba(22, 20, 15, 0.05);
    border-color: rgba(22, 20, 15, 0.15);
  }

  .ycen-alert-info {
    background: rgba(59, 130, 246, 0.08);
    border-color: rgba(59, 130, 246, 0.2);
  }

  /* Progress */
  .ycen-progress {
    margin-top: 24px;
  }

  .ycen-progress-header {
    display: flex;
    justify-content: space-between;
    font-size: var(--text-small);
    margin-bottom: 8px;
  }

  .ycen-progress-bar {
    height: 6px;
    background: rgba(0, 0, 0, 0.08);
    border-radius: 9999px;
    overflow: hidden;
  }

  .ycen-progress-fill {
    height: 100%;
    background: var(--deep-charcoal);
    border-radius: 9999px;
  }

  /* List items */
  .ycen-list {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .ycen-list-item {
    background: var(--pure-white);
    border-radius: 10px;
    padding: 16px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
    transition: box-shadow 0.2s ease;
  }

  .ycen-list-item:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  .ycen-list-title {
    font-family: var(--font-serif);
    font-size: var(--text-regular);
    font-style: italic;
    font-weight: 500;
    margin-bottom: 4px;
  }

  .ycen-list-subtitle {
    font-size: var(--text-small);
    color: var(--medium-gray);
  }

  .ycen-list-actions {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .ycen-badge {
    display: inline-flex;
    align-items: center;
    padding: 4px 12px;
    border-radius: 9999px;
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.05em;
    text-transform: uppercase;
  }

  .ycen-badge-active {
    background: var(--yc-orange);
    color: var(--pure-white);
  }

  .ycen-badge-neutral {
    background: rgba(0, 0, 0, 0.08);
    color: var(--deep-charcoal);
  }

  /* Footer */
  .ycen-footer {
    background: var(--pure-black);
    color: var(--beige-light);
    padding: 48px 24px;
  }

  .ycen-footer-inner {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr;
    gap: 40px;
  }

  @media (min-width: 768px) {
    .ycen-footer-inner {
      grid-template-columns: 1fr 2fr;
    }
  }

  .ycen-footer-brand {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .ycen-footer-logo {
    width: 40px;
    height: 40px;
    background: linear-gradient(135deg, var(--yc-orange), #ff8c42);
    border-radius: 6px;
    flex-shrink: 0;
  }

  .ycen-footer-tagline {
    font-weight: 300;
    font-size: var(--text-regular);
  }

  .ycen-footer-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
  }

  .ycen-footer-heading {
    font-weight: 500;
    font-size: var(--text-small);
    letter-spacing: 0.05em;
    margin-bottom: 12px;
  }

  .ycen-footer-links {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .ycen-footer-link {
    color: var(--beige-light);
    text-decoration: none;
    font-size: var(--text-small);
    font-weight: 300;
    opacity: 0.8;
    transition: opacity 0.2s ease;
  }

  .ycen-footer-link:hover {
    opacity: 1;
  }

  .ycen-footer-bottom {
    margin-top: 40px;
    padding-top: 24px;
    border-top: 1px solid rgba(245, 245, 238, 0.15);
    font-size: 13px;
    font-weight: 300;
    opacity: 0.7;
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
};

export default function YCEditorialNewPage() {
  return (
    <>
      <style>{cssStyles}</style>
      <div className="ycen-page">
        {/* Navigation */}
        <nav className="ycen-nav">
          <div className="ycen-nav-inner">
            <div className="ycen-nav-links">
              <a href="#" className="ycen-nav-link">About</a>
              <a href="#" className="ycen-nav-link">Companies</a>
              <a href="#" className="ycen-nav-link">Library</a>
            </div>
            <div className="ycen-nav-logo" />
            <div className="ycen-nav-links">
              <a href="#" className="ycen-nav-link">Partners</a>
              <a href="#" className="ycen-nav-link">Resources</a>
              <a href="#" className="ycen-nav-link">Jobs</a>
            </div>
            <a href="#" className="ycen-nav-cta">Apply</a>
          </div>
        </nav>

        {/* Main Content */}
        <main className="ycen-main">
          {/* Hero Section */}
          <section className="ycen-hero">
            <h1 className="ycen-hero-title">Make something people want.</h1>
            <p className="ycen-hero-subtitle">
              Y Combinator invests in startups at the earliest stages and helps them succeed through funding, advice, and connections.
            </p>
            <a href="#" className="ycen-btn-primary-lg">Apply to YC</a>
          </section>

          {/* Color Palette */}
          <section className="ycen-section">
            <h2 className="ycen-section-title">Color Palette</h2>

            <div className="ycen-color-section-label">Base Colors</div>
            <div className="ycen-color-grid">
              {colors.base.map((color) => (
                <div key={color.hex} className="ycen-color-swatch">
                  <div
                    className="ycen-color-preview"
                    style={{
                      background: color.hex,
                      border: color.hex === '#ffffff' || color.hex === '#f5f5ee' ? '1px solid #e5e5e5' : 'none',
                    }}
                  />
                  <div className="ycen-color-info">
                    <div className="ycen-color-name">{color.name}</div>
                    <div className="ycen-color-hex">{color.hex}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="ycen-color-section-label">Gray Scale</div>
            <div className="ycen-color-grid">
              {colors.gray.map((color) => (
                <div key={color.hex} className="ycen-color-swatch">
                  <div className="ycen-color-preview" style={{ background: color.hex }} />
                  <div className="ycen-color-info">
                    <div className="ycen-color-name">{color.name}</div>
                    <div className="ycen-color-hex">{color.hex}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="ycen-color-section-label">Accent</div>
            <div className="ycen-color-grid">
              {colors.accent.map((color) => (
                <div key={color.hex} className="ycen-color-swatch">
                  <div className="ycen-color-preview" style={{ background: color.hex }} />
                  <div className="ycen-color-info">
                    <div className="ycen-color-name">{color.name}</div>
                    <div className="ycen-color-hex">{color.hex}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Typography */}
          <section className="ycen-section">
            <h2 className="ycen-section-title">Typography Scale</h2>

            <div className="ycen-type-sample">
              <div className="ycen-type-label">Hero Title</div>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-hero)', fontStyle: 'italic', fontWeight: 500, lineHeight: 1.1 }}>
                Editorial elegance
              </div>
            </div>

            <div className="ycen-type-sample">
              <div className="ycen-type-label">Section Header</div>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-section)', fontStyle: 'italic', fontWeight: 500 }}>
                Section title with gravitas
              </div>
            </div>

            <div className="ycen-type-sample">
              <div className="ycen-type-label">Subheader</div>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-subheader)', fontStyle: 'italic', fontWeight: 500 }}>
                Subheader for content blocks
              </div>
            </div>

            <div className="ycen-type-sample">
              <div className="ycen-type-label">Body Large (18px)</div>
              <p style={{ fontSize: 'var(--text-body)', marginBottom: 0 }}>
                Light, airy body text that creates an editorial feel. The generous line height of 1.7 ensures comfortable reading across long-form content sections.
              </p>
            </div>

            <div className="ycen-type-sample">
              <div className="ycen-type-label">Body Regular (16px)</div>
              <p style={{ fontSize: 'var(--text-regular)', marginBottom: 0 }}>
                Standard text size for navigation elements, labels, and supporting paragraphs throughout the interface.
              </p>
            </div>

            <div className="ycen-type-sample">
              <div className="ycen-type-label">Caption (14px)</div>
              <p style={{ fontSize: 'var(--text-small)', marginBottom: 0, color: 'var(--medium-gray)' }}>
                Metadata, timestamps, and helper text rendered in subtle gray tones.
              </p>
            </div>
          </section>

          {/* Buttons */}
          <section className="ycen-section">
            <h2 className="ycen-section-title">Buttons & Links</h2>
            <div className="ycen-btn-row">
              <button className="ycen-btn-primary">Primary</button>
              <button className="ycen-btn-secondary">Secondary</button>
              <button className="ycen-btn-accent">Accent</button>
              <button className="ycen-btn-disabled" disabled>Disabled</button>
            </div>
            <div className="ycen-btn-row">
              <a href="#" className="ycen-link">Editorial link style</a>
            </div>
            <p style={{ fontSize: 'var(--text-small)', color: 'var(--medium-gray)', marginTop: '16px' }}>
              Buttons use italic serif typography with pill shapes. Hover states rely on subtle opacity changes.
            </p>
          </section>

          {/* Cards */}
          <section className="ycen-section">
            <h2 className="ycen-section-title">Cards</h2>
            <div className="ycen-card-grid">
              {[
                { title: 'Startup School', text: 'Weekly lectures, proven playbooks, and community guidance for early-stage founders.' },
                { title: 'Library', text: 'Essays and resources written by founders and YC partners on building startups.' },
                { title: 'Co-Founder Matching', text: 'Find the right co-founder with aligned values, skills, and ambition.' },
              ].map((card) => (
                <div key={card.title} className="ycen-card">
                  <div className="ycen-card-accent" />
                  <div className="ycen-card-body">
                    <div className="ycen-card-title">{card.title}</div>
                    <p className="ycen-card-text">{card.text}</p>
                    <button className="ycen-btn-secondary">Learn more</button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Forms */}
          <section className="ycen-section">
            <h2 className="ycen-section-title">Form Elements</h2>
            <div className="ycen-form-section">
              <div className="ycen-form-group">
                <label className="ycen-label">Company name</label>
                <input className="ycen-input" type="text" placeholder="Enter your company name" />
              </div>
              <div className="ycen-form-group">
                <label className="ycen-label">Email address (error state)</label>
                <input className="ycen-input ycen-input-error" type="email" placeholder="founder@company.com" />
                <div className="ycen-error-text">Please enter a valid email address.</div>
              </div>
              <div className="ycen-form-group">
                <label className="ycen-label">Company stage</label>
                <select className="ycen-select">
                  <option>Idea stage</option>
                  <option>Prototype</option>
                  <option>Early traction</option>
                  <option>Scaling</option>
                </select>
              </div>
              <div className="ycen-form-group">
                <label className="ycen-label">Describe your product</label>
                <textarea className="ycen-textarea" placeholder="What are you building and why?"></textarea>
              </div>
              <div className="ycen-form-group ycen-checkbox-row">
                <input className="ycen-checkbox" type="checkbox" id="newsletter" defaultChecked />
                <label htmlFor="newsletter">Subscribe to founder updates</label>
              </div>
              <button className="ycen-btn-primary">Submit application</button>
            </div>
          </section>

          {/* Alerts */}
          <section className="ycen-section">
            <h2 className="ycen-section-title">Alerts & Feedback</h2>
            <div style={{ maxWidth: '560px' }}>
              <div className="ycen-alert ycen-alert-success">
                <strong>Success:</strong> Your application has been submitted for review.
              </div>
              <div className="ycen-alert ycen-alert-error">
                <strong>Error:</strong> Unable to save changes. Please try again.
              </div>
              <div className="ycen-alert ycen-alert-warning">
                <strong>Warning:</strong> Application deadline is in 48 hours.
              </div>
              <div className="ycen-alert ycen-alert-info">
                <strong>Info:</strong> Spring 2026 batch applications are now open.
              </div>

              <div className="ycen-progress">
                <div className="ycen-progress-header">
                  <span>Application progress</span>
                  <span>75%</span>
                </div>
                <div className="ycen-progress-bar">
                  <div className="ycen-progress-fill" style={{ width: '75%' }} />
                </div>
              </div>
            </div>
          </section>

          {/* List Items */}
          <section className="ycen-section">
            <h2 className="ycen-section-title">List Layout</h2>
            <div className="ycen-list">
              {[
                { title: 'Stripe', subtitle: 'Payment infrastructure for the internet', status: 'Active', statusType: 'active' },
                { title: 'Airbnb', subtitle: 'Vacation rentals and experiences', status: 'Active', statusType: 'active' },
                { title: 'Dropbox', subtitle: 'Cloud storage and collaboration', status: 'Alumni', statusType: 'neutral' },
              ].map((item) => (
                <div key={item.title} className="ycen-list-item">
                  <div>
                    <div className="ycen-list-title">{item.title}</div>
                    <div className="ycen-list-subtitle">{item.subtitle}</div>
                  </div>
                  <div className="ycen-list-actions">
                    <span className={`ycen-badge ${item.statusType === 'active' ? 'ycen-badge-active' : 'ycen-badge-neutral'}`}>
                      {item.status}
                    </span>
                    <button className="ycen-btn-secondary">View</button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="ycen-footer">
          <div className="ycen-footer-inner">
            <div>
              <div className="ycen-footer-brand">
                <div className="ycen-footer-logo" />
                <span className="ycen-footer-tagline">Make something people want.</span>
              </div>
            </div>
            <div className="ycen-footer-grid">
              <div>
                <div className="ycen-footer-heading">Programs</div>
                <ul className="ycen-footer-links">
                  <li><a href="#" className="ycen-footer-link">YC Program</a></li>
                  <li><a href="#" className="ycen-footer-link">Startup School</a></li>
                  <li><a href="#" className="ycen-footer-link">Work at a Startup</a></li>
                </ul>
              </div>
              <div>
                <div className="ycen-footer-heading">Company</div>
                <ul className="ycen-footer-links">
                  <li><a href="#" className="ycen-footer-link">About</a></li>
                  <li><a href="#" className="ycen-footer-link">Blog</a></li>
                  <li><a href="#" className="ycen-footer-link">Contact</a></li>
                </ul>
              </div>
              <div>
                <div className="ycen-footer-heading">Resources</div>
                <ul className="ycen-footer-links">
                  <li><a href="#" className="ycen-footer-link">Library</a></li>
                  <li><a href="#" className="ycen-footer-link">Newsletter</a></li>
                  <li><a href="#" className="ycen-footer-link">Podcast</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="ycen-footer-inner">
            <div className="ycen-footer-bottom">
              © 2026 Y Combinator. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
