/* eslint-disable no-undef */
class Nodel {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = new Nodel('head');
    }

    remove(item) {
        let prevNode = this.findPrevious(item);
        if (!(prevNode.next == null)) {
            prevNode.next = prevNode.next.next;
        }
    }

    findPrevious(item) {
        let currNode = this.head;
        while(!(currNode.next == null) && (currNode.next.element != item)) {
            currNode = currNode.next;
        }
        return currNode;
    }

    display() {
        let currNode = this.head;
        let ret = '<ol>';
        while (currNode.next) {
            console.log('element', currNode.next.element);
            ret += '<li>' + currNode.next.element + '</li>';
            currNode = currNode.next;
        }
        ret += '</ol>';
        return ret;
    }

    find(item) {
        let currNode = this.head;
        while (currNode.element != item && currNode) {
            currNode = currNode.next;
        }
        //return currNode == this.head? null : currNode;
        return currNode;
    }

    insert(newElement, item) {
        let newNode = new Nodel(newElement);
        let current = this.find(item);
        newNode.next = current.next;
        current.next = newNode;
    }

    //exercise 1
    advance(item, n) {
        //advance the item n places ahead
        let current = this.find(item);
        let prevNode = this.findPrevious(item);
        console.log('prevNode', prevNode);
        if (!(prevNode.next == null)) {
            prevNode.next = prevNode.next.next;
            prevNode.next.next = current.next.next;

            //move the nodes onwards
            let currNode = prevNode.next;
            while(n > 1 && currNode) {
                currNode = currNode.next;
                n -= 1;
            }
            let temp = currNode.next;
            currNode.next = current;
            current.next = temp;
        }
    }

    //exercise 2
    back(item, n) {
        let current = this.find(item);
        let prevNode = this.findPrevious(item);
        prevNode.next = current.next;
        //n -= 1;
        while(n > 0) {
            prevNode = this.findPrevious(prevNode.element);
            n -= 1;
        }
        let temp = prevNode.next;
        prevNode.next = current;
        current.next = temp;
    }

    //Exercise 3
    show(item) {
        let current = this.find(item);
        return 'Element: ' + current.element + ', Next: ' + current.next;
    }
}

//Exercise 1
//cities
let cities = new LinkedList();
cities.insert('Conway', 'head');
cities.insert('Russellville', 'Conway');
cities.insert('Carlise', 'Russellville');
cities.insert('Alma', 'Carlise');
$('#cities').append(cities.display());
cities.advance('Conway',2);
console.log(cities);
$('#citiesNext').append(cities.display());
cities.back('Alma', 2);
$('#citiesPrev').append(cities.display());
$('#ex3Show').text(cities.show('Alma'));

/*$( document ).load(() => {
});*/

//Exercise 4
/*let grades = new LinkedList();
let latestGrade = 'head';
function addGrade() {
    grades.insert($('#grade').val(), latestGrade);
    latestGrade = $('#grade').val();
    $('#grades').empty();
    $('#grades').append(grades.display());
}*/

//Exercise 5
class DoubleNode {
    constructor(element) {
        this.element = element;
        this.next = null;
        this.previous = null;
    }
}
class DoublyLinkedList {
    constructor() {
        this.head = new DoubleNode('head');
    }

    dispReverse() {
        let currNode = this.head;
        currNode = this.findLast();
        let ret = '<ol>';
        while (!(currNode.previous == null)) {
            ret += '<li>' + currNode.next.element + '</li>';
            currNode = currNode.previous;
        }
        ret += '</ol>';
        return ret;
    }

    remove(item) {
        let currNode = this.find(item);
        if (!(currNode.next == null)) {
            currNode.previous.next = currNode.next;
            currNode.next.previous = currNode.previous;
            currNode.next = null;
            currNode.previous = null;
        }
    }

    findLast() {
        let currNode = this.head;
        while (!(currNode.next == null)) {
            currNode = currNode.next;
        }
        return currNode;
    }

    display() {
        let currNode = this.head;
        let ret = '<ol>';
        while (currNode.next) {
            //console.log('element', currNode.next.element);
            ret += '<li>' + currNode.next.element + '</li>';
            currNode = currNode.next;
        }
        ret += '</ol>';
        return ret;
    }

    find(item) {
        let currNode = this.head;
        while (currNode.element != item && currNode) {
            currNode = currNode.next;
        }
        //return currNode == this.head? null : currNode;
        return currNode;
    }

    insert(newElement, item) {
        let newNode = new DoubleNode(newElement);
        let current = this.find(item);
        newNode.next = current.next;
        newNode.previous = current;
        current.next = newNode;
    }

    //exercise 1
    advance(item, n) {
        //advance the item n places ahead
        let current = this.find(item);
        let prevNode = this.findPrevious(item);
        console.log('prevNode', prevNode);
        if (!(prevNode.next == null)) {
            prevNode.next = prevNode.next.next;
            prevNode.next.next = current.next.next;

            //move the nodes onwards
            let currNode = prevNode.next;
            while(n > 1 && currNode) {
                currNode = currNode.next;
                n -= 1;
            }
            let temp = currNode.next;
            currNode.next = current;
            current.next = temp;
        }
    }

