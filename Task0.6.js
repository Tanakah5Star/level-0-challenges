function checkMaximumNumber(number1, number2, number3) {
  if (number1 > number2 && number1 > number3) {
    return number1;
  } else if (number2 > number3) {
    return number2;
  }
  return number3;
}
console.log(checkMaximumNumber(78, 2, 9));
