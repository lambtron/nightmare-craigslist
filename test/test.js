var Nightmare = require('nightmare');
var LinkedIn = require('../index.js');

var nightmare = new Nightmare();
var email = 'andyjiang@gmail.com';
var password = 'ji5woaV7Ev7noF3bOg5u';

var n = './test/n.png';

nightmare
  .use(LinkedIn.login(email, password))
  .use(LinkedIn.search('people', 'product manager'));

nightmare
  .url(function(url) {
    console.log(url);
  });

nightmare
  .screenshot(n)
  .run(function(err, res) {
    if (err) console.log(err);
    console.log('done');
  });
