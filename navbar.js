'use strict';

var e = React.createElement;

function NavBar() {
    return React.createElement(
        "nav",
        { className: "navbar navbar-inverse navbar-static-top navbar-inverted", role: "navigation" },
        React.createElement(
            "div",
            { className: "container-fluid" },
            React.createElement(
                "div",
                { className: "navbar-header" },
                React.createElement(
                    "button",
                    { type: "button", className: "navbar-toggle", "data-toggle": "collapse", "data-target": ".navbar-collapse" },
                    React.createElement("span", { className: "icon-bar" }),
                    React.createElement("span", { className: "icon-bar" }),
                    React.createElement("span", { className: "icon-bar" })
                ),
                React.createElement(
                    "a",
                    { className: "pull-left", href: "index.html" },
                    React.createElement("img", { src: "./images/link477.png", alt: "Link477", style: { height: 50 + 'px', width: 50 + 'px', backgroundColor: 'white' } })
                )
            ),
            React.createElement(
                "div",
                { className: "collapse navbar-collapse" },
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
                    ),
                    React.createElement(
                        "li",
                        null,
                        React.createElement(
                            "a",
                            { href: "./TicTacToe/index.html" },
                            "Tic Tac Toe"
                        )
                    )
                )
            )
        )
    );
}

var domContainer = document.querySelector("#navbar");
ReactDOM.render(e(NavBar), domContainer);