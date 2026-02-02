import React from 'react';

export const metadata = {
  id: 'hex-security',
  name: 'Hex Security',
  description: 'Dark, high-contrast security UI with acid-lime accents, grid textures, and precise telemetry styling.',
  tags: ['Dark', 'Security', 'Monitoring', 'SaaS'],
};

const previewStyles = `
  .hxsec-preview {
    --bg-void: #0b0c0f;
    --bg-panel: #12151a;
    --bg-panel-light: #171b22;
    --border-panel: #202530;
    --text-primary: #f5f7fb;
    --text-secondary: #c4c9d4;
    --text-muted: #8b93a5;
    --accent-lime: #b7ff3c;
    --accent-lime-deep: #8be21a;
    --accent-cyan: #4fd7ff;

    font-family: 'IBM Plex Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    background: radial-gradient(circle at top, rgba(183, 255, 60, 0.12), transparent 55%), var(--bg-void);
    padding: 14px;
    height: 100%;
    color: var(--text-primary);
    display: flex;
    flex-direction: column;
    gap: 10px;
    border-bottom: 2px solid #1a1f28;
  }

  .hxsec-preview-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .hxsec-preview-brand {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--accent-lime);
  }

  .hxsec-preview-dot {
    width: 10px;
    height: 10px;
    border-radius: 999px;
    background: var(--accent-lime);
    box-shadow: 0 0 10px rgba(183, 255, 60, 0.5);
  }

  .hxsec-preview-btn {
    background: var(--accent-lime);
    border: none;
    color: var(--bg-void);
    font-size: 10px;
    font-weight: 600;
    padding: 6px 10px;
    border-radius: 999px;
  }

  .hxsec-preview-card {
    background: var(--bg-panel);
    border: 1px solid var(--border-panel);
    border-radius: 14px;
    padding: 12px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    flex: 1;
  }

  .hxsec-preview-card-title {
    font-size: 12px;
    font-weight: 600;
  }

  .hxsec-preview-card-meta {
    font-size: 10px;
    color: var(--text-muted);
  }

  .hxsec-preview-chip {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 10px;
    color: var(--accent-cyan);
    background: rgba(79, 215, 255, 0.12);
    padding: 4px 8px;
    border-radius: 999px;
  }

  .hxsec-preview-row {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;
  }

  .hxsec-preview-stat {
    background: var(--bg-panel-light);
    border: 1px solid var(--border-panel);
    border-radius: 10px;
    padding: 8px;
  }

  .hxsec-preview-stat-label {
    font-size: 9px;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--text-muted);
  }

  .hxsec-preview-stat-value {
    font-size: 14px;
    font-weight: 700;
    color: var(--text-primary);
  }
`;

export function PreviewComponent() {
  return (
    <>
      <style>{previewStyles}</style>
      <div className="hxsec-preview">
        <div className="hxsec-preview-header">
          <div className="hxsec-preview-brand">
            <span className="hxsec-preview-dot"></span>
            Hex Security
          </div>
          <button className="hxsec-preview-btn">Monitor</button>
        </div>

        <div className="hxsec-preview-card">
          <div className="hxsec-preview-card-title">Session anomalies</div>
          <div className="hxsec-preview-card-meta">Last sweep: 1m ago</div>
          <span className="hxsec-preview-chip">Risk: Elevated</span>
        </div>

        <div className="hxsec-preview-row">
          <div className="hxsec-preview-stat">
            <div className="hxsec-preview-stat-label">Signals</div>
            <div className="hxsec-preview-stat-value">312</div>
          </div>
          <div className="hxsec-preview-stat">
            <div className="hxsec-preview-stat-label">Active</div>
            <div className="hxsec-preview-stat-value">14</div>
          </div>
        </div>
      </div>
    </>
  );
}
