/*
 * Make an array method that can return whether or not a context array is a
 * subset of an input array.  To simplify the problem, you can assume that neither
 * array will contain objects or arrays as elements within them.
 *
 *
 * var a = ['commit','push']
 * a.isSubsetOf(['commit','rebase','push','blame']) // true
 *
 * NOTE: You should disregard duplicates in the set.
 *
 * var b = ['merge','reset','reset']
 *
 * b.isSubsetOf(['reset','merge','add','commit']) // true
 *
 * See http://en.wikipedia.org/wiki/Subset for more on the definition of a
 * subset.
 */

/*
 * Extra credit: Make the method work for arrays that contain objects and/or arrays as elements.
 */

Array.prototype.isSubsetOf = function(arr) {
  // loop through given arr
  for(let key of arr) {
  // loop through context arr (this) ???
  
  // check if key in input arr is the same as a key in the arr the method is being applied towards
  if(key === this[key]) {
    // if the same return true
    return true;
    // if not return false
  } else {
      return false;
    }
  };
};

let a = ['reset', 'push'];
console.log(a.isSubsetOf(['push', 'add', 'reset', 'commit']));
