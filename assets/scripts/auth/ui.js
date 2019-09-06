/* eslint-env es6 */
'use strict'

const store = require('../store')

const signUpSuccess = function () {
  // document.getElementById('sign-up').reset()
  console.log   ('Signed Up')
}

const signInSuccess = function (data) {
  store.user = data.user
  console.log(data)
  console.log('Signed In')
  // document.getElementById('sign-in').reset()

}

const changePasswordSuccess = function () {
  $('#user-message').text('Successfully changed password')
  document.getElementById('change-password').reset()
}

const signOutSuccess = function () {
  store.user = null
  $('#game-flow-message').text('See you soon!')
  $('#user-message').text('Signed out successfully')
  $('#button-auth').show()
  $('#change-password').hide()
  $('#sign-out').hide()
  $('#board').hide()
  $('#check-api').hide()
  $('#start-over').hide()
  $('#xo').hide()
}
const authFailure = function () {
  $('#user-message').text('Incorrect email and/or password')
  document.getElementById('sign-up').reset()
  document.getElementById('sign-in').reset()
  document.getElementById('change-password').reset()
}

const failure = function () {
  $('#user-message').text('Error')
  console.error('Failure')
}

module.exports = {
  failure,
  signInSuccess,
  signUpSuccess,
  signOutSuccess,
  changePasswordSuccess,
  authFailure
}
