// HTML Element store them in var & define 
const playerUpdate = document.querySelector(".playerTurn")
const resultUpdate = document.querySelector(".results")
const reset = document.querySelector(".reset").addEventListener('click', clearGame)

const cells = document.querySelectorAll(".box")

const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
 
let boardLayout = [
    '','','',
    '','','',
    '','',''
]

const players = { one: "X" , two: "O"};

let turns = true // taking turns (true means player 1 goes first)

let finished = false  // if finished = true, a win condition is met and players are not longer allowed to play X or O



// taking turns X/O
// return to exit the function if "X" and "O" is present
cells.forEach((cell) => {
    cell.addEventListener('click', () => {
        if (cell.innerText === "X" || cell.innerText === "O" || finished === true) {
            return   
        }
        if (turns === true)  {
            boardLayout[cell.id] = players.one
            turns = false
            cell.innerText = players.one
        } else {
            boardLayout[cell.id] = players.two
            turns = true
            cell.innerText = players.two
        } 
        winCondition()
    })
})

// Win Conditions
function winCondition () {
    for (let i = 0; i < winConditions.length; i++) {
        let winPattern = winConditions[i]
        let v1 = winPattern[0]
        let v2 = winPattern[1]
        let v3 = winPattern[2]
        // grabs each rows and check in the boardLayout[i] if those values are present, if they are present run the next if statement
        if (boardLayout[v1] != "" && boardLayout[v2] != "" && boardLayout[v3] != ""){
            if (boardLayout[v1] == boardLayout[v2] && boardLayout[v2] == boardLayout[v3] && boardLayout[v1] == boardLayout[v3]) {
                finished = true // finishes the game and prevents players from adding more O & X
                if (boardLayout[v1] == players.one) {
                    resultUpdate.innerText = "Player 1 has won!"
                } else {
                    resultUpdate.innerText = "Player 2 has won!"
                    }
                }
            }     
         } 
    }




// Reset Function
function clearGame () {
    for (let i = 0; i < cells.length; i++) {
        cells[i].innerText = ""
        resultUpdate.innerText = ""
        playerUpdate.innerText = "It is Player 1's turn"
        finished = false
        boardLayout = [
            '','','',
            '','','',
            '','',''
        ]
    }
}




// Conditions for win (Player 1)
// function checkCondition() {
//     if (cells[0] === "X" &&  cells[1] === "X" && cells[2] === "X"){
//         resultUpdate.innerText = "Player 1 has won!"
//     } else if (cells[3] === "X" && cells[4] === "X" && cells[5] === "X"){
//         resultUpdate.innerText = "Player 1 has won!"
//     } else if (cells[6] === "X" && cells[7] === "X" && cells[8] === "X"){
//         resultUpdate.innerText = "Player 1 has won!"
//     } else if (cells[0] === "X" && cells[3] === "X" && cells[6] === "X"){
//         resultUpdate.innerText = "Player 1 has won!"
//     } else if (cells[1] === "X" && cells[4] === "X" && cells[7] === "X"){
//         resultUpdate.innerText = "Player 1 has won!"
//     } else if (cells[2] === "X" && cells[5] === "X" && cells[8] === "X"){
//         resultUpdate.innerText = "Player 1 has won!"
//     } else if (cells[0] === "X" && cells[4] === "X" && cells[8] === "X"){
//         resultUpdate.innerText = "Player 1 has won!"
//     } else if (cells[0] === "O" && cells[1] === "O" && cells[2] === "O"){
//         resultUpdate.innerText = "Player 2 has won!"
//     } else if (cells[3] === "O" && cells[4] === "O" && cells[5] === "O"){
//         resultUpdate.innerText = "Player 2 has won!"
//     } else if (cells[6] === "O" && cells[7] === "O" && cells[8] === "O"){
//         resultUpdate.innerText = "Player 2 has won!"
//     } else if (cells[0] === "O" && cells[3] === "O" && cells[6] === "O"){
//         resultUpdate.innerText = "Player 2 has won!"
//     } else if (cells[1] === "O" && cells[4] === "O" && cells[7] === "O"){
//         resultUpdate.innerText = "Player 2 has won!"
//     } else if (cells[2] === "O" && cells[5] === "O" && cells[8] === "O"){
//         resultUpdate.innerText = "Player 2 has won!"
//     } else if (cells[0] === "O" && cells[4] === "O" && cells[8] === "O"){
//         resultUpdate.innerText = "Player 2 has won!"
//     } else {
//         resultUpdate.innerText = "It is a tie!"
//     }





// // Track any clicks that happen on the cell & check if a valid move has been made (nothing happens if cell has been played already)