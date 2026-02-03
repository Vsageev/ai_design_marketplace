import Link from 'next/link';
import {
  metadata as cheerfulMinimalismMeta,
  PreviewComponent as CheerfulMinimalismPreview,
} from './designs/cheerful-minimalism/preview';
import {
  metadata as neoBrutalistMeta,
  PreviewComponent as NeoBrutalistPreview,
} from './designs/neo-brutalist/preview';
import {
  metadata as minimalistBlackMeta,
  PreviewComponent as MinimalistBlackPreview,
} from './designs/minimalist-black/preview';
import {
  metadata as modernPropertyManagementMeta,
  PreviewComponent as ModernPropertyManagementPreview,
} from './designs/modern-property-management/preview';
import {
  metadata as grungeMemeMeta,
  PreviewComponent as GrungeMemePreview,
} from './designs/grunge-meme/preview';
import {
  metadata as ycEditorialNewMeta,
  PreviewComponent as YcEditorialNewPreview,
} from './designs/yc-editorial-new/preview';
import {
  metadata as retroSnackPosterMeta,
  PreviewComponent as RetroSnackPosterPreview,
} from './designs/retro-snack-poster/preview';
import {
  metadata as hexSecurityEditorialMeta,
  PreviewComponent as HexSecurityEditorialPreview,
} from './designs/hex-security-editorial/preview';
import {
  metadata as technicalEditorialBlueprintMeta,
  PreviewComponent as TechnicalEditorialBlueprintPreview,
} from './designs/technical-editorial-blueprint/preview';
import {
  metadata as technicalEditorialMeta,
  PreviewComponent as TechnicalEditorialPreview,
} from './designs/technical-editorial/preview';
import {
  metadata as xLowMeta,
  PreviewComponent as XLowPreview,
} from './designs/x-low/preview';
import {
  metadata as amethystFluteMeta,
  PreviewComponent as AmethystFlutePreview,
} from './designs/amethyst-flute/preview';
import {
  metadata as amberGlassMeta,
  PreviewComponent as AmberGlassPreview,
} from './designs/amber-glass/preview';
import {
  metadata as grainDarkroomMeta,
  PreviewComponent as GrainDarkroomPreview,
} from './designs/grain-darkroom/preview';
import {
  metadata as oneOrangeMeta,
  PreviewComponent as OneOrangePreview,
} from './designs/one-orange/preview';
import {
  metadata as falafelMeta,
  PreviewComponent as FalafelPreview,
} from './designs/falafel/preview';
import {
  metadata as shawLightMeta,
  PreviewComponent as ShawLightPreview,
} from './designs/shaw-light/preview';

// Design entries with their preview components
const designs = [
  {
    ...amethystFluteMeta,
    PreviewComponent: AmethystFlutePreview,
  },
  {
    ...technicalEditorialMeta,
    PreviewComponent: TechnicalEditorialPreview,
  },
  {
    ...grainDarkroomMeta,
    PreviewComponent: GrainDarkroomPreview,
  },
  {
    ...oneOrangeMeta,
    PreviewComponent: OneOrangePreview,
  },
  {
    ...cheerfulMinimalismMeta,
    PreviewComponent: CheerfulMinimalismPreview,
  },
  {
    ...neoBrutalistMeta,
    PreviewComponent: NeoBrutalistPreview,
  },
  {
    ...minimalistBlackMeta,
    PreviewComponent: MinimalistBlackPreview,
  },
  {
    ...modernPropertyManagementMeta,
    PreviewComponent: ModernPropertyManagementPreview,
  },
  {
    ...grungeMemeMeta,
    PreviewComponent: GrungeMemePreview,
  },
  {
    ...ycEditorialNewMeta,
    PreviewComponent: YcEditorialNewPreview,
  },
  {
    ...retroSnackPosterMeta,
    PreviewComponent: RetroSnackPosterPreview,
  },
  {
    ...hexSecurityEditorialMeta,
    PreviewComponent: HexSecurityEditorialPreview,
  },
  {
    ...technicalEditorialBlueprintMeta,
    PreviewComponent: TechnicalEditorialBlueprintPreview,
  },
  {
    ...xLowMeta,
    PreviewComponent: XLowPreview,
  },
  {
    ...amberGlassMeta,
    PreviewComponent: AmberGlassPreview,
  },
  {
    ...falafelMeta,
    PreviewComponent: FalafelPreview,
  },
  {
    ...shawLightMeta,
    PreviewComponent: ShawLightPreview,
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
    maxWidth: '500px',
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
  linkButton: {
    fontSize: '14px',
    fontWeight: 500,
    color: 'var(--accent)',
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
  },
};

export default function Home() {
  return (
    <main style={styles.container}>
      <header style={styles.header}>
        <div>
          <h1 style={styles.title}>Design Marketplace</h1>
          <p style={styles.subtitle}>
            Browse design guidelines and see how pages created with them look. Compare different design systems side by side.
          </p>
        </div>
        <div style={styles.headerNav}>
          <Link href="/" style={{ ...styles.navLink, ...styles.navActive }}>Designs</Link>
          <Link href="/components" style={styles.navLink}>Components</Link>
        </div>
      </header>

      <div style={styles.grid}>
        {designs.map((design) => (
          <article key={design.id} style={styles.card}>
            {/* Preview area showing real design elements */}
            <div style={styles.cardPreview}>
              <span style={styles.previewLabel}>Preview</span>
              <design.PreviewComponent />
            </div>

            {/* Card content */}
            <div style={styles.cardBody}>
              <h2 style={styles.cardName}>{design.name}</h2>
              <p style={styles.cardDescription}>{design.description}</p>
              <div style={styles.tagRow}>
                {design.tags.map((tag) => (
                  <span key={tag} style={styles.tag}>{tag}</span>
                ))}
              </div>
            </div>

            {/* Card actions */}
            <div style={styles.cardFooter}>
              <Link href={`/designs/${design.id}`} style={styles.linkButton}>
                View Design →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
