const {
  NotImplementedError
} = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {

  let result = [];

  let discNext = "--discard-next";
  let discPrev = "--discard-prev";
  let doubleNext = "--double-next";
  let doublePrev = "--double-prev";


  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  for (let i = 0; i < arr.length; i++) {

    switch (arr[i]) {

      case discNext:
        if (i !== arr.length-1) {
          i++;
        }
        break;
      case discPrev:
        if (i > 0 && arr[i-2] !== discNext) {
          result.pop();
        }
        break;
      case doubleNext:
        if (i !== arr.length-1) {
          result.push(arr[i + 1])
        }
        break;
      case doublePrev:
        if (i > 0 && arr[i-2] !== discNext) {
          result.push(arr[i - 1])
        }
        break;


      default:
        result.push(arr[i]);
    }

  }

  return result


}

module.exports = {
  transform
};
