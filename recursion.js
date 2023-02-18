function reduce(arr, fn, initial) {
      if (arr.length ===0) return initial 
      let [helpVar, ...rest] = arr;
      let acc = fn(initial, helpVar);
      return reduce(rest, fn, acc);

  }
  
  module.exports = reduce