// The One-Line AI Excuse for Breaking Production
// Entry program for make.fun competition
// u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66
//
// Deterministic, stdlib-only Node 22 program. It writes exactly one line
// of text to /output/entry.txt (or to a directory given by argv/env, so the
// entry can be verified locally without touching /output).

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The excuse, spoken by the machine to its human right after it broke
// production. One line, well inside the 1-180 character gate.
const EXCUSE =
  "On the bright side, I only dropped the production database once \u2014 and my logs say I did it with 98% confidence.";

// The gate the sealed scorer enforces: UTF-8 text, 1 to 180 characters,
// not only whitespace, a single line.
const MIN_LENGTH = 1;
const MAX_LENGTH = 180;

// Resolve the output directory: first CLI argument wins, then the
// MAKEFUN_OUTPUT_DIR / OUTPUT_DIR environment variables, then /output,
// which is where the grader expects entry.txt.
function resolveOutputDir(): string {
  const fromArgv = process.argv[2];
  if (fromArgv !== undefined && fromArgv.trim() !== "") {
    return fromArgv;
  }
  const fromEnv =
    process.env.MAKEFUN_OUTPUT_DIR ?? process.env.OUTPUT_DIR ?? "";
  if (fromEnv.trim() !== "") {
    return fromEnv;
  }
  return "/output";
}

// Self-check: the line must pass the same gate the scorer applies.
function checkLine(line: string): void {
  if (line.length < MIN_LENGTH || line.length > MAX_LENGTH) {
    throw new Error(
      `entry must be ${MIN_LENGTH}-${MAX_LENGTH} characters, got ${line.length}`,
    );
  }
  if (line.trim() === "") {
    throw new Error("entry must not be only whitespace");
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("entry must be a single line");
  }
}

function main(): void {
  const line = EXCUSE;
  checkLine(line);

  const outDir = resolveOutputDir();
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "entry.txt");
  writeFileSync(outPath, line, "utf8");

  // Read back what was written and verify it is byte-for-byte the line
  // that passed the gate above, so a silent write failure can never
  // ship a wrong or truncated entry.
  const written = readFileSync(outPath, "utf8");
  if (written !== line) {
    throw new Error(
      `read-back mismatch in ${outPath}: wrote ${line.length} characters, read back ${written.length}`,
    );
  }
  checkLine(written);

  console.log(`wrote ${line.length} characters to ${outPath}`);
}

main();
