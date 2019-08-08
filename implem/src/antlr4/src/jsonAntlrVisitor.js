// Generated from src/jsonAntlr.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by jsonAntlrParser.

function jsonAntlrVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

jsonAntlrVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
jsonAntlrVisitor.prototype.constructor = jsonAntlrVisitor;

// Visit a parse tree produced by jsonAntlrParser#json.
jsonAntlrVisitor.prototype.visitJson = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by jsonAntlrParser#object.
jsonAntlrVisitor.prototype.visitObject = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by jsonAntlrParser#member.
jsonAntlrVisitor.prototype.visitMember = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by jsonAntlrParser#array.
jsonAntlrVisitor.prototype.visitArray = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by jsonAntlrParser#value.
jsonAntlrVisitor.prototype.visitValue = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by jsonAntlrParser#number.
jsonAntlrVisitor.prototype.visitNumber = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by jsonAntlrParser#string.
jsonAntlrVisitor.prototype.visitString = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by jsonAntlrParser#bool.
jsonAntlrVisitor.prototype.visitBool = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by jsonAntlrParser#nullValue.
jsonAntlrVisitor.prototype.visitNullValue = function(ctx) {
  return this.visitChildren(ctx);
};



exports.jsonAntlrVisitor = jsonAntlrVisitor;