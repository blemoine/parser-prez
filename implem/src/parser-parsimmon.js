const P = require("parsimmon");

const OpeningTag = P.regex(/\[([a-z][a-z])\]/i, 1).desc("Opening tag [XX]");
const ClosingTag = P.regex(/\[\/([a-z][a-z])\]/i, 1).desc("Closing tag [XX]");
const Language = OpeningTag.chain(opening =>
  P.regex(/.*?(?=\[)/).chain(text => ClosingTag.map(closing => [opening, text, closing]))
);

const Languages = Language.sepBy(P.optWhitespace);

module.exports = function parse(program) {
  return Languages.tryParse(program);
};
