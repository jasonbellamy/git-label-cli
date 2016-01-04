#!/usr/bin/env node

import program from 'commander';
import {add, remove} from 'git-label';
import {run} from './util/run';


program
  .option('-i, --interactive', 'run in interactive mode')
  .option('-a, --api <api>', 'api url')
  .option('-t, --token <token>', 'api token')
  .option('-r, --repo <repo>', 'repo name [username/repo]')
  .option('-p, --packages <items>', 'comma delimited path(s) to a label package', (val) => val.split(','), []);

program
  .command('add')
  .description('Add the specified labels to a repo')
  .action(() => run(add, program.interactive, program).then(console.log).catch(console.log));

program
  .command('remove')
  .description('Remove the specified labels from a repo')
  .action(() => run(remove, program.interactive, program).then(console.log).catch(console.log));

program.parse(process.argv);
