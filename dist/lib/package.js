'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findPackages = findPackages;

var _glob = require('glob');

/**
 * Takes a glob and returns a list of label package files
 *
 * @name findPackages
 * @function
 * @param {String} path a globbing pattern
 * @return {Promise} array containing any found label packages
 */
function findPackages(path) {
  return new Promise(function (resolve, reject) {
    (0, _glob.glob)(path, function (err, res) {
      if (err) {
        reject(err);
      }
      resolve(res.filter(function (file) {
        return file.endsWith('.json');
      }));
    });
  });
};