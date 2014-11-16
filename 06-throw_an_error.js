var q = require('q');

var parsePromised = function(json) {
  var defer = q.defer();
  var result;

  try {
    result = JSON.parse(json);
  } catch (e) {
    defer.reject(e);
  }

  defer.resolve(result)
  return defer.promise;
}

parsePromised(process.argv[2])
.then(null,console.log)