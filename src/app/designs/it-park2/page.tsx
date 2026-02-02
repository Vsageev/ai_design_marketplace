import React from 'react';

const cssStyles = `
  @import url('https://fonts.cdnfonts.com/css/geist');

  .showcase {
    /* Primary Colors (60%) */
    --red-primary: #E51537;
    --orange-primary: #FE4A00;
    --cream-base: #FFF6EB;

    /* Secondary Colors (30%) */
    --lime: #DAFF02;
    --cyan: #00A1F1;
    --blue: #1D57F6;
    --navy: #121856;

    /* Tertiary Colors (10%) */
    --pink: #FD73ED;
    --purple: #7F59E9;
    --lavender: #DCB8FE;
    --magenta: #FD0377;

    /* Neutrals */
    --white: #FFFFFF;
    --black: #000000;
    --gray: #4A4A4A;
    --light-gray: #8A8A8A;

    /* Typography */
    --font-primary: 'Geist', 'Inter', 'Helvetica Neue', sans-serif;

    /* Spacing */
    --spacing-xs: 4px;
    --spacing-sm: 8px;
    --spacing-md: 16px;
    --spacing-lg: 24px;
    --spacing-xl: 48px;
    --grid-padding: 70px;
    --grid-gutter: 20px;

    /* Border Radius */
    --radius-sm: 8px;
    --radius-md: 16px;
    --radius-lg: 24px;
    --radius-pill: 50px;

    background: var(--cream-base);
    color: var(--black);
    font-family: var(--font-primary);
    padding: 40px;
    max-width: 1400px;
    margin: 0 auto;
    position: relative;
    overflow-x: hidden;
  }

  /* Glass texture effect */
  .glass-texture {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: repeating-linear-gradient(
      90deg,
      transparent,
      transparent 28px,
      rgba(0, 0, 0, 0.03) 28px,
      rgba(0, 0, 0, 0.03) 30px
    );
    pointer-events: none;
    z-index: 1;
  }

  .glass-texture-light {
    background-image: repeating-linear-gradient(
      90deg,
      transparent,
      transparent 18px,
      rgba(255, 255, 255, 0.08) 18px,
      rgba(255, 255, 255, 0.08) 20px
    );
  }

  .section {
    margin-bottom: var(--spacing-xl);
    position: relative;
    z-index: 2;
  }

  .section-title {
    font-size: 32px;
    font-weight: 700;
    line-height: 0.9;
    margin-bottom: var(--spacing-lg);
    color: var(--black);
  }

  /* Layout Containers */
  .layout-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: var(--grid-gutter);
    margin-bottom: var(--spacing-xl);
  }

  /* Informational Layout (Light) */
  .layout-info {
    background: var(--white);
    border-radius: var(--radius-lg);
    padding: var(--spacing-xl);
    border: 1px solid rgba(0, 0, 0, 0.05);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 400px;
    position: relative;
    overflow: hidden;
  }

  .layout-info-content {
    position: relative;
    z-index: 2;
  }

  /* Marketing Layout (Dark/Colored) */
  .layout-marketing {
    background: linear-gradient(135deg, var(--orange-primary) 0%, var(--red-primary) 100%);
    border-radius: var(--radius-lg);
    padding: var(--spacing-xl);
    color: var(--white);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    min-height: 400px;
    position: relative;
    overflow: hidden;
  }

  .layout-marketing-content {
    position: relative;
    z-index: 2;
  }

  /* 3D Object Simulation */
  .object-3d {
    width: 120px;
    height: 120px;
    background: radial-gradient(circle at 30% 30%, rgba(255,255,255,0.8), transparent),
                var(--orange-primary);
    border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
    box-shadow: 20px 20px 60px rgba(0,0,0,0.2),
                inset -10px -10px 20px rgba(0,0,0,0.3);
    position: relative;
    margin: 20px auto;
    animation: float 6s ease-in-out infinite;
  }

  @keyframes float {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(5deg); }
  }

  /* Logo Styles */
  .brand-block {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
    margin-bottom: var(--spacing-lg);
  }

  .logo-main {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .logo-icon {
    width: 48px;
    height: 32px;
    background: var(--orange-primary);
    border-radius: var(--radius-sm);
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 3px;
    padding: 6px;
  }

  .logo-key {
    background: var(--white);
    border-radius: 1px;
  }

  .logo-text {
    font-size: 32px;
    font-weight: 700;
    line-height: 1;
  }

  .logo-descriptor {
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--gray);
    width: 100%;
    border-top: 1px solid rgba(0,0,0,0.1);
    padding-top: 4px;
  }

  /* Typography scale */
  .type-h1 { font-size: 72px; font-weight: 700; line-height: 0.9; letter-spacing: 0; }
  .type-h2 { font-size: 48px; font-weight: 700; line-height: 0.9; letter-spacing: 0; }
  .type-h3 { font-size: 32px; font-weight: 500; line-height: 1.05; letter-spacing: 0; }
  .type-body { font-size: 16px; font-weight: 400; line-height: 1.1; letter-spacing: 0.02em; }
  .type-caption { font-size: 14px; color: var(--gray); }

  /* Tags/Capsules */
  .tag-row { display: flex; flex-wrap: wrap; gap: 8px; }
  .capsule {
    padding: 8px 20px;
    border-radius: var(--radius-pill);
    border: 2px solid var(--black);
    font-size: 14px;
    font-weight: 600;
    background: transparent;
  }
  .capsule-light {
    border-color: var(--white);
    color: var(--white);
  }

  /* Color Grid */
  .color-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 16px;
  }
  .color-card {
    border-radius: var(--radius-md);
    overflow: hidden;
    border: 1px solid rgba(0,0,0,0.05);
  }
  .color-swatch { height: 100px; width: 100%; }
  .color-info { padding: 12px; background: var(--white); }
  .color-hex { font-family: monospace; font-size: 12px; }

  /* Buttons */
  .btn {
    padding: 14px 28px;
    border-radius: var(--radius-pill);
    font-weight: 600;
    cursor: pointer;
    border: none;
    transition: 0.2s;
  }
  .btn-primary { background: var(--orange-primary); color: var(--white); }
  .btn-secondary { background: var(--black); color: var(--white); }
  .btn-outline { background: transparent; border: 2px solid var(--black); }
  .btn:hover { transform: translateY(-2px); opacity: 0.9; }

  /* Cards */
  .card {
    background: var(--white);
    border-radius: var(--radius-lg);
    overflow: hidden;
    border: 1px solid rgba(0,0,0,0.05);
    transition: 0.3s;
  }
  .card:hover { transform: translateY(-5px); box-shadow: 0 10px 30px rgba(0,0,0,0.1); }
  .card-img {
    height: 160px;
    background: var(--navy);
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
  }
  .card-body { padding: 24px; }
`;

