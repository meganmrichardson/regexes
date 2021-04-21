const regexes = {
  canadianPostalCode: /^([^DFIOQUa-z]|\d){3}[ ]([^DFIOQUa-z]|\d){3}$/,
  visa: /^4((\d{15})|(\d{12}))$/,
  masterCard: /^((5[1-5])|(2[221-720]))\d{14}$/,
  adaFloat: /^\d(_?\d)*(((\.\d(_?\d)*)?((e|E)(\+|-)?\d(_?\d)*)?)|(#(\d|[A-F]|[a-f])(_?(\d|[A-F]|[a-f]))*(\.(\d|[A-F]|[a-f])(_?(\d|[A-F]|[a-f]))*)?#((e|E)(\+|-)?\d(_?\d)*)?))$/,
  notThreeEndingInOO: /^($^)|((?!([a-zA-Z][oO]{2})\b)\b[a-zA-Z]+)$/,
  divisibleBy64: /^((((?!(000000)\b)(0|1))+000000)|0+)$/,
  eightThroughTwentyNine: /^([8-9]|[1-2][0-9]\b)$/,
  mLComment: /^\(\*[\d\*\( ]*\*\)$/,
  notDogDoorDenNoLookAround: /^(($^)|(dog[a-z]+)|(den[a-z]+)|(door[a-z]+)|(doo[A-Za-qs-z][A-Za-z]*)|(do[A-Za-fh-np-z][A-Za-z]*)|(de[A-Za-mo-z][A-Za-z]*)|(d[A-Za-df-np-z][A-Za-z]*)|([a-ce-zA-Z]\w*))$/,
  notDogDoorDenWithLookAround: /^((?!(dog|door|den)\b)\b\w+)?$/
};

export function matches(name, string) {
  return regexes[name].test(string);
}
