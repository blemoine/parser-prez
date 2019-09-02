
grammar arithmeticAntlr;

expr: expr '*' expr
      | FLOAT;

FLOAT: '-'? INT ('.' [0-9] +)?;
fragment INT: '0' | [1-9] [0-9]*;

WHITESPACE :  [ \t\n\r] + -> skip ;

