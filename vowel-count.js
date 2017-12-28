function vowelCount(str) {
  var count = 0;
  for (var index = 0; index < str.length; index++) {
    //console.log(str[index]);
    if(str[index] === "a" || str[index] === "e") || str[index] === "i" || str[index] === "o" || str[index] === "u"){
      count++;
    }
  }
  return count;
}

vowelCount("Good Job");

/* Test Cases */

// console.log(vowelCount('Good Job'));
// logs => 3

// console.log(vowelCount(Yankees));
// logs => 3

function vowelCount(str) {
  var count = 0;
  var vowels = "aeiou";
  for (var index = 0; index < str.length; index++) {
    //console.log(str[index]);
    if(vowels.indexOf(str[index].toLowerCase) > -1){
      count++;
    }
  }
  return count;
}

vowelCount("Good Job");
//"aeiou".indexOf("i");
