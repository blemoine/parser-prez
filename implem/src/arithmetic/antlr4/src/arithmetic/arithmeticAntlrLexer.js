// Generated from src/arithmetic/arithmeticAntlr.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');



var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\u0006.\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0003\u0002\u0003",
    "\u0002\u0003\u0003\u0003\u0003\u0003\u0004\u0005\u0004\u0013\n\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0006\u0004\u0018\n\u0004\r\u0004",
    "\u000e\u0004\u0019\u0005\u0004\u001c\n\u0004\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0007\u0005!\n\u0005\f\u0005\u000e\u0005$\u000b\u0005\u0005",
    "\u0005&\n\u0005\u0003\u0006\u0006\u0006)\n\u0006\r\u0006\u000e\u0006",
    "*\u0003\u0006\u0003\u0006\u0002\u0002\u0007\u0003\u0003\u0005\u0004",
    "\u0007\u0005\t\u0002\u000b\u0006\u0003\u0002\u0005\u0003\u00022;\u0003",
    "\u00023;\u0005\u0002\u000b\f\u000f\u000f\"\"\u00022\u0002\u0003\u0003",
    "\u0002\u0002\u0002\u0002\u0005\u0003\u0002\u0002\u0002\u0002\u0007\u0003",
    "\u0002\u0002\u0002\u0002\u000b\u0003\u0002\u0002\u0002\u0003\r\u0003",
    "\u0002\u0002\u0002\u0005\u000f\u0003\u0002\u0002\u0002\u0007\u0012\u0003",
    "\u0002\u0002\u0002\t%\u0003\u0002\u0002\u0002\u000b(\u0003\u0002\u0002",
    "\u0002\r\u000e\u0007,\u0002\u0002\u000e\u0004\u0003\u0002\u0002\u0002",
    "\u000f\u0010\u00071\u0002\u0002\u0010\u0006\u0003\u0002\u0002\u0002",
    "\u0011\u0013\u0007/\u0002\u0002\u0012\u0011\u0003\u0002\u0002\u0002",
    "\u0012\u0013\u0003\u0002\u0002\u0002\u0013\u0014\u0003\u0002\u0002\u0002",
    "\u0014\u001b\u0005\t\u0005\u0002\u0015\u0017\u00070\u0002\u0002\u0016",
    "\u0018\t\u0002\u0002\u0002\u0017\u0016\u0003\u0002\u0002\u0002\u0018",
    "\u0019\u0003\u0002\u0002\u0002\u0019\u0017\u0003\u0002\u0002\u0002\u0019",
    "\u001a\u0003\u0002\u0002\u0002\u001a\u001c\u0003\u0002\u0002\u0002\u001b",
    "\u0015\u0003\u0002\u0002\u0002\u001b\u001c\u0003\u0002\u0002\u0002\u001c",
    "\b\u0003\u0002\u0002\u0002\u001d&\u00072\u0002\u0002\u001e\"\t\u0003",
    "\u0002\u0002\u001f!\t\u0002\u0002\u0002 \u001f\u0003\u0002\u0002\u0002",
    "!$\u0003\u0002\u0002\u0002\" \u0003\u0002\u0002\u0002\"#\u0003\u0002",
    "\u0002\u0002#&\u0003\u0002\u0002\u0002$\"\u0003\u0002\u0002\u0002%\u001d",
    "\u0003\u0002\u0002\u0002%\u001e\u0003\u0002\u0002\u0002&\n\u0003\u0002",
    "\u0002\u0002\')\t\u0004\u0002\u0002(\'\u0003\u0002\u0002\u0002)*\u0003",
    "\u0002\u0002\u0002*(\u0003\u0002\u0002\u0002*+\u0003\u0002\u0002\u0002",
    "+,\u0003\u0002\u0002\u0002,-\b\u0006\u0002\u0002-\f\u0003\u0002\u0002",
    "\u0002\t\u0002\u0012\u0019\u001b\"%*\u0003\b\u0002\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function arithmeticAntlrLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

arithmeticAntlrLexer.prototype = Object.create(antlr4.Lexer.prototype);
arithmeticAntlrLexer.prototype.constructor = arithmeticAntlrLexer;

Object.defineProperty(arithmeticAntlrLexer.prototype, "atn", {
        get : function() {
                return atn;
        }
});

arithmeticAntlrLexer.EOF = antlr4.Token.EOF;
arithmeticAntlrLexer.T__0 = 1;
arithmeticAntlrLexer.T__1 = 2;
arithmeticAntlrLexer.FLOAT = 3;
arithmeticAntlrLexer.WHITESPACE = 4;

arithmeticAntlrLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

arithmeticAntlrLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

arithmeticAntlrLexer.prototype.literalNames = [ null, "'*'", "'/'" ];

arithmeticAntlrLexer.prototype.symbolicNames = [ null, null, null, "FLOAT", 
                                                 "WHITESPACE" ];

arithmeticAntlrLexer.prototype.ruleNames = [ "T__0", "T__1", "FLOAT", "INT", 
                                             "WHITESPACE" ];

arithmeticAntlrLexer.prototype.grammarFileName = "arithmeticAntlr.g4";



exports.arithmeticAntlrLexer = arithmeticAntlrLexer;

