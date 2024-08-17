---
layout: none
---

/**
 * This is to enable me to use my NavBar through other sites
 */
class MyNavBar extends HTMLElement {
    /**
     * Called when this is added to the DOM
     */
    connectedCallback() {
        const navBar = document.createElement("nav");
        navBar.className = "navbar navbar-expand-lg navbar-dark bg-dark fixed-top";

        const mainContainer = document.createElement("div");
        mainContainer.className = "container-fluid";

        // Brand section
        const brandContainer = document.createElement("a");
        brandContainer.className = "navbar-brand";
        brandContainer.href = "/";
        const brandImg = document.createElement("img");
        brandImg.src = "https://link477.com/assets/images/link477.png";
        brandImg.alt = "Link477";
        brandImg.className = "site-icon";
        brandImg.height = 50;
        brandImg.width = 50;
        brandImg.style.backgroundColor = "white";
        brandContainer.appendChild(brandImg);
        mainContainer.appendChild(brandContainer);

        // Toggle section
        const toggleNavBtn = document.createElement("button");
        toggleNavBtn.className = "navbar-toggler";
        toggleNavBtn.type = "button";
        toggleNavBtn.setAttribute("data-bs-toggle", "collapse");
        toggleNavBtn.setAttribute("data-bs-target", "#navbarSupportedContent");
        toggleNavBtn.setAttribute("aria-controls", "navbarSupportedContent");
        toggleNavBtn.ariaExpanded = "false";
        toggleNavBtn.ariaLabel = "Toggle navigation";
        const toggleNavIcon = document.createElement("span");
        toggleNavIcon.className = "navbar-toggler-icon";
        toggleNavBtn.appendChild(toggleNavIcon);
        mainContainer.appendChild(toggleNavBtn);

        // Collapsed content
        const collapseDiv = document.createElement("div");
        collapseDiv.className = "collapse navbar-collapse";
        collapseDiv.id = "navbarSupportedContent";

        const collapseList = document.createElement("ul");
        collapseList.className = "navbar-nav me-auto mb-2 mb-lg-0";

        const freeCodeCampSections = 
        [
            ["Responsive Web Design"],
            ["/fccresponsivewebdesign/tributepage", "Tribute Page"],
            ["/fccresponsivewebdesign/surveyform", "Survey Form"],
            ["/fccresponsivewebdesign/productLandingPage", "Product Landing Page"],
            ["/fccresponsivewebdesign/technicalDocPage", "Technical Documentation Page"],
            ["JavaScript Algorithms and Data Structures"],
            ["/fccresponsivewebdesign/fccJS", "All five projects on this page"],
            ["Front End Libraries Projects"],
            ["/fccresponsivewebdesign/randomquotemachine", "Random Quote Machine"],
            ["/fccresponsivewebdesign/markdownpreviewer", "Markdown Previewer"],
            ["/fccresponsivewebdesign/drummachine", "Drum Machine"],
            ["/fccresponsivewebdesign/calculator", "Javascript Calculator"],
            ["/fccresponsivewebdesign/pomodoroclock", "25 + 5 Clock"],
            ["Data Visualisation Projects"],
            ["/fccresponsivewebdesign/barchart", "Bar Chart"],
            ["/fccresponsivewebdesign/scatterplot", "Scatterplot Graph"],
            ["/fccresponsivewebdesign/heatmap", "Heat Map"],
            ["/fccresponsivewebdesign/choropleth", "Choropleth Map"],
            ["/fccresponsivewebdesign/treemap", "Treemap Diagram"],
            ["Take Home Projects"],
            ["https://link477.com/Link477-React/#/weather", "Weather"],
            ["https://link477.com/Link477-React/#/tictactoe", "Tic Tac Toe"],
            ["https://link477.com/Link477-React/#/recipeBox", "Recipe Box"],
            ["/pages/ponggame", "Pong Game"],
            ["/pages/simonGame", "Simon Game"],
            ["/fccresponsivewebdesign/fccforum", "Free Code Camp Forum Homepage"],
            ["https://link477.com/Link477-React/#/gameoflife", "Game of Life"],
            ["Other Projects"],
            ["/pages/jspianokeyboard", "JavaScript Keyboard"]
        ];
        collapseList.appendChild(this.createSection("FreeCodeCamp", freeCodeCampSections));

        // Odin Project
        const odinList = [
            ["/pages/etchasketch.html", "Etch A Sketch"],
            ["https://link477.com/Link477-React/#/rockPaperScissors", "Rock, Paper, Scissors"],
            ["https://link477.com/Link477-React/#/battleship", "Battleship"],
            ["https://link477.com/OdinProject/productLandingPage/", "Product Landing Page"]
        ];
        collapseList.appendChild(this.createSection("Project Odin", odinList));

        const gamesList = [
            ["/colorGridGame/index.html", "Colour Grid"],
            ["/pages/snake.html", "Snake"]
        ];
        collapseList.appendChild(this.createSection("Games", gamesList));

        const otherList = [
            ["/pages/modelrailway.html", "Model Railway"],
            ["https://link477.com/Link477-React/#/terminal", "React Terminal"]
        ]
        collapseList.appendChild(this.createSection("Other", otherList));
        // collapseList.appendChild(this.createSingleNavItem("/pages/modelrailway.html", "Model Railway"));

        const dataStructList = [
            ["https://link477.com/Link477-React/#/arrays", "Arrays"],
            ["/dataStructuresAlgorithms/lists.html", "Lists"],
            ["/dataStructuresAlgorithms/queues.html", "Queues"],
            ["/dataStructuresAlgorithms/linkedLists.html", "Linked Lists"],
            ["/dataStructuresAlgorithms/dictionaries.html", "Dictionaries"],
            ["/dataStructuresAlgorithms/hashing.html", "Hashing"],
            ["/dataStructuresAlgorithms/sets.html", "Sets"],
            ["/dataStructuresAlgorithms/binaryTrees.html", "Binary Trees"],
            ["/dataStructuresAlgorithms/graphs.html", "Graphs"],
            ["/dataStructuresAlgorithms/sortingAlgorithms.html", "Sorting Algorithms"],
            ["/dataStructuresAlgorithms/searchingAlgorithms.html", "Searching Algorithms"],
            ["/dataStructuresAlgorithms/advancedAlgorithms.html", "Advanced Algorithms"]
        ];
        collapseList.appendChild(this.createSection("Data Structures", dataStructList));

        // Posts
        const postsList = [
            {%- for post in site.posts -%}
            ["{{ post.url | relative_url }}", "{{ post.title | escape }}"],
            {%- endfor -%}
        ];
        collapseList.appendChild(this.createSection("Blog", postsList));

        collapseList.appendChild(this.createSingleNavItem("/about", "About"));

        collapseDiv.appendChild(collapseList);
        mainContainer.appendChild(collapseDiv);
        
        navBar.appendChild(mainContainer);
        this.appendChild(navBar);
    }

