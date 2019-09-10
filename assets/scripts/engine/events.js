'use strict'
const getFormFields = require('./../../../lib/get-form-fields')
const api = require('./api') // link to API call file
const ui = require('./ui') // link to UI file
const store = require('../store')

const my_pad_keys = [49, 50, 51, 52, 81, 87, 69, 82, 65, 83,68, 70, 90, 88, 67, 86]

const addHandlers = () => {
  // $(document).on( 'keydown', playSound)
  // $('.delete-collection').on('click', console.log("hi"))
  $('#set-collection').on('submit', onSetCollection)
  $('#create-collection').on('submit', onCreateCollection)
  $('#get_all_collections').on('click', onShowAllCollections)
   $('.content').on('click', '.delete-collection', onDeleteCollection)
}

const onCreateCollection = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  let sounds = []
  for (let i=0; i<2; i++) {
      sounds.push(data[i])
  }
  sounds = "," + sounds.toString() + ','
  data.collection.sounds = sounds
  api.createCollection(data)
    .then(ui.createCollectionSuccess)
    .catch(ui.failure)
}

const onSetCollection = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.setCollection(data)
    .then(ui.setCollectionSuccess)
    .catch(ui.failure)
}
const onDeleteCollection = function (event) {
  event.preventDefault()
  const collectionId = $(event.target).closest('section').data('id')
  api.deleteCollection(collectionId)
    .then(ui.DeleteCollectionSuccess)
    .catch(ui.failure)

}

const playSound = function (event) {
 let key = event.which
let sound = new Audio()
 console.log(store.pad)
 console.log(key)
 let index = my_pad_keys.indexOf(key)
 console.log("index is :" + index)
 $('#' + key).css('background-color', 'red')
sound.src = store.pad[index]
  sound.play()
}

const onShowAllCollections = function () {
  api.showAllCollections()
  .then(ui.showAllCollectionsSuccess)
  .catch(ui.failure)
}

module.exports = {
  addHandlers,
  playSound,
  onCreateCollection,
  onDeleteCollection,
  onSetCollection,
  onShowAllCollections
}
