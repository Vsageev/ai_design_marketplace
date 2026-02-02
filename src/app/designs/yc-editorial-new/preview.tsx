import React from 'react';

export const metadata = {
  id: 'yc-editorial-new',
  name: 'YC Editorial New',
  description: 'Refined editorial design with warm beige background, italic serif headlines, and sophisticated restraint.',
  tags: ['Editorial', 'Warm', 'Serif', 'Professional'],
};

const previewStyles = `
  .ycen-preview {
    --beige-light: #f5f5ee;
    --deep-charcoal: #16140f;
    --pure-black: #000000;
    --pure-white: #ffffff;
    --medium-gray: #6b7280;
    --yc-orange: #f26522;

    font-family: 'Outfit', -apple-system, BlinkMacSystemFont, sans-serif;
    background: var(--beige-light);
    color: var(--deep-charcoal);
    height: 100%;
    padding: 14px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .ycen-preview-nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 11px;
    padding-bottom: 8px;
    border-bottom: 1px solid rgba(22, 20, 15, 0.1);
  }

  .ycen-preview-logo {
    width: 20px;
    height: 20px;
    background: linear-gradient(135deg, var(--yc-orange), #ff8c42);
    border-radius: 4px;
  }

  .ycen-preview-links {
    display: flex;
    gap: 12px;
    font-weight: 300;
    color: var(--medium-gray);
  }

  .ycen-preview-btn {
    background: var(--pure-black);
    color: var(--beige-light);
    border: none;
    border-radius: 9999px;
    padding: 4px 10px;
    font-size: 10px;
    font-family: 'Source Serif 4', Georgia, serif;
    font-style: italic;
    letter-spacing: 0.02em;
  }

  .ycen-preview-hero {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 6px;
  }

  .ycen-preview-title {
    font-family: 'Source Serif 4', Georgia, serif;
    font-style: italic;
    font-weight: 500;
    font-size: 16px;
    line-height: 1.1;
    letter-spacing: -0.02em;
  }

  .ycen-preview-subtitle {
    font-size: 10px;
    color: var(--medium-gray);
    font-weight: 300;
    line-height: 1.5;
  }

  .ycen-preview-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 8px;
    border-top: 1px solid rgba(22, 20, 15, 0.08);
    font-size: 9px;
    color: var(--medium-gray);
  }

  .ycen-preview-badge {
    background: var(--yc-orange);
    color: var(--pure-white);
    border-radius: 9999px;
    padding: 2px 6px;
    font-size: 8px;
    letter-spacing: 0.04em;
    text-transform: uppercase;
  }
`;

export function PreviewComponent() {
  return (
    <>
      <style>{previewStyles}</style>
      <div className="ycen-preview">
        <div className="ycen-preview-nav">
          <div className="ycen-preview-logo" />
          <div className="ycen-preview-links">
            <span>About</span>
            <span>Companies</span>
            <span>Library</span>
          </div>
          <button className="ycen-preview-btn">Apply</button>
        </div>
        <div className="ycen-preview-hero">
          <div className="ycen-preview-title">Make something people want.</div>
          <div className="ycen-preview-subtitle">
            Y Combinator invests in startups at the earliest stages and helps them succeed.
          </div>
        </div>
        <div className="ycen-preview-footer">
          <span>Spring 2026 Batch</span>
          <span className="ycen-preview-badge">Open</span>
        </div>
      </div>
    </>
  );
}
