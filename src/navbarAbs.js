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
                            {/*<li><a href="https://link477.com/ColorGridGame/Index.html">Colour Grid Game</a></li>
                            <li><a href="https://link477.com/modelrailway.html">Model Railway</a></li>
                            <li><a href="https://link477.com/JSPianoKeyboard/index.html">JavaScript Keyboard</a></li>
                            <li><a href="https://link477.com/PongGame/index.html">Pong Game</a></li>
                            <li><a href="https://link477.com/weather/index.html">Weather</a></li>
                            <li><a href="https://link477.com/TicTacToe/index.html">Tic Tac Toe</a></li>
                            {/*<li><a href="https://link477.com//RogueLikeSpace/index.html">Dungeon Crawler WIP</a></li>*/}
                            <li><a href="https://link477.com/dataScience/index.html">Data Science</a></li>
                            <li className="dropdown">
                                <a className="dropdown-toggle" data-toggle="dropdown" href="#">FreeCodeCamp
                                <span className="caret"></span></a>
                                <ul className="dropdown-menu">
                                    <li className="dropdown-header">Responsive Web Design</li>
                                    <li><a href="https://link477.com/fccResponsiveWebDesign/tributePage.html">Tribute Page</a></li>
                                    <li><a href="https://link477.com/fccResponsiveWebDesign/surveyForm.html">Survey Form</a></li>
                                    <li><a href="https://link477.com/fccResponsiveWebDesign/productLandingPage.html">Product Landing Page</a></li>
                                    <li><a href="https://link477.com/fccResponsiveWebDesign/technicalDocPage.html">Technical Documentation Page</a></li>
                                    <li className="dropdown-header">JavaScript Algorithms and Data Structures</li>
                                    <li><a href="https://link477.com/fccResponsiveWebDesign/fccJs.html">All five projects on this page</a></li>
                                    <li className="dropdown-header">Front End Libraries Projects</li>
                                    <li><a href="https://link477.com/fccResponsiveWebDesign/randomQuoteMachine.html">Random Quote Machine</a></li>
                                    <li><a href="https://link477.com/fccResponsiveWebDesign/markdownPreviewer.html">Markdown Previewer</a></li>
                                    <li><a href="https://link477.com/fccResponsiveWebDesign/drumMachine.html">Drum Machine</a></li>
                                    <li><a href="https://link477.com/fccResponsiveWebDesign/calculator.html">Javascript Calculator</a></li>
                                    <li><a href="https://link477.com/fccResponsiveWebDesign/pomodoroClock.html">25 + 5 Clock</a></li>
                                    <li className="dropdown-header">Data Visualisation Projects</li>
                                    <li><a href="https://link477.com/fccResponsiveWebDesign/barChart.html">Bar Chart</a></li>
                                    <li><a href="https://link477.com/fccResponsiveWebDesign/scatterplot.html">Scatterplot Graph</a></li>
                                    <li><a href="https://link477.com/fccResponsiveWebDesign/heatmap.html">Heat Map</a></li>
                                    <li><a href="https://link477.com/fccResponsiveWebDesign/choropleth.html">Choropleth Map</a></li>
                                    <li><a href="https://link477.com/fccResponsiveWebDesign/treemap.html">Treemap Diagram</a></li>
                                    <li className="dropdown-header">Take Home Projects</li>
                                    <li><a href="https://link477.com/weather/index.html">Weather</a></li>
                                    <li><a href="https://link477.com/TicTacToe/index.html">Tic Tac Toe</a></li>
                                    <li><a href="https://link477.com/recipeBox/index.html">Recipe Box</a></li>
                                    <li><a href="https://link477.com/PongGame/index.html">Pong Game</a></li>
                                </ul>
                            </li>
                            
                            <li className="dropdown">
                                <a className="dropdown-toggle" data-toggle="dropdown" href="#">Project Odin
                                <span className="caret"></span></a>
                                <ul className="dropdown-menu">
                                    <li className="dropdown-header">Project Odin</li>
                                    <li><a href="https://link477.com/etchASketch/index.html">Etch A Sketch</a></li>
                                    <li><a href="https://link477.com/rockPaperScissors.html">Rock, Paper, Scissors</a></li>
                                </ul>
                            </li>

                            {/*<li><a href="./ColorGridGame/Index.html">Colour Grid Game</a></li>*/}
                            <li className="dropdown">
                                <a className="dropdown-toggle" data-toggle="dropdown" href="#">Games
                                <span className="caret"></span></a>
                                <ul className="dropdown-menu">
                                    <li className="dropdown-header">Games</li>
                                    <li><a href="https://link477.com/ColorGridGame/Index.html">Colour Grid</a></li>
                                    <li><a href="https://link477.com/Snake/index.html">Snake</a></li>
                                </ul>
                            </li>
                            <li><a href="modelrailway.html">Model Railway</a></li>
                            <li><a href="https://link477.com/JSPianoKeyboard/index.html">JavaScript Keyboard</a></li>
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