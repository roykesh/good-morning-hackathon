const express = require('express')
const router = express.Router()
// const dummyData = require('./dummyData')
const Parser = require('rss-parser')
const parser = new Parser()



router.get(`/articles/:source/`,async function (req, res) {
    let feed = await parser.parseURL(`http://www.haaretz.com/cmlink/1.4605102`)
    let cleanArray = []
    for (let i = 0; i < req.query.n; i++) {
        ////need to fix it all about around here
    }
    let cleanArray = feed.items.map(function(a) {
      return {
        source: req.params.source,
        author: a.author,
        title: a.title,
        pubDate: a.pubDate,
        link: a.link,
        thumb: a.enclosure.url,
        snippet: a.contentSnippet
      }
    } )
    let articleObject = {
        source: `Haaretz`,
        author: feed.items[0].author,
        title: feed.items[0].title,
        pubDate: feed.items[0].pubDate,
        link: feed.items[0].link,
        thumb: feed.items[0].enclosure.url,
        snippet: feed.items[0].contentSnippet
    }
    res.send(articleObject)
    // res.end()
})

module.exports = router