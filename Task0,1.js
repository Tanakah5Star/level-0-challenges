var x = 0;
var y = 1;

function printvalues() {
  console.log(x);
  console.log(y);
  
    x += 3;
    y += x;
  console.log(x);
  console.log(y);
}
printvalues();