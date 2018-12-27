const express = require('express')
const router = express.Router()
const Parser = require('rss-parser')
const parser = new Parser()
const Source = require('../model/Source')

router.post('/source', function(req, res) {
    let newSource = new Source({
        name: `TheMarker`,
        url: `http://www.themarker.com/cmlink/1.144`,
        checked: "checked"
    }) 
    newSource.save()
    res.end()
})

router.get(`/sources`, function(req,res) {
    Source.find({}, function(err, sources) {
        res.send(sources)
    })
})

router.get(`/articles/:source`,async function(req, res) {
    let sourceObject = await Source.findOne({name: `${req.params.source}`})
    let feed = await parser.parseURL(sourceObject.url)
    let articlesArray = []
    let tempObject
    for (let i = 0; i < req.query.n; i++) {
        tempObject = {
            source: req.params.source,
            author: feed.items[i].author,
            title: feed.items[i].title,
            pubDate: feed.items[i].pubDate,
            link: feed.items[i].link,
            thumb: feed.items[i].enclosure.url,
            snippet: feed.items[i].contentSnippet,
            content: feed.items[i].content
            }
        articlesArray.push(tempObject)
    }    
    res.send(articlesArray)
})

module.exports = router