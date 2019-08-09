// Generated automatically by nearley, version 2.18.0
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "json$subexpression$1", "symbols": ["boolean"]},
    {"name": "json$subexpression$1", "symbols": ["nullValue"]},
    {"name": "json$subexpression$1", "symbols": ["number"]},
    {"name": "json$subexpression$1", "symbols": ["string"]},
    {"name": "json$subexpression$1", "symbols": ["array"]},
    {"name": "json$subexpression$1", "symbols": ["object"]},
    {"name": "json", "symbols": ["json$subexpression$1"], "postprocess": (data) => data[0][0]},
    {"name": "object", "symbols": [{"literal":"{"}, "__", {"literal":"}"}], "postprocess": () => ({})},
    {"name": "object$ebnf$1", "symbols": []},
    {"name": "object$ebnf$1$subexpression$1", "symbols": ["__", {"literal":","}, "__", "member"]},
    {"name": "object$ebnf$1", "symbols": ["object$ebnf$1", "object$ebnf$1$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "object", "symbols": [{"literal":"{"}, "__", "member", "object$ebnf$1", "__", {"literal":"}"}], "postprocess": ([,, head, tail,,]) => [head, ...tail.map(([,,,value]) => value)].reduce((acc, [k,v]) => ({...acc, [k]:v}),{})},
    {"name": "member", "symbols": ["string", "__", {"literal":":"}, "__", "json"], "postprocess": ([key,,,,value]) => [key, value]},
    {"name": "array", "symbols": [{"literal":"["}, "__", {"literal":"]"}], "postprocess": () => []},
    {"name": "array$ebnf$1", "symbols": []},
    {"name": "array$ebnf$1$subexpression$1", "symbols": ["__", {"literal":","}, "__", "json"]},
    {"name": "array$ebnf$1", "symbols": ["array$ebnf$1", "array$ebnf$1$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "array", "symbols": [{"literal":"["}, "__", "json", "array$ebnf$1", "__", {"literal":"]"}], "postprocess": ([,, head, tail,,]) => [head, ...tail.map(([,,,value]) => value)]},
    {"name": "string$ebnf$1", "symbols": []},
    {"name": "string$ebnf$1", "symbols": ["string$ebnf$1", /[^\0-\x1F\x22\x5C]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "string", "symbols": [{"literal":"\""}, "string$ebnf$1", {"literal":"\""}], "postprocess": ([,str,]) => str.join('')},
    {"name": "number$ebnf$1", "symbols": [{"literal":"-"}], "postprocess": id},
    {"name": "number$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "number$ebnf$2$subexpression$1$ebnf$1", "symbols": [/[0-9]/]},
    {"name": "number$ebnf$2$subexpression$1$ebnf$1", "symbols": ["number$ebnf$2$subexpression$1$ebnf$1", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "number$ebnf$2$subexpression$1", "symbols": [{"literal":"."}, "number$ebnf$2$subexpression$1$ebnf$1"]},
    {"name": "number$ebnf$2", "symbols": ["number$ebnf$2$subexpression$1"], "postprocess": id},
    {"name": "number$ebnf$2", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "number", "symbols": ["number$ebnf$1", "integer", "number$ebnf$2"], "postprocess": ([sign, integerPart, decimalPart]) =>  parseFloat((sign || '') + integerPart + (decimalPart || []).flat().join(''))},
    {"name": "integer", "symbols": [{"literal":"0"}], "postprocess": () => "0"},
    {"name": "integer$subexpression$1$ebnf$1", "symbols": []},
    {"name": "integer$subexpression$1$ebnf$1", "symbols": ["integer$subexpression$1$ebnf$1", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "integer$subexpression$1", "symbols": [/[1-9]/, "integer$subexpression$1$ebnf$1"]},
    {"name": "integer", "symbols": ["integer$subexpression$1"], "postprocess": ([[head, tail]]) => head + tail.join('')},
    {"name": "boolean$string$1", "symbols": [{"literal":"f"}, {"literal":"a"}, {"literal":"l"}, {"literal":"s"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "boolean", "symbols": ["boolean$string$1"], "postprocess": () => false},
    {"name": "boolean$string$2", "symbols": [{"literal":"t"}, {"literal":"r"}, {"literal":"u"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "boolean", "symbols": ["boolean$string$2"], "postprocess": () => true},
    {"name": "nullValue$string$1", "symbols": [{"literal":"n"}, {"literal":"u"}, {"literal":"l"}, {"literal":"l"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "nullValue", "symbols": ["nullValue$string$1"], "postprocess": () => null},
    {"name": "__$ebnf$1", "symbols": []},
    {"name": "__$ebnf$1$subexpression$1", "symbols": [{"literal":" "}]},
    {"name": "__$ebnf$1$subexpression$1", "symbols": [{"literal":"\n"}]},
    {"name": "__$ebnf$1", "symbols": ["__$ebnf$1", "__$ebnf$1$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "__", "symbols": ["__$ebnf$1"]}
]
  , ParserStart: "json"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
