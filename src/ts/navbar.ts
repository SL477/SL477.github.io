// This is to hold the new navbar element and attach to the element

// define the html
const NAVHTML : string = `
<div class="container-fluid">
    <div class="navbar-header">
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
        </button>
        <a class="pull-left" href="index.html"><img src="/images/link477.png" alt="Link477" style="height: 50px; width: 50px; background-color: white;"/></a>
    </div>
    <div class="collapse navbar-collapse">
        <ul class="nav navbar-nav">                           
            <li class="dropdown">
                <a class="dropdown-toggle" data-toggle="dropdown" href="#">FreeCodeCamp
                <span class="caret"></span></a>
                <ul class="dropdown-menu">
                    <li class="dropdown-header">Responsive Web Design</li>
                    <li><a href="/fccResponsiveWebDesign/tributePage.html">Tribute Page</a></li>
                    <li><a href="/fccResponsiveWebDesign/surveyForm.html">Survey Form</a></li>
                    <li><a href="/fccResponsiveWebDesign/productLandingPage.html">Product Landing Page</a></li>
                    <li><a href="/fccResponsiveWebDesign/technicalDocPage.html">Technical Documentation Page</a></li>
                    <li class="dropdown-header">JavaScript Algorithms and Data Structures</li>
                    <li><a href="/fccResponsiveWebDesign/fccJs.html">All five projects on this page</a></li>
                    <li class="dropdown-header">Front End Libraries Projects</li>
                    <li><a href="/fccResponsiveWebDesign/randomQuoteMachine.html">Random Quote Machine</a></li>
                    <li><a href="/fccResponsiveWebDesign/markdownPreviewer.html">Markdown Previewer</a></li>
                    <li><a href="/fccResponsiveWebDesign/drumMachine.html">Drum Machine</a></li>
                    <li><a href="/fccResponsiveWebDesign/calculator.html">Javascript Calculator</a></li>
                    <li><a href="/fccResponsiveWebDesign/pomodoroClock.html">25 + 5 Clock</a></li>
                    <li class="dropdown-header">Data Visualisation Projects</li>
                    <li><a href="/fccResponsiveWebDesign/barChart.html">Bar Chart</a></li>
                    <li><a href="/fccResponsiveWebDesign/scatterplot.html">Scatterplot Graph</a></li>
                    <li><a href="/fccResponsiveWebDesign/heatmap.html">Heat Map</a></li>
                    <li><a href="/fccResponsiveWebDesign/choropleth.html">Choropleth Map</a></li>
                    <li><a href="/fccResponsiveWebDesign/treemap.html">Treemap Diagram</a></li>
                    <li class="dropdown-header">Take Home Projects</li>
                    <li><a href="/weather/index.html">Weather</a></li>
                    <li><a href="/TicTacToe/index.html">Tic Tac Toe</a></li>
                    <li><a href="/recipeBox/index.html">Recipe Box</a></li>
                    <li><a href="/PongGame/index.html">Pong Game</a></li>
                    <li><a href="/simonGame/index.html">Simon Game</a></li>
                    <li><a href="/fccResponsiveWebDesign/fccForum.html">Free Code Camp Forum Homepage</a></li>
                    <li><a href="/gameOfLife/index.html">Game of Life</a></li>
                    <li class="dropdown-header">Other Projects</li>
                    <li><a href="/JSPianoKeyboard/index.html">JavaScript Keyboard</a></li>
                </ul>
            </li>
            
            <li class="dropdown">
                <a class="dropdown-toggle" data-toggle="dropdown" href="#">Project Odin
                <span class="caret"></span></a>
                <ul class="dropdown-menu">
                    <li class="dropdown-header">Project Odin</li>
                    <li><a href="/etchASketch/index.html">Etch A Sketch</a></li>
                    <li><a href="/rockPaperScissors.html">Rock, Paper, Scissors</a></li>
                    <li><a href="/battleship/index.html">Battleship</a></li>
                </ul>
            </li>

            <li class="dropdown">
                <a class="dropdown-toggle" data-toggle="dropdown" href="#">Games
                <span class="caret"></span></a>
                <ul class="dropdown-menu">
                    <li class="dropdown-header">Games</li>
                    <li><a href="/ColorGridGame/Index.html">Colour Grid</a></li>
                    <li><a href="/Snake/index.html">Snake</a></li>
                </ul>
            </li>
            <li><a href="modelrailway.html">Model Railway</a></li>
            <li class="dropdown">
                <a class="dropdown-toggle" data-toggle="dropdown" href="#">Data Structures<span class="caret"></span></a>
                <ul class="dropdown-menu">
                    <li class="dropdown-header">Data Structures and Algorithms Answers</li>
                    <li><a href="/dataStructuresAlgorithms/arrays.html">Arrays</a></li>
                    <li><a href="/dataStructuresAlgorithms/lists.html">Lists</a></li>
                    <li><a href="/dataStructuresAlgorithms/queues.html">Queues</a></li>
                    <li><a href="/dataStructuresAlgorithms/linkedLists.html">Linked Lists</a></li>
                    <li><a href="/dataStructuresAlgorithms/dictionaries.html">Dictionaries</a></li>
                    <li><a href="/dataStructuresAlgorithms/hashing.html">Hashing</a></li>
                    <li><a href="/dataStructuresAlgorithms/sets.html">Sets</a></li>
                    <li><a href="/dataStructuresAlgorithms/binaryTrees.html">Binary Trees</a></li>
                    <li><a href="/dataStructuresAlgorithms/graphs.html">Graphs</a></li>
                    <li><a href="/dataStructuresAlgorithms/sortingAlgorithms.html">Sorting Algorithms</a></li>
                    <li><a href="/dataStructuresAlgorithms/searchingAlgorithms.html">Searching Algorithms</a></li>
                    <li><a href="/dataStructuresAlgorithms/advancedAlgorithms.html">Advanced Algorithms</a></li>
                </ul>
            </li>
            <li><a href="https://link477255648240.wordpress.com/" rel="noopener noreferrer">Blog</a></li>
        </ul>
    </div>
</div>
`;

// put in breaks to push everything else down
for (let i = 0; i < 3; i++) {
    document.body.prepend(document.createElement("br"));
}

// prepend the nav element
const NAV : HTMLElement = document.createElement("nav");
NAV.innerHTML = NAVHTML;

NAV.classList.add("navbar", "navbar-inverse", "navbar-fixed-top");
NAV.setAttribute("role", "navigation");

document.body.prepend(NAV);