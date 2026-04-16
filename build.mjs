import fs from 'fs';
import path from 'path';

const root = process.cwd();
const src = path.join(root, 'public');
const dist = path.join(root, 'dist');

fs.rmSync(dist, { recursive: true, force: true });
fs.mkdirSync(dist, { recursive: true });
fs.cpSync(src, dist, { recursive: true });
console.log('Build complete: dist created');
