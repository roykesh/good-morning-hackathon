const express = require('express')
const request = require('request')
const router = express.Router()

mapData = {
    location: {},
    dest: "Dharamshala",
    timeToDest: "3 days",
    transportMethod: "hot air balloon",
    gMapsAPIKey: 'AIzaSyB-vUHY5R_oBRZhvCcs1VDSET8WHVin7Ps',
    staticMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3381.7097902267765!2d34.765079214904716!3d32.050045828002744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4ca40d51b511%3A0x218289a6751dc096!2sHaPelech%2C+Tel+Aviv-Yafo!5e0!3m2!1sen!2sil!4v1545735912134"
}

router.get(`/map`, function (req, res) {
    console.log("serving a map")
    res.send(mapData)
})

const apiKey = "71b5b5cd59004ae089d33355182308"
let coords = "32.050224,34.766899"

router.get('/weather/:location', (req, res) => {
    request(`http://api.apixu.com/v1/current.json?key=${apiKey}&q=${req.params.location}`, (err, response) => {
        console.log(`Getting weather from coordinates: ${req.params.location}`)
        const parsedResponse = JSON.parse(response.body)
        console.log(parsedResponse)
        res.send(parsedResponse)
    })
})

// router.post('/city', function (req, res) {
//     console.log(req.body)
//     let newCity = new City({
//         name: req.body.name,
//         updatedAt: req.body.updatedAt,
//         temperature: req.body.temperature,
//         condition: req.body.condition,
//         conditionPic: req.body.conditionPic
//     })
//     newCity.save()
//     res.end()
// })


module.exports = router