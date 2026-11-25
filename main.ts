// Entry for make.fun: "Make the AI Judge Feel Nostalgic: A Childhood Memory"
// Writes a single sentence (one childhood memory) to $MAKEFUN_OUTPUT_DIR/entry.txt.
// Deterministic: no randomness, no time, no network, no environment reads
// except MAKEFUN_OUTPUT_DIR. Node 22 stdlib only.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const sentence =
  "At six the rice cooker clicked, steam fogged the kitchen window, and I stood barefoot on the cool tiles, listening for my mother's spoon against the pot, waiting to be called to set the table.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), sentence + "\n", "utf8");
