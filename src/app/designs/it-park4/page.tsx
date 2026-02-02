import React from 'react';

const cssStyles = `
  @import url('https://fonts.cdnfonts.com/css/geist');

  .showcase {
    /* Primary Colors (60%) */
    --red-primary: #E51537;
    --orange-primary: #FE4A00;
    --cream-base: #FFF6EB;

    /* Secondary Colors (30%) */
    --lime: #DAFF02;
    --cyan: #00A1F1;
    --blue: #1D57F6;
    --navy: #121856;

    /* Tertiary Colors (10%) */
    --pink: #FD73ED;
    --purple: #7F59E9;
    --lavender: #DCB8FE;
    --magenta: #FD0377;

    /* Neutrals */
    --white: #FFFFFF;
    --black: #000000;
    --gray-700: #2E2E2E;
    --gray-500: #666666;
    --gray-300: #B6B6B6;

    /* Typography */
    --font-primary: 'Geist', 'Inter', 'Helvetica Neue', sans-serif;

    /* Spacing */
    --spacing-xs: 6px;
    --spacing-sm: 10px;
    --spacing-md: 16px;
    --spacing-lg: 24px;
    --spacing-xl: 40px;
    --spacing-2xl: 64px;

    /* Radius */
    --radius-sm: 8px;
    --radius-md: 16px;
    --radius-lg: 24px;
    --radius-pill: 999px;

    /* Shadows */
    --shadow-card: 0 8px 30px rgba(0, 0, 0, 0.08);

    background: var(--cream-base);
    color: var(--black);
    font-family: var(--font-primary);
    padding: 48px 24px 80px;
    position: relative;
    min-height: 100vh;
  }

  .showcase::before {
    content: '';
    position: fixed;
    inset: 0;
    background-image: repeating-linear-gradient(
      90deg,
      transparent,
      transparent 22px,
      rgba(254, 74, 0, 0.04) 22px,
      rgba(254, 74, 0, 0.04) 24px
    );
    pointer-events: none;
    opacity: 0.6;
    z-index: 0;
  }

  .showcase-container {
    max-width: 1200px;
    margin: 0 auto;
    position: relative;
    z-index: 1;
  }

  .section {
    background: var(--white);
    border-radius: var(--radius-lg);
    padding: var(--spacing-xl);
    margin-bottom: var(--spacing-xl);
    box-shadow: var(--shadow-card);
  }

  .section-title {
    font-size: 28px;
    font-weight: 700;
    line-height: 0.9;
    margin-bottom: var(--spacing-lg);
  }

  /* Hero */
  .hero {
    background: linear-gradient(135deg, var(--orange-primary), var(--red-primary));
    color: var(--white);
    border-radius: var(--radius-lg);
    padding: var(--spacing-2xl);
    position: relative;
    overflow: hidden;
  }

  .hero::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: repeating-linear-gradient(
      90deg,
      transparent,
      transparent 16px,
      rgba(255, 255, 255, 0.08) 16px,
      rgba(255, 255, 255, 0.08) 18px
    );
    pointer-events: none;
  }

  .hero-content {
    position: relative;
    z-index: 1;
    display: grid;
    gap: var(--spacing-lg);
  }

  .brand-row {
    display: flex;
    align-items: center;
    gap: var(--spacing-md);
  }

  .brand-icon {
    width: 80px;
    height: 52px;
    background: var(--white);
    border-radius: var(--radius-sm);
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 4px;
    padding: 8px;
  }

  .brand-key {
    background: var(--orange-primary);
    border-radius: 2px;
  }

  .brand-title {
    font-size: 56px;
    font-weight: 700;
    line-height: 0.9;
    letter-spacing: -0.01em;
  }

  .brand-descriptor {
    font-size: 18px;
    line-height: 1.05;
    opacity: 0.9;
  }

  .hero-subtitle {
    font-size: 20px;
    line-height: 1.1;
    max-width: 560px;
  }

  .hero-actions {
    display: flex;
    flex-wrap: wrap;
    gap: var(--spacing-md);
    align-items: center;
  }

  .btn {
    border-radius: var(--radius-pill);
    padding: 12px 24px;
    font-size: 14px;
    font-weight: 600;
    border: 2px solid transparent;
    cursor: pointer;
    transition: color 0.18s ease, background 0.18s ease, border-color 0.18s ease;
  }

  .btn-primary {
    background: var(--orange-primary);
    color: var(--white);
  }

  .btn-secondary {
    background: transparent;
    color: var(--black);
    border-color: var(--black);
  }

  .btn-success {
    background: var(--lime);
    color: var(--black);
  }

  .btn-disabled {
    background: var(--cream-base);
    color: var(--gray-500);
    cursor: not-allowed;
  }

  .link-btn {
    background: none;
    border: none;
    color: var(--white);
    font-weight: 600;
    cursor: pointer;
  }

  .accent-orb {
    width: 140px;
    height: 140px;
    border-radius: 50%;
    background: radial-gradient(circle at 30% 30%, #fff, transparent 60%),
      var(--orange-primary);
    box-shadow: 20px 20px 40px rgba(0, 0, 0, 0.25),
      inset -12px -12px 18px rgba(0, 0, 0, 0.25);
  }

  /* Palette */
  .palette-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    gap: var(--spacing-md);
  }

  .swatch {
    display: grid;
    gap: 8px;
  }

  .swatch-box {
    height: 80px;
    border-radius: var(--radius-md);
    border: 1px solid rgba(0, 0, 0, 0.08);
  }

  .swatch-name {
    font-size: 13px;
    font-weight: 600;
  }

  .swatch-hex {
    font-size: 12px;
    color: var(--gray-500);
  }

  /* Typography */
  .type-sample {
    margin-bottom: var(--spacing-lg);
    padding-bottom: var(--spacing-md);
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  }

  .type-sample:last-child {
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 0;
  }

  .type-label {
    font-size: 12px;
    color: var(--gray-500);
    text-transform: uppercase;
    letter-spacing: 0.08em;
    margin-bottom: 8px;
  }

  .h1 { font-size: 52px; font-weight: 700; line-height: 0.9; }
  .h2 { font-size: 36px; font-weight: 700; line-height: 0.95; }
  .h3 { font-size: 28px; font-weight: 700; line-height: 1; }
  .h4 { font-size: 22px; font-weight: 600; line-height: 1.05; }
  .h5 { font-size: 18px; font-weight: 600; line-height: 1.05; }
  .h6 { font-size: 16px; font-weight: 600; line-height: 1.1; }
  .body-lg { font-size: 18px; line-height: 1.1; letter-spacing: 0.02em; }
  .body { font-size: 16px; line-height: 1.1; letter-spacing: 0.02em; }
  .body-sm { font-size: 14px; line-height: 1.1; letter-spacing: 0.02em; color: var(--gray-500); }
  .caption { font-size: 12px; line-height: 1.1; letter-spacing: 0.08em; text-transform: uppercase; color: var(--gray-500); }

  /* Capsules */
  .capsule-row {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  .capsule {
    border: 2px solid var(--black);
    border-radius: var(--radius-pill);
    padding: 6px 14px;
    font-size: 12px;
    font-weight: 600;
    background: transparent;
  }

  .capsule.dark {
    border-color: var(--white);
    color: var(--white);
  }

  /* Cards */
  .cards-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: var(--spacing-lg);
  }

  .card {
    background: var(--white);
    border-radius: var(--radius-md);
    border: 1px solid rgba(0, 0, 0, 0.08);
    overflow: hidden;
    transition: border-color 0.18s ease;
  }

  .card:hover {
    border-color: rgba(0, 0, 0, 0.2);
  }

  .card-header {
    background: linear-gradient(135deg, var(--orange-primary), var(--red-primary));
    color: var(--white);
    padding: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .card-body {
    padding: 18px;
  }

  .card-title {
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 6px;
  }

  .card-text {
    font-size: 14px;
    color: var(--gray-500);
    margin-bottom: 12px;
  }

  /* Forms */
  .form-group {
    margin-bottom: var(--spacing-lg);
  }

  .form-label {
    font-size: 13px;
    font-weight: 600;
    display: block;
    margin-bottom: 8px;
  }

  .form-input {
    width: 100%;
    padding: 12px 14px;
    border-radius: var(--radius-sm);
    border: 2px solid var(--black);
    font-size: 14px;
    font-family: var(--font-primary);
    background: var(--white);
  }

  .form-input:focus {
    outline: none;
    border-color: var(--blue);
  }

  .form-input.error {
    border-color: var(--red-primary);
  }

  .form-error {
    font-size: 12px;
    color: var(--red-primary);
    margin-top: 6px;
  }

  .checkbox-row {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .checkbox {
    width: 18px;
    height: 18px;
    accent-color: var(--orange-primary);
  }

  /* Alerts */
  .alert {
    padding: 14px 16px;
    border-radius: var(--radius-sm);
    border: 2px solid transparent;
    display: flex;
    gap: 10px;
    align-items: center;
    margin-bottom: 10px;
    font-size: 14px;
  }

  .alert-success {
    background: rgba(218, 255, 2, 0.2);
    border-color: var(--lime);
  }

  .alert-error {
    background: rgba(229, 21, 55, 0.12);
    border-color: var(--red-primary);
  }

  .alert-warning {
    background: rgba(254, 74, 0, 0.14);
    border-color: var(--orange-primary);
  }

  .alert-info {
    background: rgba(0, 161, 241, 0.12);
    border-color: var(--cyan);
  }

  .progress {
    height: 8px;
    border-radius: var(--radius-pill);
    background: rgba(0, 0, 0, 0.08);
    overflow: hidden;
  }

  .progress-fill {
    height: 100%;
    background: var(--blue);
    width: 65%;
  }

  /* Sample content layout */
  .data-rows {
    display: grid;
    gap: 12px;
  }

  .data-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: var(--white);
    border: 1px solid rgba(0, 0, 0, 0.08);
    border-radius: var(--radius-md);
    padding: 16px;
  }

  .row-info {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .row-title {
    font-size: 16px;
    font-weight: 700;
  }

  .row-subtitle {
    font-size: 13px;
    color: var(--gray-500);
  }

  .status {
    border-radius: var(--radius-pill);
    padding: 6px 12px;
    font-size: 12px;
    font-weight: 600;
  }

  .status-active {
    background: var(--lime);
    color: var(--black);
  }

  .status-paused {
    background: var(--lavender);
    color: var(--black);
  }

  .status-review {
    background: var(--cyan);
    color: var(--white);
  }
`;

