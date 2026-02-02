import React from 'react';

export const metadata = {
  id: 'bold-street-food',
  name: 'Bold Street Food',
  description: 'High-contrast design with bold condensed typography, vibrant pink/orange accents, and urban street food aesthetic.',
  tags: ['Dark', 'Bold', 'Street Food', 'Urban'],
};

const previewStyles = `
  .bsf-preview {
    --bg-primary: #000000;
    --bg-card: #141414;
    --border-subtle: rgba(255, 255, 255, 0.1);
    --text-primary: #FFFFFF;
    --text-secondary: rgba(255, 255, 255, 0.75);
    --text-tertiary: rgba(255, 255, 255, 0.5);
    --accent-pink: #E84B8A;
    --accent-red: #E63946;

    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    background: var(--bg-primary);
    padding: 16px;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .bsf-preview-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 12px;
    border-bottom: 1px solid var(--border-subtle);
  }

  .bsf-preview-logo {
    font-family: 'Oswald', 'Impact', sans-serif;
    font-size: 16px;
    font-weight: 700;
    color: var(--text-primary);
    text-transform: uppercase;
    letter-spacing: 0.02em;
  }

  .bsf-preview-btn {
    background: var(--accent-pink);
    color: var(--text-primary);
    border: none;
    padding: 6px 12px;
    font-family: 'Oswald', sans-serif;
    font-size: 10px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .bsf-preview-menu-item {
    display: flex;
    align-items: baseline;
    gap: 8px;
  }

  .bsf-preview-item-name {
    font-family: 'Oswald', 'Impact', sans-serif;
    font-size: 12px;
    font-weight: 500;
    color: var(--text-primary);
    text-transform: uppercase;
    white-space: nowrap;
  }

  .bsf-preview-dots {
    flex: 1;
    border-bottom: 1px dotted var(--text-tertiary);
    min-width: 20px;
  }

  .bsf-preview-price {
    font-family: 'Oswald', sans-serif;
    font-size: 12px;
    font-weight: 700;
    color: var(--text-primary);
  }

  .bsf-preview-badge {
    background: var(--accent-pink);
    color: white;
    font-family: 'Oswald', sans-serif;
    font-size: 8px;
    font-weight: 600;
    padding: 2px 5px;
    text-transform: uppercase;
    transform: rotate(-3deg);
    display: inline-block;
    margin-right: 6px;
  }

  .bsf-preview-card {
    background: var(--bg-card);
    border: 1px solid var(--border-subtle);
    padding: 12px;
  }

  .bsf-preview-card-title {
    font-family: 'Oswald', 'Impact', sans-serif;
    font-size: 14px;
    font-weight: 600;
    color: var(--text-primary);
    text-transform: uppercase;
    margin-bottom: 4px;
  }

  .bsf-preview-card-desc {
    font-size: 10px;
    color: var(--text-tertiary);
    margin-bottom: 8px;
  }

  .bsf-preview-price-tag {
    background: var(--accent-red);
    color: white;
    font-family: 'Oswald', sans-serif;
    font-size: 11px;
    font-weight: 700;
    padding: 3px 8px;
    display: inline-block;
    transform: rotate(-2deg);
  }

  .bsf-preview-stats {
    display: flex;
    gap: 8px;
  }

  .bsf-preview-stat {
    flex: 1;
    background: var(--bg-card);
    border: 1px solid var(--border-subtle);
    padding: 10px;
    text-align: center;
  }

  .bsf-preview-stat-value {
    font-family: 'Oswald', sans-serif;
    font-size: 16px;
    font-weight: 700;
    color: var(--text-primary);
  }

  .bsf-preview-stat-label {
    font-size: 9px;
    color: var(--text-tertiary);
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }
`;

export function PreviewComponent() {
  return (
    <>
      <style>{previewStyles}</style>
      <div className="bsf-preview">
        <div className="bsf-preview-header">
          <div className="bsf-preview-logo">Street Food</div>
          <button className="bsf-preview-btn">Order</button>
        </div>

        <div className="bsf-preview-menu-item">
          <span className="bsf-preview-badge">New</span>
          <span className="bsf-preview-item-name">Mac-N-Cheese</span>
          <span className="bsf-preview-dots"></span>
          <span className="bsf-preview-price">360</span>
        </div>

        <div className="bsf-preview-menu-item">
          <span className="bsf-preview-item-name">Classic Wrap</span>
          <span className="bsf-preview-dots"></span>
          <span className="bsf-preview-price">260</span>
        </div>

        <div className="bsf-preview-stats">
          <div className="bsf-preview-stat">
            <div className="bsf-preview-stat-value">247</div>
            <div className="bsf-preview-stat-label">Orders</div>
          </div>
          <div className="bsf-preview-stat">
            <div className="bsf-preview-stat-value">4.9</div>
            <div className="bsf-preview-stat-label">Rating</div>
          </div>
        </div>
      </div>
    </>
  );
}
