const Gameboard = (() => {

    const Player = (name, sign, turn) => {
        return { name, sign, turn };
    };

    const playerX = Player('playerX', 'X', true);
    const playerO = Player('playerO', 'O', false);

    const winCombos = [
        [0, 1, 2],
        [0, 3, 6],
        [3, 4, 5],
        [6, 7, 8],
        [1, 4, 7],
        [2, 4, 6],
        [2, 5, 8],
        [0, 4, 8]
    ];

    let board = [];
    let winner = null;
    let turns = 0;


    function playTurn(e) {
        if (e.target.textContent == '' && playerX.turn && Gameboard.winner == null) {
            board[e.target.id] = playerX.sign;
            e.target.textContent = playerX.sign;
            playerX.turn = false;
            playerO.turn = true;
        }
        else if (e.target.textContent == '' && playerO.turn && Gameboard.winner == null) {
            board[e.target.id] = playerO.sign;
            e.target.textContent = playerO.sign;
            playerO.turn = false;
            playerX.turn = true;
        }
        checkWin();
    }

    function checkWin() {
        turns++;
        let xPlays = board.reduce((a, e, i) =>
            (e === playerX.sign) ? a.concat(i) : a, []);
        let oPlays = board.reduce((a, e, i) =>
            (e === playerO.sign) ? a.concat(i) : a, []);
        console.log(xPlays);
        console.log(oPlays);
        for (let [index, combo] of winCombos.entries()) {
            if (combo.every(elem => xPlays.indexOf(elem) > -1)) {
                Gameboard.winner = 'playerX';
            }
            else if (combo.every(elem => oPlays.indexOf(elem) > -1)) {
                Gameboard.winner = 'playerO';
            }
            else if (Gameboard.winner == null && turns == 9) {
                Gameboard.winner = 'tie';
            }
        }
        displayController.displayWin();
    }

    function resetGame(){
        turns=0;
        Gameboard.winner=null;
        board.splice(0, board.length);
        playerO.turn=false;
        playerX.turn=true;
        box.forEach(box => box.textContent='');
    }

    const box = Array.from(document.querySelectorAll('.square'));
    box.forEach(box => box.addEventListener('click', playTurn));

    return { winner, playTurn, board , resetGame};
})();



const displayController = (() => {
    function displayWin(){
        if(Gameboard.winner==='playerX'){
            alert('PlayerX wins');
            Gameboard.resetGame();
        }
        else if(Gameboard.winner==='playerO'){
            alert('PlayerO wins');
            Gameboard.resetGame();
        }
        else if(Gameboard.winner==='tie'){
            alert('Tie');
            Gameboard.resetGame();
        }
    }
    return{displayWin}
})();