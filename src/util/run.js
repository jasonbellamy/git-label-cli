import {add, remove, find} from 'git-label';
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
 * @param {Array} options.pattern globbing pattern to the label packages
 */
export function run(type, interactive, {api, token, repo, pattern}) {
  const fn = type === 'add' ? add : remove;
  if (interactive) {
    return prompt().then(({server, pattern}) => find(pattern).then(fn.bind(null, server)));
  }

  return find(pattern).then(fn.bind(null, {api, token, repo}));
}
