/**
 * Implement a function that finds the longest palindrome in a given string.
 * For example, in the string "My dad is a racecar athlete", the longest
 * palindrome is "a racecar a". Count whitespaces as valid characters. Other
 * palindromes in the above string include "dad", "ete", " dad " (including
 * whitespace on each side of dad).
 */

var longestPalindrome = function(string) {
    //will store the longest palindrome
    let currPalindrome = '';
    //keeps the strings last index element
    let i = string.length;
    // used to identify the strings first element
    let y = 0;

    //helper funtion to recurse that will check the first element to every element starting from the back
    letterChecker = function (string) {
        if (string[y] !== string[i]) {
            i--;
        }
    }
    // if the elements match, move in and check the next one
    while (string[y] === string[i]) {
        //make the currPalindrome string have the elements that are matching
        currPalindrome[y] = string[y];
        currPalindrome[currPalindrome.length + 1] = string[i];
        y++;
        i--;
    } 
};

