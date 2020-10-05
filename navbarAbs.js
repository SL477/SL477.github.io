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
                { className: "navbar-brand", href: "https://link477.com" },
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
                    { href: "https://link477.com/ColorGridGame/Index.html" },
                    "Colour Grid Game"
                )
            ),
            React.createElement(
                "li",
                null,
                React.createElement(
                    "a",
                    { href: "https://link477.com/modelrailway.html" },
                    "Model Railway"
                )
            ),
            React.createElement(
                "li",
                null,
                React.createElement(
                    "a",
                    { href: "https://link477.com/JSPianoKeyboard/index.html" },
                    "JavaScript Keyboard"
                )
            ),
            React.createElement(
                "li",
                null,
                React.createElement(
                    "a",
                    { href: "https://link477.com/PongGame/index.html" },
                    "Pong Game"
                )
            )
        )
    );
}

var domContainer = document.querySelector("#navbar");
ReactDOM.render(e(NavBar), domContainer);