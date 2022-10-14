const {
  NotImplementedError
} = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {

  //|| isNaN(sampleActivity) || isFinite(sampleActivity) || sampleActivity === ""

  if (typeof sampleActivity !== "string" || isNaN(+sampleActivity) || +sampleActivity === 0 || +sampleActivity < 0 || Math.log(MODERN_ACTIVITY / +sampleActivity) == NaN || Math.ceil(Math.log(MODERN_ACTIVITY / +sampleActivity) * HALF_LIFE_PERIOD / 0.693) < 0) {
    console.log("fals")
    if (typeof +sampleActivity !== "number" ) {
      console.log("fal")
      return false
    }
    console.log("fal")
    return false
  }


  
  return Math.ceil(Math.log(MODERN_ACTIVITY / +sampleActivity) * HALF_LIFE_PERIOD / 0.693)



}

module.exports = {
  dateSample
};
