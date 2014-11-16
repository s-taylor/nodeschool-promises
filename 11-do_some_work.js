var qhttp = require('q-io/http');

qhttp.read('http://localhost:7000/')
.then(function(id){
  return qhttp.read('http://localhost:7001/' + id);
})
.then(function(result){
  var parsed = JSON.parse(result);
  console.log(parsed);
})
.then(null,console.err)
.done();


