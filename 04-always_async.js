var q = require('q');
var defer = q.defer();

defer.promise.then(console.log,null);
defer.resolve("SECOND");
console.log("FIRST");