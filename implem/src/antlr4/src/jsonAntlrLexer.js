// Generated from src/jsonAntlr.g4 by ANTLR 4.9.1
// jshint ignore: start
import antlr4 from 'antlr4';



const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0002\u0006\'\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003",
    "\u0004\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0003\u0002",
    "\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0004",
    "\u0006\u0004\u001b\n\u0004\r\u0004\u000e\u0004\u001c\u0003\u0005\u0003",
    "\u0005\u0003\u0006\u0006\u0006\"\n\u0006\r\u0006\u000e\u0006#\u0003",
    "\u0006\u0003\u0006\u0002\u0002\u0007\u0003\u0003\u0005\u0004\u0007\u0005",
    "\t\u0002\u000b\u0006\u0003\u0002\u0005\u0004\u0002C\\c|\u0003\u0002",
    "]]\u0005\u0002\u000b\f\u000f\u000f\"\"\u0002\'\u0002\u0003\u0003\u0002",
    "\u0002\u0002\u0002\u0005\u0003\u0002\u0002\u0002\u0002\u0007\u0003\u0002",
    "\u0002\u0002\u0002\u000b\u0003\u0002\u0002\u0002\u0003\r\u0003\u0002",
    "\u0002\u0002\u0005\u0012\u0003\u0002\u0002\u0002\u0007\u001a\u0003\u0002",
    "\u0002\u0002\t\u001e\u0003\u0002\u0002\u0002\u000b!\u0003\u0002\u0002",
    "\u0002\r\u000e\u0007]\u0002\u0002\u000e\u000f\t\u0002\u0002\u0002\u000f",
    "\u0010\t\u0002\u0002\u0002\u0010\u0011\u0007_\u0002\u0002\u0011\u0004",
    "\u0003\u0002\u0002\u0002\u0012\u0013\u0007]\u0002\u0002\u0013\u0014",
    "\u00071\u0002\u0002\u0014\u0015\u0003\u0002\u0002\u0002\u0015\u0016",
    "\t\u0002\u0002\u0002\u0016\u0017\t\u0002\u0002\u0002\u0017\u0018\u0007",
    "_\u0002\u0002\u0018\u0006\u0003\u0002\u0002\u0002\u0019\u001b\u0005",
    "\t\u0005\u0002\u001a\u0019\u0003\u0002\u0002\u0002\u001b\u001c\u0003",
    "\u0002\u0002\u0002\u001c\u001a\u0003\u0002\u0002\u0002\u001c\u001d\u0003",
    "\u0002\u0002\u0002\u001d\b\u0003\u0002\u0002\u0002\u001e\u001f\n\u0003",
    "\u0002\u0002\u001f\n\u0003\u0002\u0002\u0002 \"\t\u0004\u0002\u0002",
    "! \u0003\u0002\u0002\u0002\"#\u0003\u0002\u0002\u0002#!\u0003\u0002",
    "\u0002\u0002#$\u0003\u0002\u0002\u0002$%\u0003\u0002\u0002\u0002%&\b",
    "\u0006\u0002\u0002&\f\u0003\u0002\u0002\u0002\u0005\u0002\u001c#\u0003",
    "\b\u0002\u0002"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class jsonAntlrLexer extends antlr4.Lexer {

    static grammarFileName = "jsonAntlr.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [  ];
	static symbolicNames = [ null, "OPENING_TAG", "CLOSING_TAG", "TEXT", "WHITESPACE" ];
	static ruleNames = [ "OPENING_TAG", "CLOSING_TAG", "TEXT", "CHAR", "WHITESPACE" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    }

    get atn() {
        return atn;
    }
}

jsonAntlrLexer.EOF = antlr4.Token.EOF;
jsonAntlrLexer.OPENING_TAG = 1;
jsonAntlrLexer.CLOSING_TAG = 2;
jsonAntlrLexer.TEXT = 3;
jsonAntlrLexer.WHITESPACE = 4;



