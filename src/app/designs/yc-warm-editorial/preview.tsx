import React from 'react';

export const metadata = {
  id: 'yc-warm-editorial',
  name: 'YC Warm Editorial',
  description: 'Editorial elegance with serif italics, warm neutrals, and confident, understated CTAs.',
  tags: ['Editorial', 'Warm', 'Serif', 'Minimal'],
};

const previewStyles = `
  .yce-preview {
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

  .yce-preview-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 12px;
  }

  .yce-preview-logo {
    font-family: 'Source Serif 4', Georgia, serif;
    font-style: italic;
    font-weight: 500;
  }

  .yce-preview-btn {
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

  .yce-preview-card {
    background: var(--pure-white);
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    padding: 12px;
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .yce-preview-card-title {
    font-family: 'Source Serif 4', Georgia, serif;
    font-style: italic;
    font-weight: 500;
    font-size: 12px;
  }

  .yce-preview-card-text {
    font-size: 11px;
    color: var(--medium-gray);
  }

  .yce-preview-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    font-size: 10px;
  }

  .yce-preview-badge {
    background: var(--yc-orange);
    color: var(--pure-white);
    border-radius: 9999px;
    padding: 2px 8px;
    font-size: 9px;
    letter-spacing: 0.04em;
    text-transform: uppercase;
  }
`;

export function PreviewComponent() {
  return (
    <>
      <style>{previewStyles}</style>
      <div className="yce-preview">
        <div className="yce-preview-header">
          <span className="yce-preview-logo">YC Editorial</span>
          <button className="yce-preview-btn">Apply</button>
        </div>
        <div className="yce-preview-card">
          <div className="yce-preview-card-title">Make something people want.</div>
          <div className="yce-preview-card-text">Warm neutrals, serif italics, and calm structure.</div>
          <div className="yce-preview-row">
            <span>Founder stories</span>
            <span className="yce-preview-badge">Active</span>
          </div>
        </div>
      </div>
    </>
  );
}
