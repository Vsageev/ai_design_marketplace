'use client';

import React, { useState } from 'react';

// ─── Styles ───────────────────────────────────────────────

const cssStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Geist:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');

  .rm-root {
    --rm-bg: #0a0a0a;
    --rm-card: #141414;
    --rm-card-border: #222;
    --rm-card-hover: #1c1c1c;
    --rm-text: #c8c8c8;
    --rm-text-muted: #666;
    --rm-accent: #d4a853;
    --rm-radius: 14px;
    --rm-gap: 16px;

    font-family: 'Geist', system-ui, sans-serif;
    background: var(--rm-bg);
    color: var(--rm-text);
    min-height: 100vh;
    padding: 0;
    margin: 0;
    overflow-x: hidden;
  }

  .rm-root[data-theme="light"] {
    --rm-bg: #f5f5f0;
    --rm-card: #ffffff;
    --rm-card-border: #e0ddd8;
    --rm-card-hover: #fafaf7;
    --rm-text: #333;
    --rm-text-muted: #888;
    --rm-accent: #b8860b;
  }

  .rm-root[data-theme="light"] .rm-card-quote {
    color: #222;
  }

  .rm-root[data-theme="light"] .rm-card-name {
    color: #222;
  }

  .rm-root[data-theme="light"] .rm-slider {
    background: #ddd;
  }

  .rm-root[data-theme="light"] .rm-slider::-webkit-slider-thumb {
    border-color: #fff;
    box-shadow: 0 1px 4px rgba(0,0,0,0.15);
  }

  .rm-root[data-theme="light"] .rm-slider::-moz-range-thumb {
    border-color: #fff;
    box-shadow: 0 1px 4px rgba(0,0,0,0.15);
  }

  /* ── Marquee container ── */

  .rm-marquee-wrap {
    position: relative;
    padding: 0 24px;
    max-width: 1200px;
    margin: 24px auto 0;
  }

  .rm-marquee {
    display: grid;
    gap: var(--rm-gap);
    overflow: hidden;
    position: relative;
    mask-image: linear-gradient(to bottom,
      transparent 0%,
      black 8%,
      black 92%,
      transparent 100%
    );
    -webkit-mask-image: linear-gradient(to bottom,
      transparent 0%,
      black 8%,
      black 92%,
      transparent 100%
    );
  }

  .rm-col {
    display: flex;
    flex-direction: column;
    gap: var(--rm-gap);
    will-change: transform;
  }

  .rm-col:hover {
    animation-play-state: paused !important;
  }

  .rm-col[data-dir="up"] {
    animation: rm-scroll-up linear infinite;
  }

  .rm-col[data-dir="down"] {
    animation: rm-scroll-down linear infinite;
  }

  @keyframes rm-scroll-up {
    0% { transform: translateY(0); }
    100% { transform: translateY(-50%); }
  }

  @keyframes rm-scroll-down {
    0% { transform: translateY(-50%); }
    100% { transform: translateY(0); }
  }

  @media (prefers-reduced-motion: reduce) {
    .rm-col[data-dir="up"],
    .rm-col[data-dir="down"] {
      animation: none !important;
    }
  }

  /* ── Review card ── */

  .rm-card {
    background: var(--rm-card);
    border: 1px solid var(--rm-card-border);
    border-radius: var(--rm-radius);
    padding: 24px;
    flex-shrink: 0;
    transition: background 0.25s ease, border-color 0.25s ease;
  }

  .rm-col:hover .rm-card {
    cursor: default;
  }

  .rm-card:hover {
    background: var(--rm-card-hover);
    border-color: #333;
  }

  .rm-card-stars {
    color: var(--rm-accent);
    font-size: 13px;
    letter-spacing: 2px;
    margin-bottom: 14px;
  }

  .rm-card-quote {
    font-family: 'Instrument Serif', serif;
    font-size: 17px;
    line-height: 1.55;
    color: #e0e0e0;
    margin: 0 0 18px;
    font-style: normal;
  }

  .rm-card-footer {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .rm-card-avatar {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 14px;
    color: #fff;
  }

  .rm-card-info {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .rm-card-name {
    font-size: 14px;
    font-weight: 600;
    color: #ddd;
  }

  .rm-card-role {
    font-size: 12px;
    color: var(--rm-text-muted);
  }

  /* ── Controls ── */

  .rm-controls {
    max-width: 800px;
    margin: 0 auto;
    padding: 24px 24px 32px;
    display: flex;
    flex-direction: column;
    gap: 28px;
  }

  .rm-controls-title {
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--rm-text-muted);
    padding-bottom: 10px;
    border-bottom: 1px solid var(--rm-card-border);
    margin: 0;
  }

  .rm-sliders {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 24px;
  }

  .rm-slider-group {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .rm-slider-header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }

  .rm-slider-label {
    font-size: 13px;
    font-weight: 500;
    color: var(--rm-text);
  }

  .rm-slider-value {
    font-family: 'JetBrains Mono', monospace;
    font-size: 12px;
    color: var(--rm-text-muted);
  }

  .rm-slider {
    -webkit-appearance: none;
    appearance: none;
    width: 100%;
    height: 4px;
    border-radius: 2px;
    background: #2a2a2a;
    outline: none;
  }

  .rm-slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: var(--rm-accent);
    cursor: pointer;
    border: 2px solid var(--rm-bg);
    box-shadow: 0 1px 6px rgba(0,0,0,0.5);
  }

  .rm-slider::-moz-range-thumb {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: var(--rm-accent);
    cursor: pointer;
    border: 2px solid var(--rm-bg);
    box-shadow: 0 1px 6px rgba(0,0,0,0.5);
  }

  .rm-pill-row {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
  }

  .rm-pill {
    font-family: 'Geist', sans-serif;
    font-size: 13px;
    font-weight: 500;
    padding: 6px 16px;
    border-radius: 999px;
    border: 1px solid var(--rm-card-border);
    background: transparent;
    color: var(--rm-text-muted);
    cursor: pointer;
    transition: all 140ms ease;
  }

  .rm-pill:hover {
    border-color: #555;
    color: var(--rm-text);
  }

  .rm-pill[data-active='true'] {
    background: var(--rm-accent);
    border-color: var(--rm-accent);
    color: #0a0a0a;
  }

  /* ── Horizontal marquee ── */

  .rm-horizontal-wrap {
    position: relative;
    overflow: hidden;
    mask-image: linear-gradient(to right,
      transparent 0%,
      black 6%,
      black 94%,
      transparent 100%
    );
    -webkit-mask-image: linear-gradient(to right,
      transparent 0%,
      black 6%,
      black 94%,
      transparent 100%
    );
  }

  .rm-hrow {
    display: flex;
    gap: var(--rm-gap);
    will-change: transform;
    padding: calc(var(--rm-gap) / 2) 0;
  }

  .rm-hrow:hover {
    animation-play-state: paused !important;
  }

  .rm-hrow[data-dir="left"] {
    animation: rm-scroll-left linear infinite;
  }

  .rm-hrow[data-dir="right"] {
    animation: rm-scroll-right linear infinite;
  }

  @keyframes rm-scroll-left {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }

  @keyframes rm-scroll-right {
    0% { transform: translateX(-50%); }
    100% { transform: translateX(0); }
  }

  @media (prefers-reduced-motion: reduce) {
    .rm-hrow[data-dir="left"],
    .rm-hrow[data-dir="right"] {
      animation: none !important;
    }
  }

  .rm-hcard {
    background: var(--rm-card);
    border: 1px solid var(--rm-card-border);
    border-radius: var(--rm-radius);
    padding: 20px 24px;
    flex-shrink: 0;
    width: 340px;
    transition: background 0.25s ease, border-color 0.25s ease;
  }

  .rm-hcard:hover {
    background: var(--rm-card-hover);
    border-color: #333;
  }

  .rm-section-label {
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--rm-text-muted);
    padding: 40px 24px 16px;
    max-width: 1200px;
    margin: 0 auto;
    border-bottom: 1px solid var(--rm-card-border);
    margin-bottom: 8px;
  }

  /* ── Responsive ── */

  @media (max-width: 640px) {
    .rm-sliders { grid-template-columns: 1fr; }
    .rm-hcard { width: 280px; }
  }
