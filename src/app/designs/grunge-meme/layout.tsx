import { ReactNode } from 'react';
import path from 'path';
import fs from 'fs';
import { DesignPageLayout } from '@/components';

export default function GrungeMemeLayout({ children }: { children: ReactNode }) {
  const markdown = fs.readFileSync(
    path.join(process.cwd(), 'src/app/designs/grunge-meme/guidelines.md'),
    'utf-8'
  );

  return (
    <DesignPageLayout title="Grunge Meme" markdown={markdown}>
      {children}
    </DesignPageLayout>
  );
}
