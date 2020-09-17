const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    if (!(arr instanceof Array)) return 0;
    if (arr.length === 0) return 1;

    let depthMap = [... arr].fill(0);
    for(let i = 0; i < arr.length; i++) {
      depthMap[i] = this.calculateDepth(arr[i]);
    }
    return Math.max.apply(null, depthMap) + 1;
  }
};