const C = require('chevrotain');
const createToken = C.createToken;
const Lexer = C.Lexer;
const CstParser = C.CstParser;

const LCurlyBracket = createToken({ name: 'LCurlyBracket', pattern: '{' });
const RCurlyBracket = createToken({ name: 'RCurlyBracket', pattern: '}' });

const LSquareBracket = createToken({ name: 'LSquareBracket', pattern: '[' });
const RSquareBracket = createToken({ name: 'RSquareBracket', pattern: ']' });

const Comma = createToken({ name: 'Comma', pattern: ',' });
const Colon = createToken({ name: 'Colon', pattern: ':' });

const True = createToken({ name: 'True', pattern: 'true' });
const False = createToken({ name: 'False', pattern: 'false' });
const Null = createToken({ name: 'Null', pattern: 'null' });

const Number = createToken({ name: 'Number', pattern: /-?(0|[1-9]\d*)(\.\d+)?/ });
const String = createToken({ name: 'String', pattern: /"(.*?)"/ });

const WS = createToken({
  name: 'Whitespace',
  pattern: /\s+/,
  group: Lexer.SKIPPED,
  line_breaks: true,
});

let allTokens = [
  WS,
  True,
  False,
  Null,
  RCurlyBracket,
  LCurlyBracket,
  LSquareBracket,
  RSquareBracket,
  Comma,
  Colon,
  Number,
  String,
];

class JsonParser extends CstParser {
  constructor(input) {
    super(input);

    this.RULE('nullValue', () => this.CONSUME(Null));
    this.RULE('boolean', () => this.OR([{ ALT: () => this.CONSUME(True) }, { ALT: () => this.CONSUME(False) }]));
    this.RULE('number', () => this.CONSUME(Number));
    this.RULE('string', () => this.CONSUME(String));
    this.RULE('array', () => {
      this.CONSUME(LSquareBracket);
      this.MANY_SEP({ SEP: Comma, DEF: () => this.SUBRULE(this.json) });
      this.CONSUME(RSquareBracket);
    });

    this.RULE('member', () => {
      this.CONSUME(String);
      this.CONSUME(Colon);
      this.SUBRULE(this.json);
    });
    this.RULE('object', () => {
      this.CONSUME(LCurlyBracket);
      this.MANY_SEP({
        SEP: Comma,
        DEF: () => {
          this.SUBRULE(this.member);
        },
      });
      this.CONSUME(RCurlyBracket);
    });

    this.RULE('json', () =>
      this.OR([
        { ALT: () => this.SUBRULE(this.nullValue) },
        { ALT: () => this.SUBRULE(this.boolean) },
        { ALT: () => this.SUBRULE(this.number) },
        { ALT: () => this.SUBRULE(this.string) },
        { ALT: () => this.SUBRULE(this.array) },
        { ALT: () => this.SUBRULE(this.object) },
      ])
    );

    this.performSelfAnalysis();
  }
}
const parser = new JsonParser(allTokens);

const BaseJsonVisitor = parser.getBaseCstVisitorConstructor();
class MyVisitor extends BaseJsonVisitor {
  constructor() {
    super();
    // The "validateVisitor" method is a helper utility which performs static analysis
    // to detect missing or redundant visitor methods
    this.validateVisitor();
  }

  nullValue(ctx) {
    return null;
  }

  boolean(ctx) {
    return !!ctx.True;
  }

  number(ctx) {
    return parseFloat(ctx.Number[0].image);
  }
  string(ctx) {
    const txt = ctx.String[0].image;
    return txt.slice(1, txt.length - 1);
  }

  array(ctx) {
    return (ctx.json || []).map((el) => this.visit(el));
  }

  member(ctx) {
    const txt = ctx.String[0].image;
    const key = txt.slice(1, txt.length - 1);
    return [key, this.visit(ctx.json)];
  }
  object(ctx) {
    const members = ctx.member || [];
    return members
      .map((el) => this.visit(el))
      .reduce((acc, [k, v]) => {
        return {
          ...acc,
          [k]: v,
        };
      }, {});
  }

  json(ctx) {
    if (ctx.boolean) {
      return this.visit(ctx.boolean);
    } else if (ctx.nullValue) {
      return this.visit(ctx.nullValue);
    } else if (ctx.string) {
      return this.visit(ctx.string);
    } else if (ctx.number) {
      return this.visit(ctx.number);
    } else if (ctx.array) {
      return this.visit(ctx.array);
    } else if (ctx.object) {
      return this.visit(ctx.object);
    } else if (ctx.member) {
      return this.visit(ctx.member);
    } else {
      throw new Error('WTF');
    }
  }
}
const myVisitorInstance = new MyVisitor();

module.exports = function parse(program) {
  const lexer = new Lexer(allTokens);
  const lexingResult = lexer.tokenize(program);
  parser.input = lexingResult.tokens;

  const cst = parser.json();
  return myVisitorInstance.visit(cst);
};
