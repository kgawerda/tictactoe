const Gameboard = (() => {

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





})();

const Player = (name, sign, turn) => {
    return { name, sign, turn };
};

const displayController = (() => {

})();