import React from 'react';

const cssStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap');

  .showcase {
    /* Color Tokens */
    --cream: #F5E6C8;
    --cream-dark: #EDD9B5;
    --orange: #E27B30;
    --orange-dark: #C96A25;
    --black: #1A1A1A;
    --white: #FFFFFF;
    --blue: #9ED6EE;
    --blue-dark: #7BC4E0;
    --red: #E53935;
    --red-dark: #C62828;
    --pink: #E66B9F;
    --yellow: #F5B041;
    --brown: #8B4513;
    --green: #6B8E23;
    --tomato: #CD5C5C;

    /* Typography */
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    background: var(--cream);
    color: var(--black);
    min-height: 100vh;
    padding: 48px 24px;
    -webkit-font-smoothing: antialiased;
  }

  .showcase-container {
    max-width: 1200px;
    margin: 0 auto;
  }

  .section {
    background: var(--white);
    border-radius: 20px;
    padding: 32px;
    margin-bottom: 24px;
    border: 3px solid var(--black);
    box-shadow: 6px 6px 0 var(--black);
  }

  .section-title {
    font-family: 'Oswald', sans-serif;
    font-size: 18px;
    font-weight: 700;
    color: var(--black);
    margin-bottom: 24px;
    padding-bottom: 16px;
    border-bottom: 3px dashed var(--orange);
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  /* Hero Section */
  .hero {
    text-align: center;
    padding: 64px 40px;
    background: var(--black);
    position: relative;
    overflow: hidden;
  }

  .hero::before {
    content: '';
    position: absolute;
    top: 20px;
    left: 20px;
    right: 20px;
    bottom: 20px;
    border: 3px dashed var(--orange);
    border-radius: 16px;
    pointer-events: none;
  }

  .hero-title {
    font-family: 'Oswald', sans-serif;
    font-size: 72px;
    font-weight: 700;
    color: var(--white);
    letter-spacing: -0.02em;
    line-height: 1;
    margin-bottom: 16px;
    text-transform: uppercase;
    position: relative;
  }

  .hero-title span {
    color: var(--orange);
  }

  .hero-subtitle {
    font-size: 18px;
    color: var(--cream);
    line-height: 1.6;
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
    flex-wrap: wrap;
  }

  /* Buttons */
  .btn {
    font-family: 'Oswald', sans-serif;
    font-size: 14px;
    font-weight: 700;
    padding: 14px 32px;
    border-radius: 50px;
    border: 3px solid var(--black);
    cursor: pointer;
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    display: inline-flex;
    align-items: center;
    gap: 8px;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .btn-primary {
    background: var(--red);
    color: var(--white);
    border-color: var(--red);
  }

  .btn-primary:hover {
    background: var(--red-dark);
    transform: translateY(-2px);
  }

  .btn-secondary {
    background: transparent;
    color: var(--black);
    border-color: var(--black);
  }

  .btn-secondary:hover {
    background: var(--black);
    color: var(--white);
  }

  .btn-hero {
    background: var(--orange);
    color: var(--white);
    border-color: var(--orange);
    font-size: 16px;
    padding: 16px 40px;
  }

  .btn-hero:hover {
    background: var(--orange-dark);
    transform: translateY(-2px) scale(1.02);
  }

  .btn-outline-white {
    background: transparent;
    color: var(--white);
    border-color: var(--white);
  }

  .btn-outline-white:hover {
    background: var(--white);
    color: var(--black);
  }

  .btn-disabled {
    background: var(--cream-dark);
    color: #999;
    border-color: #ccc;
    cursor: not-allowed;
  }

  .btn-success {
    background: var(--green);
    color: var(--white);
    border-color: var(--green);
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
    border-radius: 12px;
    margin-bottom: 10px;
    border: 3px solid var(--black);
  }

  .color-name {
    font-family: 'Oswald', sans-serif;
    font-size: 14px;
    font-weight: 600;
    color: var(--black);
    margin-bottom: 4px;
    text-transform: uppercase;
  }

  .color-hex {
    font-size: 12px;
    color: #666;
    font-family: 'SF Mono', 'Monaco', monospace;
  }

  /* Typography */
  .type-sample {
    margin-bottom: 24px;
    padding-bottom: 20px;
    border-bottom: 2px dashed var(--cream-dark);
  }

  .type-sample:last-child {
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 0;
  }

  .type-label {
    font-size: 11px;
    color: #888;
    margin-bottom: 8px;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    font-weight: 600;
  }

  .h1-sample {
    font-family: 'Oswald', sans-serif;
    font-size: 72px;
    font-weight: 700;
    letter-spacing: -0.02em;
    color: var(--black);
    line-height: 1;
    text-transform: uppercase;
  }

  .h2-sample {
    font-family: 'Oswald', sans-serif;
    font-size: 48px;
    font-weight: 700;
    color: var(--orange);
    text-transform: uppercase;
  }

  .h3-sample {
    font-family: 'Oswald', sans-serif;
    font-size: 32px;
    font-weight: 600;
    color: var(--black);
    text-transform: uppercase;
  }

  .h4-sample {
    font-family: 'Oswald', sans-serif;
    font-size: 24px;
    font-weight: 600;
    color: var(--black);
  }

  .body-large { font-size: 18px; line-height: 1.7; color: #444; }
  .body-regular { font-size: 16px; line-height: 1.6; color: #555; }
  .body-small { font-size: 14px; line-height: 1.5; color: #666; }
  .caption {
    font-size: 12px;
    line-height: 1.4;
    color: #888;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    font-weight: 500;
  }

  /* Buttons Grid */
  .buttons-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    align-items: center;
  }

  /* Cards */
  .cards-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 24px;
  }

  .card {
    background: var(--white);
    border: 3px solid var(--black);
    border-radius: 16px;
    overflow: hidden;
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 4px 4px 0 var(--black);
  }

  .card:hover {
    transform: translateY(-4px);
    box-shadow: 6px 8px 0 var(--black);
  }

  .card-header {
    padding: 20px;
    background: var(--cream);
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 3px solid var(--black);
  }

  .card-header-title {
    font-family: 'Oswald', sans-serif;
    font-size: 14px;
    font-weight: 600;
    color: var(--black);
    text-transform: uppercase;
  }

  .card-body {
    padding: 20px;
  }

  .card-title {
    font-family: 'Oswald', sans-serif;
    font-size: 24px;
    font-weight: 700;
    color: var(--orange);
    margin-bottom: 8px;
    text-transform: uppercase;
  }

  .card-text {
    font-size: 14px;
    color: #666;
    margin-bottom: 16px;
    line-height: 1.5;
  }

  /* Price Tags */
  .price-tag {
    display: inline-block;
    background: var(--yellow);
    color: var(--black);
    border: 2px solid var(--black);
    border-radius: 8px;
    padding: 6px 12px;
    font-family: 'Oswald', sans-serif;
    font-size: 18px;
    font-weight: 700;
    transform: rotate(-3deg);
  }

  /* Badges */
  .badge {
    display: inline-flex;
    align-items: center;
    padding: 6px 14px;
    border-radius: 20px;
    font-size: 11px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    border: 2px solid var(--black);
  }

  .badge-orange {
    background: var(--orange);
    color: var(--white);
    border-color: var(--orange);
  }

  .badge-blue {
    background: var(--blue);
    color: var(--black);
  }

  .badge-yellow {
    background: var(--yellow);
    color: var(--black);
  }

  .badge-green {
    background: var(--green);
    color: var(--white);
    border-color: var(--green);
  }

  .badge-red {
    background: var(--red);
    color: var(--white);
    border-color: var(--red);
  }

  .badge-pink {
    background: var(--pink);
    color: var(--white);
    border-color: var(--pink);
  }

  /* Forms */
  .form-group {
    margin-bottom: 20px;
  }

  .form-label {
    display: block;
    font-family: 'Oswald', sans-serif;
    font-size: 14px;
    font-weight: 600;
    color: var(--black);
    margin-bottom: 8px;
    text-transform: uppercase;
  }

  .form-input {
    width: 100%;
    padding: 14px 16px;
    font-size: 16px;
    font-family: 'Inter', sans-serif;
    border: 3px solid var(--black);
    border-radius: 12px;
    background: var(--white);
    color: var(--black);
    transition: all 0.2s ease;
  }

  .form-input::placeholder {
    color: #999;
  }

  .form-input:focus {
    outline: none;
    border-color: var(--orange);
    box-shadow: 0 0 0 3px rgba(226, 123, 48, 0.2);
  }

  .form-input.error {
    border-color: var(--red);
  }

  .error-message {
    font-size: 13px;
    color: var(--red);
    margin-top: 6px;
    font-weight: 500;
  }

  .checkbox-group {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .checkbox {
    width: 22px;
    height: 22px;
    border: 3px solid var(--black);
    border-radius: 6px;
    background: var(--white);
    cursor: pointer;
    accent-color: var(--orange);
  }

  /* Alerts */
  .alert {
    padding: 16px 20px;
    border-radius: 12px;
    margin-bottom: 12px;
    font-size: 14px;
    display: flex;
    align-items: center;
    gap: 12px;
    border: 3px solid var(--black);
    font-weight: 500;
  }

  .alert-success {
    background: var(--green);
    color: var(--white);
    border-color: var(--green);
  }

  .alert-error {
    background: var(--red);
    color: var(--white);
    border-color: var(--red);
  }

  .alert-warning {
    background: var(--yellow);
    color: var(--black);
  }

  .alert-info {
    background: var(--blue);
    color: var(--black);
  }

  /* Progress Bar */
  .progress-container {
    margin-top: 24px;
  }

  .progress-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }

  .progress-label {
    font-size: 14px;
    color: #666;
    font-weight: 500;
  }

  .progress-value {
    font-family: 'Oswald', sans-serif;
    font-size: 16px;
    font-weight: 700;
    color: var(--orange);
  }

  .progress {
    width: 100%;
    height: 16px;
    background: var(--cream);
    border-radius: 10px;
    overflow: hidden;
    border: 3px solid var(--black);
  }

  .progress-fill {
    height: 100%;
    background: var(--orange);
    border-radius: 6px;
    transition: width 0.3s ease;
  }

  /* Menu List */
  .menu-list {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .menu-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background: var(--cream);
    border-radius: 16px;
    border: 3px solid var(--black);
    transition: all 0.2s ease;
  }

  .menu-item:hover {
    transform: translateX(4px);
    box-shadow: 4px 4px 0 var(--black);
  }

  .menu-info {
    display: flex;
    align-items: center;
    gap: 16px;
    flex: 1;
  }

  .menu-icon {
    width: 48px;
    height: 48px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    border: 2px solid var(--black);
  }

  .menu-content {
    flex: 1;
  }

  .menu-title {
    font-family: 'Oswald', sans-serif;
    font-size: 18px;
    font-weight: 700;
    color: var(--black);
    margin-bottom: 4px;
    text-transform: uppercase;
  }

  .menu-desc {
    font-size: 13px;
    color: #666;
  }

  .menu-actions {
    display: flex;
    gap: 12px;
    align-items: center;
  }

  /* Stats Grid */
  .stats-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
    margin-top: 24px;
  }

  .stat-card {
    background: var(--cream);
    border: 3px solid var(--black);
    border-radius: 16px;
    padding: 20px;
    text-align: center;
  }

  .stat-value {
    font-family: 'Oswald', sans-serif;
    font-size: 36px;
    font-weight: 700;
    color: var(--orange);
    margin-bottom: 4px;
  }

  .stat-label {
    font-size: 12px;
    color: #666;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    font-weight: 500;
  }

  /* Decorative Elements */
  .deco-dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    display: inline-block;
  }

  .link-btn {
    background: none;
    border: none;
    font-family: 'Oswald', sans-serif;
    font-size: 14px;
    font-weight: 600;
    color: var(--orange);
    cursor: pointer;
    text-transform: uppercase;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    transition: color 0.2s ease;
  }

  .link-btn:hover {
    color: var(--orange-dark);
  }

  @media (max-width: 768px) {
    .stats-grid {
      grid-template-columns: repeat(2, 1fr);
    }

    .hero-title {
      font-size: 48px;
    }
  }
`;

export default function WaffleStreetShowcase() {
  return (
    <>
      <style>{cssStyles}</style>
      <main className="showcase">
        <div className="showcase-container">
          {/* Hero Section */}
          <section className="section hero">
            <h1 className="hero-title">
              Waffle <span>Street</span>
            </h1>
            <p className="hero-subtitle">
              Bold flavors wrapped in crispy waffles. Street food that hits different.
              Fresh ingredients, wild combos, unforgettable taste.
            </p>
            <div className="hero-actions">
              <button className="btn btn-hero">Order Now</button>
              <button className="btn btn-outline-white">View Menu</button>
            </div>
          </section>

          {/* Color Palette */}
          <section className="section">
            <h2 className="section-title">Color Palette</h2>

            <div style={{ marginBottom: '32px' }}>
              <h3 style={{ fontFamily: 'Oswald, sans-serif', fontSize: '14px', fontWeight: '600', marginBottom: '16px', color: '#888', textTransform: 'uppercase' }}>Primary Colors</h3>
              <div className="color-grid">
                <div className="color-swatch">
                  <div className="color-box" style={{ background: '#F5E6C8' }}></div>
                  <div className="color-name">Cream</div>
                  <div className="color-hex">#F5E6C8</div>
                </div>
                <div className="color-swatch">
                  <div className="color-box" style={{ background: '#E27B30' }}></div>
                  <div className="color-name">Orange</div>
                  <div className="color-hex">#E27B30</div>
                </div>
                <div className="color-swatch">
                  <div className="color-box" style={{ background: '#1A1A1A' }}></div>
                  <div className="color-name">Black</div>
                  <div className="color-hex">#1A1A1A</div>
                </div>
                <div className="color-swatch">
                  <div className="color-box" style={{ background: '#FFFFFF', border: '3px solid #1A1A1A' }}></div>
                  <div className="color-name">White</div>
                  <div className="color-hex">#FFFFFF</div>
                </div>
              </div>
            </div>

            <div>
              <h3 style={{ fontFamily: 'Oswald, sans-serif', fontSize: '14px', fontWeight: '600', marginBottom: '16px', color: '#888', textTransform: 'uppercase' }}>Accent Colors</h3>
              <div className="color-grid">
                <div className="color-swatch">
                  <div className="color-box" style={{ background: '#9ED6EE' }}></div>
                  <div className="color-name">Sky Blue</div>
                  <div className="color-hex">#9ED6EE</div>
                </div>
                <div className="color-swatch">
                  <div className="color-box" style={{ background: '#E53935' }}></div>
                  <div className="color-name">Red</div>
                  <div className="color-hex">#E53935</div>
                </div>
                <div className="color-swatch">
                  <div className="color-box" style={{ background: '#E66B9F' }}></div>
                  <div className="color-name">Pink</div>
                  <div className="color-hex">#E66B9F</div>
                </div>
                <div className="color-swatch">
                  <div className="color-box" style={{ background: '#F5B041' }}></div>
                  <div className="color-name">Yellow</div>
                  <div className="color-hex">#F5B041</div>
                </div>
                <div className="color-swatch">
                  <div className="color-box" style={{ background: '#6B8E23' }}></div>
                  <div className="color-name">Green</div>
                  <div className="color-hex">#6B8E23</div>
                </div>
              </div>
            </div>
          </section>

          {/* Typography */}
          <section className="section">
            <h2 className="section-title">Typography Scale</h2>
            <div className="type-sample">
              <div className="type-label">H1 - Hero Title (Oswald Bold 72px)</div>
              <h1 className="h1-sample">Street Food</h1>
            </div>
            <div className="type-sample">
              <div className="type-label">H2 - Section Title (Oswald Bold 48px)</div>
              <h2 className="h2-sample">Fresh Daily</h2>
            </div>
            <div className="type-sample">
              <div className="type-label">H3 - Card Title (Oswald 32px)</div>
              <h3 className="h3-sample">Mac N Cheese Special</h3>
            </div>
            <div className="type-sample">
              <div className="type-label">H4 - Subtitle (Oswald 24px)</div>
              <h4 className="h4-sample">Today&apos;s Featured Items</h4>
            </div>
            <div className="type-sample">
              <div className="type-label">Body Large (Inter 18px)</div>
              <p className="body-large">
                Our waffles are made fresh every morning with a secret recipe that&apos;s been
                perfected over years. Crispy on the outside, fluffy on the inside.
              </p>
            </div>
            <div className="type-sample">
              <div className="type-label">Body Regular (Inter 16px)</div>
              <p className="body-regular">
                Choose from our selection of savory and sweet fillings. All ingredients are locally sourced.
              </p>
            </div>
            <div className="type-sample">
              <div className="type-label">Caption</div>
              <p className="caption">Limited time offer - Order before 6PM</p>
            </div>
          </section>

          {/* Buttons */}
          <section className="section">
            <h2 className="section-title">Buttons & Interactive Elements</h2>
            <div className="buttons-grid">
              <button className="btn btn-primary">Primary</button>
              <button className="btn btn-secondary">Secondary</button>
              <button className="btn btn-success">Success</button>
              <button className="btn btn-disabled" disabled>Disabled</button>
              <button className="link-btn">View Details →</button>
            </div>
          </section>

          {/* Cards */}
          <section className="section">
            <h2 className="section-title">Menu Cards</h2>
            <div className="cards-grid">
              <div className="card">
                <div className="card-header">
                  <span className="card-header-title">Savory</span>
                  <span className="price-tag">$8.50</span>
                </div>
                <div className="card-body">
                  <div className="card-title">Mac N Cheese</div>
                  <div className="card-text">Creamy mac and cheese with crispy bacon bits, served in a golden waffle</div>
                  <div style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
                    <span className="badge badge-orange">Popular</span>
                    <span className="badge badge-yellow">Cheesy</span>
                  </div>
                  <button className="link-btn">Add to Cart →</button>
                </div>
              </div>

              <div className="card">
                <div className="card-header">
                  <span className="card-header-title">Special</span>
                  <span className="price-tag">$9.99</span>
                </div>
                <div className="card-body">
                  <div className="card-title">Olivier Wrap</div>
                  <div className="card-text">Classic olivier salad with chicken, fresh veggies, special mustard sauce</div>
                  <div style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
                    <span className="badge badge-blue">New</span>
                    <span className="badge badge-green">Fresh</span>
                  </div>
                  <button className="link-btn">Add to Cart →</button>
                </div>
              </div>

              <div className="card">
                <div className="card-header">
                  <span className="card-header-title">Sweet</span>
                  <span className="price-tag">$7.00</span>
                </div>
                <div className="card-body">
                  <div className="card-title">Berry Bliss</div>
                  <div className="card-text">Fresh berries with whipped cream and chocolate drizzle</div>
                  <div style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
                    <span className="badge badge-pink">Sweet</span>
                    <span className="badge badge-red">Hot</span>
                  </div>
                  <button className="link-btn">Add to Cart →</button>
                </div>
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
                <input type="text" className="form-input error" placeholder="Enter phone number" />
                <div className="error-message">Please enter a valid phone number</div>
              </div>

              <div className="form-group">
                <div className="checkbox-group">
                  <input type="checkbox" className="checkbox" id="extra" defaultChecked />
                  <label htmlFor="extra" style={{ fontSize: '15px', color: '#444' }}>
                    Add extra cheese (+$1.50)
                  </label>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Pickup Time</label>
                <select className="form-input">
                  <option>Select a time</option>
                  <option>11:00 AM</option>
                  <option>12:00 PM</option>
                  <option>1:00 PM</option>
                  <option>2:00 PM</option>
                </select>
              </div>

              <button className="btn btn-primary">Place Order</button>
            </div>
          </section>

          {/* Badges */}
          <section className="section">
            <h2 className="section-title">Badges & Status</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '24px' }}>
              <span className="badge badge-orange">Popular</span>
              <span className="badge badge-blue">New</span>
              <span className="badge badge-yellow">Limited</span>
              <span className="badge badge-green">Vegan</span>
              <span className="badge badge-red">Spicy</span>
              <span className="badge badge-pink">Sweet</span>
            </div>

            <div className="progress-container">
              <div className="progress-header">
                <span className="progress-label">Daily Goal Progress</span>
                <span className="progress-value">65%</span>
              </div>
              <div className="progress">
                <div className="progress-fill" style={{ width: '65%' }}></div>
              </div>
            </div>
          </section>

          {/* Alerts */}
          <section className="section">
            <h2 className="section-title">Alerts & Notifications</h2>
            <div style={{ maxWidth: '560px' }}>
              <div className="alert alert-success">
                <span>✓</span>
                <span>Your order has been placed successfully!</span>
              </div>
              <div className="alert alert-error">
                <span>✕</span>
                <span>Sorry, this item is currently sold out</span>
              </div>
              <div className="alert alert-warning">
                <span>⚠</span>
                <span>Kitchen closes in 30 minutes - order soon!</span>
              </div>
              <div className="alert alert-info">
                <span>ℹ</span>
                <span>Free delivery on orders over $25</span>
              </div>
            </div>
          </section>

          {/* Menu List Sample */}
          <section className="section">
            <h2 className="section-title">Today&apos;s Specials</h2>
            <div className="menu-list">
              <div className="menu-item">
                <div className="menu-info">
                  <div className="menu-icon" style={{ background: '#F5E6C8' }}>🧇</div>
                  <div className="menu-content">
                    <div className="menu-title">Classic Chicken Waffle</div>
                    <div className="menu-desc">Crispy fried chicken with maple syrup</div>
                  </div>
                </div>
                <div className="menu-actions">
                  <span className="badge badge-green">Available</span>
                  <span className="price-tag">$10.99</span>
                </div>
              </div>

              <div className="menu-item">
                <div className="menu-info">
                  <div className="menu-icon" style={{ background: '#9ED6EE' }}>🧀</div>
                  <div className="menu-content">
                    <div className="menu-title">Triple Cheese Melt</div>
                    <div className="menu-desc">Three cheese blend with herbs</div>
                  </div>
                </div>
                <div className="menu-actions">
                  <span className="badge badge-orange">Popular</span>
                  <span className="price-tag">$9.50</span>
                </div>
              </div>

              <div className="menu-item">
                <div className="menu-info">
                  <div className="menu-icon" style={{ background: '#E66B9F' }}>🍓</div>
                  <div className="menu-content">
                    <div className="menu-title">Strawberry Dream</div>
                    <div className="menu-desc">Fresh strawberries with cream</div>
                  </div>
                </div>
                <div className="menu-actions">
                  <span className="badge badge-red">Sold Out</span>
                  <span className="price-tag">$8.00</span>
                </div>
              </div>
            </div>

            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-value">2.5K</div>
                <div className="stat-label">Orders Today</div>
              </div>
              <div className="stat-card">
                <div className="stat-value">4.9</div>
                <div className="stat-label">Rating</div>
              </div>
              <div className="stat-card">
                <div className="stat-value">15</div>
                <div className="stat-label">Menu Items</div>
              </div>
              <div className="stat-card">
                <div className="stat-value">12m</div>
                <div className="stat-label">Avg Wait</div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
