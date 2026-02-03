import React from 'react';
import { DesignPageLayout } from '@/components/DesignPageLayout';
import fs from 'fs';
import path from 'path';

export default function DesignLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const guidelinesPath = path.join(process.cwd(), 'src/app/designs/technical-editorial/guidelines.md');
  let markdown = '';

  try {
    markdown = fs.readFileSync(guidelinesPath, 'utf8');
  } catch {
    markdown = '# Guidelines not found';
  }

  return (
    <DesignPageLayout title="Technical Editorial" markdown={markdown}>
      {children}
    </DesignPageLayout>
  );
}
