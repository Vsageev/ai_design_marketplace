import React from 'react';

const cssStyles = `
  .showcase {
    /* Color Tokens */
    --pure-white: #FFFFFF;
    --light-bg: #F5F7FA;
    --soft-gray: #F8F9FB;
    --border-gray: #E1E4E8;
    --medium-gray: #6B7280;
    --charcoal: #1F2937;
    
    --teal-primary: #14B8A6;
    --teal-hover: #0F9B8A;
    --ocean-blue: #3B82F6;
    
    --new-purple: #8B5CF6;
    --scheduled-blue: #60A5FA;
    --in-progress-yellow: #FBBF24;
    --expired-red: #F87171;
    --success-green: #10B981;
    
    --new-badge-bg: #EDE9FE;
    --scheduled-badge-bg: #DBEAFE;
    --in-progress-badge-bg: #FEF3C7;
    --expired-badge-bg: #FEE2E2;

    /* Typography */
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    background: var(--light-bg);
    min-height: 100vh;
    padding: 48px 24px;
  }

  .showcase-container {
    max-width: 1280px;
    margin: 0 auto;
  }

  .section {
    background: var(--pure-white);
    border-radius: 12px;
    padding: 32px;
    margin-bottom: 32px;
    border: 1px solid var(--border-gray);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  }

  .section-title {
    font-size: 18px;
    font-weight: 600;
    color: var(--charcoal);
    margin-bottom: 20px;
    padding-bottom: 12px;
    border-bottom: 1px solid var(--border-gray);
  }

  /* Hero Section */
  .hero {
    text-align: left;
    padding: 48px 32px;
  }

  .hero-title {
    font-size: 32px;
    font-weight: 700;
    color: var(--charcoal);
    letter-spacing: -0.01em;
    margin-bottom: 12px;
  }

  .hero-subtitle {
    font-size: 16px;
    color: var(--medium-gray);
    line-height: 1.6;
    margin-bottom: 32px;
    max-width: 600px;
  }

  /* Buttons */
  .btn {
    font-family: 'Inter', sans-serif;
    font-size: 15px;
    font-weight: 500;
    padding: 12px 24px;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease;
    display: inline-flex;
    align-items: center;
    gap: 8px;
  }

  .btn-primary {
    background: var(--teal-primary);
    color: white;
    box-shadow: 0 2px 8px rgba(20, 184, 166, 0.3);
  }

  .btn-primary:hover {
    background: var(--teal-hover);
    box-shadow: 0 4px 12px rgba(20, 184, 166, 0.4);
    transform: translateY(-1px);
  }

  .btn-secondary {
    background: transparent;
    color: var(--teal-primary);
    border: 1px solid var(--teal-primary);
  }

  .btn-secondary:hover {
    background: var(--soft-gray);
  }

  .btn-success {
    background: var(--success-green);
    color: white;
  }

  .btn-success:hover {
    background: #059669;
  }

  .btn-disabled {
    background: var(--soft-gray);
    color: var(--medium-gray);
    cursor: not-allowed;
  }

  .link-btn {
    background: none;
    border: none;
    color: var(--ocean-blue);
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    text-decoration: none;
    transition: color 0.2s ease;
  }

  .link-btn:hover {
    text-decoration: underline;
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
    border-radius: 8px;
    margin-bottom: 8px;
    border: 1px solid var(--border-gray);
  }

  .color-name {
    font-size: 13px;
    font-weight: 500;
    color: var(--charcoal);
    margin-bottom: 4px;
  }

  .color-hex {
    font-size: 12px;
    color: var(--medium-gray);
    font-family: 'Monaco', 'Courier New', monospace;
  }

  /* Typography */
  .type-sample {
    margin-bottom: 20px;
    padding-bottom: 16px;
    border-bottom: 1px solid var(--border-gray);
  }

  .type-sample:last-child {
    border-bottom: none;
  }

  .type-label {
    font-size: 12px;
    color: var(--medium-gray);
    margin-bottom: 8px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .h1-sample { font-size: 32px; font-weight: 700; color: var(--charcoal); }
  .h2-sample { font-size: 24px; font-weight: 600; color: var(--charcoal); }
  .h3-sample { font-size: 18px; font-weight: 600; color: var(--charcoal); }
  .h4-sample { font-size: 16px; font-weight: 600; color: var(--charcoal); }
  .h5-sample { font-size: 14px; font-weight: 600; color: var(--charcoal); }
  .h6-sample { font-size: 13px; font-weight: 600; color: var(--charcoal); }
  .body-large { font-size: 16px; line-height: 1.6; color: var(--charcoal); }
  .body-regular { font-size: 14px; line-height: 1.5; color: var(--charcoal); }
  .body-small { font-size: 13px; line-height: 1.5; color: var(--medium-gray); }
  .caption { font-size: 11px; line-height: 1.4; color: var(--medium-gray); }

  /* Buttons Grid */
  .buttons-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    align-items: center;
  }

  /* Cards */
  .cards-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 16px;
  }

  .card {
    background: var(--pure-white);
    border: 1px solid var(--border-gray);
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    transition: all 0.2s ease;
  }

  .card:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
  }

  .card-header {
    padding: 16px;
    background: var(--soft-gray);
    font-weight: 500;
    color: var(--charcoal);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .card-body {
    padding: 16px;
  }

  .card-title {
    font-size: 16px;
    font-weight: 600;
    color: var(--charcoal);
    margin-bottom: 8px;
  }

  .card-text {
    font-size: 14px;
    color: var(--medium-gray);
    line-height: 1.5;
    margin-bottom: 16px;
  }

  /* Status Badges */
  .badge {
    display: inline-block;
    padding: 4px 12px;
    border-radius: 16px;
    font-size: 12px;
    font-weight: 500;
  }

  .badge-new {
    background: var(--new-badge-bg);
    color: var(--new-purple);
  }

  .badge-scheduled {
    background: var(--scheduled-badge-bg);
    color: var(--scheduled-blue);
  }

  .badge-in-progress {
    background: var(--in-progress-badge-bg);
    color: #F59E0B;
  }

  .badge-expired {
    background: var(--expired-badge-bg);
    color: var(--expired-red);
  }

  /* Forms */
  .form-group {
    margin-bottom: 20px;
  }

  .form-label {
    display: block;
    font-size: 13px;
    font-weight: 500;
    color: var(--charcoal);
    margin-bottom: 8px;
  }

  .form-input {
    width: 100%;
    padding: 10px 12px;
    font-size: 14px;
    font-family: 'Inter', sans-serif;
    border: 1px solid var(--border-gray);
    border-radius: 8px;
    transition: all 0.2s ease;
    background: var(--pure-white);
  }

  .form-input:focus {
    outline: 2px solid var(--teal-primary);
    outline-offset: 2px;
    border-color: var(--teal-primary);
  }

  .form-input.error {
    border-color: var(--expired-red);
  }

  .error-message {
    font-size: 12px;
    color: var(--expired-red);
    margin-top: 6px;
  }

  .checkbox-group {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .checkbox {
    width: 18px;
    height: 18px;
    border: 2px solid var(--border-gray);
    border-radius: 4px;
    cursor: pointer;
  }

  /* Alerts */
  .alert {
    padding: 12px 16px;
    border-radius: 8px;
    margin-bottom: 12px;
    font-size: 14px;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .alert-success {
    background: #D1FAE5;
    color: #065F46;
    border: 1px solid #10B981;
  }

  .alert-error {
    background: var(--expired-badge-bg);
    color: #991B1B;
    border: 1px solid var(--expired-red);
  }

  .alert-warning {
    background: #FEF3C7;
    color: #92400E;
    border: 1px solid #FBBF24;
  }

  .alert-info {
    background: #DBEAFE;
    color: #1E40AF;
    border: 1px solid #60A5FA;
  }

  /* Progress Bar */
  .progress {
    width: 100%;
    height: 8px;
    background: var(--soft-gray);
    border-radius: 4px;
    overflow: hidden;
  }

  .progress-fill {
    height: 100%;
    background: linear-gradient(90deg, var(--teal-primary), #0F9B8A);
    border-radius: 4px;
    transition: width 0.3s ease;
  }

  /* Task List */
  .task-list {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .task-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    background: var(--soft-gray);
    border-radius: 8px;
    border: 1px solid var(--border-gray);
  }

  .task-info {
    flex: 1;
  }

  .task-title {
    font-size: 15px;
    font-weight: 500;
    color: var(--charcoal);
    margin-bottom: 4px;
  }

  .task-subtitle {
    font-size: 13px;
    color: var(--medium-gray);
  }

  .task-actions {
    display: flex;
    gap: 8px;
    align-items: center;
  }

  /* FAB */
  .fab {
    position: fixed;
    bottom: 24px;
    right: 24px;
    width: 56px;
    height: 56px;
    border-radius: 50%;
    background: var(--teal-primary);
    color: white;
    border: none;
    cursor: pointer;
    box-shadow: 0 4px 12px rgba(20, 184, 166, 0.4);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    z-index: 1000;
  }

  .fab:hover {
    box-shadow: 0 6px 20px rgba(20, 184, 166, 0.5);
    transform: scale(1.05);
  }
`;

