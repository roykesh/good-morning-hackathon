
const render = new Renderer()
const tempManager = new TempManager()



const loadsong =  async function () {
    await tempManager.getPlaylist()
 let i = tempManager.currentSong
  render.musicRenderer(tempManager.playlist[i])
    }


$(`#card-container`).on(`click`, `#musicSettings`, function(){
    $(`#card-container`).empty()
    console.log(tempManager.playlist) 
    render.playlistRenderer(tempManager.playlist)
})


$(`#card-container`).on(`click`, `#next`, function(){
    $(`#music`).remove()
    tempManager.playNext()
    let i = tempManager.currentSong
    render.musicRenderer(tempManager.playlist[i])
})

$(`#card-container`).on(`click`, `#back`, function(){
    $(`#card-container`).empty()
    loadPage()
})

$(`#card-container`).on(`click`, `#play`, function(){
    let title = $(this).closest(`.song`).find(`#title`).text() 
   let id = tempManager.playlist.findIndex(s=>s.title === title)
    tempManager.currentSong = id
    $(`#card-container`).empty()
    loadPage()
})

$(`#card-container`).on(`click`, `#delete`, function(){
    let title = $(this).closest(`.song`).find(`#title`).text() 
    let id = tempManager.playlist.findIndex(s=>s.title === title)
 tempManager.playlist.splice(id, 1)
 $(`#card-container`).empty()
 render.playlistRenderer(tempManager.playlist)
 $(`#card-container`).append(`<div id="searchBar">
 <input id="songInput" type="text" placeholder="Add Song">
 <button id="searchButton">Search</button>
 </div>`)

})

$(`#card-container`).on(`click`, `#searchButton`, async function(){
    let input = $(`#songInput`).val()
   await tempManager.getSong(input)
   $(`#searchBar`).remove()
    render.searchRenderer(tempManager.searchResults)
    

})


$(`#card-container`).on(`click`, `.songResult`, function(){
    let id = $(this).attr("id")
    let title = $(this).find(`p`).text()
    tempManager.addSong({id:id,
        title: title})
        $(`#card-container`).empty()   
    render.playlistRenderer(tempManager.playlist)
})

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

const loadPage =function() {
  loadsong()
    getMap()
    getNews()
}

loadPage()

