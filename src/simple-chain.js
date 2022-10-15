const {
  NotImplementedError
} = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {

  chain: [],

  getLength() {
    return this.chain.length;
  },

  addLink(value) {
    if (String(value)) {
      this.chain.push(`( ${value} )`);
    } else {
      this.chain.push('()');
    }
    return this;
  },

  removeLink(position) {
    if (position < 1 || typeof position !== 'number' || position > this.chain.length) {
      this.chain.length = 0;
      throw new Error("You can't remove incorrect link!");
    } else {
      this.chain.splice(position - 1, 1);
      return this;
    }
  },


  reverseChain() {
    this.chain.reverse();
    return this
  },

  finishChain() {
    let result = this.chain.join('~~');
    this.chain = [];
    return result;
  }
};

module.exports = {
  chainMaker
};
