// Server setup

const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')


const commuteAPI = require('./server/routes/commuteAPI')
const musicAPI = require('./server/routes/musicAPI')
const newsAPI = require('./server/routes/newsAPI')


app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: false
}))

// Mongoose setup
// const mongoose = require('mongoose')
// mongoose.connect('mongodb://localhost/weatherDB', {
//     useNewUrlParser: true
// })
]
app.use('/', commuteAPI)
app.use('/', musicAPI)
app.use('/', newsAPI)




const port = 9000
app.listen(port, function () {
    console.log(`Server running on ${port}`)
})

