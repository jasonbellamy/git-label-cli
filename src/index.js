#!/usr/bin/env node

var program = require('commander');
var gitLabel = require('git-label');


program
  .version('2.0.0')
  .option('-a, --api <api>', 'API endpoint url')
  .option('-t, --token <token>', 'API token')
  .option('-r, --repo <repo>', 'repo name [username/repo]')
  .option('-p, --packages <items>', 'comma delimited path(s) to label package files', (val) => val.split(','), [])
  .parse(process.argv);


gitLabel.add({api: program.api, token: program.token, repo: program.repo}, program.packages)
  .then(console.log)
  .catch(console.log);
