import React from 'react';

const cssStyles = `
  .te-showcase {
    --te-bg: #ffffff;
    --te-text: #111111;
    --te-text-muted: #666666;
    --te-line: #e5e5e5;
    --te-line-strong: #000000;
    --te-accent: #0044ff;
    --te-danger: #ff3300;
    
    --font-serif: 'Playfair Display', 'Times New Roman', serif;
    --font-mono: 'JetBrains Mono', 'DM Mono', 'Courier New', monospace;

    font-family: var(--font-mono);
    background-color: var(--te-bg);
    color: var(--te-text);
    min-height: 100vh;
    position: relative;
    overflow-x: hidden;
    padding: 80px 4vw 120px;
    -webkit-font-smoothing: antialiased;
  }

  /* Grid Background */
  .te-grid-bg {
    position: absolute;
    inset: 0;
    background-image: 
      linear-gradient(var(--te-line) 1px, transparent 1px),
      linear-gradient(90deg, var(--te-line) 1px, transparent 1px);
    background-size: 40px 40px;
    background-position: center top;
    opacity: 0.5;
    pointer-events: none;
    z-index: 0;
  }

  .te-grid-plus {
    position: absolute;
    inset: 0;
    background-image: radial-gradient(var(--te-text-muted) 1px, transparent 1px);
    background-size: 40px 40px;
    opacity: 0.2;
    pointer-events: none;
    z-index: 0;
  }

  .te-content {
    position: relative;
    z-index: 1;
    max-width: 1200px;
    margin: 0 auto;
  }

  /* Section Styles */
  .te-section {
    margin-bottom: 120px;
    position: relative;
  }

  .te-section-header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    border-bottom: 1px solid var(--te-line-strong);
    padding-bottom: 16px;
    margin-bottom: 40px;
  }

  .te-section-title {
    font-family: var(--font-serif);
    font-size: 32px;
    font-weight: 400;
  }

  .te-section-label {
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--te-text-muted);
  }

  /* Hero Section */
  .te-hero {
    padding: 60px 0 100px;
    position: relative;
  }

  .te-hero-title {
    font-family: var(--font-serif);
    font-size: clamp(48px, 8vw, 96px);
    line-height: 0.95;
    font-weight: 400;
    letter-spacing: -0.03em;
    margin-bottom: 32px;
    max-width: 900px;
  }

  .te-hero-subtitle {
    font-size: 14px;
    line-height: 1.6;
    max-width: 480px;
    margin-bottom: 48px;
    border-left: 1px solid var(--te-line-strong);
    padding-left: 20px;
  }

  .te-cursor-blink {
    display: inline-block;
    width: 10px;
    height: 1em;
    background-color: var(--te-text);
    vertical-align: text-bottom;
    animation: te-blink 1s step-end infinite;
    margin-left: 4px;
  }

  @keyframes te-blink {
    50% { opacity: 0; }
  }

  /* Typography Scale */
  .te-type-row {
    display: grid;
    grid-template-columns: 100px 1fr;
    align-items: baseline;
    padding: 24px 0;
    border-bottom: 1px solid var(--te-line);
  }

  .te-type-label {
    font-size: 12px;
    color: var(--te-text-muted);
  }

  /* Buttons */
  .te-btn {
    appearance: none;
    background: transparent;
    border: none;
    font-family: var(--font-mono);
    font-size: 14px;
    cursor: pointer;
    padding: 12px 24px;
    position: relative;
    transition: all 0.2s ease;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }
  
  .te-btn-primary {
    background: var(--te-text);
    color: var(--te-bg);
  }
  
  .te-btn-primary:hover {
    background: var(--te-accent);
  }

  .te-btn-primary::after {
    content: "_";
    animation: te-blink 1s step-end infinite;
  }

  .te-btn-secondary {
    border: 1px solid var(--te-line-strong);
  }

  .te-btn-secondary:hover {
    background: var(--te-line);
  }

  .te-btn-brackets::before { content: "[ "; color: var(--te-text-muted); }
  .te-btn-brackets::after { content: " ]"; color: var(--te-text-muted); }
  .te-btn-brackets:hover::before, .te-btn-brackets:hover::after { color: var(--te-text); }

  /* Cards - Blueprint Style */
  .te-card-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 40px;
  }

  .te-card {
    position: relative;
    padding: 24px;
    transition: transform 0.2s ease;
  }

  .te-card-border {
    position: absolute;
    inset: 0;
    pointer-events: none;
  }

  /* Corner Brackets */
  .te-bracket-tl { position: absolute; top: 0; left: 0; width: 10px; height: 10px; border-top: 2px solid var(--te-text); border-left: 2px solid var(--te-text); }
  .te-bracket-tr { position: absolute; top: 0; right: 0; width: 10px; height: 10px; border-top: 2px solid var(--te-text); border-right: 2px solid var(--te-text); }
  .te-bracket-bl { position: absolute; bottom: 0; left: 0; width: 10px; height: 10px; border-bottom: 2px solid var(--te-text); border-left: 2px solid var(--te-text); }
  .te-bracket-br { position: absolute; bottom: 0; right: 0; width: 10px; height: 10px; border-bottom: 2px solid var(--te-text); border-right: 2px solid var(--te-text); }

  .te-card:hover .te-bracket-tl, .te-card:hover .te-bracket-tr,
  .te-card:hover .te-bracket-bl, .te-card:hover .te-bracket-br {
    width: 100%;
    height: 100%;
    border-width: 1px;
    transition: all 0.3s ease;
  }

  .te-card-title {
    font-family: var(--font-serif);
    font-size: 24px;
    margin-bottom: 12px;
  }

  .te-card-meta {
    font-size: 10px;
    color: var(--te-text-muted);
    margin-bottom: 16px;
    display: block;
  }

  /* Palette */
  .te-palette-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 20px;
  }

  .te-swatch {
    border: 1px solid var(--te-line);
    padding: 8px;
  }
  
  .te-swatch-color {
    height: 80px;
    width: 100%;
    margin-bottom: 12px;
    border: 1px solid rgba(0,0,0,0.1);
  }

  .te-swatch-label {
    font-size: 10px;
    text-transform: uppercase;
  }

  /* Form Elements */
  .te-form-group {
    margin-bottom: 24px;
  }

  .te-label {
    display: block;
    font-size: 11px;
    text-transform: uppercase;
    margin-bottom: 8px;
    letter-spacing: 0.1em;
  }

  .te-input {
    width: 100%;
    background: transparent;
    border: none;
    border-bottom: 1px solid var(--te-line-strong);
    padding: 12px 0;
    font-family: var(--font-mono);
    font-size: 16px;
    color: var(--te-text);
    border-radius: 0;
  }

  .te-input:focus {
    outline: none;
    border-bottom-color: var(--te-accent);
  }

  .te-checkbox-wrapper {
    display: flex;
    align-items: center;
    gap: 12px;
    cursor: pointer;
  }

  .te-checkbox {
    width: 16px;
    height: 16px;
    border: 1px solid var(--te-text);
    display: grid;
    place-items: center;
  }

  .te-checkbox-wrapper input:checked + .te-checkbox::after {
    content: "×";
    font-size: 14px;
    line-height: 1;
  }

  /* Stipple Texture */
  .te-stipple {
    background-image: radial-gradient(#000 1px, transparent 0);
    background-size: 4px 4px;
    opacity: 0.1;
  }

  /* Floating Agent */
  .te-agent-cursor {
    position: absolute;
    pointer-events: none;
    z-index: 10;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .te-cursor-icon {
    width: 0; 
    height: 0; 
    border-left: 12px solid transparent;
    border-right: 12px solid transparent;
    border-bottom: 20px solid var(--te-accent);
    transform: rotate(-30deg) skewX(-10deg);
  }

  .te-agent-label {
    background: var(--te-accent);
    color: white;
    padding: 4px 8px;
    font-size: 10px;
    margin-top: 4px;
    margin-left: 10px;
  }

  /* Coordinates */
  .te-coord {
    position: absolute;
    font-size: 9px;
    color: var(--te-text-muted);
    font-family: var(--font-mono);
  }
`;

