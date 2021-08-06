class Board {
    constructor(board) {
        this.id = board.id
        this.title = board.attributes.title
        this.moods = board.attributes.moods
        Board.all.push(this)
    }

    static renderBoards() {
        apiAdapter.fetchBoards()
        .then(boards => {
            
            boards.data.forEach(board => {
            let dropDown = document.querySelector('select')
            let options = document.createElement('option')
            options.setAttribute("value", board.id)
            options.innerHTML = board.attributes.title
            dropDown.append(options)
            })
        })
    }

    static filterBoards() {
        let search = document.querySelector('.search')
        let select = document.createElement('select')
        let submit = document.createElement('p')

        select.setAttribute("class", "filter-options")
        submit.innerHTML = "Sort By Board"
        search.appendChild(select, submit)

        apiAdapter.fetchBoards()
        .then(boards => {
            boards.data.forEach(board => {
                let boardTitle = document.createElement('option')
                boardTitle.setAttribute("value", board.attributes.title)
                boardTitle.innerHTML = board.attributes.title
                select.append(boardTitle)
            })
        })
    }

    static renderFilters() {
        let select = document.querySelector('.filter-options')
        // document.getElementsById("select").setAttribute("placeholder","new text content")
        // select.setAttribute("placeholder", "Choose a board")
        select.addEventListener("change", e => {
            let searchSelect = e.target.value
            let moodCard = document.querySelectorAll('#mood-card')
            moodCard.forEach((mood) => {
                if (mood.innerHTML.indexOf(searchSelect) != -1) {
                    mood.style.display = "block"
                } else {
                    mood.style.display = ""
                }
            })
            let sorted = Mood.all.filter((mood) => {
                return (mood.board.name.includes(searchSelect))
            })
            console.log(sorted)
            Mood.renderMoods(sorted)
        })
    }
}

Board.all = []