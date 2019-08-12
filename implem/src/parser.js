const parseParsimmon = require('./parser-parsimmon');
const parsePeg = require('./parser-peg').parse;
const parseAntlr4 = require('./parser-antlr4');
const parseNearley = require('./parser-nearley');
const parseChevrotain = require('./parser-chevrotain');

module.exports = function(parser) {
  if (parser === 'parsimmon') {
    return parseParsimmon;
  } else if (parser === 'peg') {
    return parsePeg;
  } else if (parser === 'antlr4') {
    return parseAntlr4;
  } else if (parser === 'nearley') {
    return parseNearley;
  } else if (parser === 'chevrotain') {
    return parseChevrotain;
  } else {
    throw new Error(`${parser} is not supported`);
  }
};
