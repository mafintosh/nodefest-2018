const noise = require('noise-network')
const hypercore = require('hypercore')
const pump = require('pump')

const feed = hypercore('./store-data-here')

const server = noise.createServer(function (encryptedStream) {
  console.log('replicating append only log')
  pump(
    encryptedStream,
    feed.replicate({ live: true }),
    encryptedStream
  )
})

server.listen(noise.keygen(), function () {
  console.log('server', server.publicKey.toString('hex'))
  feed.ready(function () {
    console.log('hypercore', feed.key.toString('hex'))
  })
})
