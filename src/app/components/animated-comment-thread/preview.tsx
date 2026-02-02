import React from 'react';

export const metadata = {
  id: 'animated-comment-thread',
  name: 'Animated Comment Thread',
  description: 'A lively comment module with reply rails, status chips, and subtle motion for new activity.',
  tags: ['Component', 'Comments', 'Motion', 'UI'],
};

const previewStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600&display=swap');

  .act-preview {
    --surface: #F8F6F2;
    --card: #FFFFFF;
    --ink: #1F1B16;
    --muted: #6E625A;
    --accent: #FF6B4A;
    --accent-soft: rgba(255, 107, 74, 0.15);

    font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
    background: linear-gradient(180deg, #F8F6F2 0%, #EFE9E1 100%);
    height: 100%;
    padding: 14px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .act-preview-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: var(--muted);
  }

  .act-preview-chip {
    font-size: 10px;
    font-weight: 600;
    color: var(--accent);
    background: var(--accent-soft);
    padding: 3px 6px;
    border-radius: 999px;
  }

  .act-preview-card {
    background: var(--card);
    border-radius: 12px;
    padding: 10px;
    box-shadow: 0 10px 20px rgba(31, 27, 22, 0.12);
  }

  .act-preview-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
  }

  .act-preview-author {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 12px;
    font-weight: 600;
    color: var(--ink);
  }

  .act-preview-avatar {
    width: 22px;
    height: 22px;
    border-radius: 8px;
    background: linear-gradient(135deg, #FFCAB0, #FF6B4A);
  }

  .act-preview-text {
    font-size: 11px;
    color: var(--muted);
    margin: 6px 0;
    line-height: 1.4;
  }

  .act-preview-actions {
    display: flex;
    gap: 6px;
  }

  .act-preview-action {
    font-size: 9px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    color: var(--muted);
    border: 1px solid rgba(31, 27, 22, 0.16);
    border-radius: 999px;
    padding: 3px 6px;
  }
`;

export function PreviewComponent() {
  return (
    <>
      <style>{previewStyles}</style>
      <div className="act-preview">
        <div className="act-preview-header">
          Comment Thread
          <span className="act-preview-chip">New</span>
        </div>
        <div className="act-preview-card">
          <div className="act-preview-row">
            <div className="act-preview-author">
              <div className="act-preview-avatar"></div>
              Lila Monroe
            </div>
            <span className="act-preview-chip">2m</span>
          </div>
          <div className="act-preview-text">
            The reply indentation could be tightened a bit.
          </div>
          <div className="act-preview-actions">
            <span className="act-preview-action">Reply</span>
            <span className="act-preview-action">Resolve</span>
          </div>
        </div>
      </div>
    </>
  );
}
