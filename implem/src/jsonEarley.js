// Generated automatically by nearley, version 2.18.0
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }

const moo = require("moo");

const lexer = moo.compile({
  openingTag:{match:/\[[a-zA-Z][a-zA-Z]\]/, value: s => s.slice(1,-1).toLowerCase()},
  closingTag:{match:/\[\/[a-zA-Z][a-zA-Z]\]/, value: s => s.slice(2,-1).toLowerCase()},
  ws: {match: /\s+/, lineBreaks: true},
  text: {match:/.*?(?=\[)/},});
var grammar = {
    Lexer: lexer,
    ParserRules: [
    {"name": "languages$ebnf$1", "symbols": []},
    {"name": "languages$ebnf$1$subexpression$1$ebnf$1", "symbols": [(lexer.has("ws") ? {type: "ws"} : ws)], "postprocess": id},
    {"name": "languages$ebnf$1$subexpression$1$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "languages$ebnf$1$subexpression$1", "symbols": ["languages$ebnf$1$subexpression$1$ebnf$1", "openAndCloseTag"]},
    {"name": "languages$ebnf$1", "symbols": ["languages$ebnf$1", "languages$ebnf$1$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "languages", "symbols": ["openAndCloseTag", "languages$ebnf$1"], "postprocess": ([head, tail]) => [head, ...tail.map(([,t]) => t)]},
    {"name": "openAndCloseTag", "symbols": [(lexer.has("openingTag") ? {type: "openingTag"} : openingTag), "string", (lexer.has("closingTag") ? {type: "closingTag"} : closingTag)], "postprocess": (d) => [d[0].value, d[1], d[2].value]},
    {"name": "string", "symbols": [(lexer.has("text") ? {type: "text"} : text)], "postprocess": d => d[0].value}
]
  , ParserStart: "languages"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
