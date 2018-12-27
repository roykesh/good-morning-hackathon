const express = require('express')
const router = express.Router()
const request = require(`request`)

const Song = require(`../models/Song`)


router.get(`/music/:song`, function (req, res) {
    request(`https://www.googleapis.com/youtube/v3/search/?part=snippet&videoEmbeddable=true&type=video&maxResults=3&key=AIzaSyCjk-ENKPEwCWlvNmXbj604Xv-sxUttzd8&q=${req.params.song}`, (error, response, body) => {
        let data = JSON.parse(body)
        res.send(data.items)
    })
})

router.get(`/playlist`, (req, res) => {
    Song.find({}).exec(function (err, songs) {
        res.send(songs)
    })
})

router.post(`/song`, function (req, res) {
    let song = new Song(req.body)
    song.save()
    res.send(`${song} added to playlist`)
})

router.delete(`/music/:song`, function (req, res) {
    let song = req.params.song
    console.log(song)
    Song.findOneAndDelete({ title: song }).exec()
    res.send(`${song} deleted from DB`)
})



module.exports = router