export default function ItPark2Showcase() {
  return (
    <>
      <style>{cssStyles}</style>
      <main className="showcase">
        {/* Hero / Brand Section */}
        <section className="section">
          <div className="layout-marketing">
            <div className="glass-texture glass-texture-light"></div>
            <div className="layout-marketing-content">
              <div className="brand-block">
                <div className="logo-main">
                  <div className="logo-icon">
                    {[...Array(8)].map((_, i) => <div key={i} className="logo-key" />)}
                  </div>
                  <span className="logo-text" style={{ color: 'white' }}>IT-PARK</span>
                </div>
                <div className="logo-descriptor" style={{ color: 'white', borderColor: 'rgba(255,255,255,0.3)' }}>
                  Online Programming School
                </div>
              </div>
              <h1 className="type-h1" style={{ marginBottom: '16px' }}>Next Gen Learning</h1>
              <p className="type-h3" style={{ marginBottom: '32px', opacity: 0.9 }}>
                3D Education for a Digital World
              </p>
              <div className="tag-row" style={{ justifyContent: 'center' }}>
                <span className="capsule capsule-light">3D Graphics</span>
                <span className="capsule capsule-light">Java Mastery</span>
                <span className="capsule capsule-light">Modern Tech</span>
              </div>
            </div>
          </div>
        </section>

        {/* Color Palette */}
        <section className="section">
          <h2 className="section-title">Color Palette (60/30/10)</h2>
          <div style={{ marginBottom: '24px' }}>
            <h3 className="type-caption" style={{ marginBottom: '8px' }}>Primary Colors (60%)</h3>
            <div className="color-grid">
              {[
                { name: 'Red', hex: '#E51537' },
                { name: 'Orange', hex: '#FE4A00' },
                { name: 'Cream', hex: '#FFF6EB' }
              ].map(c => (
                <div key={c.hex} className="color-card">
                  <div className="color-swatch" style={{ background: c.hex }}></div>
                  <div className="color-info">
                    <div style={{ fontWeight: 600 }}>{c.name}</div>
                    <div className="color-hex">{c.hex}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ marginBottom: '24px' }}>
            <h3 className="type-caption" style={{ marginBottom: '8px' }}>Secondary Colors (30%)</h3>
            <div className="color-grid">
              {[
                { name: 'Lime', hex: '#DAFF02' },
                { name: 'Cyan', hex: '#00A1F1' },
                { name: 'Blue', hex: '#1D57F6' },
                { name: 'Navy', hex: '#121856' }
              ].map(c => (
                <div key={c.hex} className="color-card">
                  <div className="color-swatch" style={{ background: c.hex }}></div>
                  <div className="color-info">
                    <div style={{ fontWeight: 600 }}>{c.name}</div>
                    <div className="color-hex">{c.hex}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="type-caption" style={{ marginBottom: '8px' }}>Tertiary Colors (10%)</h3>
            <div className="color-grid">
              {[
                { name: 'Pink', hex: '#FD73ED' },
                { name: 'Purple', hex: '#7F59E9' },
                { name: 'Lavender', hex: '#DCB8FE' },
                { name: 'Magenta', hex: '#FD0377' }
              ].map(c => (
                <div key={c.hex} className="color-card">
                  <div className="color-swatch" style={{ background: c.hex }}></div>
                  <div className="color-info">
                    <div style={{ fontWeight: 600 }}>{c.name}</div>
                    <div className="color-hex">{c.hex}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Typography */}
        <section className="section">
          <h2 className="section-title">Typography (Geist)</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <div>
              <div className="type-caption">Heading 1 - Bold / 90% LH</div>
              <h1 className="type-h1">Innovation in Tech Education</h1>
            </div>
            <div>
              <div className="type-caption">Heading 2 - Bold / 90% LH</div>
              <h2 className="type-h2">Master Backend Systems</h2>
            </div>
            <div>
              <div className="type-caption">Heading 3 - Medium / 105% LH</div>
              <h3 className="type-h3">Develop scalable applications with Java and Spring.</h3>
            </div>
            <div>
              <div className="type-caption">Body - Regular / 110% LH / 2% Tracking</div>
              <p className="type-body" style={{ maxWidth: '600px' }}>
                Our program is designed for modern developers who want to master both the logic and the aesthetics of digital products. We combine deep technical knowledge with cutting-edge design principles.
              </p>
            </div>
          </div>
        </section>

        {/* Interactive Elements */}
        <section className="section">
          <h2 className="section-title">Interactive Elements</h2>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <button className="btn btn-primary">Primary Action</button>
            <button className="btn btn-secondary">Secondary Action</button>
            <button className="btn btn-outline">Outline Button</button>
          </div>
          <div style={{ marginTop: '32px' }}>
            <h3 className="type-caption" style={{ marginBottom: '16px' }}>Capsules (Tags)</h3>
            <div className="tag-row">
              <span className="capsule">Java</span>
              <span className="capsule">Spring Boot</span>
              <span className="capsule">PostgreSQL</span>
              <span className="capsule">Hibernate</span>
            </div>
          </div>
        </section>

        {/* Layout Showcase */}
        <section className="section">
          <h2 className="section-title">Layout Types</h2>
          <div className="layout-grid">
            {/* Informational Layout */}
            <div className="layout-info">
              <div className="layout-info-content">
                <div className="brand-block">
                  <div className="logo-main">
                    <div className="logo-icon">
                      {[...Array(8)].map((_, i) => <div key={i} className="logo-key" />)}
                    </div>
                    <span className="logo-text">IT-PARK</span>
                  </div>
                  <div className="logo-descriptor">Course Information</div>
                </div>
                <h2 className="type-h2" style={{ marginTop: '20px' }}>Java Developer<br/>Bootcamp</h2>
                <p className="type-body" style={{ marginTop: '16px' }}>
                  Full-stack development path from basics to enterprise.
                </p>
              </div>
              <div className="tag-row" style={{ position: 'relative', zIndex: 2 }}>
                <span className="capsule">12 Weeks</span>
                <span className="capsule">Online</span>
              </div>
            </div>

            {/* Marketing Layout */}
            <div className="layout-marketing" style={{ background: 'var(--navy)' }}>
              <div className="glass-texture glass-texture-light"></div>
              <div className="layout-marketing-content">
                <div className="object-3d"></div>
                <h2 className="type-h2">Join the Future</h2>
                <button className="btn btn-primary" style={{ marginTop: '24px' }}>Apply Now</button>
              </div>
            </div>
          </div>
        </section>

        {/* Cards */}
        <section className="section">
          <h2 className="section-title">Cards & Objects</h2>
          <div className="layout-grid">
            <div className="card">
              <div className="card-img">
                <div className="glass-texture glass-texture-light"></div>
                <div className="object-3d" style={{ width: '80px', height: '80px', background: 'var(--lime)' }}></div>
              </div>
              <div className="card-body">
                <h3 className="type-h3" style={{ fontSize: '24px' }}>Backend Master</h3>
                <p className="type-body" style={{ marginTop: '8px', opacity: 0.8 }}>Scale your knowledge to the enterprise level.</p>
              </div>
            </div>
            <div className="card">
              <div className="card-img" style={{ background: 'var(--magenta)' }}>
                <div className="glass-texture glass-texture-light"></div>
                <div className="object-3d" style={{ width: '80px', height: '80px', background: 'var(--cyan)' }}></div>
              </div>
              <div className="card-body">
                <h3 className="type-h3" style={{ fontSize: '24px' }}>3D Design</h3>
                <p className="type-body" style={{ marginTop: '8px', opacity: 0.8 }}>Create immersive experiences with modern tools.</p>
              </div>
            </div>
            <div className="card">
              <div className="card-img" style={{ background: 'var(--purple)' }}>
                <div className="glass-texture glass-texture-light"></div>
                <div className="object-3d" style={{ width: '80px', height: '80px', background: 'var(--white)' }}></div>
              </div>
              <div className="card-body">
                <h3 className="type-h3" style={{ fontSize: '24px' }}>Data Science</h3>
                <p className="type-body" style={{ marginTop: '8px', opacity: 0.8 }}>Unlock insights from big data using Python.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
