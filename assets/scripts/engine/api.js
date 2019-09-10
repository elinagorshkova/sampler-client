'use strict'

const config = require('../config')
const store = require('../store')

const createCollection = function (data) {

  return $.ajax({
    url: config.apiUrl + '/collections/',
    method: 'POST',
    data
  })
}

const setCollection = function (data) {
  console.log(data)
  return $.ajax({
    url: config.apiUrl + '/collections/' + data.collection_id,
    method: 'GET'
  })
}

const showAllCollections = function () {
  return $.ajax({
    url: config.apiUrl + '/collections',
    method: 'GET'
  })
}


module.exports = {
  createCollection,
setCollection,
showAllCollections
}
