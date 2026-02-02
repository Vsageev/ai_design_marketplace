import { ReactNode } from 'react';
import path from 'path';
import fs from 'fs';
import { DesignPageLayout } from '@/components';

export default function ItPark4Layout({ children }: { children: ReactNode }) {
  const markdown = fs.readFileSync(
    path.join(process.cwd(), 'src/app/designs/it-park4/guidelines.md'),
    'utf-8'
  );

  return (
    <DesignPageLayout title="IT Park 4" markdown={markdown}>
      {children}
    </DesignPageLayout>
  );
}
