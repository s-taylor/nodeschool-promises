var qhttp = require('q-io/http'),
  _ = require('lodash'),
  idPath = 'http://localhost:7000/',
  resultPath = 'http://localhost:7001/';

// create a new function using concat, where first param is resultPath
var buildPath = _.bind(String.prototype.concat, resultPath)

qhttp.read(idPath)
// compose creates a function that combines other functions,
// the first input value into the 'compose function' is passed to the 
// second function as a parameter. Then, the return value of the second 
// function is passed as a param to the first function
// NOTE: The functions are run RIGHT to LEFT!!!!
.then(_.compose(qhttp.read,buildPath))
.then(_.compose(console.log,JSON.parse))
.then(null,console.err)
.done();


