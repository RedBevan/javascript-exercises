const reverseString = function(stringInput) {
  const stringArray = stringInput.split('');
  let newString = '';
  for (i = (stringInput.length - 1); i >= 0; i--) {
    newString += stringArray[i];
  }
  return newString;
}

/* Strings in JavaScript cannot be reversed directly 
so you're going to have to split it into something 
else first.. do the reversal and then join it back together into a string. */


// Do not edit below this line
module.exports = reverseString;
