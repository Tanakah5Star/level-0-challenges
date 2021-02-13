//function findCommonLetters(firstString, secondString) {  
//}
function countCommonCharacters(userWord, goalWord){
    var compareNum = 0;    
    var check = Math.min(userWord.length, goalWord.length);
    for (var i = 0; i < check; i++) {
      if (userWord.charAt(i) == goalWord.charAt(i))
      compareNum++;
    }
    return compareNum;
  }
  var goalWord = "12345678";
  var userWord = "02345000";
  var result = countCommonCharacters(userWord, goalWord);
  showResult(result);