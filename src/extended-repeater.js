const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options = {}) {
  const initialConf = {
    repeatTimes: 1,
    separator: '+',
    addition: '',
    additionRepeatTimes: 1,
    additionSeparator: '|'
  }
  
  if (options instanceof Object) {
    for (prop in initialConf) {
      if (typeof initialConf[prop] === 'number' && typeof options[prop] !== 'number') options[prop] = initialConf[prop];
      if (typeof initialConf[prop] === 'string' && options[prop] !== undefined) options[prop] = '' + options[prop];
      if (options[prop] === undefined) options[prop] = initialConf[prop];
    }
  }
  else options = {... initialConf};

  let res = '';

  for (let s = 0; s < options.repeatTimes; s++) {
    res += str;
    for (let a = 0; a < options.additionRepeatTimes; a++) {
      res += options.addition;
      if (a < options.additionRepeatTimes - 1) res += options.additionSeparator;
    }
    if (s < options.repeatTimes - 1) res += options.separator;
  }

  return res;
};
  