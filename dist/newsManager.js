class NewsManager {
    constructor() {
        this.tempArticles = []
        this.keys = []
    }

    async fetchKeys() {
        let data = await $.get(`/sources`) 
        this.keys = data
    }

    async fetchNews(numPerSource) {
        this.tempArticles = []
        await this.fetchKeys()
        for (let k of this.keys) {
            let anotherSource = await $.get(`/articles/${k}/?n=${numPerSource}`)
            for (let a of anotherSource) {
                this.tempArticles.push(a)
            }    
        }
    }

}