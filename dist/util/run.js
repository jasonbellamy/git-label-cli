'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.run = run;

var _gitLabel = require('git-label');

var _prompt = require('../lib/prompt');

/**
 * Utility function to determine which type of cli to use
 *
 * @name run
 * @function
 * @param {Function} type add/remove function
 * @param {Boolean} interactive should the interactive prompt be used
 * @param {Object} options the configuration object
 * @param {String} options.server.api the api endpoint to connect to
 * @param {String} options.server.token the api token to use
 * @param {String} options.server.repo the git repo to manipulate
 * @param {Array} options.pattern globbing pattern to the label packages
 */
function run(type, interactive, _ref) {
  var api = _ref.api;
  var token = _ref.token;
  var repo = _ref.repo;
  var pattern = _ref.pattern;

  var fn = type === 'add' ? _gitLabel.add : _gitLabel.remove;
  if (interactive) {
    return (0, _prompt.prompt)().then(function (_ref2) {
      var server = _ref2.server;
      var pattern = _ref2.pattern;
      return (0, _gitLabel.find)(pattern).then(fn.bind(null, server));
    });
  }

  return (0, _gitLabel.find)(pattern).then(fn.bind(null, { api: api, token: token, repo: repo }));
}