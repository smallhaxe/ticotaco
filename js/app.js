$(function() {
    // check to see that the page has loaded, and jQuery is working
    alert('Let\'s get ready Tico Tacooooo!');
    
    // define a player
    function Player(name, team) {
        this.name = name;
        this.team = team;
    }
    
    // define a game
    function Game(player1, player2) {
        this.p1 = player1;
        this.p2 = player2;
        this.log();
    }
    
    Game.prototype.log = function() {
        for (var i = 1; i <= 9; i++) {
            var this.turn = 't' + i;
            console.log(this.turn);
            Game.prototype.log[this.turn] = {
                    this.player: 'blank',
                    this.cell: 'blank',
                    this.endgame: false;
            };
        }
    }
    
});
// ready(playGame);
// when the page is ready, play the game


// function ready(playGame){
// determine when the page is ready 
//    if (document.readyState != 'loading'){
//        playGame();
//    } else {
//        document.addEventListener('DOMContentLoaded', playGame);
    
//}


// function playGame() {
// build + play the game 
    
    // var board = document.querySelector('.board');
    //var $board = $('.board');
    // var cells = document.querySelectorAll('.cells');
    //var $cells = $('.cells');
    // var cell = document.createElement('li');
    //var $cell = '<li></li>';
    
//    for (var i = 1; i <= 9; i++) {
//        $cells.append($cell).setAttribute('id', ('c'+i));
//    }
//    var c1 = document.querySelector('#c1');
//    var c2 = document.querySelector('#c2');
//    var c3 = document.querySelector('#c3');
//    var c4 = document.querySelector('#c4');
//    var c5 = document.querySelector('#c5');
//    var c6 = document.querySelector('#c6');
//    var c7 = document.querySelector('#c7');
//    var c8 = document.querySelector('#c8');
//    var c9 = document.querySelector('#c9');

//    board.style.border = "1px solid red";
//    board.style.padding = "30px";
//    board.style.margin = "50px";
//    board.style.width = "400px";
//    for (var i = 0; i < cells.length; i++) {
//        cells[i].innerHTML = "cell " + (i + 1);
//        cells[i].style.border = "1px solid blue";
//        cells[i].style.height = "60px";
//        cells[i].style.width = "60px";
//        cells[i].style.display = "inline-block";
//        cells[i].style.margin = "2px";
//        cells[i].style.padding = "30px 20px";
//        cells[i].setAttribute('class', 'blank');
//    }
    
//    var ul = document.querySelector('ul');
//    var playCount = 0;
//   ul.addEventListener('click', function play(ev) {
//        ev.target.style.fontWeight = 'bold';
//        playCount += 1;
//        console.log(playCount);
//        if (playCount % 2 === 0) {
//            ev.target.setAttribute('class', 'tico');
//            ev.target.innerText = 'TICO';
//        } else if (playCount % 2 === 1) {
//            ev.target.setAttribute('class', 'taco');
//            ev.target.innerText = 'TACO';
//        }
//        getAttrs();
//    });
    
//    var reset = document.querySelector('#reset');
//    reset.addEventListener('click', function() {
//        for (var i = 0; i < cells.length; i++) {
//            cells[i].style.fontWeight = '';
//            cells[i].innerText = 'Tico\/Taco';
//            cells[i].setAttribute('class', 'blank');
//            playCount = 0;
//            attrs = [];
//            console.log('New game!\nPlay count:\n0');
//        };
//    });
    
//    var attrs = [];
//    function getAttrs() {
//        for (var i = 0; i < cells.length; i++) {
//            attrs.push(cells[i].getAttribute('class'));
//        } 
//        console.log(attrs);
//        winnerIs();
//    }
    
//    function winnerIs() {
//        var row = ((attrs[1] === attrs[2] && attrs[2] === attrs[3]) ||
//        (attrs[4] === attrs[5] && attrs[5] === attrs[6]) || (attrs[7] ===
//        attrs[8] && attrs[8] === attrs[9]));

//        var column = ((attrs[1] === attrs[4] && attrs[4] === attrs[7]) ||
//        (attrs[2] === attrs[5] && attrs[5] === attrs[8]) || (attrs[3] ===
//        attrs[6] && attrs[6] === attrs[9]));
     
//        var diagonal = ((attrs[1] === attrs[5] && attrs[5] === attrs[9])
//        || (attrs[3] === attrs[5] && attrs[5] === attrs[7]));
        
//        if (row || column || diagonal) {
//            console.log('Game is very win!');
//        }
//    }
//}                            
