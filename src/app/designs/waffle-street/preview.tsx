import React from 'react';

export const metadata = {
  id: 'waffle-street',
  name: 'Waffle Street',
  description: 'Bold street food branding with warm colors, chunky typography, and playful illustrated elements.',
  tags: ['Street Food', 'Bold', 'Playful', 'Illustrated'],
};

const previewStyles = `
  .ws-preview {
    --cream: #F5E6C8;
    --orange: #E27B30;
    --black: #1A1A1A;
    --red: #E53935;
    --yellow: #F5B041;
    --blue: #9ED6EE;

    font-family: 'Inter', -apple-system, sans-serif;
    background: var(--cream);
    padding: 16px;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 12px;
    position: relative;
    overflow: hidden;
  }

  .ws-preview-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .ws-preview-logo {
    font-family: 'Oswald', 'Impact', sans-serif;
    font-size: 20px;
    font-weight: 700;
    color: var(--black);
    text-transform: uppercase;
    letter-spacing: -0.02em;
  }

  .ws-preview-btn {
    background: var(--red);
    color: white;
    border: none;
    border-radius: 16px;
    padding: 6px 14px;
    font-size: 10px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .ws-preview-card {
    background: white;
    border: 2px solid var(--black);
    border-radius: 12px;
    padding: 14px;
    box-shadow: 3px 3px 0 var(--black);
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .ws-preview-card-top {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  .ws-preview-title {
    font-family: 'Oswald', 'Impact', sans-serif;
    font-size: 22px;
    font-weight: 700;
    color: var(--orange);
    text-transform: uppercase;
    line-height: 1.1;
  }

  .ws-preview-price {
    background: var(--yellow);
    color: var(--black);
    border: 2px solid var(--black);
    border-radius: 6px;
    padding: 4px 8px;
    font-size: 12px;
    font-weight: 700;
    transform: rotate(3deg);
  }

  .ws-preview-desc {
    font-size: 11px;
    color: #666;
    line-height: 1.4;
  }

  .ws-preview-tags {
    display: flex;
    gap: 6px;
    margin-top: auto;
  }

  .ws-preview-tag {
    background: var(--blue);
    color: var(--black);
    border-radius: 10px;
    padding: 3px 8px;
    font-size: 9px;
    font-weight: 600;
    text-transform: uppercase;
  }

  .ws-preview-tag.hot {
    background: var(--red);
    color: white;
  }

  .ws-preview-deco {
    position: absolute;
    width: 8px;
    height: 8px;
    background: var(--orange);
    border-radius: 50%;
  }

  .ws-preview-deco-1 { top: 10px; right: 60px; }
  .ws-preview-deco-2 { bottom: 40px; left: 20px; width: 6px; height: 6px; background: var(--red); }
  .ws-preview-deco-3 { top: 50px; left: 10px; width: 5px; height: 5px; background: var(--yellow); }
`;

export function PreviewComponent() {
  return (
    <>
      <style>{previewStyles}</style>
      <div className="ws-preview">
        <div className="ws-preview-deco ws-preview-deco-1"></div>
        <div className="ws-preview-deco ws-preview-deco-2"></div>
        <div className="ws-preview-deco ws-preview-deco-3"></div>

        <div className="ws-preview-header">
          <div className="ws-preview-logo">Waffle St.</div>
          <button className="ws-preview-btn">Order Now</button>
        </div>

        <div className="ws-preview-card">
          <div className="ws-preview-card-top">
            <div className="ws-preview-title">Mac n<br/>Cheese</div>
            <div className="ws-preview-price">$8.50</div>
          </div>
          <div className="ws-preview-desc">
            Crispy waffle loaded with creamy mac, topped with crispy bacon bits
          </div>
          <div className="ws-preview-tags">
            <span className="ws-preview-tag">Cheesy</span>
            <span className="ws-preview-tag hot">Popular</span>
          </div>
        </div>
      </div>
    </>
  );
}
