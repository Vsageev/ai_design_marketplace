import fs from 'fs';
import path from 'path';
import { DesignPageLayout } from '@/components/DesignPageLayout';

export default async function Layout({ children }: { children: React.ReactNode }) {
  const filePath = path.join(process.cwd(), 'src/app/components/tilt-glass-cards/guidelines.md');
  let markdown = '';

  try {
    markdown = fs.readFileSync(filePath, 'utf-8');
  } catch {
    markdown = '# Guidelines not found';
  }

  return (
    <DesignPageLayout title="Tilt Glass Cards" markdown={markdown}>
      {children}
    </DesignPageLayout>
  );
}
