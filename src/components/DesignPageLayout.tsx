'use client';

import { useState, ReactNode } from 'react';
import Link from 'next/link';

const styles: { [key: string]: React.CSSProperties } = {
  header: {
    position: 'sticky' as const,
    top: 0,
    background: '#f8f9fa',
    borderBottom: '2px solid #e0e0e0',
    padding: '16px 32px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    zIndex: 100,
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
  },
  left: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
  },
  backLink: {
    fontSize: '14px',
    color: '#666',
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    textDecoration: 'none',
    fontWeight: 500,
    transition: 'color 0.15s ease',
  },
  divider: {
    width: '1px',
    height: '20px',
    background: '#d0d0d0',
  },
  title: {
    fontSize: '16px',
    fontWeight: 600,
    color: '#1a1a1a',
  },
  button: {
    fontSize: '14px',
    fontWeight: 500,
    padding: '8px 16px',
    borderRadius: '6px',
    border: '1px solid #d0d0d0',
    background: '#fff',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    transition: 'all 0.15s ease',
    color: '#333',
  },
  buttonCopied: {
    background: '#ecfdf5',
    borderColor: '#10b981',
    color: '#059669',
  },
  contentWrapper: {
    background: '#fff',
  },
};

interface DesignPageLayoutProps {
  title: string;
  markdown: string;
  children: ReactNode;
}

export function DesignPageLayout({ title, markdown, children }: DesignPageLayoutProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(markdown);
      } else {
        // Fallback for non-secure contexts
        const textArea = document.createElement('textarea');
        textArea.value = markdown;
        textArea.style.position = 'fixed';
        textArea.style.left = '-9999px';
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <>
      <header style={styles.header}>
        <div style={styles.left}>
          <Link href="/" style={styles.backLink}>
            ← Back
          </Link>
          <div style={styles.divider} />
          <span style={styles.title}>{title}</span>
        </div>
        <button
          onClick={handleCopy}
          style={{
            ...styles.button,
            ...(copied ? styles.buttonCopied : {}),
          }}
        >
          {copied ? '✓ Copied!' : 'Copy Guidelines'}
        </button>
      </header>
      <div style={styles.contentWrapper}>
        {children}
      </div>
    </>
  );
}
