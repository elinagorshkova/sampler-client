
'use strict'

const store = require('../store')

const signUpSuccess = function  () {
  console.log   ('Signed Up')
}

const signInSuccess = function (data) {
  store.user = data.user
  console.log('Signed In')

}

const changePasswordSuccess = function () {
  console.log("Password changed")
}

const signOutSuccess = function () {
  store.user = null
  console.log("Signed out successfully")
}
const authFailure = function () {
console.log("Failure")
}

const failure = function () {
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
