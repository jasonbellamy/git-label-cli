import {glob} from 'glob';


/**
 * Takes a glob and returns a list of label package files
 *
 * @name findPackages
 * @function
 * @param {String} path a globbing pattern
 * @return {Promise} array containing any found label packages
 */
export function findPackages(path) {
  return new Promise((resolve, reject) => {
    glob(path, function (err, res) {
      if (err) { reject(err); }
      resolve(res.filter(file => file.endsWith('.json')));
    });
  });
};
