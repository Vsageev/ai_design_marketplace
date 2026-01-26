import React from 'react';

const cssStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Anton&display=swap');

  :root {
    /* Base Colors */
    --black: #000000;
    --white: #FFFFFF;
    --off-white: #F5F5F0;

    /* Accent Colors */
    --electric-yellow: #FFFF00;
    --hot-pink: #FF00FF;
    --cyber-blue: #00FFFF;
    --lime-green: #00FF00;

    /* Semantic Colors */
    --error-red: #FF0000;
    --warning-orange: #FF8800;

    /* Typography */
    --font-mono: 'Space Mono', monospace;
    --font-display: 'Anton', sans-serif;

    /* Sizes */
    --text-hero: 4rem;
    --text-section: 2.5rem;
    --text-subheader: 1.5rem;
    --text-body: 1rem;
    --text-caption: 0.875rem;

    /* Spacing */
    --spacing-sm: 8px;
    --spacing-md: 16px;
    --spacing-lg: 24px;
    --spacing-xl: 48px;
  }

  .brutalist-page * {
    box-sizing: border-box;
  }

  .brutalist-page {
    font-family: var(--font-mono);
    background: var(--white);
    color: var(--black);
    line-height: 1.5;
  }

  /* Buttons */
  .btn-brutal {
    background: var(--electric-yellow);
    color: var(--black);
    border: 3px solid var(--black);
    box-shadow: 4px 4px 0 var(--black);
    padding: 12px 24px;
    font-family: var(--font-mono);
    font-weight: 700;
    font-size: var(--text-body);
    text-transform: uppercase;
    cursor: pointer;
    transition: transform 0.1s, box-shadow 0.1s;
  }

  .btn-brutal:hover {
    transform: translate(-2px, -2px);
    box-shadow: 6px 6px 0 var(--black);
  }

  .btn-brutal:active {
    transform: translate(2px, 2px);
    box-shadow: 2px 2px 0 var(--black);
  }

  .btn-brutal-secondary {
    background: var(--white);
    color: var(--black);
    border: 3px solid var(--black);
    box-shadow: 4px 4px 0 var(--black);
    padding: 12px 24px;
    font-family: var(--font-mono);
    font-weight: 700;
    font-size: var(--text-body);
    text-transform: uppercase;
    cursor: pointer;
    transition: transform 0.1s, box-shadow 0.1s;
  }

  .btn-brutal-secondary:hover {
    transform: translate(-2px, -2px);
    box-shadow: 6px 6px 0 var(--black);
  }

  .btn-brutal-pink {
    background: var(--hot-pink);
    color: var(--black);
    border: 3px solid var(--black);
    box-shadow: 4px 4px 0 var(--black);
    padding: 12px 24px;
    font-family: var(--font-mono);
    font-weight: 700;
    font-size: var(--text-body);
    text-transform: uppercase;
    cursor: pointer;
    transition: transform 0.1s, box-shadow 0.1s;
  }

  .btn-brutal-pink:hover {
    transform: translate(-2px, -2px);
    box-shadow: 6px 6px 0 var(--black);
  }

  .btn-brutal-disabled {
    background: var(--off-white);
    color: #888;
    border: 3px solid #888;
    box-shadow: 4px 4px 0 #888;
    padding: 12px 24px;
    font-family: var(--font-mono);
    font-weight: 700;
    font-size: var(--text-body);
    text-transform: uppercase;
    cursor: not-allowed;
  }

  /* Cards */
  .card-brutal {
    background: var(--white);
    border: 3px solid var(--black);
    box-shadow: 6px 6px 0 var(--black);
    padding: var(--spacing-lg);
    transition: transform 0.1s, box-shadow 0.1s;
  }

  .card-brutal:hover {
    transform: translate(-2px, -2px);
    box-shadow: 8px 8px 0 var(--black);
  }

  /* Inputs */
  .input-brutal {
    width: 100%;
    border: 3px solid var(--black);
    padding: 12px 16px;
    font-family: var(--font-mono);
    font-size: var(--text-body);
    background: var(--white);
  }

  .input-brutal:focus {
    outline: none;
    box-shadow: 4px 4px 0 var(--cyber-blue);
  }

  .input-brutal-error {
    border-color: var(--error-red);
    box-shadow: 4px 4px 0 var(--error-red);
  }

  /* Links */
  .link-brutal {
    color: var(--hot-pink);
    text-decoration: underline;
    text-decoration-thickness: 2px;
    font-weight: 700;
  }

  .link-brutal:hover {
    background: var(--hot-pink);
    color: var(--black);
  }

  /* Toggle */
  .toggle-brutal {
    width: 60px;
    height: 32px;
    background: var(--white);
    border: 3px solid var(--black);
    position: relative;
    cursor: pointer;
  }

  .toggle-brutal::after {
    content: '';
    position: absolute;
    top: 2px;
    left: 2px;
    width: 22px;
    height: 22px;
    background: var(--black);
    transition: transform 0.1s;
  }

  .toggle-brutal.active {
    background: var(--lime-green);
  }

  .toggle-brutal.active::after {
    transform: translateX(28px);
  }

  /* Badge */
  .badge-brutal {
    display: inline-block;
    padding: 4px 12px;
    border: 2px solid var(--black);
    font-size: var(--text-caption);
    font-weight: 700;
    text-transform: uppercase;
  }

  .badge-brutal-active {
    background: var(--lime-green);
  }

  .badge-brutal-inactive {
    background: var(--off-white);
  }
