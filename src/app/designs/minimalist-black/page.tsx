import React from 'react';

const cssStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

  .showcase {
    /* Color Tokens - Linear inspired */
    --bg-primary: #000000;
    --bg-secondary: #0a0a0a;
    --bg-card: #111111;
    --bg-elevated: #161616;
    
    --border-subtle: rgba(255, 255, 255, 0.08);
    --border-default: rgba(255, 255, 255, 0.12);
    --border-hover: rgba(255, 255, 255, 0.2);
    
    --text-primary: #ffffff;
    --text-secondary: rgba(255, 255, 255, 0.6);
    --text-tertiary: rgba(255, 255, 255, 0.4);
    
    --accent-purple: #a78bfa;
    --accent-purple-bg: rgba(139, 92, 246, 0.15);
    --accent-green: #86efac;
    --accent-green-bg: rgba(34, 197, 94, 0.15);
    --accent-yellow: #fde047;
    --accent-yellow-bg: rgba(234, 179, 8, 0.15);
    --accent-blue: #93c5fd;
    --accent-blue-bg: rgba(59, 130, 246, 0.15);
    --accent-red: #fca5a5;
    --accent-red-bg: rgba(239, 68, 68, 0.15);

    /* Typography */
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    background: var(--bg-primary);
    color: var(--text-primary);
    min-height: 100vh;
    padding: 48px 24px;
    -webkit-font-smoothing: antialiased;
  }

  .showcase-container {
    max-width: 1280px;
    margin: 0 auto;
  }

  .section {
    background: var(--bg-card);
    border-radius: 16px;
    padding: 32px;
    margin-bottom: 24px;
    border: 1px solid var(--border-subtle);
  }

  .section-title {
    font-size: 14px;
    font-weight: 600;
    color: var(--text-tertiary);
    margin-bottom: 24px;
    padding-bottom: 16px;
    border-bottom: 1px solid var(--border-subtle);
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  /* Hero Section */
  .hero {
    text-align: left;
    padding: 64px 40px;
    background: linear-gradient(180deg, var(--bg-card) 0%, var(--bg-primary) 100%);
  }

  .hero-title {
    font-size: 48px;
    font-weight: 600;
    color: var(--text-primary);
    letter-spacing: -0.03em;
    line-height: 1.1;
    margin-bottom: 16px;
  }

  .hero-subtitle {
    font-size: 18px;
    color: var(--text-secondary);
    line-height: 1.6;
    margin-bottom: 32px;
    max-width: 600px;
  }

  .hero-actions {
    display: flex;
    align-items: center;
    gap: 24px;
  }

  /* Buttons */
  .btn {
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    font-weight: 500;
    padding: 12px 20px;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    transition: all 0.15s ease;
    display: inline-flex;
    align-items: center;
    gap: 8px;
  }

  .btn-primary {
    background: var(--text-primary);
    color: var(--bg-primary);
  }

  .btn-primary:hover {
    opacity: 0.9;
  }

  .btn-secondary {
    background: transparent;
    color: var(--text-secondary);
    border: 1px solid var(--border-default);
  }

  .btn-secondary:hover {
    border-color: var(--border-hover);
    color: var(--text-primary);
  }

  .btn-ghost {
    background: transparent;
    color: var(--text-secondary);
    border: none;
    padding: 12px 16px;
  }

  .btn-ghost:hover {
    color: var(--text-primary);
  }

  .btn-disabled {
    background: var(--bg-elevated);
    color: var(--text-tertiary);
    cursor: not-allowed;
  }

  .link-btn {
    background: none;
    border: none;
    color: var(--text-secondary);
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    transition: color 0.15s ease;
  }

  .link-btn:hover {
    color: var(--text-primary);
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
    border-radius: 10px;
    margin-bottom: 10px;
    border: 1px solid var(--border-subtle);
  }

  .color-name {
    font-size: 13px;
    font-weight: 500;
    color: var(--text-primary);
    margin-bottom: 4px;
  }

  .color-hex {
    font-size: 12px;
    color: var(--text-tertiary);
    font-family: 'SF Mono', 'Monaco', monospace;
  }

  /* Typography */
  .type-sample {
    margin-bottom: 24px;
    padding-bottom: 20px;
    border-bottom: 1px solid var(--border-subtle);
  }

  .type-sample:last-child {
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 0;
  }

  .type-label {
    font-size: 12px;
    color: var(--text-tertiary);
    margin-bottom: 10px;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .h1-sample { font-size: 48px; font-weight: 600; letter-spacing: -0.03em; color: var(--text-primary); line-height: 1.1; }
  .h2-sample { font-size: 32px; font-weight: 600; letter-spacing: -0.02em; color: var(--text-primary); }
  .h3-sample { font-size: 24px; font-weight: 600; color: var(--text-primary); }
  .h4-sample { font-size: 18px; font-weight: 500; color: var(--text-primary); }
  .body-large { font-size: 17px; line-height: 1.7; color: var(--text-secondary); }
  .body-regular { font-size: 14px; line-height: 1.6; color: var(--text-secondary); }
  .body-small { font-size: 13px; line-height: 1.5; color: var(--text-tertiary); }
  .caption { font-size: 12px; line-height: 1.4; color: var(--text-tertiary); text-transform: uppercase; letter-spacing: 0.05em; }

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
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 16px;
  }

  .card {
    background: var(--bg-elevated);
    border: 1px solid var(--border-subtle);
    border-radius: 12px;
    overflow: hidden;
    transition: all 0.2s ease;
  }

  .card:hover {
    border-color: var(--border-default);
  }

  .card-header {
    padding: 16px 20px;
    background: var(--bg-card);
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid var(--border-subtle);
  }

  .card-header-title {
    font-size: 13px;
    font-weight: 500;
    color: var(--text-secondary);
  }

  .card-body {
    padding: 20px;
  }

  .card-title {
    font-size: 16px;
    font-weight: 500;
    color: var(--text-primary);
    margin-bottom: 6px;
  }

  .card-text {
    font-size: 14px;
    color: var(--text-tertiary);
    margin-bottom: 16px;
  }

  /* Badges */
  .badge {
    display: inline-flex;
    align-items: center;
    padding: 4px 10px;
    border-radius: 6px;
    font-size: 12px;
    font-weight: 500;
  }

  .badge-purple {
    background: var(--accent-purple-bg);
    color: var(--accent-purple);
  }

  .badge-blue {
    background: var(--accent-blue-bg);
    color: var(--accent-blue);
  }

  .badge-yellow {
    background: var(--accent-yellow-bg);
    color: var(--accent-yellow);
  }

  .badge-green {
    background: var(--accent-green-bg);
    color: var(--accent-green);
  }

  .badge-red {
    background: var(--accent-red-bg);
    color: var(--accent-red);
  }

  /* Forms */
  .form-group {
    margin-bottom: 20px;
  }

  .form-label {
    display: block;
    font-size: 13px;
    font-weight: 500;
    color: var(--text-secondary);
    margin-bottom: 8px;
  }

  .form-input {
    width: 100%;
    padding: 12px 14px;
    font-size: 14px;
    font-family: 'Inter', sans-serif;
    border: 1px solid var(--border-default);
    border-radius: 8px;
    background: var(--bg-secondary);
    color: var(--text-primary);
    transition: all 0.15s ease;
  }

  .form-input::placeholder {
    color: var(--text-tertiary);
  }

  .form-input:focus {
    outline: none;
    border-color: var(--border-hover);
  }

  .form-input.error {
    border-color: var(--accent-red);
  }

  .error-message {
    font-size: 12px;
    color: var(--accent-red);
    margin-top: 6px;
  }

  .checkbox-group {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .checkbox {
    width: 18px;
    height: 18px;
    border: 1px solid var(--border-default);
    border-radius: 4px;
    background: var(--bg-secondary);
    cursor: pointer;
    accent-color: var(--text-primary);
  }

  /* Alerts */
  .alert {
    padding: 14px 16px;
    border-radius: 10px;
    margin-bottom: 12px;
    font-size: 14px;
    display: flex;
    align-items: center;
    gap: 10px;
    border: 1px solid;
  }

  .alert-success {
    background: var(--accent-green-bg);
    color: var(--accent-green);
    border-color: rgba(34, 197, 94, 0.3);
  }

  .alert-error {
    background: var(--accent-red-bg);
    color: var(--accent-red);
    border-color: rgba(239, 68, 68, 0.3);
  }

  .alert-warning {
    background: var(--accent-yellow-bg);
    color: var(--accent-yellow);
    border-color: rgba(234, 179, 8, 0.3);
  }

  .alert-info {
    background: var(--accent-blue-bg);
    color: var(--accent-blue);
    border-color: rgba(59, 130, 246, 0.3);
  }

  /* Progress Bar */
  .progress-container {
    margin-top: 24px;
  }

  .progress-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
  }

  .progress-label {
    font-size: 13px;
    color: var(--text-tertiary);
  }

  .progress-value {
    font-size: 14px;
    font-weight: 500;
    color: var(--text-primary);
  }

  .progress {
    width: 100%;
    height: 6px;
    background: var(--bg-elevated);
    border-radius: 3px;
    overflow: hidden;
  }

  .progress-fill {
    height: 100%;
    background: var(--text-primary);
    border-radius: 3px;
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
    padding: 16px 20px;
    background: var(--bg-elevated);
    border-radius: 10px;
    border: 1px solid var(--border-subtle);
    transition: border-color 0.15s ease;
  }

  .task-item:hover {
    border-color: var(--border-default);
  }

  .task-info {
    display: flex;
    align-items: center;
    gap: 14px;
    flex: 1;
  }

  .task-avatar {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    flex-shrink: 0;
  }

  .task-content {
    flex: 1;
  }

  .task-title {
    font-size: 14px;
    font-weight: 500;
    color: var(--text-primary);
    margin-bottom: 2px;
  }

  .task-subtitle {
    font-size: 13px;
    color: var(--text-tertiary);
  }

  .task-actions {
    display: flex;
    gap: 12px;
    align-items: center;
  }

  .task-time {
    font-size: 12px;
    color: var(--text-tertiary);
  }

  /* Stats Grid */
  .stats-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
    margin-top: 24px;
  }

  .stat-card {
    background: var(--bg-elevated);
    border: 1px solid var(--border-subtle);
    border-radius: 12px;
    padding: 20px;
  }

  .stat-label {
    font-size: 13px;
    color: var(--text-tertiary);
    margin-bottom: 6px;
  }

  .stat-value {
    font-size: 28px;
    font-weight: 600;
    letter-spacing: -0.02em;
    color: var(--text-primary);
  }

  @media (max-width: 768px) {
    .stats-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;

export default function LinearDarkShowcase() {
  return (
    <>
      <style>{cssStyles}</style>
      <main className="showcase">
        <div className="showcase-container">
          {/* Hero Section */}
          <section className="section hero">
            <h1 className="hero-title">Linear Dark</h1>
            <p className="hero-subtitle">
              A modern dark design system inspired by Linear. Clean interfaces, subtle borders, 
              polished typography, and refined interactions for product teams.
            </p>
            <div className="hero-actions">
              <button className="btn btn-primary">Start building</button>
              <button className="link-btn">
                <span style={{ color: 'var(--text-primary)' }}>New:</span> Linear Reviews (Beta) →
              </button>
            </div>
          </section>

          {/* Color Palette */}
          <section className="section">
            <h2 className="section-title">Color Palette</h2>
            
            <div style={{ marginBottom: '32px' }}>
              <h3 style={{ fontSize: '13px', fontWeight: '500', marginBottom: '16px', color: 'var(--text-secondary)' }}>Backgrounds</h3>
              <div className="color-grid">
                <div className="color-swatch">
                  <div className="color-box" style={{ background: '#000000' }}></div>
                  <div className="color-name">Primary</div>
                  <div className="color-hex">#000000</div>
                </div>
                <div className="color-swatch">
                  <div className="color-box" style={{ background: '#0a0a0a' }}></div>
                  <div className="color-name">Secondary</div>
                  <div className="color-hex">#0a0a0a</div>
                </div>
                <div className="color-swatch">
                  <div className="color-box" style={{ background: '#111111' }}></div>
                  <div className="color-name">Card</div>
                  <div className="color-hex">#111111</div>
                </div>
                <div className="color-swatch">
                  <div className="color-box" style={{ background: '#161616' }}></div>
                  <div className="color-name">Elevated</div>
                  <div className="color-hex">#161616</div>
                </div>
              </div>
            </div>

            <div style={{ marginBottom: '32px' }}>
              <h3 style={{ fontSize: '13px', fontWeight: '500', marginBottom: '16px', color: 'var(--text-secondary)' }}>Text Colors</h3>
              <div className="color-grid">
                <div className="color-swatch">
                  <div className="color-box" style={{ background: '#ffffff' }}></div>
                  <div className="color-name">Primary</div>
                  <div className="color-hex">#ffffff</div>
                </div>
                <div className="color-swatch">
                  <div className="color-box" style={{ background: 'rgba(255,255,255,0.6)' }}></div>
                  <div className="color-name">Secondary</div>
                  <div className="color-hex">60% white</div>
                </div>
                <div className="color-swatch">
                  <div className="color-box" style={{ background: 'rgba(255,255,255,0.4)' }}></div>
                  <div className="color-name">Tertiary</div>
                  <div className="color-hex">40% white</div>
                </div>
              </div>
            </div>

            <div>
              <h3 style={{ fontSize: '13px', fontWeight: '500', marginBottom: '16px', color: 'var(--text-secondary)' }}>Accent Colors</h3>
              <div className="color-grid">
                <div className="color-swatch">
                  <div className="color-box" style={{ background: '#a78bfa' }}></div>
                  <div className="color-name">Purple</div>
                  <div className="color-hex">#a78bfa</div>
                </div>
                <div className="color-swatch">
                  <div className="color-box" style={{ background: '#93c5fd' }}></div>
                  <div className="color-name">Blue</div>
                  <div className="color-hex">#93c5fd</div>
                </div>
                <div className="color-swatch">
                  <div className="color-box" style={{ background: '#86efac' }}></div>
                  <div className="color-name">Green</div>
                  <div className="color-hex">#86efac</div>
                </div>
                <div className="color-swatch">
                  <div className="color-box" style={{ background: '#fde047' }}></div>
                  <div className="color-name">Yellow</div>
                  <div className="color-hex">#fde047</div>
                </div>
                <div className="color-swatch">
                  <div className="color-box" style={{ background: '#fca5a5' }}></div>
                  <div className="color-name">Red</div>
                  <div className="color-hex">#fca5a5</div>
                </div>
              </div>
            </div>
          </section>

          {/* Typography */}
          <section className="section">
            <h2 className="section-title">Typography Scale</h2>
            <div className="type-sample">
              <div className="type-label">H1 - Hero Title</div>
              <h1 className="h1-sample">Build products faster</h1>
            </div>
            <div className="type-sample">
              <div className="type-label">H2 - Section Title</div>
              <h2 className="h2-sample">Made for modern teams</h2>
            </div>
            <div className="type-sample">
              <div className="type-label">H3 - Card Title</div>
              <h3 className="h3-sample">Purpose-built for development</h3>
            </div>
            <div className="type-sample">
              <div className="type-label">H4 - Subtitle</div>
              <h4 className="h4-sample">Designed to move fast</h4>
            </div>
            <div className="type-sample">
              <div className="type-label">Body Large</div>
              <p className="body-large">
                Linear is shaped by the practices and principles that distinguish world-class product teams 
                from the rest: relentless focus, fast execution, and a commitment to the quality of craft.
              </p>
            </div>
            <div className="type-sample">
              <div className="type-label">Body Regular</div>
              <p className="body-regular">
                Meet the system for modern software development. Streamline issues, projects, and product roadmaps.
              </p>
            </div>
            <div className="type-sample">
              <div className="type-label">Caption</div>
              <p className="caption">Updated 2 hours ago</p>
            </div>
          </section>

          {/* Buttons */}
          <section className="section">
            <h2 className="section-title">Buttons & Interactive Elements</h2>
            <div className="buttons-grid">
              <button className="btn btn-primary">Primary</button>
              <button className="btn btn-secondary">Secondary</button>
              <button className="btn btn-ghost">Ghost</button>
              <button className="btn btn-disabled" disabled>Disabled</button>
              <button className="link-btn">Link Button →</button>
            </div>
          </section>

          {/* Cards */}
          <section className="section">
            <h2 className="section-title">Cards</h2>
            <div className="cards-grid">
              <div className="card">
                <div className="card-header">
                  <span className="card-header-title">Engineering</span>
                  <span className="badge badge-purple">ENG-135</span>
                </div>
                <div className="card-body">
                  <div className="card-title">Refactor sonic crawler</div>
                  <div className="card-text">Assigned to engineering team</div>
                  <button className="link-btn">View Details →</button>
                </div>
              </div>

              <div className="card">
                <div className="card-header">
                  <span className="card-header-title">Design</span>
                  <span className="badge badge-blue">DES-089</span>
                </div>
                <div className="card-body">
                  <div className="card-title">Update component library</div>
                  <div className="card-text">Design system updates</div>
                  <button className="link-btn">View Details →</button>
                </div>
              </div>

              <div className="card">
                <div className="card-header">
                  <span className="card-header-title">Product</span>
                  <span className="badge badge-green">PRD-042</span>
                </div>
                <div className="card-body">
                  <div className="card-title">Launch new onboarding</div>
                  <div className="card-text">Improving user activation</div>
                  <button className="link-btn">View Details →</button>
                </div>
              </div>
            </div>
          </section>

          {/* Form Elements */}
          <section className="section">
            <h2 className="section-title">Form Elements</h2>
            <div style={{ maxWidth: '480px' }}>
              <div className="form-group">
                <label className="form-label">Issue Title</label>
                <input type="text" className="form-input" placeholder="What needs to be done?" />
              </div>

              <div className="form-group">
                <label className="form-label">Description (Error State)</label>
                <input type="text" className="form-input error" placeholder="Add more details..." />
                <div className="error-message">Description is required for this issue type</div>
              </div>

              <div className="form-group">
                <div className="checkbox-group">
                  <input type="checkbox" className="checkbox" id="notify" defaultChecked />
                  <label htmlFor="notify" style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>
                    Notify assignee when status changes
                  </label>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Priority</label>
                <select className="form-input">
                  <option>No priority</option>
                  <option>Urgent</option>
                  <option>High</option>
                  <option>Medium</option>
                  <option>Low</option>
                </select>
              </div>

              <button className="btn btn-primary">Create Issue</button>
            </div>
          </section>

          {/* Badges */}
          <section className="section">
            <h2 className="section-title">Badges & Status</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '24px' }}>
              <span className="badge badge-purple">Feature</span>
              <span className="badge badge-blue">In Review</span>
              <span className="badge badge-yellow">In Progress</span>
              <span className="badge badge-green">Completed</span>
              <span className="badge badge-red">Blocked</span>
            </div>

            <div className="progress-container">
              <div className="progress-header">
                <span className="progress-label">Sprint Progress</span>
                <span className="progress-value">72%</span>
              </div>
              <div className="progress">
                <div className="progress-fill" style={{ width: '72%' }}></div>
              </div>
            </div>
          </section>

          {/* Alerts */}
          <section className="section">
            <h2 className="section-title">Alerts & Notifications</h2>
            <div style={{ maxWidth: '560px' }}>
              <div className="alert alert-success">
                <span>✓</span>
                <span>Issue ENG-135 has been successfully resolved</span>
              </div>
              <div className="alert alert-error">
                <span>✕</span>
                <span>Failed to sync with repository. Check your connection.</span>
              </div>
              <div className="alert alert-warning">
                <span>⚠</span>
                <span>This issue has been open for over 30 days</span>
              </div>
              <div className="alert alert-info">
                <span>ℹ</span>
                <span>Linear Reviews is now available in beta</span>
              </div>
            </div>
          </section>

          {/* Sample Content - Inbox */}
          <section className="section">
            <h2 className="section-title">Inbox</h2>
            <div className="task-list">
              <div className="task-item">
                <div className="task-info">
                  <div className="task-avatar" style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)' }}></div>
                  <div className="task-content">
                    <div className="task-title">Refactor sonic crawler</div>
                    <div className="task-subtitle">nan assigned you</div>
                  </div>
                </div>
                <div className="task-actions">
                  <span className="badge badge-purple">ENG-135</span>
                  <span className="task-time">2h</span>
                </div>
              </div>

              <div className="task-item">
                <div className="task-info">
                  <div className="task-avatar" style={{ background: 'linear-gradient(135deg, #f97316, #eab308)' }}></div>
                  <div className="task-content">
                    <div className="task-title">LLM Chatbot</div>
                    <div className="task-subtitle">New project update by raissa</div>
                  </div>
                </div>
                <div className="task-actions">
                  <span className="badge badge-yellow">Update</span>
                  <span className="task-time">8h</span>
                </div>
              </div>

              <div className="task-item">
                <div className="task-info">
                  <div className="task-avatar" style={{ background: 'linear-gradient(135deg, #ef4444, #f97316)' }}></div>
                  <div className="task-content">
                    <div className="task-title">Error uploading images via API</div>
                    <div className="task-subtitle">SLA breached</div>
                  </div>
                </div>
                <div className="task-actions">
                  <span className="badge badge-red">ENG-159</span>
                  <span className="task-time">1d</span>
                </div>
              </div>
            </div>

            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-label">Active Issues</div>
                <div className="stat-value">847</div>
              </div>
              <div className="stat-card">
                <div className="stat-label">Completed</div>
                <div className="stat-value">2.4K</div>
              </div>
              <div className="stat-card">
                <div className="stat-label">Avg Cycle Time</div>
                <div className="stat-value">3.2d</div>
              </div>
              <div className="stat-card">
                <div className="stat-label">Velocity</div>
                <div className="stat-value">+18%</div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
