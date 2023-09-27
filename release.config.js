const config = require('./.github/release/config.js')

module.exports = {
  branches: ['main'],
  tagFormat: 'v${version}',
  plugins: [
    ['@semantic-release/commit-analyzer', config.commitAnalyzer],
    ['@semantic-release/release-notes-generator', config.releaseNotesGenerator],
    ['@semantic-release/github', config.github],
  ]
}
