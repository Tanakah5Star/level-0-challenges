//Making use of the if..else-if statement to equate numbers and come up with the largest.
function checkMaximumNumber(number1,number2,number3){
if ( number1 > number2 && number1 > number3){
    return "The Largest number is "+ number1;
}else if (number2 > number3){
    return "The Largest number is "+ number2;
}
    return "The Largest number is "+ number3;

}
checkMaximumNumber(78,2,9);