const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value = ' ') {
    this.chain.push('' + value);
    return this;
  },
  removeLink(position) {
    if (!position ||
      !Number.isInteger(position) ||
      position <= 0 ||
      position > this.getLength()) {
        this.chain = [];
        throw new Error('Pls stop!');
      };

    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let str = '';
    this.chain.forEach((link, i, chain) => {
      str += '(';
      str += (link === ' ') ? link : ` ${link} `;
      str += ')';
      if (i < chain.length - 1) str += '~~';
    });
    this.chain = [];
    return str;
  }
};

module.exports = chainMaker;
