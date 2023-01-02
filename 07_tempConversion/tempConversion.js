const convertToCelsius = function(inputFar) {
  let tempInCels = ((inputFar - 32)*0.5556);
  return Math.round(tempInCels * 10) / 10
};

const convertToFahrenheit = function(inputCels) {
  let tempInFar = (inputCels*1.8) + 32;
  return Math.round(tempInFar * 10) / 10;
};

// to convert far to cels, subtract 32 and x by .5556

// to convert c to f, x by 1.8 and add 32

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
