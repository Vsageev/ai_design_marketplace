import React from 'react';

const cssStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap');

  .bsf-showcase {
    /* Color Tokens */
    --bg-primary: #000000;
    --bg-secondary: #0D0D0D;
    --bg-card: #141414;
    --bg-warm: #F5E6D3;

    --border-subtle: rgba(255, 255, 255, 0.1);
    --border-default: rgba(255, 255, 255, 0.2);

    --text-primary: #FFFFFF;
    --text-secondary: rgba(255, 255, 255, 0.75);
    --text-tertiary: rgba(255, 255, 255, 0.5);
    --text-dark: #1A1A1A;

    --accent-pink: #E84B8A;
    --accent-orange: #E67F22;
    --accent-red: #E63946;
    --accent-blue: #87CEEB;
    --accent-gold: #D4A84B;

    --success: #4ADE80;
    --warning: #FBBF24;
    --error: #EF4444;
    --info: #60A5FA;

    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    background: var(--bg-primary);
    color: var(--text-primary);
    min-height: 100vh;
    padding: 48px 24px;
    -webkit-font-smoothing: antialiased;
  }

  .bsf-container {
    max-width: 1200px;
    margin: 0 auto;
  }

  .bsf-section {
    background: var(--bg-card);
    border: 1px solid var(--border-subtle);
    padding: 32px;
    margin-bottom: 24px;
  }

  .bsf-section-title {
    font-family: 'Oswald', sans-serif;
    font-size: 14px;
    font-weight: 600;
    color: var(--text-tertiary);
    margin-bottom: 24px;
    padding-bottom: 16px;
    border-bottom: 1px solid var(--border-subtle);
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }

  /* Hero Section */
  .bsf-hero {
    text-align: center;
    padding: 80px 40px;
    background: var(--bg-primary);
    border: none;
  }

  .bsf-hero-title {
    font-family: 'Oswald', sans-serif;
    font-size: 72px;
    font-weight: 700;
    color: var(--text-primary);
    letter-spacing: -0.02em;
    line-height: 0.9;
    margin-bottom: 24px;
    text-transform: uppercase;
  }

  .bsf-hero-subtitle {
    font-size: 18px;
    color: var(--text-secondary);
    line-height: 1.6;
    margin-bottom: 40px;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }

  .bsf-hero-actions {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;
  }

  /* Buttons */
  .bsf-btn {
    font-family: 'Oswald', sans-serif;
    font-size: 14px;
    font-weight: 600;
    padding: 14px 28px;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-out;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .bsf-btn-primary {
    background: var(--accent-pink);
    color: var(--text-primary);
  }

  .bsf-btn-primary:hover {
    filter: brightness(1.1);
  }

  .bsf-btn-secondary {
    background: transparent;
    color: var(--text-primary);
    border: 2px solid var(--text-primary);
  }

  .bsf-btn-secondary:hover {
    background: var(--text-primary);
    color: var(--bg-primary);
  }

  .bsf-btn-ghost {
    background: transparent;
    color: var(--text-secondary);
    border: none;
    padding: 14px 20px;
  }

  .bsf-btn-ghost:hover {
    color: var(--text-primary);
  }

  .bsf-btn-disabled {
    background: var(--bg-secondary);
    color: var(--text-tertiary);
    cursor: not-allowed;
  }

  .bsf-btn-success {
    background: var(--success);
    color: var(--bg-primary);
  }

  /* Color Palette Grid */
  .bsf-color-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    gap: 16px;
  }

  .bsf-color-swatch {
    text-align: center;
  }

  .bsf-color-box {
    width: 100%;
    height: 80px;
    margin-bottom: 10px;
    border: 1px solid var(--border-subtle);
  }

  .bsf-color-name {
    font-family: 'Oswald', sans-serif;
    font-size: 13px;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 4px;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .bsf-color-hex {
    font-size: 12px;
    color: var(--text-tertiary);
    font-family: 'SF Mono', 'Monaco', monospace;
  }

  /* Typography */
  .bsf-type-sample {
    margin-bottom: 28px;
    padding-bottom: 24px;
    border-bottom: 1px solid var(--border-subtle);
  }

  .bsf-type-sample:last-child {
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 0;
  }

  .bsf-type-label {
    font-size: 12px;
    color: var(--text-tertiary);
    margin-bottom: 12px;
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }

  .bsf-h1 {
    font-family: 'Oswald', sans-serif;
    font-size: 72px;
    font-weight: 700;
    letter-spacing: -0.02em;
    color: var(--text-primary);
    line-height: 0.9;
    text-transform: uppercase;
  }

  .bsf-h2 {
    font-family: 'Oswald', sans-serif;
    font-size: 48px;
    font-weight: 700;
    letter-spacing: -0.02em;
    color: var(--text-primary);
    text-transform: uppercase;
  }

  .bsf-h3 {
    font-family: 'Oswald', sans-serif;
    font-size: 32px;
    font-weight: 600;
    color: var(--text-primary);
    text-transform: uppercase;
  }

  .bsf-h4 {
    font-family: 'Oswald', sans-serif;
    font-size: 20px;
    font-weight: 600;
    color: var(--text-primary);
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .bsf-body {
    font-size: 16px;
    line-height: 1.6;
    color: var(--text-secondary);
  }

  .bsf-caption {
    font-size: 13px;
    color: var(--text-tertiary);
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }

  /* Buttons Grid */
  .bsf-buttons-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    align-items: center;
  }

  /* Cards */
  .bsf-cards-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
  }

  .bsf-card {
    background: var(--bg-secondary);
    border: 1px solid var(--border-subtle);
    overflow: hidden;
    transition: border-color 0.2s ease-out;
  }

  .bsf-card:hover {
    border-color: var(--border-default);
  }

  .bsf-card-header {
    padding: 20px;
    background: var(--bg-card);
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid var(--border-subtle);
  }

  .bsf-card-header-title {
    font-family: 'Oswald', sans-serif;
    font-size: 14px;
    font-weight: 600;
    color: var(--text-tertiary);
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .bsf-card-body {
    padding: 24px;
  }

  .bsf-card-title {
    font-family: 'Oswald', sans-serif;
    font-size: 20px;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 8px;
    text-transform: uppercase;
  }

  .bsf-card-text {
    font-size: 14px;
    color: var(--text-tertiary);
    margin-bottom: 20px;
  }

  /* Badges */
  .bsf-badge {
    display: inline-flex;
    align-items: center;
    padding: 4px 10px;
    font-family: 'Oswald', sans-serif;
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .bsf-badge-new {
    background: var(--accent-pink);
    color: var(--text-primary);
    transform: rotate(-3deg);
  }

  .bsf-badge-price {
    background: var(--accent-red);
    color: var(--text-primary);
    transform: rotate(-2deg);
    border-radius: 4px;
    padding: 6px 12px;
    font-size: 14px;
  }

  .bsf-badge-gold {
    background: var(--accent-gold);
    color: var(--bg-primary);
  }

  .bsf-badge-orange {
    background: var(--accent-orange);
    color: var(--text-primary);
  }

  .bsf-badge-success {
    background: rgba(74, 222, 128, 0.15);
    color: var(--success);
  }

  .bsf-badge-error {
    background: rgba(239, 68, 68, 0.15);
    color: var(--error);
  }

  /* Menu Section */
  .bsf-menu {
    max-width: 700px;
  }

  .bsf-menu-category {
    margin-bottom: 40px;
  }

  .bsf-menu-category-title {
    font-family: 'Oswald', sans-serif;
    font-size: 28px;
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 20px;
    text-transform: uppercase;
    letter-spacing: 0.02em;
  }

  .bsf-menu-item {
    display: flex;
    align-items: baseline;
    margin-bottom: 16px;
  }

  .bsf-menu-item-name {
    font-family: 'Oswald', sans-serif;
    font-size: 16px;
    font-weight: 500;
    color: var(--text-primary);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    white-space: nowrap;
  }

  .bsf-menu-item-dots {
    flex: 1;
    border-bottom: 2px dotted var(--text-tertiary);
    margin: 0 12px;
    min-width: 40px;
  }

  .bsf-menu-item-price {
    font-family: 'Oswald', sans-serif;
    font-size: 18px;
    font-weight: 700;
    color: var(--text-primary);
    white-space: nowrap;
  }

  .bsf-menu-item-desc {
    font-size: 13px;
    color: var(--text-tertiary);
    margin-top: 4px;
    margin-left: 0;
    text-transform: uppercase;
    letter-spacing: 0.02em;
  }

  .bsf-menu-item-wrapper {
    margin-bottom: 20px;
  }

  .bsf-menu-item-badge {
    display: inline-flex;
    margin-right: 8px;
  }

  /* Forms */
  .bsf-form-group {
    margin-bottom: 24px;
  }

  .bsf-form-label {
    display: block;
    font-family: 'Oswald', sans-serif;
    font-size: 13px;
    font-weight: 600;
    color: var(--text-secondary);
    margin-bottom: 8px;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .bsf-form-input {
    width: 100%;
    padding: 14px 16px;
    font-size: 14px;
    font-family: 'Inter', sans-serif;
    border: 2px solid var(--border-default);
    background: var(--bg-secondary);
    color: var(--text-primary);
    transition: border-color 0.2s ease-out;
  }

  .bsf-form-input::placeholder {
    color: var(--text-tertiary);
  }

  .bsf-form-input:focus {
    outline: none;
    border-color: var(--accent-pink);
  }

  .bsf-form-input.error {
    border-color: var(--error);
  }

  .bsf-error-message {
    font-size: 12px;
    color: var(--error);
    margin-top: 8px;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .bsf-checkbox-group {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .bsf-checkbox {
    width: 20px;
    height: 20px;
    border: 2px solid var(--border-default);
    background: var(--bg-secondary);
    cursor: pointer;
    accent-color: var(--accent-pink);
  }

  /* Alerts */
  .bsf-alert {
    padding: 16px 20px;
    margin-bottom: 16px;
    font-size: 14px;
    display: flex;
    align-items: center;
    gap: 12px;
    border-left: 4px solid;
  }

  .bsf-alert-success {
    background: rgba(74, 222, 128, 0.1);
    color: var(--success);
    border-color: var(--success);
  }

  .bsf-alert-error {
    background: rgba(239, 68, 68, 0.1);
    color: var(--error);
    border-color: var(--error);
  }

  .bsf-alert-warning {
    background: rgba(251, 191, 36, 0.1);
    color: var(--warning);
    border-color: var(--warning);
  }

  .bsf-alert-info {
    background: rgba(96, 165, 250, 0.1);
    color: var(--info);
    border-color: var(--info);
  }

  /* Progress Bar */
  .bsf-progress-container {
    margin-top: 24px;
  }

  .bsf-progress-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }

  .bsf-progress-label {
    font-family: 'Oswald', sans-serif;
    font-size: 13px;
    color: var(--text-tertiary);
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .bsf-progress-value {
    font-family: 'Oswald', sans-serif;
    font-size: 14px;
    font-weight: 600;
    color: var(--text-primary);
  }

  .bsf-progress {
    width: 100%;
    height: 8px;
    background: var(--bg-secondary);
    overflow: hidden;
  }

  .bsf-progress-fill {
    height: 100%;
    background: var(--accent-pink);
    transition: width 0.3s ease-out;
  }

  /* Order List */
  .bsf-order-list {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .bsf-order-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background: var(--bg-secondary);
    border: 1px solid var(--border-subtle);
    transition: border-color 0.2s ease-out;
  }

  .bsf-order-item:hover {
    border-color: var(--border-default);
  }

  .bsf-order-info {
    display: flex;
    align-items: center;
    gap: 16px;
    flex: 1;
  }

  .bsf-order-number {
    font-family: 'Oswald', sans-serif;
    font-size: 24px;
    font-weight: 700;
    color: var(--accent-pink);
  }

  .bsf-order-content {
    flex: 1;
  }

  .bsf-order-title {
    font-family: 'Oswald', sans-serif;
    font-size: 16px;
    font-weight: 600;
    color: var(--text-primary);
    text-transform: uppercase;
    margin-bottom: 4px;
  }

  .bsf-order-subtitle {
    font-size: 13px;
    color: var(--text-tertiary);
  }

  .bsf-order-actions {
    display: flex;
    gap: 12px;
    align-items: center;
  }

  /* Stats Grid */
  .bsf-stats-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    margin-top: 24px;
  }

  .bsf-stat-card {
    background: var(--bg-secondary);
    border: 1px solid var(--border-subtle);
    padding: 24px;
    text-align: center;
  }

  .bsf-stat-label {
    font-size: 13px;
    color: var(--text-tertiary);
    margin-bottom: 8px;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .bsf-stat-value {
    font-family: 'Oswald', sans-serif;
    font-size: 36px;
    font-weight: 700;
    color: var(--text-primary);
  }

  @media (max-width: 768px) {
    .bsf-stats-grid {
      grid-template-columns: repeat(2, 1fr);
    }

    .bsf-hero-title {
      font-size: 48px;
    }
  }
`;

export default function BoldStreetFoodShowcase() {
  return (
    <>
      <style>{cssStyles}</style>
      <main className="bsf-showcase">
        <div className="bsf-container">
          {/* Hero Section */}
          <section className="bsf-section bsf-hero">
            <h1 className="bsf-hero-title">Bold Street Food</h1>
            <p className="bsf-hero-subtitle">
              A high-contrast design system with bold typography, vibrant accents, and an urban street food aesthetic. Made for brands that demand attention.
            </p>
            <div className="bsf-hero-actions">
              <button className="bsf-btn bsf-btn-primary">Order Now</button>
              <button className="bsf-btn bsf-btn-secondary">View Menu</button>
            </div>
          </section>

          {/* Color Palette */}
          <section className="bsf-section">
            <h2 className="bsf-section-title">Color Palette</h2>

            <div style={{ marginBottom: '32px' }}>
              <h3 style={{ fontFamily: 'Oswald', fontSize: '14px', fontWeight: '500', marginBottom: '16px', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Backgrounds</h3>
              <div className="bsf-color-grid">
                <div className="bsf-color-swatch">
                  <div className="bsf-color-box" style={{ background: '#000000' }}></div>
                  <div className="bsf-color-name">Primary</div>
                  <div className="bsf-color-hex">#000000</div>
                </div>
                <div className="bsf-color-swatch">
                  <div className="bsf-color-box" style={{ background: '#0D0D0D' }}></div>
                  <div className="bsf-color-name">Secondary</div>
                  <div className="bsf-color-hex">#0D0D0D</div>
                </div>
                <div className="bsf-color-swatch">
                  <div className="bsf-color-box" style={{ background: '#141414' }}></div>
                  <div className="bsf-color-name">Card</div>
                  <div className="bsf-color-hex">#141414</div>
                </div>
                <div className="bsf-color-swatch">
                  <div className="bsf-color-box" style={{ background: '#F5E6D3' }}></div>
                  <div className="bsf-color-name">Warm</div>
                  <div className="bsf-color-hex">#F5E6D3</div>
                </div>
              </div>
            </div>

            <div>
              <h3 style={{ fontFamily: 'Oswald', fontSize: '14px', fontWeight: '500', marginBottom: '16px', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Accent Colors</h3>
              <div className="bsf-color-grid">
                <div className="bsf-color-swatch">
                  <div className="bsf-color-box" style={{ background: '#E84B8A' }}></div>
                  <div className="bsf-color-name">Hot Pink</div>
                  <div className="bsf-color-hex">#E84B8A</div>
                </div>
                <div className="bsf-color-swatch">
                  <div className="bsf-color-box" style={{ background: '#E67F22' }}></div>
                  <div className="bsf-color-name">Orange</div>
                  <div className="bsf-color-hex">#E67F22</div>
                </div>
                <div className="bsf-color-swatch">
                  <div className="bsf-color-box" style={{ background: '#E63946' }}></div>
                  <div className="bsf-color-name">Red</div>
                  <div className="bsf-color-hex">#E63946</div>
                </div>
                <div className="bsf-color-swatch">
                  <div className="bsf-color-box" style={{ background: '#87CEEB' }}></div>
                  <div className="bsf-color-name">Sky Blue</div>
                  <div className="bsf-color-hex">#87CEEB</div>
                </div>
                <div className="bsf-color-swatch">
                  <div className="bsf-color-box" style={{ background: '#D4A84B' }}></div>
                  <div className="bsf-color-name">Gold</div>
                  <div className="bsf-color-hex">#D4A84B</div>
                </div>
              </div>
            </div>
          </section>

          {/* Typography */}
          <section className="bsf-section">
            <h2 className="bsf-section-title">Typography Scale</h2>
            <div className="bsf-type-sample">
              <div className="bsf-type-label">H1 - Hero Title</div>
              <h1 className="bsf-h1">Street Food</h1>
            </div>
            <div className="bsf-type-sample">
              <div className="bsf-type-label">H2 - Section Title</div>
              <h2 className="bsf-h2">Fresh Daily</h2>
            </div>
            <div className="bsf-type-sample">
              <div className="bsf-type-label">H3 - Category Title</div>
              <h3 className="bsf-h3">Signature Wraps</h3>
            </div>
            <div className="bsf-type-sample">
              <div className="bsf-type-label">H4 - Menu Item</div>
              <h4 className="bsf-h4">Classic Chicken Wrap</h4>
            </div>
            <div className="bsf-type-sample">
              <div className="bsf-type-label">Body Text</div>
              <p className="bsf-body">
                Handcrafted with fresh ingredients daily. Our signature wraps are made to order using premium meats,
                crispy vegetables, and our house-made sauces. Each bite delivers bold flavors and satisfying textures.
              </p>
            </div>
            <div className="bsf-type-sample">
              <div className="bsf-type-label">Caption</div>
              <p className="bsf-caption">Available daily from 11am to 11pm</p>
            </div>
          </section>

          {/* Buttons */}
          <section className="bsf-section">
            <h2 className="bsf-section-title">Buttons & Interactive Elements</h2>
            <div className="bsf-buttons-grid">
              <button className="bsf-btn bsf-btn-primary">Primary</button>
              <button className="bsf-btn bsf-btn-secondary">Secondary</button>
              <button className="bsf-btn bsf-btn-success">Confirm</button>
              <button className="bsf-btn bsf-btn-ghost">Ghost</button>
              <button className="bsf-btn bsf-btn-disabled" disabled>Disabled</button>
            </div>
          </section>

          {/* Cards */}
          <section className="bsf-section">
            <h2 className="bsf-section-title">Cards</h2>
            <div className="bsf-cards-grid">
              <div className="bsf-card">
                <div className="bsf-card-header">
                  <span className="bsf-card-header-title">Special</span>
                  <span className="bsf-badge bsf-badge-new">New</span>
                </div>
                <div className="bsf-card-body">
                  <div className="bsf-card-title">Mac-N-Cheese Wrap</div>
                  <div className="bsf-card-text">Crispy chicken, mac and cheese, pickled carrots, signature sauce</div>
                  <span className="bsf-badge bsf-badge-price">360</span>
                </div>
              </div>

              <div className="bsf-card">
                <div className="bsf-card-header">
                  <span className="bsf-card-header-title">Popular</span>
                  <span className="bsf-badge bsf-badge-gold">Best</span>
                </div>
                <div className="bsf-card-body">
                  <div className="bsf-card-title">Classic Wrap</div>
                  <div className="bsf-card-text">Grilled chicken, fresh vegetables, house sauce, soft tortilla</div>
                  <span className="bsf-badge bsf-badge-price">260</span>
                </div>
              </div>

              <div className="bsf-card">
                <div className="bsf-card-header">
                  <span className="bsf-card-header-title">Sides</span>
                  <span className="bsf-badge bsf-badge-orange">Hot</span>
                </div>
                <div className="bsf-card-body">
                  <div className="bsf-card-title">Spicy Fries</div>
                  <div className="bsf-card-text">Crispy potato fries with house spice blend and dipping sauce</div>
                  <span className="bsf-badge bsf-badge-price">150</span>
                </div>
              </div>
            </div>
          </section>

          {/* Menu Style */}
          <section className="bsf-section">
            <h2 className="bsf-section-title">Menu Layout</h2>
            <div className="bsf-menu">
              <div className="bsf-menu-category">
                <h3 className="bsf-menu-category-title">Wraps</h3>

                <div className="bsf-menu-item-wrapper">
                  <div className="bsf-menu-item">
                    <span className="bsf-menu-item-name">Classic</span>
                    <span className="bsf-menu-item-dots"></span>
                    <span className="bsf-menu-item-price">260</span>
                  </div>
                </div>

                <div className="bsf-menu-item-wrapper">
                  <div className="bsf-menu-item">
                    <span className="bsf-menu-item-name">Light</span>
                    <span className="bsf-menu-item-dots"></span>
                    <span className="bsf-menu-item-price">260</span>
                  </div>
                </div>

                <div className="bsf-menu-item-wrapper">
                  <div className="bsf-menu-item">
                    <span className="bsf-menu-item-name">Vegetarian</span>
                    <span className="bsf-menu-item-dots"></span>
                    <span className="bsf-menu-item-price">330</span>
                  </div>
                </div>

                <div className="bsf-menu-item-wrapper">
                  <div className="bsf-menu-item">
                    <span className="bsf-menu-item-badge"><span className="bsf-badge bsf-badge-new">New</span></span>
                    <span className="bsf-menu-item-name">Mac-N-Cheese</span>
                    <span className="bsf-menu-item-dots"></span>
                    <span className="bsf-menu-item-price">360</span>
                  </div>
                  <div className="bsf-menu-item-desc">Chicken, mac-n-cheese, crispy onion, pickled carrots, cheese sauce</div>
                </div>

                <div className="bsf-menu-item-wrapper">
                  <div className="bsf-menu-item">
                    <span className="bsf-menu-item-name">Spicy</span>
                    <span className="bsf-menu-item-dots"></span>
                    <span className="bsf-menu-item-price">260</span>
                  </div>
                </div>
              </div>

              <div className="bsf-menu-category">
                <h3 className="bsf-menu-category-title">Sides</h3>

                <div className="bsf-menu-item-wrapper">
                  <div className="bsf-menu-item">
                    <span className="bsf-menu-item-name">Nuggets</span>
                    <span className="bsf-menu-item-dots"></span>
                    <span className="bsf-menu-item-price">180</span>
                  </div>
                </div>

                <div className="bsf-menu-item-wrapper">
                  <div className="bsf-menu-item">
                    <span className="bsf-menu-item-name">Cheese Sticks</span>
                    <span className="bsf-menu-item-dots"></span>
                    <span className="bsf-menu-item-price">240</span>
                  </div>
                </div>

                <div className="bsf-menu-item-wrapper">
                  <div className="bsf-menu-item">
                    <span className="bsf-menu-item-name">Fries</span>
                    <span className="bsf-menu-item-dots"></span>
                    <span className="bsf-menu-item-price">150</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Form Elements */}
          <section className="bsf-section">
            <h2 className="bsf-section-title">Form Elements</h2>
            <div style={{ maxWidth: '480px' }}>
              <div className="bsf-form-group">
                <label className="bsf-form-label">Your Name</label>
                <input type="text" className="bsf-form-input" placeholder="Enter your name" />
              </div>

              <div className="bsf-form-group">
                <label className="bsf-form-label">Phone (Error State)</label>
                <input type="text" className="bsf-form-input error" placeholder="Enter phone number" />
                <div className="bsf-error-message">Phone number is required</div>
              </div>

              <div className="bsf-form-group">
                <div className="bsf-checkbox-group">
                  <input type="checkbox" className="bsf-checkbox" id="notify" defaultChecked />
                  <label htmlFor="notify" style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>
                    Send me order updates via SMS
                  </label>
                </div>
              </div>

              <div className="bsf-form-group">
                <label className="bsf-form-label">Delivery Time</label>
                <select className="bsf-form-input">
                  <option>As soon as possible</option>
                  <option>12:00 - 12:30</option>
                  <option>12:30 - 13:00</option>
                  <option>13:00 - 13:30</option>
                </select>
              </div>

              <button className="bsf-btn bsf-btn-primary">Place Order</button>
            </div>
          </section>

          {/* Badges */}
          <section className="bsf-section">
            <h2 className="bsf-section-title">Badges & Status</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '24px' }}>
              <span className="bsf-badge bsf-badge-new">New</span>
              <span className="bsf-badge bsf-badge-gold">Best Seller</span>
              <span className="bsf-badge bsf-badge-orange">Hot</span>
              <span className="bsf-badge bsf-badge-price">360</span>
              <span className="bsf-badge bsf-badge-success">Available</span>
              <span className="bsf-badge bsf-badge-error">Sold Out</span>
            </div>

            <div className="bsf-progress-container">
              <div className="bsf-progress-header">
                <span className="bsf-progress-label">Daily Goal</span>
                <span className="bsf-progress-value">65%</span>
              </div>
              <div className="bsf-progress">
                <div className="bsf-progress-fill" style={{ width: '65%' }}></div>
              </div>
            </div>
          </section>

          {/* Alerts */}
          <section className="bsf-section">
            <h2 className="bsf-section-title">Alerts & Notifications</h2>
            <div style={{ maxWidth: '560px' }}>
              <div className="bsf-alert bsf-alert-success">
                <span>&#10003;</span>
                <span>Your order has been confirmed!</span>
              </div>
              <div className="bsf-alert bsf-alert-error">
                <span>&#10005;</span>
                <span>Payment failed. Please try again.</span>
              </div>
              <div className="bsf-alert bsf-alert-warning">
                <span>&#9888;</span>
                <span>High demand - delivery may be delayed</span>
              </div>
              <div className="bsf-alert bsf-alert-info">
                <span>&#9432;</span>
                <span>Free delivery on orders over 500</span>
              </div>
            </div>
          </section>

          {/* Sample Content - Orders */}
          <section className="bsf-section">
            <h2 className="bsf-section-title">Recent Orders</h2>
            <div className="bsf-order-list">
              <div className="bsf-order-item">
                <div className="bsf-order-info">
                  <div className="bsf-order-number">#247</div>
                  <div className="bsf-order-content">
                    <div className="bsf-order-title">Mac-N-Cheese Special</div>
                    <div className="bsf-order-subtitle">2x wraps, 1x fries, 1x drink</div>
                  </div>
                </div>
                <div className="bsf-order-actions">
                  <span className="bsf-badge bsf-badge-success">Ready</span>
                </div>
              </div>

              <div className="bsf-order-item">
                <div className="bsf-order-info">
                  <div className="bsf-order-number">#246</div>
                  <div className="bsf-order-content">
                    <div className="bsf-order-title">Classic Combo</div>
                    <div className="bsf-order-subtitle">1x classic wrap, 1x nuggets</div>
                  </div>
                </div>
                <div className="bsf-order-actions">
                  <span className="bsf-badge bsf-badge-orange">Cooking</span>
                </div>
              </div>

              <div className="bsf-order-item">
                <div className="bsf-order-info">
                  <div className="bsf-order-number">#245</div>
                  <div className="bsf-order-content">
                    <div className="bsf-order-title">Party Pack</div>
                    <div className="bsf-order-subtitle">5x wraps, 3x sides, 5x drinks</div>
                  </div>
                </div>
                <div className="bsf-order-actions">
                  <span className="bsf-badge bsf-badge-gold">VIP</span>
                </div>
              </div>
            </div>

            <div className="bsf-stats-grid">
              <div className="bsf-stat-card">
                <div className="bsf-stat-label">Orders Today</div>
                <div className="bsf-stat-value">247</div>
              </div>
              <div className="bsf-stat-card">
                <div className="bsf-stat-label">Revenue</div>
                <div className="bsf-stat-value">64.2K</div>
              </div>
              <div className="bsf-stat-card">
                <div className="bsf-stat-label">Avg Order</div>
                <div className="bsf-stat-value">520</div>
              </div>
              <div className="bsf-stat-card">
                <div className="bsf-stat-label">Rating</div>
                <div className="bsf-stat-value">4.9</div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
