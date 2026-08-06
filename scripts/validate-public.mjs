import { execFileSync } from 'node:child_process';
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { dirname, extname, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const startedAt = performance.now();
const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const failures = [];

function rel(path) {
  return relative(root, path).replaceAll('\\', '/');
}

function walk(directory) {
  const result = [];
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    if (entry.name === '.git' || entry.name === 'node_modules') continue;
    const full = resolve(directory, entry.name);
    if (entry.isDirectory()) result.push(...walk(full));
    else result.push(full);
  }
  return result;
}

function fail(message) {
  failures.push(message);
}

function localTargetExists(sourceFile, target) {
  if (/^(?:https?:\/\/|mailto:|#|data:)/i.test(target)) return true;
  const clean = target.split('#', 1)[0].split('?', 1)[0];
  if (!clean) return true;
  let decoded;
  try {
    decoded = decodeURIComponent(clean);
  } catch {
    fail(`${rel(sourceFile)} has an invalid encoded link: ${target}`);
    return false;
  }
  return existsSync(resolve(dirname(sourceFile), decoded));
}

const files = walk(root).sort();
const textFiles = files.filter((file) =>
  ['.css', '.html', '.json', '.md', '.mjs', '.txt', '.xml', '.yaml', '.yml'].includes(extname(file).toLowerCase()),
);

const requiredPaths = [
  'README.md',
  'README.ko.md',
  'assets/idd-readme-banner.png',
  'LICENSE',
  'AGENTS.md',
  '.github/workflows/pages.yml',
  'ai/idd-spec.md',
  'ai/index.json',
  'docs/status.md',
  'docs/ko/status.md',
  'llms.txt',
  'llms-full.txt',
  'site/index.html',
  'site/ko/index.html',
  'site/llms.txt',
  'site/.nojekyll',
  'site/sitemap.xml',
  '.github/workflows/validate.yml',
];

for (const path of requiredPaths) {
  if (!existsSync(resolve(root, path))) fail(`missing required public surface: ${path}`);
}

const licensePath = resolve(root, 'LICENSE');
if (existsSync(licensePath)) {
  const license = readFileSync(licensePath, 'utf8');
  if (!license.startsWith('MIT License\n') || !license.includes('Copyright (c) 2026 SoliEstre')) {
    fail('LICENSE is not the approved MIT license notice for SoliEstre');
  }
}

const sitemapPath = resolve(root, 'site/sitemap.xml');
if (existsSync(sitemapPath)) {
  const sitemap = readFileSync(sitemapPath, 'utf8');
  for (const url of ['https://soliestre.github.io/idd/', 'https://soliestre.github.io/idd/ko/']) {
    if (!sitemap.includes(`<loc>${url}</loc>`)) fail(`site/sitemap.xml is missing ${url}`);
  }
}

for (const file of files.filter((path) => extname(path).toLowerCase() === '.json')) {
  try {
    JSON.parse(readFileSync(file, 'utf8'));
  } catch (error) {
    fail(`${rel(file)} is not valid JSON: ${error.message}`);
  }
}

for (const file of files.filter((path) => extname(path).toLowerCase() === '.md')) {
  const content = readFileSync(file, 'utf8');
  for (const match of content.matchAll(/\[[^\]]+\]\(([^)]+)\)/g)) {
    const target = match[1].trim().replace(/^<|>$/g, '');
    if (!localTargetExists(file, target)) fail(`${rel(file)} has a missing local link: ${target}`);
  }
  for (const match of content.matchAll(/(?:href|src)="([^"]+)"/g)) {
    if (!localTargetExists(file, match[1])) fail(`${rel(file)} has a missing local HTML asset: ${match[1]}`);
  }
}

for (const file of files.filter((path) => extname(path).toLowerCase() === '.html')) {
  const content = readFileSync(file, 'utf8');
  for (const tag of ['<html', '<head', '<body', '<main']) {
    if (!content.includes(tag)) fail(`${rel(file)} is missing ${tag}>`);
  }
  for (const match of content.matchAll(/(?:href|src)="([^"]+)"/g)) {
    if (!localTargetExists(file, match[1])) fail(`${rel(file)} has a missing local asset: ${match[1]}`);
  }
  for (const match of content.matchAll(/<script\s+type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    try {
      JSON.parse(match[1]);
    } catch (error) {
      fail(`${rel(file)} has invalid JSON-LD: ${error.message}`);
    }
  }
}

