
//From https://github.com/GauravWalia19/Free-Algorithms-Books/blob/master/Library/src/JAVASCRIPT/Data-Structures-%26-Algorithms-with-JavaScript.pdf

class List {
    constructor() {
        this.listSize = 0;
        this.pos = 0;
        this.dataStore = [];// uses an empty array to store list elements
    }

    clear() {
        delete this.dataStore;
        this.dataStore = [];
        this.listSize = this.pos = 0;
    }

    find(element) {
        for (let i = 0; i < this.dataStore.length; ++i) {
            if (this.dataStore[i] == element) {
                return i;
            }
        }
        return -1;
    }

    toString() {
        return this.dataStore;
    }

    insert(element, after) {
        let insertPos = this.find(after);
        if (insertPos > -1) {
            this.dataStore.splice(insertPos + 1, 0, element);
            ++this.listSize;
            return true;
        }
        return false;
    }

    append(element) {
        this.dataStore[this.listSize++] = element;
    }

    remove(element) {
        var foundAt = this.find(element);
        if (foundAt > -1) {
            this.dataStore.splice(foundAt,1);
            --this.listSize;
            return true;
        }
        return false;
    }

    front() {
        this.pos = 0;
        return this.pos;
    }

    end() {
        this.pos = this.listSize - 1;
    }

    prev() {
        if (this.pos > 0) {
            --this.pos;
        }
    }

    next() {
        //if (this.pos < this.listSize - 1) {
        ++this.pos;
        //}
        return this.pos;
    }

    length() {
        return this.listSize;
    }

    currPos() {
        return this.pos;
    }

    moveTo(position) {
        this.pos = position;
    }

    getElement() {
        return this.dataStore[this.pos];
    }

    contains(element) {
        for (var i = 0; i < this.dataStore.length; ++i) {
            if (this.dataStore[i] == element) {
                return true;
            }
        }
        return false;
    }

    removeIndex(elementIndex) {
        //var foundAt = this.find(element);
        if (elementIndex > -1 && elementIndex < this.length()) {
            this.dataStore.splice(elementIndex,1);
            --this.listSize;
            return true;
        }
        return false;
    }
}

class Person {
    constructor(name, gender) {
        this.name = name;
        this.gender = gender;
    }
}

//People list
const personList = new List();
personList.append(new Person('Billy','Male'));
personList.append(new Person('Tilly','Female'));
personList.append(new Person('Bob','Male'));
personList.append(new Person('Tara','Female'));
personList.append(new Person('Alan','Male'));
personList.append(new Person('Amy','Female'));
personList.append(new Person('Jimmy','Male'));
personList.append(new Person('Jane','Female'));
personList.append(new Person('Jack','Male'));
personList.append(new Person('Janice','Female'));

function showPeople() {
    const peopleListTBody = document.getElementById("peopleList");
    const genderSelect = document.getElementById("gender");
    if (peopleListTBody) {
        let peopleHtml = '';
        let filter = genderSelect.value;
        personList.dataStore.forEach(element => {
            if (filter == 'all' || filter == element.gender) {
                peopleHtml += '<tr><td>' + element.name + '</td><td>' + element.gender + '</td></tr>';
            }
        });
        peopleListTBody.innerHTML = peopleHtml;
    }
}

//Video rental
var movies = [
    'The Shawshank Redemption',
    'The Godfather',
    'The Godfather: Part II',
    'Pulp Fiction',
    'The Good, the Bad and the Ugly',
    '12 Angry Men',
    'Schindler\'s List',
    'The Dark Knight',
    'The Lord of the Rings: The Return of the King',
    'Fight Club',
    'Star Wars: Episode V - The Empire Strikes Back',
    'One Flew Over the Cuckoo\'s Nest',
    'The Lord of the Rings: The Fellowship of the Ring',
    'Inception',
    'Goodfellas',
    'Star Wars',
    'Seven Samurai',
    'The Matrix',
    'Forrest Gump',
    'City of God'
];

class Customer {
    constructor(name, movie) {
        this.name = name;
        this.movie = movie;
    }
}

let movieList = new List();
for (let i = 0; i < movies.length; ++i) {
    movieList.append(movies[i]);
}

let customers = new List();

let checkedOutMovies = new List();

/**
 * @param {string} name
 * @param {string} movie
 * @param {List} filmList 
 * @param {List} customerList 
 */
function checkOut(name, movie, filmList, customerList) {
    if (filmList.contains(movie)) {
        var c = new Customer(name, movie);
        customerList.append(c);
        filmList.remove(movie);
        console.log(movie + ' is checked out');
        checkedOutMovies.append(movie);
    }
    else {
        console.log(movie + ' is not available.');
    }
    showLists();
}

/**
 * @param {List} list 
 * @param {string} divID 
 */
function displayList(list, divID) {
    const divItem = document.getElementById(divID);
    if (divID) {
        let ret = '';
        for (list.front(); list.currPos() < list.length(); list.next()) {
            if (list.getElement() instanceof Customer) {
                ret += '<li>' + list.getElement().name + ', ' + list.getElement().movie + '</li>';
            }
            else {
                ret += '<li>' + list.getElement() + '</li>';
            }
        }
        divItem.innerHTML = '<ol>' + ret + '</ol>';
        return ret;
    }
}

function showLists() {
    displayList(movieList, 'movies');
    displayList(customers, 'customers');
    displayList(checkedOutMovies, 'checkedOutMovies');

    const checkoutMovieSelect = document.getElementById('checkoutMovie');
    const checkInMovieSelect = document.getElementById('checkInMovie');
    if (checkoutMovieSelect && checkInMovieSelect) {
        let ret = '';
        for (movieList.front(); movieList.currPos() < movieList.length(); movieList.next()) {
            ret += '<option value=\'' + movieList.getElement() + '\'>' + movieList.getElement() + '</option>';
        }
        checkoutMovieSelect.innerHTML = ret;

        ret = '';
        for (customers.front(); customers.currPos() < customers.length(); customers.next()) {
            ret += '<option value=\'' + customers.currPos().toString() + '\'>' + customers.getElement().name + ', ' + customers.getElement().movie + '</option>';
        }
        checkInMovieSelect.innerHTML = ret;
    }
}

// eslint-disable-next-line no-unused-vars
function checkoutMovie() {
    const customerNameInput = document.getElementById('customerName');
    const checkoutMovieInput = document.getElementById('checkoutMovie');
    if (customerNameInput && checkoutMovieInput) {
        checkOut(customerNameInput.value, checkoutMovieInput.value, movieList, customers);
    }
}

/**
 * @param {string} customerName 
 * @param {string} movie 
 * @param {number} custIndex 
 */
function checkIn(customerName, movie, custIndex) {
    console.log('customers removed', customers.removeIndex(custIndex));
    movieList.append(movie);
    checkedOutMovies.remove(movie);
}

// eslint-disable-next-line no-unused-vars
function checkInMovie() {
    const checkInMovieSelect = document.getElementById('checkInMovie');
    if (checkInMovieSelect) {
        const checkInIndex = checkInMovieSelect.value;
        customers.moveTo(checkInIndex);
        console.log();
        checkIn(customers.getElement().name, customers.getElement().movie, checkInIndex);
        showLists();
    }
}

function startup() {
    showPeople();
    console.log('personList',personList.toString());
    checkOut('Jane Doe', 'The Godfather', movieList, customers);
    checkOut('Jane Doe', 'The Godfather', movieList, customers);
}
startup();