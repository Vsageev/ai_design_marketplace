import React from 'react';

export const metadata = {
  id: 'hex-security-editorial',
  name: 'Hex Security Editorial',
  description:
    'Technical editorial variant with serif authority, mono metadata, bracketed frames, and blueprint grid cues.',
  tags: ['Technical', 'Editorial', 'Blueprint', 'Security'],
};

const previewStyles = `
  .hexed-preview {
    --hexed-paper: #f5f4f2;
    --hexed-surface: #ffffff;
    --hexed-rule: #d2d0cb;
    --hexed-grid: rgba(20, 20, 20, 0.1);
    --hexed-ink: #141414;
    --hexed-muted: #7b7b7b;
    --hexed-orange: #ff6a2b;

    height: 100%;
    background: var(--hexed-paper);
    padding: 14px;
    font-family: 'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    color: var(--hexed-ink);
    position: relative;
    overflow: hidden;
  }

  .hexed-preview-grid {
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(to right, var(--hexed-grid) 1px, transparent 1px),
      linear-gradient(to bottom, var(--hexed-grid) 1px, transparent 1px);
    background-size: 44px 44px;
    opacity: 0.25;
    pointer-events: none;
    animation: hexed-preview-drift 14s linear infinite;
  }

  .hexed-preview-content {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .hexed-preview-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 8px;
    border-bottom: 1px solid var(--hexed-rule);
  }

  .hexed-preview-brand {
    font-family: 'Noe Display', 'Times New Roman', serif;
    font-size: 16px;
  }

  .hexed-preview-label {
    font-family: 'DM Mono', 'SFMono-Regular', Menlo, monospace;
    font-size: 9px;
    text-transform: uppercase;
    letter-spacing: 0.18em;
    color: var(--hexed-muted);
  }

  .hexed-preview-btn {
    border: none;
    background: var(--hexed-orange);
    color: #ffffff;
    border-radius: 6px;
    padding: 6px 10px;
    font-size: 10px;
    font-weight: 600;
  }

  .hexed-preview-card {
    border: 1px solid var(--hexed-rule);
    border-radius: 10px;
    padding: 10px;
    background: var(--hexed-surface);
    position: relative;
  }

  .hexed-preview-card:after {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    pointer-events: none;
    background:
      linear-gradient(var(--hexed-grid), var(--hexed-grid)) left top / 10px 1px no-repeat,
      linear-gradient(var(--hexed-grid), var(--hexed-grid)) left top / 1px 10px no-repeat,
      linear-gradient(var(--hexed-grid), var(--hexed-grid)) right top / 10px 1px no-repeat,
      linear-gradient(var(--hexed-grid), var(--hexed-grid)) right top / 1px 10px no-repeat,
      linear-gradient(var(--hexed-grid), var(--hexed-grid)) left bottom / 10px 1px no-repeat,
      linear-gradient(var(--hexed-grid), var(--hexed-grid)) left bottom / 1px 10px no-repeat,
      linear-gradient(var(--hexed-grid), var(--hexed-grid)) right bottom / 10px 1px no-repeat,
      linear-gradient(var(--hexed-grid), var(--hexed-grid)) right bottom / 1px 10px no-repeat;
    opacity: 0.7;
  }

  .hexed-preview-card-title {
    font-size: 12px;
    font-weight: 600;
    margin-bottom: 6px;
  }

  .hexed-preview-card-desc {
    font-size: 10px;
    color: var(--hexed-muted);
  }

  .hexed-preview-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
  }

  .hexed-preview-badge {
    padding: 3px 8px;
    border-radius: 999px;
    background: rgba(255, 106, 43, 0.15);
    color: var(--hexed-orange);
    font-size: 9px;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  .hexed-preview-agent {
    font-family: 'DM Mono', 'SFMono-Regular', Menlo, monospace;
    font-size: 9px;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--hexed-muted);
  }

  @keyframes hexed-preview-drift {
    0% {
      background-position: 0 0, 0 0;
    }
    100% {
      background-position: 44px 44px, 44px 44px;
    }
  }
`;

export function PreviewComponent() {
  return (
    <>
      <style>{previewStyles}</style>
      <div className="hexed-preview">
        <div className="hexed-preview-grid"></div>
        <div className="hexed-preview-content">
          <div className="hexed-preview-header">
            <div>
              <div className="hexed-preview-brand">Hex Editorial</div>
              <div className="hexed-preview-label">Agent ledger</div>
            </div>
            <button className="hexed-preview-btn">Book</button>
          </div>
          <div className="hexed-preview-card">
            <div className="hexed-preview-row">
              <div>
                <div className="hexed-preview-card-title">Surface change detected</div>
                <div className="hexed-preview-card-desc">Agent Zeta confirmed new endpoint</div>
              </div>
              <span className="hexed-preview-badge">Active</span>
            </div>
          </div>
          <div className="hexed-preview-card">
            <div className="hexed-preview-row">
              <div>
                <div className="hexed-preview-card-title">Critical findings</div>
                <div className="hexed-preview-card-desc">3 open items in production</div>
              </div>
              <span className="hexed-preview-agent">PR-07 ▮</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
