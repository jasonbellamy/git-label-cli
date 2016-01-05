import {readFileSync} from 'fs';


/**
 * Extracts the git repo (name/repo) from the provided path.
 *
 * @name getRepo
 * @function
 * @param {string} path the path to extract the git information from
 * @return {Promise} the extracted repo (name/repo)
 */
export function getRepo(path) {
  return (/(:)(.+)(\.git)/g).exec(readFileSync(path, 'utf8'))[2]
    .split('/')
    .filter((key, index, xs) => index > xs.length - 3)
    .join('/');
}
