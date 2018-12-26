const express = require('express')
const router = express.Router()
const request = require(`request`)

const playlist = [
    {
        id: `OfJRX-8SXOs`,
        title: `NINA SIMONE-FEELING GOOD`
    },
    {
        id: `1rCgM07uzq4`,
        title: `Nina Simone- Here comes the sun`
    },
    {
        id: `nC9dQOnUyao`,
        title: "Everybody Loves The Sunshine - Roy Ayers"
    },
    {
        id: `bEeaS6fuUoA`,
        title: `Bill Withers - Lovely Day`

    },
    {
        id: `s3Q80mk7bxE`,
        title: `I Want You Back - The Jackson 5`
    }
    ,
    {
        id: `R0HmdB7OZnw`,
        title: `Baltimore - Nina Simone`
    }]


router.get(`/music/:song`, function (req, res) {
    request(`https://www.googleapis.com/youtube/v3/search/?part=snippet&videoEmbeddable=true&type=video&maxResults=3&key=AIzaSyCjk-ENKPEwCWlvNmXbj604Xv-sxUttzd8&q=${req.params.song}`, (error, response, body) =>{
        let data = JSON.parse(body)
        res.send(data.items)
    })
})


router.get(`/playlist`, function (req, res) {
    console.log(playlist)
    res.send(playlist)
})

module.exports = router