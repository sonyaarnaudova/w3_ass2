function duckCount() {
  const slice = Array.prototype.slice;
  
  const varTwo = slice.call(arguments).filter(function(obj){
    varThree = Object.prototype.hasOwnProperty.call(obj, 'quack');
    return varThree;
  });
    return varTwo.length;
  }
  module.exports = duckCount