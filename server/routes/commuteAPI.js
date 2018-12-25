const express = require('express')
const router = express.Router()
const dummyData = require('./dummyData')


router.get(`/map`, function(req, res) {
    console.log("serving a map")
    res.send(dummyData.mapData)
})


module.exports = router