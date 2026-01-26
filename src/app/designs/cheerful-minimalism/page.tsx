import React from 'react';

// CSS custom properties and animations from the Cheerful Minimalism guidelines
const cssStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;700&display=swap');

  :root {
    /* Base Colors (Monochrome Neutrals) */
    --pure-white: #FFFFFF;
    --light-gray: #F8F9FA;
    --medium-gray: #E9ECEF;
    --soft-charcoal: #6C757D;
    --deep-charcoal: #343A40;

    /* Accent Colors (Bright & Cheerful) */
    --electric-blue: #007BFF;
    --lime-green: #28A745;
    --coral-orange: #FD7E14;
    --sunflower-yellow: #FFC107;

    /* Semantic Feedback Colors */
    --success-green: #20C997;
    --error-red: #DC3545;
    --info-blue: #17A2B8;
    --progress-purple: #6F42C1;

    /* Typography */
    --font-primary: 'Inter', system-ui, -apple-system, sans-serif;
    --font-display: 'Space Grotesk', sans-serif;
    --font-mono: 'SF Mono', 'Monaco', 'Consolas', monospace;

    /* Font Sizes */
    --text-hero: 2rem;
    --text-section: 1.5rem;
    --text-subheader: 1.25rem;
    --text-body-lg: 1.125rem;
    --text-body: 1rem;
    --text-body-sm: 0.875rem;
    --text-caption: 0.75rem;

    /* Spacing (compact) */
    --spacing-xs: 4px;
    --spacing-sm: 8px;
    --spacing-md: 12px;
    --spacing-lg: 16px;
    --spacing-xl: 24px;
    --spacing-2xl: 32px;

    /* Border Radius */
    --radius-sm: 4px;
    --radius-md: 6px;
    --radius-lg: 8px;

    /* Shadows */
    --shadow-sm: 0 2px 4px rgba(0, 0, 0, 0.1);
    --shadow-md: 0 4px 8px rgba(0, 0, 0, 0.1);

    /* Transitions */
    --duration-fast: 200ms;
    --duration-medium: 400ms;
    --duration-slow: 600ms;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  /* Button Styles */
  .btn-primary {
    background: var(--electric-blue);
    color: white;
    padding: 8px 16px;
    border-radius: var(--radius-md);
    font-weight: 600;
    font-family: var(--font-primary);
    font-size: var(--text-body);
    border: none;
    cursor: pointer;
    transition: all var(--duration-fast) ease;
    box-shadow: 0 2px 4px rgba(0, 123, 255, 0.2);
  }

  .btn-primary:hover {
    background: #0056B3;
    box-shadow: 0 4px 8px rgba(0, 123, 255, 0.3);
  }

  .btn-secondary {
    background: var(--pure-white);
    color: var(--deep-charcoal);
    padding: 8px 16px;
    border-radius: var(--radius-md);
    font-weight: 600;
    font-family: var(--font-primary);
    font-size: var(--text-body);
    border: 1px solid var(--medium-gray);
    cursor: pointer;
    transition: all var(--duration-fast) ease;
  }

  .btn-secondary:hover {
    border-color: var(--soft-charcoal);
    background: var(--light-gray);
  }

  .btn-success {
    background: var(--lime-green);
    color: white;
    padding: 8px 16px;
    border-radius: var(--radius-md);
    font-weight: 600;
    font-family: var(--font-primary);
    font-size: var(--text-body);
    border: none;
    cursor: pointer;
    transition: all var(--duration-fast) ease;
  }

  .btn-success:hover {
    background: #218838;
  }

  .btn-disabled {
    background: var(--medium-gray);
    color: var(--soft-charcoal);
    padding: 8px 16px;
    border-radius: var(--radius-md);
    font-weight: 600;
    font-family: var(--font-primary);
    font-size: var(--text-body);
    border: none;
    cursor: not-allowed;
    opacity: 0.6;
  }

  /* Start Button with Sweep Effect */
  .btn-start {
    background: linear-gradient(90deg, #000, #000) no-repeat 0 0 / 0% 100%, var(--pure-white);
    color: var(--deep-charcoal);
    padding: 8px 16px;
    border-radius: var(--radius-md);
    font-weight: 600;
    font-family: var(--font-primary);
    font-size: var(--text-body);
    border: 1px solid var(--medium-gray);
    cursor: pointer;
    transition: background-size var(--duration-medium) ease, color var(--duration-fast) ease, border-color var(--duration-fast) ease;
  }

  .btn-start:hover {
    color: var(--pure-white);
    border-color: #000;
    background-size: 100% 100%, auto;
  }

  /* Card with Gradient Border */
  .card {
    background: var(--pure-white);
    border: 1px solid var(--medium-gray);
    border-radius: var(--radius-lg);
    padding: var(--spacing-lg);
    position: relative;
    overflow: hidden;
  }

  .card::before {
    content: '';
    position: absolute;
    inset: -1px;
    border-radius: inherit;
    padding: 2.5px;
    --angle: 0deg;
    background: conic-gradient(
      from var(--angle),
      var(--electric-blue),
      var(--sunflower-yellow),
      var(--coral-orange),
      var(--progress-purple),
      var(--electric-blue)
    );
    -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
    mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    opacity: 0;
    transition: opacity var(--duration-fast) ease;
    pointer-events: none;
  }

  .card:hover::before {
    opacity: 1;
    animation: spin-angle 500ms linear forwards;
  }

  @property --angle {
    syntax: '<angle>';
    initial-value: 0deg;
    inherits: false;
  }

  @keyframes spin-angle {
    to { --angle: 360deg; }
  }

  /* Minor Success Animation */
  .minor-success {
    animation: gentle-glow 300ms ease-out;
  }

  @keyframes gentle-glow {
    0% { box-shadow: 0 0 0 0 rgba(40, 167, 69, 0.2); }
    50% { box-shadow: 0 0 0 4px rgba(40, 167, 69, 0.4); }
    100% { box-shadow: 0 0 0 4px rgba(40, 167, 69, 0.2); }
  }

  /* Form Elements */
  .input {
    width: 100%;
    padding: var(--spacing-sm) var(--spacing-md);
    border: 1px solid var(--medium-gray);
    border-radius: var(--radius-md);
    font-family: var(--font-primary);
    font-size: var(--text-body);
    color: var(--deep-charcoal);
    transition: border-color var(--duration-fast) ease, box-shadow var(--duration-fast) ease;
  }

  .input:focus {
    outline: none;
    border-color: var(--electric-blue);
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);
  }

  .input-error {
    border-color: var(--error-red);
  }

  .input-error:focus {
    box-shadow: 0 0 0 3px rgba(220, 53, 69, 0.1);
  }

  /* Progress Bar */
  .progress-container {
    background: var(--medium-gray);
    border-radius: var(--radius-lg);
    overflow: hidden;
    height: 8px;
  }

  .progress-fill {
    background: linear-gradient(90deg, var(--electric-blue), #0056B3);
    height: 100%;
    transition: width var(--duration-medium) ease-out;
    position: relative;
  }

  .progress-fill::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 8px;
    height: 100%;
    background: rgba(255, 255, 255, 0.3);
    animation: shimmer 1.5s infinite;
  }

  @keyframes shimmer {
    0%, 100% { opacity: 0.3; }
    50% { opacity: 0.6; }
  }

  /* Link Styling */
  .link {
    color: var(--electric-blue);
    text-decoration: none;
    font-weight: 500;
    transition: color var(--duration-fast) ease;
  }

  .link:hover {
    color: #0056B3;
    text-decoration: underline;
  }

  /* Toggle Switch */
  .toggle {
    position: relative;
    width: 44px;
    height: 24px;
    background: var(--medium-gray);
    border-radius: 12px;
    cursor: pointer;
    transition: background var(--duration-fast) ease;
  }

  .toggle.active {
    background: var(--lime-green);
  }

  .toggle::after {
    content: '';
    position: absolute;
    top: 2px;
    left: 2px;
    width: 20px;
    height: 20px;
    background: white;
    border-radius: 50%;
    transition: transform var(--duration-fast) ease;
    box-shadow: var(--shadow-sm);
  }

  .toggle.active::after {
    transform: translateX(20px);
  }

  /* Status Badge */
  .badge {
    display: inline-block;
    padding: 2px 8px;
    border-radius: var(--radius-sm);
    font-size: var(--text-caption);
    font-weight: 600;
    text-transform: uppercase;
  }

  .badge-active {
    background: rgba(40, 167, 69, 0.1);
    color: var(--lime-green);
  }

  .badge-inactive {
    background: rgba(108, 117, 125, 0.1);
    color: var(--soft-charcoal);
  }
`;

const styles: { [key: string]: React.CSSProperties } = {
  main: {
    fontFamily: 'var(--font-primary)',
    backgroundColor: 'var(--pure-white)',
    color: 'var(--deep-charcoal)',
    lineHeight: 1.5,
    padding: 'var(--spacing-xl)',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  section: {
    marginBottom: 'var(--spacing-2xl)',
  },
  sectionTitle: {
    fontFamily: 'var(--font-display)',
    fontSize: 'var(--text-section)',
    fontWeight: 700,
    marginBottom: 'var(--spacing-lg)',
    color: 'var(--deep-charcoal)',
  },
  hero: {
    textAlign: 'center' as const,
    padding: 'var(--spacing-2xl) 0',
    marginBottom: 'var(--spacing-2xl)',
    borderBottom: '1px solid var(--medium-gray)',
  },
  heroTitle: {
    fontFamily: 'var(--font-display)',
    fontSize: 'var(--text-hero)',
    fontWeight: 700,
    marginBottom: 'var(--spacing-sm)',
  },
  heroTagline: {
    fontSize: 'var(--text-body-lg)',
    color: 'var(--soft-charcoal)',
    marginBottom: 'var(--spacing-lg)',
    maxWidth: '600px',
    margin: '0 auto var(--spacing-lg)',
  },
  colorGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
    gap: 'var(--spacing-md)',
  },
  colorSwatch: {
    borderRadius: 'var(--radius-md)',
    overflow: 'hidden',
    border: '1px solid var(--medium-gray)',
  },
  colorPreview: {
    height: '60px',
  },
  colorInfo: {
    padding: 'var(--spacing-sm)',
    backgroundColor: 'var(--light-gray)',
  },
  colorName: {
    fontSize: 'var(--text-body-sm)',
    fontWeight: 600,
    marginBottom: '2px',
  },
  colorHex: {
    fontSize: 'var(--text-caption)',
    color: 'var(--soft-charcoal)',
    fontFamily: 'var(--font-mono)',
  },
  typographyItem: {
    marginBottom: 'var(--spacing-md)',
    paddingBottom: 'var(--spacing-md)',
    borderBottom: '1px solid var(--light-gray)',
  },
  buttonRow: {
    display: 'flex',
    flexWrap: 'wrap' as const,
    gap: 'var(--spacing-md)',
    alignItems: 'center',
  },
  cardGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: 'var(--spacing-lg)',
  },
  cardHeader: {
    height: '8px',
    borderRadius: 'var(--radius-sm)',
    marginBottom: 'var(--spacing-md)',
  },
  cardTitle: {
    fontFamily: 'var(--font-display)',
    fontSize: 'var(--text-subheader)',
    fontWeight: 600,
    marginBottom: 'var(--spacing-sm)',
  },
  cardDescription: {
    fontSize: 'var(--text-body-sm)',
    color: 'var(--soft-charcoal)',
    marginBottom: 'var(--spacing-md)',
    lineHeight: 1.4,
  },
  formGroup: {
    marginBottom: 'var(--spacing-lg)',
  },
  label: {
    display: 'block',
    fontSize: 'var(--text-body-sm)',
    fontWeight: 500,
    marginBottom: 'var(--spacing-xs)',
    color: 'var(--deep-charcoal)',
  },
  errorText: {
    fontSize: 'var(--text-caption)',
    color: 'var(--error-red)',
    marginTop: 'var(--spacing-xs)',
  },
  alert: {
    padding: 'var(--spacing-md)',
    borderRadius: 'var(--radius-md)',
    marginBottom: 'var(--spacing-md)',
    fontSize: 'var(--text-body-sm)',
    fontWeight: 500,
  },
  alertSuccess: {
    backgroundColor: 'rgba(32, 201, 151, 0.1)',
    color: '#1a8a6a',
    border: '1px solid rgba(32, 201, 151, 0.3)',
  },
  alertError: {
    backgroundColor: 'rgba(220, 53, 69, 0.1)',
    color: '#b02a37',
    border: '1px solid rgba(220, 53, 69, 0.3)',
  },
  alertWarning: {
    backgroundColor: 'rgba(255, 193, 7, 0.1)',
    color: '#997404',
    border: '1px solid rgba(255, 193, 7, 0.3)',
  },
  alertInfo: {
    backgroundColor: 'rgba(23, 162, 184, 0.1)',
    color: '#0c5460',
    border: '1px solid rgba(23, 162, 184, 0.3)',
  },
  listItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 'var(--spacing-md)',
    backgroundColor: 'var(--light-gray)',
    borderRadius: 'var(--radius-md)',
    marginBottom: 'var(--spacing-sm)',
  },
  listItemLeft: {
    display: 'flex',
    alignItems: 'center',
    gap: 'var(--spacing-md)',
  },
  listItemTitle: {
    fontWeight: 600,
    fontSize: 'var(--text-body)',
  },
  listItemMeta: {
    fontSize: 'var(--text-caption)',
    color: 'var(--soft-charcoal)',
  },
  checkboxRow: {
    display: 'flex',
    alignItems: 'center',
    gap: 'var(--spacing-sm)',
  },
  selectContainer: {
    position: 'relative' as const,
  },
  select: {
    width: '100%',
    padding: 'var(--spacing-sm) var(--spacing-md)',
    paddingRight: '32px',
    border: '1px solid var(--medium-gray)',
    borderRadius: 'var(--radius-md)',
    fontFamily: 'var(--font-primary)',
    fontSize: 'var(--text-body)',
    color: 'var(--deep-charcoal)',
    backgroundColor: 'var(--pure-white)',
    appearance: 'none' as const,
    cursor: 'pointer',
  },
};

const colors = {
  base: [
    { name: 'Pure White', hex: '#FFFFFF' },
    { name: 'Light Gray', hex: '#F8F9FA' },
    { name: 'Medium Gray', hex: '#E9ECEF' },
    { name: 'Soft Charcoal', hex: '#6C757D' },
    { name: 'Deep Charcoal', hex: '#343A40' },
  ],
  accent: [
    { name: 'Electric Blue', hex: '#007BFF' },
    { name: 'Lime Green', hex: '#28A745' },
    { name: 'Coral Orange', hex: '#FD7E14' },
    { name: 'Sunflower Yellow', hex: '#FFC107' },
  ],
  semantic: [
    { name: 'Success Green', hex: '#20C997' },
    { name: 'Error Red', hex: '#DC3545' },
    { name: 'Info Blue', hex: '#17A2B8' },
    { name: 'Progress Purple', hex: '#6F42C1' },
  ],
};

export default function CheerfulMinimalismShowcase() {
  return (
    <>
      <style>{cssStyles}</style>
      <main style={styles.main}>
        {/* Section 1: Hero Header */}
        <header style={styles.hero}>
          <h1 style={styles.heroTitle}>Cheerful Minimalism</h1>
          <p style={styles.heroTagline}>
            A balanced approach that maintains focus through clean, uncluttered interfaces
            while celebrating every action with joyful, proportional feedback.
          </p>
          <button className="btn-primary">Get Started</button>
        </header>

        {/* Section 2: Color Palette */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Color Palette</h2>

          <h3 style={{ fontSize: 'var(--text-body)', fontWeight: 600, marginBottom: 'var(--spacing-sm)', color: 'var(--soft-charcoal)' }}>
            Base Colors (Monochrome Neutrals)
          </h3>
          <div style={{ ...styles.colorGrid, marginBottom: 'var(--spacing-lg)' }}>
            {colors.base.map((color) => (
              <div key={color.hex} style={styles.colorSwatch}>
                <div style={{ ...styles.colorPreview, backgroundColor: color.hex, border: color.hex === '#FFFFFF' ? '1px solid #E9ECEF' : 'none' }} />
                <div style={styles.colorInfo}>
                  <div style={styles.colorName}>{color.name}</div>
                  <div style={styles.colorHex}>{color.hex}</div>
                </div>
              </div>
            ))}
          </div>

          <h3 style={{ fontSize: 'var(--text-body)', fontWeight: 600, marginBottom: 'var(--spacing-sm)', color: 'var(--soft-charcoal)' }}>
            Accent Colors (Bright & Cheerful)
          </h3>
          <div style={{ ...styles.colorGrid, marginBottom: 'var(--spacing-lg)' }}>
            {colors.accent.map((color) => (
              <div key={color.hex} style={styles.colorSwatch}>
                <div style={{ ...styles.colorPreview, backgroundColor: color.hex }} />
                <div style={styles.colorInfo}>
                  <div style={styles.colorName}>{color.name}</div>
                  <div style={styles.colorHex}>{color.hex}</div>
                </div>
              </div>
            ))}
          </div>

          <h3 style={{ fontSize: 'var(--text-body)', fontWeight: 600, marginBottom: 'var(--spacing-sm)', color: 'var(--soft-charcoal)' }}>
            Semantic Feedback Colors
          </h3>
          <div style={styles.colorGrid}>
            {colors.semantic.map((color) => (
              <div key={color.hex} style={styles.colorSwatch}>
                <div style={{ ...styles.colorPreview, backgroundColor: color.hex }} />
                <div style={styles.colorInfo}>
                  <div style={styles.colorName}>{color.name}</div>
                  <div style={styles.colorHex}>{color.hex}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Typography Scale */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Typography Scale</h2>

          <div style={styles.typographyItem}>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-hero)', fontWeight: 700, lineHeight: 1.2 }}>
              Hero Title (32px)
            </div>
            <div style={{ fontSize: 'var(--text-caption)', color: 'var(--soft-charcoal)', marginTop: '4px' }}>
              Space Grotesk · Bold · Line Height 1.2
            </div>
          </div>

          <div style={styles.typographyItem}>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-section)', fontWeight: 700, lineHeight: 1.2 }}>
              Section Header (24px)
            </div>
            <div style={{ fontSize: 'var(--text-caption)', color: 'var(--soft-charcoal)', marginTop: '4px' }}>
              Space Grotesk · Bold · Line Height 1.2
            </div>
          </div>

          <div style={styles.typographyItem}>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-subheader)', fontWeight: 600, lineHeight: 1.3 }}>
              Sub-header (20px)
            </div>
            <div style={{ fontSize: 'var(--text-caption)', color: 'var(--soft-charcoal)', marginTop: '4px' }}>
              Space Grotesk · Semi-Bold · Line Height 1.3
            </div>
          </div>

          <div style={styles.typographyItem}>
            <div style={{ fontSize: 'var(--text-body-lg)', lineHeight: 1.5 }}>
              Body Large (18px) — Important content and feature descriptions
            </div>
            <div style={{ fontSize: 'var(--text-caption)', color: 'var(--soft-charcoal)', marginTop: '4px' }}>
              Inter · Regular · Line Height 1.5
            </div>
          </div>

          <div style={styles.typographyItem}>
            <div style={{ fontSize: 'var(--text-body)', lineHeight: 1.5 }}>
              Body Regular (16px) — Standard content for reading comfort with optimal line length
            </div>
            <div style={{ fontSize: 'var(--text-caption)', color: 'var(--soft-charcoal)', marginTop: '4px' }}>
              Inter · Regular · Line Height 1.5
            </div>
          </div>

          <div style={styles.typographyItem}>
            <div style={{ fontSize: 'var(--text-body-sm)', lineHeight: 1.4, color: 'var(--soft-charcoal)' }}>
              Body Small (14px) — Secondary information and metadata
            </div>
            <div style={{ fontSize: 'var(--text-caption)', color: 'var(--soft-charcoal)', marginTop: '4px' }}>
              Inter · Regular · Line Height 1.4
            </div>
          </div>

          <div style={styles.typographyItem}>
            <div style={{ fontSize: 'var(--text-caption)', lineHeight: 1.4, color: 'var(--soft-charcoal)' }}>
              Caption (12px) — Labels, timestamps, and flag keys
            </div>
            <div style={{ fontSize: 'var(--text-caption)', color: 'var(--soft-charcoal)', marginTop: '4px' }}>
              Inter · Regular · Line Height 1.4
            </div>
          </div>

          <div style={{ ...styles.typographyItem, borderBottom: 'none' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-body-sm)', backgroundColor: 'var(--light-gray)', padding: 'var(--spacing-sm)', borderRadius: 'var(--radius-sm)' }}>
              const flagKey = "feature_dark_mode";
            </div>
            <div style={{ fontSize: 'var(--text-caption)', color: 'var(--soft-charcoal)', marginTop: '4px' }}>
              SF Mono · Monospace · For code and technical content
            </div>
          </div>
        </section>

        {/* Section 4: Buttons & Interactive Elements */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Buttons & Interactive Elements</h2>

          <div style={{ ...styles.buttonRow, marginBottom: 'var(--spacing-lg)' }}>
            <button className="btn-primary">Primary Action</button>
            <button className="btn-secondary">Secondary</button>
            <button className="btn-success">Success</button>
            <button className="btn-disabled" disabled>Disabled</button>
          </div>

          <div style={{ ...styles.buttonRow, marginBottom: 'var(--spacing-lg)' }}>
            <button className="btn-start">Start Configuration →</button>
            <span style={{ fontSize: 'var(--text-body-sm)', color: 'var(--soft-charcoal)' }}>
              ← Hover for sweep effect
            </span>
          </div>

          <div style={styles.buttonRow}>
            <a href="#" className="link">Text Link Style</a>
            <span style={{ color: 'var(--soft-charcoal)' }}>|</span>
            <a href="#" className="link">View Documentation →</a>
          </div>
        </section>

        {/* Section 5: Cards */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Cards</h2>
          <p style={{ fontSize: 'var(--text-body-sm)', color: 'var(--soft-charcoal)', marginBottom: 'var(--spacing-lg)' }}>
            Hover over cards to see the animated gradient border effect
          </p>

          <div style={styles.cardGrid}>
            <div className="card">
              <div style={{ ...styles.cardHeader, background: 'linear-gradient(90deg, var(--electric-blue), var(--info-blue))' }} />
              <h3 style={styles.cardTitle}>Feature Flags</h3>
              <p style={styles.cardDescription}>
                Manage and toggle feature flags across your application with real-time updates and rollout controls.
              </p>
              <button className="btn-secondary" style={{ fontSize: 'var(--text-body-sm)', padding: '6px 12px' }}>
                Configure →
              </button>
            </div>

            <div className="card">
              <div style={{ ...styles.cardHeader, background: 'linear-gradient(90deg, var(--lime-green), var(--success-green))' }} />
              <h3 style={styles.cardTitle}>Environment Config</h3>
              <p style={styles.cardDescription}>
                Set up different configurations for development, staging, and production environments.
              </p>
              <button className="btn-secondary" style={{ fontSize: 'var(--text-body-sm)', padding: '6px 12px' }}>
                Manage →
              </button>
            </div>

            <div className="card">
              <div style={{ ...styles.cardHeader, background: 'linear-gradient(90deg, var(--progress-purple), var(--coral-orange))' }} />
              <h3 style={styles.cardTitle}>Analytics</h3>
              <p style={styles.cardDescription}>
                Track flag usage, monitor performance metrics, and analyze feature adoption rates.
              </p>
              <button className="btn-secondary" style={{ fontSize: 'var(--text-body-sm)', padding: '6px 12px' }}>
                View Stats →
              </button>
            </div>
          </div>
        </section>

        {/* Section 6: Form Elements */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Form Elements</h2>

          <div style={{ maxWidth: '400px' }}>
            <div style={styles.formGroup}>
              <label style={styles.label}>Flag Name</label>
              <input type="text" className="input" placeholder="e.g., dark_mode_enabled" />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Flag Key (Error State)</label>
              <input type="text" className="input input-error" defaultValue="invalid key!" />
              <div style={styles.errorText}>Flag keys must be lowercase with underscores only</div>
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Environment</label>
              <div style={styles.selectContainer}>
                <select style={styles.select}>
                  <option>Production</option>
                  <option>Staging</option>
                  <option>Development</option>
                </select>
              </div>
            </div>

            <div style={styles.formGroup}>
              <div style={styles.checkboxRow}>
                <div className="toggle active" />
                <span style={{ fontSize: 'var(--text-body-sm)' }}>Enable flag for all users</span>
              </div>
            </div>

            <button className="btn-primary">Save Configuration</button>
          </div>
        </section>

        {/* Section 7: Feedback & Status */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Feedback & Status</h2>

          <div style={{ maxWidth: '500px' }}>
            <div style={{ ...styles.alert, ...styles.alertSuccess }}>
              ✓ Feature flag "dark_mode" has been activated successfully
            </div>

            <div style={{ ...styles.alert, ...styles.alertError }}>
              ✕ Failed to update flag: Invalid configuration format
            </div>

            <div style={{ ...styles.alert, ...styles.alertWarning }}>
              ⚠ This flag is scheduled for deprecation on Jan 30, 2026
            </div>

            <div style={{ ...styles.alert, ...styles.alertInfo }}>
              ℹ Tip: Use percentage rollouts to gradually release features
            </div>

            <div style={{ marginTop: 'var(--spacing-lg)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 'var(--spacing-xs)' }}>
                <span style={{ fontSize: 'var(--text-body-sm)', fontWeight: 500 }}>Rollout Progress</span>
                <span style={{ fontSize: 'var(--text-body-sm)', color: 'var(--soft-charcoal)' }}>65%</span>
              </div>
              <div className="progress-container">
                <div className="progress-fill" style={{ width: '65%' }} />
              </div>
            </div>
          </div>
        </section>

        {/* Section 8: Sample Content Layout */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Feature Flag List</h2>

          <div style={styles.listItem}>
            <div style={styles.listItemLeft}>
              <div className="toggle active" />
              <div>
                <div style={styles.listItemTitle}>dark_mode</div>
                <div style={styles.listItemMeta}>Enables dark theme across the application</div>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)' }}>
              <span className="badge badge-active">Active</span>
              <button className="btn-secondary" style={{ fontSize: 'var(--text-caption)', padding: '4px 8px' }}>Edit</button>
            </div>
          </div>

          <div style={styles.listItem}>
            <div style={styles.listItemLeft}>
              <div className="toggle active" />
              <div>
                <div style={styles.listItemTitle}>new_checkout_flow</div>
                <div style={styles.listItemMeta}>Redesigned checkout experience with fewer steps</div>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)' }}>
              <span className="badge badge-active">Active</span>
              <button className="btn-secondary" style={{ fontSize: 'var(--text-caption)', padding: '4px 8px' }}>Edit</button>
            </div>
          </div>

          <div style={styles.listItem}>
            <div style={styles.listItemLeft}>
              <div className="toggle" />
              <div>
                <div style={styles.listItemTitle}>ai_recommendations</div>
                <div style={styles.listItemMeta}>ML-powered product recommendations engine</div>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)' }}>
              <span className="badge badge-inactive">Inactive</span>
              <button className="btn-secondary" style={{ fontSize: 'var(--text-caption)', padding: '4px 8px' }}>Edit</button>
            </div>
          </div>

          <div style={{ marginTop: 'var(--spacing-lg)', display: 'flex', gap: 'var(--spacing-sm)' }}>
            <button className="btn-primary">+ New Flag</button>
            <button className="btn-secondary">Import Flags</button>
          </div>
        </section>
      </main>
    </>
  );
}
