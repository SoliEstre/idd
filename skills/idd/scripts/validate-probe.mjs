import { readFileSync } from 'node:fs';
import { isAbsolute, normalize, resolve } from 'node:path';

const path = resolve(process.argv[2] ?? 'idd-probe.json');
const failures = [];
const placeholderPattern = /^(?:tbd|todo|unknown|reproducible command|named accountable human)$/i;

function requireString(value, field, { rejectPlaceholder = false } = {}) {
  if (typeof value !== 'string' || value.trim() === '') {
    failures.push(`${field} must be a non-empty string`);
    return;
  }
  if (rejectPlaceholder && (placeholderPattern.test(value.trim()) || /[<>]/.test(value))) {
    failures.push(`${field} must not contain a placeholder`);
  }
}

function requireStringArray(value, field, { nonEmpty = false, paths = false } = {}) {
  if (!Array.isArray(value)) {
    failures.push(`${field} must be an array`);
    return;
  }
  if (nonEmpty && value.length === 0) failures.push(`${field} must contain at least one entry`);
  value.forEach((entry, index) => {
    requireString(entry, `${field}[${index}]`, { rejectPlaceholder: true });
    if (paths && typeof entry === 'string') {
      const normalized = normalize(entry);
      if (isAbsolute(entry) || normalized === '..' || normalized.startsWith(`..\\`) || normalized.startsWith('../')) {
        failures.push(`${field}[${index}] must be a repository-relative path without traversal`);
      }
    }
  });
}

let data;
try {
  data = JSON.parse(readFileSync(path, 'utf8'));
} catch (error) {
  console.error(`result=FAIL file=${path}`);
  console.error(`- cannot read valid JSON: ${error.message}`);
  process.exit(1);
}

requireString(data.artifact_id, 'artifact_id', { rejectPlaceholder: true });
if (data.state !== 'Probe') failures.push('state must be "Probe"');
requireString(data.question, 'question', { rejectPlaceholder: true });
requireString(data.expected_observation, 'expected_observation', { rejectPlaceholder: true });
requireString(data.run_command, 'run_command', { rejectPlaceholder: true });
requireString(data.stop_condition, 'stop_condition', { rejectPlaceholder: true });
requireStringArray(data.invariants, 'invariants', { nonEmpty: true });
requireStringArray(data.evidence_paths, 'evidence_paths', { nonEmpty: true, paths: true });

const isolation = data.isolation;
if (!isolation || typeof isolation !== 'object' || Array.isArray(isolation)) {
  failures.push('isolation must be an object');
} else {
  if (!['branch', 'worktree', 'sandbox', 'fixture'].includes(isolation.environment)) {
    failures.push('isolation.environment must be "branch", "worktree", "sandbox", or "fixture"');
  }
  for (const field of ['production_traffic', 'production_data', 'irreversible_side_effects']) {
    if (isolation[field] !== false) failures.push(`isolation.${field} must be false for an IDD probe`);
  }
}

if (!['synthetic', 'deidentified'].includes(data.data_policy?.classification)) {
  failures.push('data_policy.classification must be "synthetic" or "deidentified"');
}
requireString(data.data_policy?.source, 'data_policy.source', { rejectPlaceholder: true });
requireString(data.data_policy?.reviewer, 'data_policy.reviewer', { rejectPlaceholder: true });

console.log(`validator=idd-probe file=${path}`);
console.log('validator_scope=STRUCTURE_ONLY execution_authorization=NOT_GRANTED_BY_VALIDATOR');
if (failures.length) {
  console.error(`result=FAIL count=${failures.length}`);
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}
console.log('result=PASS');
