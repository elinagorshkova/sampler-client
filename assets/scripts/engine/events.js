'use strict'
const api = require('./api') // link to API call file
const ui = require('./ui') // link to UI file
const store = require('../store')

const addHandlers = () => {
  $(document).on( 'keydown', playSound)
}


const playSound = function (event) {
 let key = event.which
 console.log(key)
 $('#' + key).css('background-color', 'red')
}


module.exports = {
  addHandlers,
  playSound
}
