const sumAll = function(x, y) {
  let sumTotal = 0;
  if ( x < 0 || y < 0 || typeof x !== 'number' || typeof y !== 'number' ) {
    return 'ERROR';
  } else {
  if (x>y) {
  for (i=y; i <= x; i++) {
    sumTotal += i;
  }
  return sumTotal;
  } else {
  for (i=x; i <= y; i++) {
    sumTotal += i;
  }
  return sumTotal;
}
}
};


// Do not edit below this line
module.exports = sumAll;
