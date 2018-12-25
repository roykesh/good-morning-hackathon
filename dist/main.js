const render = new Renderer()


const dummyData = {
    songOne:`D5Y11hwjMNs`, 
  songTwo:`1rCgM07uzq4`, 
  songThree:`nC9dQOnUyao`
    
  }
const getSong = function () {
    $.get(`/music/${dummyData.songTwo}`, function (songData) {

        render.musicRenderer(songData)
    })
}


const getNews = function () {
    $.get(`/article`, function (newsData) {

        render.newsRenderer(newsData)
    })
}


const getMap = function () {
    $.get(`/map`, function (mapData) {

        render.mapRenderer(mapData)
    })
}

const loadPage = () => {
    getSong()
    getMap()
    getNews()
}

loadPage()