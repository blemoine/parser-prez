const nearley = require('nearley');
const grammar = require('./jsonEarley.js');

module.exports = function parse(program) {
  const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));
  parser.feed(program);

  const result = parser.results;

  if (result.length !== 1) {
    console.error(result)
    throw new Error('the grammar should be unambiguous');
  } else {
    return result[0];
  }
};
