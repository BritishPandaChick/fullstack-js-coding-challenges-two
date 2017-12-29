function factorial(num) {
  var total = 1;
  for (num; num > 0; num--) {
    //debugger
    //console.log(num);
    total *= num;
  }
  return total;
}

factorial(4);


// TEST SPECS


// console.log(factorial(4));
// => logs 24 since (4*3*2*1) === 24

// console.log(factorial(5));
// => logs 120 since (5*4*3*2*1) === 120
