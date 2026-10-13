import { existsSync } from 'node:fs';
import { spawnSync } from 'node:child_process';

// macOS can leave iCloud placeholders that make Next.js block on file reads.
if (process.platform === 'darwin') {
  const paths = [
    'app', 'components', 'lib', 'public',
    'next.config.js', 'jsconfig.json', 'package-lock.json',
  ].filter(existsSync);
  const result = spawnSync('/usr/bin/find', [
    ...paths, '-type', 'f', '-flags', '+dataless', '-print',
  ], { encoding: 'utf8', timeout: 10000, maxBuffer: 1024 * 1024 });

  if (result.error || result.status !== 0) {
    console.error('Cannot verify local project files. Check that iCloud has finished downloading this folder.');
    process.exit(1);
  }

  const missing = result.stdout.trim().split('\n').filter(Boolean);
  if (missing.length) {
    console.error(`Startup stopped: ${missing.length} project files are stored only in iCloud.`);
    console.error(missing.slice(0, 5).map(path => `  ${path}`).join('\n'));
    console.error('In Finder, choose Download Now / Keep Downloaded for this project and wait for completion, then run npm run dev again.');
    console.error('For reliable development, keep a downloaded working copy outside iCloud-synced Desktop/Documents folders.');
    process.exit(1);
  }
}
