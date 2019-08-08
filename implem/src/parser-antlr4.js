const antlr4 = require('antlr4/index');

const JsonAntlrParser = require('./antlr4/src/jsonAntlrParser').jsonAntlrParser;
const JsonAntlrLexer = require('./antlr4/src/jsonAntlrLexer').jsonAntlrLexer;
const JsonAntlrVisitor = require('./antlr4/src/jsonAntlrVisitor').jsonAntlrVisitor;

module.exports = function parse(program) {
  const chars = new antlr4.InputStream(program);

  const lexer = new JsonAntlrLexer(chars);
  const tokens = new antlr4.CommonTokenStream(lexer);
  const parser = new JsonAntlrParser(tokens);

  parser.buildParseTrees = true;

  const tree = parser.json();

  const result = tree.accept(new Visitor());

  return result;
};

class Visitor extends JsonAntlrVisitor {
  visitJson(ctx) {
    return ctx.children[0].children[0].accept(this);
  }
  visitNumber(ctx) {
    return parseFloat(ctx.getText());
  }
  visitNullValue() {
    return null;
  }
  visitBool(ctx) {
    return ctx.getText() === 'true';
  }
  visitString(ctx) {
    const text = ctx.getText();
    return text.substr(1, text.length - 2);
  }

  visitArray(ctx) {
    return ctx.value().map((child) => {
      if (child.children.length === 1) {
        return this.visit(child.children[0]);
      } else {
        console.error(child.children);
        return [];
      }
    });
  }

  visitObject(ctx) {
    return ctx.member().reduce((acc, child) => {
      const key = child.string().accept(this);
      const value = child.value().children[0].accept(this);

      return { ...acc, [key]: value };
    }, {});
  }
}
