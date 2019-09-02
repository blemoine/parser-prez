

expression -> expression __ ("*" | "/") __ expression {% ([e1, ,[operator],, e2]) => operator === '*'? e1*e2: e1/e2 %}
              | float


float -> "-":? integer ("." [0-9]:+):? {% ([sign, integerPart, decimalPart]) =>
     parseFloat((sign || '') + integerPart + (decimalPart || []).flat().join(''))
%}
integer -> [1-9] [0-9]:+   {% ([head, tail]) =>  head + tail.join('') %}
         | [0-9]  {% ([head]) =>  head %}

__ -> " ":*
