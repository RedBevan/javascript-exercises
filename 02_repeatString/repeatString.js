const repeatString = function(string, num) {
  let stringReturn = '';
  if (num < 0) {
    stringReturn = 'ERROR';
  } else {
    for (i = 0; i < num; i++) {
      stringReturn += string;
    }
  }
  return stringReturn;
};

//This function will take two arguments, `string` and `num`.

/* Create a variable to hold the string you're going to return, 
create a loop that repeats the given number of times and add 
the given string to the result on each loop. */

// Do not edit below this line
module.exports = repeatString;
