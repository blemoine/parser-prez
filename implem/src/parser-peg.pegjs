json = boolean / null / number / string / array / object

object "object" = "{" ws*  members:(head:member tail:(( ws* "," ws* v:member {return v})*)? { return [head, ...tail] })? ws* "}" {
  return members === null?{}:members.reduce((acc, [k, v]) => ({ ...acc, [k]: v }), {} )
}

member = name:string ws* ":" ws* value:json { return [name, value]; }

array "array" = "[" ws* values:(head:json tail:(( ws* "," ws* v:json {return v})*)? { return [head, ...tail] })? ws* "]" {
  return values === null? []:values
}

number "number" = "-"? ("0" / ([1-9] [0-9]*)) ("." [0-9]+)? { return parseFloat(text()) }

string "string" = '"' chars:[^\0-\x1F\x22\x5C]* '"' { return chars.join(""); }

boolean "boolean" = false / true
false = "false" { return false }
true = "true" { return true }

null  = "null" { return null }

ws = [ ]


