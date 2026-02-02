import React from 'react';

export const metadata = {
  id: 'shavella-menu',
  name: 'Shavella Menu',
  description: 'Bold urban street food design with angular typography, high contrast, and menu-style layouts.',
  tags: ['Dark', 'Bold', 'Street Food', 'Menu'],
};

const previewStyles = `
  .sm-preview {
    --bg-dark: #0A0A0A;
    --bg-card: #141414;
    --text-primary: #FFFFFF;
    --text-secondary: rgba(255, 255, 255, 0.75);
    --accent-orange: #E87D40;
    --accent-red: #E53935;
    --cream: #F5E6C8;

    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    background: var(--bg-dark);
    padding: 16px;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .sm-preview-header {
    text-align: center;
    padding-bottom: 10px;
    border-bottom: 2px solid rgba(255, 255, 255, 0.1);
  }

  .sm-preview-logo {
    font-size: 20px;
    font-weight: 900;
    color: var(--text-primary);
    letter-spacing: -0.03em;
    text-transform: uppercase;
  }

  .sm-preview-menu {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .sm-preview-category {
    font-size: 11px;
    font-weight: 700;
    color: var(--text-secondary);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: 4px;
  }

  .sm-preview-item {
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .sm-preview-new {
    background: var(--accent-red);
    color: white;
    font-size: 8px;
    font-weight: 700;
    padding: 2px 4px;
    text-transform: uppercase;
  }

  .sm-preview-name {
    font-size: 11px;
    font-weight: 700;
    color: var(--text-primary);
    text-transform: uppercase;
    flex: 1;
  }

  .sm-preview-dots {
    flex: 1;
    border-bottom: 1px dotted rgba(255, 255, 255, 0.3);
    margin: 0 4px;
    min-width: 20px;
  }

  .sm-preview-price {
    font-size: 12px;
    font-weight: 700;
    color: var(--text-primary);
  }

  .sm-preview-cta {
    background: var(--text-primary);
    color: var(--bg-dark);
    border: none;
    padding: 8px 16px;
    font-size: 10px;
    font-weight: 700;
    text-transform: uppercase;
    cursor: pointer;
    text-align: center;
  }

  .sm-preview-tag {
    position: absolute;
    top: 8px;
    right: 8px;
    background: var(--accent-orange);
    color: white;
    font-size: 9px;
    font-weight: 700;
    padding: 3px 6px;
    transform: rotate(-3deg);
  }
`;

export function PreviewComponent() {
  return (
    <>
      <style>{previewStyles}</style>
      <div className="sm-preview">
        <div className="sm-preview-header">
          <div className="sm-preview-logo">Shavella</div>
        </div>

        <div className="sm-preview-menu">
          <div className="sm-preview-category">Specials</div>

          <div className="sm-preview-item">
            <span className="sm-preview-new">New</span>
            <span className="sm-preview-name">Mac-n-Cheese</span>
            <span className="sm-preview-dots"></span>
            <span className="sm-preview-price">360</span>
          </div>

          <div className="sm-preview-item">
            <span className="sm-preview-name">Classic</span>
            <span className="sm-preview-dots"></span>
            <span className="sm-preview-price">260</span>
          </div>

          <div className="sm-preview-item">
            <span className="sm-preview-name">Spicy</span>
            <span className="sm-preview-dots"></span>
            <span className="sm-preview-price">260</span>
          </div>
        </div>

        <button className="sm-preview-cta">Order Now</button>
      </div>
    </>
  );
}
