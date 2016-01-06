'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.run = run;

var _package = require('../lib/package');

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
 * @param {Array} options.packages globbing pattern to the package file(s)
 */
function run(type, interactive, _ref) {
  var api = _ref.api;
  var token = _ref.token;
  var repo = _ref.repo;
  var packages = _ref.packages;

  if (interactive) {
    return (0, _prompt.prompt)().then(function (response) {
      return (0, _package.findPackages)(response.packages).then(type.bind(null, response.server));
    });
  }

  return (0, _package.findPackages)(packages).then(type.bind(null, { api: api, token: token, repo: repo }));
}