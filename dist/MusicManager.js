class MusicManager {
    constructor() {
        this.playlist = []
        this.currentSong = 0
        this.searchResults = []

    }

    async getPlaylistDB() {
        let data = await $.get(`/playlist`)
        this.playlist = data
    }

    playNext() {
        this.currentSong++
    }

    async getSong(song) {
        let search = await $.get(`/music/${song}`)
        let results = search.map(s => {
            return {
                id: s.id.videoId,
                title: s.snippet.title,
                pic: s.snippet.thumbnails.default.url
            }
        })
        this.searchResults = results
    }


    addSong(newTrack) {
        $.post(`/song`, newTrack, function (response) {
            console.log(`Saved song`)
        })

    }

    removeSong(song) {
        $.ajax({
            url: `/music/${song}`,
            method: `delete`,
            success: function (response) {
                console.log(response)
            }
        })
    }
}