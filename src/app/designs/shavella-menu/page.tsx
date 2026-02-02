import React from 'react';

const cssStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');

  .showcase {
    /* Color Tokens */
    --bg-dark: #0A0A0A;
    --bg-card: #141414;
    --bg-elevated: #1A1A1A;
    --cream: #F5E6C8;
    --light-blue: #C5E7F5;

    --text-primary: #FFFFFF;
    --text-secondary: rgba(255, 255, 255, 0.75);
    --text-tertiary: rgba(255, 255, 255, 0.5);
    --text-dark: #1A1A1A;

    --accent-orange: #E87D40;
    --accent-red: #E53935;
    --accent-pink: #E84C88;
    --accent-green: #4CAF50;

    --border-subtle: rgba(255, 255, 255, 0.1);
    --border-default: rgba(255, 255, 255, 0.2);

    /* Typography */
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    background: var(--bg-dark);
    color: var(--text-primary);
    min-height: 100vh;
    padding: 48px 24px;
    -webkit-font-smoothing: antialiased;
  }

  .showcase-container {
    max-width: 1280px;
    margin: 0 auto;
  }

  .section {
    background: var(--bg-card);
    padding: 32px;
    margin-bottom: 24px;
  }

  .section-title {
    font-size: 14px;
    font-weight: 700;
    color: var(--text-tertiary);
    margin-bottom: 24px;
    padding-bottom: 16px;
    border-bottom: 2px solid var(--border-subtle);
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  /* Hero Section */
  .hero {
    text-align: center;
    padding: 80px 40px;
    background: var(--bg-dark);
    position: relative;
    overflow: hidden;
  }

  .hero::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 50% 100%, rgba(232, 125, 64, 0.1) 0%, transparent 50%);
    pointer-events: none;
  }

  .hero-title {
    font-size: 72px;
    font-weight: 900;
    color: var(--text-primary);
    letter-spacing: -0.03em;
    line-height: 0.9;
    margin-bottom: 16px;
    text-transform: uppercase;
    position: relative;
  }

  .hero-subtitle {
    font-size: 18px;
    color: var(--text-secondary);
    line-height: 1.5;
    margin-bottom: 32px;
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
  }

  .hero-actions {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
  }

  /* Buttons */
  .btn {
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    font-weight: 700;
    padding: 14px 28px;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-out;
    text-transform: uppercase;
    letter-spacing: 0.02em;
  }

  .btn-primary {
    background: var(--text-primary);
    color: var(--bg-dark);
  }

  .btn-primary:hover {
    background: var(--accent-orange);
    color: var(--text-primary);
  }

  .btn-secondary {
    background: transparent;
    color: var(--text-primary);
    border: 2px solid var(--text-primary);
  }

  .btn-secondary:hover {
    background: var(--text-primary);
    color: var(--bg-dark);
  }

  .btn-accent {
    background: var(--accent-orange);
    color: var(--text-primary);
  }

  .btn-accent:hover {
    background: var(--accent-red);
  }

  .btn-disabled {
    background: var(--bg-elevated);
    color: var(--text-tertiary);
    cursor: not-allowed;
  }

  /* Color Palette Grid */
  .color-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    gap: 16px;
  }

  .color-swatch {
    text-align: center;
  }

  .color-box {
    width: 100%;
    height: 80px;
    margin-bottom: 10px;
    border: 1px solid var(--border-subtle);
  }

  .color-name {
    font-size: 13px;
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 4px;
    text-transform: uppercase;
  }

  .color-hex {
    font-size: 12px;
    color: var(--text-tertiary);
    font-family: 'SF Mono', 'Monaco', monospace;
  }

  /* Typography */
  .type-sample {
    margin-bottom: 24px;
    padding-bottom: 20px;
    border-bottom: 1px solid var(--border-subtle);
  }

  .type-sample:last-child {
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 0;
  }

  .type-label {
    font-size: 12px;
    color: var(--text-tertiary);
    margin-bottom: 10px;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .h1-sample { font-size: 72px; font-weight: 900; letter-spacing: -0.03em; text-transform: uppercase; line-height: 0.9; }
  .h2-sample { font-size: 48px; font-weight: 900; letter-spacing: -0.02em; text-transform: uppercase; }
  .h3-sample { font-size: 32px; font-weight: 700; letter-spacing: -0.01em; text-transform: uppercase; }
  .h4-sample { font-size: 18px; font-weight: 700; text-transform: uppercase; }
  .body-large { font-size: 18px; line-height: 1.6; color: var(--text-secondary); }
  .body-regular { font-size: 14px; line-height: 1.5; color: var(--text-secondary); }
  .caption { font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: var(--text-tertiary); }

  /* Buttons Grid */
  .buttons-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    align-items: center;
  }

  /* Menu Items */
  .menu-section {
    background: var(--bg-dark);
    padding: 40px;
  }

  .menu-category {
    font-size: 32px;
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: -0.01em;
    margin-bottom: 24px;
    padding-bottom: 16px;
    border-bottom: 3px solid var(--text-primary);
  }

  .menu-list {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .menu-item {
    display: flex;
    align-items: baseline;
    gap: 12px;
  }

  .menu-item-badge {
    background: var(--accent-red);
    color: var(--text-primary);
    font-size: 10px;
    font-weight: 700;
    padding: 4px 8px;
    text-transform: uppercase;
    flex-shrink: 0;
  }

  .menu-item-name {
    font-size: 18px;
    font-weight: 700;
    text-transform: uppercase;
    white-space: nowrap;
  }

  .menu-item-dots {
    flex: 1;
    border-bottom: 2px dotted rgba(255, 255, 255, 0.3);
    margin: 0 8px;
    min-width: 40px;
    transform: translateY(-4px);
  }

  .menu-item-price {
    font-size: 20px;
    font-weight: 700;
    white-space: nowrap;
  }

  .menu-item-desc {
    font-size: 12px;
    color: var(--text-tertiary);
    text-transform: uppercase;
    margin-top: 4px;
    padding-left: 0;
  }

  /* Cards */
  .cards-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 24px;
  }

  .card {
    background: var(--bg-elevated);
    overflow: hidden;
    transition: all 0.2s ease-out;
    position: relative;
  }

  .card:hover {
    transform: translateY(-4px);
  }

  .card-cream {
    background: var(--cream);
    color: var(--text-dark);
  }

  .card-blue {
    background: var(--light-blue);
    color: var(--text-dark);
  }

  .card-header {
    padding: 24px 24px 16px;
    position: relative;
  }

  .card-tag {
    position: absolute;
    top: 16px;
    right: 16px;
    background: var(--accent-orange);
    color: var(--text-primary);
    font-size: 12px;
    font-weight: 700;
    padding: 6px 12px;
    transform: rotate(-3deg);
  }

  .card-title {
    font-size: 24px;
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: -0.01em;
    line-height: 1.1;
  }

  .card-body {
    padding: 0 24px 24px;
  }

  .card-text {
    font-size: 14px;
    line-height: 1.5;
    opacity: 0.8;
    margin-bottom: 16px;
  }

  /* Badges */
  .badge {
    display: inline-flex;
    align-items: center;
    padding: 6px 12px;
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
  }

  .badge-red {
    background: var(--accent-red);
    color: var(--text-primary);
  }

  .badge-orange {
    background: var(--accent-orange);
    color: var(--text-primary);
  }

  .badge-green {
    background: var(--accent-green);
    color: var(--text-primary);
  }

  .badge-pink {
    background: var(--accent-pink);
    color: var(--text-primary);
  }

  .badge-outline {
    background: transparent;
    border: 2px solid var(--text-primary);
    color: var(--text-primary);
  }

  /* Forms */
  .form-group {
    margin-bottom: 20px;
  }

  .form-label {
    display: block;
    font-size: 12px;
    font-weight: 700;
    color: var(--text-secondary);
    margin-bottom: 8px;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .form-input {
    width: 100%;
    padding: 14px 16px;
    font-size: 14px;
    font-family: 'Inter', sans-serif;
    border: 2px solid var(--border-default);
    background: var(--bg-dark);
    color: var(--text-primary);
    transition: all 0.2s ease-out;
  }

  .form-input::placeholder {
    color: var(--text-tertiary);
  }

  .form-input:focus {
    outline: none;
    border-color: var(--accent-orange);
  }

  .form-input.error {
    border-color: var(--accent-red);
  }

  .error-message {
    font-size: 12px;
    color: var(--accent-red);
    margin-top: 6px;
    font-weight: 600;
  }

  .checkbox-group {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .checkbox {
    width: 20px;
    height: 20px;
    border: 2px solid var(--border-default);
    background: var(--bg-dark);
    cursor: pointer;
    accent-color: var(--accent-orange);
  }

  /* Alerts */
  .alert {
    padding: 16px 20px;
    margin-bottom: 12px;
    font-size: 14px;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 12px;
    border-left: 4px solid;
  }

  .alert-success {
    background: rgba(76, 175, 80, 0.15);
    color: var(--accent-green);
    border-color: var(--accent-green);
  }

  .alert-error {
    background: rgba(229, 57, 53, 0.15);
    color: var(--accent-red);
    border-color: var(--accent-red);
  }

  .alert-warning {
    background: rgba(232, 125, 64, 0.15);
    color: var(--accent-orange);
    border-color: var(--accent-orange);
  }

  .alert-info {
    background: rgba(232, 76, 136, 0.15);
    color: var(--accent-pink);
    border-color: var(--accent-pink);
  }

  /* Progress Bar */
  .progress-container {
    margin-top: 24px;
  }

  .progress-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
  }

  .progress-label {
    font-size: 12px;
    font-weight: 700;
    color: var(--text-tertiary);
    text-transform: uppercase;
  }

  .progress-value {
    font-size: 14px;
    font-weight: 700;
    color: var(--text-primary);
  }

  .progress {
    width: 100%;
    height: 8px;
    background: var(--bg-elevated);
    overflow: hidden;
  }

  .progress-fill {
    height: 100%;
    background: var(--accent-orange);
    transition: width 0.3s ease-out;
  }

  /* Feature List */
  .feature-list {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .feature-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 24px;
    background: var(--bg-elevated);
    border-left: 4px solid var(--accent-orange);
    transition: all 0.2s ease-out;
  }

  .feature-item:hover {
    background: var(--bg-card);
    border-left-color: var(--accent-red);
  }

  .feature-info {
    display: flex;
    align-items: center;
    gap: 16px;
    flex: 1;
  }

  .feature-icon {
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    flex-shrink: 0;
  }

  .feature-content {
    flex: 1;
  }

  .feature-title {
    font-size: 16px;
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 4px;
  }

  .feature-subtitle {
    font-size: 13px;
    color: var(--text-tertiary);
  }

  .feature-actions {
    display: flex;
    gap: 12px;
    align-items: center;
  }

  /* Stats Grid */
  .stats-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2px;
    background: var(--border-subtle);
    margin-top: 24px;
  }

  .stat-card {
    background: var(--bg-dark);
    padding: 24px;
    text-align: center;
  }

  .stat-value {
    font-size: 36px;
    font-weight: 900;
    letter-spacing: -0.02em;
    color: var(--text-primary);
    margin-bottom: 4px;
  }

  .stat-value-orange {
    color: var(--accent-orange);
  }

  .stat-label {
    font-size: 12px;
    font-weight: 700;
    color: var(--text-tertiary);
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  @media (max-width: 768px) {
    .hero-title {
      font-size: 48px;
    }
    .stats-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;

export default function ShavellaMenuShowcase() {
  return (
    <>
      <style>{cssStyles}</style>
      <main className="showcase">
        <div className="showcase-container">
          {/* Hero Section */}
          <section className="section hero">
            <h1 className="hero-title">Shavella</h1>
            <p className="hero-subtitle">
              Bold flavors, bold design. A street food experience that commands attention with angular typography and high-contrast aesthetics.
            </p>
            <div className="hero-actions">
              <button className="btn btn-primary">View Menu</button>
              <button className="btn btn-secondary">Find Us</button>
            </div>
          </section>

          {/* Color Palette */}
          <section className="section">
            <h2 className="section-title">Color Palette</h2>

            <div style={{ marginBottom: '32px' }}>
              <h3 style={{ fontSize: '13px', fontWeight: '700', marginBottom: '16px', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>Backgrounds</h3>
              <div className="color-grid">
                <div className="color-swatch">
                  <div className="color-box" style={{ background: '#0A0A0A' }}></div>
                  <div className="color-name">Dark</div>
                  <div className="color-hex">#0A0A0A</div>
                </div>
                <div className="color-swatch">
                  <div className="color-box" style={{ background: '#141414' }}></div>
                  <div className="color-name">Card</div>
                  <div className="color-hex">#141414</div>
                </div>
                <div className="color-swatch">
                  <div className="color-box" style={{ background: '#F5E6C8' }}></div>
                  <div className="color-name">Cream</div>
                  <div className="color-hex">#F5E6C8</div>
                </div>
                <div className="color-swatch">
                  <div className="color-box" style={{ background: '#C5E7F5' }}></div>
                  <div className="color-name">Light Blue</div>
                  <div className="color-hex">#C5E7F5</div>
                </div>
              </div>
            </div>

            <div>
              <h3 style={{ fontSize: '13px', fontWeight: '700', marginBottom: '16px', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>Accent Colors</h3>
              <div className="color-grid">
                <div className="color-swatch">
                  <div className="color-box" style={{ background: '#E87D40' }}></div>
                  <div className="color-name">Orange</div>
                  <div className="color-hex">#E87D40</div>
                </div>
                <div className="color-swatch">
                  <div className="color-box" style={{ background: '#E53935' }}></div>
                  <div className="color-name">Red</div>
                  <div className="color-hex">#E53935</div>
                </div>
                <div className="color-swatch">
                  <div className="color-box" style={{ background: '#E84C88' }}></div>
                  <div className="color-name">Hot Pink</div>
                  <div className="color-hex">#E84C88</div>
                </div>
                <div className="color-swatch">
                  <div className="color-box" style={{ background: '#4CAF50' }}></div>
                  <div className="color-name">Green</div>
                  <div className="color-hex">#4CAF50</div>
                </div>
              </div>
            </div>
          </section>

          {/* Typography */}
          <section className="section">
            <h2 className="section-title">Typography Scale</h2>
            <div className="type-sample">
              <div className="type-label">H1 - Hero Title</div>
              <h1 className="h1-sample">Bold Flavors</h1>
            </div>
            <div className="type-sample">
              <div className="type-label">H2 - Section Title</div>
              <h2 className="h2-sample">Street Food</h2>
            </div>
            <div className="type-sample">
              <div className="type-label">H3 - Category Title</div>
              <h3 className="h3-sample">Specials</h3>
            </div>
            <div className="type-sample">
              <div className="type-label">H4 - Item Name</div>
              <h4 className="h4-sample">Mac-N-Cheese</h4>
            </div>
            <div className="type-sample">
              <div className="type-label">Body Large</div>
              <p className="body-large">
                Our menu features bold combinations of fresh ingredients, house-made sauces, and flavors that punch above their weight.
              </p>
            </div>
            <div className="type-sample">
              <div className="type-label">Caption</div>
              <p className="caption">Open Daily 10:00 - 22:00</p>
            </div>
          </section>

          {/* Buttons */}
          <section className="section">
            <h2 className="section-title">Buttons & Interactive Elements</h2>
            <div className="buttons-grid">
              <button className="btn btn-primary">Primary</button>
              <button className="btn btn-secondary">Secondary</button>
              <button className="btn btn-accent">Accent</button>
              <button className="btn btn-disabled" disabled>Disabled</button>
            </div>
          </section>

          {/* Menu Section */}
          <section className="section menu-section">
            <h2 className="section-title">Menu Layout</h2>

            <div className="menu-category">Specials</div>
            <div className="menu-list">
              <div>
                <div className="menu-item">
                  <span className="menu-item-badge">New</span>
                  <span className="menu-item-name">Mac-N-Cheese</span>
                  <span className="menu-item-dots"></span>
                  <span className="menu-item-price">360</span>
                </div>
                <div className="menu-item-desc">Chicken, mac-n-cheese, crispy onion, Korean carrot, cheese sauce, sriracha</div>
              </div>
            </div>

            <div className="menu-category" style={{ marginTop: '40px' }}>Deep Fried</div>
            <div className="menu-list">
              <div>
                <div className="menu-item">
                  <span className="menu-item-badge">New</span>
                  <span className="menu-item-name">Spicy Picante</span>
                  <span className="menu-item-dots"></span>
                  <span className="menu-item-price">240</span>
                </div>
              </div>
              <div>
                <div className="menu-item">
                  <span className="menu-item-name">Nuggets</span>
                  <span className="menu-item-dots"></span>
                  <span className="menu-item-price">180</span>
                </div>
              </div>
              <div>
                <div className="menu-item">
                  <span className="menu-item-name">Cheese Sticks</span>
                  <span className="menu-item-dots"></span>
                  <span className="menu-item-price">240</span>
                </div>
              </div>
              <div>
                <div className="menu-item">
                  <span className="menu-item-name">Fries</span>
                  <span className="menu-item-dots"></span>
                  <span className="menu-item-price">150</span>
                </div>
              </div>
            </div>
          </section>

          {/* Cards */}
          <section className="section">
            <h2 className="section-title">Cards</h2>
            <div className="cards-grid">
              <div className="card card-cream">
                <div className="card-header">
                  <div className="card-tag">360 RUB</div>
                  <div className="card-title">Mac-N-Cheese Special</div>
                </div>
                <div className="card-body">
                  <div className="card-text">Chicken, mac-n-cheese, lots of cheese, tomatoes, Korean carrot, spicy sauce.</div>
                  <button className="btn btn-primary">Order Now</button>
                </div>
              </div>

              <div className="card card-blue">
                <div className="card-header">
                  <div className="card-tag">399 RUB</div>
                  <div className="card-title">Holiday Special</div>
                </div>
                <div className="card-body">
                  <div className="card-text">Chicken, green peas, turkey ham, potato, pickle, carrot, cabbage, special sauce.</div>
                  <button className="btn btn-primary">Order Now</button>
                </div>
              </div>

              <div className="card">
                <div className="card-header">
                  <div className="card-title">Classic Selection</div>
                </div>
                <div className="card-body">
                  <div className="card-text" style={{ color: 'var(--text-secondary)' }}>Choose from our range of classic wraps with signature sauces.</div>
                  <button className="btn btn-secondary">View All</button>
                </div>
              </div>
            </div>
          </section>

          {/* Badges */}
          <section className="section">
            <h2 className="section-title">Badges & Status</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '24px' }}>
              <span className="badge badge-red">New</span>
              <span className="badge badge-orange">Hot</span>
              <span className="badge badge-green">Vegetarian</span>
              <span className="badge badge-pink">Popular</span>
              <span className="badge badge-outline">Classic</span>
            </div>

            <div className="progress-container">
              <div className="progress-header">
                <span className="progress-label">Order Progress</span>
                <span className="progress-value">65%</span>
              </div>
              <div className="progress">
                <div className="progress-fill" style={{ width: '65%' }}></div>
              </div>
            </div>
          </section>

          {/* Form Elements */}
          <section className="section">
            <h2 className="section-title">Form Elements</h2>
            <div style={{ maxWidth: '480px' }}>
              <div className="form-group">
                <label className="form-label">Your Name</label>
                <input type="text" className="form-input" placeholder="Enter your name" />
              </div>

              <div className="form-group">
                <label className="form-label">Phone Number (Error State)</label>
                <input type="text" className="form-input error" placeholder="+7 (999) 123-45-67" />
                <div className="error-message">Please enter a valid phone number</div>
              </div>

              <div className="form-group">
                <div className="checkbox-group">
                  <input type="checkbox" className="checkbox" id="terms" defaultChecked />
                  <label htmlFor="terms" style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>
                    I agree to the terms of service
                  </label>
                </div>
              </div>

              <button className="btn btn-accent">Place Order</button>
            </div>
          </section>

          {/* Alerts */}
          <section className="section">
            <h2 className="section-title">Alerts & Notifications</h2>
            <div style={{ maxWidth: '560px' }}>
              <div className="alert alert-success">
                <span>+</span>
                <span>Your order has been confirmed!</span>
              </div>
              <div className="alert alert-error">
                <span>X</span>
                <span>This item is currently unavailable</span>
              </div>
              <div className="alert alert-warning">
                <span>!</span>
                <span>Kitchen closes in 30 minutes</span>
              </div>
              <div className="alert alert-info">
                <span>*</span>
                <span>New seasonal menu now available</span>
              </div>
            </div>
          </section>

          {/* Feature List / Sample Content */}
          <section className="section">
            <h2 className="section-title">Order Queue</h2>
            <div className="feature-list">
              <div className="feature-item">
                <div className="feature-info">
                  <div className="feature-icon">1</div>
                  <div className="feature-content">
                    <div className="feature-title">Mac-N-Cheese x2</div>
                    <div className="feature-subtitle">Extra spicy + no onions</div>
                  </div>
                </div>
                <div className="feature-actions">
                  <span className="badge badge-orange">Preparing</span>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-info">
                  <div className="feature-icon">2</div>
                  <div className="feature-content">
                    <div className="feature-title">Classic Wrap x1</div>
                    <div className="feature-subtitle">Standard preparation</div>
                  </div>
                </div>
                <div className="feature-actions">
                  <span className="badge badge-green">Ready</span>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-info">
                  <div className="feature-icon">3</div>
                  <div className="feature-content">
                    <div className="feature-title">Fries + Cheese Sauce</div>
                    <div className="feature-subtitle">Large portion</div>
                  </div>
                </div>
                <div className="feature-actions">
                  <span className="badge badge-outline">Queued</span>
                </div>
              </div>
            </div>

            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-value stat-value-orange">847</div>
                <div className="stat-label">Orders Today</div>
              </div>
              <div className="stat-card">
                <div className="stat-value">12</div>
                <div className="stat-label">In Queue</div>
              </div>
              <div className="stat-card">
                <div className="stat-value">8m</div>
                <div className="stat-label">Avg Wait</div>
              </div>
              <div className="stat-card">
                <div className="stat-value stat-value-orange">98%</div>
                <div className="stat-label">Satisfaction</div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
