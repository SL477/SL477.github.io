'use strict';
const e = React.createElement;

function NavBar() {
    return (
        <nav className="navbar navbar-inverse navbar-static-top" role="navigation">
            <div className="container-fluid">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    {/*<a className="navbar-brand" href="https://link477.com">Link477</a>*/}
                    <a className="pull-left" href="https://link477.com"><img src="https://link477.com/images/link477.png" alt="Link477" style={{height: 50 + 'px', width: 50 + 'px', backgroundColor: 'white'}}/></a>
                </div>
                <div className="collapse navbar-collapse">
                    <ul className="nav navbar-nav">
                        <li><a href="https://link477.com/ColorGridGame/Index.html">Colour Grid Game</a></li>
                        <li><a href="https://link477.com/modelrailway.html">Model Railway</a></li>
                        <li><a href="https://link477.com/JSPianoKeyboard/index.html">JavaScript Keyboard</a></li>
                        <li><a href="https://link477.com/PongGame/index.html">Pong Game</a></li>
                        <li><a href="https://link477.com/weather/index.html">Weather</a></li>
                        <li><a href="https://link477.com/TicTacToe/index.html">Tic Tac Toe</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

const domContainer = document.querySelector("#navbar");
ReactDOM.render(e(NavBar), domContainer);