class TempManager{
    constructor(){
        this.playlist = []
        this.firstSong = {}
        this.currentSong = 0
        this.searchResults = []
        
    }

    async getPlaylist(){
        let data = await $.get(`/playlist`)
        this.playlist = data
    }

    playNext(){
 this.currentSong++
    }

    async getSong(song){
let search = await $.get(`/music/${song}`)

let results = search.map(s=>{ return {
    id: s.id.videoId,
    title: s.snippet.title,
    pic: s.snippet.thumbnails.default.url
}})
this.searchResults = results
    }


    addSong(newTrack){
        this.playlist.push(newTrack)

    }
}