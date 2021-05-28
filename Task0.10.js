function commonLetters(word1, word2){
  var commons = "";

  for(var i = 0; i < word1.length; i++){
      for(var j = 0; j < word2.length; j++){
          if(word2[j] === word1[i]){
              commons += word1[i];
          }
      }
  }
  return "Common letters: " + commons.split("");
}

console.log(commonLetters("house", "computers"));
