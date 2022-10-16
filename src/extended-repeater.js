const {
  NotImplementedError
} = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {

  str = String(str);

  if (options.addition !== undefined) {
    options.addition = String(options.addition);
  }

  if (!options.repeatTimes) {
    options.repeatTimes = 1;
  }

  if (options.addition && !options.additionRepeatTimes) {
    options.additionRepeatTimes = 1;
  }


  if (!options.separator) {
    options.separator = '+';
  }

  if (!options.additionSeparator) {
    options.additionSeparator = '|';
  }

  let resAddition = []
  if (options.addition) {
    for (let i = 0; i < options.additionRepeatTimes; i++) {
      resAddition.push(options.addition);
    }
  }

  let resFullAddition = resAddition.join(options.additionSeparator);


  let stringNoRepeat = str + resFullAddition

  let resultArray = []

  for (let k = 0; k < options.repeatTimes; k++) {
    resultArray.push(stringNoRepeat)
  }


  return resultArray.join(options.separator)

}

module.exports = {
  repeater
};
