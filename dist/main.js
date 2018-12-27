const render = new Renderer()
const musicManager = new MusicManager()
const newsmanager = new NewsManager() //guy's client side data manager


const loadSong = async function () {
    await musicManager.getPlaylist()
    let i = musicManager.currentSong
    render.musicRenderer(musicManager.playlist[i])
}

$(`#card-container`).on(`click`, `#musicSettings`, function () {
    $(`#card-container`).empty()
    console.log(musicManager.playlist)
    render.playlistRenderer(musicManager.playlist)
})

$(`#card-container`).on(`click`, `#next`, function () {
    $(`#music`).remove()
    musicManager.playNext()
    let i = musicManager.currentSong
    render.musicRenderer(musicManager.playlist[i])
})

$(`#card-container`).on(`click`, `#back`, function () {
    $(`#card-container`).empty()
    loadPage()
})

$(`#card-container`).on(`click`, `#play`, function () {
    let title = $(this).closest(`.song`).find(`#title`).text()
    let id = musicManager.playlist.findIndex(s => s.title === title)
    musicManager.currentSong = id
    $(`#card-container`).empty()
    loadPage()
})

$(`#card-container`).on(`click`, `#delete`, function () {
    let title = $(this).closest(`.song`).find(`#title`).text()
    let id = musicManager.playlist.findIndex(s => s.title === title)
    musicManager.playlist.splice(id, 1)
    $(`#card-container`).empty()
    render.playlistRenderer(musicManager.playlist)
    $(`#card-container`).append(`<div id="searchBar">
 <input id="songInput" type="text" placeholder="Add Song">
 <button id="searchButton">Search</button>
 </div>`)
})

$(`#card-container`).on(`click`, `#searchButton`, async function () {
    let input = $(`#songInput`).val()
    await musicManager.getSong(input)
    $(`#searchBar`).remove()
    render.searchRenderer(musicManager.searchResults)
})


$(`#card-container`).on(`click`, `.songResult`, function () {
    let id = $(this).attr("id")
    let title = $(this).find(`p`).text()
    musicManager.addSong({
        id: id,
        title: title
    })
    $(`#card-container`).empty()
    render.playlistRenderer(musicManager.playlist)
})

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

// Map controllers

$('body').on('click', '#commute', function () {
    $.get(`/map`, function (mapData) {
        mapData.location = pos
        render.FullMapRenderer(mapData)
    })
})

$(`body`).on(`click`, `#back-map`, function () {
    $(`#card-container`).empty()
    $(`#map`).empty()
    loadPage()
})


// load all
const loadPage = () => {
    loadSong()
    getMap()
    getNews(3) // guy counting on this to call my shit
}

loadPage()