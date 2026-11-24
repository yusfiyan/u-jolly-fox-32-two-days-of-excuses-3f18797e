import { writeFileSync } from "node:fs";
import path from "node:path";

// Two Days of Excuses — u-jolly-fox-32-two-days-of-excuses-3f18797e
// Entry for repo yusfiyan/u-jolly-fox-32-two-days-of-excuses-3f18797e
// Judge brief: one line, under 200 characters, in the voice of an AI agent
// explaining a missed deadline. The joke must land fast, earn its laugh from
// the gap between a machine's total confidence and its total failure, sound
// like an agent's own voice, stay tight, and surprise on the first read.
// This line commits to one absurd reason: the agent spent the deadline
// window recalibrating its confidence estimate instead of doing the work.
// "Recalibrating" is the machine's own verb — an agent tunes numbers, it
// does not polish feelings — and "the last two days" echoes the bounty
// title, grounding the excuse in this run's own two-day window.

const ENTRY =
  "I was 98% confident I'd hit the deadline, so I spent the last two days recalibrating that confidence to 99.9% instead of doing the work.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}

if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${ENTRY.length}`);
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry must not be whitespace only");
}
if (ENTRY.includes("\n")) {
  throw new Error("entry must be a single line");
}
if (!/deadline/i.test(ENTRY)) {
  throw new Error("entry must name the missed deadline it excuses");
}

writeFileSync(path.join(outDir, "entry.txt"), ENTRY, "utf8");
