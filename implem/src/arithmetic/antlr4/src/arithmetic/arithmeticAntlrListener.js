// Generated from src/arithmetic/arithmeticAntlr.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by arithmeticAntlrParser.
function arithmeticAntlrListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

arithmeticAntlrListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
arithmeticAntlrListener.prototype.constructor = arithmeticAntlrListener;

// Enter a parse tree produced by arithmeticAntlrParser#expr.
arithmeticAntlrListener.prototype.enterExpr = function(ctx) {
};

// Exit a parse tree produced by arithmeticAntlrParser#expr.
arithmeticAntlrListener.prototype.exitExpr = function(ctx) {
};



exports.arithmeticAntlrListener = arithmeticAntlrListener;