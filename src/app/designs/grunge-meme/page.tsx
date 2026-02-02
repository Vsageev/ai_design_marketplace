import React from 'react';

const cssStyles = `
  .showcase {
    /* Colors */
    --paper-base: #E8E4D9;
    --dark-text: #1A1A1A;
    --danger-red: #C41E3A;
    --meme-green: #5C8C5C;
    --deep-shadow: #0D0D0D;
    --success: #4A7C4A;
    --warning: #D97706;
    --error: #991B1B;
    --info: #1E40AF;
    --border-dark: #2D2D2D;
    --checkmark-green: #3A6B3A;

    /* Typography */
    --font-primary: 'Impact', 'Franklin Gothic Bold', 'Arial Black', sans-serif;
    --font-secondary: 'Arial', 'Helvetica', sans-serif;
    --font-mono: 'Courier New', monospace;

    /* Spacing */
    --spacing-xs: 4px;
    --spacing-sm: 8px;
    --spacing-md: 12px;
    --spacing-lg: 24px;
    --spacing-xl: 48px;

    background: var(--paper-base);
    color: var(--dark-text);
    font-family: var(--font-secondary);
    padding: 40px;
    max-width: 1400px;
    margin: 0 auto;
    position: relative;
  }

  .showcase::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: 
      repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px),
      repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px);
    pointer-events: none;
    opacity: 0.5;
    z-index: 1;
  }

  .showcase > * {
    position: relative;
    z-index: 2;
  }

  /* Section Styling */
  .section {
    margin-bottom: var(--spacing-xl);
    background: var(--paper-base);
    border: 4px solid var(--border-dark);
    padding: var(--spacing-lg);
    box-shadow: 8px 8px 0 rgba(0, 0, 0, 0.2);
  }

  .section-title {
    font-family: var(--font-primary);
    font-size: 48px;
    font-weight: 800;
    line-height: 1.1;
    letter-spacing: -0.01em;
    text-transform: uppercase;
    margin-bottom: var(--spacing-lg);
    color: var(--dark-text);
  }

  /* Hero */
  .hero {
    text-align: center;
    padding: var(--spacing-xl) var(--spacing-lg);
    background: var(--paper-base);
    border: 4px solid var(--border-dark);
    margin-bottom: var(--spacing-xl);
    position: relative;
    box-shadow: 12px 12px 0 rgba(0, 0, 0, 0.3);
  }

  .hero-title {
    font-family: var(--font-primary);
    font-size: 64px;
    font-weight: 800;
    line-height: 1.0;
    letter-spacing: -0.02em;
    text-transform: uppercase;
    margin-bottom: var(--spacing-md);
    color: var(--dark-text);
  }

  .hero-subtitle {
    font-size: 20px;
    font-weight: 600;
    line-height: 1.5;
    color: var(--danger-red);
    text-transform: uppercase;
    margin-bottom: var(--spacing-lg);
  }

  /* Buttons */
  .btn {
    font-family: var(--font-secondary);
    font-size: 16px;
    font-weight: 700;
    text-transform: uppercase;
    padding: 12px 32px;
    border: 3px solid var(--deep-shadow);
    cursor: pointer;
    transition: transform 0.2s, box-shadow 0.2s;
    display: inline-block;
    text-decoration: none;
  }

  .btn:hover:not(:disabled) {
    transform: scale(1.05) rotate(-1deg);
    box-shadow: 6px 6px 0 rgba(0, 0, 0, 0.3);
  }

  .btn-primary {
    background: var(--danger-red);
    color: white;
  }

  .btn-secondary {
    background: var(--dark-text);
    color: white;
    border-color: white;
  }

  .btn-success {
    background: var(--success);
    color: white;
  }

  .btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* Checkbox/Checklist */
  .checklist {
    list-style: none;
    padding: 0;
    margin: var(--spacing-lg) 0;
  }

  .checklist-item {
    display: flex;
    align-items: center;
    gap: var(--spacing-md);
    margin-bottom: var(--spacing-sm);
    font-size: 20px;
    font-weight: 600;
  }

  .checkbox {
    width: 24px;
    height: 24px;
    background: var(--checkmark-green);
    border: 2px solid var(--deep-shadow);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: 800;
    flex-shrink: 0;
  }

  /* Color Palette */
  .color-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: var(--spacing-md);
  }

  .color-swatch {
    border: 3px solid var(--border-dark);
    padding: var(--spacing-md);
    text-align: center;
  }

  .color-box {
    width: 100%;
    height: 80px;
    margin-bottom: var(--spacing-sm);
    border: 2px solid var(--deep-shadow);
  }

  .color-name {
    font-weight: 700;
    text-transform: uppercase;
    font-size: 12px;
    margin-bottom: 4px;
  }

  .color-hex {
    font-family: var(--font-mono);
    font-size: 11px;
    color: var(--border-dark);
  }

  /* Typography */
  .type-sample {
    margin-bottom: var(--spacing-lg);
    padding-bottom: var(--spacing-md);
    border-bottom: 3px solid var(--border-dark);
  }

  .type-sample:last-child {
    border-bottom: none;
  }

  .type-label {
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
    color: var(--border-dark);
    margin-bottom: var(--spacing-xs);
  }

  .h1-sample {
    font-family: var(--font-primary);
    font-size: 64px;
    font-weight: 800;
    line-height: 1.0;
    letter-spacing: -0.02em;
    text-transform: uppercase;
  }

  .h2-sample {
    font-family: var(--font-primary);
    font-size: 48px;
    font-weight: 800;
    line-height: 1.1;
    letter-spacing: -0.01em;
    text-transform: uppercase;
  }

  .h3-sample {
    font-family: var(--font-primary);
    font-size: 36px;
    font-weight: 700;
    line-height: 1.2;
  }

  .body-large-sample {
    font-size: 20px;
    font-weight: 600;
    line-height: 1.5;
  }

  .body-sample {
    font-size: 16px;
    font-weight: 400;
    line-height: 1.6;
  }

  .caption-sample {
    font-size: 14px;
    font-weight: 400;
    line-height: 1.4;
  }

  /* Buttons Section */
  .button-grid {
    display: flex;
    gap: var(--spacing-md);
    flex-wrap: wrap;
    align-items: center;
  }

  .link-style {
    color: var(--danger-red);
    text-decoration: underline;
    font-weight: 700;
    text-transform: uppercase;
    cursor: pointer;
  }

  .link-style:hover {
    color: var(--deep-shadow);
    text-decoration: none;
  }

  /* Cards */
  .card-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: var(--spacing-lg);
  }

  .card {
    background: var(--paper-base);
    border: 4px solid var(--border-dark);
    padding: 0;
    transition: transform 0.2s, box-shadow 0.2s;
    box-shadow: 4px 4px 0 rgba(0, 0, 0, 0.2);
  }

  .card:hover {
    transform: rotate(1deg) translateY(-4px);
    box-shadow: 8px 8px 0 rgba(0, 0, 0, 0.3);
  }

  .card-header {
    background: var(--meme-green);
    height: 100px;
    border-bottom: 4px solid var(--border-dark);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 48px;
  }

  .card-body {
    padding: var(--spacing-md);
  }

  .card-title {
    font-family: var(--font-primary);
    font-size: 28px;
    font-weight: 700;
    line-height: 1.3;
    text-transform: uppercase;
    margin-bottom: var(--spacing-sm);
  }

  .card-desc {
    font-size: 16px;
    line-height: 1.6;
    margin-bottom: var(--spacing-md);
  }

  /* Forms */
  .form-group {
    margin-bottom: var(--spacing-lg);
  }

  .form-label {
    display: block;
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: var(--spacing-xs);
    font-size: 14px;
  }

  .form-input {
    width: 100%;
    padding: 12px;
    border: 3px solid var(--border-dark);
    background: var(--paper-base);
    font-family: var(--font-secondary);
    font-size: 16px;
    transition: border-color 0.2s;
  }

  .form-input:focus {
    outline: none;
    border-color: var(--danger-red);
  }

  .form-input.error {
    border-color: var(--error);
  }

  .form-error {
    color: var(--error);
    font-size: 14px;
    font-weight: 700;
    margin-top: var(--spacing-xs);
    text-transform: uppercase;
  }

  .checkbox-group {
    display: flex;
    align-items: center;
    gap: var(--spacing-sm);
  }

  /* Feedback */
  .alert {
    padding: var(--spacing-md);
    border: 3px solid var(--border-dark);
    margin-bottom: var(--spacing-md);
    font-weight: 600;
  }

  .alert-success {
    background: var(--success);
    color: white;
  }

  .alert-error {
    background: var(--error);
    color: white;
  }

  .alert-warning {
    background: var(--warning);
    color: white;
  }

  .alert-info {
    background: var(--info);
    color: white;
  }

  .progress-bar {
    width: 100%;
    height: 40px;
    background: white;
    border: 3px solid var(--border-dark);
    position: relative;
    overflow: hidden;
  }

  .progress-fill {
    height: 100%;
    background: var(--meme-green);
    width: 65%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 800;
    color: white;
    text-transform: uppercase;
  }

  /* Sample Content */
  .content-table {
    width: 100%;
  }

  .content-row {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    gap: var(--spacing-md);
    padding: var(--spacing-md);
    border: 3px solid var(--border-dark);
    margin-bottom: var(--spacing-sm);
    align-items: center;
    background: var(--paper-base);
  }

  .badge {
    display: inline-block;
    padding: 6px 12px;
    border: 2px solid var(--border-dark);
    font-weight: 700;
    text-transform: uppercase;
    font-size: 12px;
  }

  .badge-success {
    background: var(--success);
    color: white;
  }

  .badge-error {
    background: var(--error);
    color: white;
  }

  .btn-small {
    padding: 6px 16px;
    font-size: 14px;
  }
`;

