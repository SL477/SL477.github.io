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
                                { href: "https://link477.com/dataScience/" },
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
                                        { href: "https://link477.com/fccResponsiveWebDesign/tributePage" },
                                        "Tribute Page"
                                    )
                                ),
                                React.createElement(
                                    "li",
                                    null,
                                    React.createElement(
                                        "a",
                                        { href: "https://link477.com/fccResponsiveWebDesign/surveyForm" },
                                        "Survey Form"
                                    )
                                ),
                                React.createElement(
                                    "li",
                                    null,
                                    React.createElement(
                                        "a",
                                        { href: "https://link477.com/fccResponsiveWebDesign/productLandingPage" },
                                        "Product Landing Page"
                                    )
                                ),
                                React.createElement(
                                    "li",
                                    null,
                                    React.createElement(
                                        "a",
                                        { href: "https://link477.com/fccResponsiveWebDesign/technicalDocPage" },
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
                                        { href: "https://link477.com/fccResponsiveWebDesign/fccJs" },
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
                                        { href: "https://link477.com/fccResponsiveWebDesign/randomQuoteMachine" },
                                        "Random Quote Machine"
                                    )
                                ),
                                React.createElement(
                                    "li",
                                    null,
                                    React.createElement(
                                        "a",
                                        { href: "https://link477.com/fccResponsiveWebDesign/markdownPreviewer" },
                                        "Markdown Previewer"
                                    )
                                ),
                                React.createElement(
                                    "li",
                                    null,
                                    React.createElement(
                                        "a",
                                        { href: "https://link477.com/fccResponsiveWebDesign/drumMachine" },
                                        "Drum Machine"
                                    )
                                ),
                                React.createElement(
                                    "li",
                                    null,
                                    React.createElement(
                                        "a",
                                        { href: "https://link477.com/fccResponsiveWebDesign/calculator" },
                                        "Javascript Calculator"
                                    )
                                ),
                                React.createElement(
                                    "li",
                                    null,
                                    React.createElement(
                                        "a",
                                        { href: "https://link477.com/fccResponsiveWebDesign/pomodoroClock" },
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
                                        { href: "https://link477.com/fccResponsiveWebDesign/barChart" },
                                        "Bar Chart"
                                    )
                                ),
                                React.createElement(
                                    "li",
                                    null,
                                    React.createElement(
                                        "a",
                                        { href: "https://link477.com/fccResponsiveWebDesign/scatterplot" },
                                        "Scatterplot Graph"
                                    )
                                ),
                                React.createElement(
                                    "li",
                                    null,
                                    React.createElement(
                                        "a",
                                        { href: "https://link477.com/fccResponsiveWebDesign/heatmap" },
                                        "Heat Map"
                                    )
                                ),
                                React.createElement(
                                    "li",
                                    null,
                                    React.createElement(
                                        "a",
                                        { href: "https://link477.com/fccResponsiveWebDesign/choropleth" },
                                        "Choropleth Map"
                                    )
                                ),
                                React.createElement(
                                    "li",
                                    null,
                                    React.createElement(
                                        "a",
                                        { href: "https://link477.com/fccResponsiveWebDesign/treemap" },
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
                                        { href: "https://link477.com/weather/" },
                                        "Weather"
                                    )
                                ),
                                React.createElement(
                                    "li",
                                    null,
                                    React.createElement(
                                        "a",
                                        { href: "https://link477.com/TicTacToe/" },
                                        "Tic Tac Toe"
                                    )
                                ),
                                React.createElement(
                                    "li",
                                    null,
                                    React.createElement(
                                        "a",
                                        { href: "https://link477.com/recipeBox/" },
                                        "Recipe Box"
                                    )
                                ),
                                React.createElement(
                                    "li",
                                    null,
                                    React.createElement(
                                        "a",
                                        { href: "https://link477.com/PongGame/" },
                                        "Pong Game"
                                    )
                                ),
                                React.createElement(
                                    "li",
                                    null,
                                    React.createElement(
                                        "a",
                                        { href: "https://link477.com/simonGame/" },
                                        "Simon Game"
                                    )
                                ),
                                React.createElement(
                                    "li",
                                    null,
                                    React.createElement(
                                        "a",
                                        { href: "https://link477.com/fccResponsiveWebDesign/fccForum" },
                                        "Free Code Camp Forum Homepage"
                                    )
                                ),
                                React.createElement(
                                    "li",
                                    null,
                                    React.createElement(
                                        "a",
                                        { href: "https://link477.com/gameOfLife/" },
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
                                        { href: "https://link477.com/JSPianoKeyboard/" },
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
                                        { href: "https://link477.com/etchASketch/" },
                                        "Etch A Sketch"
                                    )
                                ),
                                React.createElement(
                                    "li",
                                    null,
                                    React.createElement(
                                        "a",
                                        { href: "https://link477.com/rockPaperScissors" },
                                        "Rock, Paper, Scissors"
                                    )
                                ),
                                React.createElement(
                                    "li",
                                    null,
                                    React.createElement(
                                        "a",
                                        { href: "https://link477.com/battleship/" },
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
                                        { href: "https://link477.com/ColorGridGame/Index.html" },
                                        "Colour Grid"
                                    )
                                ),
                                React.createElement(
                                    "li",
                                    null,
                                    React.createElement(
                                        "a",
                                        { href: "https://link477.com/Snake/" },
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
                                { href: "https://link477.com/modelrailway" },
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