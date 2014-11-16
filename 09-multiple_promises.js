var q = require('q');
var promise1 = q.defer();
var promise2 = q.defer();

var all = function(prom1, prom2) {
  var counter = 0;
  var allProm = q.defer()
  var val1, val2;

  prom1.promise
  .then(function(result) {
    val1 = result;
    ++counter;
    if (counter == 2) allProm.resolve([val1,val2])
  })
  .then(null,allProm.reject)
  .done();

  prom2.promise
  .then(function(result) {
    val2 = result;
    ++counter;
    if (counter == 2) allProm.resolve([val1,val2])
  })
  .then(null,allProm.reject)
  .done();

  return allProm.promise;
}

all(promise1,promise2)
.then(console.log);

setTimeout(function(){
  promise1.resolve("PROMISES");
  promise2.resolve("FTW");
},200)