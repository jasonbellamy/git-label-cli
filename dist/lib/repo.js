'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRepo = getRepo;

var _fs = require('fs');

/**
 * Extracts the git repo (name/repo) from the provided path.
 *
 * @name getRepo
 * @function
 * @param {string} path the path to extract the git information from
 * @return {Promise} the extracted repo (name/repo)
 */
function getRepo(path) {
  return new Promise(function (resolve, reject) {
    (0, _fs.readFile)(path, function (err, res) {
      if (err) {
        reject(null);
      }

      resolve(/(:)(.+)(\.git)/g.exec(res)[2].split('/').filter(function (key, index, xs) {
        return index > xs.length - 3;
      }).join('/'));
    });
  });
}