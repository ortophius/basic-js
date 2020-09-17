const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  if (!(backyard instanceof Array)) return 0;
  let catsCount = 0;

  backyard.forEach(row => {
    if (!(row instanceof Array)) return;
    row.forEach(cell => { if (cell === '^^') catsCount++ });
  });

  return catsCount;
};
