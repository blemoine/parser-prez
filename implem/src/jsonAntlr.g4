
grammar jsonAntlr;

json: value;

object: '{' member (',' member)* '}' | '{' '}';
member: string ':' value;

array: '[' value (',' value)* ']' | '[' ']';

value: object |  array | number | bool | nullValue  | string ;

number: NUMBER;
string: STRING;
bool: 'true' | 'false';
nullValue: 'null';



NUMBER: '-'? INT ('.' DIGIT +)?;
fragment INT: '0' | [1-9] DIGIT*;

STRING   : '"' (ESC | SAFECODEPOINT)* '"'   ;
fragment DIGIT: [0-9];
fragment ESC   : '\\' (["\\/bfnrt] | UNICODE)   ;
fragment UNICODE   : 'u' HEX HEX HEX HEX   ;
fragment HEX   : [0-9a-fA-F]   ;
fragment SAFECODEPOINT   : ~ ["\\\u0000-\u001F]   ;

WHITESPACE :  [ \t\n\r] + -> skip ;
