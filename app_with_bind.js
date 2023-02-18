module.exports = function(namespace) {
const bounded = console.log.bind(null, namespace);
return bounded;
}
  