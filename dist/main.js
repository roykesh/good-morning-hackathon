const render = new Renderer()

const getSong = function () {
    $.get(`/music`, function (songData) {
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