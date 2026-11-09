import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
const css=readFileSync(new URL('../src/styles.css',import.meta.url),'utf8');
test('desktop sidebar is slim and retains captions',()=>{assert.match(css,/\.sidebar\s*\{[^}]*width:\s*192px/);assert.match(css,/\.nav\s+small\s*\{[^}]*display:\s*block/)});
test('mobile sidebar retains labels and captions',()=>{assert.match(css,/\.nav\s+small\s*\{display:block\}/);assert.match(css,/\.sidebar-bottom\s*\{display:flex\}/)});

test('embedded product sidebars remain slim and keep their headings and labels on mobile',()=>{for(const name of ['todo','lists','forms','planner','database','workspace']){assert.match(css,new RegExp('\\\\.'+name+'-sidebar\\\\s*\\\\{[^}]*width:\\\\s*192px'));}assert.doesNotMatch(css,/\\.todo-sidebar h2\\s*\\{[^}]*display:\s*none/);assert.doesNotMatch(css,/\\.nav small\\s*\\{display:none\\}/);});
