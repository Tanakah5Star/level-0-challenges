const findCommonCharacters = (string1, string2) => {
    let result = "",
        longer, shorter,
        temp1 = new Set(string1.split("")),
        temp2 = new Set(string2.split(""))

    if (temp1.length > temp2.length) {
        longer = [...temp1];
        shorter = [...temp2];
    } 
        shorter = [...temp1];
        longer = [...temp2];
    
    for (let i = 0; i < longer.length; i ++) {
        for (let j = 0; j < shorter.length; j++) {
            if (shorter[j] === longer[i]) {
                result += shorter[j] + ", ";
            }
        }
    }
    return "Common letters: " + result;
}
console.log(findCommonCharacters("bullion", "albion"));
