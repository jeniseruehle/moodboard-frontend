class ApiAdapter {

    constructor() {
        this.moodsURL = `http://localhost:3000/moods`
        this.boardsURL = `http://localhost:3000/boards`
    }

    fetchMoods() {
        return fetch(`${this.moodsURL}`)
        .then(resp => resp.json())
    }

    postMood(name, desc, image, board_id) {
        const moodInput = {name, desc, image, board_id}
        return fetch(`${this.moodsURL}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(moodInput)
        })
        .then(resp => resp.json())
        .then(mood => {
            const moodData = mood.data
            let newMood = new Mood(moodData, moodData.attributes)
            document.querySelector('#mood-container').innerHTML += newMood.renderMoodCard()
        })
        .catch(error => console.log(error))
    }

    deleteMood(e) {
        fetch(`${this.moodsURL}/${e.target.dataset.id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
    }

    fetchBoards() {
        return fetch(`${this.boardsURL}`)
        .then(resp => resp.json())
    }
}