const noise = require('noise-network')

const stream = noise.connect('20c0b5479480775d20dc8d6fd56c5e1000cfcd5d6c6be971c51267ca3a7c5562')

process.stdin.pipe(stream)
stream.pipe(process.stdout)
