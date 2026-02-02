import Link from 'next/link';
import {
  metadata as animatedCommentThreadMeta,
  PreviewComponent as AnimatedCommentThreadPreview,
} from './animated-comment-thread/preview';

const components = [
  {
    ...animatedCommentThreadMeta,
    PreviewComponent: AnimatedCommentThreadPreview,
  },
];

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    minHeight: '100vh',
    padding: '48px 24px',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  header: {
    marginBottom: '48px',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    gap: '16px',
    flexWrap: 'wrap',
  },
  title: {
    fontSize: '32px',
    fontWeight: 700,
    marginBottom: '8px',
    letterSpacing: '-0.02em',
  },
  subtitle: {
    fontSize: '16px',
    color: 'var(--muted)',
    maxWidth: '520px',
  },
  headerNav: {
    display: 'flex',
    gap: '8px',
    alignItems: 'center',
  },
  navLink: {
    fontSize: '14px',
    fontWeight: 600,
    color: 'var(--muted)',
    padding: '8px 14px',
    borderRadius: '999px',
    border: '1px solid var(--border)',
    textDecoration: 'none',
  },
  navActive: {
    color: 'var(--accent)',
    borderColor: 'rgba(79, 70, 229, 0.35)',
    background: 'rgba(79, 70, 229, 0.08)',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
    gap: '24px',
  },
  card: {
    background: '#ffffff',
    border: '1px solid var(--border)',
    borderRadius: '12px',
    overflow: 'hidden',
    transition: 'box-shadow 0.2s ease, transform 0.2s ease',
  },
  cardPreview: {
    height: '200px',
    overflow: 'hidden',
    borderBottom: '2px solid #e0e0e0',
    background: '#fafafa',
    position: 'relative' as const,
  },
  previewLabel: {
    position: 'absolute' as const,
    top: '8px',
    right: '8px',
    fontSize: '10px',
    fontWeight: 500,
    color: '#888',
    background: 'rgba(255,255,255,0.9)',
    padding: '2px 6px',
    borderRadius: '4px',
    border: '1px solid #ddd',
    zIndex: 10,
    textTransform: 'uppercase' as const,
    letterSpacing: '0.5px',
  },
  cardBody: {
    padding: '20px',
  },
  cardName: {
    fontSize: '18px',
    fontWeight: 600,
    marginBottom: '8px',
  },
  cardDescription: {
    fontSize: '14px',
    color: 'var(--muted)',
    lineHeight: 1.5,
    marginBottom: '16px',
  },
  tagRow: {
    display: 'flex',
    gap: '8px',
    flexWrap: 'wrap' as const,
  },
  tag: {
    fontSize: '12px',
    padding: '4px 10px',
    background: 'var(--background)',
    borderRadius: '100px',
    color: 'var(--muted)',
  },
  cardFooter: {
    padding: '16px 20px',
    borderTop: '1px solid var(--border)',
    display: 'flex',
    gap: '12px',
  },
  cardLink: {
    fontSize: '14px',
    fontWeight: 500,
    color: 'var(--accent)',
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    textDecoration: 'none',
  },
};

export default function ComponentsPage() {
  return (
    <main style={styles.container}>
      <header style={styles.header}>
        <div>
          <h1 style={styles.title}>Component Marketplace</h1>
          <p style={styles.subtitle}>
            Explore individual UI components, each with guidelines and a live showcase. Build libraries faster
            by reusing proven interaction patterns.
          </p>
        </div>
        <div style={styles.headerNav}>
          <Link href="/" style={styles.navLink}>Designs</Link>
          <Link href="/components" style={{ ...styles.navLink, ...styles.navActive }}>Components</Link>
        </div>
      </header>

      <div style={styles.grid}>
        {components.map((component) => (
          <article key={component.id} style={styles.card}>
            <div style={styles.cardPreview}>
              <span style={styles.previewLabel}>Preview</span>
              <component.PreviewComponent />
            </div>

            <div style={styles.cardBody}>
              <h2 style={styles.cardName}>{component.name}</h2>
              <p style={styles.cardDescription}>{component.description}</p>
              <div style={styles.tagRow}>
                {component.tags.map((tag) => (
                  <span key={tag} style={styles.tag}>{tag}</span>
                ))}
              </div>
            </div>

            <div style={styles.cardFooter}>
              <Link href={`/components/${component.id}`} style={styles.cardLink}>
                View Component →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
