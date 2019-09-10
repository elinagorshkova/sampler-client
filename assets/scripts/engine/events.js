'use strict'
const getFormFields = require('./../../../lib/get-form-fields')
const api = require('./api') // link to API call file
const ui = require('./ui') // link to UI file
const store = require('../store')

const my_pad_keys = [49, 50, 51, 52, 81, 87, 69, 82, 65, 83,68, 70, 90, 88, 67, 86]

const addHandlers = () => {
  // $(document).on( 'keydown', playSound)
  $('#set-collection').on('submit', onSetCollection)
  $('#create-collection').on('submit', onCreateCollection)
  $('#get_all_collections').on('click', onShowAllCollections)
}

const onCreateCollection = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  let sounds = []
  for (let i=0; i<2; i++) {
      sounds.push(data[i])
  }
  sounds = "," + sounds.toString() + ','
  // sounds = "'" + sounds.toString() + "'"
  console.log('Sounds are'  + sounds)
  data.collection.sounds = sounds
  console.log(data)
//  make tha api call
  api.createCollection(data)
  // handle sucess
    .then(ui.signUpSuccess)
  // handle fail
    .catch(ui.authFailure)
}

const onSetCollection = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.createCollection(data)
    .then(ui.createCollectionSuccess)
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
  onSetCollection,
  onShowAllCollections
}