`;

// ─── Review data ──────────────────────────────────────────

type Review = {
  name: string;
  role: string;
  quote: string;
  stars: number;
  color: string;
};

const REVIEWS: Review[] = [
  { name: 'Sarah Chen', role: 'Head of Product, Vercel', quote: 'This is hands-down the best developer tool we have integrated into our stack. The speed improvements alone justified the switch within a week.', stars: 5, color: '#6B5CE7' },
  { name: 'Marcus Okonkwo', role: 'CTO, Raycast', quote: 'Clean API, thoughtful defaults, zero configuration headaches. Exactly what a modern tool should be.', stars: 5, color: '#E7845C' },
  { name: 'Lina Johansson', role: 'Design Engineer, Linear', quote: 'The attention to micro-interactions and polish is something I rarely see. It feels like a product made by people who genuinely care about craft.', stars: 5, color: '#5CC9E7' },
  { name: 'David Reeves', role: 'VP Engineering, Stripe', quote: 'We rolled this out to 200+ engineers and the feedback was unanimously positive. Adoption was effortless.', stars: 5, color: '#E75C8A' },
  { name: 'Amara Diallo', role: 'Founder, Liveblocks', quote: 'Reduced our build times by 60%. The performance characteristics are genuinely best-in-class.', stars: 5, color: '#8AE75C' },
  { name: 'Jonas Fischer', role: 'Staff Engineer, Supabase', quote: 'The documentation is a masterclass. Every edge case is covered. I wish more open-source projects had this level of rigor.', stars: 5, color: '#E7D45C' },
  { name: 'Priya Sharma', role: 'Lead Developer, Notion', quote: 'Migrated our entire frontend pipeline in a single sprint. The migration guide was flawless — not a single breaking issue.', stars: 5, color: '#5C6BE7' },
  { name: 'Karl Magnusson', role: 'Tech Lead, Klarna', quote: 'The TypeScript support is exceptional. Full inference, zero anys, intelligent autocomplete. It just works.', stars: 5, color: '#C95CE7' },
  { name: 'Elena Volkov', role: 'Engineering Manager, GitLab', quote: 'Our team velocity increased measurably after adoption. Less time fighting tooling, more time shipping features.', stars: 4, color: '#5CE7A8' },
  { name: 'Thomas Brennan', role: 'Senior Engineer, Figma', quote: 'Elegant architecture under the hood. Reading the source code taught me patterns I now use everywhere.', stars: 5, color: '#E7A85C' },
  { name: 'Yuki Tanaka', role: 'Principal Engineer, Shopify', quote: 'We evaluated seven alternatives before choosing this. Nothing else came close on reliability and developer experience.', stars: 5, color: '#5CE7D4' },
  { name: 'Isabel Moreno', role: 'Frontend Lead, Framer', quote: 'The animation primitives are so well-designed that complex interactions become trivial to implement. Pure joy to work with.', stars: 5, color: '#E75CA8' },
  { name: 'Andreas Weber', role: 'DevOps Lead, Prisma', quote: 'Zero downtime deployments out of the box. The operational story is as strong as the developer story.', stars: 5, color: '#7CE75C' },
  { name: 'Natasha Petrova', role: 'Director of Eng, Miro', quote: 'Three years in production with zero major incidents. The stability is remarkable for how fast they ship new features.', stars: 5, color: '#5C9AE7' },
  { name: 'Ryan O\'Sullivan', role: 'Architect, Atlassian', quote: 'Scaled from our prototype to serving millions of requests with minimal configuration changes. The abstraction layer is brilliant.', stars: 5, color: '#E7C45C' },
  { name: 'Mei-Ling Wu', role: 'Staff Engineer, Airbnb', quote: 'The plugin ecosystem is thriving. Almost every integration we needed already existed, and writing custom ones was straightforward.', stars: 5, color: '#B85CE7' },
];

// Split reviews into columns
function splitIntoColumns(reviews: Review[], cols: number): Review[][] {
  const columns: Review[][] = Array.from({ length: cols }, () => []);
  reviews.forEach((r, i) => columns[i % cols].push(r));
  return columns;
}

// ─── Review Card ──────────────────────────────────────────

function ReviewCard({ review }: { review: Review }) {
  const initials = review.name
    .split(' ')
    .map((w) => w[0])
    .join('')
    .slice(0, 2);

  return (
    <div className="rm-card">
      <div className="rm-card-stars">
        {'★'.repeat(review.stars)}
        {'☆'.repeat(5 - review.stars)}
      </div>
      <blockquote className="rm-card-quote">
        &ldquo;{review.quote}&rdquo;
      </blockquote>
      <div className="rm-card-footer">
        <div
          className="rm-card-avatar"
          style={{ background: review.color }}
        >
          {initials}
        </div>
        <div className="rm-card-info">
          <span className="rm-card-name">{review.name}</span>
          <span className="rm-card-role">{review.role}</span>
        </div>
      </div>
    </div>
  );
}

// ─── Marquee Column ───────────────────────────────────────

function MarqueeColumn({
  reviews,
  direction,
  speed,
}: {
  reviews: Review[];
  direction: 'up' | 'down';
  speed: number;
}) {
  const doubled = [...reviews, ...reviews];

  return (
    <div
      className="rm-col"
      data-dir={direction}
      style={{ animationDuration: `${speed}s` }}
    >
      {doubled.map((review, i) => (
        <ReviewCard
          key={`${review.name}-${i}`}
          review={review}
        />
      ))}
    </div>
  );
}

// ─── Horizontal Marquee Row ───────────────────────────────

function HorizontalCard({ review }: { review: Review }) {
  const initials = review.name
    .split(' ')
    .map((w) => w[0])
    .join('')
    .slice(0, 2);

  return (
    <div className="rm-hcard">
      <div className="rm-card-stars">
        {'★'.repeat(review.stars)}
        {'☆'.repeat(5 - review.stars)}
      </div>
      <blockquote className="rm-card-quote" style={{ fontSize: 15, marginBottom: 14 }}>
        &ldquo;{review.quote}&rdquo;
      </blockquote>
      <div className="rm-card-footer">
        <div className="rm-card-avatar" style={{ background: review.color, width: 30, height: 30, fontSize: 12 }}>
          {initials}
        </div>
        <div className="rm-card-info">
          <span className="rm-card-name" style={{ fontSize: 13 }}>{review.name}</span>
          <span className="rm-card-role">{review.role}</span>
        </div>
      </div>
    </div>
  );
}

function HorizontalMarqueeRow({
  reviews,
  direction,
  speed,
}: {
  reviews: Review[];
  direction: 'left' | 'right';
  speed: number;
}) {
  const doubled = [...reviews, ...reviews];

  return (
    <div
      className="rm-hrow"
      data-dir={direction}
      style={{ animationDuration: `${speed}s` }}
    >
      {doubled.map((review, i) => (
        <HorizontalCard key={`${review.name}-${i}`} review={review} />
      ))}
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────

const COLUMN_OPTIONS = [3, 4, 5] as const;

export default function ReviewMarqueePage() {
  const [columnCount, setColumnCount] = useState<number>(4);
  const [speed, setSpeed] = useState(35);
  const [height, setHeight] = useState(700);
  const [theme, setTheme] = useState<'dark' | 'light'>('light');

  const columns = splitIntoColumns(REVIEWS, columnCount);

  return (
    <>
      <style>{cssStyles}</style>
      <section className="rm-root" data-theme={theme}>
        {/* Controls */}
        <div className="rm-controls">
          <h2 className="rm-controls-title">Parameters</h2>

          <div className="rm-sliders">
            <div className="rm-slider-group">
              <div className="rm-slider-header">
                <span className="rm-slider-label">Theme</span>
              </div>
              <div className="rm-pill-row">
                {(['light', 'dark'] as const).map((t) => (
                  <button
                    key={t}
                    className="rm-pill"
                    data-active={String(theme === t)}
                    onClick={() => setTheme(t)}
                  >
                    {t === 'dark' ? 'Dark' : 'Light'}
                  </button>
                ))}
              </div>
            </div>

            <div className="rm-slider-group">
              <div className="rm-slider-header">
                <span className="rm-slider-label">Columns</span>
              </div>
              <div className="rm-pill-row">
                {COLUMN_OPTIONS.map((n) => (
                  <button
                    key={n}
                    className="rm-pill"
                    data-active={String(columnCount === n)}
                    onClick={() => setColumnCount(n)}
                  >
                    {n}
                  </button>
                ))}
              </div>
            </div>

            <div className="rm-slider-group">
              <div className="rm-slider-header">
                <span className="rm-slider-label">Scroll Speed</span>
                <span className="rm-slider-value">{speed}s</span>
              </div>
              <input
                type="range"
                className="rm-slider"
                min={15}
                max={80}
                step={5}
                value={speed}
                onChange={(e) => setSpeed(Number(e.target.value))}
              />
            </div>

            <div className="rm-slider-group">
              <div className="rm-slider-header">
                <span className="rm-slider-label">Container Height</span>
                <span className="rm-slider-value">{height}px</span>
              </div>
              <input
                type="range"
                className="rm-slider"
                min={400}
                max={1000}
                step={50}
                value={height}
                onChange={(e) => setHeight(Number(e.target.value))}
              />
            </div>
          </div>
        </div>

        {/* Marquee */}
        <div className="rm-marquee-wrap">
          <div
            className="rm-marquee"
            style={{
              gridTemplateColumns: `repeat(${columnCount}, 1fr)`,
              height: `${height}px`,
            }}
          >
            {columns.map((col, i) => (
              <MarqueeColumn
                key={`col-${columnCount}-${i}`}
                reviews={col}
                direction={i % 2 === 0 ? 'up' : 'down'}
                speed={speed + i * 6}
              />
            ))}
          </div>
        </div>

        {/* Horizontal variant */}
        <div className="rm-section-label">Horizontal Variant</div>
        <div className="rm-horizontal-wrap">
          <HorizontalMarqueeRow
            reviews={REVIEWS.slice(0, 8)}
            direction="left"
            speed={speed}
          />
          <HorizontalMarqueeRow
            reviews={REVIEWS.slice(8, 16)}
            direction="right"
            speed={speed + 8}
          />
        </div>

      </section>
    </>
  );
}
