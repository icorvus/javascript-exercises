const add = (a, b) => a + b;

const subtract = (a, b) => a - b;
const sum = sumArray => {
  let result = 0;
  sumArray.forEach(element => result += element);
  return result;
}

const multiply = array => array.reduce((a, b) => a * b, 1);

const power = (a, b) => a ** b;

const factorial = number => {
  let result = 1
  for (let i = 1; i <= number; i++){
    result *= i;
  }
  return result;
}

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
