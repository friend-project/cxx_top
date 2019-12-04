const env = require('./env')

const port = 8001
const api = {
  local: 'http://m.topping.loseyear.com/public/',
  prod: 'http://m.topping.loseyear.com/public/',
}

module.exports = {
  port,
  api: api[env],
}
