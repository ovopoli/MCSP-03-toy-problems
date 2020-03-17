// Write a function that takes as its input a string
// and returns an array of arrays as shown below
// sorted in descending order by frequency
// and then by ascending order by character.

// "aaabbc" => [ [ "a", 3 ], [ "b", 2 ], [ "c", 1 ] ]
// "mississippi" => [ [ "i", 4 ], [ "s", 4 ], [ "p", 2 ], [ "m", 1 ] ]
// "" => [ ]

function characterFrequency(str) {
   let charArr = [];

   if (str.length === 0){
       return [];
   }

   for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (charArr[char]) {
        charArr[char]++;
    } else {
        charArr[char] = 1;
    }
    let sortArr = charArr.filter(charArr[char])
   }
   return sortArr;
};
var str = 'abbbwwf'
console.log (sortArr);