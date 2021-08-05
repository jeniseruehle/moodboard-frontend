const adapter = new Adapter()

document.addEventListener('DOMContentLoaded', () => {
    Mood.renderMoods();
    Mood.createMoodForm();
    Board.renderBoards();
    Board.filterBoards();
    Board.renderFilters();

})

// console.log("testing...")

// const BACKEND_URL = 'http://localhost:3000';
// fetch(`${BACKEND_URL}/moods`)
//   .then(response => response.json())
//   .then(parsedResponse => console.log(parsedResponse));