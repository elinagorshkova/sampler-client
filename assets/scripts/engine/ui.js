
'use strict'

const store = require('../store')

const setCollectionSuccess = function  (data) {
  let pad = []
    for (let i = 0; i<16; i++) {
    pad.push(data.collection.sounds[i])
  }
  store.pad = pad
    console.log(store.pad)
  }

  const showAllCollectionsSuccess = function (data) {
    console.log(data)
    console.log('Yaaay')
  }


const failure = function () {
  console.error('Failure')
}



module.exports = {
setCollectionSuccess,
showAllCollectionsSuccess,
failure
}
