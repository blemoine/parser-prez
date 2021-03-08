const P = require("parsimmon");

const OpeningTag = P.regex(/\[([a-z][a-z])\]/i, 1)
  .map(tag => tag.toLowerCase())
  .desc("Opening tag [XX]");
const ClosingTag = lang => P.regex(new RegExp(`\\[/${lang}\\]`, "i")).desc(`Closing tag [/${lang}]`);
const Language = OpeningTag.chain(lang =>
  P.regex(new RegExp(`.*?(?=\\[/${lang}\\])`, "i"))
    .map(text => [lang, text])
    .skip(ClosingTag(lang))
    .desc(`Content finishing with [/${lang}]`)
);

const Languages = Language.sepBy(P.optWhitespace).map(pairs =>
  pairs.reduce((acc, [lang, text]) => ({ ...acc, [lang]: text }), {})
);

module.exports = function parse(program) {
  return Languages.tryParse(program);
};
