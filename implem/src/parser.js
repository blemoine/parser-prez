const parseParsimmon = require('./parser-parsimmon');
const parsePeg = require('./parser-peg').parse;

module.exports = function(parser) {
  if (parser === 'parsimmon') {
    return parseParsimmon;
  } else if (parser === 'peg') {
    return parsePeg;
  } else {
    throw new Error(`${parser} is not supported`);
  }
};
