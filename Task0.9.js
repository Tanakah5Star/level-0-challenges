function printVowels(anyString) {
  let vowels = "";
  vowels = anyString.replace(/[^aeiou]/gi, "").split("");
  console.log("Vowels: " + vowels);
}
printVowels("House");
