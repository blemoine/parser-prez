json -> (boolean | nullValue | number | string | array | object) {% (data) => data[0][0] %}

object -> "{" __ "}" {% () => ({}) %}
        | "{" __ member (__ "," __ member):* __ "}" {% ([,, head, tail,,]) => [head, ...tail.map(([,,,value]) => value)].reduce((acc, [k,v]) => ({...acc, [k]:v}),{}) %}

member -> string __ ":" __ json {% ([key,,,,value]) => [key, value] %}

array -> "[" __ "]" {% () => [] %}
       | "[" __ json (__ "," __ json):* __ "]" {% ([,, head, tail,,]) => [head, ...tail.map(([,,,value]) => value)] %}

string -> "\"" [^\0-\x1F\x22\x5C]:* "\"" {% ([,str,]) => str.join('') %}

number -> "-":? integer  ("." [0-9]:+):? {% ([sign, integerPart, decimalPart]) =>  parseFloat((sign || '') + integerPart + (decimalPart || []).flat().join('')) %}

integer -> "0" {% () => "0" %}
         | ([1-9] [0-9]:*) {% ([[head, tail]]) => head + tail.join('') %}

boolean -> "false" {% () => false %}
         | "true" {% () => true %}
nullValue -> "null" {% () => null %}

__ -> (" " | "\n"):*
