import React from 'react';

const cssStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Rubik:wght@400;500;700&display=swap');

  .showcase {
    --bg-cream: #f7d7a6;
    --bg-warm: #f3c99b;
    --bg-sky: #bfe9f7;
    --bg-panel: #fff3df;
    --ink: #1f1b14;
    --ink-secondary: #3a2f24;
    --ink-muted: #5a4a3b;
    --accent-orange: #f28a1a;
    --accent-red: #e45136;
    --accent-mustard: #f2b33b;
    --accent-green: #2f7d4a;
    --accent-blue: #3c6fc7;
    --border-ink: #1f1b14;
    --border-dash: #2b241b;
    --radius-sm: 10px;
    --radius-md: 14px;
    --radius-lg: 24px;
    --shadow-offset: 4px 4px 0 var(--border-ink);
    --transition: 140ms cubic-bezier(0.2, 0.9, 0.2, 1);

    font-family: 'Rubik', 'Arial', sans-serif;
    background: radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.25), transparent 40%),
      repeating-linear-gradient(45deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.08) 6px, transparent 6px, transparent 12px),
      var(--bg-cream);
    color: var(--ink);
    min-height: 100vh;
    padding: 48px 24px 80px;
  }

  .showcase-container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 28px;
  }

  .section {
    background: var(--bg-panel);
    border: 2px solid var(--border-ink);
    border-radius: var(--radius-md);
    padding: 32px;
    box-shadow: var(--shadow-offset);
  }

  .section.alt {
    background: var(--bg-sky);
  }

  .section-title {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 20px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    margin-bottom: 20px;
    display: inline-flex;
    align-items: center;
    gap: 12px;
  }

  .section-title::after {
    content: '';
    height: 3px;
    width: 80px;
    background: var(--border-ink);
    border-radius: 2px;
  }

  .hero {
    background: var(--bg-warm);
    border: 3px solid var(--border-ink);
    border-radius: var(--radius-lg);
    padding: 48px;
    position: relative;
    overflow: hidden;
    box-shadow: 6px 6px 0 var(--border-ink);
  }

  .hero::before,
  .hero::after {
    content: '';
    position: absolute;
    width: 120px;
    height: 120px;
    border: 3px dashed var(--border-ink);
    border-radius: 50%;
    opacity: 0.25;
  }

  .hero::before {
    top: -20px;
    right: 40px;
  }

  .hero::after {
    bottom: -40px;
    left: 30px;
  }

  .hero-title {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 64px;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    margin: 0 0 12px;
  }

  .hero-subtitle {
    font-size: 18px;
    color: var(--ink-secondary);
    max-width: 560px;
    margin-bottom: 24px;
  }

  .hero-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    align-items: center;
  }

  .sticker {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: var(--accent-red);
    color: var(--bg-panel);
    padding: 6px 14px;
    border-radius: 999px;
    border: 2px solid var(--border-ink);
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    font-size: 12px;
  }

  .btn {
    border: 2px solid var(--border-ink);
    border-radius: var(--radius-sm);
    padding: 12px 18px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    cursor: pointer;
    transition: var(--transition);
    box-shadow: 3px 3px 0 var(--border-ink);
    background: var(--bg-panel);
  }

  .btn-primary {
    background: var(--accent-orange);
  }

  .btn-secondary {
    background: var(--bg-panel);
  }

  .btn-outline {
    background: transparent;
    border-style: dashed;
  }

  .btn-success {
    background: var(--accent-green);
    color: var(--bg-panel);
  }

  .btn:active,
  .btn:hover {
    transform: translate(-2px, -2px);
    box-shadow: 5px 5px 0 var(--border-ink);
  }

  .btn-disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .link {
    color: var(--accent-blue);
    font-weight: 700;
    text-decoration: none;
    border-bottom: 2px solid var(--accent-blue);
  }

  .color-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: 16px;
  }

  .color-swatch {
    background: var(--bg-panel);
    border: 2px solid var(--border-ink);
    border-radius: var(--radius-sm);
    padding: 12px;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .swatch-block {
    height: 72px;
    border-radius: 8px;
    border: 2px solid var(--border-ink);
  }

  .swatch-label {
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    font-weight: 700;
  }

  .type-row {
    display: grid;
    gap: 16px;
  }

  .type-heading {
    font-family: 'Bebas Neue', sans-serif;
    text-transform: uppercase;
  }

  .type-h1 { font-size: 48px; }
  .type-h2 { font-size: 40px; }
  .type-h3 { font-size: 32px; }
  .type-h4 { font-size: 26px; }
  .type-h5 { font-size: 22px; }
  .type-h6 { font-size: 18px; }

  .body-large { font-size: 18px; }
  .body-regular { font-size: 16px; }
  .body-small { font-size: 13px; }
  .body-caption { font-size: 12px; text-transform: uppercase; letter-spacing: 0.06em; font-weight: 700; }

  .button-row {
    display: flex;
    flex-wrap: wrap;
    gap: 14px;
  }

  .card-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 18px;
  }

  .card {
    background: var(--bg-panel);
    border: 2px solid var(--border-ink);
    border-radius: var(--radius-md);
    box-shadow: var(--shadow-offset);
    padding: 18px;
    display: grid;
    gap: 12px;
    transition: var(--transition);
  }

  .card:hover {
    transform: translate(-2px, -2px);
    box-shadow: 6px 6px 0 var(--border-ink);
  }

  .card-header {
    height: 70px;
    border-radius: 10px;
    border: 2px solid var(--border-ink);
    background: linear-gradient(135deg, var(--accent-red), var(--accent-orange));
  }

  .card-title {
    font-weight: 700;
    font-size: 20px;
  }

  .card-action {
    font-weight: 700;
    color: var(--accent-blue);
    text-transform: uppercase;
    font-size: 12px;
    letter-spacing: 0.06em;
  }

  .form-grid {
    display: grid;
    gap: 14px;
    max-width: 520px;
  }

  .label {
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    font-weight: 700;
  }

  .input,
  .select {
    padding: 12px 14px;
    border-radius: var(--radius-sm);
    border: 2px solid var(--border-ink);
    background: var(--bg-panel);
    font-size: 15px;
  }

  .input:focus,
  .select:focus {
    outline: 2px solid var(--accent-red);
  }

  .input-error {
    border-color: var(--accent-red);
  }

  .checkbox-row {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 14px;
  }

  .alert-grid {
    display: grid;
    gap: 12px;
  }

  .alert {
    padding: 12px 14px;
    border-radius: var(--radius-sm);
    border: 2px solid var(--border-ink);
    font-weight: 600;
    color: var(--ink);
  }

  .alert.success { background: rgba(47, 125, 74, 0.45); }
  .alert.error { background: rgba(228, 81, 54, 0.5); }
  .alert.warning { background: rgba(242, 179, 59, 0.55); }
  .alert.info { background: rgba(60, 111, 199, 0.45); }

  .progress {
    height: 14px;
    border-radius: 999px;
    border: 2px solid var(--border-ink);
    overflow: hidden;
    background: var(--bg-panel);
  }

  .progress-bar {
    height: 100%;
    width: 65%;
    background: repeating-linear-gradient(45deg, var(--accent-orange), var(--accent-orange) 10px, var(--accent-mustard) 10px, var(--accent-mustard) 20px);
  }

  .list-grid {
    display: grid;
    gap: 12px;
  }

  .list-item {
    display: grid;
    grid-template-columns: 1fr auto auto;
    gap: 12px;
    align-items: center;
    padding: 12px 14px;
    border: 2px solid var(--border-ink);
    border-radius: var(--radius-sm);
    background: var(--bg-panel);
  }

  .badge {
    padding: 4px 12px;
    border-radius: 999px;
    border: 2px solid var(--border-ink);
    font-size: 12px;
    text-transform: uppercase;
    font-weight: 700;
  }

  .badge.active { background: var(--accent-green); color: var(--bg-panel); }
  .badge.soldout { background: var(--accent-red); color: var(--bg-panel); }

  .widget-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 16px;
  }

  .widget {
    background: var(--bg-panel);
    border: 2px solid var(--border-ink);
    border-radius: var(--radius-md);
    padding: 16px;
    box-shadow: 3px 3px 0 var(--border-ink);
    display: grid;
    gap: 8px;
  }

  .widget-title {
    font-weight: 700;
    text-transform: uppercase;
    font-size: 12px;
    letter-spacing: 0.06em;
  }

  .widget-stat {
    font-size: 26px;
    font-family: 'Bebas Neue', sans-serif;
    letter-spacing: 0.04em;
  }

  .ticket {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    border: 2px dashed var(--border-ink);
    padding: 6px 10px;
    border-radius: 999px;
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
  }

  .toggle {
    width: 46px;
    height: 26px;
    border-radius: 999px;
    border: 2px solid var(--border-ink);
    background: var(--accent-mustard);
    position: relative;
  }

  .toggle::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 3px;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    border: 2px solid var(--border-ink);
    background: var(--bg-panel);
    transform: translateY(-50%);
  }

  .note {
    font-size: 13px;
    color: var(--ink-secondary);
    margin-top: 8px;
  }

  @media (max-width: 720px) {
    .hero {
      padding: 32px;
    }

    .hero-title {
      font-size: 48px;
    }

    .list-item {
      grid-template-columns: 1fr;
      text-align: left;
    }
  }
