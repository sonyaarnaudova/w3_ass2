function Spy(target, method) { //solution
    var functionOne = target[method]
    // !!! An obj -> pass by reference
    var result = {
      count: 0
    }
    target[method] = function() {
      result.count++ ;
      let varOne = functionOne.apply(this, arguments);
      return varOne;
    }
    return result;
  }
  module.exports = Spy

