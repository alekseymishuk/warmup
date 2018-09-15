module.exports = function warmup(temperature) {
  const intTemperature = parseInt(temperature);
  return intTemperature !== NaN ? (temperature || 0) * 9 / 5 + 32 : NaN;
};
