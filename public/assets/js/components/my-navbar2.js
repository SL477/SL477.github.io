/**
 * This is to enable me to use my NavBar through other sites
 */
class MyNavBar extends HTMLElement {
  /**
   * Called when this is added to the DOM
   */
  async connectedCallback() {
    this.innerHTML = `<a href="#main-content" class="screen-reader-text">Skip to main content</a>
<input
  type="checkbox"
  name="expandNavbar"
  id="expandNavbar"
  aria-label="Toggle Navigation"
/>
<nav class="my-nav" aria-label="Main Navigation">
  <a class="brand" href="/" >
    <picture>
      <source
        srcset="https://link477.com/assets/images/link477.webp"
        type="image/webp"
      />
      <source
        srcset="https://link477.com/assets/images/link477.png"
        type="image/png"
      />
      <img
        src="https://link477.com/assets/images/link477.png"
        alt="Link477"
        height="50"
        width="50"
      />
    </picture>
  </a>
  <label for="expandNavbar" id="expand-navbar-icon" class="hamburger">
    <span></span><span></span><span></span>
  </label>
  <div class="inner-nav">
    <menu class="inner-nav-top-level">
      
        <li class="dropdown">
          <button
            type="button"
            class="dropdown_title"
            aria-expanded="false"
            popovertarget="freeCodeCamp-dropdown"
          >
            FreeCodeCamp
          </button>
          <ul class="dropdown_menu" id="freeCodeCamp-dropdown" popover="auto">
                <li>Responsive Web Design</li>
                  <li>
                    <a href="/fccresponsivewebdesign/tributepage">Tribute Page</a>
                  </li>
                  <li>
                    <a href="/fccresponsivewebdesign/surveyform">Survey Form</a>
                  </li>
                  <li>
                    <a href="/fccresponsivewebdesign/productLandingPage">Product Landing Page</a>
                  </li>
                  <li>
                    <a href="/fccresponsivewebdesign/technicalDocPage">Technical Documentation Page</a>
                  </li>
                <li>JavaScript Algorithms and Data Structures</li>
                  <li>
                    <a href="/fccresponsivewebdesign/fccJS">All five projects on this page</a>
                  </li>
                <li>Front End Libraries Projects</li>
                  <li>
                    <a href="/fccresponsivewebdesign/randomquotemachine">Random Quote Machine</a>
                  </li>
                  <li>
                    <a href="/fccresponsivewebdesign/markdownpreviewer">Markdown Previewer</a>
                  </li>
                  <li>
                    <a href="/fccresponsivewebdesign/drummachine">Drum Machine</a>
                  </li>
                  <li>
                    <a href="/fccresponsivewebdesign/calculator">Javascript Calculator</a>
                  </li>
                  <li>
                    <a href="/fccresponsivewebdesign/pomodoroclock">25 + 5 Clock</a>
                  </li>
                <li>Data Visualisation Projects</li>
                  <li>
                    <a href="/fccresponsivewebdesign/barchart">Bar Chart</a>
                  </li>
                  <li>
                    <a href="/fccresponsivewebdesign/scatterplot">Scatter Plot Graph</a>
                  </li>
                
                  <li>
                    <a href="/fccresponsivewebdesign/heatmap" >Heat Map</a>
                  </li>
                
                  <li>
                    <a href="/fccresponsivewebdesign/choropleth" >Choropleth Map</a>
                  </li>
                
                  <li>
                    <a href="/fccresponsivewebdesign/treemap" >Treemap Diagram</a>
                  </li>
                
              
            
              
                <li>Take Home Projects</li>
                
                  <li>
                    <a href="https://link477.com/Link477-React/#/weather" >Weather</a>
                  </li>
                
                  <li>
                    <a href="https://link477.com/Link477-React/#/tictactoe" >Tic Tac Toe</a>
                  </li>
                
                  <li>
                    <a href="https://link477.com/Link477-React/#/recipeBox" >Recipe Box</a>
                  </li>
                
                  <li>
                    <a href="/pages/ponggame" >Pong Game</a>
                  </li>
                
                  <li>
                    <a href="/pages/simonGame" >Simon Game</a>
                  </li>
                
                  <li>
                    <a href="/fccresponsivewebdesign/fccforum" >Free Code Camp Forum Homepage</a>
                  </li>
                
                  <li>
                    <a href="https://link477.com/Link477-React/#/gameoflife" >Game of Life</a>
                  </li>
                
              
            
              
                <li>Other Projects</li>
                
                  <li>
                    <a href="/pages/jspianokeyboard" >JavaScript Keyboard</a>
                  </li>
                
              
            
          </ul>
        </li>
      
        <li class="dropdown">
          <button
            type="button"
            class="dropdown_title"
            aria-expanded="false"
            popovertarget="projectOdin-dropdown"
          >
            Project Odin
          </button>
          <ul class="dropdown_menu" id="projectOdin-dropdown" popover="auto">
            
              
                <li></li>
                
                  <li>
                    <a href="/pages/etchasketch.html" >Etch A Sketch</a>
                  </li>
                
                  <li>
                    <a href="https://link477.com/Link477-React/#/rockPaperScissors" >Rock, Paper, Scissors</a>
                  </li>
                
                  <li>
                    <a href="/odinProject/battleship.html" >Battleship</a>
                  </li>
                
                  <li>
                    <a href="/odinProject/productLandingPage.html" >Product Landing Page</a>
                  </li>
                
                  <li>
                    <a href="/odinProject/" >Index</a>
                  </li>
                
              
            
          </ul>
        </li>
      
        <li class="dropdown">
          <button
            type="button"
            class="dropdown_title"
            aria-expanded="false"
            popovertarget="games-dropdown"
          >
            Games
          </button>
          <ul class="dropdown_menu" id="games-dropdown" popover="auto">
            
              
                <li></li>
                
                  <li>
                    <a href="/colorGridGame/index.html" >Colour Grid</a>
                  </li>
                
                  <li>
                    <a href="/pages/snake.html" >Snake</a>
                  </li>
                
              
            
          </ul>
        </li>
      
        <li class="dropdown">
          <button
            type="button"
            class="dropdown_title"
            aria-expanded="false"
            popovertarget="other-dropdown"
          >
            Other
          </button>
          <ul class="dropdown_menu" id="other-dropdown" popover="auto">
            
              
                <li></li>
                
                  <li>
                    <a href="/pages/modelrailway.html" >Model Railway</a>
                  </li>
                
                  <li>
                    <a href="https://link477.com/Link477-React/#/terminal" >React Terminal</a>
                  </li>
                
                  <li>
                    <a href="/changelog" >Change Log</a>
                  </li>
                
                  <li>
                    <a href="/blogroll.xml" >Blog Roll</a>
                  </li>
                
                  <li>
                    <a href="/bookmarks.xml" >Bookmarks</a>
                  </li>
                
                  <li>
                    <a href="/wordle" >Wordle</a>
                  </li>
                
                  <li>
                    <a href="/whodle" >Whodle</a>
                  </li>
                
              
            
          </ul>
        </li>
      
        <li class="dropdown">
          <button
            type="button"
            class="dropdown_title"
            aria-expanded="false"
            popovertarget="dataStructures-dropdown"
          >
            Data Structures
          </button>
          <ul class="dropdown_menu" id="dataStructures-dropdown" popover="auto">
            
              
                <li></li>
                
                  <li>
                    <a href="https://link477.com/Link477-React/#/arrays" >Arrays</a>
                  </li>
                
                  <li>
                    <a href="/dataStructuresAlgorithms/lists" >Lists</a>
                  </li>
                
                  <li>
                    <a href="/dataStructuresAlgorithms/queues" >Queues</a>
                  </li>
                
                  <li>
                    <a href="/dataStructuresAlgorithms/linkedLists" >Linked Lists</a>
                  </li>
                
                  <li>
                    <a href="/dataStructuresAlgorithms/dictionaries" >Dictionaries</a>
                  </li>
                
                  <li>
                    <a href="/dataStructuresAlgorithms/hashing" >Hashing</a>
                  </li>
                
                  <li>
                    <a href="/dataStructuresAlgorithms/sets" >Sets</a>
                  </li>
                
                  <li>
                    <a href="/dataStructuresAlgorithms/binaryTrees" >Binary Trees</a>
                  </li>
                
                  <li>
                    <a href="/dataStructuresAlgorithms/graphs" >Graphs</a>
                  </li>
                
                  <li>
                    <a href="/dataStructuresAlgorithms/sortingAlgorithms" >Sorting Algorithms</a>
                  </li>
                
                  <li>
                    <a href="/dataStructuresAlgorithms/searchingAlgorithms" >Searching Algorithms</a>
                  </li>
                
                  <li>
                    <a href="/dataStructuresAlgorithms/advancedAlgorithms" >Advanced Algorithms</a>
                  </li>
                
              
            
          </ul>
        </li>
      
      <li class="dropdown">
        <button
          type="button"
          class="dropdown_title"
          aria-expanded="false"
          popovertarget="blog-dropdown"
        >
          Blog
        </button>
        <ul class="dropdown_menu" id="blog-dropdown" popover="auto"><li>
            <a href="/2026/08/31/If-you-could-have-dinner-with-anyone-in-the-world.html" 
              >If you can have dinner with anyone in the world who would it be?</a
            >
          </li><li>
            <a href="/2026/08/26/Doctor-Who-Series-8.html" 
              >Doctor Who Series 8</a
            >
          </li><li>
            <a href="/2026/08/23/The-Break-In.html" 
              >The Break In</a
            >
          </li><li>
            <a href="/2026/08/15/KISS-Typescript.html" 
              >KISS Typescript</a
            >
          </li><li>
            <a href="/2026/08/03/AuguStory.html" 
              >AuguStory</a
            >
          </li><li>
            <a href="/2026/07/12/Trench-Crusade.html" 
              >Trench Crusade</a
            >
          </li><li>
            <a href="/2026/06/27/Tethers.html" 
              >Tethers</a
            >
          </li><li>
            <a href="/2026/06/07/Battle-of-Callisto.html" 
              >Battle of Callisto</a
            >
          </li><li>
            <a href="/2026/05/21/Bear-Blog-Carnival-My-Favourite.html" 
              >Bear Blog Carnival - My favourite</a
            >
          </li><li>
            <a href="/2026/04/19/Adventure.html" 
              >Adventure</a
            >
          </li><li>
            <a href="/posts" >More Posts</a>
          </li>
        </ul>
      </li>
      <li><a href="/about" >About</a></li>
      <li><a href="/feeds" >Feeds</a></li>
      <li><div class="ui-mode-picker">
  <button type="button"
          id="ui-mode-picker"
          role="switch"
          class="btn btn-primary"
          aria-label="Activate dark mode">
  </button>
</div>
</li>
    </menu>
  </div>
</nav>
`;
  }
}

customElements.define('my-navbar', MyNavBar);