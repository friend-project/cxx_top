const env = require('./env')

const port = 8001
const api = {
  local: 'http://m.toppinghomme.com/',
  prod: 'http://m.toppinghomme.com/',
}

module.exports = {
  port,
  api: api[env],
}
