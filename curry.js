function curryN(fn, n) { //solution
    n = n || fn.length
    return function curriedN(arg) {
      if (n <= 1) return fn(arg)
      return curryN(fn.bind(this, arg), n - 1)
    }
  }
  
  module.exports = curryN
