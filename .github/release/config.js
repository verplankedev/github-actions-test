const readFileSync = require('fs').readFileSync
const join = require('path').join

const releaseRules = [
  {type: 'breaking', release: 'major'},
  {type: 'feature', release: 'minor'},
  {type: 'fix', release: 'patch'},
  {type: 'hotfix', release: 'patch'},
  {type: 'chore', release: 'patch'},
];

const types = [
  {type: 'feature', section: 'Features'},
  {type: 'fix', section: 'Fixes'},
  {type: 'hotfix', section: 'Fixes'},
  {type: 'chore', section: 'Chores'},
];

config = {
  commitAnalyzer: {
    releaseRules: releaseRules,
  },
  releaseNotesGenerator: {
    preset: 'conventionalcommits',
    presetConfig: {
      types: types
    },
    writerOpts: {
      headerPartial: readFileSync(join(__dirname, 'templates/header.hbs'), 'utf-8'),
    },
  },
  github: {
    releasedLabels: 'v<%= nextRelease.gitTag %>',
  },
}

module.exports = config;
