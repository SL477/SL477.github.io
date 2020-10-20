'use strict';

var e = React.createElement;

function NavBar() {
    return React.createElement(
        "nav",
        { className: "navbar navbar-inverse navbar-static-top" },
        React.createElement(
            "div",
            { className: "navbar-header" },
            React.createElement(
                "a",
                { className: "pull-left", href: "https://link477.com" },
                React.createElement("img", { src: "https://link477.com/images/link477.png", alt: "Link477", style: { height: 50 + 'px', width: 50 + 'px', backgroundColor: 'white' } })
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
            ),
            React.createElement(
                "li",
                null,
                React.createElement(
                    "a",
                    { href: "https://link477.com/weather/index.html" },
                    "Weather"
                )
            )
        )
    );
}

var domContainer = document.querySelector("#navbar");
ReactDOM.render(e(NavBar), domContainer);