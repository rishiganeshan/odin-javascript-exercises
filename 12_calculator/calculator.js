const add = function(a,b) {
  return a+b
	
};

const subtract = function(a,b) {
  return a-b
	
};

const sum = function(arr) {
  return arr.reduce((sum,current) => (sum + current), 0)
	
};

const multiply = function(arr) {
  return arr.reduce((sum, current) => (sum * current), 1)


};

const power = function(num, power) {
  return num ** power
	
};

const factorial = function(num) {
  let res = 1
  while (num > 0) {
    res *= num
    num--

  }
  return res
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
