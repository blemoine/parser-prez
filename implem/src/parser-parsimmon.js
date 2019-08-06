const P = require('parsimmon');

const language = {
  Null() {
    return P.alt(P.string('null').result(null))
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
    return P.sepBy(
      P.seq(
        r.String.skip(P.optWhitespace)
          .skip(P.string(':'))
          .skip(P.optWhitespace),
        r.Json
      ),
      P.string(',').trim(P.optWhitespace)
    )
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
