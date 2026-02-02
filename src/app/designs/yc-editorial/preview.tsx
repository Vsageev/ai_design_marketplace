import React from 'react';

export const metadata = {
  id: 'yc-editorial',
  name: 'YC Editorial',
  description: 'Editorial elegance with serif italics, warm beige palette, and sophisticated typography inspired by Y Combinator.',
  tags: ['Editorial', 'Warm', 'Elegant'],
};

const previewStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Source+Serif+4:ital,opsz,wght@0,8..60,200..900;1,8..60,200..900&family=Outfit:wght@100..900&display=swap');

  .yc-preview {
    --beige-light: #f5f5ee;
    --pure-black: #000000;
    --deep-charcoal: #16140f;
    --medium-gray: #6b7280;
    --yc-orange: #f26522;
    --pure-white: #FFFFFF;

    font-family: 'Outfit', -apple-system, BlinkMacSystemFont, sans-serif;
    background: var(--beige-light);
    padding: 16px;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .yc-preview-header {
    font-family: 'Source Serif 4', Georgia, serif;
    font-size: 18px;
    font-weight: 500;
    font-style: italic;
    letter-spacing: -0.02em;
    color: var(--deep-charcoal);
    line-height: 1.2;
  }

  .yc-preview-subtext {
    font-family: 'Outfit', sans-serif;
    font-size: 11px;
    font-weight: 300;
    color: var(--deep-charcoal);
    line-height: 1.5;
  }

  .yc-preview-card {
    background: var(--pure-white);
    border-radius: 6px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
    overflow: hidden;
    flex: 1;
  }

  .yc-preview-card-accent {
    height: 3px;
    background: var(--yc-orange);
  }

  .yc-preview-card-content {
    padding: 10px;
  }

  .yc-preview-card-title {
    font-family: 'Source Serif 4', Georgia, serif;
    font-size: 12px;
    font-weight: 500;
    font-style: italic;
    color: var(--deep-charcoal);
    margin-bottom: 4px;
  }

  .yc-preview-card-text {
    font-size: 10px;
    font-weight: 300;
    color: var(--medium-gray);
  }

  .yc-preview-input {
    width: 100%;
    border: 1px solid var(--medium-gray);
    border-radius: 6px;
    padding: 8px 10px;
    font-family: 'Outfit', sans-serif;
    font-size: 11px;
    font-weight: 300;
    background: var(--pure-white);
    color: var(--deep-charcoal);
  }

  .yc-preview-input::placeholder {
    color: var(--medium-gray);
  }

  .yc-preview-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 32px;
    padding: 0 16px;
    background: var(--pure-black);
    color: var(--beige-light);
    font-family: 'Source Serif 4', Georgia, serif;
    font-size: 11px;
    font-weight: 400;
    font-style: italic;
    border-radius: 9999px;
    border: none;
    cursor: pointer;
    transition: opacity 200ms ease;
  }

  .yc-preview-btn:hover {
    opacity: 0.8;
  }

  .yc-preview-badge {
    display: inline-block;
    padding: 2px 8px;
    border-radius: 9999px;
    font-size: 9px;
    font-weight: 500;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    background: var(--yc-orange);
    color: var(--pure-white);
  }
`;

export function PreviewComponent() {
  return (
    <>
      <style>{previewStyles}</style>
      <div className="yc-preview">
        <div className="yc-preview-header">Make something people want.</div>
        <div className="yc-preview-subtext">
          Editorial elegance with warm neutrals.
        </div>
        <div className="yc-preview-card">
          <div className="yc-preview-card-accent" />
          <div className="yc-preview-card-content">
            <span className="yc-preview-badge">Featured</span>
            <div className="yc-preview-card-title" style={{ marginTop: '6px' }}>Startup School</div>
            <div className="yc-preview-card-text">Free resources for founders</div>
          </div>
        </div>
        <input
          className="yc-preview-input"
          placeholder="Enter your email..."
          readOnly
        />
        <button className="yc-preview-btn">Apply Now</button>
      </div>
    </>
  );
}
