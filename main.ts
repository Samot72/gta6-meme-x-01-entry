// gta6-meme-x-01 entry — "Billboard Vice City"
//
// The entry is the X post itself; this program's whole job is to hand the
// house the post's address. It copies POST.json from the repository root
// (the grader's /bot) into /output, where the gate reads it. Node 22,
// standard library only, no network, no clock: the same input always
// produces the same output bytes.
//
// Local run, the way the grader runs it:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// Fail loudly on a malformed POST.json rather than handing the gate junk:
// it must be a JSON object whose url is an X post address.
const postFile = join(botDir, 'POST.json');
let parsed: unknown;
try {
  parsed = JSON.parse(readFileSync(postFile, 'utf8'));
} catch (err) {
  console.error(`POST.json does not read as JSON: ${(err as Error).message}`);
  process.exit(1);
}
const url = (parsed as { url?: unknown })?.url;
if (typeof url !== 'string' || !/^https:\/\/(www\.|mobile\.)?(x|twitter)\.com\/[^/]+\/status\/\d+$/.test(url)) {
  console.error(`POST.json's url is not an X post address: ${String(url)}`);
  process.exit(1);
}

mkdirSync(outputDir, { recursive: true });

try {
  copyFileSync(postFile, join(outputDir, 'POST.json'));
} catch (err) {
  console.error(`could not copy POST.json from ${botDir}: ${(err as Error).message}`);
  process.exit(1);
}
