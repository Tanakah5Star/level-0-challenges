function commonLetters(word1, word2){
  let commons = [];

  for(let i = 0; i < word2.length; i++){
     if(word1.includes(word2[i]))
       commons.push(word2[i]);
  }
  return "Common letters: " + commons;
}
console.log(commonLetters("house", "computers"));
