'use strict';
const e = React.createElement;

function NavBar() {
    return (
        <nav className="navbar navbar-inverse navbar-static-top navbar-inverted">
            <div className="navbar-header">
                <a className="pull-left" href="index.html"><img src="./images/link477.png" alt="Link477" style={{height: 50 + 'px', width: 50 + 'px', backgroundColor: 'white'}}/></a>
            </div>
            <ul className="nav navbar-nav">
                <li><a href="./ColorGridGame/Index.html">Colour Grid Game</a></li>
                <li><a href="modelrailway.html">Model Railway</a></li>
                <li><a href="./JSPianoKeyboard/index.html">JavaScript Keyboard</a></li>
                <li><a href="./PongGame/index.html">Pong Game</a></li>
                <li><a href="./weather/index.html">Weather</a></li>
                <li><a href="./TicTacToe/index.html">Tic Tac Toe</a></li>
            </ul>
        </nav>
    );
}

const domContainer = document.querySelector("#navbar");
ReactDOM.render(e(NavBar), domContainer);