'use strict';

var e = React.createElement;

function NavBar() {
    return React.createElement(
        "div",
        { className: "container" },
        React.createElement(
            "nav",
            { className: "navbar navbar-inverse navbar-fixed-top navbar-inverted", role: "navigation" },
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
                                        { href: "./fccResponsiveWebDesign/tributePage.html" },
                                        "Tribute Page"
                                    )
                                ),
                                React.createElement(
                                    "li",
                                    null,
                                    React.createElement(
                                        "a",
                                        { href: "./fccResponsiveWebDesign/surveyForm.html" },
                                        "Survey Form"
                                    )
                                ),
                                React.createElement(
                                    "li",
                                    null,
                                    React.createElement(
                                        "a",
                                        { href: "./fccResponsiveWebDesign/productLandingPage.html" },
                                        "Product Landing Page"
                                    )
                                ),
                                React.createElement(
                                    "li",
                                    null,
                                    React.createElement(
                                        "a",
                                        { href: "./fccResponsiveWebDesign/technicalDocPage.html" },
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
                                        { href: "./fccResponsiveWebDesign/fccJs.html" },
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
                                        { href: "./fccResponsiveWebDesign/randomQuoteMachine.html" },
                                        "Random Quote Machine"
                                    )
                                ),
                                React.createElement(
                                    "li",
                                    null,
                                    React.createElement(
                                        "a",
                                        { href: "./fccResponsiveWebDesign/markdownPreviewer.html" },
                                        "Markdown Previewer"
                                    )
                                ),
                                React.createElement(
                                    "li",
                                    null,
                                    React.createElement(
                                        "a",
                                        { href: "./fccResponsiveWebDesign/drumMachine.html" },
                                        "Drum Machine"
                                    )
                                ),
                                React.createElement(
                                    "li",
                                    null,
                                    React.createElement(
                                        "a",
                                        { href: "./fccResponsiveWebDesign/calculator.html" },
                                        "Javascript Calculator"
                                    )
                                ),
                                React.createElement(
                                    "li",
                                    null,
                                    React.createElement(
                                        "a",
                                        { href: "./fccResponsiveWebDesign/pomodoroClock.html" },
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
                                        { href: "./fccResponsiveWebDesign/barChart.html" },
                                        "Bar Chart"
                                    )
                                ),
                                React.createElement(
                                    "li",
                                    null,
                                    React.createElement(
                                        "a",
                                        { href: "./fccResponsiveWebDesign/scatterplot.html" },
                                        "Scatterplot Graph"
                                    )
                                ),
                                React.createElement(
                                    "li",
                                    null,
                                    React.createElement(
                                        "a",
                                        { href: "./fccResponsiveWebDesign/heatmap.html" },
                                        "Heat Map"
                                    )
                                ),
                                React.createElement(
                                    "li",
                                    null,
                                    React.createElement(
                                        "a",
                                        { href: "./fccResponsiveWebDesign/choropleth.html" },
                                        "Choropleth Map"
                                    )
                                ),
                                React.createElement(
                                    "li",
                                    null,
                                    React.createElement(
                                        "a",
                                        { href: "./fccResponsiveWebDesign/treemap.html" },
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
                                ),
                                React.createElement(
                                    "li",
                                    null,
                                    React.createElement(
                                        "a",
                                        { href: "./recipeBox/index.html" },
                                        "Recipe Box"
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
                                        { href: "./simonGame/index.html" },
                                        "Simon Game"
                                    )
                                ),
                                React.createElement(
                                    "li",
                                    null,
                                    React.createElement(
                                        "a",
                                        { href: "./fccResponsiveWebDesign/fccForum.html" },
                                        "Free Code Camp Forum Homepage"
                                    )
                                ),
                                React.createElement(
                                    "li",
                                    null,
                                    React.createElement(
                                        "a",
                                        { href: "./gameOfLife/index.html" },
                                        "Game of Life"
                                    )
                                ),
                                React.createElement(
                                    "li",
                                    { className: "dropdown-header" },
                                    "Other Projects"
                                ),
                                React.createElement(
                                    "li",
                                    null,
                                    React.createElement(
                                        "a",
                                        { href: "./JSPianoKeyboard/index.html" },
                                        "JavaScript Keyboard"
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
                                        { href: "./etchASketch/index.html" },
                                        "Etch A Sketch"
                                    )
                                ),
                                React.createElement(
                                    "li",
                                    null,
                                    React.createElement(
                                        "a",
                                        { href: "./rockPaperScissors.html" },
                                        "Rock, Paper, Scissors"
                                    )
                                ),
                                React.createElement(
                                    "li",
                                    null,
                                    React.createElement(
                                        "a",
                                        { href: "./battleship/index.html" },
                                        "Battleship"
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
                                        { href: "./ColorGridGame/Index.html" },
                                        "Colour Grid"
                                    )
                                ),
                                React.createElement(
                                    "li",
                                    null,
                                    React.createElement(
                                        "a",
                                        { href: "./Snake/index.html" },
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
                            { className: "dropdown" },
                            React.createElement(
                                "a",
                                { className: "dropdown-toggle", "data-toggle": "dropdown", href: "#" },
                                "Data Structures",
                                React.createElement("span", { className: "caret" })
                            ),
                            React.createElement(
                                "ul",
                                { className: "dropdown-menu" },
                                React.createElement(
                                    "li",
                                    { className: "dropdown-header" },
                                    "Data Structures and Algorithms Answers"
                                ),
                                React.createElement(
                                    "li",
                                    null,
                                    React.createElement(
                                        "a",
                                        { href: "https://link477.com/dataStructuresAlgorithms/arrays" },
                                        "Arrays"
                                    )
                                ),
                                React.createElement(
                                    "li",
                                    null,
                                    React.createElement(
                                        "a",
                                        { href: "https://link477.com/dataStructuresAlgorithms/lists" },
                                        "Lists"
                                    )
                                ),
                                React.createElement(
                                    "li",
                                    null,
                                    React.createElement(
                                        "a",
                                        { href: "https://link477.com/dataStructuresAlgorithms/queues" },
                                        "Queues"
                                    )
                                ),
                                React.createElement(
                                    "li",
                                    null,
                                    React.createElement(
                                        "a",
                                        { href: "https://link477.com/dataStructuresAlgorithms/linkedLists" },
                                        "Linked Lists"
                                    )
                                ),
                                React.createElement(
                                    "li",
                                    null,
                                    React.createElement(
                                        "a",
                                        { href: "https://link477.com/dataStructuresAlgorithms/dictionaries" },
                                        "Dictionaries"
                                    )
                                ),
                                React.createElement(
                                    "li",
                                    null,
                                    React.createElement(
                                        "a",
                                        { href: "https://link477.com/dataStructuresAlgorithms/hashing" },
                                        "Hashing"
                                    )
                                ),
                                React.createElement(
                                    "li",
                                    null,
                                    React.createElement(
                                        "a",
                                        { href: "https://link477.com/dataStructuresAlgorithms/sets" },
                                        "Sets"
                                    )
                                ),
                                React.createElement(
                                    "li",
                                    null,
                                    React.createElement(
                                        "a",
                                        { href: "https://link477.com/dataStructuresAlgorithms/binaryTrees" },
                                        "Binary Trees"
                                    )
                                ),
                                React.createElement(
                                    "li",
                                    null,
                                    React.createElement(
                                        "a",
                                        { href: "https://link477.com/dataStructuresAlgorithms/graphs" },
                                        "Graphs"
                                    )
                                ),
                                React.createElement(
                                    "li",
                                    null,
                                    React.createElement(
                                        "a",
                                        { href: "https://link477.com/dataStructuresAlgorithms/sortingAlgorithms" },
                                        "Sorting Algorithms"
                                    )
                                ),
                                React.createElement(
                                    "li",
                                    null,
                                    React.createElement(
                                        "a",
                                        { href: "https://link477.com/dataStructuresAlgorithms/searchingAlgorithms" },
                                        "Searching Algorithms"
                                    )
                                ),
                                React.createElement(
                                    "li",
                                    null,
                                    React.createElement(
                                        "a",
                                        { href: "https://link477.com/dataStructuresAlgorithms/advancedAlgorithms" },
                                        "Advanced Algorithms"
                                    )
                                )
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