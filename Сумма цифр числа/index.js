let sumNumber = 0;

function sumOfDigits(num) {
  if (num === 0) {
    return num;
  }

  sumNumber += num % 10;
  num = Math.floor(num / 10);
  sumOfDigits(num);
}

sumOfDigits(0);
console.log(sumNumber);
