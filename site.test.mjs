import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const html = readFileSync(
  new URL('./index.html', import.meta.url),
  'utf8'
);

test('网页必须包含标题和主标题', () => {
  assert.match(
    html,
    /<title>Git CI\/CD Practice<\/title>/
  );
  assert.match(html, /<h1>[^<]+<\/h1>/);
});