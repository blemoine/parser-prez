const parseParsimmon = require('./parser-parsimmon');

module.exports = function(parser) {
  if (parser === 'parsimmon') {
    return parseParsimmon;
  } else {
    throw new Error(`${parser} is not supported`);
  }
};
