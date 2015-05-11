module.exports = Game(player1, player2);

function Game(player1, player2) {
    return {
        vs : {
            p1 : player1,
            p2 : player2,
        },
        
        playlist : {},
    }
}

function gameBuilder() {
    for (var i = 1; i <= 9; i++) {
        if (i % 2 === 1) {
            Game[playlist]['t' + i] = {
                player: player1,
                cell: 'blank',
                endgame: false,
            }
        } else {
            Game[playlist]['t' + i] = {
                player: player2,
                cell: 'blank',
                endgame: false
            }
        };
    };
    return Game[playlist];
}
gameBuilder();
