function reverseString(str) {
  var finalString = "";
  for (var last = str.length-1; last >= 0; last--) {
    //console.log(str[last]);
    finalString += str[last];
  }
  return finalString;
}

reverseString("hello");

/* Test Case */

console.log(reverseString("hello"));
// logs ==> 'olleh';
