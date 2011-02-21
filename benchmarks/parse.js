var DJSON = require('../decimaljson')

var s = require('fs').readFileSync('test.json').toString('utf8')

exports.compare = {
  "JSON": function() {
    return JSON.parse(s)
  },
  "DJSON": function() {
    return DJSON.parse(s)
  },
}

var bench = require('bench')

Object.keys(exports.compare).forEach(function(name) {
  console.log(name)
  console.log(exports.compare[name]())
})

bench.compare(
  exports.compare,
  bench.COMPARE_COUNT,
  bench.TIME,
  bench.COUNT_PER_LAP,
  function(err, data) {
    bench.show(data)
  }
)
