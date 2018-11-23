const hypercore = require('hypercore')

const feed = hypercore('./store-data-here')

feed.append('hello')

feed.get(0, (err, data) => console.log(data.toString()))
