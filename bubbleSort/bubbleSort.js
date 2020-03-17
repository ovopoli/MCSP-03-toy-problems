// INSTRUCTIONS
// Bubble sort is considered the most basic sorting algorithm in Computer Science. It works by starting at the first element of an array and comparing it to the second element:

// If the first element is greater than the second element, it swaps the two.
// It then compares the second to the third, and the third to the fourth, and so on.
// In this way, the largest values ‘bubble’ to the end of the array.
// Once it gets to the end of the array, it starts over and repeats the process until the array is sorted numerically.
// Implement a function that takes an array and sorts it using this technique.

// NOTE: DO NOT use JavaScript’s built-in sorting function (Array.prototype.sort).

function bubbleSort(array) {

const right = [];

    for (let i = 0; i < array.length; i++) {
        right.push(array[i]);
    }
    for (let l = 1; l < array.length; l++) {
        if (right[i] > array[l]) {
            right.push(array[l]);
            bubbleSort();
        } else {
            if (array[i] < array[l]) {
                right.push(array[i]);
                bubbleSort();
            }
        }
    }
}

bubbleSort([2,5,1,9,3,6]);