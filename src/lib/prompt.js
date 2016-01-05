import inquirer from 'inquirer';
import {getRepo} from './repo';


/**
 * Prompt the user to provide a location for label packages
 *
 * @name promptPackages
 * @function
 * @return {Promise} an array of objects that contain answer information
 */
function promptPackages() {
  const questions = [
    {type: "input", name: "package", message: "path to a label package"},
    {type: "confirm", name: "askAgain", message: "Do you want to add another package?", default: true}
  ];

  return new Promise((resolve, reject) => {
    (function prompt(packages) {
      inquirer.prompt(questions, (answers) => {
        let answer = packages.concat([answers.package]);
        return (answers.askAgain) ? prompt(answer) : resolve(answer);
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
  const questions = [
    {type: "input", name: "api", message: "api url", default: "https://api.github.com"},
    {type: "input", name: "repo", message: "repo name [username/repo]", default: getRepo('.git/config')},
    {type: "input", name: "token", message: "api token"}
  ];

  return new Promise((resolve, reject) => {
    inquirer.prompt(questions, (answers) => resolve(answers));
  });
}

/**
 * Prompt the user to provide information for git-label
 *
 * @name prompt
 * @function
 * @return {Promise} success or error message
 */
export function prompt() {
  return promptServer()
    .then((server) => {
      return promptPackages()
        .then((packages) => {
          return {server, packages};
        })
    });
}
