import React from 'react';

export const metadata = {
  id: 'minimalist-black',
  name: 'Linear Dark',
  description: 'Inspired by Linear. Clean dark interface with subtle borders, modern typography, and polished product UI.',
  tags: ['Dark', 'Product', 'Modern', 'SaaS'],
};

const previewStyles = `
  .ld-preview {
    --bg-primary: #000000;
    --bg-card: #111111;
    --border-subtle: rgba(255, 255, 255, 0.08);
    --text-primary: #ffffff;
    --text-secondary: rgba(255, 255, 255, 0.6);
    --text-tertiary: rgba(255, 255, 255, 0.4);
    --accent-purple: rgba(139, 92, 246, 0.15);
    --accent-purple-text: #a78bfa;

    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    background: var(--bg-primary);
    padding: 16px;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .ld-preview-nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 12px;
    border-bottom: 1px solid var(--border-subtle);
  }

  .ld-preview-logo {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 13px;
    font-weight: 600;
    color: var(--text-primary);
  }

  .ld-preview-logo-icon {
    width: 16px;
    height: 16px;
    background: linear-gradient(135deg, #6366f1, #8b5cf6);
    border-radius: 3px;
  }

  .ld-preview-btn {
    background: var(--text-primary);
    color: var(--bg-primary);
    border: none;
    border-radius: 6px;
    padding: 6px 12px;
    font-size: 11px;
    font-weight: 500;
  }

  .ld-preview-card {
    background: var(--bg-card);
    border: 1px solid var(--border-subtle);
    border-radius: 10px;
    padding: 14px;
  }

  .ld-preview-card-header {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 10px;
  }

  .ld-preview-avatar {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  }

  .ld-preview-card-title {
    font-size: 12px;
    font-weight: 500;
    color: var(--text-primary);
  }

  .ld-preview-card-tag {
    font-size: 10px;
    padding: 2px 6px;
    border-radius: 4px;
    background: var(--accent-purple);
    color: var(--accent-purple-text);
    margin-left: auto;
  }

  .ld-preview-card-desc {
    font-size: 11px;
    color: var(--text-tertiary);
  }

  .ld-preview-stats {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
  }

  .ld-preview-stat {
    background: var(--bg-card);
    border: 1px solid var(--border-subtle);
    border-radius: 8px;
    padding: 12px;
  }

  .ld-preview-stat-label {
    font-size: 10px;
    color: var(--text-tertiary);
    margin-bottom: 4px;
  }

  .ld-preview-stat-value {
    font-size: 18px;
    font-weight: 600;
    color: var(--text-primary);
    letter-spacing: -0.02em;
  }
`;

export function PreviewComponent() {
  return (
    <>
      <style>{previewStyles}</style>
      <div className="ld-preview">
        <div className="ld-preview-nav">
          <div className="ld-preview-logo">
            <div className="ld-preview-logo-icon"></div>
            Linear
          </div>
          <button className="ld-preview-btn">Sign up</button>
        </div>
        
        <div className="ld-preview-card">
          <div className="ld-preview-card-header">
            <div className="ld-preview-avatar"></div>
            <span className="ld-preview-card-title">Refactor crawler</span>
            <span className="ld-preview-card-tag">ENG-135</span>
          </div>
          <div className="ld-preview-card-desc">Assigned to you · 2h ago</div>
        </div>

        <div className="ld-preview-stats">
          <div className="ld-preview-stat">
            <div className="ld-preview-stat-label">Issues</div>
            <div className="ld-preview-stat-value">847</div>
          </div>
          <div className="ld-preview-stat">
            <div className="ld-preview-stat-label">Velocity</div>
            <div className="ld-preview-stat-value">+18%</div>
          </div>
        </div>
      </div>
    </>
  );
}
