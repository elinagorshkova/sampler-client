'use strict'
const authEvents = require('./auth/events')
const engineEvents = require('./engine/events')

$(() => {
   authEvents.addHandlers()
   engineEvents.addHandlers()
})
