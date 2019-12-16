const env = require('./env')

const port = 8001
const api = {
  local: 'http://m.topping.loseyear.com/',
  prod: 'http://m.topping.loseyear.com/',
}

module.exports = {
  port,
  api: api[env],
}
