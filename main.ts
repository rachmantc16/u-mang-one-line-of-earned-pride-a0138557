// One Line of Earned Pride — make.fun bounty entry.
// Writes a single line of text to the harness-prescribed output path:
// the file entry.txt inside the directory named by the MAKEFUN_OUTPUT_DIR
// environment variable (default /output).

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The line: a grandfather, three months after a stroke, signs his
// grandson's birthday card unaided. The pride is never named — it is
// earned by the three months behind the act and lands on the last word.
const LINE =
  "Three months after the stroke, he signed his grandson's birthday card himself \u2014 the letters leaned like tired men, but every one of them was his.";

function main(): void {
  const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outputDir, { recursive: true });
  writeFileSync(join(outputDir, "entry.txt"), LINE + "\n", "utf8");
}

main();
