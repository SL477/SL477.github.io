//From https://www.freecodecamp.org/news/simple-chess-ai-step-by-step-1d55a9266977/
let mb = document.getElementById('myBoard');

let game = new Chess();

let $status = $('#status');
let $fen = $('#fen');
let $pgn = $('#pgn');

/*let config = {
    draggable: true,
    dropOffBoard: 'snapback',//default
    position: 'start',
    moveSpeed: 'slow',
    snapbackSpeed: 500,
    snapSpeed: 100
};

let board = Chessboard(mb, config);*/

let board = null;

const WHITESQUAREGREY = '#a9a9a9';
const BLACKSQUAREGREY = '#696969';

const AI = 'AI';
const HUMAN = 'HUMAN';

const restart = () => {
    board.start();
};

const removeGreySquares = () => {
    $('#myBoard .square-55d63').css('background', '');
};

const greySquare = (square) => {
    let $square = $('#myBoard .square-' + square);

    let background = WHITESQUAREGREY;
    if ($square.hasClass('black-3c85d')) {
        background = BLACKSQUAREGREY;
    }

    $square.css('background', background);
};

const onDragStart = (source, piece, position, orientation) => {
    if (game.game_over()) {
        return false;
    }

    //Only pick up pieces for the side to move
    /*if ((game.turn() === 'w' && piece.search(/^b/) !== -1) ||
        (game.turn() === 'b' && piece.search(/^w/) !== -1)) {
        return false;
    }*/
    if (piece.search(/^b/) !== -1) {
        return false;
    }
};

const pieceValues = {
    bp: -10,//black pawn
    bn: -30,//black knight
    bb: -30,//black bishop
    br: -50,//black rook
    bq: -90,//black queen
    bk: -900,//black king
    wp: 10,//white pawn
    wn: 30,//white knight
    wb: 30,//white bishop
    wr: 50,//white rook
    wq: 90,//white queen
    wk: 900,//white king
};

const makeRandomMove = () => {
    let possibleMoves = game.moves({verbose: true});

    //Game over
    if (possibleMoves.length === 0) {
        return;
    }

    console.log('possible moves', possibleMoves);

    let currentFen = game.fen();
    let currentPgn = game.pgn();

    let bestMove = minimax(currentFen, AI, 2, possibleMoves);
    console.log('bestMove', bestMove);
    //reset game
    loadpgn(currentPgn, currentFen);

    //make the move
    if (bestMove >= 0) {
        game.move(possibleMoves[bestMove]);
    }
    else {
        //use the old logic
        //look for captures
        let captureMoves = possibleMoves.filter(m => {
            return m.flags.includes('c');
        });

        
        if (captureMoves.length > 0) {
            let bestMove = 0;
            let bestScore = 0;
            captureMoves.forEach((m,i) => {
                let score = pieceValues['w' + m.captured];
                //console.log('capure score',score, 'w' + m.captured);
                if (score > bestScore) {
                    bestMove = i;
                    bestScore = score;
                }
            });
            //console.log('best score', bestScore);
            game.move(captureMoves[bestMove]);
        }
        else {
            let randomIdx = Math.floor(Math.random() * possibleMoves.length);
            game.move(possibleMoves[randomIdx]);
        }
    }

    board.position(game.fen());
    updateStatus();
};

const minimax = (currentFen, player, depth, possibleMoves) => {
    //Get the best move index
    let ret = -1;
    let bestScore = 0;
    for (let i = 0; i < possibleMoves.length; i++) {
        //look at all of the moves, get their score then take away the player one
        game.load(currentFen);//reset back to how the board was
        let move = possibleMoves[i];
        let score = 0;
        if (move.flags.includes('c')) {
            //capturing something
            score = score + pieceValues['w' + move.captured];
            console.log('ai capture score', score);
        }
        if (score == 900) {
            //If AI wins immediately break and stop there
            ret = i;
            break;
        }
        //If AI doesn't win find the worst move that the human could make
        game.move(possibleMoves[i]);
        let humanMove = minScoreOfboardPlayer(game.fen());
        score = score + humanMove.score;
        console.log('human capture score', score, humanMove.score);

        if (score > bestScore) {
            bestScore = score;
            ret = i;
            //alert(i);
        }
        console.log('ret', ret);
    }

    return ret;
};

const minScoreOfboardPlayer = (currentFen) => {
    //look for the worst outcome
    let ret = {score: 0, index: -1};
    game.load(currentFen);
    let possibleMoves = game.moves({verbose: true});
    let captureMoves = possibleMoves.filter(m => {
        return m.flags.includes('c');
    });
    if (captureMoves.length > 0) {
        let bestMove = 0;
        let bestScore = 0;
        captureMoves.forEach((m,i) => {
            let score = pieceValues['b' + m.captured];
            //console.log('capure score',score, 'b' + m.captured);
            if (score < bestScore) {
                bestMove = i;
                bestScore = score;
            }
        });
        ret.index = bestMove;
        ret.score = bestScore;
    }

    return ret;
};

const onDrop = (source, target) => {
    removeGreySquares();
    //See if the move is legal
    let move = game.move({
        from: source,
        to: target,
        promotion: 'q'//TODO: get a way to choose between different promotions
    });

    //Illegal move
    if (move === null) {
        return 'snapback';
    }

    updateStatus();

    //Make random legal move for black
    window.setTimeout(makeRandomMove,250);
};

const onMouseoverSquare = (square, piece) => {
    //Get list of possible moves for this square
    let moves = game.moves({
        square: square,
        verbose: true
    });

    //exit if there are no moves available for this square
    if (moves.length === 0) {
        return;
    }

    //Highlight the square they moused over
    greySquare(square);

    //Highlight the possible squares for this piece
    for (let i = 0; i < moves.length; i++) {
        greySquare(moves[i].to);
    }
};

const onMouseoutSquare = (square, piece) => {
    removeGreySquares();
};

//Update the board position after the piece snap
//for castling, en passant, pawn promotion
const onSnapEnd = () => {
    board.position(game.fen());
};

const updateStatus = () => {
    let status = '';

    let moveColor = 'White';
    if (game.turn() === 'b') {
        moveColor = 'Black';
    }

    //Checkmate?
    if (game.in_checkmate()) {
        status = 'Game over, ' + moveColor + ' is in checkmate.';
    }
    else if (game.in_draw()) {
        //draw?
        status = 'Game over, drawn position';
    }
    else {
        //Game still on
        status = moveColor + ' to move';

        //Check?
        if (game.in_check()) {
            status += ', ' + moveColor + ' is in check';
        }
    }

    $status.html(status);
    $fen.html(game.fen());
    $pgn.html(game.pgn());
};

let config = {
    draggable: true,
    dropOffBoard: 'snapback',//default
    position: 'start',
    moveSpeed: 'slow',
    snapbackSpeed: 500,
    snapSpeed: 100,
    onDragStart: onDragStart,
    onDrop: onDrop,
    onSnapEnd: onSnapEnd,
    onMouseoutSquare: onMouseoutSquare,
    onMouseoverSquare: onMouseoverSquare
};

board = Chessboard(mb, config);

updateStatus();

//Load game
const loadpgncheck = () => {
    loadpgn($('#loadpgn').val(), $('#loadfen').val());
};

const loadpgn = (pgn, fen) => {
    game.load(fen);
    game.load_pgn(pgn);
    board.position(fen);
};