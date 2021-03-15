@{%
const moo = require("moo");

const lexer = moo.compile({
  openingTag:{match:/\[[a-zA-Z][a-zA-Z]\]/, value: s => s.slice(1,-1).toLowerCase()},
  closingTag:{match:/\[\/[a-zA-Z][a-zA-Z]\]/, value: s => s.slice(2,-1).toLowerCase()},
  ws: {match: /\s+/, lineBreaks: true},
  text: {match:/.*?(?=\[)/},});
%}

@lexer lexer

languages -> openAndCloseTag (%ws:? openAndCloseTag):* {% ([head, tail]) => [head, ...tail.map(([,t]) => t)] %}
openAndCloseTag-> %openingTag string %closingTag {% (d) => [d[0].value, d[1], d[2].value] %}

string -> %text {% d => d[0].value %}







# json -> (boolean | nullValue | number | string | array | object) {% (data) => data[0][0] %}

#object -> "{" __ "}" {% () => ({}) %}
#        | "{" __ member (__ "," __ member):* __ "}" {% ([,, head, tail,,]) => [head, ...tail.map(([,,,value]) => value)].reduce((acc, [k,v]) => ({...acc, [k]:v}),{}) %}

#member -> string __ ":" __ json {% ([key,,,,value]) => [key, value] %}

#array -> "[" __ "]" {% () => [] %}
#       | "[" __ json (__ "," __ json):* __ "]" {% ([,, head, tail,,]) => [head, ...tail.map(([,,,value]) => value)] %}

#string -> "\"" [^\0-\x1F\x22\x5C]:* "\"" {% ([,str,]) => str.join('') %}

#number -> "-":? integer  ("." [0-9]:+):? {% ([sign, integerPart, decimalPart]) =>  parseFloat((sign || '') + integerPart + (decimalPart || []).flat().join('')) %}

#integer -> "0" {% () => "0" %}
#         | ([1-9] [0-9]:*) {% ([[head, tail]]) => head + tail.join('') %}

#boolean -> "false" {% () => false %}
#         | "true" {% () => true %}
#nullValue -> "null" {% () => null %}

#__ -> (" " | "\n"):*
