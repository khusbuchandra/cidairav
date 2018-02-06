'use strict';

exports.isAscending = (...params) => {
  if (params.length < 2) throw new Error('Must provide two or more paramters');
  let value = params.shift();
  for (const param of params) {
    if (Number.isNaN(parseFloat(param))) throw new Error('One of your parameters does not evaluate to a number');
    if (param < value) return false;
    value = param;
  }
  return true;
};
