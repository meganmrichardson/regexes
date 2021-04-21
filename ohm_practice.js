import ohm from "ohm-js";

const grammars = {
  canadianPostalCode: `a = b b b " " b b b
  b = ("A".."C"|"E"|"G"|"H"|"J".."N"|"P"|"R".."T"|"V".."Z"|"0".."9")`,
  visa: `a = "4" (f|t)
  f = d d d d d d d d d d d d d d d
  t = d d d d d d d d d d d d
  d = "0".."9"`,
  masterCard: `a = b | c
  b = "5" ("1".."5") d d d d d d d d d d d d d d 
  c = "2" (("3".."6" d d) | ("2" "2" "1".."9") | ("2" "3".."9" d) | ("7" "0".."1" d) | ("7" "2" "0")) x
  x = d d d d d d d d d d d d
  d = "0".."9"`,
  adaFloat: `a = n* (b | d)
  d = ("." n)? e?
  b = "#" c ("." c)? "#" e?
  c = ("0".."9" | "A".."F" | "a".."f") ("_"? ("0".."9" | "A".."F" | "a".."f"))*
  e = ("e" | "E") ("+"|"-")? n
  n = "0".."9" ("_"? "0".."9")*`,
  notThreeEndingInOO: `a = ( d (b | c | e | f | g | h)? )?
  b = d ("A".."N" | "P".."Z")
  c = d ("a".."n" | "p".."z") 
  e = ("A".."N" | "P".."Z") d
  f = ("a".."n" | "p".."z") d 
  g = d d d+
  h = d
  d = ( "A".."Z" | "a".."z" )`,
  divisibleBy64: `d = (~("000000" end) "0".."1")* "000000"   --long
                    | "0"+                                   --justZeros`,
  eightThroughTwentyNine: `a = s | d
    s = "8".."9"
    d = "1".."2" "0".."9"`,
  mLComment: `a = "(*" " "? (~("*)" end) (alnum | "*" | "(*"))* " "? "*)"`,
  notDogDoorDenNoLookAround: `n = (a | b | c)?
  a = ("door" | "den" | "dog") ("A".."Z" | "a".."z")+  
  b = "doo" ("A".."Z" | "a".."q" | "s".."z") ("A".."Z" | "a".."z" )*     
| "do" ("A".."Z" | "a".."f" | "h".."n" | "p".."z") ("A".."Z" | "a".."z" )*  
| "de" ("A".."Z" | "a".."m" | "o".."z") ("A".."Z" | "a".."z" )*  
| "d" ("A".."Z" | "a".."d" | "f".."n" | "p".."z" ) ("A".."Z" | "a".."z" )*      
  c = ("A".."Z" | "a".."c" | "e".."z" )("A".."Z" | "a".."z" )*`,
  notDogDoorDenWithLookAround: `nond = ~(("dog" | "door" | "den") end) ("A".."Z" | "a".."z")*`
};

export function matches(name, string) {
  const grammar = `G {${grammars[name]}}`;
  return ohm
    .grammar(grammar)
    .match(string)
    .succeeded();
}
