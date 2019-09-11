'use strict'
const getFormFields = require('./../../../lib/get-form-fields')
const api = require('./api') // link to API call file
const ui = require('./ui') // link to UI file
const store = require('../store')

const addHandlers = () => {
  $(document).ready(onPageLoads)
}

const onPageLoads = function () {
  $('#when-signed-in').hide()
}

module.exports = {
  addHandlers
}
