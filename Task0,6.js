function checkMaximumNumber(number1,number2,number3){
if ( number1 > number2 && number1 > number3){
    return "The Largest number is "+ number1;
}else if (number2 > number3){
    return "The Largest number is "+ number2;
}
    return "The Largest number is "+ number3;

}
console.log(checkMaximumNumber(78,2,9));