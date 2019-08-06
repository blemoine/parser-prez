const P = require('parsimmon');

const language = {
  Null() {
    return P.string('null').result(null);
  },
  Number() {
    return P.regexp(/-?[1-9]*[0-9]+(\.[0-9]+)?/)
      .map((str) => parseFloat(str))
      .desc('number');
  },
  Boolean() {
    return P.alt(P.string('false').result(false), P.string('true').result(true)).desc('boolean');
  },
  String() {
    return P.regexp(/"([^\0-\x1F\x22\x5C]*)"/, 1).desc('string');
  },
  Array(r) {
    return P.sepBy(r.Json, P.string(',').trim(P.optWhitespace)).wrap(
      P.string('[').skip(P.optWhitespace),
      P.optWhitespace.then(P.string(']'))
    );
  },
  Object(r) {
    const member = P.seq(r.String.skip(P.string(':').trim(P.optWhitespace)), r.Json);
    return P.sepBy(member, P.string(',').trim(P.optWhitespace))
      .wrap(P.string('{').skip(P.optWhitespace), P.optWhitespace.then(P.string('}')))
      .map((arr) =>
        arr.reduce(
          (acc, [k, v]) => ({
            ...acc,
            [k]: v,
          }),
          {}
        )
      );
  },

  Json(r) {
    return P.alt(r.Null, r.Number, r.Boolean, r.String, r.Array, r.Object);
  },
};

const lexer = P.createLanguage(language);

module.exports = function parse(program) {
  return lexer.Json.tryParse(program);
};
