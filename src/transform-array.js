const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  const res = [];
  const controls = ['--discard-next', '--double-next', '--discard-prev', '--double-prev'];
  arr.forEach((item, i) => {
    if (controls.indexOf(item) === -1) {
      let itemCount = 1;

      switch (arr[i - 1]) {
        case controls[0]:
          itemCount--;
          break;
        case controls[1]:
          itemCount++;
          break;
      }

      switch (arr[i + 1]) {
        case controls[2]:
          itemCount--;
          break;
        case controls[3]:
          if (itemCount > 0) itemCount++;
          break;
      }

      for (let i = 0; i < itemCount; i++) res.push(item);
    }
  });

  return res;
};
