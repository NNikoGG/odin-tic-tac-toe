const Gameboard = (() => {
    let gameboard = ["", "", "", "", "", "", "", "", ""];
    const display = () => {
        let boardHTML = "";
        gameboard.forEach((square, index) => {
            boardHTML += `<div class="square" id=square-${index}>${square}</div>`
        })
        document.querySelector(".game-area").innerHTML = boardHTML;
        const squares = document.querySelectorAll(".square")
        squares.forEach((square) => {
            square.addEventListener('click', Game.handleClick);
        })
    }
    return{
        display,
    }
})();

const createPlayer = (name, mark) => {
    return {
        name,
        mark
    }
}

const Game = (() => {
        let players = [];
        let currentPlayerIndex = 0;
        let gameOver;

        const start = () => {
            players = [
                createPlayer(document.querySelector('#player1-name').value, "X"),
                createPlayer(document.querySelector('#player2-name').value, "O")
            ]
            currentPlayerIndex = 0;
            gameOver = false;
            Gameboard.display();
        }

        const handleClick = (event) => {
            alert("Hello World");
        }
        return{
            start,
            handleClick
        }
})();

const startButton = document.querySelector('#start-button');
startButton.addEventListener('click', () => {
    Game.start();
})