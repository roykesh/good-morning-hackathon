const express = require('express')
const router = express.Router()
const Parser = require('rss-parser')
const parser = new Parser()

let sourcesData = {
    vice: {
        name: `VICE`,
        url: `https://www.vice.com/en_us/rss`,
        skeleton: {
            authorPath: "creator",
            titlePath: "title",
            pubDatePath: "pubDate",
            linkPath: "link",
            thumbPath: ["enclosure", "url"],
            snippetPath: "contentSnippet"
        }
    },
    haaretz: {
        name:`Haaretz`,
        url: `http://www.haaretz.com/cmlink/1.4605102`,
        skeleton: {
            authorPath: "author",
            titlePath: "title",
            pubDatePath: "pubDate",
            linkPath: "link",
            thumbPath: ["enclosure", "url"],
            snippetPath: "contentSnippet"
        }
    },
    themarker: {
        name: `TheMarker`,
        url: `http://www.themarker.com/cmlink/1.144`,
        skeleton: {
            authorPath: "author",
            titlePath: "title",
            pubDatePath: "pubDate",
            linkPath: "link",
            thumbPath: ["enclosure", "url"],
            snippetPath: "contentSnippet"
        }
    }
}

router.get(`/sources`, function(req,res) {
    res.send(Object.keys(sourcesData))
})

router.get(`/articles/:source`,async function(req, res) {
    let sourceObject = sourcesData[req.params.source]
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
            snippet: feed.items[i].contentSnippet
            }
        articlesArray.push(tempObject)
    }    
    res.send(articlesArray)
})


module.exports = router