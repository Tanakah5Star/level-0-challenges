var vowels= "aeiou";
function printVowels(anyString){
//Check for vowels, if not a vowel replace with nothing then print vowels.
   console.log(anyString.replace(/[^aeiou]/ig, " "));
}
printVowels("TKSaaeiO");

   