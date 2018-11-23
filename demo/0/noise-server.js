const noise = require('noise-network')

const server = noise.createServer(function (encryptedStream) {
  encryptedStream.pipe(process.stdout)
  process.stdin.pipe(encryptedStream)
})

server.listen(noise.keygen(), function () {
  console.log(server.publicKey.toString('hex'))
})
