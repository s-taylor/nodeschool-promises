var q = require('q');
var defer = q.defer();

// success, error
defer.promise.then(console.log,console.log);

defer.resolve("I FIRED");
defer.reject("I DID NOT FIRE");