const render = new Renderer()
const newsmanager = new NewsManager() //guy's client side data manager

const getSong = function () {
    $.get(`/music`, function (songData) {
        render.musicRenderer(songData)
    })
}


//guy's updated main getNews function
const getNews = async function (numPerSource) {
    await newsmanager.fetchNews(numPerSource)
    render.newsRenderer(newsmanager.tempArticles)
    }


const getMap = function () {
    $.get(`/map`, function (mapData) {
        render.mapRenderer(mapData)
    })
}


$('body').on('click', '#commute', function () {
    $.get(`/map`, function (mapData) {
        mapData.location = pos
        render.FullMapRenderer(mapData)
    })
})


const loadPage = () => {
    getSong()
    getMap()
    getNews(3) // guy counting on this to call my shit
}

loadPage()