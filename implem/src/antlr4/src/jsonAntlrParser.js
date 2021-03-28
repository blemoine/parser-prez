// Generated from src/jsonAntlr.g4 by ANTLR 4.9.1
// jshint ignore: start
import antlr4 from 'antlr4';
import jsonAntlrListener from './jsonAntlrListener.js';
import jsonAntlrVisitor from './jsonAntlrVisitor.js';


const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003\u0006\u001e\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0003\u0002\u0003",
    "\u0002\u0007\u0002\u000f\n\u0002\f\u0002\u000e\u0002\u0012\u000b\u0002",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004",
    "\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0002\u0002",
    "\u0007\u0002\u0004\u0006\b\n\u0002\u0002\u0002\u0019\u0002\f\u0003\u0002",
    "\u0002\u0002\u0004\u0013\u0003\u0002\u0002\u0002\u0006\u0017\u0003\u0002",
    "\u0002\u0002\b\u0019\u0003\u0002\u0002\u0002\n\u001b\u0003\u0002\u0002",
    "\u0002\f\u0010\u0005\u0004\u0003\u0002\r\u000f\u0005\u0004\u0003\u0002",
    "\u000e\r\u0003\u0002\u0002\u0002\u000f\u0012\u0003\u0002\u0002\u0002",
    "\u0010\u000e\u0003\u0002\u0002\u0002\u0010\u0011\u0003\u0002\u0002\u0002",
    "\u0011\u0003\u0003\u0002\u0002\u0002\u0012\u0010\u0003\u0002\u0002\u0002",
    "\u0013\u0014\u0005\u0006\u0004\u0002\u0014\u0015\u0005\n\u0006\u0002",
    "\u0015\u0016\u0005\b\u0005\u0002\u0016\u0005\u0003\u0002\u0002\u0002",
    "\u0017\u0018\u0007\u0003\u0002\u0002\u0018\u0007\u0003\u0002\u0002\u0002",
    "\u0019\u001a\u0007\u0004\u0002\u0002\u001a\t\u0003\u0002\u0002\u0002",
    "\u001b\u001c\u0007\u0005\u0002\u0002\u001c\u000b\u0003\u0002\u0002\u0002",
    "\u0003\u0010"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class jsonAntlrParser extends antlr4.Parser {

    static grammarFileName = "jsonAntlr.g4";
    static literalNames = [  ];
    static symbolicNames = [ null, "OPENING_TAG", "CLOSING_TAG", "TEXT", 
                             "WHITESPACE" ];
    static ruleNames = [ "languages", "openAndCloseTag", "openingTag", "closingTag", 
                         "text" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = jsonAntlrParser.ruleNames;
        this.literalNames = jsonAntlrParser.literalNames;
        this.symbolicNames = jsonAntlrParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	languages() {
	    let localctx = new LanguagesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, jsonAntlrParser.RULE_languages);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 10;
	        this.openAndCloseTag();
	        this.state = 14;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===jsonAntlrParser.OPENING_TAG) {
	            this.state = 11;
	            this.openAndCloseTag();
	            this.state = 16;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	openAndCloseTag() {
	    let localctx = new OpenAndCloseTagContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, jsonAntlrParser.RULE_openAndCloseTag);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 17;
	        this.openingTag();
	        this.state = 18;
	        this.text();
	        this.state = 19;
	        this.closingTag();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	openingTag() {
	    let localctx = new OpeningTagContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, jsonAntlrParser.RULE_openingTag);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 21;
	        this.match(jsonAntlrParser.OPENING_TAG);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	closingTag() {
	    let localctx = new ClosingTagContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, jsonAntlrParser.RULE_closingTag);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 23;
	        this.match(jsonAntlrParser.CLOSING_TAG);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	text() {
	    let localctx = new TextContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, jsonAntlrParser.RULE_text);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 25;
	        this.match(jsonAntlrParser.TEXT);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

jsonAntlrParser.EOF = antlr4.Token.EOF;
jsonAntlrParser.OPENING_TAG = 1;
jsonAntlrParser.CLOSING_TAG = 2;
jsonAntlrParser.TEXT = 3;
jsonAntlrParser.WHITESPACE = 4;

jsonAntlrParser.RULE_languages = 0;
jsonAntlrParser.RULE_openAndCloseTag = 1;
jsonAntlrParser.RULE_openingTag = 2;
jsonAntlrParser.RULE_closingTag = 3;
jsonAntlrParser.RULE_text = 4;

class LanguagesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = jsonAntlrParser.RULE_languages;
    }

	openAndCloseTag = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(OpenAndCloseTagContext);
	    } else {
	        return this.getTypedRuleContext(OpenAndCloseTagContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof jsonAntlrListener ) {
	        listener.enterLanguages(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof jsonAntlrListener ) {
	        listener.exitLanguages(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof jsonAntlrVisitor ) {
	        return visitor.visitLanguages(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class OpenAndCloseTagContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = jsonAntlrParser.RULE_openAndCloseTag;
    }

	openingTag() {
	    return this.getTypedRuleContext(OpeningTagContext,0);
	};

	text() {
	    return this.getTypedRuleContext(TextContext,0);
	};

	closingTag() {
	    return this.getTypedRuleContext(ClosingTagContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof jsonAntlrListener ) {
	        listener.enterOpenAndCloseTag(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof jsonAntlrListener ) {
	        listener.exitOpenAndCloseTag(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof jsonAntlrVisitor ) {
	        return visitor.visitOpenAndCloseTag(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class OpeningTagContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = jsonAntlrParser.RULE_openingTag;
    }

	OPENING_TAG() {
	    return this.getToken(jsonAntlrParser.OPENING_TAG, 0);
	};

	enterRule(listener) {
	    if(listener instanceof jsonAntlrListener ) {
	        listener.enterOpeningTag(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof jsonAntlrListener ) {
	        listener.exitOpeningTag(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof jsonAntlrVisitor ) {
	        return visitor.visitOpeningTag(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ClosingTagContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = jsonAntlrParser.RULE_closingTag;
    }

	CLOSING_TAG() {
	    return this.getToken(jsonAntlrParser.CLOSING_TAG, 0);
	};

	enterRule(listener) {
	    if(listener instanceof jsonAntlrListener ) {
	        listener.enterClosingTag(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof jsonAntlrListener ) {
	        listener.exitClosingTag(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof jsonAntlrVisitor ) {
	        return visitor.visitClosingTag(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TextContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = jsonAntlrParser.RULE_text;
    }

	TEXT() {
	    return this.getToken(jsonAntlrParser.TEXT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof jsonAntlrListener ) {
	        listener.enterText(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof jsonAntlrListener ) {
	        listener.exitText(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof jsonAntlrVisitor ) {
	        return visitor.visitText(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




jsonAntlrParser.LanguagesContext = LanguagesContext; 
jsonAntlrParser.OpenAndCloseTagContext = OpenAndCloseTagContext; 
jsonAntlrParser.OpeningTagContext = OpeningTagContext; 
jsonAntlrParser.ClosingTagContext = ClosingTagContext; 
jsonAntlrParser.TextContext = TextContext; 
