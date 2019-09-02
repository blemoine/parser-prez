const antlr4 = require('antlr4/index');

const ArithmeticParser = require('./antlr4/src/arithmetic/arithmeticAntlrParser').arithmeticAntlrParser;
const ArithmeticLexer = require('./antlr4/src/arithmetic/arithmeticAntlrLexer').arithmeticAntlrLexer;
const ArithmeticVisitor = require('./antlr4/src/arithmetic/arithmeticAntlrVisitor').arithmeticAntlrVisitor;

function parse(program) {
  const chars = new antlr4.InputStream(program);

  const lexer = new ArithmeticLexer(chars);
  const tokens = new antlr4.CommonTokenStream(lexer);
  const parser = new ArithmeticParser(tokens);

  parser.buildParseTrees = true;

  const tree = parser.expr();

  const result = tree.accept(new Visitor());

  return result;
}

class Visitor extends ArithmeticVisitor {
  visitExpr(ctx) {
    if(ctx.children.length === 3) {
      return this.visitExpr(ctx.children[0]) * this.visitExpr(ctx.children[2])
    } else {
      return this.visitFloat(ctx.children[0])
    }
  }
  visitFloat(ctx) {
    return parseFloat(ctx.getText());
  }
}

console.log(parse('3.0542 * 2'));
