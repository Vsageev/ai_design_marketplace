'use client';

import React, { useEffect } from 'react';

const cssStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@500;600;700&display=swap');

  .srg-root {
    --bg: #f3f0ea;
    --card: #ffffff;
    --ink: #131217;
    --muted: #5c5869;
    --accent: #ff6f3d;

    font-family: 'Syne', sans-serif;
    background: radial-gradient(900px 520px at 90% -20%, rgba(255, 111, 61, 0.18), transparent 60%),
      var(--bg);
    color: var(--ink);
    min-height: 100vh;
    padding: 56px 24px 80px;
  }

  .srg-container {
    max-width: 1100px;
    margin: 0 auto;
  }

  .srg-header {
    display: grid;
    gap: 10px;
    margin-bottom: 32px;
  }

  .srg-header h1 {
    margin: 0;
    font-size: 38px;
    letter-spacing: -0.02em;
  }

  .srg-header p {
    margin: 0;
    color: var(--muted);
    max-width: 560px;
    line-height: 1.6;
  }

  .srg-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 18px;
  }

  .srg-card {
    background: var(--card);
    border-radius: 18px;
    padding: 20px;
    border: 1px solid rgba(19, 18, 23, 0.08);
    box-shadow: 0 12px 24px rgba(19, 18, 23, 0.08);
    opacity: 0;
    transform: translateY(24px) scale(0.98);
    transition: opacity 500ms ease, transform 500ms ease;
    transition-delay: var(--delay, 0ms);
  }

  .srg-card.is-visible {
    opacity: 1;
    transform: translateY(0) scale(1);
  }

  .srg-card h3 {
    margin: 0 0 8px;
    font-size: 18px;
  }

  .srg-card p {
    margin: 0;
    color: var(--muted);
    font-size: 13px;
    line-height: 1.5;
  }

  .srg-tag {
    display: inline-flex;
    margin-top: 12px;
    padding: 4px 10px;
    border-radius: 999px;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.03em;
    color: var(--accent);
    background: rgba(255, 111, 61, 0.16);
  }

  @media (max-width: 900px) {
    .srg-grid {
      grid-template-columns: 1fr;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .srg-card {
      transition: none;
      opacity: 1;
      transform: none;
    }
  }
`;

export default function StaggeredRevealGridPage() {
  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return;

    const cards = Array.from(document.querySelectorAll<HTMLElement>('.srg-card'));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{cssStyles}</style>
      <section className="srg-root">
        <div className="srg-container">
          <div className="srg-header">
            <h1>Staggered Reveal Grid</h1>
            <p>Items appear in a calm cascade as they enter the viewport.</p>
          </div>

          <div className="srg-grid">
            {['Asset Score', 'Signal Library', 'Replay Trail', 'Cluster Map', 'Coverage Lens', 'Response Queue'].map(
              (title, index) => (
                <article className="srg-card" key={title} style={{ '--delay': `${index * 80}ms` } as React.CSSProperties}>
                  <h3>{title}</h3>
                  <p>Scroll to trigger the staggered reveal animation.</p>
                  <span className="srg-tag">Live</span>
                </article>
              )
            )}
          </div>
        </div>
      </section>
    </>
  );
}
