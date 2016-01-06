#!/usr/bin/env node
'use strict';

var _commander = require('commander');

var _commander2 = _interopRequireDefault(_commander);

var _gitLabel = require('git-label');

var _run = require('./util/run');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_commander2.default.option('-i, --interactive', 'run in interactive mode').option('-a, --api <api>', 'api url').option('-t, --token <token>', 'api token').option('-r, --repo <repo>', 'repo name [username/repo]').option('-p, --packages <glob>', 'globbing pattern to the package file(s)');

_commander2.default.command('add').description('Add the specified labels to a repo').action(function () {
  return (0, _run.run)(_gitLabel.add, _commander2.default.interactive, _commander2.default).then(console.log).catch(console.log);
});

_commander2.default.command('remove').description('Remove the specified labels from a repo').action(function () {
  return (0, _run.run)(_gitLabel.remove, _commander2.default.interactive, _commander2.default).then(console.log).catch(console.log);
});

_commander2.default.parse(process.argv);