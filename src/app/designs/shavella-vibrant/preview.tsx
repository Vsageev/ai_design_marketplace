import React from 'react';

export const metadata = {
  id: 'shavella-vibrant',
  name: 'Shavella Vibrant',
  description: 'Bold street food design with hand-drawn illustrations, vibrant colors, and energetic typography for modern food brands.',
  tags: ['Food', 'Bold', 'Colorful', 'Street Food'],
};

const previewStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;500;600&display=swap');

  .svp-preview {
    --night-black: #000000;
    --cream-beige: #F5E6C8;
    --hot-pink: #E84B8A;
    --cheese-orange: #E67E22;
    --tomato-red: #E53935;
    --fresh-green: #27AE60;
    --pure-white: #FFFFFF;
    --deep-black: #1A1A1A;

    font-family: 'Inter', -apple-system, sans-serif;
    background: var(--cream-beige);
    padding: 12px;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .svp-header {
    background: var(--night-black);
    border-radius: 12px;
    padding: 14px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .svp-logo {
    font-family: 'Bebas Neue', Impact, sans-serif;
    font-size: 18px;
    color: var(--pure-white);
    text-transform: uppercase;
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .svp-logo-icon {
    width: 24px;
    height: 24px;
    background: var(--hot-pink);
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
  }

  .svp-btn {
    background: var(--tomato-red);
    color: var(--pure-white);
    border: none;
    border-radius: 6px;
    padding: 6px 12px;
    font-family: 'Bebas Neue', Impact, sans-serif;
    font-size: 12px;
    text-transform: uppercase;
  }

  .svp-card {
    background: var(--pure-white);
    border: 2px solid var(--deep-black);
    border-radius: 12px;
    padding: 12px;
    position: relative;
    flex: 1;
  }

  .svp-price-badge {
    position: absolute;
    top: 8px;
    right: 8px;
    background: var(--cheese-orange);
    color: var(--pure-white);
    padding: 4px 10px;
    border-radius: 12px;
    font-family: 'Bebas Neue', Impact, sans-serif;
    font-size: 14px;
    transform: rotate(-10deg);
  }

  .svp-card-title {
    font-family: 'Bebas Neue', Impact, sans-serif;
    font-size: 20px;
    text-transform: uppercase;
    color: var(--deep-black);
    margin-bottom: 4px;
    padding-right: 50px;
  }

  .svp-card-desc {
    font-size: 11px;
    color: #666;
    margin-bottom: 10px;
  }

  .svp-tags {
    display: flex;
    gap: 6px;
  }

  .svp-tag {
    padding: 3px 8px;
    border-radius: 10px;
    font-size: 10px;
    font-weight: 600;
    text-transform: uppercase;
  }

  .svp-tag-popular {
    background: rgba(232, 75, 138, 0.15);
    color: var(--hot-pink);
  }

  .svp-tag-spicy {
    background: rgba(229, 57, 53, 0.15);
    color: var(--tomato-red);
  }

  .svp-footer {
    display: flex;
    gap: 8px;
  }

  .svp-stat {
    flex: 1;
    background: var(--pure-white);
    border: 2px solid var(--deep-black);
    border-radius: 8px;
    padding: 8px;
    text-align: center;
  }

  .svp-stat-value {
    font-family: 'Bebas Neue', Impact, sans-serif;
    font-size: 18px;
    color: var(--cheese-orange);
  }

  .svp-stat-label {
    font-size: 9px;
    color: #666;
    text-transform: uppercase;
  }
`;

export function PreviewComponent() {
  return (
    <>
      <style>{previewStyles}</style>
      <div className="svp-preview">
        <div className="svp-header">
          <div className="svp-logo">
            <span className="svp-logo-icon">🌯</span>
            Shavella
          </div>
          <button className="svp-btn">Order</button>
        </div>

        <div className="svp-card">
          <span className="svp-price-badge">360</span>
          <h3 className="svp-card-title">Mac-N-Cheese</h3>
          <p className="svp-card-desc">Chicken, cheese, tomatoes, spicy sauce</p>
          <div className="svp-tags">
            <span className="svp-tag svp-tag-popular">Popular</span>
            <span className="svp-tag svp-tag-spicy">Spicy</span>
          </div>
        </div>

        <div className="svp-footer">
          <div className="svp-stat">
            <div className="svp-stat-value">1,247</div>
            <div className="svp-stat-label">Orders</div>
          </div>
          <div className="svp-stat">
            <div className="svp-stat-value">4.9</div>
            <div className="svp-stat-label">Rating</div>
          </div>
        </div>
      </div>
    </>
  );
}
