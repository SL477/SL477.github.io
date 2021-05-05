'use strict';
const e = React.createElement;

function NavBar() {
    return (
        <div className="container">
            <nav className="navbar navbar-inverse navbar-fixed-top navbar-inverted" role="navigation">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="pull-left" href="index.html"><img src="./images/link477.png" alt="Link477" style={{height: 50 + 'px', width: 50 + 'px', backgroundColor: 'white'}}/></a>
                    </div>
                    <div className="collapse navbar-collapse">
                        <ul className="nav navbar-nav">
                            {/*<li><a href="./ColorGridGame/Index.html">Colour Grid Game</a></li>
                            <li><a href="modelrailway.html">Model Railway</a></li>
                            <li><a href="./JSPianoKeyboard/index.html">JavaScript Keyboard</a></li>
                            <li><a href="./PongGame/index.html">Pong Game</a></li>
                            <li><a href="./weather/index.html">Weather</a></li>
                            <li><a href="./TicTacToe/index.html">Tic Tac Toe</a></li>
                            {/*<li><a href="./RogueLikeSpace/index.html">Dungeon Crawler WIP</a></li>-->*/}
                            
                            <li><a href="./dataScience/index.html">Data Science</a></li>
                            <li className="dropdown">
                                <a className="dropdown-toggle" data-toggle="dropdown" href="#">FreeCodeCamp
                                <span className="caret"></span></a>
                                <ul className="dropdown-menu">
                                    <li className="dropdown-header">Responsive Web Design</li>
                                    <li><a href="./fccResponsiveWebDesign/tributePage.html">Tribute Page</a></li>
                                    <li><a href="./fccResponsiveWebDesign/surveyForm.html">Survey Form</a></li>
                                    <li><a href="./fccResponsiveWebDesign/productLandingPage.html">Product Landing Page</a></li>
                                    <li><a href="./fccResponsiveWebDesign/technicalDocPage.html">Technical Documentation Page</a></li>
                                    <li className="dropdown-header">JavaScript Algorithms and Data Structures</li>
                                    <li><a href="./fccResponsiveWebDesign/fccJs.html">All five projects on this page</a></li>
                                    <li className="dropdown-header">Front End Libraries Projects</li>
                                    <li><a href="./fccResponsiveWebDesign/randomQuoteMachine.html">Random Quote Machine</a></li>
                                    <li><a href="./fccResponsiveWebDesign/markdownPreviewer.html">Markdown Previewer</a></li>
                                    <li><a href="./fccResponsiveWebDesign/drumMachine.html">Drum Machine</a></li>
                                    <li><a href="./fccResponsiveWebDesign/calculator.html">Javascript Calculator</a></li>
                                    <li><a href="./fccResponsiveWebDesign/pomodoroClock.html">25 + 5 Clock</a></li>
                                    <li className="dropdown-header">Data Visualisation Projects</li>
                                    <li><a href="./fccResponsiveWebDesign/barChart.html">Bar Chart</a></li>
                                    <li><a href="./fccResponsiveWebDesign/scatterplot.html">Scatterplot Graph</a></li>
                                    <li><a href="./fccResponsiveWebDesign/heatmap.html">Heat Map</a></li>
                                    <li><a href="./fccResponsiveWebDesign/choropleth.html">Choropleth Map</a></li>
                                    <li><a href="./fccResponsiveWebDesign/treemap.html">Treemap Diagram</a></li>
                                    <li className="dropdown-header">Take Home Projects</li>
                                    <li><a href="./weather/index.html">Weather</a></li>
                                    <li><a href="./TicTacToe/index.html">Tic Tac Toe</a></li>
                                    <li><a href="./recipeBox/index.html">Recipe Box</a></li>
                                    <li><a href="./PongGame/index.html">Pong Game</a></li>
                                </ul>
                            </li>
                            
                            <li className="dropdown">
                                <a className="dropdown-toggle" data-toggle="dropdown" href="#">Project Odin
                                <span className="caret"></span></a>
                                <ul className="dropdown-menu">
                                    <li className="dropdown-header">Project Odin</li>
                                    <li><a href="./etchASketch/index.html">Etch A Sketch</a></li>
                                    <li><a href="./rockPaperScissors.html">Rock, Paper, Scissors</a></li>
                                </ul>
                            </li>

                            {/*<li><a href="./ColorGridGame/Index.html">Colour Grid Game</a></li>*/}
                            <li className="dropdown">
                                <a className="dropdown-toggle" data-toggle="dropdown" href="#">Games
                                <span className="caret"></span></a>
                                <ul className="dropdown-menu">
                                    <li className="dropdown-header">Games</li>
                                    <li><a href="./ColorGridGame/Index.html">Colour Grid</a></li>
                                    <li><a href="./Snake/index.html">Snake</a></li>
                                </ul>
                            </li>
                            <li><a href="modelrailway.html">Model Railway</a></li>
                            <li><a href="./JSPianoKeyboard/index.html">JavaScript Keyboard</a></li>
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