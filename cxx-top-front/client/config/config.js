const env = require('../../config/env')

const img = {
  local: 'http://m.toppinghomme.com/',
  prod: 'http://m.toppinghomme.com/',
}

module.exports = {
  img: img[env],
}
