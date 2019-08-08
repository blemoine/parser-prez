// Generated from src/jsonAntlr.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by jsonAntlrParser.
function jsonAntlrListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

jsonAntlrListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
jsonAntlrListener.prototype.constructor = jsonAntlrListener;

// Enter a parse tree produced by jsonAntlrParser#json.
jsonAntlrListener.prototype.enterJson = function(ctx) {
};

// Exit a parse tree produced by jsonAntlrParser#json.
jsonAntlrListener.prototype.exitJson = function(ctx) {
};


// Enter a parse tree produced by jsonAntlrParser#object.
jsonAntlrListener.prototype.enterObject = function(ctx) {
};

// Exit a parse tree produced by jsonAntlrParser#object.
jsonAntlrListener.prototype.exitObject = function(ctx) {
};


// Enter a parse tree produced by jsonAntlrParser#member.
jsonAntlrListener.prototype.enterMember = function(ctx) {
};

// Exit a parse tree produced by jsonAntlrParser#member.
jsonAntlrListener.prototype.exitMember = function(ctx) {
};


// Enter a parse tree produced by jsonAntlrParser#array.
jsonAntlrListener.prototype.enterArray = function(ctx) {
};

// Exit a parse tree produced by jsonAntlrParser#array.
jsonAntlrListener.prototype.exitArray = function(ctx) {
};


// Enter a parse tree produced by jsonAntlrParser#value.
jsonAntlrListener.prototype.enterValue = function(ctx) {
};

// Exit a parse tree produced by jsonAntlrParser#value.
jsonAntlrListener.prototype.exitValue = function(ctx) {
};


// Enter a parse tree produced by jsonAntlrParser#number.
jsonAntlrListener.prototype.enterNumber = function(ctx) {
};

// Exit a parse tree produced by jsonAntlrParser#number.
jsonAntlrListener.prototype.exitNumber = function(ctx) {
};


// Enter a parse tree produced by jsonAntlrParser#string.
jsonAntlrListener.prototype.enterString = function(ctx) {
};

// Exit a parse tree produced by jsonAntlrParser#string.
jsonAntlrListener.prototype.exitString = function(ctx) {
};


// Enter a parse tree produced by jsonAntlrParser#bool.
jsonAntlrListener.prototype.enterBool = function(ctx) {
};

// Exit a parse tree produced by jsonAntlrParser#bool.
jsonAntlrListener.prototype.exitBool = function(ctx) {
};


// Enter a parse tree produced by jsonAntlrParser#nullValue.
jsonAntlrListener.prototype.enterNullValue = function(ctx) {
};

// Exit a parse tree produced by jsonAntlrParser#nullValue.
jsonAntlrListener.prototype.exitNullValue = function(ctx) {
};



exports.jsonAntlrListener = jsonAntlrListener;