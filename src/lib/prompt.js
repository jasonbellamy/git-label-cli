import inquirer from 'inquirer';
import {getRepo} from './repo';


/**
 * Prompt the user to provide information for git-label
 *
 * @name prompt
 * @function
 * @return {Promise} success or error message
 */
export function prompt() {
  const questions = [
    {type: "input", name: "api", message: "api url", default: "https://api.github.com"},
    {type: "input", name: "repo", message: "repo name [username/repo]", default() {
      const done = this.async();
      return getRepo('.git/config').then(done).catch(done);
    }},
    {type: "input", name: "token", message: "api token"},
    {type: "input", name: "pattern", message: "globbing pattern to the label packages"}
  ];

  return new Promise((resolve, reject) => {
    inquirer.prompt(questions, ({api, repo, token, pattern}) => {
      resolve({server: {api, repo, token}, pattern});
    });
  });
}
