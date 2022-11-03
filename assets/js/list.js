/* eslint-disable no-undef */
//From https://github.com/GauravWalia19/Free-Algorithms-Books/blob/master/Library/src/JAVASCRIPT/Data-Structures-%26-Algorithms-with-JavaScript.pdf

/*function List() {
    this.listSize = 0;
    this.pos = 0;
    this.dataStore = [];// uses an empty array to store list elements
    this.clear = clear;
    this.find = find;
    this.toString = toString;
    this.insert = insert;
    this.append = append;
    this.remove = remove;
    this.front = front;
    this.end = end;
    this.prev = prev;
    this.next = next;
    this.length = length;
    this.currPos = currPos;
    this.moveTo = moveTo;
    this.getElement = getElement;
    this.length = length;
    this.contains = contains;
    function append(element) {
        this.dataStore[this.listSize++] = element;
    }
    function find(element) {
        for (var i = 0; i < this.dataStore.length; ++i) {
            if (this.dataStore[i] == element) {
                return i;
            }
        }
        return -1;
    }
    function remove(element) {
        var foundAt = this.find(element);
        if (foundAt > -1) {
            this.dataStore.splice(foundAt,1);
            --this.listSize;
            return true;
        }
        return false;
    }
    function length() {
        return this.listSize;
    }
    function toString() {
        return this.dataStore;
    }
    function insert(element,after) {
        var insertPos = this.find(after);
        if (insertPos > -1) {
            this.dataStore.splice(insertPos + 1, 0, element);
            ++this.listSize;
            return true;
        }
        return false;
    }
    function clear() {
        delete this.dataStore;
        this.dataStore = [];
        this.listSize = this.pos = 0;
    }
    function contains(element) {
        for (var i = 0; i < this.dataStore.length; ++i) {
            if (this.dataStore[i] == element) {
                return true;
            }
        }
        return false;
    }
    function front() {
        this.pos = 0;
    }
    function end() {
        this.pos = this.listSize - 1;
    }
    function prev() {
        if (this.pos > 0) {
            --this.pos;
        }
    }
    function next() {
        if (this.pos < this.listSize - 1) {
            ++this.pos;
        }
    }
    function currPos() {
        return this.pos;
    }
    function moveTo(position) {
        this.pos = position;
    }
    function getElement() {
        return this.dataStore[this.pos];
    }
}*/

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
let personList = new List();
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
    $('#peopleList').empty();
    let peopleHtml = '';
    let filter = $('#gender').val();
    // eslint-disable-next-line no-unused-vars
    personList.dataStore.forEach((element, i) => {
        if (filter == 'all' || filter == element.gender) {
            peopleHtml += '<tr><td>' + element.name + '</td><td>' + element.gender + '</td></tr>';
        }
    });
    $('#peopleList').append(peopleHtml);
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

function displayList(list, $container) {
    $container.empty();
    let ret = '';
    /*for (list.front(); list.currPos() < list.listSize; list.next()) {
        if (list.getElement() instanceof Customer) {
            ret += "<li>" + list.getElement().name + ", " + list.getElement().movie + "</li>";
        }
        else {
            ret += "<li>" + list.getElement() + "</li>";
        }
    }*/
    for (list.front(); list.currPos() < list.length(); list.next()) {
        if (list.getElement() instanceof Customer) {
            ret += '<li>' + list.getElement().name + ', ' + list.getElement().movie + '</li>';
        }
        else {
            ret += '<li>' + list.getElement() + '</li>';
        }
    }
    $container.append('<ol>' + ret + '</ol>');
    return ret;

    /*$container.empty();
    let ret = "";
    list.dataStore.forEach((element) => {
        if (element instanceof Customer) {
            ret += "<li>" + element.name + ", " + element.movie + "</li>";
        }
        else {
            ret += "<li>" + element + "</li>";
        }
    });
    $container.append("<ol>" + ret + "</ol>");*/
}

function showLists() {
    displayList(movieList, $('#movies'));
    displayList(customers, $('#customers'));
    displayList(checkedOutMovies, $('#checkedoutmovies'));
    let ret = '';
    for (movieList.front(); movieList.currPos() < movieList.length(); movieList.next()) {
        ret += '<option value=\'' + movieList.getElement() + '\'>' + movieList.getElement() + '</option>';
    }
    $('#checkoutMovie').empty();
    $('#checkoutMovie').append(ret);

    ret = '';
    for (customers.front(); customers.currPos() < customers.length(); customers.next()) {
        ret += '<option value=\'' + customers.currPos().toString() + '\'>' + customers.getElement().name + ', ' + customers.getElement().movie + '</option>';
    }
    $('#checkinMovie').empty();
    $('#checkinMovie').append(ret);
}

// eslint-disable-next-line no-unused-vars
function checkoutMovie() {
    checkOut($('#customerName').val(), $('#checkoutMovie').val(), movieList, customers);
}

function checkIn(customerName, movie, custIndex) {
    // eslint-disable-next-line no-unused-vars
    let elem = new Customer(movie, customerName);
    console.log('customers removed',customers.removeIndex(custIndex));
    movieList.append(movie);
    checkedOutMovies.remove(movie);
}

// eslint-disable-next-line no-unused-vars
function checkinMovie() {
    //checkIn($().val(), $().val());
    let checkinIndex = $('#checkinMovie').val();
    customers.moveTo(checkinIndex);
    console.log();
    checkIn(customers.getElement().name, customers.getElement().movie, checkinIndex);
    showLists();
}

//ready
$(document).ready(function() {
    console.log('hi');
    
    showPeople();
    console.log('personList',personList.toString());

    checkOut('Jane Doe', 'The Godfather', movieList, customers);
    /*console.log('movies',movies);
    console.log('front', movieList.front());
    console.log('currPos', movieList.currPos());
    console.log('length', movieList.length());
    console.log('next', movieList.next());
    console.log('getElement', movieList.getElement());
    console.log('getElement name', customers.getElement().name);*/
    //console.log('displayList', displayList(movieList, $("#movies")));
    //displayList(movieList, $("#movies"));
    /*let ret = '';
    for (movieList.front(); movieList.currPos() < movieList.length(); movieList.next()) {
        if (movieList.getElement() instanceof Customer) {
            ret += "<li>" + movieList.getElement().name + ", " + movieList.getElement().movie + "</li>";
        }
        else {
            ret += "<li>" + movieList.getElement() + "</li>";
        }
    }*/
    /*while(movieList.currPos() < movieList.length()) {
        console.log(movieList.getElement());
        movieList.next();
    }*/
    //console.log('ret',ret);

    checkOut('Jane Doe', 'The Godfather', movieList, customers);
    //displayList(customers, $("#customers"));
});