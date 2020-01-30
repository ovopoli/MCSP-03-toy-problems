/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // 3
 * var index = binarySearch([1, 2, 3, 4, 5], 8);
 * console.log(index); // null
 */

var binarySearch = function(array, target) {

    for(let i = 0; i < array.length; i++) {
        if(target === undefined || target > array[i]) {
            return null;
        }
        if(target === array[i]) {
            return array[i];
        }
    }
}
console.log(binarySearch([1,2,3,4,5,6,7,8,9,10], 10));

//     if(target > array.length || target === undefined) {
//         return null;
//     }
//     for(let i = 0; i < array.length; i++) {
//         if(array[i] === target) {
//             return array[i];
//         }
//     }
// };
// console.log(binarySearch([1,2,3,4,5,6,7,8,9,10], 1));