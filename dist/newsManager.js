class NewsManager {
    constructor() {
        this.tempArticles = []
        this.sources = []
    }

    async fetchSources() {
        let data = await $.get(`/sources`) 
        this.sources = data
    }

    async fetchNews(numPerSource) {
        this.tempArticles = []
        await this.fetchSources()
        for (let o of this.sources) {
            if (o.checked) {
                let anotherSource = await $.get(`/articles/${o.name}/?n=${numPerSource}`)
                for (let a of anotherSource) {
                    this.tempArticles.push(a)
                }
            }    
        }
    }

}