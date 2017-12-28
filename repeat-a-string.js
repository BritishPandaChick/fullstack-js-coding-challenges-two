function repeat(str, num) {
  var finalString = "";
  for(num; num > 0; num--) {
    finalString += str;
  }
  return finalString;
}

repeat("yo", 4);

/* ****Test Cases**** */

// console.log(repeat('yo', 4));
// logs -> 'yoyoyoyo'

// console.log(repeat('yo', 0));
// logs -> '""', an empty string.

// console.log(repeat("bye", 6));
// logs -> "byebyebyebyebyebye"
