import React from 'react';

const cssStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Source+Serif+4:ital,opsz,wght@0,8..60,200..900;1,8..60,200..900&family=Outfit:wght@100..900&display=swap');

  :root {
    /* Base Colors (Warm Neutrals) */
    --beige-light: #f5f5ee;
    --pure-black: #000000;
    --deep-charcoal: #16140f;
    --medium-gray: #6b7280;
    --dark-gray: #374151;
    --pure-white: #FFFFFF;

    /* Accent Colors */
    --yc-orange: #f26522;

    /* Typography */
    --font-serif: 'Source Serif 4', Georgia, serif;
    --font-sans: 'Outfit', -apple-system, BlinkMacSystemFont, sans-serif;

    /* Sizes */
    --text-hero: clamp(2.5rem, 5vw, 3.75rem);
    --text-section: 1.75rem;
    --text-subheader: 1.25rem;
    --text-body: 18px;
    --text-small: 14px;

    /* Transitions */
    --duration-fast: 200ms;
    --duration-medium: 300ms;
  }

  .yc-page * {
    box-sizing: border-box;
  }

  .yc-page {
    font-family: var(--font-sans);
    background: var(--beige-light);
    color: var(--deep-charcoal);
    line-height: 1.7;
    font-weight: 300;
  }

  /* Primary CTA Large */
  .btn-yc-primary-lg {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 80px;
    padding: 0 40px;
    padding-bottom: 4px;
    background: var(--pure-black);
    color: var(--beige-light);
    font-family: var(--font-serif);
    font-size: var(--text-section);
    font-weight: 400;
    font-style: italic;
    letter-spacing: 0.015rem;
    border-radius: 9999px;
    border: none;
    text-decoration: none;
    cursor: pointer;
    transition: opacity var(--duration-medium) ease-out;
  }

  .btn-yc-primary-lg:hover {
    opacity: 0.8;
  }

  /* Primary CTA Standard */
  .btn-yc-primary {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    padding: 0 20px;
    padding-bottom: 2px;
    background: var(--pure-black);
    color: var(--pure-white);
    font-family: var(--font-serif);
    font-size: var(--text-small);
    font-weight: 400;
    font-style: italic;
    letter-spacing: 0.015rem;
    border-radius: 9999px;
    border: none;
    text-decoration: none;
    cursor: pointer;
    transition: opacity var(--duration-fast) ease;
  }

  .btn-yc-primary:hover {
    opacity: 0.8;
  }

  /* Secondary Button */
  .btn-yc-secondary {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    padding: 0 20px;
    padding-bottom: 2px;
    background: transparent;
    color: var(--deep-charcoal);
    font-family: var(--font-serif);
    font-size: var(--text-small);
    font-weight: 400;
    font-style: italic;
    letter-spacing: 0.015rem;
    border-radius: 9999px;
    border: 1px solid var(--deep-charcoal);
    text-decoration: none;
    cursor: pointer;
    transition: background var(--duration-fast) ease, color var(--duration-fast) ease;
  }

  .btn-yc-secondary:hover {
    background: var(--deep-charcoal);
    color: var(--beige-light);
  }

  /* Links */
  .link-yc {
    color: var(--deep-charcoal);
    text-decoration: underline;
    text-decoration-color: var(--medium-gray);
    text-underline-offset: 2px;
    transition: text-decoration-color var(--duration-fast) ease;
  }

  .link-yc:hover {
    text-decoration-color: var(--dark-gray);
  }

  /* Cards */
  .card-yc {
    background: var(--pure-white);
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    overflow: hidden;
    transition: box-shadow var(--duration-medium) ease;
  }

  .card-yc:hover {
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  }

  /* Inputs */
  .input-yc {
    width: 100%;
    border: 1px solid var(--medium-gray);
    border-radius: 8px;
    padding: 12px 16px;
    font-family: var(--font-sans);
    font-size: 16px;
    font-weight: 300;
    background: var(--pure-white);
    color: var(--deep-charcoal);
    transition: border-color var(--duration-fast) ease, box-shadow var(--duration-fast) ease;
  }

  .input-yc:focus {
    outline: none;
    border-color: var(--deep-charcoal);
    box-shadow: 0 0 0 3px rgba(22, 20, 15, 0.1);
  }

  .input-yc::placeholder {
    color: var(--medium-gray);
  }

  /* Badge */
  .badge-yc {
    display: inline-block;
    padding: 4px 12px;
    border-radius: 9999px;
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 0.05em;
    text-transform: uppercase;
  }

  .badge-yc-active {
    background: var(--yc-orange);
    color: var(--pure-white);
  }

  .badge-yc-neutral {
    background: rgba(0, 0, 0, 0.08);
    color: var(--deep-charcoal);
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
    paddingBottom: '48px',
    borderBottom: '1px solid rgba(22, 20, 15, 0.1)',
  },
  heroTitle: {
    fontFamily: 'var(--font-serif)',
    fontSize: 'var(--text-hero)',
    fontWeight: 500,
    fontStyle: 'italic',
    letterSpacing: '-0.02em',
    lineHeight: 1.1,
    marginBottom: '16px',
    color: 'var(--deep-charcoal)',
  },
  heroTagline: {
    fontFamily: 'var(--font-sans)',
    fontSize: 'var(--text-body)',
    fontWeight: 300,
    maxWidth: '640px',
    marginBottom: '32px',
    lineHeight: 1.7,
  },
  section: {
    marginBottom: '64px',
  },
  sectionTitle: {
    fontFamily: 'var(--font-serif)',
    fontSize: 'var(--text-section)',
    fontWeight: 500,
    fontStyle: 'italic',
    lineHeight: 1.2,
    marginBottom: '24px',
    color: 'var(--deep-charcoal)',
  },
  colorGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
    gap: '16px',
  },
  colorSwatch: {
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
  },
  colorPreview: {
    height: '80px',
  },
  colorInfo: {
    padding: '12px',
    background: '#fff',
  },
  colorName: {
    fontSize: 'var(--text-small)',
    fontWeight: 500,
    marginBottom: '4px',
  },
  colorHex: {
    fontSize: 'var(--text-small)',
    fontFamily: 'var(--font-sans)',
    color: 'var(--medium-gray)',
  },
  typographyItem: {
    marginBottom: '32px',
    paddingBottom: '32px',
    borderBottom: '1px solid rgba(22, 20, 15, 0.1)',
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
  cardContent: {
    padding: '24px',
  },
  cardTitle: {
    fontFamily: 'var(--font-serif)',
    fontSize: 'var(--text-subheader)',
    fontWeight: 500,
    fontStyle: 'italic',
    marginBottom: '12px',
    color: 'var(--deep-charcoal)',
  },
  cardDescription: {
    fontSize: '16px',
    fontWeight: 300,
    marginBottom: '16px',
    lineHeight: 1.7,
  },
  formGroup: {
    marginBottom: '20px',
  },
  label: {
    display: 'block',
    fontSize: 'var(--text-small)',
    fontWeight: 500,
    marginBottom: '8px',
    color: 'var(--deep-charcoal)',
  },
  footer: {
    background: 'var(--pure-black)',
    color: 'var(--beige-light)',
    padding: '48px 24px',
    marginTop: '64px',
    marginLeft: '-24px',
    marginRight: '-24px',
    marginBottom: '-48px',
  },
  footerGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
    gap: '32px',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  footerTitle: {
    fontFamily: 'var(--font-sans)',
    fontWeight: 500,
    fontSize: 'var(--text-small)',
    letterSpacing: '0.05em',
    marginBottom: '16px',
    textTransform: 'uppercase' as const,
  },
  footerLink: {
    display: 'block',
    fontFamily: 'var(--font-sans)',
    fontWeight: 300,
    fontSize: 'var(--text-small)',
    color: 'var(--beige-light)',
    textDecoration: 'none',
    marginBottom: '8px',
    transition: 'color 200ms ease',
  },
  footerTagline: {
    fontFamily: 'var(--font-serif)',
    fontStyle: 'italic',
    fontSize: 'var(--text-body)',
    marginTop: '48px',
    paddingTop: '24px',
    borderTop: '1px solid rgba(245, 245, 238, 0.2)',
    textAlign: 'center' as const,
    maxWidth: '1200px',
    margin: '48px auto 0',
  },
  announcementBanner: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    padding: '12px',
    background: 'var(--beige-light)',
    borderBottom: '1px solid rgba(22, 20, 15, 0.1)',
    marginBottom: '24px',
    marginLeft: '-24px',
    marginRight: '-24px',
    marginTop: '-48px',
  },
  announcementText: {
    fontFamily: 'var(--font-sans)',
    fontSize: 'var(--text-small)',
    fontWeight: 400,
  },
};

