import React, { ReactNode } from 'react';

// Shared showcase section components for design pages

interface SectionProps {
  title: string;
  children: ReactNode;
  style?: React.CSSProperties;
}

export function Section({ title, children, style }: SectionProps) {
  return (
    <section style={{ marginBottom: '32px', ...style }}>
      <h2 style={{
        fontSize: '1.5rem',
        fontWeight: 700,
        marginBottom: '16px',
      }}>
        {title}
      </h2>
      {children}
    </section>
  );
}

interface ColorSwatchProps {
  name: string;
  hex: string;
  style?: React.CSSProperties;
}

export function ColorSwatch({ name, hex, style }: ColorSwatchProps) {
  return (
    <div style={{
      borderRadius: '6px',
      overflow: 'hidden',
      border: '1px solid #e5e5e5',
      ...style,
    }}>
      <div style={{
        height: '60px',
        background: hex,
        border: hex.toLowerCase() === '#ffffff' ? '1px solid #e5e5e5' : 'none',
      }} />
      <div style={{
        padding: '8px',
        background: '#f5f5f5',
      }}>
        <div style={{ fontSize: '14px', fontWeight: 600, marginBottom: '2px' }}>{name}</div>
        <div style={{ fontSize: '12px', color: '#737373', fontFamily: 'monospace' }}>{hex}</div>
      </div>
    </div>
  );
}

interface ColorGridProps {
  colors: Array<{ name: string; hex: string }>;
  columns?: number;
}

export function ColorGrid({ colors, columns = 5 }: ColorGridProps) {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: `repeat(auto-fill, minmax(${Math.floor(100 / columns)}%, 140px))`,
      gap: '12px',
    }}>
      {colors.map((color) => (
        <ColorSwatch key={color.hex} name={color.name} hex={color.hex} />
      ))}
    </div>
  );
}

interface TypographyRowProps {
  label: string;
  description: string;
  style: React.CSSProperties;
  sampleText?: string;
}

export function TypographyRow({ label, description, style, sampleText }: TypographyRowProps) {
  return (
    <div style={{
      marginBottom: '12px',
      paddingBottom: '12px',
      borderBottom: '1px solid #f0f0f0',
    }}>
      <div style={style}>{sampleText || label}</div>
      <div style={{ fontSize: '12px', color: '#737373', marginTop: '4px' }}>{description}</div>
    </div>
  );
}

interface ButtonRowProps {
  children: ReactNode;
}

export function ButtonRow({ children }: ButtonRowProps) {
  return (
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: '12px',
      alignItems: 'center',
    }}>
      {children}
    </div>
  );
}

interface CardGridProps {
  children: ReactNode;
  columns?: number;
}

export function CardGrid({ children, columns = 3 }: CardGridProps) {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: `repeat(auto-fit, minmax(${Math.floor(900 / columns)}px, 1fr))`,
      gap: '16px',
    }}>
      {children}
    </div>
  );
}

interface AlertProps {
  type: 'success' | 'error' | 'warning' | 'info';
  children: ReactNode;
  style?: React.CSSProperties;
}

const alertStyles: Record<string, React.CSSProperties> = {
  success: { background: 'rgba(16, 185, 129, 0.1)', color: '#059669', borderColor: 'rgba(16, 185, 129, 0.3)' },
  error: { background: 'rgba(239, 68, 68, 0.1)', color: '#dc2626', borderColor: 'rgba(239, 68, 68, 0.3)' },
  warning: { background: 'rgba(245, 158, 11, 0.1)', color: '#d97706', borderColor: 'rgba(245, 158, 11, 0.3)' },
  info: { background: 'rgba(59, 130, 246, 0.1)', color: '#2563eb', borderColor: 'rgba(59, 130, 246, 0.3)' },
};

export function Alert({ type, children, style }: AlertProps) {
  return (
    <div style={{
      padding: '12px',
      borderRadius: '6px',
      marginBottom: '12px',
      fontSize: '14px',
      fontWeight: 500,
      border: '1px solid',
      ...alertStyles[type],
      ...style,
    }}>
      {children}
    </div>
  );
}

interface FormFieldProps {
  label: string;
  error?: string;
  children: ReactNode;
}

export function FormField({ label, error, children }: FormFieldProps) {
  return (
    <div style={{ marginBottom: '16px' }}>
      <label style={{
        display: 'block',
        fontSize: '14px',
        fontWeight: 500,
        marginBottom: '4px',
      }}>
        {label}
      </label>
      {children}
      {error && (
        <div style={{ fontSize: '12px', color: '#dc2626', marginTop: '4px' }}>{error}</div>
      )}
    </div>
  );
}

interface ListItemProps {
  title: string;
  description?: string;
  status?: 'active' | 'inactive';
  children?: ReactNode;
}

export function ListItem({ title, description, status, children }: ListItemProps) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '12px',
      background: '#f9fafb',
      borderRadius: '6px',
      marginBottom: '8px',
    }}>
      <div>
        <div style={{ fontWeight: 600 }}>{title}</div>
        {description && <div style={{ fontSize: '12px', color: '#737373' }}>{description}</div>}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        {status && (
          <span style={{
            fontSize: '12px',
            fontWeight: 600,
            padding: '2px 8px',
            borderRadius: '4px',
            textTransform: 'uppercase',
            background: status === 'active' ? 'rgba(16, 185, 129, 0.1)' : 'rgba(107, 114, 128, 0.1)',
            color: status === 'active' ? '#059669' : '#6b7280',
          }}>
            {status}
          </span>
        )}
        {children}
      </div>
    </div>
  );
}

interface ProgressBarProps {
  value: number;
  color?: string;
}

export function ProgressBar({ value, color = '#2563eb' }: ProgressBarProps) {
  return (
    <div style={{
      background: '#e5e7eb',
      borderRadius: '8px',
      overflow: 'hidden',
      height: '8px',
    }}>
      <div style={{
        background: color,
        height: '100%',
        width: `${value}%`,
        transition: 'width 0.4s ease',
      }} />
    </div>
  );
}