`;

const styles: { [key: string]: React.CSSProperties } = {
  main: {
    padding: '48px 24px',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  hero: {
    marginBottom: '64px',
    borderBottom: '3px solid #000',
    paddingBottom: '48px',
  },
  heroTitle: {
    fontFamily: 'var(--font-display)',
    fontSize: 'var(--text-hero)',
    fontWeight: 400,
    textTransform: 'uppercase' as const,
    letterSpacing: '-0.02em',
    lineHeight: 1,
    marginBottom: '16px',
  },
  heroTagline: {
    fontSize: 'var(--text-subheader)',
    maxWidth: '600px',
    marginBottom: '24px',
  },
  section: {
    marginBottom: '64px',
  },
  sectionTitle: {
    fontFamily: 'var(--font-display)',
    fontSize: 'var(--text-section)',
    textTransform: 'uppercase' as const,
    letterSpacing: '-0.02em',
    lineHeight: 1.1,
    marginBottom: '24px',
    borderBottom: '3px solid #000',
    paddingBottom: '12px',
  },
  colorGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
    gap: '16px',
  },
  colorSwatch: {
    border: '3px solid #000',
  },
  colorPreview: {
    height: '80px',
  },
  colorInfo: {
    padding: '12px',
    borderTop: '3px solid #000',
    background: '#fff',
  },
  colorName: {
    fontSize: 'var(--text-caption)',
    fontWeight: 700,
    textTransform: 'uppercase' as const,
    marginBottom: '4px',
  },
  colorHex: {
    fontSize: 'var(--text-caption)',
    fontFamily: 'var(--font-mono)',
  },
  typographyItem: {
    marginBottom: '24px',
    paddingBottom: '24px',
    borderBottom: '2px dashed #000',
  },
  buttonRow: {
    display: 'flex',
    flexWrap: 'wrap' as const,
    gap: '16px',
    alignItems: 'center',
  },
  cardGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '24px',
  },
  cardTitle: {
    fontFamily: 'var(--font-display)',
    fontSize: 'var(--text-subheader)',
    textTransform: 'uppercase' as const,
    marginBottom: '12px',
  },
  cardDescription: {
    fontSize: 'var(--text-body)',
    marginBottom: '16px',
  },
  formGroup: {
    marginBottom: '24px',
  },
  label: {
    display: 'block',
    fontSize: 'var(--text-caption)',
    fontWeight: 700,
    textTransform: 'uppercase' as const,
    marginBottom: '8px',
  },
  errorText: {
    fontSize: 'var(--text-caption)',
    color: 'var(--error-red)',
    marginTop: '8px',
    fontWeight: 700,
  },
  alert: {
    padding: '16px',
    border: '3px solid #000',
    marginBottom: '16px',
    fontWeight: 500,
  },
  alertSuccess: {
    background: '#00FF00',
  },
  alertError: {
    background: '#FF0000',
    color: '#fff',
  },
  alertWarning: {
    background: '#FF8800',
  },
  alertInfo: {
    background: '#00FFFF',
  },
  listItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '16px',
    border: '3px solid #000',
    marginBottom: '12px',
    background: '#fff',
  },
  listItemLeft: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
  },
  listItemTitle: {
    fontWeight: 700,
    textTransform: 'uppercase' as const,
  },
  listItemMeta: {
    fontSize: 'var(--text-caption)',
  },
  progressContainer: {
    background: '#fff',
    border: '3px solid #000',
    height: '24px',
  },
  progressFill: {
    background: '#FFFF00',
    height: '100%',
  },
};

const colors = {
  base: [
    { name: 'Pure Black', hex: '#000000' },
    { name: 'Pure White', hex: '#FFFFFF' },
    { name: 'Off-White', hex: '#F5F5F0' },
  ],
  accent: [
    { name: 'Electric Yellow', hex: '#FFFF00' },
    { name: 'Hot Pink', hex: '#FF00FF' },
    { name: 'Cyber Blue', hex: '#00FFFF' },
    { name: 'Lime Green', hex: '#00FF00' },
  ],
  semantic: [
    { name: 'Error Red', hex: '#FF0000' },
    { name: 'Warning Orange', hex: '#FF8800' },
  ],
};

export default function NeoBrutalistShowcase() {
  return (
    <>
      <style>{cssStyles}</style>
      <main className="brutalist-page" style={styles.main}>
        {/* Hero */}
        <header style={styles.hero}>
          <h1 style={styles.heroTitle}>Neo Brutalist</h1>
          <p style={styles.heroTagline}>
            Raw aesthetics. Bold typography. Hard shadows. No apologies.
          </p>
          <button className="btn-brutal">Get Started</button>
        </header>

        {/* Color Palette */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Color Palette</h2>

          <h3 style={{ fontSize: '1rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '12px' }}>
            Base Colors
          </h3>
          <div style={{ ...styles.colorGrid, marginBottom: '32px' }}>
            {colors.base.map((color) => (
              <div key={color.hex} style={styles.colorSwatch}>
                <div style={{ ...styles.colorPreview, background: color.hex, border: color.hex === '#FFFFFF' ? '1px solid #000 inset' : 'none' }} />
                <div style={styles.colorInfo}>
                  <div style={styles.colorName}>{color.name}</div>
                  <div style={styles.colorHex}>{color.hex}</div>
                </div>
              </div>
            ))}
          </div>

          <h3 style={{ fontSize: '1rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '12px' }}>
            Accent Colors
          </h3>
          <div style={{ ...styles.colorGrid, marginBottom: '32px' }}>
            {colors.accent.map((color) => (
              <div key={color.hex} style={styles.colorSwatch}>
                <div style={{ ...styles.colorPreview, background: color.hex }} />
                <div style={styles.colorInfo}>
                  <div style={styles.colorName}>{color.name}</div>
                  <div style={styles.colorHex}>{color.hex}</div>
                </div>
              </div>
            ))}
          </div>

          <h3 style={{ fontSize: '1rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '12px' }}>
            Semantic Colors
          </h3>
          <div style={styles.colorGrid}>
            {colors.semantic.map((color) => (
              <div key={color.hex} style={styles.colorSwatch}>
                <div style={{ ...styles.colorPreview, background: color.hex }} />
                <div style={styles.colorInfo}>
                  <div style={styles.colorName}>{color.name}</div>
                  <div style={styles.colorHex}>{color.hex}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Typography */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Typography Scale</h2>

          <div style={styles.typographyItem}>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-hero)', textTransform: 'uppercase', lineHeight: 1 }}>
              Hero Title
            </div>
            <div style={{ fontSize: 'var(--text-caption)', marginTop: '8px' }}>
              Anton · 64px · Uppercase
            </div>
          </div>

          <div style={styles.typographyItem}>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-section)', textTransform: 'uppercase', lineHeight: 1.1 }}>
              Section Header
            </div>
            <div style={{ fontSize: 'var(--text-caption)', marginTop: '8px' }}>
              Anton · 40px · Uppercase
            </div>
          </div>

          <div style={styles.typographyItem}>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-subheader)', textTransform: 'uppercase', lineHeight: 1.2 }}>
              Sub-header
            </div>
            <div style={{ fontSize: 'var(--text-caption)', marginTop: '8px' }}>
              Anton · 24px · Uppercase
            </div>
          </div>

          <div style={styles.typographyItem}>
            <div style={{ fontSize: 'var(--text-body)' }}>
              Body text in Space Mono. Raw and unapologetic readability.
            </div>
            <div style={{ fontSize: 'var(--text-caption)', marginTop: '8px' }}>
              Space Mono · 16px · Regular
            </div>
          </div>

          <div style={{ ...styles.typographyItem, borderBottom: 'none' }}>
            <div style={{ fontSize: 'var(--text-caption)' }}>
              CAPTION TEXT FOR LABELS AND METADATA
            </div>
            <div style={{ fontSize: 'var(--text-caption)', marginTop: '8px' }}>
              Space Mono · 14px · Uppercase
            </div>
          </div>
        </section>

        {/* Buttons */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Buttons</h2>

          <div style={styles.buttonRow}>
            <button className="btn-brutal">Primary</button>
            <button className="btn-brutal-secondary">Secondary</button>
            <button className="btn-brutal-pink">Accent</button>
            <button className="btn-brutal-disabled" disabled>Disabled</button>
          </div>

          <div style={{ ...styles.buttonRow, marginTop: '24px' }}>
            <a href="#" className="link-brutal">Brutalist Link Style</a>
          </div>
        </section>

        {/* Cards */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Cards</h2>
          <p style={{ marginBottom: '24px' }}>Hover cards to see shadow movement.</p>

          <div style={styles.cardGrid}>
            <div className="card-brutal">
              <div style={{ width: '100%', height: '8px', background: '#FFFF00', marginBottom: '16px' }} />
              <h3 style={styles.cardTitle}>Feature One</h3>
              <p style={styles.cardDescription}>
                Bold interfaces that refuse to blend in. Make a statement.
              </p>
              <button className="btn-brutal-secondary" style={{ padding: '8px 16px', fontSize: '14px' }}>
                Learn More
              </button>
            </div>

            <div className="card-brutal">
              <div style={{ width: '100%', height: '8px', background: '#FF00FF', marginBottom: '16px' }} />
              <h3 style={styles.cardTitle}>Feature Two</h3>
              <p style={styles.cardDescription}>
                Raw aesthetics meet functional design. No compromises.
              </p>
              <button className="btn-brutal-secondary" style={{ padding: '8px 16px', fontSize: '14px' }}>
                Learn More
              </button>
            </div>

            <div className="card-brutal">
              <div style={{ width: '100%', height: '8px', background: '#00FFFF', marginBottom: '16px' }} />
              <h3 style={styles.cardTitle}>Feature Three</h3>
              <p style={styles.cardDescription}>
                High contrast for maximum impact. Every pixel counts.
              </p>
              <button className="btn-brutal-secondary" style={{ padding: '8px 16px', fontSize: '14px' }}>
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Forms */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Form Elements</h2>

          <div style={{ maxWidth: '400px' }}>
            <div style={styles.formGroup}>
              <label style={styles.label}>Username</label>
              <input type="text" className="input-brutal" placeholder="Enter username" />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Email (Error)</label>
              <input type="text" className="input-brutal input-brutal-error" defaultValue="invalid@" />
              <div style={styles.errorText}>Invalid email format</div>
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Options</label>
              <select className="input-brutal" style={{ cursor: 'pointer' }}>
                <option>Option One</option>
                <option>Option Two</option>
                <option>Option Three</option>
              </select>
            </div>

            <div style={{ ...styles.formGroup, display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div className="toggle-brutal active" />
              <span>Enable feature</span>
            </div>

            <button className="btn-brutal">Submit</button>
          </div>
        </section>

        {/* Alerts */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Feedback & Status</h2>

          <div style={{ maxWidth: '500px' }}>
            <div style={{ ...styles.alert, ...styles.alertSuccess }}>
              SUCCESS: Operation completed successfully
            </div>

            <div style={{ ...styles.alert, ...styles.alertError }}>
              ERROR: Something went wrong
            </div>

            <div style={{ ...styles.alert, ...styles.alertWarning }}>
              WARNING: Proceed with caution
            </div>

            <div style={{ ...styles.alert, ...styles.alertInfo }}>
              INFO: Here's something you should know
            </div>

            <div style={{ marginTop: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span style={{ fontWeight: 700, textTransform: 'uppercase', fontSize: '14px' }}>Progress</span>
                <span style={{ fontWeight: 700 }}>65%</span>
              </div>
              <div style={styles.progressContainer}>
                <div style={{ ...styles.progressFill, width: '65%' }} />
              </div>
            </div>
          </div>
        </section>

        {/* List */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Data List</h2>

          <div style={styles.listItem}>
            <div style={styles.listItemLeft}>
              <div className="toggle-brutal active" />
              <div>
                <div style={styles.listItemTitle}>dark_mode</div>
                <div style={styles.listItemMeta}>Enable dark theme</div>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span className="badge-brutal badge-brutal-active">Active</span>
              <button className="btn-brutal-secondary" style={{ padding: '6px 12px', fontSize: '12px' }}>Edit</button>
            </div>
          </div>

          <div style={styles.listItem}>
            <div style={styles.listItemLeft}>
              <div className="toggle-brutal" />
              <div>
                <div style={styles.listItemTitle}>new_feature</div>
                <div style={styles.listItemMeta}>Experimental feature flag</div>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span className="badge-brutal badge-brutal-inactive">Inactive</span>
              <button className="btn-brutal-secondary" style={{ padding: '6px 12px', fontSize: '12px' }}>Edit</button>
            </div>
          </div>

          <div style={{ marginTop: '24px', display: 'flex', gap: '12px' }}>
            <button className="btn-brutal">+ New Item</button>
            <button className="btn-brutal-secondary">Import</button>
          </div>
        </section>
      </main>
    </>
  );
}
