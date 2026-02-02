import React from 'react';

const cssStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600&display=swap');

  .act-showcase {
    --surface: #F8F6F2;
    --surface-strong: #EFE9E1;
    --card: #FFFFFF;
    --ink: #1F1B16;
    --muted: #6E625A;
    --accent: #FF6B4A;
    --accent-soft: rgba(255, 107, 74, 0.15);
    --rail: rgba(31, 27, 22, 0.12);
    --success: #16A34A;
    --warning: #F59E0B;
    --info: #2563EB;
    --shadow: 0 10px 30px rgba(31, 27, 22, 0.12);
    --shadow-hover: 0 14px 40px rgba(31, 27, 22, 0.18);

    font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    background: radial-gradient(1200px 600px at 20% -10%, #FFF4E9 0%, transparent 60%),
      linear-gradient(180deg, var(--surface) 0%, var(--surface-strong) 100%);
    color: var(--ink);
    min-height: 100vh;
    padding: 48px 24px 80px;
  }

  .act-container {
    max-width: 1100px;
    margin: 0 auto;
  }

  .act-hero {
    display: grid;
    grid-template-columns: minmax(0, 1.1fr) minmax(0, 0.9fr);
    gap: 32px;
    align-items: center;
    background: var(--card);
    border-radius: 20px;
    padding: 32px;
    box-shadow: var(--shadow);
  }

  .act-hero h1 {
    font-size: 40px;
    letter-spacing: -0.02em;
    margin: 0 0 12px;
  }

  .act-hero p {
    margin: 0 0 18px;
    color: var(--muted);
    line-height: 1.6;
  }

  .act-hero-actions {
    display: flex;
    gap: 12px;
    align-items: center;
    flex-wrap: wrap;
  }

  .act-btn {
    border: none;
    border-radius: 12px;
    padding: 10px 16px;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    cursor: pointer;
    transition: background 160ms ease, color 160ms ease, box-shadow 160ms ease, transform 160ms ease;
  }

  .act-btn-primary {
    background: var(--accent);
    color: #ffffff;
    box-shadow: 0 10px 20px rgba(255, 107, 74, 0.25);
  }

  .act-btn-primary:hover {
    transform: translateY(-1px);
  }

  .act-btn-ghost {
    background: transparent;
    color: var(--ink);
    border: 1px solid rgba(31, 27, 22, 0.2);
  }

  .act-section {
    margin-top: 32px;
    background: var(--card);
    border-radius: 20px;
    padding: 28px;
    box-shadow: var(--shadow);
  }

  .act-section-title {
    font-size: 13px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--muted);
    margin-bottom: 18px;
  }

  .act-thread {
    position: relative;
    padding: 8px 0 8px 8px;
  }

  .act-rail {
    position: absolute;
    left: 16px;
    top: 12px;
    bottom: 12px;
    width: 2px;
    background: var(--rail);
  }

  .act-comment {
    background: var(--card);
    border-radius: 16px;
    padding: 16px 18px;
    box-shadow: 0 12px 28px rgba(31, 27, 22, 0.08);
    margin-left: 32px;
    margin-bottom: 12px;
    transition: transform 180ms ease, box-shadow 180ms ease;
  }

  .act-comment:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-hover);
  }

  .act-comment-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 8px;
  }

  .act-author {
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: 600;
    font-size: 15px;
  }

  .act-avatar {
    width: 32px;
    height: 32px;
    border-radius: 12px;
    background: linear-gradient(135deg, #FFCAB0, #FF6B4A);
  }

  .act-time {
    font-size: 12px;
    color: var(--muted);
    font-weight: 500;
  }

  .act-body {
    font-size: 14px;
    line-height: 1.5;
    margin-bottom: 12px;
  }

  .act-chip {
    display: inline-flex;
    align-items: center;
    padding: 4px 8px;
    border-radius: 999px;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    margin-left: 8px;
  }

  .act-chip-new {
    background: var(--accent-soft);
    color: var(--accent);
  }

  .act-chip-resolved {
    background: rgba(22, 163, 74, 0.12);
    color: var(--success);
  }

  .act-chip-pinned {
    background: rgba(37, 99, 235, 0.12);
    color: var(--info);
    border: 1px solid rgba(37, 99, 235, 0.2);
  }

  .act-actions {
    display: flex;
    gap: 10px;
  }

  .act-action {
    border: 1px solid rgba(31, 27, 22, 0.16);
    background: transparent;
    border-radius: 10px;
    padding: 6px 10px;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: var(--muted);
    cursor: pointer;
    transition: background 160ms ease, color 160ms ease;
  }

  .act-action:hover {
    background: var(--accent-soft);
    color: var(--ink);
  }

  .act-reply {
    margin-left: 56px;
  }

  .act-new {
    animation: actFadeRise 240ms ease-out;
  }

  @keyframes actFadeRise {
    from {
      opacity: 0;
      transform: translateY(8px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .act-composer {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-top: 18px;
    padding-top: 16px;
    border-top: 1px solid rgba(31, 27, 22, 0.08);
  }

  .act-input {
    flex: 1;
    border-radius: 12px;
    border: 1px solid rgba(31, 27, 22, 0.16);
    padding: 12px 14px;
    font-size: 14px;
    font-family: inherit;
  }

  .act-input:focus {
    outline: 2px solid rgba(255, 107, 74, 0.45);
    border-color: rgba(255, 107, 74, 0.35);
  }

  .act-variants {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 16px;
  }

  .act-variant-card {
    background: #FFFDFC;
    border-radius: 16px;
    padding: 16px;
    border: 1px solid rgba(31, 27, 22, 0.08);
  }

  .act-variant-title {
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 10px;
  }

  .act-tokens {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 14px;
  }

  .act-token {
    border-radius: 14px;
    background: #FFFDFC;
    padding: 14px;
    border: 1px solid rgba(31, 27, 22, 0.08);
    font-size: 13px;
    color: var(--muted);
  }

  .act-token strong {
    display: block;
    color: var(--ink);
    margin-bottom: 6px;
  }

  @media (max-width: 900px) {
    .act-hero {
      grid-template-columns: 1fr;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .act-comment,
    .act-btn,
    .act-action {
      transition: none;
    }

    .act-new {
      animation: none;
    }
  }
`;

export default function AnimatedCommentThreadPage() {
  return (
    <>
      <style>{cssStyles}</style>
      <main className="act-showcase">
        <div className="act-container">
          <section className="act-hero">
            <div>
              <h1>Animated Comment Thread</h1>
              <p>
                A conversation module that balances clarity and warmth. New replies feel alive, while
                structure keeps depth readable and action areas intentional.
              </p>
              <div className="act-hero-actions">
                <button className="act-btn act-btn-primary">Add Reply</button>
                <button className="act-btn act-btn-ghost">View Guidelines</button>
              </div>
            </div>
            <div>
              <div className="act-variant-card">
                <div className="act-variant-title">Status Chips</div>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  <span className="act-chip act-chip-new">New</span>
                  <span className="act-chip act-chip-resolved">Resolved</span>
                  <span className="act-chip act-chip-pinned">Pinned</span>
                </div>
              </div>
            </div>
          </section>

          <section className="act-section">
            <div className="act-section-title">Primary Thread</div>
            <div className="act-thread">
              <div className="act-rail"></div>
              <article className="act-comment act-new">
                <div className="act-comment-header">
                  <div className="act-author">
                    <div className="act-avatar"></div>
                    Lila Monroe <span className="act-chip act-chip-new">New</span>
                  </div>
                  <div className="act-time">2 min ago</div>
                </div>
                <div className="act-body">
                  The line spacing reads beautifully, but the reply indentation could be tightened to keep
                  everything above the fold.
                </div>
                <div className="act-actions">
                  <button className="act-action">Reply</button>
                  <button className="act-action">Resolve</button>
                  <button className="act-action">Pin</button>
                </div>
              </article>

              <article className="act-comment act-reply">
                <div className="act-comment-header">
                  <div className="act-author">
                    <div className="act-avatar" style={{ background: 'linear-gradient(135deg, #FFE1B3, #F59E0B)' }}></div>
                    Marco Li
                  </div>
                  <div className="act-time">Just now</div>
                </div>
                <div className="act-body">
                  Agree. I can reduce the indent to 24px and keep the reply rail aligned with the avatar.
                </div>
                <div className="act-actions">
                  <button className="act-action">Reply</button>
                  <button className="act-action">Like</button>
                </div>
              </article>

              <article className="act-comment act-reply" style={{ opacity: 0.7 }}>
                <div className="act-comment-header">
                  <div className="act-author">
                    <div className="act-avatar" style={{ background: 'linear-gradient(135deg, #C7F9CC, #16A34A)' }}></div>
                    Iris Patel <span className="act-chip act-chip-resolved">Resolved</span>
                  </div>
                  <div className="act-time">15 min ago</div>
                </div>
                <div className="act-body">
                  Adjusted the spacing and saved. The new layout keeps the composer's footprint lighter.
                </div>
                <div className="act-actions">
                  <button className="act-action">Reopen</button>
                </div>
              </article>

              <div className="act-composer">
                <div className="act-avatar" style={{ background: 'linear-gradient(135deg, #B8D8FF, #2563EB)' }}></div>
                <input className="act-input" placeholder="Write a reply..." />
                <button className="act-btn act-btn-primary">Send</button>
              </div>
            </div>
          </section>

          <section className="act-section">
            <div className="act-section-title">Variants</div>
            <div className="act-variants">
              <div className="act-variant-card">
                <div className="act-variant-title">Compact</div>
                <div className="act-body" style={{ fontSize: '13px' }}>
                  Use tighter spacing and smaller avatars for high-density threads.
                </div>
              </div>
              <div className="act-variant-card">
                <div className="act-variant-title">Editorial</div>
                <div className="act-body" style={{ fontSize: '14px' }}>
                  Larger type with generous line height for long-form feedback.
                </div>
              </div>
              <div className="act-variant-card">
                <div className="act-variant-title">Status Heavy</div>
                <div className="act-body" style={{ fontSize: '13px' }}>
                  Highlight multiple chips for moderation workflows or triage.
                </div>
              </div>
            </div>
          </section>

          <section className="act-section">
            <div className="act-section-title">Key Tokens</div>
            <div className="act-tokens">
              <div className="act-token"><strong>Surface</strong> #F8F6F2 / #EFE9E1 gradient base</div>
              <div className="act-token"><strong>Accent</strong> #FF6B4A for emphasis and focus</div>
              <div className="act-token"><strong>Typography</strong> 14px body with 1.5 line height</div>
              <div className="act-token"><strong>Motion</strong> 240ms fade-rise for new content</div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