`;

export default function DesignShowcase() {
  return (
    <>
      <style>{cssStyles}</style>
      <main className="showcase">
        <div className="showcase-container">
          <section className="hero">
            <div className="sticker">festival special</div>
            <h1 className="hero-title">Retro Snack Poster</h1>
            <p className="hero-subtitle">
              A loud, hand-printed system for street food specials. Big blocks, chunky outlines, and playful
              doodles that feel like a weekend market flyer.
            </p>
            <div className="hero-actions">
              <button className="btn btn-primary">Order the special</button>
              <button className="btn btn-outline">See the menu</button>
            </div>
          </section>

          <section className="section">
            <div className="section-title">Color Palette</div>
            <div className="color-grid">
              {[
                ['Cream Base', '#f7d7a6'],
                ['Sky Card', '#bfe9f7'],
                ['Warm Paper', '#f3c99b'],
                ['Light Panel', '#fff3df'],
                ['Poster Orange', '#f28a1a'],
                ['Tomato Red', '#e45136'],
                ['Mustard', '#f2b33b'],
                ['Herb Green', '#2f7d4a'],
                ['Ribbon Blue', '#3c6fc7'],
                ['Ink Black', '#1f1b14'],
              ].map(([name, hex]) => (
                <div key={name} className="color-swatch">
                  <div className="swatch-block" style={{ background: hex }} />
                  <div className="swatch-label">{name}</div>
                  <div className="note">{hex}</div>
                </div>
              ))}
            </div>
          </section>

          <section className="section alt">
            <div className="section-title">Typography Scale</div>
            <div className="type-row">
              <div className="type-heading type-h1">Hero Headline 64px</div>
              <div className="type-heading type-h2">Section Headline 36px</div>
              <div className="type-heading type-h3">Poster Subhead 32px</div>
              <div className="type-heading type-h4">Card Title 26px</div>
              <div className="type-heading type-h5">Label Title 22px</div>
              <div className="type-heading type-h6">Mini Head 18px</div>
              <div className="body-large">Big flavor. Bigger letters. Use loud display type for headlines.</div>
              <div className="body-regular">
                Body copy stays friendly and easy to scan, keeping the rhythm of short lines and clear spacing.
              </div>
              <div className="body-small">Small print for ingredients, timestamps, or pickup info.</div>
              <div className="body-caption">Caption / label style</div>
            </div>
          </section>

          <section className="section">
            <div className="section-title">Buttons & Interactive</div>
            <div className="button-row">
              <button className="btn btn-primary">Primary Button</button>
              <button className="btn btn-secondary">Secondary Button</button>
              <button className="btn btn-success">Success Button</button>
              <button className="btn btn-outline">Outline Button</button>
              <button className="btn btn-disabled" disabled>
                Disabled
              </button>
              <a className="link" href="#buttons">Menu link</a>
            </div>
          </section>

          <section className="section alt">
            <div className="section-title">Cards</div>
            <div className="card-grid">
              {[
                {
                  title: 'Mac-n-Cheese Special',
                  text: 'Extra stretch, extra cheddar, finished with chili dust.',
                },
                {
                  title: 'Shavell Wrap',
                  text: 'Grilled chicken, tangy sauce, crunchy veggies.',
                },
                {
                  title: 'Olivye Bowl',
                  text: 'Classic salad with a festive twist and crispy pickles.',
                },
              ].map((card) => (
                <div key={card.title} className="card">
                  <div className="card-header" />
                  <div className="card-title">{card.title}</div>
                  <div className="note">{card.text}</div>
                  <span className="card-action">Add to order</span>
                </div>
              ))}
            </div>
          </section>

          <section className="section">
            <div className="section-title">Widget Examples</div>
            <div className="widget-grid">
              <div className="widget">
                <div className="widget-title">Queue tracker</div>
                <div className="widget-stat">06 min</div>
                <div className="note">Average wait right now</div>
                <div className="progress">
                  <div className="progress-bar" />
                </div>
              </div>
              <div className="widget">
                <div className="widget-title">Ticket stamp</div>
                <div className="ticket">#127 • Ready</div>
                <div className="note">Pick up at window B</div>
                <button className="btn btn-secondary">Ping me</button>
              </div>
              <div className="widget">
                <div className="widget-title">Sauce toggle</div>
                <div className="toggle" />
                <div className="note">Extra spicy is ON</div>
                <button className="btn btn-outline">Change</button>
              </div>
              <div className="widget">
                <div className="widget-title">Top sellers</div>
                <div style={{ fontWeight: 700 }}>Cheese stretch</div>
                <div className="note">34 orders today</div>
                <div className="badge active" style={{ width: 'fit-content' }}>
                  Hot pick
                </div>
              </div>
            </div>
          </section>

          <section className="section">
            <div className="section-title">Form Elements</div>
            <div className="form-grid">
              <label className="label">Pickup name</label>
              <input className="input" placeholder="Name on the order" />
              <label className="label">Phone number</label>
              <input className="input input-error" placeholder="Required" />
              <div className="note">Please enter a valid phone number.</div>
              <label className="label">Spice level</label>
              <select className="select">
                <option>Mild</option>
                <option>Hot</option>
                <option>Extra fire</option>
              </select>
              <div className="checkbox-row">
                <input type="checkbox" id="utensils" />
                <label htmlFor="utensils">Include extra napkins</label>
              </div>
              <button className="btn btn-primary">Submit order</button>
            </div>
          </section>

          <section className="section alt">
            <div className="section-title">Feedback & Status</div>
            <div className="alert-grid">
              <div className="alert success">Order confirmed! Pickup in 12 minutes.</div>
              <div className="alert error">Payment failed. Try again.</div>
              <div className="alert warning">Only 5 wraps left today.</div>
              <div className="alert info">Live kitchen: 6 orders ahead.</div>
            </div>
            <div style={{ marginTop: '16px' }}>
              <div className="label">Progress</div>
              <div className="progress">
                <div className="progress-bar" />
              </div>
            </div>
          </section>

          <section className="section">
            <div className="section-title">Sample Content Layout</div>
            <div className="note">Saturday market specials</div>
            <div className="list-grid">
              <div className="list-item">
                <div>
                  <strong>Cheese stretch toast</strong>
                  <div className="note">Launches at 10:00 AM</div>
                </div>
                <span className="badge active">Active</span>
                <button className="btn btn-secondary">Reserve</button>
              </div>
              <div className="list-item">
                <div>
                  <strong>Shavell wrap drop</strong>
                  <div className="note">First 50 free mini wraps</div>
                </div>
                <span className="badge active">Active</span>
                <button className="btn btn-secondary">Join list</button>
              </div>
              <div className="list-item">
                <div>
                  <strong>Olivye bowl</strong>
                  <div className="note">Sold out by noon</div>
                </div>
                <span className="badge soldout">Sold out</span>
                <button className="btn btn-disabled" disabled>
                  Closed
                </button>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
