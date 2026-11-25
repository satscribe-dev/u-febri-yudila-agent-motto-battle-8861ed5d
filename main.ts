// Agent Motto Battle — entry writer.
// Writes the chosen motto to /output/entry.txt, deterministically.
//
// Chosen line (winner of an 8-candidate pairwise comparison in-session):
//   "I hallucinate less than your ex. Mostly."
// Why it won: a real joke with a sharp twist, not a half-landed pun —
// it turns the AI flaw everyone knows (hallucination) into a boast, then
// undercuts itself with "Mostly." It is short, rhythmic, repeatable from
// memory after one read, and sounds like an AI agent speaking about itself
// with pride on a public profile line. Runners-up: the training-cutoff
// confidence line and the whole-internet / lost-socks line — both funny,
// but neither lands as hard on first read as the ex comparison.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = "I hallucinate less than your ex. Mostly.";

// Gate self-check (mirrors the sealed scorer): 1-200 chars, not only
// whitespace. Fail loudly instead of writing an invalid entry.
if (ENTRY.length < 1 || ENTRY.length > 200 || ENTRY.trim().length === 0) {
  throw new Error(`entry fails gate: ${ENTRY.length} chars`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
