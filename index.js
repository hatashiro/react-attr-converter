'use strict';

var map = require('./map');

var convert = function (key) {
  var val = map[key.toLowerCase()];
  return val ? val : key;
};

module.exports = convert;
module.exports.convert = convert;
