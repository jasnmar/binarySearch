/* Typical comparison function */
let defaultCompare = (a, b) =>
  a > b ? 1 : (a < b ? -1 : 0);
  
/* Version 1:
    O(n)
    Fixed memory
    Loops
*/
let binarySearchWithLoops = (array, element, compare = defaultCompare) => {
  for(let i = 0; i < array.length; i++) {
    if(array[i]===element) return i
  }
    return -1;
};

export default binarySearchWithLoops;