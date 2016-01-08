'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.prompt = prompt;

var _inquirer = require('inquirer');

var _inquirer2 = _interopRequireDefault(_inquirer);

var _repo = require('./repo');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Prompt the user to provide information for git-label
 *
 * @name prompt
 * @function
 * @return {Promise} success or error message
 */
function prompt() {
  var questions = [{ type: "input", name: "api", message: "api url", default: "https://api.github.com" }, { type: "input", name: "repo", message: "repo name [username/repo]", default: function _default() {
      var done = this.async();
      return (0, _repo.getRepo)('.git/config').then(done).catch(done);
    }
  }, { type: "input", name: "token", message: "api token" }, { type: "input", name: "pattern", message: "globbing pattern to the label packages" }];

  return new Promise(function (resolve, reject) {
    _inquirer2.default.prompt(questions, function (_ref) {
      var api = _ref.api;
      var repo = _ref.repo;
      var token = _ref.token;
      var pattern = _ref.pattern;

      resolve({ server: { api: api, repo: repo, token: token }, pattern: pattern });
    });
  });
}