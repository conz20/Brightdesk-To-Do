import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const css = await readFile(new URL("../src/styles.css", import.meta.url), "utf8");

test("Brightdesk shared shell matches the approved visual contract", () => {
  for (const [token, value] of [
    ["--bd-canvas", "#F3F6FA"],
    ["--bd-surface", "#FFFFFF"],
    ["--bd-ink", "#202B3C"],
    ["--bd-nav-text", "#EEF3FB"],
    ["--bd-accent", "#27834F"],
    ["--bd-accent-strong", "#1D653C"],
    ["--bd-accent-soft", "#EDF7F0"]
  ]) {
    assert.ok(css.includes(token + ": " + value + ";"), "missing approved " + token + " value " + value);
  }
  assert.match(css, /\\.sidebar\\s*\\{[^}]*background:\\s*var\\(--bd-nav-gradient\\)/s);
  assert.match(css, /:focus-visible\\s*\\{[^}]*outline-color:\\s*var\\(--bd-accent\\)/s);
  assert.match(css, /@media\\s*\\(prefers-reduced-motion:\\s*reduce\\)/);
});
