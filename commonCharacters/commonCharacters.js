/**
 * Write a function `f(a, b)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `a`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */
var commonCharacters = function(string1, string2) {

    // Create empty string for common characters
    let sameCharacter = "";

    // Create index to be able to loop through string2
    let ind2 = 0;

    // Create for loop for strings
    for(var i = 0; i < string1.length; i++) {
        
        // Compare element in strings to see if the same
        if(string1[i] === string2[ind2]) {
            // if the same add element of current index to the created empty string and add 1 to ind2
            sameCharacter.concat(string1[i]);
            ind2++;
        }
        //if not same char index of str1 add 1 to ind2 and call function
            //this is to compare next character of str2 to the current index of str1
        else {
            ind2++;
            commonCharacters();
        }
    }
    //return string containing all common occurances
    return sameCharacter;
};
console.log(commonCharacters('acdfg', 'cdf'));