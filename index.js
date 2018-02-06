'use strict';

// REGISTER ALL MODULES
module.exports = Object.assign(
  {},
  require('./lib/isEmpty.js'),
  require('./lib/isEqual.js'),
  require('./lib/isEven.js'),
  require('./lib/isOdd.js'),
  require('./lib/isPositiveNumber.js'),
  require('./lib/isNegativeNumber.js'),
  require('./lib/sum.js'),
  require('./lib/average.js'),
  require('./lib/floatPrecise.js'),
  require('./lib/isAscending.js'),
  require('./lib/isDescending.js'),
  require('./lib/isPrime.js'),
  require('./lib/median.js'),
  require('./lib/mode.js'),
  require('./lib/populationStandardDeviation.js'),
  require('./lib/populationVariance.js'),
  require('./lib/sampleStandardDeviation.js'),
  require('./lib/sampleVariance.js')
);
