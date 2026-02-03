import React from 'react';

export const metadata = {
  id: 'review-marquee',
  name: 'Review Marquee',
  description: 'Framer-style scrolling testimonial columns with hover-to-pause and staggered speeds.',
  tags: ['Component', 'Social Proof', 'Animation', 'Marquee'],
};

const previewStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif&family=Geist:wght@400;500&display=swap');

  .rm-prev {
    font-family: 'Geist', sans-serif;
    height: 100%;
    background: #f5f5f0;
    position: relative;
    overflow: hidden;
    display: flex;
    gap: 8px;
    padding: 10px 12px;
  }

  .rm-prev-col {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 8px;
    animation: rm-prev-scroll 12s linear infinite;
  }

  .rm-prev-col:nth-child(2) {
    animation-duration: 16s;
    animation-direction: reverse;
  }

  .rm-prev-col:nth-child(3) {
    animation-duration: 14s;
  }

  @keyframes rm-prev-scroll {
    0% { transform: translateY(0); }
    100% { transform: translateY(-50%); }
  }

  .rm-prev-card {
    background: #ffffff;
    border: 1px solid #e0ddd8;
    border-radius: 6px;
    padding: 8px 10px;
    flex-shrink: 0;
  }

  .rm-prev-stars {
    color: #b8860b;
    font-size: 7px;
    letter-spacing: 1px;
    margin-bottom: 4px;
  }

  .rm-prev-text {
    font-family: 'Instrument Serif', serif;
    font-size: 8px;
    line-height: 1.35;
    color: #333;
    margin-bottom: 5px;
  }

  .rm-prev-author {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  .rm-prev-avatar {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    flex-shrink: 0;
  }

  .rm-prev-name {
    font-size: 7px;
    color: #888;
    font-weight: 500;
  }
`;

const miniReviews = [
  { text: 'Absolutely transformed our workflow.', name: 'Sarah K.', color: '#6B5CE7' },
  { text: 'Clean, fast, reliable.', name: 'Marco P.', color: '#E7845C' },
  { text: 'Best tool we have adopted this year.', name: 'Lina J.', color: '#5CC9E7' },
  { text: 'The attention to detail is remarkable.', name: 'David R.', color: '#E75C8A' },
  { text: 'Our team productivity doubled.', name: 'Amy T.', color: '#8AE75C' },
  { text: 'Simple yet incredibly powerful.', name: 'Jonas F.', color: '#E7D45C' },
  { text: 'Cannot imagine going back.', name: 'Priya S.', color: '#5C6BE7' },
  { text: 'Five stars, no hesitation.', name: 'Karl M.', color: '#C95CE7' },
  { text: 'Worth every penny we spent.', name: 'Elena V.', color: '#5CE7A8' },
];

function PreviewCol({ reviews }: { reviews: typeof miniReviews }) {
  const doubled = [...reviews, ...reviews];
  return (
    <div className="rm-prev-col">
      {doubled.map((r, i) => (
        <div key={i} className="rm-prev-card">
          <div className="rm-prev-stars">★★★★★</div>
          <div className="rm-prev-text">{r.text}</div>
          <div className="rm-prev-author">
            <div className="rm-prev-avatar" style={{ background: r.color }} />
            <span className="rm-prev-name">{r.name}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export function PreviewComponent() {
  return (
    <>
      <style>{previewStyles}</style>
      <div className="rm-prev">
        <PreviewCol reviews={miniReviews.slice(0, 3)} />
        <PreviewCol reviews={miniReviews.slice(3, 6)} />
        <PreviewCol reviews={miniReviews.slice(6, 9)} />
      </div>
    </>
  );
}
