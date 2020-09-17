const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  const turnsPerSecond = 3600 / turnsSpeed;
  const turns = Math.pow(2, disksNumber) - 1

  return {
    turns,
    seconds: Math.floor(turns * turnsPerSecond),
  }
};
