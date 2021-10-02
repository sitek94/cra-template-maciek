#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const sortPackageJson = require('sort-package-json');
const simpleGit = require('simple-git');

// Get package.json path
const packageJsonPath = path.resolve(__dirname, '../package.json');

// Read the file
let file = fs.readFileSync(packageJsonPath, 'utf8');

// Remove eslintConfig key - ".eslintrc.js" will be created instead
try {
  const obj = JSON.parse(file);
  if (obj['eslintConfig']) {
    delete obj['eslintConfig'];
    console.log('Removed "eslintConfig"!');
  }

  file = JSON.stringify(obj, null, 2);
} catch (e) {
  console.error('Failed to remove eslint config key:', e);
}

// Sort the file using "sort-package-json"
const sorted = sortPackageJson(file, {
  sortOrder: [
    'name',
    'version',
    'private',
    'scripts',
    'dependencies',
    'devDependencies',
    'browserslist',
  ],
});

if (sorted !== file) {
  fs.writeFileSync(packageJsonPath, sorted, 'utf8');
  console.log(`Sorted package.json!`);
}

// Commit
const git = simpleGit();
git.add('package.json');
git.commit('chore: organize package.json');