export default function GrungeMemeShowcase() {
  return (
    <>
      <style>{cssStyles}</style>
      <main className="showcase">
        {/* Hero */}
        <div className="hero">
          <h1 className="hero-title">HOW TO FIND<br/>WORK ONLINE</h1>
          <p className="hero-subtitle">✓ NO EXPERIENCE ✓ FOR ANYONE ✓ LOADS OF MONEY</p>
          <button className="btn btn-primary">START NOW</button>
        </div>

        {/* Color Palette */}
        <div className="section">
          <h2 className="section-title">Colors</h2>
          <div className="color-grid">
            <div className="color-swatch">
              <div className="color-box" style={{ background: '#E8E4D9' }}></div>
              <div className="color-name">Paper Base</div>
              <div className="color-hex">#E8E4D9</div>
            </div>
            <div className="color-swatch">
              <div className="color-box" style={{ background: '#1A1A1A' }}></div>
              <div className="color-name">Dark Text</div>
              <div className="color-hex">#1A1A1A</div>
            </div>
            <div className="color-swatch">
              <div className="color-box" style={{ background: '#C41E3A' }}></div>
              <div className="color-name">Danger Red</div>
              <div className="color-hex">#C41E3A</div>
            </div>
            <div className="color-swatch">
              <div className="color-box" style={{ background: '#5C8C5C' }}></div>
              <div className="color-name">Meme Green</div>
              <div className="color-hex">#5C8C5C</div>
            </div>
            <div className="color-swatch">
              <div className="color-box" style={{ background: '#4A7C4A' }}></div>
              <div className="color-name">Success</div>
              <div className="color-hex">#4A7C4A</div>
            </div>
            <div className="color-swatch">
              <div className="color-box" style={{ background: '#D97706' }}></div>
              <div className="color-name">Warning</div>
              <div className="color-hex">#D97706</div>
            </div>
            <div className="color-swatch">
              <div className="color-box" style={{ background: '#991B1B' }}></div>
              <div className="color-name">Error</div>
              <div className="color-hex">#991B1B</div>
            </div>
            <div className="color-swatch">
              <div className="color-box" style={{ background: '#1E40AF' }}></div>
              <div className="color-name">Info</div>
              <div className="color-hex">#1E40AF</div>
            </div>
          </div>
        </div>

        {/* Typography */}
        <div className="section">
          <h2 className="section-title">Typography</h2>

          <div className="type-sample">
            <div className="type-label">H1 - 64px / 800</div>
            <div className="h1-sample">MAXIMUM IMPACT</div>
          </div>

          <div className="type-sample">
            <div className="type-label">H2 - 48px / 800</div>
            <div className="h2-sample">SECTION HEADING</div>
          </div>

          <div className="type-sample">
            <div className="type-label">H3 - 36px / 700</div>
            <div className="h3-sample">Subheading</div>
          </div>

          <div className="type-sample">
            <div className="type-label">Body Large - 20px / 600</div>
            <div className="body-large-sample">Bold text to grab attention. Perfect for lists and key points.</div>
          </div>

          <div className="type-sample">
            <div className="type-label">Body - 16px / 400</div>
            <div className="body-sample">Regular text for main content. Easy and pleasant to read. Use for paragraphs and long descriptions. This is the main font for all page content.</div>
          </div>

          <div className="type-sample">
            <div className="type-label">Caption - 14px / 400</div>
            <div className="caption-sample">Small text for captions and fine details</div>
          </div>
        </div>

        {/* Buttons */}
        <div className="section">
          <h2 className="section-title">Buttons</h2>
          <div className="button-grid">
            <button className="btn btn-primary">Primary</button>
            <button className="btn btn-secondary">Secondary</button>
            <button className="btn btn-success">Success</button>
            <button className="btn btn-primary" disabled>Disabled</button>
            <a href="#" className="link-style">Link Style</a>
          </div>
        </div>

        {/* Cards */}
        <div className="section">
          <h2 className="section-title">Cards</h2>
          <div className="card-grid">
            <div className="card">
              <div className="card-header">🎯</div>
              <div className="card-body">
                <h3 className="card-title">Goal</h3>
                <p className="card-desc">Find work without experience. Just start doing and earn money.</p>
                <button className="btn btn-primary btn-small">Learn More</button>
              </div>
            </div>
            <div className="card">
              <div className="card-header">💰</div>
              <div className="card-body">
                <h3 className="card-title">Money</h3>
                <p className="card-desc">Get real payment for your work. Fast payouts and fair terms.</p>
                <button className="btn btn-primary btn-small">Start</button>
              </div>
            </div>
            <div className="card">
              <div className="card-header">🚀</div>
              <div className="card-body">
                <h3 className="card-title">Growth</h3>
                <p className="card-desc">Grow with us. New skills and opportunities every day.</p>
                <button className="btn btn-primary btn-small">Let's Go</button>
              </div>
            </div>
          </div>
        </div>

        {/* Forms */}
        <div className="section">
          <h2 className="section-title">Forms</h2>

          <div className="form-group">
            <label className="form-label">Your Name</label>
            <input type="text" className="form-input" placeholder="Enter name" />
          </div>

          <div className="form-group">
            <label className="form-label">Email with Error</label>
            <input type="email" className="form-input error" placeholder="email@example.com" />
            <div className="form-error">Invalid email format</div>
          </div>

          <div className="form-group">
            <div className="checkbox-group">
              <div className="checkbox">✓</div>
              <label className="form-label" style={{ marginBottom: 0 }}>I agree to the terms</label>
            </div>
          </div>

          <button className="btn btn-primary">Submit</button>
        </div>

        {/* Feedback */}
        <div className="section">
          <h2 className="section-title">Notifications</h2>

          <div className="alert alert-success">
            Success! Your data has been saved.
          </div>

          <div className="alert alert-error">
            Error! Something went wrong.
          </div>

          <div className="alert alert-warning">
            Warning! Check your input data.
          </div>

          <div className="alert alert-info">
            Info: Update will take a few minutes.
          </div>

          <h3 className="h3-sample" style={{ marginTop: '24px', marginBottom: '12px' }}>Progress</h3>
          <div className="progress-bar">
            <div className="progress-fill">65%</div>
          </div>
        </div>

        {/* Sample Content */}
        <div className="section">
          <h2 className="section-title">Task List</h2>

          <div className="content-row">
            <div>
              <strong>Create Account</strong>
              <div className="caption-sample">Register on the platform</div>
            </div>
            <div>
              <span className="badge badge-success">Active</span>
            </div>
            <div>
              <button className="btn btn-primary btn-small">Action</button>
            </div>
          </div>

          <div className="content-row">
            <div>
              <strong>Complete Profile</strong>
              <div className="caption-sample">Add information about yourself</div>
            </div>
            <div>
              <span className="badge badge-success">Active</span>
            </div>
            <div>
              <button className="btn btn-primary btn-small">Action</button>
            </div>
          </div>

          <div className="content-row">
            <div>
              <strong>Find Work</strong>
              <div className="caption-sample">Choose a suitable order</div>
            </div>
            <div>
              <span className="badge badge-error">Inactive</span>
            </div>
            <div>
              <button className="btn btn-primary btn-small" disabled>Action</button>
            </div>
          </div>
        </div>

        {/* Checklist Example */}
        <div className="section">
          <h2 className="section-title">Why Choose Us?</h2>
          <ul className="checklist">
            <li className="checklist-item">
              <span className="checkbox">✓</span>
              <span>NO EXPERIENCE - start from scratch</span>
            </li>
            <li className="checklist-item">
              <span className="checkbox">✓</span>
              <span>FOR ANYONE - no restrictions</span>
            </li>
            <li className="checklist-item">
              <span className="checkbox">✓</span>
              <span>LOADS OF MONEY - start earning today</span>
            </li>
            <li className="checklist-item">
              <span className="checkbox">✓</span>
              <span>QUICK START - begin in 5 minutes</span>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
}
