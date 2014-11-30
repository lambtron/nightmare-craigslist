
/**
 * Dependencies.
 */

var exec = require('child_process').exec;
var request = require('superagent');
var fs = require('fs');

/**
 * Set location of Craigslist.
 *
 * @param {String} location
 */

var setLocation = exports.setLocation = function(location) {
  return function(nightmare) {
    nightmare
      .viewport(800, 1600)
      .goto('http://www.craigslist.org/about/sites')
      .click('a[href*="' + location + '"]')
      .wait(1000);
  };
};

/**
 * Login to a Craigslist account.
 *
 * @param {String} email
 * @param {String} password
 */

var login = exports.login = function(email, password){
  return function(nightmare) {
    nightmare
      .viewport(800, 1600)
      .goto('https://accounts.craigslist.org/login')
      .type('#inputEmailHandle', email)
      .type('#inputPassword', password)
      .click('p > button[type="submit"]')
      .wait(1000);
  };
};

/**
 * Perform a search.
 *
 * @param {String} type
 * @param {String} query
 */

var search = exports.search = function(type, query) {
  return function(nightmare) {
    nightmare
      .exists('#query', function(ready) {
        if (!ready) throw 'Search box not ready.';
        return;
      })
      .type('#query', query)
      .evaluate(function() {
        // TODO: need to set the type.
      }, function() {
      })
      .click('#go')
      .wait(1000);
  };
};

/**
 * Get listing.
 */

var getListing = exports.getListing = function() {
  return function(nightmare) {
    // WIP
  };
};

/**
 * Create listing.
 *
 * @param {Object} listing
 */

var createListing = exports.createListing = function(listing) {
  return function(nightmare) {
    // WIP
  };
};
