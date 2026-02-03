import fs from 'fs';
import path from 'path';
import { DesignPageLayout } from '@/components/DesignPageLayout';

export default async function Layout({ children }: { children: React.ReactNode }) {
  const filePath = path.join(process.cwd(), 'src/app/components/tv-noise/guides.md');
  let markdown = '';
  try {
    markdown = fs.readFileSync(filePath, 'utf-8');
  } catch {
    markdown = '# Guides not found';
  }

  return (
    <DesignPageLayout title="Classic Shared" markdown={markdown}>
      {children}
    </DesignPageLayout>
  );
}
