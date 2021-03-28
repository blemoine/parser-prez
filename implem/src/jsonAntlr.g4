grammar jsonAntlr;

languages: openAndCloseTag (openAndCloseTag)* ;
openAndCloseTag: openingTag text closingTag ;
openingTag: OPENING_TAG ;
closingTag: CLOSING_TAG ;
text: TEXT ;


OPENING_TAG: '[' [a-zA-Z] [a-zA-Z] ']' ;
CLOSING_TAG: '[/' [a-zA-Z] [a-zA-Z] ']' ;
TEXT: CHAR+ ;
fragment CHAR: ~'[' ;
WHITESPACE :  [ \t\n\r]+ -> skip ;