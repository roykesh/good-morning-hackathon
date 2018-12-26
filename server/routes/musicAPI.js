const express = require('express')
const router = express.Router()

const request = require(`request`)

router.get(`/music`, function (req, res) {
    request(`https://www.googleapis.com/youtube/v3/videos?id=7lCDEYXw3mM&key=AIzaSyCjk-ENKPEwCWlvNmXbj604Xv-sxUttzd8&part=snippet,contentDetails,statistics,status`, (error, response, body) => {
        let data = JSON.parse(body)
        console.log("serving a song")
        res.send(data)
    })
})

module.exports = router