export default function ItPark4Showcase() {
  return (
    <>
      <style>{cssStyles}</style>
      <main className="showcase">
        <div className="showcase-container">
          <section className="hero">
            <div className="hero-content">
              <div className="brand-row">
                <div className="brand-icon">
                  {Array.from({ length: 8 }).map((_, index) => (
                    <span key={index} className="brand-key"></span>
                  ))}
                </div>
                <div>
                  <div className="brand-title">IT Park 4</div>
                  <div className="brand-descriptor">Online Programming School</div>
                </div>
              </div>
              <p className="hero-subtitle">
                Informative-first layouts with structured hierarchy, vibrant brand accents, and a single 3D highlight.
              </p>
              <div className="hero-actions">
                <button className="btn btn-primary">Explore programs</button>
                <button className="link-btn">View brand rules →</button>
                <div className="accent-orb" aria-hidden="true"></div>
              </div>
            </div>
          </section>

          <section className="section">
            <h2 className="section-title">Color Palette</h2>
            <div style={{ marginBottom: '24px' }}>
              <p className="body-sm">Primary colors build recognition and dominate layouts (60%).</p>
            </div>
            <div className="palette-grid" style={{ marginBottom: '28px' }}>
              <div className="swatch">
                <div className="swatch-box" style={{ background: '#E51537' }}></div>
                <div className="swatch-name">Red</div>
                <div className="swatch-hex">#E51537</div>
              </div>
              <div className="swatch">
                <div className="swatch-box" style={{ background: '#FE4A00' }}></div>
                <div className="swatch-name">Orange</div>
                <div className="swatch-hex">#FE4A00</div>
              </div>
              <div className="swatch">
                <div className="swatch-box" style={{ background: '#FFF6EB' }}></div>
                <div className="swatch-name">Cream</div>
                <div className="swatch-hex">#FFF6EB</div>
              </div>
            </div>

            <div style={{ marginBottom: '16px' }}>
              <p className="body-sm">Secondary colors balance contrast and technical elements (30%).</p>
            </div>
            <div className="palette-grid" style={{ marginBottom: '28px' }}>
              <div className="swatch">
                <div className="swatch-box" style={{ background: '#DAFF02' }}></div>
                <div className="swatch-name">Lime</div>
                <div className="swatch-hex">#DAFF02</div>
              </div>
              <div className="swatch">
                <div className="swatch-box" style={{ background: '#00A1F1' }}></div>
                <div className="swatch-name">Cyan</div>
                <div className="swatch-hex">#00A1F1</div>
              </div>
              <div className="swatch">
                <div className="swatch-box" style={{ background: '#1D57F6' }}></div>
                <div className="swatch-name">Blue</div>
                <div className="swatch-hex">#1D57F6</div>
              </div>
              <div className="swatch">
                <div className="swatch-box" style={{ background: '#121856' }}></div>
                <div className="swatch-name">Navy</div>
                <div className="swatch-hex">#121856</div>
              </div>
            </div>

            <div style={{ marginBottom: '16px' }}>
              <p className="body-sm">Tertiary colors add controlled decorative accents (up to 10%).</p>
            </div>
            <div className="palette-grid" style={{ marginBottom: '28px' }}>
              <div className="swatch">
                <div className="swatch-box" style={{ background: '#FD73ED' }}></div>
                <div className="swatch-name">Pink</div>
                <div className="swatch-hex">#FD73ED</div>
              </div>
              <div className="swatch">
                <div className="swatch-box" style={{ background: '#7F59E9' }}></div>
                <div className="swatch-name">Purple</div>
                <div className="swatch-hex">#7F59E9</div>
              </div>
              <div className="swatch">
                <div className="swatch-box" style={{ background: '#DCB8FE' }}></div>
                <div className="swatch-name">Lavender</div>
                <div className="swatch-hex">#DCB8FE</div>
              </div>
              <div className="swatch">
                <div className="swatch-box" style={{ background: '#FD0377' }}></div>
                <div className="swatch-name">Magenta</div>
                <div className="swatch-hex">#FD0377</div>
              </div>
            </div>

            <div>
              <p className="body-sm">Semantic uses: Lime (success), Red (error), Orange (warning), Cyan (info).</p>
            </div>
          </section>

          <section className="section">
            <h2 className="section-title">Typography Scale</h2>
            <div className="type-sample">
              <div className="type-label">H1 / Large Heading</div>
              <div className="h1">Build skills for real-world development</div>
            </div>
            <div className="type-sample">
              <div className="type-label">H2 / Section Heading</div>
              <div className="h2">Structured learning, bold outcomes</div>
            </div>
            <div className="type-sample">
              <div className="type-label">H3 / Subheading</div>
              <div className="h3">From fundamentals to production</div>
            </div>
            <div className="type-sample">
              <div className="type-label">H4 / Support Header</div>
              <div className="h4">Mentored, practice-driven curriculum</div>
            </div>
            <div className="type-sample">
              <div className="type-label">H5 / Minor Header</div>
              <div className="h5">Monthly skill checkpoints</div>
            </div>
            <div className="type-sample">
              <div className="type-label">H6 / Utility Header</div>
              <div className="h6">Project review</div>
            </div>
            <div className="type-sample">
              <div className="type-label">Body Large</div>
              <p className="body-lg">
                Clear hierarchy and concise wording keep every layout focused and easy to scan.
              </p>
            </div>
            <div className="type-sample">
              <div className="type-label">Body Regular</div>
              <p className="body">
                Geist provides a strict, geometric tone that reinforces the technical and modern character of the brand.
              </p>
            </div>
            <div className="type-sample">
              <div className="type-label">Body Small</div>
              <p className="body-sm">Supporting details remain calm with controlled spacing and consistent rhythm.</p>
            </div>
            <div className="type-sample">
              <div className="type-label">Caption</div>
              <p className="caption">Updated 2 hours ago</p>
            </div>
          </section>

          <section className="section">
            <h2 className="section-title">Buttons & Interactive Elements</h2>
            <div className="capsule-row" style={{ marginBottom: '16px' }}>
              <span className="capsule">Java</span>
              <span className="capsule">Backend</span>
              <span className="capsule">Spring Boot</span>
              <span className="capsule">PostgreSQL</span>
            </div>
            <div className="hero-actions">
              <button className="btn btn-primary">Primary</button>
              <button className="btn btn-secondary">Secondary</button>
              <button className="btn btn-success">Success</button>
              <button className="btn btn-disabled" disabled>Disabled</button>
              <button className="btn btn-secondary">Link style →</button>
            </div>
          </section>

          <section className="section">
            <h2 className="section-title">Cards</h2>
            <div className="cards-grid">
              <div className="card">
                <div className="card-header">
                  <span>Backend Sprint</span>
                  <span className="capsule dark">Week 4</span>
                </div>
                <div className="card-body">
                  <div className="card-title">Server App Practice</div>
                  <div className="card-text">Build a layered API with tests and a clear data flow.</div>
                  <button className="btn btn-secondary">View brief</button>
                </div>
              </div>
              <div className="card">
                <div className="card-header">
                  <span>Frontend Lab</span>
                  <span className="capsule dark">UI</span>
                </div>
                <div className="card-body">
                  <div className="card-title">Layout Composition</div>
                  <div className="card-text">Practice grid alignment and capsule tags in a clean layout.</div>
                  <button className="btn btn-secondary">See layout</button>
                </div>
              </div>
              <div className="card">
                <div className="card-header">
                  <span>Career Track</span>
                  <span className="capsule dark">Mentor</span>
                </div>
                <div className="card-body">
                  <div className="card-title">Project Review</div>
                  <div className="card-text">Structured feedback with one strong visual accent per slide.</div>
                  <button className="btn btn-secondary">Join review</button>
                </div>
              </div>
            </div>
          </section>

          <section className="section">
            <h2 className="section-title">Form Elements</h2>
            <div style={{ maxWidth: '520px' }}>
              <div className="form-group">
                <label className="form-label">Course name</label>
                <input className="form-input" placeholder="Backend with Java" />
              </div>
              <div className="form-group">
                <label className="form-label">Enrollment code (error)</label>
                <input className="form-input error" placeholder="Enter code" />
                <div className="form-error">This code is invalid.</div>
              </div>
              <div className="form-group checkbox-row">
                <input type="checkbox" id="notify" className="checkbox" defaultChecked />
                <label htmlFor="notify" className="body-sm">Notify me about schedule changes</label>
              </div>
              <div className="form-group">
                <label className="form-label">Learning format</label>
                <select className="form-input">
                  <option>Hybrid</option>
                  <option>Online</option>
                  <option>Campus</option>
                </select>
              </div>
              <button className="btn btn-primary">Submit request</button>
            </div>
          </section>

          <section className="section">
            <h2 className="section-title">Feedback & Status</h2>
            <div style={{ maxWidth: '560px' }}>
              <div className="alert alert-success">
                <span>✓</span>
                <span>Enrollment confirmed for the next cohort.</span>
              </div>
              <div className="alert alert-error">
                <span>✕</span>
                <span>Payment failed. Please update your billing details.</span>
              </div>
              <div className="alert alert-warning">
                <span>⚠</span>
                <span>Only a few spots remain for this cohort.</span>
              </div>
              <div className="alert alert-info">
                <span>ℹ</span>
                <span>New mentoring sessions are now available.</span>
              </div>
              <div style={{ marginTop: '16px' }}>
                <div className="body-sm" style={{ marginBottom: '8px' }}>Cohort readiness</div>
                <div className="progress">
                  <div className="progress-fill"></div>
                </div>
              </div>
            </div>
          </section>

          <section className="section">
            <h2 className="section-title">Sample Content Layout</h2>
            <div className="data-rows">
              <div className="data-row">
                <div className="row-info">
                  <div className="row-title">Java Sprint: Data Layer</div>
                  <div className="row-subtitle">Next review in 3 days</div>
                </div>
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                  <span className="status status-active">Active</span>
                  <button className="btn btn-secondary">Open</button>
                </div>
              </div>
              <div className="data-row">
                <div className="row-info">
                  <div className="row-title">Cloud Deployment Practice</div>
                  <div className="row-subtitle">Mentor feedback pending</div>
                </div>
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                  <span className="status status-review">In review</span>
                  <button className="btn btn-secondary">View</button>
                </div>
              </div>
              <div className="data-row">
                <div className="row-info">
                  <div className="row-title">Frontend Layout Drill</div>
                  <div className="row-subtitle">On hold until next week</div>
                </div>
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                  <span className="status status-paused">Paused</span>
                  <button className="btn btn-secondary">Reschedule</button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
