const ftoc = (temperature) => Math.round((5/9 * (temperature - 32)) * 10) / 10;

const ctof = (temperature) => Math.round((32 + 9/5 * temperature) * 10) / 10;

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
