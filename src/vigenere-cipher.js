const {
  NotImplementedError
} = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }

  code(rev, shft, msg, key) {
    if (!msg || !key) {
      throw new Error('Incorrect arguments!');
    }

    let ascII = 65;
    let count = 0;
    let msgArr = msg.toUpperCase().split('');
    let keyArr = key.toUpperCase().split('').map(el => el.charCodeAt(0) - ascII);
    let result = [];

    for (let i = 0; i < msgArr.length; i++) {
      let charPos = msgArr[i].charCodeAt(0);
      if (charPos >= 65 && charPos < 91) {
        result.push(String.fromCharCode(ascII + (charPos - ascII + rev * keyArr[count % keyArr.length] + shft) % 26));
        count++;
      } else {
        result.push(msgArr[i]);
      }
    }

    return this.direct ? result.join('') : res.reverse().join('');
  }

  encrypt(msg, key) {
    let rev = 1;
    let shft = 0;
    return this.code(rev, shft, msg, key);
  }

  decrypt(msg, key) {
    let rev = -1;
    let shft = 26;
    return this.code(rev, shft, msg, key);
  }
}

module.exports = {
  VigenereCipheringMachine
};
