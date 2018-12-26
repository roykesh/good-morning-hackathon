class Renderer {
    constructor() {}

    // Music renderer
    musicRenderer(songData) {
        let source = $('#music-template').html();
        let template = Handlebars.compile(source);
        let newHTML = template(songData);
        $('#card-container').append(newHTML);
    }

    playlistRenderer(playlist) {
        let source = $('#playlist-template').html();
        let template = Handlebars.compile(source);
        let newHTML = template({playlist});
        $('#card-container').append(newHTML);
    }

    searchRenderer(searchResults){
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

    // News renderer
    newsRenderer(articleData) {
        let source = $('#news-template').html();
        let template = Handlebars.compile(source);
        let newHTML = template(articleData);
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