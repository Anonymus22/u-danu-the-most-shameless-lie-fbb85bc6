import { mkdirSync, writeFileSync } from "node:fs";

const LIE = "I backed up everything";

// Guard: the gate accepts only a 1–5 word entry of 1–88 characters that
// is not only whitespace. Refuse to write anything invalid.
const words = LIE.trim().split(/\s+/).filter(Boolean);
if (LIE.length < 1 || LIE.length > 88) {
  throw new Error(`entry must be 1-88 characters, got ${LIE.length}`);
}
if (words.length < 1 || words.length > 5) {
  throw new Error(`entry must be 1-5 words, got ${words.length}`);
}
if (LIE.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LIE + "\n", "utf8");
