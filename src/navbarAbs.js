'use strict';
const e = React.createElement;

function NavBar() {
    return (
        <nav className="navbar navbar-default navbar-static-top">
            <div className="navbar-header">
                <a className="navbar-brand" href="https://link477.com">Link477</a>
            </div>
            <ul className="nav navbar-nav">
                <li><a href="https://link477.com/ColorGridGame/Index.html">Colour Grid Game</a></li>
                <li><a href="https://link477.com/modelrailway.html">Model Railway</a></li>
                <li><a href="https://link477.com/JSPianoKeyboard/index.html">JavaScript Keyboard</a></li>
                <li><a href="https://link477.com/PongGame/index.html">Pong Game</a></li>
                <li><a href="https://link477.com/weather/index.html">Weather</a></li>
            </ul>
        </nav>
    );
}

const domContainer = document.querySelector("#navbar");
ReactDOM.render(e(NavBar), domContainer);