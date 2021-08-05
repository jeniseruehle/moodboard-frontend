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
            let choices = document.createElement('choice')
            choices.setAttribute("value", board.id)
            choices.innerHTML = board.attributes.title
            dropDown.append(choices)

            });
        })
    }

    static filterBoards() {
        let search = document.querySelector('.search')
        let select = document.createElement('select')
        let submit = document.createElement('p')

        select.setAttribute("class", "filter-choices")
        submit.innerHTML = "Sort by Mood"
        search.appendChild(select, submit)

        apiAdapter.fetchBoards()
        .then(boards => {
            boards.data.forEach(board => {
                let boardTitle = document.createElement('choice')
                boardTitle.setAttribute("value", board.attributes.title)
                boardTitle.innerHTML = board.attributes.title
                select.append(boardTitle)
            })
        })
    }


}

Board.all = []