import React from 'react';

export const metadata = {
  id: 'hex-analytics',
  name: 'Hex Analytics',
  description: 'Inspired by Hex.co. Clean light interface with bright accent colors, monospace code styling, and technical refinement for data products.',
  tags: ['Light', 'Analytics', 'Technical', 'SaaS'],
};

const previewStyles = `
  .hx-preview {
    --bg-primary: #f7f7f7;
    --bg-white: #ffffff;
    --text-primary: #000000;
    --text-secondary: #5e5e5e;
    --text-muted: #888888;
    --accent-cyan: #0099ff;
    --accent-orange: #ff8b17;
    --accent-green: #00c853;
    --border-default: #e0e0e0;

    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    background: var(--bg-primary);
    padding: 16px;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .hx-preview-nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 10px;
    border-bottom: 1px solid var(--border-default);
  }

  .hx-preview-logo {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 13px;
    font-weight: 600;
    color: var(--text-primary);
  }

  .hx-preview-logo-icon {
    width: 16px;
    height: 16px;
    background: linear-gradient(135deg, var(--accent-cyan), var(--accent-green));
    border-radius: 4px;
  }

  .hx-preview-btn {
    background: var(--accent-cyan);
    color: #ffffff;
    border: none;
    border-radius: 100px;
    padding: 6px 12px;
    font-size: 11px;
    font-weight: 500;
  }

  .hx-preview-card {
    background: var(--bg-white);
    border: 1px solid var(--border-default);
    border-radius: 10px;
    padding: 12px;
    position: relative;
    flex: 1;
  }

  .hx-preview-accent {
    position: absolute;
    top: 0;
    left: 0;
    width: 8px;
    height: 8px;
    background: var(--accent-cyan);
    border-bottom-right-radius: 8px;
  }

  .hx-preview-card-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 8px;
  }

  .hx-preview-card-title {
    font-size: 12px;
    font-weight: 600;
    color: var(--text-primary);
  }

  .hx-preview-badge {
    font-size: 9px;
    padding: 2px 6px;
    border-radius: 100px;
    background: rgba(0, 200, 83, 0.1);
    color: var(--accent-green);
    font-weight: 500;
  }

  .hx-preview-code {
    font-size: 10px;
    font-family: 'DM Mono', monospace;
    color: var(--text-muted);
    background: var(--bg-primary);
    padding: 6px 8px;
    border-radius: 6px;
    overflow: hidden;
  }

  .hx-preview-code-keyword {
    color: var(--accent-cyan);
  }

  .hx-preview-stats {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
  }

  .hx-preview-stat {
    background: var(--bg-white);
    border: 1px solid var(--border-default);
    border-radius: 8px;
    padding: 10px;
  }

  .hx-preview-stat-label {
    font-size: 9px;
    color: var(--text-muted);
    margin-bottom: 2px;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .hx-preview-stat-value {
    font-size: 16px;
    font-weight: 700;
    color: var(--text-primary);
    letter-spacing: -0.02em;
  }
`;

export function PreviewComponent() {
  return (
    <>
      <style>{previewStyles}</style>
      <div className="hx-preview">
        <div className="hx-preview-nav">
          <div className="hx-preview-logo">
            <div className="hx-preview-logo-icon"></div>
            Hex
          </div>
          <button className="hx-preview-btn">New Query</button>
        </div>

        <div className="hx-preview-card">
          <div className="hx-preview-accent"></div>
          <div className="hx-preview-card-header">
            <span className="hx-preview-card-title">Revenue Q4</span>
            <span className="hx-preview-badge">Published</span>
          </div>
          <div className="hx-preview-code">
            <span className="hx-preview-code-keyword">SELECT</span> SUM(revenue)...
          </div>
        </div>

        <div className="hx-preview-stats">
          <div className="hx-preview-stat">
            <div className="hx-preview-stat-label">Queries</div>
            <div className="hx-preview-stat-value">12.4K</div>
          </div>
          <div className="hx-preview-stat">
            <div className="hx-preview-stat-label">Notebooks</div>
            <div className="hx-preview-stat-value">847</div>
          </div>
        </div>
      </div>
    </>
  );
}
