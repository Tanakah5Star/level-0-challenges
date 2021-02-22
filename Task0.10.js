function findCommonCharacters(string1, string2) {
  string1 += "";
  string2 += "";
  //function check for common characters in both strings comparing each character.
  var i, a ={};
  for (i = 0, l = string1.length; i < l; i++) a[string1[i]] = (a[string1[i]] || 0) + 1;
  for (i = 0, l = string2.length; i < l; i++) a[string2[i]] = (a[string2[i]] || 0) + 1;
  // function deletes all the characters that are not common to both strings.
  for (var p in a)
  if (a[p] <= 1)
  delete a[p];
  
  return a;
  
  }
  var output = findCommonCharacters('bullion', 'albion');
    for (var a in output) {
      console.log("Output: " + a);
  }
