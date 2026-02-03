import React from 'react';

export const metadata = {
  id: 'x-low',
  name: 'X-Low',
  description: 'A bright, scan-first social dashboard with pill tabs, ringed avatars, and hairline rules.',
  tags: ['Social UI', 'Minimal', 'Timeline'],
};

const previewStyles = `
  .xlow-preview {
    height: 100%;
    background: #ffffff;
    font-family: 'Plus Jakarta Sans', 'SF Pro Text', 'Segoe UI', sans-serif;
    color: #0f1419;
    padding: 16px;
    position: relative;
    overflow: hidden;
  }

  .xlow-preview::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(29, 155, 240, 0.08), transparent 55%);
    pointer-events: none;
  }

  .xlow-preview-card {
    border: 1px solid #e6ecf0;
    border-radius: 14px;
    padding: 14px;
    background: #ffffff;
    box-shadow: 0 8px 24px rgba(15, 20, 25, 0.08);
    position: relative;
    z-index: 1;
    transition: transform 180ms cubic-bezier(0.2, 0.8, 0.2, 1);
  }

  .xlow-preview-card:hover {
    transform: translateY(-3px);
  }

  .xlow-preview-ring {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 2px solid #e8f4fd;
    display: grid;
    place-items: center;
    color: #1d9bf0;
    font-weight: 700;
    font-size: 11px;
  }

  .xlow-preview-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 12px;
  }

  .xlow-preview-title {
    font-size: 16px;
    font-weight: 700;
  }

  .xlow-preview-tabs {
    display: flex;
    gap: 12px;
    margin-bottom: 10px;
  }

  .xlow-preview-tab {
    font-size: 12px;
    font-weight: 600;
    color: #536471;
    position: relative;
    padding-bottom: 6px;
  }

  .xlow-preview-tab.active {
    color: #0f1419;
  }

  .xlow-preview-tab.active::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    background: #1d9bf0;
    border-radius: 999px;
  }

  .xlow-preview-row {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 0;
    border-top: 1px solid #e6ecf0;
  }

  .xlow-preview-row:first-of-type {
    border-top: none;
  }

  .xlow-preview-meta {
    font-size: 12px;
    color: #536471;
  }

  .xlow-preview-btn {
    margin-top: 10px;
    width: 100%;
    border: none;
    border-radius: 999px;
    padding: 8px 12px;
    background: #1d9bf0;
    color: #ffffff;
    font-size: 12px;
    font-weight: 600;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: background 180ms cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 180ms cubic-bezier(0.2, 0.8, 0.2, 1);
  }

  .xlow-preview-btn::after {
    content: '';
    position: absolute;
    inset: 3px;
    border-radius: inherit;
    border: 1px solid rgba(255, 255, 255, 0.5);
    opacity: 0;
    transition: opacity 180ms cubic-bezier(0.2, 0.8, 0.2, 1);
  }

  .xlow-preview-btn:hover {
    background: #1482cc;
    box-shadow: 0 0 0 5px rgba(29, 155, 240, 0.15);
  }

  .xlow-preview-btn:hover::after {
    opacity: 1;
  }
`;

export function PreviewComponent() {
  return (
    <>
      <style>{previewStyles}</style>
      <div className="xlow-preview">
        <div className="xlow-preview-card">
          <div className="xlow-preview-header">
            <div className="xlow-preview-title">Notifications</div>
            <div className="xlow-preview-ring">XL</div>
          </div>
          <div className="xlow-preview-tabs">
            <div className="xlow-preview-tab active">All</div>
            <div className="xlow-preview-tab">Mentions</div>
            <div className="xlow-preview-tab">Verified</div>
          </div>
          <div className="xlow-preview-row">
            <div className="xlow-preview-ring">JS</div>
            <div>
              <div style={{ fontSize: '12px', fontWeight: 600 }}>Liked your reply</div>
              <div className="xlow-preview-meta">4m · Ringed alert</div>
            </div>
          </div>
          <div className="xlow-preview-row">
            <div className="xlow-preview-ring">AK</div>
            <div>
              <div style={{ fontSize: '12px', fontWeight: 600 }}>Mentioned you</div>
              <div className="xlow-preview-meta">12m · Mentions</div>
            </div>
          </div>
          <button className="xlow-preview-btn">Post update</button>
        </div>
      </div>
    </>
  );
}
