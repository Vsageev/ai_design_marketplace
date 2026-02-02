import { ReactNode } from 'react';
import path from 'path';
import fs from 'fs';
import { DesignPageLayout } from '@/components';

export default function ItPark2Layout({ children }: { children: ReactNode }) {
  const markdown = fs.readFileSync(
    path.join(process.cwd(), 'src/app/designs/it-park2/guidelines.md'),
    'utf-8'
  );

  return (
    <DesignPageLayout title="IT Park 2" markdown={markdown}>
      {children}
    </DesignPageLayout>
  );
}