const languagePairs = [
  ['README.md', 'README.ko.md'],
  ['docs/README.md', 'docs/ko/README.md'],
  ['docs/what-is-idd.md', 'docs/ko/what-is-idd.md'],
  ['docs/method.md', 'docs/ko/method.md'],
  ['docs/safety.md', 'docs/ko/safety.md'],
  ['docs/status.md', 'docs/ko/status.md'],
  ['docs/hosting.md', 'docs/ko/hosting.md'],
  ['site/index.html', 'site/ko/index.html'],
];

for (const [english, korean] of languagePairs) {
  if (!existsSync(resolve(root, english)) || !existsSync(resolve(root, korean))) {
    fail(`missing English/Korean pair: ${english} ↔ ${korean}`);
  }
}

const forbiddenPatterns = [
  [/C:\\Users\\/i, 'local user path'],
  [/C:\\Dev\\/i, 'local development path'],
  [/ghp_[A-Za-z0-9]{20,}/, 'GitHub personal token'],
  [/github_pat_[A-Za-z0-9_]{20,}/, 'GitHub fine-grained token'],
  [/AKIA[0-9A-Z]{16}/, 'AWS access key'],
  [/-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----/, 'private key material'],
  [/@gmail\.com\b/i, 'personal Gmail address'],
];

for (const file of textFiles) {
  const content = readFileSync(file, 'utf8');
  for (const [pattern, label] of forbiddenPatterns) {
    if (pattern.test(content)) fail(`${rel(file)} contains a forbidden ${label} pattern`);
  }
}

const publicContentFiles = textFiles.filter((file) =>
  ['.html', '.json', '.md', '.txt'].includes(extname(file).toLowerCase()),
);

for (const file of publicContentFiles) {
  const content = readFileSync(file, 'utf8');
  if (/\bsecure\b/i.test(content)) {
    fail(`${rel(file)} contains the unqualified word "secure"; state the measured scope instead`);
  }
  if (/blocks the accident|우연이 영구적인 약속이 되는 일은 막습니다/i.test(content)) {
    fail(`${rel(file)} contains an unverified absolute effect claim`);
  }
}

try {
  const safeRoot = root.replaceAll('\\', '/');
  const git = (args, options = {}) => execFileSync(
    'git',
    ['-c', `safe.directory=${safeRoot}`, '-C', root, ...args],
    { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'], ...options },
  );
  const emailOutput = execFileSync(
    'git',
    ['-c', `safe.directory=${safeRoot}`, '-C', root, 'log', '--format=%ae%n%ce'],
    { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] },
  );
  const emails = [...new Set(emailOutput.split(/\r?\n/).filter(Boolean))];
  for (const email of emails) {
    if (!/@users\.noreply\.github\.com$/i.test(email)) {
      fail(`reachable Git history exposes a non-noreply email: ${email}`);
    }
  }

  const reachableObjects = git(['rev-list', '--objects', '--all'])
    .split(/\r?\n/)
    .filter(Boolean)
    .map((line) => {
      const separator = line.indexOf(' ');
      return separator === -1
        ? { objectId: line, path: '(no path)' }
        : { objectId: line.slice(0, separator), path: line.slice(separator + 1) };
    });
  const inspectedBlobs = new Set();
  for (const { objectId, path } of reachableObjects) {
    if (inspectedBlobs.has(objectId)) continue;
    if (git(['cat-file', '-t', objectId]).trim() !== 'blob') continue;
    inspectedBlobs.add(objectId);
    const blob = git(['cat-file', '-p', objectId], { maxBuffer: 10 * 1024 * 1024 });
    if (blob.includes('\0')) continue;
    for (const [pattern, label] of forbiddenPatterns) {
      if (pattern.test(blob)) {
        fail(`reachable Git blob ${objectId.slice(0, 12)} (${path}) contains a forbidden ${label} pattern`);
      }
    }
  }
} catch (error) {
  fail(`could not inspect reachable Git metadata and blobs: ${error.message}`);
}

const durationMs = Math.round(performance.now() - startedAt);
console.log(`validator=public-surfaces`);
console.log(`node=${process.version}`);
console.log(`platform=${process.platform}-${process.arch}`);
console.log(`files=${files.length}`);
console.log(`markdown=${files.filter((file) => extname(file) === '.md').length}`);
console.log(`html=${files.filter((file) => extname(file) === '.html').length}`);
console.log(`duration_ms=${durationMs}`);

if (failures.length > 0) {
  console.error(`result=FAIL count=${failures.length}`);
  for (const failure of failures) console.error(`- ${failure}`);
  process.exitCode = 1;
} else {
  console.log('result=PASS');
}
