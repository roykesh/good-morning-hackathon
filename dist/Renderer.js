class Renderer {
    constructor() {}

    // Music renderer
    musicRenderer(songData) {
        let source = $('#music-template').html();
        let template = Handlebars.compile(source);
        let newHTML = template(songData);
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

    // Fullpage map renderer
    async FullMapRenderer(mapData) {
        $('#card-container').empty()
        initMap()
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