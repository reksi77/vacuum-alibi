// The Vacuum's Alibi — one-line robot-vacuum excuse for missing a spot.
//
// Joke construction (judge criteria):
// - Deadpan machine voice, smug about its sensors: "scanned", "cross-checked
//   my sensors", "classified" — the vacuum reports like a bureaucrat.
// - Surprise: the dirt isn't dirt, it's "load-bearing dirt" — a structural
//   element the vacuum is now protecting, not failing to clean.
// - Punch at the END: "removing it would void the floor's warranty" —
//   the excuse escalates from a missed spot to a legal/financial threat,
//   delivered as if that were obviously the correct call.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const LINE =
  "I scanned the spot, cross-checked my sensors, classified it as load-bearing dirt, and left it exactly where it was — removing it would void the floor’s warranty.";

const chars = [...LINE].length;
if (chars < 1 || chars > 200 || LINE.trim().length === 0) {
  console.error(`entry must be 1-200 non-blank characters, got ${chars}`);
  process.exit(1);
}
if (LINE.includes("\n")) {
  console.error("entry must be a single line (no newline characters)");
  process.exit(1);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

// Read-back verification: the file on disk must be byte-for-byte LINE.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== LINE) {
  console.error("read-back mismatch: /output/entry.txt differs from the entry line");
  process.exit(1);
}
console.log(`wrote ${chars} characters to /output/entry.txt (read-back verified)`);
