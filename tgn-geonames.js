var H = require('highland')
var Reasoner = require('elasticsearch-reasoner')

function infer (config, dirs, tools, callback) {
  var reader = tools.reader('tgn', 'pits')
  var reasoner = Reasoner(require('./tgn-geonames.rules.js'))

  reader
    .map(reasoner)
    .flatten()
    .compact()
    .flatten()
    .map(H.curry(tools.writer.writeObject))
    .nfcall([])
    .series()
    .stopOnError(callback)
    .done(callback)
}

// ==================================== API ====================================

module.exports.steps = [
  infer
]
