// SOLUTIONS 

//ex 10 
// module.exports = function(namespace) {
//     return console.log.bind(console, namespace)
// }

//ex 11
// module.exports = function arrayMap(arr, fn, thisArg) {
//     return arr.reduce(function(acc, item, index, arr) {
//       acc.push(fn.call(thisArg, item, index, arr))
//       return acc
//     }, [])
//   }

//ex 12

// function Spy(target, method) {
//     var originalFunction = target[method]
  
//     // use an object so we can pass by reference, not value
//     // i.e. we can return result, but update count from this scope
//     var result = {
//       count: 0
//     }
//     // replace method with spy method
//     target[method] = function() {
//       result.count++ // track function was called
//       return originalFunction.apply(this, arguments) // invoke original function
//     }
//     return result
//   }
//   module.exports = Spy

//ex 13 
// function repeat(operation, num) {
//     if (num <= 0) return
  
//     operation()
  
//     // release control every 10 or so
//     // iterations.
//     // 10 is arbitrary.
//     if (num % 10 === 0) {
//       setTimeout(function() {
//         repeat(operation, --num)
//       })
//     } else {
//       repeat(operation, --num)
//     }
//   }
  
//   module.exports = repeat

//ex 14
// function repeat(operation, num) {
//     return function() {
//       if (num <= 0) return
//       operation()
//       return repeat(operation, --num)
//     }
//   }
  
//   function trampoline(fn) {
//     while(fn && typeof fn === 'function') {
//       fn = fn();
//     }
//   }
  
//   module.exports = function(operation, num) {
//     trampoline(function() {
//       return repeat(operation, num)
//     })
//   }

//ex 15
// function loadUsers(userIds, load, done) {
//     var completed = 0;
//     var users = [];
//     userIds.forEach(function(id, index) {
//       load(id, function(user) {
//         users[index] = user;
//         if (++completed === userIds.length) return done(users)
//       })
//     })
//   }
  
// module.exports = loadUsers;
  
//ex 16

// function getDependencies(mod, result) {
//     result = result || []
//     var dependencies = mod && mod.dependencies || []
//     Object.keys(dependencies).forEach(function(dep) {
//       var key = dep + '@' + mod.dependencies[dep].version
//       if (result.indexOf(key) === -1) result.push(key)
//       getDependencies(mod.dependencies[dep], result)
//     })
//     return result.sort()
//   }
  
//   module.exports = getDependencies

//ex 17 
// function curryN(fn, n) {
//     n = n || fn.length
//     return function curriedN(arg) {
//       if (n <= 1) return fn(arg)
//       return curryN(fn.bind(this, arg), n - 1)
//     }
//   }
  
//   module.exports = curryN

//ex 18
// module.exports = Function.call.bind(Array.prototype.slice)