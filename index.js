
/**
 * Module dependencies.
 */

var injectable = require('injectable');

/**
 * Run `fn` along `context` pulling
 * arbitary methods.
 */

module.exports = function(context, fn){
  return injectable(context)(fn);
};
