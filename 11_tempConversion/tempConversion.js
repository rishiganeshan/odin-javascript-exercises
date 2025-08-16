const convertToCelsius = function(farenheitTemp) {
  return Math.round((farenheitTemp-32) * 5/9 * 10) / 10
};

const convertToFahrenheit = function(celsiusTemp) {
  return Math.round( ((9/5) * celsiusTemp + 32) * 10) / 10
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
