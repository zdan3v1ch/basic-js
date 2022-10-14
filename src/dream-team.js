const {
  NotImplementedError
} = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(arr) {

  if(typeof arr !== "object" || arr === null) {
    return false
  }

  let newArr = [];
  let res = []

  for (let i = 0; i < arr.length; i++) {

    if (typeof arr[i] === 'string') {
      newArr.push(arr[i].trim());

    }
  }
  for (let k = 0; k < newArr.length; k++) {
    res.push((newArr[k][0]).toUpperCase())
  }





  return ((res.sort().join("")))
}

module.exports = {
  createDreamTeam
};
