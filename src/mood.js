class Mood {

    constructor(mood, moodAttributes) {
        this.id = mood.id
        this.name = moodAttributes.name
        this.desc = moodAttributes.desc
        this.image = moodAttributes.image
        this.board = moodAttributes.board
        this.boardID = moodAttributes.board_id
        Mood.all.push(this)
    }

    static renderMoods() {
        adapter.fetchMoods()
        .then(moods => {
            moods.data.forEach(mood => {
            let newMood = new Mood(mood, mood.attributes)
            document.querySelector('#mood-container').innerHTML += newMood.renderMoodCard()  
            });
        })
    }

    renderMoodCard() {
        return `
        
        `
    }

    static createMoodForm(e) {
        const moodForm = document.querySelector("#create-mood-form")
        moodForm.addEventListener('submit', e => {
            e.preventDefault()
            const moodName = document.querySelector('#mood-name').value
            const moodDesc = document.querySelector('#mood-desc').value
            const moodImage = document.querySelector('#mood-image').value
            const boardID = parseInt(document.querySelector('#boards').value)
            adapter.postMood(moodName, moodDesc, moodImage, boardID)
            moodForm.requestFullscreen()
        })
    }
}

Mood.all = []