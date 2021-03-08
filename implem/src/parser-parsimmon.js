const P = require("parsimmon");

const OpeningTag = P.string("[")
  .then(P.regex(/[a-z][a-z]/i))
  .skip(P.string("]"))
  .map(tag => tag.toLowerCase())
  .desc("Opening tag [XX]");
const ClosingTag = lang =>
  P.string("[/")
    .then(P.regex(new RegExp(lang, "i")))
    .skip(P.string("]"))
    .desc(`Closing tag [/${lang}]`);

const language = {
  Language() {
    return OpeningTag.chain(lang => {
      const closingTag = ClosingTag(lang);

      return P.regex(new RegExp(`.*?(?=\\[/${lang}\\])`, "i"))
        .map(text => [lang, text])
        .skip(closingTag)
        .desc(`Content finishing with [/${lang}]`);
    });
  },
  Languages(r) {
    return r.Language.sepBy(P.optWhitespace).map(pairs => {
      return pairs.reduce((acc, [lang, text]) => ({ ...acc, [lang]: text }), {});
    });
  }
};

const lexer = P.createLanguage(language);

module.exports = function parse(program) {
  return lexer.Languages.tryParse(program);
};
