import { ReactNode } from 'react';
import path from 'path';
import fs from 'fs';
import { DesignPageLayout } from '@/components';

export default function ItParkLayout({ children }: { children: ReactNode }) {
  const markdown = fs.readFileSync(
    path.join(process.cwd(), 'src/app/designs/it-park/guidelines.md'),
    'utf-8'
  );

  return (
    <DesignPageLayout title="IT Park" markdown={markdown}>
      {children}
    </DesignPageLayout>
  );
}
