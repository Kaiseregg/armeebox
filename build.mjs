import { cpSync, existsSync, mkdirSync, rmSync } from 'node:fs';

rmSync('dist', { recursive: true, force: true });
mkdirSync('dist', { recursive: true });

for (const entry of ['index.html', 'robots.txt', 'sitemap.xml', 'public', 'preview-4827-armbx', 'arbx-control']) {
  if (existsSync(entry)) cpSync(entry, `dist/${entry}`, { recursive: true });
}
