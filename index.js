
/**
 * Dependencies.
 */

var exec = require('child_process').exec;
var request = require('superagent');
var fs = require('fs');

/**
 * Login to a Craigslist account.
 *
 * @param {String} email
 * @param {String} password
 */

var login = exports.login = function(email, password){
  return function(nightmare) {
    // WIP
  };
};

/**
 * Perform a search.
 *
 * @param {String} query
 */

var search = exports.search = function(type, query) {
  return function(nightmare) {
    // WIP
  }
};

/**
 * Create listing.
 */

var createListing = exports.createListing = function() {
  return function(nightmare) {
    // WIP
  }
};
