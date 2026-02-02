import React from 'react';

const cssStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;500;600;700&display=swap');

  .sv-showcase {
    /* Primary Colors */
    --night-black: #000000;
    --cream-beige: #F5E6C8;
    --sky-blue: #A8D4E6;

    /* Accent Colors */
    --hot-pink: #E84B8A;
    --tomato-red: #E53935;
    --cheese-orange: #E67E22;
    --golden-mustard: #D4A56A;
    --carrot-orange: #F39C12;
    --fresh-green: #27AE60;

    /* Text Colors */
    --pure-white: #FFFFFF;
    --deep-black: #1A1A1A;
    --warm-gray: #666666;

    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    background: var(--cream-beige);
    min-height: 100vh;
    -webkit-font-smoothing: antialiased;
  }

  .sv-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 48px 24px;
  }

  .sv-section {
    margin-bottom: 48px;
  }

  .sv-section-title {
    font-family: 'Bebas Neue', Impact, sans-serif;
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--warm-gray);
    margin-bottom: 24px;
    padding-bottom: 12px;
    border-bottom: 2px solid var(--deep-black);
  }

  /* Hero Section - Dark Theme */
  .sv-hero {
    background: var(--night-black);
    border-radius: 24px;
    padding: 48px;
    position: relative;
    overflow: hidden;
    margin-bottom: 48px;
  }

  .sv-hero-content {
    position: relative;
    z-index: 2;
  }

  .sv-hero-title {
    font-family: 'Bebas Neue', Impact, sans-serif;
    font-size: 72px;
    font-weight: 400;
    color: var(--pure-white);
    line-height: 0.95;
    letter-spacing: -0.02em;
    text-transform: uppercase;
    margin-bottom: 16px;
  }

  .sv-hero-title .highlight {
    color: var(--cheese-orange);
  }

  .sv-hero-subtitle {
    font-size: 18px;
    color: rgba(255, 255, 255, 0.7);
    margin-bottom: 32px;
    max-width: 500px;
  }

  .sv-hero-cta {
    display: inline-flex;
    align-items: center;
    gap: 8px;
  }

  /* Floating Food Illustrations (CSS shapes) */
  .sv-hero-decor {
    position: absolute;
    right: 40px;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .sv-food-item {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 40px;
    animation: sv-float 3s ease-in-out infinite;
  }

  .sv-food-item:nth-child(2) { animation-delay: 0.5s; }
  .sv-food-item:nth-child(3) { animation-delay: 1s; }

  @keyframes sv-float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-10px) rotate(5deg); }
  }

  /* Buttons */
  .sv-btn {
    font-family: 'Bebas Neue', Impact, sans-serif;
    font-size: 18px;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    padding: 14px 28px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.2s ease;
    display: inline-flex;
    align-items: center;
    gap: 8px;
  }

  .sv-btn:hover {
    transform: scale(1.02);
  }

  .sv-btn-primary {
    background: var(--tomato-red);
    color: var(--pure-white);
  }

  .sv-btn-primary:hover {
    background: #c62828;
  }

  .sv-btn-secondary {
    background: var(--cheese-orange);
    color: var(--pure-white);
  }

  .sv-btn-pink {
    background: var(--hot-pink);
    color: var(--pure-white);
  }

  .sv-btn-outline {
    background: transparent;
    color: var(--deep-black);
    border: 2px solid var(--deep-black);
  }

  .sv-btn-outline:hover {
    background: var(--deep-black);
    color: var(--pure-white);
  }

  .sv-btn-disabled {
    background: #ccc;
    color: #888;
    cursor: not-allowed;
  }

  .sv-btn-disabled:hover {
    transform: none;
  }

  /* Color Palette Grid */
  .sv-color-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    gap: 16px;
    margin-bottom: 24px;
  }

  .sv-color-swatch {
    text-align: center;
  }

  .sv-color-box {
    width: 100%;
    height: 80px;
    border-radius: 12px;
    margin-bottom: 10px;
    border: 2px solid rgba(0,0,0,0.1);
  }

  .sv-color-name {
    font-size: 14px;
    font-weight: 600;
    color: var(--deep-black);
    margin-bottom: 4px;
  }

  .sv-color-hex {
    font-size: 12px;
    color: var(--warm-gray);
    font-family: monospace;
  }

  /* Typography */
  .sv-type-sample {
    margin-bottom: 24px;
    padding-bottom: 20px;
    border-bottom: 1px solid rgba(0,0,0,0.1);
  }

  .sv-type-sample:last-child {
    border-bottom: none;
  }

  .sv-type-label {
    font-size: 12px;
    color: var(--warm-gray);
    margin-bottom: 8px;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .sv-display {
    font-family: 'Bebas Neue', Impact, sans-serif;
    font-size: 72px;
    line-height: 0.95;
    letter-spacing: -0.02em;
    text-transform: uppercase;
    color: var(--deep-black);
  }

  .sv-h1 {
    font-family: 'Bebas Neue', Impact, sans-serif;
    font-size: 48px;
    text-transform: uppercase;
    color: var(--deep-black);
  }

  .sv-h2 {
    font-family: 'Bebas Neue', Impact, sans-serif;
    font-size: 36px;
    text-transform: uppercase;
    color: var(--deep-black);
  }

  .sv-h3 {
    font-family: 'Bebas Neue', Impact, sans-serif;
    font-size: 24px;
    text-transform: uppercase;
    color: var(--deep-black);
  }

  .sv-body-large {
    font-size: 18px;
    line-height: 1.6;
    color: var(--warm-gray);
  }

  .sv-body {
    font-size: 16px;
    line-height: 1.5;
    color: var(--deep-black);
  }

  .sv-caption {
    font-size: 14px;
    font-weight: 500;
    color: var(--warm-gray);
  }

  /* Buttons Grid */
  .sv-buttons-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    align-items: center;
  }

  /* Menu Cards */
  .sv-menu-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 24px;
  }

  .sv-menu-card {
    background: var(--pure-white);
    border-radius: 16px;
    overflow: hidden;
    position: relative;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    border: 2px solid var(--deep-black);
  }

  .sv-menu-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 24px rgba(0,0,0,0.15);
  }

  .sv-menu-card-header {
    padding: 24px;
    position: relative;
  }

  .sv-menu-card-title {
    font-family: 'Bebas Neue', Impact, sans-serif;
    font-size: 32px;
    text-transform: uppercase;
    color: var(--deep-black);
    line-height: 1;
    margin-bottom: 8px;
  }

  .sv-menu-card-desc {
    font-size: 14px;
    color: var(--warm-gray);
    line-height: 1.4;
  }

  .sv-price-badge {
    position: absolute;
    top: 16px;
    right: 16px;
    background: var(--cheese-orange);
    color: var(--pure-white);
    padding: 8px 16px;
    border-radius: 20px;
    font-family: 'Bebas Neue', Impact, sans-serif;
    font-size: 18px;
    transform: rotate(-12deg);
    box-shadow: 2px 4px 8px rgba(0,0,0,0.2);
  }

  .sv-price-badge.pink {
    background: var(--hot-pink);
  }

  .sv-price-badge.red {
    background: var(--tomato-red);
  }

  .sv-menu-card-footer {
    padding: 16px 24px;
    border-top: 1px solid rgba(0,0,0,0.1);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .sv-tag {
    display: inline-flex;
    padding: 4px 12px;
    border-radius: 20px;
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
  }

  .sv-tag-spicy {
    background: rgba(229, 57, 53, 0.15);
    color: var(--tomato-red);
  }

  .sv-tag-vegan {
    background: rgba(39, 174, 96, 0.15);
    color: var(--fresh-green);
  }

  .sv-tag-popular {
    background: rgba(232, 75, 138, 0.15);
    color: var(--hot-pink);
  }

  /* Forms */
  .sv-form-group {
    margin-bottom: 20px;
    max-width: 400px;
  }

  .sv-form-label {
    display: block;
    font-family: 'Bebas Neue', Impact, sans-serif;
    font-size: 14px;
    letter-spacing: 0.05em;
    color: var(--deep-black);
    margin-bottom: 8px;
    text-transform: uppercase;
  }

  .sv-form-input {
    width: 100%;
    padding: 14px 16px;
    font-size: 16px;
    font-family: 'Inter', sans-serif;
    border: 2px solid var(--deep-black);
    border-radius: 8px;
    background: var(--pure-white);
    color: var(--deep-black);
    transition: all 0.2s ease;
  }

  .sv-form-input::placeholder {
    color: #aaa;
  }

  .sv-form-input:focus {
    outline: none;
    border-color: var(--cheese-orange);
    box-shadow: 0 0 0 3px rgba(230, 126, 34, 0.2);
  }

  .sv-form-input.error {
    border-color: var(--tomato-red);
  }

  .sv-error-message {
    font-size: 13px;
    color: var(--tomato-red);
    margin-top: 6px;
  }

  .sv-checkbox-group {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .sv-checkbox {
    width: 20px;
    height: 20px;
    border: 2px solid var(--deep-black);
    border-radius: 4px;
    accent-color: var(--cheese-orange);
  }

  /* Alerts */
  .sv-alert {
    padding: 16px 20px;
    border-radius: 12px;
    margin-bottom: 12px;
    font-size: 14px;
    display: flex;
    align-items: center;
    gap: 12px;
    border: 2px solid;
  }

  .sv-alert-success {
    background: rgba(39, 174, 96, 0.1);
    color: var(--fresh-green);
    border-color: var(--fresh-green);
  }

  .sv-alert-error {
    background: rgba(229, 57, 53, 0.1);
    color: var(--tomato-red);
    border-color: var(--tomato-red);
  }

  .sv-alert-warning {
    background: rgba(243, 156, 18, 0.1);
    color: var(--carrot-orange);
    border-color: var(--carrot-orange);
  }

  .sv-alert-info {
    background: rgba(168, 212, 230, 0.3);
    color: #2980b9;
    border-color: var(--sky-blue);
  }

  /* Progress Bar */
  .sv-progress-container {
    margin-top: 24px;
    max-width: 400px;
  }

  .sv-progress-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
  }

  .sv-progress-label {
    font-size: 14px;
    color: var(--warm-gray);
  }

  .sv-progress-value {
    font-family: 'Bebas Neue', Impact, sans-serif;
    font-size: 16px;
    color: var(--deep-black);
  }

  .sv-progress {
    width: 100%;
    height: 12px;
    background: var(--pure-white);
    border: 2px solid var(--deep-black);
    border-radius: 6px;
    overflow: hidden;
  }

  .sv-progress-fill {
    height: 100%;
    background: var(--cheese-orange);
    border-radius: 4px;
    transition: width 0.3s ease;
  }

  /* Promo Section - Dark */
  .sv-promo {
    background: var(--night-black);
    border-radius: 24px;
    padding: 48px;
    text-align: center;
    position: relative;
    overflow: hidden;
  }

  .sv-promo-title {
    font-family: 'Bebas Neue', Impact, sans-serif;
    font-size: 56px;
    color: var(--pure-white);
    text-transform: uppercase;
    line-height: 1;
    margin-bottom: 16px;
  }

  .sv-promo-title .orange {
    color: var(--cheese-orange);
  }

  .sv-promo-subtitle {
    font-size: 18px;
    color: rgba(255, 255, 255, 0.7);
    margin-bottom: 24px;
  }

  .sv-promo-location {
    font-family: 'Bebas Neue', Impact, sans-serif;
    font-size: 20px;
    color: var(--pure-white);
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  /* Order List */
  .sv-order-list {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .sv-order-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 20px;
    background: var(--pure-white);
    border-radius: 12px;
    border: 2px solid var(--deep-black);
    transition: all 0.2s ease;
  }

  .sv-order-item:hover {
    border-color: var(--cheese-orange);
  }

  .sv-order-info {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  .sv-order-icon {
    width: 48px;
    height: 48px;
    background: var(--cream-beige);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
  }

  .sv-order-details h4 {
    font-family: 'Bebas Neue', Impact, sans-serif;
    font-size: 18px;
    text-transform: uppercase;
    color: var(--deep-black);
    margin-bottom: 2px;
  }

  .sv-order-details p {
    font-size: 13px;
    color: var(--warm-gray);
  }

  .sv-order-status {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .sv-status-badge {
    padding: 6px 14px;
    border-radius: 20px;
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
  }

  .sv-status-ready {
    background: var(--fresh-green);
    color: white;
  }

  .sv-status-preparing {
    background: var(--carrot-orange);
    color: white;
  }

  .sv-status-pending {
    background: var(--warm-gray);
    color: white;
  }

  /* Stats Grid */
  .sv-stats-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
    margin-top: 32px;
  }

  .sv-stat-card {
    background: var(--pure-white);
    border: 2px solid var(--deep-black);
    border-radius: 16px;
    padding: 24px;
    text-align: center;
  }

  .sv-stat-value {
    font-family: 'Bebas Neue', Impact, sans-serif;
    font-size: 36px;
    color: var(--cheese-orange);
    margin-bottom: 4px;
  }

  .sv-stat-label {
    font-size: 13px;
    color: var(--warm-gray);
    text-transform: uppercase;
  }

  @media (max-width: 768px) {
    .sv-hero-title {
      font-size: 48px;
    }

    .sv-stats-grid {
      grid-template-columns: repeat(2, 1fr);
    }

    .sv-promo-title {
      font-size: 36px;
    }
  }
`;

export default function ShavellaVibrantShowcase() {
  return (
    <>
      <style>{cssStyles}</style>
      <main className="sv-showcase">
        <div className="sv-container">
          {/* Hero Section */}
          <section className="sv-hero">
            <div className="sv-hero-content">
              <h1 className="sv-hero-title">
                Fresh <span className="highlight">Wraps</span><br />
                Bold Flavors
              </h1>
              <p className="sv-hero-subtitle">
                Street food reimagined. Hand-crafted wraps with premium ingredients,
                bold spices, and unforgettable taste.
              </p>
              <div className="sv-hero-cta">
                <button className="sv-btn sv-btn-primary">Order Now</button>
                <button className="sv-btn sv-btn-outline" style={{ color: 'white', borderColor: 'white' }}>
                  View Menu
                </button>
              </div>
            </div>
            <div className="sv-hero-decor">
              <div className="sv-food-item">🥕</div>
              <div className="sv-food-item">🍅</div>
              <div className="sv-food-item">🧀</div>
            </div>
          </section>

          {/* Color Palette */}
          <section className="sv-section">
            <h2 className="sv-section-title">Color Palette</h2>

            <h3 style={{ fontSize: '14px', fontWeight: 600, marginBottom: '16px', color: 'var(--deep-black)' }}>Primary Colors</h3>
            <div className="sv-color-grid">
              <div className="sv-color-swatch">
                <div className="sv-color-box" style={{ background: '#000000' }}></div>
                <div className="sv-color-name">Night Black</div>
                <div className="sv-color-hex">#000000</div>
              </div>
              <div className="sv-color-swatch">
                <div className="sv-color-box" style={{ background: '#F5E6C8' }}></div>
                <div className="sv-color-name">Cream Beige</div>
                <div className="sv-color-hex">#F5E6C8</div>
              </div>
              <div className="sv-color-swatch">
                <div className="sv-color-box" style={{ background: '#A8D4E6' }}></div>
                <div className="sv-color-name">Sky Blue</div>
                <div className="sv-color-hex">#A8D4E6</div>
              </div>
            </div>

            <h3 style={{ fontSize: '14px', fontWeight: 600, marginBottom: '16px', marginTop: '24px', color: 'var(--deep-black)' }}>Accent Colors</h3>
            <div className="sv-color-grid">
              <div className="sv-color-swatch">
                <div className="sv-color-box" style={{ background: '#E84B8A' }}></div>
                <div className="sv-color-name">Hot Pink</div>
                <div className="sv-color-hex">#E84B8A</div>
              </div>
              <div className="sv-color-swatch">
                <div className="sv-color-box" style={{ background: '#E53935' }}></div>
                <div className="sv-color-name">Tomato Red</div>
                <div className="sv-color-hex">#E53935</div>
              </div>
              <div className="sv-color-swatch">
                <div className="sv-color-box" style={{ background: '#E67E22' }}></div>
                <div className="sv-color-name">Cheese Orange</div>
                <div className="sv-color-hex">#E67E22</div>
              </div>
              <div className="sv-color-swatch">
                <div className="sv-color-box" style={{ background: '#D4A56A' }}></div>
                <div className="sv-color-name">Golden Mustard</div>
                <div className="sv-color-hex">#D4A56A</div>
              </div>
              <div className="sv-color-swatch">
                <div className="sv-color-box" style={{ background: '#27AE60' }}></div>
                <div className="sv-color-name">Fresh Green</div>
                <div className="sv-color-hex">#27AE60</div>
              </div>
            </div>
          </section>

          {/* Typography */}
          <section className="sv-section">
            <h2 className="sv-section-title">Typography Scale</h2>
            <div className="sv-type-sample">
              <div className="sv-type-label">Display - 72px Bebas Neue</div>
              <h1 className="sv-display">Street Food Culture</h1>
            </div>
            <div className="sv-type-sample">
              <div className="sv-type-label">H1 - 48px</div>
              <h1 className="sv-h1">Bold & Delicious</h1>
            </div>
            <div className="sv-type-sample">
              <div className="sv-type-label">H2 - 36px</div>
              <h2 className="sv-h2">Mac-N-Cheese Special</h2>
            </div>
            <div className="sv-type-sample">
              <div className="sv-type-label">H3 - 24px</div>
              <h3 className="sv-h3">Today's Menu</h3>
            </div>
            <div className="sv-type-sample">
              <div className="sv-type-label">Body Large</div>
              <p className="sv-body-large">
                Experience the perfect blend of crispy wraps, melted cheese, and
                fresh vegetables. Every bite tells a story of quality ingredients.
              </p>
            </div>
            <div className="sv-type-sample">
              <div className="sv-type-label">Body Regular</div>
              <p className="sv-body">
                Chicken, mac-n-cheese, extra cheese, tomatoes, Korean carrots, spicy sauce.
              </p>
            </div>
            <div className="sv-type-sample">
              <div className="sv-type-label">Caption</div>
              <p className="sv-caption">Prices include all taxes</p>
            </div>
          </section>

          {/* Buttons */}
          <section className="sv-section">
            <h2 className="sv-section-title">Buttons & Interactive Elements</h2>
            <div className="sv-buttons-grid">
              <button className="sv-btn sv-btn-primary">Order Now</button>
              <button className="sv-btn sv-btn-secondary">View Menu</button>
              <button className="sv-btn sv-btn-pink">Get 50% Off</button>
              <button className="sv-btn sv-btn-outline">Learn More</button>
              <button className="sv-btn sv-btn-disabled" disabled>Sold Out</button>
            </div>
          </section>

          {/* Menu Cards */}
          <section className="sv-section">
            <h2 className="sv-section-title">Menu Cards</h2>
            <div className="sv-menu-grid">
              <div className="sv-menu-card">
                <div className="sv-menu-card-header">
                  <span className="sv-price-badge">360</span>
                  <h3 className="sv-menu-card-title">Mac-N-Cheese Special</h3>
                  <p className="sv-menu-card-desc">
                    Chicken, mac-n-cheese, extra cheese, tomatoes, Korean carrots, spicy sauce
                  </p>
                </div>
                <div className="sv-menu-card-footer">
                  <span className="sv-tag sv-tag-popular">Popular</span>
                  <button className="sv-btn sv-btn-primary" style={{ padding: '8px 16px', fontSize: '14px' }}>Add</button>
                </div>
              </div>

              <div className="sv-menu-card">
                <div className="sv-menu-card-header">
                  <span className="sv-price-badge pink">399</span>
                  <h3 className="sv-menu-card-title">Olivier Holiday Special</h3>
                  <p className="sv-menu-card-desc">
                    Chicken, green peas, turkey ham, potato, pickles, carrots, cabbage
                  </p>
                </div>
                <div className="sv-menu-card-footer">
                  <span className="sv-tag sv-tag-spicy">Limited</span>
                  <button className="sv-btn sv-btn-primary" style={{ padding: '8px 16px', fontSize: '14px' }}>Add</button>
                </div>
              </div>

              <div className="sv-menu-card">
                <div className="sv-menu-card-header">
                  <span className="sv-price-badge red">320</span>
                  <h3 className="sv-menu-card-title">Classic Veggie</h3>
                  <p className="sv-menu-card-desc">
                    Fresh vegetables, hummus, feta cheese, herbs, special tahini sauce
                  </p>
                </div>
                <div className="sv-menu-card-footer">
                  <span className="sv-tag sv-tag-vegan">Vegan</span>
                  <button className="sv-btn sv-btn-primary" style={{ padding: '8px 16px', fontSize: '14px' }}>Add</button>
                </div>
              </div>
            </div>
          </section>

          {/* Form Elements */}
          <section className="sv-section">
            <h2 className="sv-section-title">Form Elements</h2>
            <div className="sv-form-group">
              <label className="sv-form-label">Your Name</label>
              <input type="text" className="sv-form-input" placeholder="Enter your name" />
            </div>

            <div className="sv-form-group">
              <label className="sv-form-label">Phone Number (Error)</label>
              <input type="text" className="sv-form-input error" placeholder="+7 (999) 123-45-67" />
              <div className="sv-error-message">Please enter a valid phone number</div>
            </div>

            <div className="sv-form-group">
              <div className="sv-checkbox-group">
                <input type="checkbox" className="sv-checkbox" id="extra-sauce" defaultChecked />
                <label htmlFor="extra-sauce" style={{ fontSize: '14px', color: 'var(--deep-black)' }}>
                  Add extra sauce (+50)
                </label>
              </div>
            </div>

            <div className="sv-form-group">
              <label className="sv-form-label">Spice Level</label>
              <select className="sv-form-input">
                <option>Mild</option>
                <option>Medium</option>
                <option>Hot</option>
                <option>Extra Hot</option>
              </select>
            </div>

            <button className="sv-btn sv-btn-primary">Place Order</button>
          </section>

          {/* Alerts */}
          <section className="sv-section">
            <h2 className="sv-section-title">Feedback & Status</h2>
            <div style={{ maxWidth: '500px' }}>
              <div className="sv-alert sv-alert-success">
                <span style={{ fontSize: '20px' }}>✓</span>
                <span>Your order has been confirmed!</span>
              </div>
              <div className="sv-alert sv-alert-error">
                <span style={{ fontSize: '20px' }}>✕</span>
                <span>This item is currently unavailable</span>
              </div>
              <div className="sv-alert sv-alert-warning">
                <span style={{ fontSize: '20px' }}>⚠</span>
                <span>High demand - delivery may take longer</span>
              </div>
              <div className="sv-alert sv-alert-info">
                <span style={{ fontSize: '20px' }}>ℹ</span>
                <span>Free delivery on orders over 500</span>
              </div>

              <div className="sv-progress-container">
                <div className="sv-progress-header">
                  <span className="sv-progress-label">Order Progress</span>
                  <span className="sv-progress-value">65%</span>
                </div>
                <div className="sv-progress">
                  <div className="sv-progress-fill" style={{ width: '65%' }}></div>
                </div>
              </div>
            </div>
          </section>

          {/* Promo Section */}
          <section className="sv-promo">
            <h2 className="sv-promo-title">
              First 50 <span className="orange">Wraps</span><br />Free!
            </h2>
            <p className="sv-promo-subtitle">
              Grand opening celebration - January 31st at 10:00 AM
            </p>
            <p className="sv-promo-location">
              123 Main Street, Downtown
            </p>
          </section>

          {/* Order List */}
          <section className="sv-section" style={{ marginTop: '48px' }}>
            <h2 className="sv-section-title">Active Orders</h2>
            <div className="sv-order-list">
              <div className="sv-order-item">
                <div className="sv-order-info">
                  <div className="sv-order-icon">🌯</div>
                  <div className="sv-order-details">
                    <h4>Mac-N-Cheese Special x2</h4>
                    <p>Order #1247 - 5 min ago</p>
                  </div>
                </div>
                <div className="sv-order-status">
                  <span className="sv-status-badge sv-status-ready">Ready</span>
                </div>
              </div>

              <div className="sv-order-item">
                <div className="sv-order-info">
                  <div className="sv-order-icon">🥙</div>
                  <div className="sv-order-details">
                    <h4>Olivier Special + Classic</h4>
                    <p>Order #1248 - 12 min ago</p>
                  </div>
                </div>
                <div className="sv-order-status">
                  <span className="sv-status-badge sv-status-preparing">Preparing</span>
                </div>
              </div>

              <div className="sv-order-item">
                <div className="sv-order-info">
                  <div className="sv-order-icon">🥗</div>
                  <div className="sv-order-details">
                    <h4>Classic Veggie x3</h4>
                    <p>Order #1249 - 18 min ago</p>
                  </div>
                </div>
                <div className="sv-order-status">
                  <span className="sv-status-badge sv-status-pending">Pending</span>
                </div>
              </div>
            </div>

            <div className="sv-stats-grid">
              <div className="sv-stat-card">
                <div className="sv-stat-value">1,247</div>
                <div className="sv-stat-label">Orders Today</div>
              </div>
              <div className="sv-stat-card">
                <div className="sv-stat-value">4.9</div>
                <div className="sv-stat-label">Rating</div>
              </div>
              <div className="sv-stat-card">
                <div className="sv-stat-value">8 min</div>
                <div className="sv-stat-label">Avg Wait</div>
              </div>
              <div className="sv-stat-card">
                <div className="sv-stat-value">+23%</div>
                <div className="sv-stat-label">This Week</div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
