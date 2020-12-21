'use strict';
const e = React.createElement;

function NavBar() {
    return (
        <nav className="navbar navbar-inverse navbar-static-top">
            <div className="conotainer">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="pull-left" href="index.html"><img src="./images/link477.png" alt="Link477" style={{height: 50 + 'px', width: 50 + 'px', backgroundColor: 'white'}}/></a>
                </div>
                <div className="navbar-collapse collapse">
                    <ul className="nav navbar-nav">
                        <li><a href="./ColorGridGame/Index.html">Colour Grid Game</a></li>
                        <li><a href="modelrailway.html">Model Railway</a></li>
                        <li><a href="./JSPianoKeyboard/index.html">JavaScript Keyboard</a></li>
                        <li><a href="./PongGame/index.html">Pong Game</a></li>
                        <li><a href="./weather/index.html">Weather</a></li>
                        <li><a href="./TicTacToe/index.html">Tic Tac Toe</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

const domContainer = document.querySelector("#navbar");
ReactDOM.render(e(NavBar), domContainer);