export default function ModernPropertyManagementShowcase() {
  return (
    <>
      <style>{cssStyles}</style>
      <main className="showcase">
        <div className="showcase-container">
          {/* Hero Section */}
          <section className="section hero">
            <h1 className="hero-title">Modern Property Management</h1>
            <p className="hero-subtitle">
              A clean, professional design system optimized for property management and scheduling applications. 
              Features soft color palettes, clear status indicators, and card-based layouts for maximum readability and organization.
            </p>
            <button className="btn btn-primary">Get Started →</button>
          </section>

          {/* Color Palette */}
          <section className="section">
            <h2 className="section-title">Color Palette</h2>
            <div style={{ marginBottom: '32px' }}>
              <h3 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '16px', color: 'var(--medium-gray)' }}>Base Colors</h3>
              <div className="color-grid">
                <div className="color-swatch">
                  <div className="color-box" style={{ background: '#FFFFFF', border: '1px solid var(--border-gray)' }}></div>
                  <div className="color-name">Pure White</div>
                  <div className="color-hex">#FFFFFF</div>
                </div>
                <div className="color-swatch">
                  <div className="color-box" style={{ background: '#F5F7FA' }}></div>
                  <div className="color-name">Light Background</div>
                  <div className="color-hex">#F5F7FA</div>
                </div>
                <div className="color-swatch">
                  <div className="color-box" style={{ background: '#F8F9FB' }}></div>
                  <div className="color-name">Soft Gray</div>
                  <div className="color-hex">#F8F9FB</div>
                </div>
                <div className="color-swatch">
                  <div className="color-box" style={{ background: '#6B7280' }}></div>
                  <div className="color-name">Medium Gray</div>
                  <div className="color-hex">#6B7280</div>
                </div>
                <div className="color-swatch">
                  <div className="color-box" style={{ background: '#1F2937' }}></div>
                  <div className="color-name">Charcoal</div>
                  <div className="color-hex">#1F2937</div>
                </div>
              </div>
            </div>

            <div style={{ marginBottom: '32px' }}>
              <h3 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '16px', color: 'var(--medium-gray)' }}>Accent Colors</h3>
              <div className="color-grid">
                <div className="color-swatch">
                  <div className="color-box" style={{ background: '#14B8A6' }}></div>
                  <div className="color-name">Teal Primary</div>
                  <div className="color-hex">#14B8A6</div>
                </div>
                <div className="color-swatch">
                  <div className="color-box" style={{ background: '#0F9B8A' }}></div>
                  <div className="color-name">Teal Hover</div>
                  <div className="color-hex">#0F9B8A</div>
                </div>
                <div className="color-swatch">
                  <div className="color-box" style={{ background: '#3B82F6' }}></div>
                  <div className="color-name">Ocean Blue</div>
                  <div className="color-hex">#3B82F6</div>
                </div>
              </div>
            </div>

            <div>
              <h3 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '16px', color: 'var(--medium-gray)' }}>Status Colors</h3>
              <div className="color-grid">
                <div className="color-swatch">
                  <div className="color-box" style={{ background: '#8B5CF6' }}></div>
                  <div className="color-name">New Purple</div>
                  <div className="color-hex">#8B5CF6</div>
                </div>
                <div className="color-swatch">
                  <div className="color-box" style={{ background: '#60A5FA' }}></div>
                  <div className="color-name">Scheduled Blue</div>
                  <div className="color-hex">#60A5FA</div>
                </div>
                <div className="color-swatch">
                  <div className="color-box" style={{ background: '#FBBF24' }}></div>
                  <div className="color-name">In Progress Yellow</div>
                  <div className="color-hex">#FBBF24</div>
                </div>
                <div className="color-swatch">
                  <div className="color-box" style={{ background: '#F87171' }}></div>
                  <div className="color-name">Expired Red</div>
                  <div className="color-hex">#F87171</div>
                </div>
                <div className="color-swatch">
                  <div className="color-box" style={{ background: '#10B981' }}></div>
                  <div className="color-name">Success Green</div>
                  <div className="color-hex">#10B981</div>
                </div>
              </div>
            </div>
          </section>

          {/* Typography */}
          <section className="section">
            <h2 className="section-title">Typography Scale</h2>
            <div className="type-sample">
              <div className="type-label">H1 - Page Title</div>
              <h1 className="h1-sample">The quick brown fox jumps over the lazy dog</h1>
            </div>
            <div className="type-sample">
              <div className="type-label">H2 - Section Header</div>
              <h2 className="h2-sample">The quick brown fox jumps over the lazy dog</h2>
            </div>
            <div className="type-sample">
              <div className="type-label">H3 - Subsection</div>
              <h3 className="h3-sample">The quick brown fox jumps over the lazy dog</h3>
            </div>
            <div className="type-sample">
              <div className="type-label">H4 - Card Title</div>
              <h4 className="h4-sample">The quick brown fox jumps over the lazy dog</h4>
            </div>
            <div className="type-sample">
              <div className="type-label">Body Large</div>
              <p className="body-large">
                This is a sample paragraph demonstrating the body large text style. 
                It's perfect for introductory text or emphasized content that needs to stand out.
              </p>
            </div>
            <div className="type-sample">
              <div className="type-label">Body Regular</div>
              <p className="body-regular">
                This is the standard body text used throughout the application. It provides a comfortable reading 
                experience with optimal line height and spacing for extended reading sessions.
              </p>
            </div>
            <div className="type-sample">
              <div className="type-label">Body Small</div>
              <p className="body-small">
                This smaller body text is used for secondary information and labels.
              </p>
            </div>
            <div className="type-sample">
              <div className="type-label">Caption</div>
              <p className="caption">Caption text for timestamps and metadata</p>
            </div>
          </section>

          {/* Buttons */}
          <section className="section">
            <h2 className="section-title">Buttons & Interactive Elements</h2>
            <div className="buttons-grid">
              <button className="btn btn-primary">Primary Button</button>
              <button className="btn btn-secondary">Secondary Button</button>
              <button className="btn btn-success">Success Button</button>
              <button className="btn btn-disabled" disabled>Disabled Button</button>
              <button className="link-btn">Link Button →</button>
            </div>
            <p style={{ marginTop: '16px', fontSize: '13px', color: 'var(--medium-gray)' }}>
              Hover over buttons to see the interactive effects
            </p>
          </section>

          {/* Cards */}
          <section className="section">
            <h2 className="section-title">Task Cards</h2>
            <div className="cards-grid">
              <div className="card">
                <div className="card-header">
                  <span>Post Move Out Inspection</span>
                  <span className="badge badge-new">New</span>
                </div>
                <div className="card-body">
                  <div className="card-title">Property 1323</div>
                  <div className="card-text">Property Manager</div>
                  <button className="link-btn">View Details →</button>
                </div>
              </div>

              <div className="card">
                <div className="card-header">
                  <span>Paint</span>
                  <span className="badge badge-scheduled">Scheduled</span>
                </div>
                <div className="card-body">
                  <div className="card-title">Unit 011926-1</div>
                  <div className="card-text">Rent Ready</div>
                  <button className="link-btn">View Details →</button>
                </div>
              </div>

              <div className="card">
                <div className="card-header">
                  <span>Resurfacing</span>
                  <span className="badge badge-in-progress">In Progress</span>
                </div>
                <div className="card-body">
                  <div className="card-title">Property 222</div>
                  <div className="card-text">Rent Ready</div>
                  <button className="link-btn">View Details →</button>
                </div>
              </div>
            </div>
          </section>

          {/* Form Elements */}
          <section className="section">
            <h2 className="section-title">Form Elements</h2>
            <div style={{ maxWidth: '500px' }}>
              <div className="form-group">
                <label className="form-label">Property Name</label>
                <input type="text" className="form-input" placeholder="Enter property name" />
              </div>

              <div className="form-group">
                <label className="form-label">Property Address</label>
                <input type="text" className="form-input error" placeholder="Enter address" />
                <div className="error-message">This field is required</div>
              </div>

              <div className="form-group">
                <div className="checkbox-group">
                  <input type="checkbox" className="checkbox" id="notify" />
                  <label htmlFor="notify" style={{ fontSize: '14px', color: 'var(--charcoal)' }}>
                    Send notification to property manager
                  </label>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Task Type</label>
                <select className="form-input">
                  <option>Post Move Out Inspection</option>
                  <option>Paint</option>
                  <option>Repair</option>
                  <option>Resurfacing</option>
                </select>
              </div>

              <button className="btn btn-primary">Submit Task</button>
            </div>
          </section>

          {/* Feedback & Status */}
          <section className="section">
            <h2 className="section-title">Feedback & Status Messages</h2>
            <div className="alert alert-success">
              <span>✓</span>
              <span>Task successfully scheduled for January 21, 2026</span>
            </div>
            <div className="alert alert-error">
              <span>✕</span>
              <span>Unable to schedule task. Property manager unavailable.</span>
            </div>
            <div className="alert alert-warning">
              <span>⚠</span>
              <span>This task is overdue. Please reschedule immediately.</span>
            </div>
            <div className="alert alert-info">
              <span>ℹ</span>
              <span>New property inspection guidelines available</span>
            </div>

            <div style={{ marginTop: '32px' }}>
              <h3 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '12px', color: 'var(--charcoal)' }}>
                Task Progress (65%)
              </h3>
              <div className="progress">
                <div className="progress-fill" style={{ width: '65%' }}></div>
              </div>
            </div>
          </section>

          {/* Sample Content Layout */}
          <section className="section">
            <h2 className="section-title">Upcoming Tasks</h2>
            <div className="task-list">
              <div className="task-item">
                <div className="task-info">
                  <div className="task-title">🏠 Repair - Property 1323</div>
                  <div className="task-subtitle">Rent Ready • Scheduled for today</div>
                </div>
                <div className="task-actions">
                  <span className="badge badge-scheduled">Scheduled</span>
                  <button className="btn btn-primary" style={{ padding: '8px 16px', fontSize: '13px' }}>
                    View
                  </button>
                </div>
              </div>

              <div className="task-item">
                <div className="task-info">
                  <div className="task-title">🎨 Paint - Unit 011926-1</div>
                  <div className="task-subtitle">Property Manager • Jan 21, 2026</div>
                </div>
                <div className="task-actions">
                  <span className="badge badge-new">New</span>
                  <button className="btn btn-primary" style={{ padding: '8px 16px', fontSize: '13px' }}>
                    View
                  </button>
                </div>
              </div>

              <div className="task-item">
                <div className="task-info">
                  <div className="task-title">🔧 Resurfacing - Property 222</div>
                  <div className="task-subtitle">Rent Ready • In progress since Jan 19</div>
                </div>
                <div className="task-actions">
                  <span className="badge badge-in-progress">In Progress</span>
                  <button className="btn btn-primary" style={{ padding: '8px 16px', fontSize: '13px' }}>
                    View
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Floating Action Button */}
        <button className="fab" title="Add New Task">+</button>
      </main>
    </>
  );
}
