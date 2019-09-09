'use strict'
const getFormFields = require('./../../../lib/get-form-fields')
const api = require('./api') // link to API call file
const ui = require('./ui') // link to UI file
const store = require('../store')

const my_pad_keys = [49, 50, 51, 52, 81, 87, 69, 82, 65, 83,68, 70, 90, 88, 67,86]

const addHandlers = () => {
  $(document).on( 'keydown', playSound)
  $('#set-collection').on('submit', onSetCollection)
}


const onSetCollection = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.setCollection(data)
    .then(ui.setCollectionSuccess)
    .catch(ui.failure)
}

// Working code
// const playSound = function () {
//   let sound = new Audio()
//   let key = event.which
//   $('#' + key).css('background-color', 'red')
//   sound.src = 'https://file-examples.com/wp-content/uploads/2017/11/file_example_MP3_700KB.mp3'
//   sound.play()
// }

const playSound = function (event) {
 let key = event.which
 console.log(store.pad)
 console.log(key)
 let index = my_pad_keys.indexOf(key)
 console.log("index is :" + index)
 $('#' + key).css('background-color', 'red')
 $('#' + key).text(store.pad[index])
}


module.exports = {
  addHandlers,
  playSound,
  onSetCollection
}
