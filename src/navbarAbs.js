'use strict';
const e = React.createElement;

function NavBar() {
    return (
        <div className="container">
            <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
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
                            <li><a href="https://link477.com/dataScience/">Data Science</a></li>
                            <li className="dropdown">
                                <a className="dropdown-toggle" data-toggle="dropdown" href="#">FreeCodeCamp
                                <span className="caret"></span></a>
                                <ul className="dropdown-menu">
                                    <li className="dropdown-header">Responsive Web Design</li>
                                    <li><a href="https://link477.com/fccResponsiveWebDesign/tributePage">Tribute Page</a></li>
                                    <li><a href="https://link477.com/fccResponsiveWebDesign/surveyForm">Survey Form</a></li>
                                    <li><a href="https://link477.com/fccResponsiveWebDesign/productLandingPage">Product Landing Page</a></li>
                                    <li><a href="https://link477.com/fccResponsiveWebDesign/technicalDocPage">Technical Documentation Page</a></li>
                                    <li className="dropdown-header">JavaScript Algorithms and Data Structures</li>
                                    <li><a href="https://link477.com/fccResponsiveWebDesign/fccJs">All five projects on this page</a></li>
                                    <li className="dropdown-header">Front End Libraries Projects</li>
                                    <li><a href="https://link477.com/fccResponsiveWebDesign/randomQuoteMachine">Random Quote Machine</a></li>
                                    <li><a href="https://link477.com/fccResponsiveWebDesign/markdownPreviewer">Markdown Previewer</a></li>
                                    <li><a href="https://link477.com/fccResponsiveWebDesign/drumMachine">Drum Machine</a></li>
                                    <li><a href="https://link477.com/fccResponsiveWebDesign/calculator">Javascript Calculator</a></li>
                                    <li><a href="https://link477.com/fccResponsiveWebDesign/pomodoroClock">25 + 5 Clock</a></li>
                                    <li className="dropdown-header">Data Visualisation Projects</li>
                                    <li><a href="https://link477.com/fccResponsiveWebDesign/barChart">Bar Chart</a></li>
                                    <li><a href="https://link477.com/fccResponsiveWebDesign/scatterplot">Scatterplot Graph</a></li>
                                    <li><a href="https://link477.com/fccResponsiveWebDesign/heatmap">Heat Map</a></li>
                                    <li><a href="https://link477.com/fccResponsiveWebDesign/choropleth">Choropleth Map</a></li>
                                    <li><a href="https://link477.com/fccResponsiveWebDesign/treemap">Treemap Diagram</a></li>
                                    <li className="dropdown-header">Take Home Projects</li>
                                    <li><a href="https://link477.com/weather/">Weather</a></li>
                                    <li><a href="https://link477.com/TicTacToe/">Tic Tac Toe</a></li>
                                    <li><a href="https://link477.com/recipeBox/">Recipe Box</a></li>
                                    <li><a href="https://link477.com/PongGame/">Pong Game</a></li>
                                    <li><a href="https://link477.com/simonGame/">Simon Game</a></li>
                                    <li><a href="https://link477.com/fccResponsiveWebDesign/fccForum">Free Code Camp Forum Homepage</a></li>
                                    <li className="dropdown-header">Other Projects</li>
                                    <li><a href="https://link477.com/JSPianoKeyboard/">JavaScript Keyboard</a></li>
                                </ul>
                            </li>
                            
                            <li className="dropdown">
                                <a className="dropdown-toggle" data-toggle="dropdown" href="#">Project Odin
                                <span className="caret"></span></a>
                                <ul className="dropdown-menu">
                                    <li className="dropdown-header">Project Odin</li>
                                    <li><a href="https://link477.com/etchASketch/">Etch A Sketch</a></li>
                                    <li><a href="https://link477.com/rockPaperScissors">Rock, Paper, Scissors</a></li>
                                    <li><a href="https://link477.com/battleship/">Battleship</a></li>
                                </ul>
                            </li>

                            {/*<li><a href="./ColorGridGame/Index.html">Colour Grid Game</a></li>*/}
                            <li className="dropdown">
                                <a className="dropdown-toggle" data-toggle="dropdown" href="#">Games
                                <span className="caret"></span></a>
                                <ul className="dropdown-menu">
                                    <li className="dropdown-header">Games</li>
                                    <li><a href="https://link477.com/ColorGridGame/Index.html">Colour Grid</a></li>
                                    <li><a href="https://link477.com/Snake/">Snake</a></li>
                                </ul>
                            </li>
                            <li><a href="https://link477.com/modelrailway">Model Railway</a></li>
                            <li className="dropdown">
                                <a className="dropdown-toggle" data-toggle="dropdown" href="#">Data Structures<span className="caret"></span></a>
                                <ul className="dropdown-menu">
                                    <li className="dropdown-header">Data Structures and Algorithms Answers</li>
                                    <li><a href="https://link477.com/dataStructuresAlgorithms/arrays">Arrays</a></li>
                                    <li><a href="https://link477.com/dataStructuresAlgorithms/lists">Lists</a></li>
                                    <li><a href="https://link477.com/dataStructuresAlgorithms/queues">Queues</a></li>
                                    <li><a href="https://link477.com/dataStructuresAlgorithms/linkedLists">Linked Lists</a></li>
                                    <li><a href="https://link477.com/dataStructuresAlgorithms/dictionaries">Dictionaries</a></li>
                                    <li><a href="https://link477.com/dataStructuresAlgorithms/hashing">Hashing</a></li>
                                    <li><a href="https://link477.com/dataStructuresAlgorithms/sets">Sets</a></li>
                                    <li><a href="https://link477.com/dataStructuresAlgorithms/binaryTrees">Binary Trees</a></li>
                                    <li><a href="https://link477.com/dataStructuresAlgorithms/graphs">Graphs</a></li>
                                    <li><a href="https://link477.com/dataStructuresAlgorithms/sortingAlgorithms">Sorting Algorithms</a></li>
                                    <li><a href="https://link477.com/dataStructuresAlgorithms/searchingAlgorithms">Searching Algorithms</a></li>
                                    <li><a href="https://link477.com/dataStructuresAlgorithms/advancedAlgorithms">Advanced Algorithms</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <br/>
            <br/>
            <br/>
        </div>
    );
}

const domContainer = document.querySelector("#navbar");
ReactDOM.render(e(NavBar), domContainer);