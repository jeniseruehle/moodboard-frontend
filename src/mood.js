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
        apiAdapter.fetchMoods()
        .then(moods => {
            moods.data.forEach(mood => {
            let newMood = new Mood(mood, mood.attributes)
            document.querySelector('#mood-container').innerHTML += newMood.renderMoodCard()  
            });
        })
    }

    renderMoodCard() {
        return `
        <div data-id=${this.id}>
            <h3>${this.name}</h3>
            <img src=${this.image} width="100%" height="80%">
            <p>${this.desc}</p>
            <p>${this.board.title} <button data-id=${this.id} type="button" class="delete">Delete Mood?</button></p>
        </div>
        `;
    }

    static createMoodForm(e) {
        const moodForm = document.querySelector("#create-mood-form")
        moodForm.addEventListener('submit', e => {
            e.preventDefault()
            const moodName = document.querySelector('#mood-name').value
            const moodDesc = document.querySelector('#mood-desc').value
            const moodImage = document.querySelector('#mood-image').value
            const boardID = parseInt(document.querySelector('#boards').value)
            apiAdapter.postMood(moodName, moodDesc, moodImage, boardID)
            e.target.reset()
        })
    }

    static removeMood() {
        const moodContainer = document.querySelector('#mood-container')
        moodContainer.addEventListener('click', e => {
            if (e.target.className === "delete") {
                apiAdapter.deleteMood(e)
                this.parentElement(e.target.dataset.id).remove()
            }
        })
    }
}

Mood.all = []