import React from 'react';

export const metadata = {
  id: 'shavell-pop',
  name: 'Shavell Pop',
  description: 'Street-food posters meet modern UI: bold mono headlines, sticker badges, and cheddar-bright accents.',
  tags: ['Playful', 'High Contrast', 'Food'],
};

const previewStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Rubik+Mono+One&family=Nunito+Sans:wght@400;700&display=swap');

  .sp-preview {
    --sp-midnight: #0B0B0B;
    --sp-cream: #F7D2A6;
    --sp-cloud: #F5F5F2;
    --sp-cheddar: #F5A623;
    --sp-tangerine: #F2721E;
    --sp-bubblegum: #FF5AA5;
    --sp-ink: #101010;
    --sp-paper: #FFFFFF;

    font-family: 'Nunito Sans', sans-serif;
    background: var(--sp-cream);
    height: 100%;
    padding: 14px;
    display: grid;
    gap: 10px;
    position: relative;
    overflow: hidden;
  }

  .sp-preview::before {
    content: '';
    position: absolute;
    inset: 0;
    background:
      repeating-linear-gradient(
        90deg,
        #C9B08E,
        #C9B08E 1px,
        transparent 1px,
        transparent 10px
      );
    pointer-events: none;
  }

  .sp-preview-header {
    background: var(--sp-midnight);
    color: var(--sp-paper);
    padding: 10px 12px;
    border-radius: 12px;
    border: 2px solid var(--sp-ink);
    font-family: 'Rubik Mono One', sans-serif;
    font-size: 16px;
    text-transform: uppercase;
    position: relative;
    z-index: 1;
  }

  .sp-preview-card {
    background: var(--sp-cloud);
    border: 2px solid var(--sp-ink);
    border-radius: 12px;
    padding: 10px;
    display: grid;
    gap: 6px;
    position: relative;
    z-index: 1;
  }

  .sp-preview-title {
    font-family: 'Rubik Mono One', sans-serif;
    font-size: 12px;
    text-transform: uppercase;
  }

  .sp-preview-tag {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: var(--sp-bubblegum);
    color: var(--sp-paper);
    border-radius: 999px;
    padding: 3px 8px;
    font-size: 9px;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    border: 2px solid var(--sp-ink);
    width: fit-content;
  }

  .sp-preview-row {
    display: flex;
    gap: 8px;
    align-items: center;
  }

  .sp-preview-sticker {
    position: absolute;
    right: -6px;
    top: -10px;
    background: var(--sp-bubblegum);
    color: var(--sp-paper);
    border: 2px solid var(--sp-ink);
    border-radius: 999px;
    padding: 4px 8px;
    font-size: 8px;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    transform: rotate(8deg);
    box-shadow: 3px 3px 0 var(--sp-ink);
  }

  .sp-preview-dots {
    flex: 1;
    border-bottom: 2px solid var(--sp-ink);
    margin: 0 6px;
  }

  .sp-preview-btn {
    background: var(--sp-cheddar);
    border: 2px solid var(--sp-ink);
    border-radius: 10px;
    padding: 6px 10px;
    font-size: 10px;
    font-weight: 700;
    text-transform: uppercase;
  }

  .sp-preview-btn.secondary {
    background: var(--sp-tangerine);
    color: var(--sp-ink);
  }
`;

export function PreviewComponent() {
  return (
    <>
      <style>{previewStyles}</style>
      <div className="sp-preview">
        <div className="sp-preview-header">Shavell Pop</div>
        <div className="sp-preview-card">
          <span className="sp-preview-sticker">399р</span>
          <div className="sp-preview-row">
            <div className="sp-preview-title">Cheddar Melt</div>
            <span className="sp-preview-dots" />
            <span className="sp-preview-tag">New</span>
          </div>
          <div style={{ fontSize: '10px' }}>Crispy chicken, cheese drip, tangy sauce.</div>
          <div className="sp-preview-row">
            <button className="sp-preview-btn">Order</button>
            <button className="sp-preview-btn secondary">Combo</button>
          </div>
        </div>
      </div>
    </>
  );
}
