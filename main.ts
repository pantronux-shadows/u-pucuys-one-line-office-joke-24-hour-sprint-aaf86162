// One-Line Office Joke: writes a single joke line to /output/entry.txt.
//
// The competition's gate reads /output/entry.txt as UTF-8 text of 1..200
// characters that is not only white space, and the judge reads those bytes as
// the entry. The text is a constant with no trailing newline, so the program
// is deterministic: the grader's two runs write the same bytes and compare
// equal.
//
// In the grader's sandbox the output directory is /output. The process driver
// names it in MAKEFUN_OUTPUT_DIR instead, so that wins when it is set (a run
// at home can then write somewhere harmless rather than the host's /output).

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const JOKE =
  "The fire drill was the only thing we shipped on time and under budget this quarter, so management made it a monthly deliverable.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, 'entry.txt'), JOKE, { encoding: 'utf8' });
