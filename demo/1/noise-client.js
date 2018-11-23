const noise = require('noise-network')
const hypercore = require('hypercore')
const pump = require('pump')

const feed = hypercore('./client-store-data-here', '{insert hypercore key}')
const encryptedStream = noise.connect('{insert server key}')

pump(
  encryptedStream,
  feed.replicate({ live: true }),
  encryptedStream
)

feed.get(0, (err, data) => console.log(data.toString()))
