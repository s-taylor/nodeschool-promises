var q = require('q');

var parsePromised = function(json) {
  return JSON.parse(json);
}

q.fcall(parsePromised, process.argv[2])
.then(null, console.log);