import React from 'react';

const cssStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Rubik+Mono+One&family=Nunito+Sans:wght@400;600;700&display=swap');

  :root {
    --shavell-midnight: #0B0B0B;
    --shavell-cream: #FBE8CF;
    --shavell-cloud: #F5F5F2;
    --shavell-cheddar: #F5A623;
    --shavell-tangerine: #F2721E;
    --shavell-tomato: #E93A2F;
    --shavell-bubblegum: #FF5AA5;
    --shavell-sky: #9BD8F7;
    --shavell-herb: #3BB273;
    --shavell-ink: #101010;
    --shavell-paper: #FFFFFF;
    --shavell-muted: #5C4A3A;
    --shavell-shadow-offset: 6px 6px 0 #101010;
    --shavell-shadow-soft: 0 12px 0 #101010;
    --shavell-radius-sharp: 4px;
    --shavell-radius-soft: 14px;
    --shavell-radius-pill: 999px;
    --shavell-space-xs: 6px;
    --shavell-space-sm: 10px;
    --shavell-space-md: 16px;
    --shavell-space-lg: 24px;
    --shavell-space-xl: 36px;
    --shavell-space-2xl: 56px;
    --shavell-transition-fast: 120ms cubic-bezier(0.2, 0.8, 0.2, 1);
    --shavell-transition-hover: 180ms cubic-bezier(0.2, 0.8, 0.2, 1);
  }

  .shavell-page * {
    box-sizing: border-box;
  }

  .shavell-page {
    font-family: 'Nunito Sans', sans-serif;
    background: var(--shavell-cream);
    color: var(--shavell-ink);
    padding: var(--shavell-space-2xl) var(--shavell-space-xl);
    position: relative;
    overflow: hidden;
  }

  .shavell-page::before {
    content: '';
    position: absolute;
    inset: 0;
    background: var(--shavell-cream);
    pointer-events: none;
    z-index: 0;
  }

  .shavell-container {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    gap: var(--shavell-space-2xl);
  }

  .shavell-hero {
    background: var(--shavell-midnight);
    color: var(--shavell-paper);
    border-radius: var(--shavell-radius-soft);
    padding: var(--shavell-space-2xl);
    border: 3px solid var(--shavell-paper);
    box-shadow: 6px 6px 0 var(--shavell-paper);
    position: relative;
    overflow: hidden;
  }

  .shavell-hero::after {
    content: '';
    position: absolute;
    right: -40px;
    top: -30px;
    width: 180px;
    height: 180px;
    background: var(--shavell-cheddar);
    border-radius: 50%;
  }

  .shavell-hero-inner {
    position: relative;
    z-index: 1;
    display: grid;
    gap: var(--shavell-space-lg);
    max-width: 720px;
  }

  .shavell-title {
    font-family: 'Rubik Mono One', sans-serif;
    font-size: clamp(2.6rem, 5vw, 4.5rem);
    text-transform: uppercase;
    letter-spacing: -0.01em;
    margin: 0;
  }

  .shavell-tagline {
    font-size: 1.1rem;
    line-height: 1.7;
    color: #F2EDE6;
    margin: 0;
  }

  .shavell-cta-row {
    display: flex;
    flex-wrap: wrap;
    gap: var(--shavell-space-md);
    align-items: center;
  }

  .shavell-btn {
    border: 2px solid var(--shavell-ink);
    border-radius: var(--shavell-radius-soft);
    padding: 12px 22px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    cursor: pointer;
    transition: transform var(--shavell-transition-hover), box-shadow var(--shavell-transition-hover);
  }

  .shavell-btn-primary {
    background: var(--shavell-cheddar);
    color: var(--shavell-ink);
  }

  .shavell-btn-secondary {
    background: var(--shavell-cloud);
    color: var(--shavell-ink);
    border-style: solid;
  }

  .shavell-btn-ghost {
    background: transparent;
    color: var(--shavell-paper);
    border-color: var(--shavell-paper);
    text-decoration: underline;
  }

  .shavell-btn:hover {
    transform: translate(-2px, -2px);
    box-shadow: var(--shavell-shadow-offset);
  }

  .shavell-badge {
    display: inline-flex;
    align-items: center;
    gap: var(--shavell-space-xs);
    background: var(--shavell-bubblegum);
    color: var(--shavell-paper);
    padding: 6px 12px;
    border-radius: var(--shavell-radius-pill);
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    box-shadow: var(--shavell-shadow-offset);
  }

  .shavell-section {
    display: flex;
    flex-direction: column;
    gap: var(--shavell-space-lg);
  }

  .shavell-section-title {
    font-family: 'Rubik Mono One', sans-serif;
    font-size: clamp(1.8rem, 4vw, 2.5rem);
    text-transform: uppercase;
    margin: 0;
  }

  .shavell-section-desc {
    margin: 0;
    color: var(--shavell-muted);
    max-width: 640px;
    line-height: 1.6;
  }

  .shavell-section-desc-dark {
    color: var(--shavell-muted);
  }

  .shavell-palette-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    gap: var(--shavell-space-md);
  }

  .shavell-swatch {
    background: var(--shavell-cloud);
    border: 2px solid var(--shavell-ink);
    border-radius: var(--shavell-radius-soft);
    padding: var(--shavell-space-md);
    box-shadow: var(--shavell-shadow-soft);
    color: var(--shavell-ink);
  }

  .shavell-swatch-chip {
    height: 60px;
    border-radius: var(--shavell-radius-sharp);
    border: 2px solid var(--shavell-ink);
    margin-bottom: var(--shavell-space-sm);
  }

  .shavell-swatch-name {
    font-weight: 700;
    text-transform: uppercase;
    font-size: 0.75rem;
    letter-spacing: 0.06em;
  }

  .shavell-typography {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: var(--shavell-space-lg);
  }

  .shavell-typo-block {
    background: var(--shavell-cloud);
    border: 2px solid var(--shavell-ink);
    border-radius: var(--shavell-radius-soft);
    padding: var(--shavell-space-lg);
    color: var(--shavell-ink);
  }

  .shavell-typo-hero {
    font-family: 'Rubik Mono One', sans-serif;
    font-size: 2.6rem;
    text-transform: uppercase;
  }

  .shavell-typo-section {
    font-family: 'Rubik Mono One', sans-serif;
    font-size: 1.8rem;
    text-transform: uppercase;
  }

  .shavell-typo-body {
    font-size: 1rem;
    line-height: 1.7;
  }

  .shavell-divider {
    border-top: 2px solid var(--shavell-ink);
    margin: var(--shavell-space-md) 0;
  }

  .shavell-button-row {
    display: flex;
    flex-wrap: wrap;
    gap: var(--shavell-space-md);
  }

  .shavell-card-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: var(--shavell-space-lg);
  }

  .shavell-card {
    background: var(--shavell-cloud);
    border: 2px solid var(--shavell-ink);
    border-radius: var(--shavell-radius-soft);
    padding: var(--shavell-space-lg);
    display: grid;
    gap: var(--shavell-space-md);
    transition: transform var(--shavell-transition-hover), box-shadow var(--shavell-transition-hover);
    color: var(--shavell-ink);
  }

  .shavell-card:hover {
    transform: translate(-2px, -2px);
    box-shadow: var(--shavell-shadow-offset);
  }

  .shavell-card-banner {
    height: 80px;
    border-radius: var(--shavell-radius-sharp);
    border: 2px solid var(--shavell-ink);
    background: repeating-linear-gradient(
      135deg,
      var(--shavell-cheddar),
      var(--shavell-cheddar) 10px,
      var(--shavell-tangerine) 10px,
      var(--shavell-tangerine) 20px
    );
  }

  .shavell-card-title {
    font-family: 'Rubik Mono One', sans-serif;
    font-size: 1.1rem;
    text-transform: uppercase;
  }

  .shavell-card-desc {
    margin: 0;
    color: var(--shavell-muted);
  }

  .shavell-form {
    display: grid;
    gap: var(--shavell-space-md);
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    align-items: end;
    color: var(--shavell-ink);
  }

  .shavell-label {
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    font-weight: 700;
  }

  .shavell-input,
  .shavell-select {
    width: 100%;
    padding: 12px 14px;
    border: 2px solid var(--shavell-ink);
    border-radius: var(--shavell-radius-sharp);
    background: var(--shavell-cloud);
    font-family: 'Nunito Sans', sans-serif;
  }

  .shavell-input:focus,
  .shavell-select:focus {
    outline: none;
    border-color: var(--shavell-tomato);
    box-shadow: 0 0 0 3px var(--shavell-tomato);
  }

  .shavell-input-error {
    border-color: var(--shavell-tomato);
    background: #FCE0DE;
  }

  .shavell-toggle {
    display: inline-flex;
    align-items: center;
    gap: 10px;
  }

  .shavell-checkbox {
    width: 20px;
    height: 20px;
    border: 2px solid var(--shavell-ink);
    border-radius: 4px;
    background: var(--shavell-cloud);
  }

  .shavell-alerts {
    display: grid;
    gap: var(--shavell-space-md);
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  }

  .shavell-alert {
    border: 2px solid var(--shavell-ink);
    border-radius: var(--shavell-radius-soft);
    padding: var(--shavell-space-md);
    background: var(--shavell-cloud);
    display: grid;
    gap: var(--shavell-space-xs);
    color: var(--shavell-ink);
  }

  .shavell-alert strong {
    font-family: 'Rubik Mono One', sans-serif;
    text-transform: uppercase;
  }

  .shavell-progress {
    height: 14px;
    border: 2px solid var(--shavell-ink);
    border-radius: var(--shavell-radius-pill);
    background: var(--shavell-cloud);
    overflow: hidden;
  }

  .shavell-progress-bar {
    height: 100%;
    width: 65%;
    background: var(--shavell-cheddar);
    border-right: 2px solid var(--shavell-ink);
  }

  .shavell-layout {
    background: var(--shavell-cloud);
    border: 2px solid var(--shavell-ink);
    border-radius: var(--shavell-radius-soft);
    padding: var(--shavell-space-xl);
    display: grid;
    gap: var(--shavell-space-md);
    color: var(--shavell-ink);
  }

  .shavell-layout-row {
    display: grid;
    grid-template-columns: 1.2fr 1fr auto;
    gap: var(--shavell-space-md);
    align-items: center;
    padding: var(--shavell-space-sm) 0;
    border-bottom: 2px solid var(--shavell-ink);
  }

  .shavell-btn-disabled {
    background: #D8CFC2;
    color: #7A6A5B;
    border-color: #7A6A5B;
    cursor: not-allowed;
    box-shadow: none;
  }

  .shavell-layout-row:last-child {
    border-bottom: none;
  }

  .shavell-pill {
    padding: 4px 12px;
    border-radius: var(--shavell-radius-pill);
    font-size: 0.7rem;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    font-weight: 700;
  }

  .shavell-pill.active {
    background: var(--shavell-herb);
    color: var(--shavell-paper);
  }

  .shavell-pill.inactive {
    background: var(--shavell-tomato);
    color: var(--shavell-paper);
  }

  @media (max-width: 700px) {
    .shavell-page {
      padding: var(--shavell-space-xl) var(--shavell-space-lg);
    }

    .shavell-hero {
      padding: var(--shavell-space-xl);
    }

    .shavell-layout-row {
      grid-template-columns: 1fr;
    }
  }
