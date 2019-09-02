// Generated from src/arithmetic/arithmeticAntlr.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');
var arithmeticAntlrListener = require('./arithmeticAntlrListener').arithmeticAntlrListener;
var arithmeticAntlrVisitor = require('./arithmeticAntlrVisitor').arithmeticAntlrVisitor;

var grammarFileName = "arithmeticAntlr.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u0006\u0013\u0004\u0002\t\u0002\u0003\u0002\u0003\u0002\u0003",
    "\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003",
    "\u0002\u0007\u0002\u000e\n\u0002\f\u0002\u000e\u0002\u0011\u000b\u0002",
    "\u0003\u0002\u0002\u0003\u0002\u0003\u0002\u0002\u0002\u0002\u0013\u0002",
    "\u0004\u0003\u0002\u0002\u0002\u0004\u0005\b\u0002\u0001\u0002\u0005",
    "\u0006\u0007\u0005\u0002\u0002\u0006\u000f\u0003\u0002\u0002\u0002\u0007",
    "\b\f\u0005\u0002\u0002\b\t\u0007\u0003\u0002\u0002\t\u000e\u0005\u0002",
    "\u0002\u0006\n\u000b\f\u0004\u0002\u0002\u000b\f\u0007\u0004\u0002\u0002",
    "\f\u000e\u0005\u0002\u0002\u0005\r\u0007\u0003\u0002\u0002\u0002\r\n",
    "\u0003\u0002\u0002\u0002\u000e\u0011\u0003\u0002\u0002\u0002\u000f\r",
    "\u0003\u0002\u0002\u0002\u000f\u0010\u0003\u0002\u0002\u0002\u0010\u0003",
    "\u0003\u0002\u0002\u0002\u0011\u000f\u0003\u0002\u0002\u0002\u0004\r",
    "\u000f"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'*'", "'/'" ];

var symbolicNames = [ null, null, null, "FLOAT", "WHITESPACE" ];

var ruleNames =  [ "expr" ];

function arithmeticAntlrParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

arithmeticAntlrParser.prototype = Object.create(antlr4.Parser.prototype);
arithmeticAntlrParser.prototype.constructor = arithmeticAntlrParser;

Object.defineProperty(arithmeticAntlrParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

arithmeticAntlrParser.EOF = antlr4.Token.EOF;
arithmeticAntlrParser.T__0 = 1;
arithmeticAntlrParser.T__1 = 2;
arithmeticAntlrParser.FLOAT = 3;
arithmeticAntlrParser.WHITESPACE = 4;

arithmeticAntlrParser.RULE_expr = 0;


function ExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = arithmeticAntlrParser.RULE_expr;
    return this;
}

ExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExprContext.prototype.constructor = ExprContext;

ExprContext.prototype.FLOAT = function() {
    return this.getToken(arithmeticAntlrParser.FLOAT, 0);
};

ExprContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

ExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof arithmeticAntlrListener ) {
        listener.enterExpr(this);
	}
};

ExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof arithmeticAntlrListener ) {
        listener.exitExpr(this);
	}
};

ExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof arithmeticAntlrVisitor ) {
        return visitor.visitExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};



arithmeticAntlrParser.prototype.expr = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new ExprContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 0;
    this.enterRecursionRule(localctx, 0, arithmeticAntlrParser.RULE_expr, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 3;
        this.match(arithmeticAntlrParser.FLOAT);
        this._ctx.stop = this._input.LT(-1);
        this.state = 13;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,1,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 11;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new ExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, arithmeticAntlrParser.RULE_expr);
                    this.state = 5;
                    if (!( this.precpred(this._ctx, 3))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                    }
                    this.state = 6;
                    this.match(arithmeticAntlrParser.T__0);
                    this.state = 7;
                    this.expr(4);
                    break;

                case 2:
                    localctx = new ExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, arithmeticAntlrParser.RULE_expr);
                    this.state = 8;
                    if (!( this.precpred(this._ctx, 2))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                    }
                    this.state = 9;
                    this.match(arithmeticAntlrParser.T__1);
                    this.state = 10;
                    this.expr(3);
                    break;

                } 
            }
            this.state = 15;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,1,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};


arithmeticAntlrParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 0:
			return this.expr_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

arithmeticAntlrParser.prototype.expr_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 3);
		case 1:
			return this.precpred(this._ctx, 2);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.arithmeticAntlrParser = arithmeticAntlrParser;