    //exercise 2
    back(item, n) {
        let current = this.find(item);
        let prevNode = this.findPrevious(item);
        prevNode.next = current.next;
        //n -= 1;
        while(n > 0) {
            prevNode = this.findPrevious(prevNode.element);
            n -= 1;
        }
        let temp = prevNode.next;
        prevNode.next = current;
        current.next = temp;
    }

    //Exercise 3
    show(item) {
        let current = this.find(item);
        return 'Element: ' + current.element + ', Next: ' + current.next;
    }
}

let grades = new DoublyLinkedList();
let latestGrade = 'head';
// eslint-disable-next-line no-unused-vars
function addGrade() {
    grades.insert($('#grade').val(), latestGrade);
    latestGrade = $('#grade').val();
    $('#grades').empty();
    $('#grades').append(grades.display());
}

//Exercise 6
class CirclularLinkedList {
    constructor() {
        this.head = new Nodel('head');
        this.head.next = this.head;
    }

    remove(item) {
        let prevNode = this.findPrevious(item);
        if (!(prevNode.next == null)) {
            prevNode.next = prevNode.next.next;
        }
    }

    findPrevious(item) {
        let currNode = this.head;
        while(!(currNode.next == null) && (currNode.next.element != item)) {
            currNode = currNode.next;
        }
        return currNode;
    }

    display() {
        let currNode = this.head;
        let ret = '<ol>';
        while (currNode.next && !(currNode.next.element == 'head')) {
            console.log('element', currNode.next.element);
            ret += '<li>' + currNode.next.element + ', next: ' + currNode.next.next.element + '</li>';
            currNode = currNode.next;
        }
        ret += '</ol>';
        return ret;
    }

    displayText() {
        let currNode = this.head;
        let ret = '';
        let delim = '';
        while (currNode.next && !(currNode.next.element == 'head')) {
            ret += delim + currNode.next.element;
            delim = ', ';
            currNode = currNode.next;
        }
        return ret;
    }

    total() {
        let ret = 0;
        let currNode = this.head;
        while (currNode.next && !(currNode.next.element == 'head')) {
            ret += 1;
            currNode = currNode.next;
        }
        return ret;
    }

    find(item) {
        let currNode = this.head;
        while (currNode.element != item && currNode) {
            currNode = currNode.next;
        }
        //return currNode == this.head? null : currNode;
        return currNode;
    }

    insert(newElement, item) {
        let newNode = new Nodel(newElement);
        let current = this.find(item);
        newNode.next = current.next;
        current.next = newNode;
    }

    //exercise 1
    advance(item, n) {
        //advance the item n places ahead
        let current = this.find(item);
        let prevNode = this.findPrevious(item);
        console.log('prevNode', prevNode);
        if (!(prevNode.next == null)) {
            prevNode.next = prevNode.next.next;
            prevNode.next.next = current.next.next;

            //move the nodes onwards
            let currNode = prevNode.next;
            while(n > 1 && currNode) {
                currNode = currNode.next;
                n -= 1;
            }
            let temp = currNode.next;
            currNode.next = current;
            current.next = temp;
        }
    }

    //exercise 2
    back(item, n) {
        let current = this.find(item);
        let prevNode = this.findPrevious(item);
        prevNode.next = current.next;
        //n -= 1;
        while(n > 0) {
            prevNode = this.findPrevious(prevNode.element);
            n -= 1;
        }
        let temp = prevNode.next;
        prevNode.next = current;
        current.next = temp;
    }

    //Exercise 3
    show(item) {
        let current = this.find(item);
        return 'Element: ' + current.element + ', Next: ' + current.next;
    }
}


// eslint-disable-next-line no-unused-vars
function determineSurvivors() {
    let startingNumber = Number($('#startingNumber').val());
    //ex6Show
    //ex6Ans
    let soldiers = new CirclularLinkedList();
    let last = 'head';
    for (let i = 0; i < startingNumber; i++) {
        soldiers.insert(i.toString(), last);
        last = i.toString();
    }
    $('#ex6Show').empty();
    $('#ex6Show').append(soldiers.display());

    //everymth
    let everymth = Number($('#everymth').val());
    //let total = 
    let currNode = soldiers.head;
    let j = 0;
    while (soldiers.total() >= everymth && soldiers.total() > 0 && j < 1000) {
        let n = everymth;
        let removeNode = currNode;
        while ((n > 0 || removeNode.element == 'head') && j < 1000) {
            removeNode = removeNode.next;
            n -= 1;
            j += 1;
        }
        currNode = removeNode.next;
        soldiers.remove(removeNode.element);
    }
    console.log(j);
    $('#ex6Show').empty();
    $('#ex6Show').append(soldiers.display());
    $('#ex6Ans').text(soldiers.displayText());
}