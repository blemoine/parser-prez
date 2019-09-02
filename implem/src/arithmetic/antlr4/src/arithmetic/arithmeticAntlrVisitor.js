// Generated from src/arithmetic/arithmeticAntlr.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by arithmeticAntlrParser.

function arithmeticAntlrVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

arithmeticAntlrVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
arithmeticAntlrVisitor.prototype.constructor = arithmeticAntlrVisitor;

// Visit a parse tree produced by arithmeticAntlrParser#expr.
arithmeticAntlrVisitor.prototype.visitExpr = function(ctx) {
  return this.visitChildren(ctx);
};



exports.arithmeticAntlrVisitor = arithmeticAntlrVisitor;