    /**
     * This takes a list of links of the form:
     * ["link", "name"]
     * If there is one element it is a dropdown header
     * @param {Array<Array<string>>} listLinks 
     * @param {HTMLUListElement} listElement 
     */
    formatSectionList(listLinks, listElement) {
        for (let i = 0; i < listLinks.length; i++) {
            const liElement = document.createElement("li");
            if (listLinks[i].length === 1) {
                const subSectionHeader = document.createElement("h6");
                subSectionHeader.className = "dropdown-header";
                subSectionHeader.textContent = listLinks[i][0];
                liElement.appendChild(subSectionHeader);
            }
            else {
                const linkElement = document.createElement("a");
                linkElement.href = listLinks[i][0];
                linkElement.textContent = listLinks[i][1];
                liElement.appendChild(linkElement);
            }
            listElement.appendChild(liElement);
        }
    }

    /**
     * This is to create a section of links
     * @param {string} sectionName
     * @param {Array<Array<string>>} listLinks 
     * @returns {HTMLLIElement}
     */
    createSection(sectionName, listLinks) {
        const sectionElement = document.createElement("li");
        sectionElement.className = "nav-item dropdown";

        const dropBtn = document.createElement("a");
        dropBtn.className = "nav-link dropdown-toggle";
        dropBtn.href = "#";
        dropBtn.role = "button";
        dropBtn.setAttribute("data-bs-toggle", "dropdown");
        dropBtn.ariaExpanded = "false";
        dropBtn.textContent = sectionName;
        sectionElement.appendChild(dropBtn);

        const dropList = document.createElement("ul");
        dropList.className = "dropdown-menu";

        this.formatSectionList(listLinks, dropList);
        sectionElement.appendChild(dropList);

        return sectionElement;
    }

    /**
     * This is to create a singular link
     * @param {string} itemLink
     * @param {string} itemName
     * @returns {HTMLLIElement}
     */
    createSingleNavItem(itemLink, itemName) {
        const liElement = document.createElement("li");
        liElement.className = "nav-item";

        const aElement = document.createElement("a");
        aElement.href = itemLink;
        aElement.textContent = itemName;
        liElement.appendChild(aElement);
        return liElement;
    }
}

customElements.define("my-navbar", MyNavBar);
