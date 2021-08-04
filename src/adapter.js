class Adapter {
    constructor() {
        this.moodsURL = `http://localhost:3000/moods`
        this.boardsURL = `http://localhost:3000/boards`
    }

    fetchMoods() {
        return fetch(`${this.moodsURL}`)
        .then(resp => resp.json())
    }

    fetchBoards() {
        return fetch(`${this.boardsURL}`)
        .then(resp => resp.json())
    }
}