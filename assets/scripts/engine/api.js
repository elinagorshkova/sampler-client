'use strict'

const config = require('../config')
const store = require('../store')

// const setCollection = function (data) {
//     store.data = $.ajax({
//       url: config.apiUrl + '/' + data.id,
//       method: 'GET',
//     })
// }
const setCollection = function (data) {
  console.log(data)
  return $.ajax({
    url: config.apiUrl + '/collections/' + data.collection_id,
    method: 'GET'
  })
}


module.exports = {
setCollection
}
