const express = require(`express`)
const router = express.Router()



const dummy = {
    articleData: {
        source: "ynet",
        date: "11.11.1111",
        title: "How to Lose a Guy In 10 Days",
        sub_title: "Kate Hudson Reveales Everything",
        author: "Neville Longbottom",
        snippet: `Benjamin Barry is an advertising executive and ladies' man who, to win a big campaign, bets that he can make a woman fall in love with him in 10 days. Andie Anderson covers the "How To" beat for "Composure" magazine and is assigned to write an article on "How to Lose a Guy in 10 days."`,
        thumb: `../howTo.jpg`
    },

    mapData : {
        currentLocation: "WeWork",
        dest: "Dharamshala",
        timeToDest: "3 days",
        transMeth: "hot air balloon",
        url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3381.7097902267765!2d34.765079214904716!3d32.050045828002744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4ca40d51b511%3A0x218289a6751dc096!2sHaPelech%2C+Tel+Aviv-Yafo!5e0!3m2!1sen!2sil!4v1545735912134"
    },

    songData : {
        name: "A Total Eclipse of My heart",
        artist: "Shusha",
        url: `https://www.youtube.com/embed/D5Y11hwjMNs`
    }
}

router.get(`/music`, function (req, res){
    res.send(dummy.songData)
   
})

router.get(`/article`, function (req, res){
    res.send(dummy.articleData)
   
})

router.get(`/map`, function (req, res){
    res.send(dummy.mapData)
   
})




module.exports = router