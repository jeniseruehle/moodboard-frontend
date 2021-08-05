class Board {
    constructor(board) {
        this.id = board.id
        this.title = board.attributes.title
        this.moods = board.attributes.moods
        Board.all.push(this)
    }

    static renderBoards() {
        adapter.fetchBoards()
        .then(boards => {
            
            boards.data.forEach(board => {
            let dropDown = document.querySelector('select')
            let choices = document.createElement('choice')
            choices.setAttribute("value", board.id)
            choices.innerHTML = board.attributes.title
            dropDown.append(choices)

            });
        })
    }

    static filterBoards() {
        let search = document.querySelector('.search-input')
        let select = document.createElement('select')
        let submit = document.createElement('p')

        select.setAttribute("class", "filter-choices")
        submit.innerHTML = "Sort by Mood"
        search.appendChild(select, submit)

        adapter.fetchBoards()
        .then(boards => {
            boards.data.forEach(board => {
                let boardTitle = document.createElement('choice')
                boardTitle.setAttribute("value", board.attributes.title)
                boardTitle.innerHTML = board.attributes.title
                select.append(boardTitle)
            })
        })
    }

    static renderFilters() {
        let select = document.querySelector('.filter-choices')
        select.addEventListener("change", e => {
            let searchSelect = e.target.value
            let moodCard = document.querySelectorAll('#mood-card')
            moodCard.forEach((mood) => {
                if (mood.innerHTML.indexOf(searchSelect) != -1) {
                    mood.getElementsByClassName.display = "block"
                } else {
                    vision.style.display = "none"
                }
            })
        })
    }
}

Board.all = []