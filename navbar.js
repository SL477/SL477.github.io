'use strict';

var e = React.createElement;

function NavBar() {
    return React.createElement(
        "nav",
        { className: "navbar navbar-default navbar-static-top" },
        React.createElement(
            "div",
            { className: "navbar-header" },
            React.createElement(
                "a",
                { className: "navbar-brand", href: "index.html" },
                "Link477"
            )
        ),
        React.createElement(
            "ul",
            { className: "nav navbar-nav" },
            React.createElement(
                "li",
                null,
                React.createElement(
                    "a",
                    { href: "./ColorGridGame/Index.html" },
                    "Colour Grid Game"
                )
            ),
            React.createElement(
                "li",
                null,
                React.createElement(
                    "a",
                    { href: "modelrailway.html" },
                    "Model Railway"
                )
            ),
            React.createElement(
                "li",
                null,
                React.createElement(
                    "a",
                    { href: "./JSPianoKeyboard/index.html" },
                    "JavaScript Keyboard"
                )
            ),
            React.createElement(
                "li",
                null,
                React.createElement(
                    "a",
                    { href: "./PongGame/index.html" },
                    "Pong Game"
                )
            ),
            React.createElement(
                "li",
                null,
                React.createElement(
                    "a",
                    { href: "./weather/index.html" },
                    "Weather"
                )
            )
        )
    );
}

var domContainer = document.querySelector("#navbar");
ReactDOM.render(e(NavBar), domContainer);