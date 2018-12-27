
const render = new Renderer()
const musicManager = new MusicManager()
const newsmanager = new NewsManager() //guy's client side data manager

// Corinne's updated code

const loadSong = async () => {
    await musicManager.getPlaylistDB()
    console.log(musicManager.playlist)
    render.musicRenderer(musicManager.playlist[0])
}

const loadPlaylist = async () => {
    await musicManager.getPlaylistDB()
    console.log(musicManager.playlist)
    render.playlistRenderer(musicManager.playlist)

}

const handleSearch = async function () {
    let input = $(`#songInput`).val()
    await musicManager.getSong(input)
    $(`#searchBar`).remove()
    render.searchRenderer(musicManager.searchResults)
}

$(`#card-container`).on(`click`, `#searchButton`, async function () {
    handleSearch()
})

$(`#card-container`).on(`click`, `.songResult`, function () {
    let id = $(this).attr("id")
    let title = $(this).find(`p`).text()
    musicManager.addSong({
        id: id,
        title: title
    })
    $(`#card-container`).empty()
    loadPlaylist()
})

$(`#card-container`).on(`click`, `#musicSettings`, function () {
    $(`#card-container`).empty()
    render.playlistRenderer(musicManager.playlist)
})

$(`#card-container`).on(`click`, `#next`, function () {
    $(`#music`).empty()
    musicManager.playNext()
    let i = musicManager.currentSong
    render.nextSong(musicManager.playlist[i])
})

$(`#card-container`).on(`click`, `#back`, function () {
    $(`#card-container`).empty()
    loadPage()
})

$(`#card-container`).on(`click`, `#play`, function () {
    let title = $(this).closest(`.song`).find(`#title`).text()
    console.log(title)
    let i = musicManager.playlist.findIndex(s => s.title === title)
    console.log(i)
    musicManager.currentSong = i
    console.log(musicManager.currentSong)
    $(`#card-container`).empty()
    render.musicRenderer(musicManager.playlist[i])
    getMap()
    render.newsRenderer(newsmanager.tempArticles)
})

$(`#card-container`).on(`click`, `#delete`, function () {
    let title = $(this).closest(`.song`).find(`#title`).text()
    console.log(title)
    musicManager.removeSong(title)
    $(`#card-container`).empty()
    loadPlaylist()
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

$('body').on('click', '#commute', function () {
    $.get(`/map`, function (mapData) {
        mapData.location = pos
        render.FullMapRenderer(mapData)
    })
})

const loadPage = () => {
    loadSong()
    getMap()
    getNews(3) // guy counting on this to call my shit
}

loadPage()