export default function DesignShowcase() {
  return (
    <>
      <style>{cssStyles}</style>
      <main className="te-showcase">
        <div className="te-grid-bg"></div>
        
        {/* Decorative Coordinates */}
        <div className="te-coord" style={{ top: 20, left: 20 }}>x: 000 y: 000</div>
        <div className="te-coord" style={{ top: 20, right: 20 }}>x: 100 y: 000</div>
        <div className="te-coord" style={{ bottom: 20, left: 20 }}>x: 000 y: 100</div>

        <div className="te-content">
          
          {/* Section 1: Hero */}
          <section className="te-hero">
            <h1 className="te-hero-title">
              Technical<br/> 
              Editorial<span className="te-cursor-blink"></span>
            </h1>
            <p className="te-hero-subtitle">
              A design system bridging high-end typographic print media and raw command-line interfaces. 
              Precision, authority, and agentic collaboration.
            </p>
            <div style={{ display: 'flex', gap: '16px' }}>
              <button className="te-btn te-btn-primary">Initialize System</button>
              <button className="te-btn te-btn-brackets">View Manifest</button>
            </div>

            {/* Simulated Agent */}
            <div className="te-agent-cursor" style={{ top: '60%', right: '20%' }}>
              <div className="te-cursor-icon"></div>
              <div className="te-agent-label">Agent: Atlas</div>
            </div>
          </section>

          {/* Section 2: Color Palette */}
          <section className="te-section">
            <div className="te-section-header">
              <h2 className="te-section-title">Chromatics</h2>
              <span className="te-section-label">01 // Palette</span>
            </div>
            <div className="te-palette-grid">
              <div className="te-swatch">
                <div className="te-swatch-color" style={{ background: '#FFFFFF' }}></div>
                <div className="te-swatch-label">Paper White #FFFFFF</div>
              </div>
              <div className="te-swatch">
                <div className="te-swatch-color" style={{ background: '#F4F4F0' }}></div>
                <div className="te-swatch-label">Newsprint #F4F4F0</div>
              </div>
              <div className="te-swatch">
                <div className="te-swatch-color" style={{ background: '#111111' }}></div>
                <div className="te-swatch-label">Ink Black #111111</div>
              </div>
              <div className="te-swatch">
                <div className="te-swatch-color" style={{ background: '#E5E5E5' }}></div>
                <div className="te-swatch-label">Structural #E5E5E5</div>
              </div>
              <div className="te-swatch">
                <div className="te-swatch-color" style={{ background: '#0044FF' }}></div>
                <div className="te-swatch-label">Hyperlink #0044FF</div>
              </div>
              <div className="te-swatch">
                <div className="te-swatch-color" style={{ background: '#FF3300' }}></div>
                <div className="te-swatch-label">Alert #FF3300</div>
              </div>
            </div>
          </section>

          {/* Section 3: Typography */}
          <section className="te-section">
            <div className="te-section-header">
              <h2 className="te-section-title">Typography</h2>
              <span className="te-section-label">02 // Type Scale</span>
            </div>
            
            <div className="te-type-row">
              <span className="te-type-label">H1 Display</span>
              <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '64px', lineHeight: 1 }}>The quick brown fox.</h1>
            </div>
            <div className="te-type-row">
              <span className="te-type-label">H2 Heading</span>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '48px' }}>Jumps over the lazy dog.</h2>
            </div>
            <div className="te-type-row">
              <span className="te-type-label">H3 Subhead</span>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '32px' }}>System operational.</h3>
            </div>
            <div className="te-type-row">
              <span className="te-type-label">Body Mono</span>
              <p style={{ maxWidth: '600px', lineHeight: 1.6 }}>
                Technical Editorial uses a high-contrast pairing. The serif headings provide authority and elegance, while the monospace body text simulates a raw terminal environment, suggesting precision and developer-centric tooling.
              </p>
            </div>
          </section>

          {/* Section 4: Cards */}
          <section className="te-section">
            <div className="te-section-header">
              <h2 className="te-section-title">Modules</h2>
              <span className="te-section-label">03 // Components</span>
            </div>
            <div className="te-card-grid">
              <div className="te-card">
                <div className="te-bracket-tl"></div>
                <div className="te-bracket-tr"></div>
                <div className="te-bracket-bl"></div>
                <div className="te-bracket-br"></div>
                <span className="te-card-meta">MODULE_01</span>
                <h3 className="te-card-title">Network Analysis</h3>
                <p style={{ fontSize: '14px', lineHeight: 1.6, marginBottom: '20px' }}>
                  Real-time visualization of packet flow and node interconnection. High-frequency data polling enabled.
                </p>
                <button className="te-btn te-btn-brackets" style={{ padding: 0, fontSize: '12px' }}>Explore Data</button>
              </div>
              
              <div className="te-card">
                <div className="te-bracket-tl"></div>
                <div className="te-bracket-tr"></div>
                <div className="te-bracket-bl"></div>
                <div className="te-bracket-br"></div>
                <span className="te-card-meta">MODULE_02</span>
                <h3 className="te-card-title">Threat Detection</h3>
                <p style={{ fontSize: '14px', lineHeight: 1.6, marginBottom: '20px' }}>
                  Heuristic algorithms scanning for anomalies in the substrate. Automatic isolation protocols active.
                </p>
                <button className="te-btn te-btn-brackets" style={{ padding: 0, fontSize: '12px' }}>View Logs</button>
              </div>

              <div className="te-card">
                <div className="te-bracket-tl"></div>
                <div className="te-bracket-tr"></div>
                <div className="te-bracket-bl"></div>
                <div className="te-bracket-br"></div>
                <span className="te-card-meta">MODULE_03</span>
                <h3 className="te-card-title">System Health</h3>
                <p style={{ fontSize: '14px', lineHeight: 1.6, marginBottom: '20px' }}>
                  Core temperature and processing load within nominal ranges. Maintenance window scheduled.
                </p>
                <button className="te-btn te-btn-brackets" style={{ padding: 0, fontSize: '12px' }}>Diagnostics</button>
              </div>
            </div>
          </section>

          {/* Section 5: Form Elements */}
          <section className="te-section">
             <div className="te-section-header">
              <h2 className="te-section-title">Input</h2>
              <span className="te-section-label">04 // Data Entry</span>
            </div>
            <div style={{ maxWidth: '600px', display: 'grid', gap: '32px' }}>
              <div className="te-form-group">
                <label className="te-label">Target Endpoint</label>
                <input className="te-input" type="text" placeholder="https://api.example.com/v1" />
              </div>
              
              <div className="te-form-group">
                <label className="te-label">Configuration Key</label>
                <input className="te-input" type="password" value="••••••••••••" readOnly />
              </div>

              <div className="te-checkbox-wrapper">
                 <input type="checkbox" id="check1" hidden />
                 <div className="te-checkbox"></div>
                 <label htmlFor="check1" className="te-label" style={{marginBottom: 0}}>Enable Verbose Logging</label>
              </div>
            </div>
          </section>

          {/* Section 6: Status */}
          <section className="te-section">
             <div className="te-section-header">
              <h2 className="te-section-title">System Status</h2>
              <span className="te-section-label">05 // Feedback</span>
            </div>
            
            <div style={{ display: 'grid', gap: '16px' }}>
              <div style={{ border: '1px solid var(--te-line)', padding: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '14px' }}>[ OK ] Database Connection Established</span>
                <div style={{ width: '8px', height: '8px', background: 'var(--te-text)', borderRadius: '50%' }}></div>
              </div>

              <div style={{ border: '1px solid var(--te-danger)', color: 'var(--te-danger)', padding: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '14px' }}>[ ERR ] Connection Timeout (504)</span>
                <span style={{ fontSize: '12px' }}>RETRYING...</span>
              </div>
              
              <div style={{ border: '1px solid var(--te-accent)', color: 'var(--te-accent)', padding: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '14px' }}>[ INFO ] Indexing in progress</span>
                <span style={{ fontSize: '12px' }}>44%</span>
              </div>
            </div>
          </section>

        </div>
      </main>
    </>
  );
}
