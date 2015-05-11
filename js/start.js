var Player = require('./player.js');
var Game = require('./game.js');

module.exports = function() {
    console.log('Let\'s get ready Tico Tacoooooo!');
    var name1 = prompt('Enter first player\'s name.');
    var team1 = prompt('Choose team ("x" or "o").');
    var name2 = prompt('Enter second player\'s name.');
    var team2 = (p1.team === 'x') ? 'y' : 'x';
    var p1 = new Player(name1, team1);
    var p2 = new Player(name2, team2);
    var g1 = new Game(p1, p2);
}
