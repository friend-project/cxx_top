const env = require('../../config/env')

const img = {
  local: 'http://m.topping.loseyear.com/public/',
  prod: 'http://m.topping.loseyear.com/public/',
}

module.exports = {
  img: img[env],
}
