function underToCamel(underName) {
  var foundUnder = false;
  var camelCaseOutput = "";
  for (var i=0; i < underName.length; i++) {
    //debugger
    console.log(underName[i]);
    if(underName[i] === "_") {
      foundUnder = true;
    } else {
      if(foundUnder) {
        camelCaseOutput += underName[i];
        foundUnder = false;
      } else {
        camelCaseOutput += underName[i];
      }
    }
  }
  return camelCaseOutput;
}

underToCamel("first_name");
underToCamel("income_tax");
underToCamel("fi_rst_name");
