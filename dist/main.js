const render = new Renderer()
const dummy = new Dummy()

const loadPage = () => {
    // access all dummy data
    // render.renderAll(dummyData)
    render.musicRenderer(dummy.songData)
    render.mapRenderer(dummy.mapData)
    render.newsRenderer(dummy.articleData)
}

loadPage()