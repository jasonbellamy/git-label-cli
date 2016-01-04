import {prompt} from '../lib/prompt';


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
 * @param {Array} options.packages array of paths to package files
 */
export function run(type, interactive, {api, token, repo, packages}) {
  if (interactive) {
    return prompt().then((response) => type(response.server, response.packages));
  }
  return type({api, token, repo}, packages);
}
