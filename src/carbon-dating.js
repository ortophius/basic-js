const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string') return false;
  sampleActivity = parseFloat(sampleActivity);

  if (!sampleActivity) return false;
  if (sampleActivity <= 0 || sampleActivity > 15) return false;

  const DECAY_CONSTANT = 0.693 / HALF_LIFE_PERIOD;
  return Math.ceil(
    Math.log(MODERN_ACTIVITY / sampleActivity) /
    DECAY_CONSTANT
  );
};
