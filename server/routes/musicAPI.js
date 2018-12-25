const express = require('express')
const router = express.Router()
const request = require(`request`)





router.get(`/music/:song`, function (req, res) {
request(`https://www.googleapis.com/youtube/v3/videos?id=${req.params.song}&key=AIzaSyCjk-ENKPEwCWlvNmXbj604Xv-sxUttzd8&part=snippet,contentDetails,statistics,status`, (error, response, body) => {
    let data = JSON.parse(body)
    let trackInfo  = {id: data.items[0].id,
    title: data.items[0].snippet.title
    }
    console.log(trackInfo)
    console.log("serving a song")
    res.send(trackInfo)
})
})

module.exports = router