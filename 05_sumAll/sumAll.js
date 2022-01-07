const sumAll = function(firstNum, lastNum) {
  const args = [...arguments];
  if ( (args.length !== 2) || (typeof firstNum != "number") || (typeof lastNum != "number") )
   return "ERROR";
  if (firstNum < 0 || lastNum < 0) return "ERROR";
  const biggerNum = Math.max(...args);
  const lowerNum = Math.min(...args);

  // Calculated using sum of an arithmetic sequence formula
  return (firstNum + lastNum)/2 * (biggerNum - lowerNum + 1);
};

// Do not edit below this line
module.exports = sumAll;