`;

export default function DesignShowcase() {
  return (
    <>
      <style>{cssStyles}</style>
      <main className="shavell-page">
        <div className="shavell-container">
          <section className="shavell-hero">
            <div className="shavell-hero-inner">
              <span className="shavell-badge">New drop</span>
              <h1 className="shavell-title">Shavell Pop Street Food UI</h1>
              <p className="shavell-tagline">
                Massive type, sticker accents, and dotted menu leaders give every screen that just-opened corner joint
                energy.
              </p>
              <div className="shavell-cta-row">
                <button className="shavell-btn shavell-btn-primary">Order Now</button>
                <button className="shavell-btn shavell-btn-secondary">See Specials</button>
                <button className="shavell-btn shavell-btn-ghost">Menu Board</button>
              </div>
            </div>
          </section>

          <section className="shavell-section">
            <div>
              <h2 className="shavell-section-title">Color Palette</h2>
              <p className="shavell-section-desc">
                Sweet and savory tones with high contrast. Use Midnight for menus, Cream for posters, and loud accents
                for promos.
              </p>
            </div>
            <div className="shavell-palette-grid">
              {[
                ['Midnight', '#0B0B0B'],
                ['Cream', '#F7D2A6'],
                ['Cloud', '#F5F5F2'],
                ['Cheddar', '#F5A623'],
                ['Tangerine', '#F2721E'],
                ['Tomato', '#E93A2F'],
                ['Bubblegum', '#FF5AA5'],
                ['Sky', '#9BD8F7'],
                ['Herb', '#3BB273'],
              ].map(([name, color]) => (
                <div className="shavell-swatch" key={name}>
                  <div className="shavell-swatch-chip" style={{ background: color }} />
                  <div className="shavell-swatch-name">{name}</div>
                  <div>{color}</div>
                </div>
              ))}
            </div>
          </section>

          <section className="shavell-section">
            <div>
              <h2 className="shavell-section-title">Typography Scale</h2>
              <p className="shavell-section-desc">
                Mix an aggressive display face with a friendly geometric body font. Keep headings uppercase and packed.
              </p>
            </div>
            <div className="shavell-typography">
              <div className="shavell-typo-block">
                <div className="shavell-typo-hero">Hero Title</div>
                <div className="shavell-divider" />
                <div className="shavell-typo-body">
                  Loud branding copy that reads like a menu board. Use bold, compact letterforms.
                </div>
              </div>
              <div className="shavell-typo-block">
                <div className="shavell-typo-section">Section Title</div>
                <div className="shavell-divider" />
                <div className="shavell-typo-body">
                  Warm, friendly body copy with extra line-height for quick scanning of offers and ingredients.
                </div>
              </div>
              <div className="shavell-typo-block">
                <div className="shavell-typo-body" style={{ fontWeight: 700, textTransform: 'uppercase' }}>
                  Sticker Label
                </div>
                <div className="shavell-divider" />
                <p className="shavell-typo-body">
                  Use tiny uppercase labels for price tags, limited-time promos, and special callouts.
                </p>
              </div>
            </div>
          </section>

          <section className="shavell-section">
            <div>
              <h2 className="shavell-section-title">Buttons &amp; Interactions</h2>
              <p className="shavell-section-desc">
                Buttons feel like printed stickers: thick borders, offset shadows, and no soft gradients.
              </p>
            </div>
            <div className="shavell-button-row">
              <button className="shavell-btn shavell-btn-primary">Primary</button>
              <button className="shavell-btn shavell-btn-secondary">Secondary</button>
              <button className="shavell-btn shavell-btn-ghost">Ghost Link</button>
              <button className="shavell-btn shavell-btn-disabled" disabled>
                Disabled
              </button>
              <a className="shavell-btn shavell-btn-secondary" href="#" style={{ textDecoration: 'none' }}>
                Menu Link
              </a>
            </div>
          </section>

          <section className="shavell-section">
            <div>
              <h2 className="shavell-section-title">Cards</h2>
              <p className="shavell-section-desc">
                Cards highlight specials with bold banners, dotted dividers, and playful textures.
              </p>
            </div>
            <div className="shavell-card-grid">
              {[
                ['Cheddar Melt', 'Extra cheese, crispy onions, and house tangy sauce.'],
                ['Sky Veggie', 'Fresh greens, pickled carrots, and a pop of citrus.'],
                ['Midnight Classic', 'Chargrilled chicken, smoky peppers, and garlic cream.'],
              ].map(([title, desc]) => (
                <div className="shavell-card" key={title}>
                  <div className="shavell-card-banner" />
                  <div className="shavell-card-title">{title}</div>
                  <p className="shavell-card-desc">{desc}</p>
                  <button className="shavell-btn shavell-btn-secondary">Add to Tray</button>
                </div>
              ))}
            </div>
          </section>

          <section className="shavell-section">
            <div>
              <h2 className="shavell-section-title">Form Elements</h2>
              <p className="shavell-section-desc">
                Keep inputs blocky and direct, with sharp corners and tomato red for validation.
              </p>
            </div>
            <div className="shavell-form">
              <div>
                <div className="shavell-label">Pickup name</div>
                <input className="shavell-input" placeholder="Your name" readOnly />
              </div>
              <div>
                <div className="shavell-label">Allergy note</div>
                <input className="shavell-input shavell-input-error" placeholder="Peanuts" readOnly />
              </div>
              <div>
                <div className="shavell-label">Order size</div>
                <select className="shavell-select" disabled>
                  <option>Regular</option>
                </select>
              </div>
              <div className="shavell-toggle">
                <div className="shavell-checkbox" />
                <span className="shavell-label">Extra cheese</span>
              </div>
              <button className="shavell-btn shavell-btn-primary">Submit Order</button>
            </div>
          </section>

          <section className="shavell-section">
            <div>
              <h2 className="shavell-section-title">Feedback &amp; Status</h2>
              <p className="shavell-section-desc">
                Alerts are loud but friendly. Use strong color blocks with display typography.
              </p>
            </div>
            <div className="shavell-alerts">
              <div className="shavell-alert" style={{ background: 'var(--shavell-herb)' }}>
                <strong>Success</strong>
                Order confirmed and grilling now.
              </div>
              <div className="shavell-alert" style={{ background: 'var(--shavell-tomato)' }}>
                <strong>Error</strong>
                Payment failed. Try again.
              </div>
              <div className="shavell-alert" style={{ background: 'var(--shavell-cheddar)' }}>
                <strong>Warning</strong>
                Limited cheese left today.
              </div>
              <div className="shavell-alert" style={{ background: 'var(--shavell-sky)' }}>
                <strong>Info</strong>
                Pickup window opens at 12:00.
              </div>
            </div>
            <div className="shavell-progress">
              <div className="shavell-progress-bar" />
            </div>
          </section>

          <section className="shavell-section">
            <div>
              <h2 className="shavell-section-title">Sample Content Layout</h2>
              <p className="shavell-section-desc">
                Combine menu items, badges, and actions in a clean grid that reads like a chalkboard lineup.
              </p>
            </div>
            <div className="shavell-layout">
              <div className="shavell-layout-row">
                <div>
                  <div className="shavell-card-title">Promo Board</div>
                  <div className="shavell-section-desc shavell-section-desc-dark">30-minute lunch rush specials</div>
                </div>
                <span className="shavell-pill active">Active</span>
                <button className="shavell-btn shavell-btn-secondary">Edit</button>
              </div>
              <div className="shavell-layout-row">
                <div>
                  <div className="shavell-card-title">Veggie Confetti Wrap</div>
                  <div className="shavell-section-desc shavell-section-desc-dark">Sky sauce, crunchy carrots, fresh herbs</div>
                </div>
                <span className="shavell-pill active">Active</span>
                <button className="shavell-btn shavell-btn-secondary">Pause</button>
              </div>
              <div className="shavell-layout-row">
                <div>
                  <div className="shavell-card-title">Midnight Melt Special</div>
                  <div className="shavell-section-desc shavell-section-desc-dark">Cheddar drip, grilled chicken, chili crunch</div>
                </div>
                <span className="shavell-pill inactive">Inactive</span>
                <button className="shavell-btn shavell-btn-secondary">Launch</button>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
