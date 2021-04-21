class Set {
    constructor() {
        this.dataStore = [];
    }

    contains(data) {
        if (this.dataStore.indexOf(data) > -1) {
            return true;
        }
        return false;
    }

    add(data) {
        if (!this.contains(data)) {
            this.dataStore.push(data);
            this.dataStore.sort();
            return true;
        }
        return false;
    }

    remove(data) {
        let pos = this.dataStore.indexOf(data);
        if (pos > -1) {
            this.dataStore.splice(pos, 1);
            return true;
        }
        return false;
    }

    show() {
        let ret = '<ul>';
        this.dataStore.forEach(s => {
            ret += '<li>' + s + '</li>';
        });
        return ret + '</ul>';
    }

    union(otherSet) {
        let tempSet = new Set();
        this.dataStore.forEach(s => {
            tempSet.add(s);
        });
        otherSet.dataStore.forEach(s => {
            tempSet.add(s);
        });
        return tempSet;
    }

    intersect(otherSet) {
        let tempSet = new Set();
        this.dataStore.forEach(s => {
            if (otherSet.contains(s)) {
                tempSet.add(s);
            }
        });
        return tempSet;
    }

    size() {
        return this.dataStore.length;
    }

    subset(otherSet) {
        if (this.size() > otherSet.size()) {
            return false;
        }
        this.dataStore.forEach(member => {
            if (!otherSet.contains(member)) {
                return false;
            }
        });
        return true;
    }

    difference(otherSet) {
        let tempSet = new Set();
        this.dataStore.forEach(member => {
            if (!otherSet.contains(member)) {
                tempSet.add(member);
            }
        });
        return tempSet;
    }

    higher(element) {
        /*for (let i = 0; i < this.size(); i++) {
            if (this.dataStore[i] > element) {
                return this.dataStore[i];
            }
        }*/
        let ind = this.dataStore.indexOf(element);
        if (ind > 0 && ind < this.size() - 1) {
            return this.dataStore[ind + 1];
        }
    }

    lower(element) {
        let ind = this.dataStore.indexOf(element);
        if (ind > 0) {
            return this.dataStore[ind - 1];
        }
    }
}

//Exercise 1
let one = new Set();
function createSet() {
    let inp = $('#txtInput').val();
    inp.split('').forEach(s => {
        one.add(s);
    });
    $('#ex1').empty();
    $('#ex1').append(one.show());
}

//Exercise 3
function getGreater() {
    let inp = $('#higherElem').val();
    $('#greaterResult').text(one.higher(inp));
}

//Exercise 4
function getLower() {
    let inp = $('#lowerElem').val();
    $('#lowerResult').text(one.lower(inp));
}