// Generated from src/jsonAntlr.g4 by ANTLR 4.9.1
// jshint ignore: start
import antlr4 from 'antlr4';
import jsonAntlrListener from './jsonAntlrListener.js';
import jsonAntlrVisitor from './jsonAntlrVisitor.js';


const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003\u000eI\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0003\u0002\u0003\u0002\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0007\u0003\u001b\n\u0003\f\u0003",
    "\u000e\u0003\u001e\u000b\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0005\u0003$\n\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0007\u0005.",
    "\n\u0005\f\u0005\u000e\u00051\u000b\u0005\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0005\u00057\n\u0005\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0005\u0006?\n\u0006\u0003",
    "\u0007\u0003\u0007\u0003\b\u0003\b\u0003\t\u0003\t\u0003\n\u0003\n\u0003",
    "\n\u0002\u0002\u000b\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0002",
    "\u0003\u0003\u0002\t\n\u0002H\u0002\u0014\u0003\u0002\u0002\u0002\u0004",
    "#\u0003\u0002\u0002\u0002\u0006%\u0003\u0002\u0002\u0002\b6\u0003\u0002",
    "\u0002\u0002\n>\u0003\u0002\u0002\u0002\f@\u0003\u0002\u0002\u0002\u000e",
    "B\u0003\u0002\u0002\u0002\u0010D\u0003\u0002\u0002\u0002\u0012F\u0003",
    "\u0002\u0002\u0002\u0014\u0015\u0005\n\u0006\u0002\u0015\u0003\u0003",
    "\u0002\u0002\u0002\u0016\u0017\u0007\u0003\u0002\u0002\u0017\u001c\u0005",
    "\u0006\u0004\u0002\u0018\u0019\u0007\u0004\u0002\u0002\u0019\u001b\u0005",
    "\u0006\u0004\u0002\u001a\u0018\u0003\u0002\u0002\u0002\u001b\u001e\u0003",
    "\u0002\u0002\u0002\u001c\u001a\u0003\u0002\u0002\u0002\u001c\u001d\u0003",
    "\u0002\u0002\u0002\u001d\u001f\u0003\u0002\u0002\u0002\u001e\u001c\u0003",
    "\u0002\u0002\u0002\u001f \u0007\u0005\u0002\u0002 $\u0003\u0002\u0002",
    "\u0002!\"\u0007\u0003\u0002\u0002\"$\u0007\u0005\u0002\u0002#\u0016",
    "\u0003\u0002\u0002\u0002#!\u0003\u0002\u0002\u0002$\u0005\u0003\u0002",
    "\u0002\u0002%&\u0005\u000e\b\u0002&\'\u0007\u0006\u0002\u0002\'(\u0005",
    "\n\u0006\u0002(\u0007\u0003\u0002\u0002\u0002)*\u0007\u0007\u0002\u0002",
    "*/\u0005\n\u0006\u0002+,\u0007\u0004\u0002\u0002,.\u0005\n\u0006\u0002",
    "-+\u0003\u0002\u0002\u0002.1\u0003\u0002\u0002\u0002/-\u0003\u0002\u0002",
    "\u0002/0\u0003\u0002\u0002\u000202\u0003\u0002\u0002\u00021/\u0003\u0002",
    "\u0002\u000223\u0007\b\u0002\u000237\u0003\u0002\u0002\u000245\u0007",
    "\u0007\u0002\u000257\u0007\b\u0002\u00026)\u0003\u0002\u0002\u00026",
    "4\u0003\u0002\u0002\u00027\t\u0003\u0002\u0002\u00028?\u0005\u0004\u0003",
    "\u00029?\u0005\b\u0005\u0002:?\u0005\f\u0007\u0002;?\u0005\u0010\t\u0002",
    "<?\u0005\u0012\n\u0002=?\u0005\u000e\b\u0002>8\u0003\u0002\u0002\u0002",
    ">9\u0003\u0002\u0002\u0002>:\u0003\u0002\u0002\u0002>;\u0003\u0002\u0002",
    "\u0002><\u0003\u0002\u0002\u0002>=\u0003\u0002\u0002\u0002?\u000b\u0003",
    "\u0002\u0002\u0002@A\u0007\f\u0002\u0002A\r\u0003\u0002\u0002\u0002",
    "BC\u0007\r\u0002\u0002C\u000f\u0003\u0002\u0002\u0002DE\t\u0002\u0002",
    "\u0002E\u0011\u0003\u0002\u0002\u0002FG\u0007\u000b\u0002\u0002G\u0013",
    "\u0003\u0002\u0002\u0002\u0007\u001c#/6>"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class jsonAntlrParser extends antlr4.Parser {

    static grammarFileName = "jsonAntlr.g4";
    static literalNames = [ null, "'{'", "','", "'}'", "':'", "'['", "']'", 
                            "'true'", "'false'", "'null'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, "NUMBER", "STRING", "WHITESPACE" ];
    static ruleNames = [ "json", "object", "member", "array", "value", "number", 
                         "string", "bool", "nullValue" ];

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



	json() {
	    let localctx = new JsonContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, jsonAntlrParser.RULE_json);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 18;
	        this.value();
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



	object() {
	    let localctx = new ObjectContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, jsonAntlrParser.RULE_object);
	    var _la = 0; // Token type
	    try {
	        this.state = 33;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 20;
	            this.match(jsonAntlrParser.T__0);
	            this.state = 21;
	            this.member();
	            this.state = 26;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===jsonAntlrParser.T__1) {
	                this.state = 22;
	                this.match(jsonAntlrParser.T__1);
	                this.state = 23;
	                this.member();
	                this.state = 28;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 29;
	            this.match(jsonAntlrParser.T__2);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 31;
	            this.match(jsonAntlrParser.T__0);
	            this.state = 32;
	            this.match(jsonAntlrParser.T__2);
	            break;

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



	member() {
	    let localctx = new MemberContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, jsonAntlrParser.RULE_member);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 35;
	        this.string();
	        this.state = 36;
	        this.match(jsonAntlrParser.T__3);
	        this.state = 37;
	        this.value();
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



	array() {
	    let localctx = new ArrayContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, jsonAntlrParser.RULE_array);
	    var _la = 0; // Token type
	    try {
	        this.state = 52;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 39;
	            this.match(jsonAntlrParser.T__4);
	            this.state = 40;
	            this.value();
	            this.state = 45;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===jsonAntlrParser.T__1) {
	                this.state = 41;
	                this.match(jsonAntlrParser.T__1);
	                this.state = 42;
	                this.value();
	                this.state = 47;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 48;
	            this.match(jsonAntlrParser.T__5);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 50;
	            this.match(jsonAntlrParser.T__4);
	            this.state = 51;
	            this.match(jsonAntlrParser.T__5);
	            break;

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



	value() {
	    let localctx = new ValueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, jsonAntlrParser.RULE_value);
	    try {
	        this.state = 60;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case jsonAntlrParser.T__0:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 54;
	            this.object();
	            break;
	        case jsonAntlrParser.T__4:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 55;
	            this.array();
	            break;
	        case jsonAntlrParser.NUMBER:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 56;
	            this.number();
	            break;
	        case jsonAntlrParser.T__6:
	        case jsonAntlrParser.T__7:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 57;
	            this.bool();
	            break;
	        case jsonAntlrParser.T__8:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 58;
	            this.nullValue();
	            break;
	        case jsonAntlrParser.STRING:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 59;
	            this.string();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
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



	number() {
	    let localctx = new NumberContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, jsonAntlrParser.RULE_number);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 62;
	        this.match(jsonAntlrParser.NUMBER);
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



	string() {
	    let localctx = new StringContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, jsonAntlrParser.RULE_string);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 64;
	        this.match(jsonAntlrParser.STRING);
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



	bool() {
	    let localctx = new BoolContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, jsonAntlrParser.RULE_bool);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 66;
	        _la = this._input.LA(1);
	        if(!(_la===jsonAntlrParser.T__6 || _la===jsonAntlrParser.T__7)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
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



	nullValue() {
	    let localctx = new NullValueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, jsonAntlrParser.RULE_nullValue);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 68;
	        this.match(jsonAntlrParser.T__8);
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
jsonAntlrParser.T__0 = 1;
jsonAntlrParser.T__1 = 2;
jsonAntlrParser.T__2 = 3;
jsonAntlrParser.T__3 = 4;
jsonAntlrParser.T__4 = 5;
jsonAntlrParser.T__5 = 6;
jsonAntlrParser.T__6 = 7;
jsonAntlrParser.T__7 = 8;
jsonAntlrParser.T__8 = 9;
jsonAntlrParser.NUMBER = 10;
jsonAntlrParser.STRING = 11;
jsonAntlrParser.WHITESPACE = 12;

jsonAntlrParser.RULE_json = 0;
jsonAntlrParser.RULE_object = 1;
jsonAntlrParser.RULE_member = 2;
jsonAntlrParser.RULE_array = 3;
jsonAntlrParser.RULE_value = 4;
jsonAntlrParser.RULE_number = 5;
jsonAntlrParser.RULE_string = 6;
jsonAntlrParser.RULE_bool = 7;
jsonAntlrParser.RULE_nullValue = 8;

class JsonContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = jsonAntlrParser.RULE_json;
    }

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof jsonAntlrListener ) {
	        listener.enterJson(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof jsonAntlrListener ) {
	        listener.exitJson(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof jsonAntlrVisitor ) {
	        return visitor.visitJson(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ObjectContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = jsonAntlrParser.RULE_object;
    }

	member = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(MemberContext);
	    } else {
	        return this.getTypedRuleContext(MemberContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof jsonAntlrListener ) {
	        listener.enterObject(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof jsonAntlrListener ) {
	        listener.exitObject(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof jsonAntlrVisitor ) {
	        return visitor.visitObject(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class MemberContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = jsonAntlrParser.RULE_member;
    }

	string() {
	    return this.getTypedRuleContext(StringContext,0);
	};

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof jsonAntlrListener ) {
	        listener.enterMember(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof jsonAntlrListener ) {
	        listener.exitMember(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof jsonAntlrVisitor ) {
	        return visitor.visitMember(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ArrayContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = jsonAntlrParser.RULE_array;
    }

	value = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ValueContext);
	    } else {
	        return this.getTypedRuleContext(ValueContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof jsonAntlrListener ) {
	        listener.enterArray(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof jsonAntlrListener ) {
	        listener.exitArray(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof jsonAntlrVisitor ) {
	        return visitor.visitArray(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ValueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = jsonAntlrParser.RULE_value;
    }

	object() {
	    return this.getTypedRuleContext(ObjectContext,0);
	};

	array() {
	    return this.getTypedRuleContext(ArrayContext,0);
	};

	number() {
	    return this.getTypedRuleContext(NumberContext,0);
	};

	bool() {
	    return this.getTypedRuleContext(BoolContext,0);
	};

	nullValue() {
	    return this.getTypedRuleContext(NullValueContext,0);
	};

	string() {
	    return this.getTypedRuleContext(StringContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof jsonAntlrListener ) {
	        listener.enterValue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof jsonAntlrListener ) {
	        listener.exitValue(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof jsonAntlrVisitor ) {
	        return visitor.visitValue(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class NumberContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = jsonAntlrParser.RULE_number;
    }

	NUMBER() {
	    return this.getToken(jsonAntlrParser.NUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof jsonAntlrListener ) {
	        listener.enterNumber(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof jsonAntlrListener ) {
	        listener.exitNumber(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof jsonAntlrVisitor ) {
	        return visitor.visitNumber(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class StringContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = jsonAntlrParser.RULE_string;
    }

	STRING() {
	    return this.getToken(jsonAntlrParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof jsonAntlrListener ) {
	        listener.enterString(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof jsonAntlrListener ) {
	        listener.exitString(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof jsonAntlrVisitor ) {
	        return visitor.visitString(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class BoolContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = jsonAntlrParser.RULE_bool;
    }


	enterRule(listener) {
	    if(listener instanceof jsonAntlrListener ) {
	        listener.enterBool(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof jsonAntlrListener ) {
	        listener.exitBool(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof jsonAntlrVisitor ) {
	        return visitor.visitBool(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class NullValueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = jsonAntlrParser.RULE_nullValue;
    }


	enterRule(listener) {
	    if(listener instanceof jsonAntlrListener ) {
	        listener.enterNullValue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof jsonAntlrListener ) {
	        listener.exitNullValue(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof jsonAntlrVisitor ) {
	        return visitor.visitNullValue(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




jsonAntlrParser.JsonContext = JsonContext; 
jsonAntlrParser.ObjectContext = ObjectContext; 
jsonAntlrParser.MemberContext = MemberContext; 
jsonAntlrParser.ArrayContext = ArrayContext; 
jsonAntlrParser.ValueContext = ValueContext; 
jsonAntlrParser.NumberContext = NumberContext; 
jsonAntlrParser.StringContext = StringContext; 
jsonAntlrParser.BoolContext = BoolContext; 
jsonAntlrParser.NullValueContext = NullValueContext; 
