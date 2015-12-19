'use strict';

let map = require('./map');

let convert = key => {
  let val = map[key];
  return val ? val : key;
};

module.exports = convert;
module.exports.convert = convert;
