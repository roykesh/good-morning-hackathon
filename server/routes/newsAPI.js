const express = require('express')
const router = express.Router()
const dummyData = require('./dummyData')


router.get(`/article`, function(req, res) {
    console.log("serving an article")
    res.send(dummyData.articleData)
})


module.exports = router