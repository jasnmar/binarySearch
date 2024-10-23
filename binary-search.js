/* Typical comparison function */
let defaultCompare = (a, b) =>
  a > b ? 1 : (a < b ? -1 : 0);
  
/* Version 1:
    O(n)
    Fixed memory
    Loops
*/
let binarySearchWithLoops = (array, element, compare = defaultCompare) => {

  let left = 0
  let right = array.length
  let breakOut = 0
  let half = Math.floor(left + (right-left)/2)
  while(array[half]!=element) {
    breakOut++
    half = Math.floor(left + (right-left)/2)
    if(array[half] > element) right = half
    if(array[half] < element) left = half
    console.log('right: ', right)
    console.log('left: ', left)
    if(right-left<=1 ) {
      console.log("returning")
      return -1
    }
    if(breakOut>10) break
  }
  console.log('half: ', half)
  return half;
};

export default binarySearchWithLoops;