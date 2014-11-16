var q = require('q');
var defer = q.defer();

// success handler, error handler
defer.promise.then(null,console.log);
defer.reject("REJECTED!")