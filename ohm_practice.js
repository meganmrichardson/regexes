import ohm from "ohm-js";

const grammars = {
  canadianPostalCode: `(upper upper upper " " upper upper upper)`,
  visa: `4\d{15}`,
  masterCard: `5[1-5]\d{14}|[2221-2720]\d{15}`,
  adaFloat: `\d+[#|e|E|.|_|\-|fD|\+|\d]*`,
  notThreeEndingInOO: `(?!([a-zA-Z][oO]{2})\b)\b[a-zA-Z]+`,
  divisibleBy64: `(("0" | "1")* "000000") | ("0"+)`,
  eightThroughTwentyNine: `[8-9]|[1-2][0-9]\b`,
  mLComment: `\(\*[\d\*\( ]*\*\)`,
  notDogDoorDenNoLookAround: `(dog[a-z]+)|(den[a-z]+)|(door[a-z]+)|[a-ce-zA-Z]\w*`,
  notDogDoorDenWithLookAround: `(?!(dog|door|den)\b)\b\w+`
};

export function matches(name, string) {
  const grammar = `G {${grammars[name]}}`;
  return ohm
    .grammar(grammar)
    .match(string)
    .succeeded();
}
