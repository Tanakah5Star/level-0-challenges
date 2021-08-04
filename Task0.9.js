function printVowels(anyString) {
  let vowels = "";
  vowels = anyString.replace(/[^aeiou]/gi, "").split("");
  return "Vowels: " + vowels;
}
console.log(printVowels("House"));
