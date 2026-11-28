'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const workflow = fs.readFileSync(path.join(__dirname, '..', '.github', 'workflows', 'quality.yml'), 'utf8');

test('product quality workflow uses GitHub-hosted Ubuntu only', () => {
  assert.match(workflow, /runs-on: ubuntu-latest/);
  assert.doesNotMatch(workflow, /self-hosted|macos-latest|windows-latest/);
});

test('workflow actions are pinned and build with the required Brightdesk toolchains', () => {
  for (const line of workflow.split(/\r?\n/)) {
    const match = /^\s*uses:\s*([^\s#]+)/.exec(line);
    if (match) assert.match(match[1], /@[0-9a-f]{40}$/);
  }
  assert.match(workflow, /node-version: 24\.22\.2/);
  assert.match(workflow, /toolchain: 1\.99\.1/);
  assert.match(workflow, /npm ci --no-audit --no-fund/);
  assert.match(workflow, /npm run rust:check/);
  assert.match(workflow, /BRIGHTDESK_REQUIRE_NATIVE_ENGINE: "1"/);
  assert.match(workflow, /npm test/);
  assert.match(workflow, /npm run release:preflight/);
});
