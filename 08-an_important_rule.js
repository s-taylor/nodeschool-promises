var q = require('q');

var throwMyGod = function(){
  throw new Error("OH NOES");
}

var iterate = function(i) {
  console.log(i);
  return i + 1;
}

q.fcall(iterate,1)
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(throwMyGod) //error converts to a rejected promise
.then(null,console.log) //rejected promise caught by handler
.done(); 