const colors = {
  base: [
    { name: 'Beige Light', hex: '#f5f5ee' },
    { name: 'Pure Black', hex: '#000000' },
    { name: 'Deep Charcoal', hex: '#16140f' },
    { name: 'Pure White', hex: '#FFFFFF' },
  ],
  gray: [
    { name: 'Medium Gray', hex: '#6b7280' },
    { name: 'Dark Gray', hex: '#374151' },
  ],
  accent: [
    { name: 'YC Orange', hex: '#f26522' },
  ],
};

export default function YCEditorialShowcase() {
  return (
    <>
      <style>{cssStyles}</style>
      <main className="yc-page" style={styles.main}>
        {/* Announcement Banner */}
        <div style={styles.announcementBanner}>
          <span style={styles.announcementText}>
            Applications for W25 batch are now open →
          </span>
        </div>

        {/* Hero */}
        <header style={styles.hero}>
          <h1 style={styles.heroTitle}>Make something people want.</h1>
          <p style={styles.heroTagline}>
            An editorial design system that combines startup gravitas with approachable warmth
            through elegant serif typography and a sophisticated warm-neutral color palette.
          </p>
          <button className="btn-yc-primary-lg">Apply to YC</button>
        </header>

        {/* Color Palette */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Color Palette</h2>

          <h3 style={{ fontSize: '16px', fontWeight: 500, marginBottom: '12px' }}>
            Base Colors (Warm Neutrals)
          </h3>
          <div style={{ ...styles.colorGrid, marginBottom: '32px' }}>
            {colors.base.map((color) => (
              <div key={color.hex} style={styles.colorSwatch}>
                <div style={{
                  ...styles.colorPreview,
                  background: color.hex,
                  border: color.hex === '#FFFFFF' || color.hex === '#f5f5ee' ? '1px solid #e5e5e5' : 'none'
                }} />
                <div style={styles.colorInfo}>
                  <div style={styles.colorName}>{color.name}</div>
                  <div style={styles.colorHex}>{color.hex}</div>
                </div>
              </div>
            ))}
          </div>

          <h3 style={{ fontSize: '16px', fontWeight: 500, marginBottom: '12px' }}>
            Gray Scale
          </h3>
          <div style={{ ...styles.colorGrid, marginBottom: '32px' }}>
            {colors.gray.map((color) => (
              <div key={color.hex} style={styles.colorSwatch}>
                <div style={{ ...styles.colorPreview, background: color.hex }} />
                <div style={styles.colorInfo}>
                  <div style={styles.colorName}>{color.name}</div>
                  <div style={styles.colorHex}>{color.hex}</div>
                </div>
              </div>
            ))}
          </div>

          <h3 style={{ fontSize: '16px', fontWeight: 500, marginBottom: '12px' }}>
            Accent Colors
          </h3>
          <div style={styles.colorGrid}>
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
        </section>

        {/* Typography */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Typography Scale</h2>

          <div style={styles.typographyItem}>
            <div style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'var(--text-hero)',
              fontWeight: 500,
              fontStyle: 'italic',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
            }}>
              Hero Title
            </div>
            <div style={{ fontSize: 'var(--text-small)', marginTop: '12px', color: 'var(--medium-gray)' }}>
              Source Serif 4 · Fluid (40-60px) · Medium Italic
            </div>
          </div>

          <div style={styles.typographyItem}>
            <div style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'var(--text-section)',
              fontWeight: 500,
              fontStyle: 'italic',
              lineHeight: 1.2,
            }}>
              Section Header
            </div>
            <div style={{ fontSize: 'var(--text-small)', marginTop: '12px', color: 'var(--medium-gray)' }}>
              Source Serif 4 · 28px · Medium Italic
            </div>
          </div>

          <div style={styles.typographyItem}>
            <div style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'var(--text-subheader)',
              fontWeight: 500,
              fontStyle: 'italic',
              lineHeight: 1.3,
            }}>
              Sub-header
            </div>
            <div style={{ fontSize: 'var(--text-small)', marginTop: '12px', color: 'var(--medium-gray)' }}>
              Source Serif 4 · 20px · Medium Italic
            </div>
          </div>

          <div style={styles.typographyItem}>
            <div style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'var(--text-body)',
              fontWeight: 300,
              lineHeight: 1.7,
            }}>
              Body text in Outfit. Light weight for elegant, comfortable reading.
              The generous line-height creates an airy, editorial feel that invites users to engage with content.
            </div>
            <div style={{ fontSize: 'var(--text-small)', marginTop: '12px', color: 'var(--medium-gray)' }}>
              Outfit · 18px · Light (300)
            </div>
          </div>

          <div style={{ ...styles.typographyItem, borderBottom: 'none' }}>
            <div style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'var(--text-small)',
              fontWeight: 300,
            }}>
              Small text for captions, labels, and metadata
            </div>
            <div style={{ fontSize: 'var(--text-small)', marginTop: '12px', color: 'var(--medium-gray)' }}>
              Outfit · 14px · Light (300)
            </div>
          </div>
        </section>

        {/* Buttons */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Buttons</h2>

          <div style={{ marginBottom: '32px' }}>
            <h3 style={{ fontSize: '16px', fontWeight: 500, marginBottom: '16px' }}>
              Large CTA (Hero)
            </h3>
            <button className="btn-yc-primary-lg">Apply to YC</button>
          </div>

          <div style={{ marginBottom: '32px' }}>
            <h3 style={{ fontSize: '16px', fontWeight: 500, marginBottom: '16px' }}>
              Standard Buttons
            </h3>
            <div style={styles.buttonRow}>
              <button className="btn-yc-primary">Primary Action</button>
              <button className="btn-yc-secondary">Secondary Action</button>
            </div>
          </div>

          <div>
            <h3 style={{ fontSize: '16px', fontWeight: 500, marginBottom: '16px' }}>
              Links
            </h3>
            <p style={{ fontSize: 'var(--text-body)', fontWeight: 300 }}>
              Read more about our <a href="#" className="link-yc">portfolio companies</a> and their success stories.
            </p>
          </div>
        </section>

        {/* Cards */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Cards</h2>

          <div style={styles.cardGrid}>
            <div className="card-yc">
              <div style={{ height: '4px', background: 'var(--yc-orange)' }} />
              <div style={styles.cardContent}>
                <span className="badge-yc badge-yc-active" style={{ marginBottom: '12px', display: 'inline-block' }}>Featured</span>
                <h3 style={styles.cardTitle}>Startup School</h3>
                <p style={styles.cardDescription}>
                  Free online program with weekly lectures by YC partners and successful founders.
                </p>
                <button className="btn-yc-primary">Learn More</button>
              </div>
            </div>

            <div className="card-yc">
              <div style={{ height: '4px', background: 'var(--deep-charcoal)' }} />
              <div style={styles.cardContent}>
                <span className="badge-yc badge-yc-neutral" style={{ marginBottom: '12px', display: 'inline-block' }}>Resource</span>
                <h3 style={styles.cardTitle}>Library</h3>
                <p style={styles.cardDescription}>
                  Essays, videos, and podcasts on how to build successful startups.
                </p>
                <button className="btn-yc-secondary">Browse</button>
              </div>
            </div>

            <div className="card-yc">
              <div style={{ height: '4px', background: 'var(--medium-gray)' }} />
              <div style={styles.cardContent}>
                <span className="badge-yc badge-yc-neutral" style={{ marginBottom: '12px', display: 'inline-block' }}>Community</span>
                <h3 style={styles.cardTitle}>Co-Founder Matching</h3>
                <p style={styles.cardDescription}>
                  Find the right co-founder for your startup journey.
                </p>
                <button className="btn-yc-secondary">Get Started</button>
              </div>
            </div>
          </div>
        </section>

        {/* Forms */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Form Elements</h2>

          <div style={{ maxWidth: '400px' }}>
            <div style={styles.formGroup}>
              <label style={styles.label}>Company Name</label>
              <input type="text" className="input-yc" placeholder="Enter company name" />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Email Address</label>
              <input type="email" className="input-yc" placeholder="founder@company.com" />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Describe your company</label>
              <textarea
                className="input-yc"
                placeholder="What does your company do?"
                rows={4}
                style={{ resize: 'vertical', minHeight: '100px' }}
              />
            </div>

            <button className="btn-yc-primary">Submit Application</button>
          </div>
        </section>

        {/* Badges */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Badges & Status</h2>

          <div style={styles.buttonRow}>
            <span className="badge-yc badge-yc-active">W25 Batch</span>
            <span className="badge-yc badge-yc-neutral">Alumni</span>
            <span className="badge-yc badge-yc-neutral">Active</span>
          </div>
        </section>

        {/* Footer */}
        <footer style={styles.footer}>
          <div style={styles.footerGrid}>
            <div>
              <div style={styles.footerTitle}>Programs</div>
              <a href="#" style={styles.footerLink}>Apply</a>
              <a href="#" style={styles.footerLink}>Startup School</a>
              <a href="#" style={styles.footerLink}>Work at a Startup</a>
            </div>
            <div>
              <div style={styles.footerTitle}>Company</div>
              <a href="#" style={styles.footerLink}>About</a>
              <a href="#" style={styles.footerLink}>Blog</a>
              <a href="#" style={styles.footerLink}>Contact</a>
            </div>
            <div>
              <div style={styles.footerTitle}>Resources</div>
              <a href="#" style={styles.footerLink}>Library</a>
              <a href="#" style={styles.footerLink}>Podcast</a>
              <a href="#" style={styles.footerLink}>Newsletter</a>
            </div>
            <div>
              <div style={styles.footerTitle}>Legal</div>
              <a href="#" style={styles.footerLink}>Privacy</a>
              <a href="#" style={styles.footerLink}>Terms</a>
            </div>
          </div>
          <div style={styles.footerTagline}>
            "Make something people want."
          </div>
        </footer>
      </main>
    </>
  );
}
