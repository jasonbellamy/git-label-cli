#!/usr/bin/env node

var program  = require('commander');
var gitLabel = require('git-label');
var pkg      = require('../package.json');


program
  .version(pkg.version)
  .option('-a, --api <api>', 'api url')
  .option('-t, --token <token>', 'api token')
  .option('-r, --repo <repo>', 'repo name [username/repo]')
  .option('-p, --packages <items>', 'comma delimited path(s) to a label package', (val) => val.split(','), [])

program
  .command('add')
  .description('Add the specified labels to a repo')
  .action(function() {
    gitLabel.add({api: program.api, token: program.token, repo: program.repo}, program.packages)
      .then(console.log)
      .catch(console.log);
  });

program
  .command('remove')
  .description('Remove the specified labels from a repo')
  .action(function() {
    gitLabel.remove({api: program.api, token: program.token, repo: program.repo}, program.packages)
      .then(console.log)
      .catch(console.log);
  });

program.parse(process.argv);
