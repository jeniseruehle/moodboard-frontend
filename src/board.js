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
        .catch(error => console.log(error))
    }
}

Board.all = []