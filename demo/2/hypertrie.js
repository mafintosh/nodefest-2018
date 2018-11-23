const hypertrie = require('hypertrie')

const db = hypertrie('./db-is-stored-here')

db.put('hello', 'tokyo', function () {
  db.get('hello', (err, node) => console.log(node))
})
