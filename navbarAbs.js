'use strict';

var e = React.createElement;

function NavBar() {
    return React.createElement(
        "div",
        { className: "container" },
        React.createElement(
            "nav",
            { className: "navbar navbar-inverse navbar-fixed-top", role: "navigation" },
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
                        { className: "pull-left", href: "https://link477.com" },
                        React.createElement("img", { src: "https://link477.com/images/link477.png", alt: "Link477", style: { height: 50 + 'px', width: 50 + 'px', backgroundColor: 'white' } })
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
                                { href: "https://link477.com/dataScience/index.html" },
                                "Data Science"
                            )
                        ),
                        React.createElement(
                            "li",
                            { className: "dropdown" },
                            React.createElement(
                                "a",
                                { className: "dropdown-toggle", "data-toggle": "dropdown", href: "#" },
                                "FreeCodeCamp",
                                React.createElement("span", { className: "caret" })
                            ),
                            React.createElement(
                                "ul",
                                { className: "dropdown-menu" },
                                React.createElement(
                                    "li",
                                    { className: "dropdown-header" },
                                    "Responsive Web Design"
                                ),
                                React.createElement(
                                    "li",
                                    null,
                                    React.createElement(
                                        "a",
                                        { href: "https://link477.com/fccResponsiveWebDesign/tributePage.html" },
                                        "Tribute Page"
                                    )
                                ),
                                React.createElement(
                                    "li",
                                    null,
                                    React.createElement(
                                        "a",
                                        { href: "https://link477.com/fccResponsiveWebDesign/surveyForm.html" },
                                        "Survey Form"
                                    )
                                ),
                                React.createElement(
                                    "li",
                                    null,
                                    React.createElement(
                                        "a",
                                        { href: "https://link477.com/fccResponsiveWebDesign/productLandingPage.html" },
                                        "Product Landing Page"
                                    )
                                ),
                                React.createElement(
                                    "li",
                                    null,
                                    React.createElement(
                                        "a",
                                        { href: "https://link477.com/fccResponsiveWebDesign/technicalDocPage.html" },
                                        "Technical Documentation Page"
                                    )
                                ),
                                React.createElement(
                                    "li",
                                    { className: "dropdown-header" },
                                    "JavaScript Algorithms and Data Structures"
                                ),
                                React.createElement(
                                    "li",
                                    null,
                                    React.createElement(
                                        "a",
                                        { href: "https://link477.com/fccResponsiveWebDesign/fccJs.html" },
                                        "All five projects on this page"
                                    )
                                ),
                                React.createElement(
                                    "li",
                                    { className: "dropdown-header" },
                                    "Front End Libraries Projects"
                                ),
                                React.createElement(
                                    "li",
                                    null,
                                    React.createElement(
                                        "a",
                                        { href: "https://link477.com/fccResponsiveWebDesign/randomQuoteMachine.html" },
                                        "Random Quote Machine"
                                    )
                                ),
                                React.createElement(
                                    "li",
                                    null,
                                    React.createElement(
                                        "a",
                                        { href: "https://link477.com/fccResponsiveWebDesign/markdownPreviewer.html" },
                                        "Markdown Previewer"
                                    )
                                ),
                                React.createElement(
                                    "li",
                                    null,
                                    React.createElement(
                                        "a",
                                        { href: "https://link477.com/fccResponsiveWebDesign/drumMachine.html" },
                                        "Drum Machine"
                                    )
                                ),
                                React.createElement(
                                    "li",
                                    null,
                                    React.createElement(
                                        "a",
                                        { href: "https://link477.com/fccResponsiveWebDesign/calculator.html" },
                                        "Javascript Calculator"
                                    )
                                ),
                                React.createElement(
                                    "li",
                                    null,
                                    React.createElement(
                                        "a",
                                        { href: "https://link477.com/fccResponsiveWebDesign/pomodoroClock.html" },
                                        "25 + 5 Clock"
                                    )
                                ),
                                React.createElement(
                                    "li",
                                    { className: "dropdown-header" },
                                    "Data Visualisation Projects"
                                ),
                                React.createElement(
                                    "li",
                                    null,
                                    React.createElement(
                                        "a",
                                        { href: "https://link477.com/fccResponsiveWebDesign/barChart.html" },
                                        "Bar Chart"
                                    )
                                ),
                                React.createElement(
                                    "li",
                                    null,
                                    React.createElement(
                                        "a",
                                        { href: "https://link477.com/fccResponsiveWebDesign/scatterplot.html" },
                                        "Scatterplot Graph"
                                    )
                                ),
                                React.createElement(
                                    "li",
                                    null,
                                    React.createElement(
                                        "a",
                                        { href: "https://link477.com/fccResponsiveWebDesign/heatmap.html" },
                                        "Heat Map"
                                    )
                                ),
                                React.createElement(
                                    "li",
                                    null,
                                    React.createElement(
                                        "a",
                                        { href: "https://link477.com/fccResponsiveWebDesign/choropleth.html" },
                                        "Choropleth Map"
                                    )
                                ),
                                React.createElement(
                                    "li",
                                    null,
                                    React.createElement(
                                        "a",
                                        { href: "https://link477.com/fccResponsiveWebDesign/treemap.html" },
                                        "Treemap Diagram"
                                    )
                                ),
                                React.createElement(
                                    "li",
                                    { className: "dropdown-header" },
                                    "Take Home Projects"
                                ),
                                React.createElement(
                                    "li",
                                    null,
                                    React.createElement(
                                        "a",
                                        { href: "https://link477.com/weather/index.html" },
                                        "Weather"
                                    )
                                ),
                                React.createElement(
                                    "li",
                                    null,
                                    React.createElement(
                                        "a",
                                        { href: "https://link477.com/TicTacToe/index.html" },
                                        "Tic Tac Toe"
                                    )
                                ),
                                React.createElement(
                                    "li",
                                    null,
                                    React.createElement(
                                        "a",
                                        { href: "https://link477.com/recipeBox/index.html" },
                                        "Recipe Box"
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
                        ),
                        React.createElement(
                            "li",
                            { className: "dropdown" },
                            React.createElement(
                                "a",
                                { className: "dropdown-toggle", "data-toggle": "dropdown", href: "#" },
                                "Project Odin",
                                React.createElement("span", { className: "caret" })
                            ),
                            React.createElement(
                                "ul",
                                { className: "dropdown-menu" },
                                React.createElement(
                                    "li",
                                    { className: "dropdown-header" },
                                    "Project Odin"
                                ),
                                React.createElement(
                                    "li",
                                    null,
                                    React.createElement(
                                        "a",
                                        { href: "https://link477.com/etchASketch/index.html" },
                                        "Etch A Sketch"
                                    )
                                ),
                                React.createElement(
                                    "li",
                                    null,
                                    React.createElement(
                                        "a",
                                        { href: "https://link477.com/rockPaperScissors.html" },
                                        "Rock, Paper, Scissors"
                                    )
                                )
                            )
                        ),
                        React.createElement(
                            "li",
                            { className: "dropdown" },
                            React.createElement(
                                "a",
                                { className: "dropdown-toggle", "data-toggle": "dropdown", href: "#" },
                                "Games",
                                React.createElement("span", { className: "caret" })
                            ),
                            React.createElement(
                                "ul",
                                { className: "dropdown-menu" },
                                React.createElement(
                                    "li",
                                    { className: "dropdown-header" },
                                    "Games"
                                ),
                                React.createElement(
                                    "li",
                                    null,
                                    React.createElement(
                                        "a",
                                        { href: "https://link477.com/ColorGridGame/Index.html" },
                                        "Colour Grid"
                                    )
                                ),
                                React.createElement(
                                    "li",
                                    null,
                                    React.createElement(
                                        "a",
                                        { href: "https://link477.com/Snake/index.html" },
                                        "Snake"
                                    )
                                )
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
                                { href: "https://link477.com/JSPianoKeyboard/index.html" },
                                "JavaScript Keyboard"
                            )
                        )
                    )
                )
            )
        ),
        React.createElement("br", null),
        React.createElement("br", null),
        React.createElement("br", null)
    );
}

var domContainer = document.querySelector("#navbar");
ReactDOM.render(e(NavBar), domContainer);