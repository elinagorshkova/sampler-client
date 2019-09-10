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

const deleteCollection = function (collectionId) {
  console.log("collection id" + collectionId)
  return $.ajax({
    url: config.apiUrl + '/collections/' + collectionId,
    method: 'DELETE'
  })
}

const setCollection = function (collectionId) {
  return $.ajax({
    url: config.apiUrl + '/collections/' + collectionId,
    method: 'GET'
  })
}

const showAllCollections = function () {
  return $.ajax({
    url: config.apiUrl + '/collections',
    method: 'GET'
  })
}

const updateCollection = function (data) {
  console.log(data)
  return $.ajax({
    url: config.apiUrl + '/collections/' + store.collectionId,
    method: 'PATCH',
    data
  })
}


module.exports = {
createCollection,
deleteCollection,
setCollection,
showAllCollections,
updateCollection
}
