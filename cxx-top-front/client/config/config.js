const env = require('../../config/env')

const img = {
  local: 'http://m.topping.loseyear.com/',
  prod: 'http://m.topping.loseyear.com/',
}

module.exports = {
  img: img[env],
}
