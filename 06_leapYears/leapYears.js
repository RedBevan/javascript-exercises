const leapYears = function(x) {
  if (x%4 != 0) {
    console.log('not divisible by 4');
    return false;
  } else if (x%100 === 0) {
    console.log('divisible by 100');
      if (x%400 === 0) {
        console.log('divisible by 400');
        return true;
      } else {
        return false;
      }
    } else {
      console.log('not divisible by 100');
      return true;
    }
  };

// Do not edit below this line
module.exports = leapYears;
