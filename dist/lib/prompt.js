"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.prompt = prompt;

var _inquirer = require("inquirer");

var _inquirer2 = _interopRequireDefault(_inquirer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Prompt the user to provide a location for label packages
 *
 * @name promptPackages
 * @function
 * @return {Promise} an array of objects that contain answer information
 */
function promptPackages() {
  var questions = [{ type: "input", name: "package", message: "path to a label package" }, { type: "confirm", name: "askAgain", message: "Do you want to add another package?", default: true }];

  return new Promise(function (resolve, reject) {
    (function prompt(packages) {
      _inquirer2.default.prompt(questions, function (answers) {
        var answer = packages.concat([answers.package]);
        return answers.askAgain ? prompt(answer) : resolve(answer);
      });
    })([]);
  });
}

/**
 * Prompt the user to provide GIT information
 *
 * @name promptServer
 * @function
 * @return {Promise} an object that contains the provided server information
 */
function promptServer() {
  var questions = [{ type: "input", name: "api", message: "api url", default: "https://api.github.com" }, { type: "input", name: "token", message: "api token" }, { type: "input", name: "repo", message: "repo name [username/repo]" }];

  return new Promise(function (resolve, reject) {
    _inquirer2.default.prompt(questions, function (answers) {
      return resolve(answers);
    });
  });
}

/**
 * Prompt the user to provide information for git-label
 *
 * @name prompt
 * @function
 * @return {Promise} success or error message
 */
function prompt() {
  return promptServer().then(function (server) {
    return promptPackages().then(function (packages) {
      return { server: server, packages: packages };
    });
  });
}