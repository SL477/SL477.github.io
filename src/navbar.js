'use strict';
const e = React.createElement;

function NavBar() {
    return (
        <nav className="navbar navbar-default navbar-static-top">
            <div className="navbar-header">
                <a className="navbar-brand" href="index.html">Link477</a>
            </div>
            <ul className="nav navbar-nav">
                <li><a href="./ColorGridGame/Index.html">Colour Grid Game</a></li>
                <li><a href="modelrailway.html">Model Railway</a></li>
                <li><a href="./JSPianoKeyboard/index.html">JavaScript Keyboard</a></li>
                <li><a href="./PongGame/index.html">Pong Game</a></li>
                <li><a href="*/weather/index.html">Weather</a></li>
            </ul>
        </nav>
    );
}

const domContainer = document.querySelector("#navbar");
ReactDOM.render(e(NavBar), domContainer);