const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (!date) return 'Unable to determine the time of year!';
  if (date.toString.toString() !== Date.toString.toString()) throw new Error('Alert!');

  const month = date.getMonth();
  let monthName;
  switch (true) {
    case (month >= 2 && month <= 4):
      monthName = 'spring';
      break;
    case (month >=5 && month <= 7):
      monthName = 'summer'
      break;
    case (month >=8 && month <= 10):
      monthName = 'autumn';
      break;
    case (month >= 11 || month <= 1):
      monthName = "winter";
      break;
  }

  return monthName;
};
