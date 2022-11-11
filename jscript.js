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

    let board=[];
    let winner=null;
    let turn=1; //0-O 1-X

    function playTurn(e){
        if(e.target.textContent=='' && playerX.turn && Gameboard.winner==null){
            console.log('x');
            board[e.target.id]=playerX.sign;
            e.target.textContent=playerX.sign;
            playerX.turn=false;
            playerO.turn=true;
        }
        else if(e.target.textContent=='' && playerO.turn && Gameboard.winner==null){
            console.log('o');
            board[e.target.id]=playerO.sign;
            e.target.textContent=playerO.sign;
            playerO.turn=false;
            playerX.turn=true;
        }
    }


    const box=Array.from(document.querySelectorAll('.square'));
    box.forEach(box => box.addEventListener('click', playTurn));

    return{winner, playTurn};
})();



const displayController = (() => {

})();