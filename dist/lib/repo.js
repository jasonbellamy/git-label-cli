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
  return (/(:)(.+)(\.git)/g.exec((0, _fs.readFileSync)(path, 'utf8'))[2].split('/').filter(function (key, index, xs) {
      return index > xs.length - 3;
    }).join('/')
  );
}