function sumOfDigits(num) {
  var sum = 0;

  while(num > 0) {
    sum += num % 10;
    num = Math.floor(num/10);
  }
  return sum;
}

sumOfDigits(414);
//414 % 10
//414 / 10
//2913 / 10
//2913 % 10

// 3 + 1 + 9 + 2
//2913 % 10 + 291 % 10 + 29 % 10 + 2 % 10;
//Math.floor(8.99999);
//Math.floor(2913/10);
