var q = require('q');
var defer = q.defer();

var attachTitle = function(name) {
  return "DR. " + name;
}

defer.promise
.then(attachTitle)
.then(console.log)

defer.resolve("MANHATTAN");