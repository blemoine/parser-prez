const parseParsimmon = require('./parser-parsimmon');
const parsePeg = require('./parser-peg').parse;
const parseAntlr4 = require('./parser-antlr4');

module.exports = function(parser) {
  if (parser === 'parsimmon') {
    return parseParsimmon;
  } else if (parser === 'peg') {
    return parsePeg;
  } else if (parser === 'antlr4') {
    return parseAntlr4;
  } else {
    throw new Error(`${parser} is not supported`);
  }
};
