class Renderer {
    constructor() {}

    // Music renderer
    musicRenderer(songData) {
        let source = $('#music-template').html();
        let template = Handlebars.compile(source);
        let newHTML = template(songData);
        $('#card-container').append(newHTML);
    }
    nextSong(song) {
        let source = $('#next-template').html();
        let template = Handlebars.compile(source);
        let newHTML = template(song);
        $('#music').append(newHTML);
    }

    playlistRenderer(playlist) {
        let source = $('#playlist-template').html();
        let template = Handlebars.compile(source);
        let newHTML = template({playlist});
        $('#card-container').append(newHTML);
    }

    searchRenderer(searchResults) {
        let source = $('#search-template').html();
        let template = Handlebars.compile(source);
        let newHTML = template({searchResults});
        $('#card-container').append(newHTML);
    }

    // Map renderer
    mapRenderer(mapData) {
        let source = $('#commute-template').html();
        let template = Handlebars.compile(source);
        let newHTML = template(mapData);
        $('#card-container').append(newHTML);
    }

    // guy - needs this too
    newsRenderer(articleArray) {
        let source = $('#news-template').html();
        let template = Handlebars.compile(source);
        articleArray.forEach(function (a) {
            let newHTML = template(a);
            $('#card-container').append(newHTML);
        })
    }

    settingsRenderer(sources) {
        $("#card-container").empty()
        let source = $("#news-preferences-template").html()
        let template = Handlebars.compile(source)
        let newHTML = template({sources})
        $("#news-preferences").append(newHTML)

    }

    // Fullpage map renderer
    async FullMapRenderer(mapData) {
        $('#card-container').empty()
        initMap()
        let source = $('#fullmap-template').html();
        let template = Handlebars.compile(source);
        let newHTML = template();
        $('#card-container').append(newHTML);
    }

    
    // Main renderer
    // renderAll() {
    //     this.musicRenderer(songData)
    //     this.mapRenderer(mapData)
    //     this.newsRenderer(articleData)
    // this.weatherRenderer()
    // }

    // Weather renderer
    // weatherRenderer(allCityData) {
    //     let source = $('#city-template').html();
    //     let template = Handlebars.compile(source);
    //     let newHTML = template(locationData);
    //     $('#card-container').append(newHTML);
    // }
}