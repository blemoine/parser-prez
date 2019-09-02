// Generated automatically by nearley, version 2.18.0
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "expression$subexpression$1", "symbols": [{"literal":"*"}]},
    {"name": "expression$subexpression$1", "symbols": [{"literal":"/"}]},
    {"name": "expression", "symbols": ["expression", "__", "expression$subexpression$1", "__", "expression"], "postprocess": ([e1, ,[operator],, e2]) => operator === '*'? e1*e2: e1/e2},
    {"name": "expression", "symbols": ["float"]},
    {"name": "float$ebnf$1", "symbols": [{"literal":"-"}], "postprocess": id},
    {"name": "float$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "float$ebnf$2$subexpression$1$ebnf$1", "symbols": [/[0-9]/]},
    {"name": "float$ebnf$2$subexpression$1$ebnf$1", "symbols": ["float$ebnf$2$subexpression$1$ebnf$1", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "float$ebnf$2$subexpression$1", "symbols": [{"literal":"."}, "float$ebnf$2$subexpression$1$ebnf$1"]},
    {"name": "float$ebnf$2", "symbols": ["float$ebnf$2$subexpression$1"], "postprocess": id},
    {"name": "float$ebnf$2", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "float", "symbols": ["float$ebnf$1", "integer", "float$ebnf$2"], "postprocess":  ([sign, integerPart, decimalPart]) =>
        parseFloat((sign || '') + integerPart + (decimalPart || []).flat().join(''))
        },
    {"name": "integer$ebnf$1", "symbols": [/[0-9]/]},
    {"name": "integer$ebnf$1", "symbols": ["integer$ebnf$1", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "integer", "symbols": [/[1-9]/, "integer$ebnf$1"], "postprocess": ([head, tail]) =>  head + tail.join('')},
    {"name": "integer", "symbols": [/[0-9]/], "postprocess": ([head]) =>  head},
    {"name": "__$ebnf$1", "symbols": []},
    {"name": "__$ebnf$1", "symbols": ["__$ebnf$1", {"literal":" "}], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "__", "symbols": ["__$ebnf$1"]}
]
  , ParserStart: "expression"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
