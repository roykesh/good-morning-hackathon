const express = require('express')
const router = express.Router()
const dummyData = require('./dummyData')

router.get(`/music`, function (req, res) {
    console.log("serving a song")
    res.send(dummyData.songData)
})

module.exports = router