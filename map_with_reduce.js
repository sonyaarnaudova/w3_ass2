module.exports = function arrayMap(arr, fn, thisArg) {
  return arr.reduce((accumulator, currentValue) => {
    accumulator.push(fn(currentValue));
    return accumulator;
}, []);
  }

