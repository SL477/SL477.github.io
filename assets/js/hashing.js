
/*class HashTable {
    constructor() {
        this.table = new Array(137);
    }
    simpleHash(data) {
        let total = 0;
        for (let i = 0; i < data.length; ++i) {
            total += data.charCodeAt(i);
        }
        return total % this.table.length;
    }
    put(key, data) {
        //let pos = this.simpleHash(data);
        let pos = this.betterHash(key);
        let index = 0;
        if (!this.table[pos] || this.table[pos][index] == undefined) {
            this.table[pos][index] = data;
            ++index;
        }
        else {
            ++index;
            while(this.table[pos][index] != undefined) {
                ++index;
            }
            this.table[pos][index] = data;
        }
    }
    showDistro() {
        let n = 0;
        let ret = '';
        for (let i = 0; i < this.table.length; ++i) {
            if (this.table[i] != undefined) {
                ret += '<li>' + i + ': ' + this.table[i] + '</li>';
            }
        }
        return ret;
    }
    betterHash(str) {
        const H = 37;
        let total = 0;
        for (let i = 0; i < str.length; ++i) {
            total += H * total + str.charCodeAt(i);
        }
        total = total % this.table.length;
        if (total < 0) {
            total += this.table.length - 1;
        }
        return parseInt(total);
    }
    get(key) {
        //return this.table[this.betterHash(key)];
        let ind = 0;
        let pos = this.betterHash(key);
        console.log('pos', pos);
        console.log('table pos', this.table[pos]);
        if (this.table[pos] && this.table[pos][ind] == key) {
            return this.table[pos][ind + 1];
        }
        else {
            //ind += 2;
            while (this.table[pos] && this.table[pos][ind] != key) {
                ind += 2;
            }
            if (this.table[pos]){
                return this.table[pos][ind + 1];
            }
        }
        return undefined;
    }
    buildChains() {
        for (let i = 0; i < this.table.length; ++i) {
            this.table[i] = new Array();
        }
    }
}
class HashTableLinearProbing {
    constructor() {
        this.table = new Array(137);
        this.values = [];
    }
    simpleHash(data) {
        let total = 0;
        for (let i = 0; i < data.length; ++i) {
            total += data.charCodeAt(i);
        }
        return total % this.table.length;
    }
    put(key, data) {
        let pos = this.betterHash(key);
        if (this.table[pos] == undefined) {
            this.table[pos] = key;
            this.values[pos] = data;
        }
        else {
            while (this.table[pos] != undefined) {
                pos++;
            }
            this.table[pos] = key;
            this.values[pos] = data; 
        }
    }
    showDistro() {
        let n = 0;
        let ret = '';
        for (let i = 0; i < this.table.length; ++i) {
            if (this.table[i] != undefined) {
                ret += '<li>' + i + ': ' + this.table[i] + '</li>';
            }
        }
        return ret;
    }
    betterHash(str) {
        const H = 37;
        let total = 0;
        for (let i = 0; i < str.length; ++i) {
            total += H * total + str.charCodeAt(i);
        }
        total = total % this.table.length;
        if (total < 0) {
            total += this.table.length - 1;
        }
        return parseInt(total);
    }
    get(key) {
        //return this.table[this.betterHash(key)];
        let hash = -1;
        hash = this.betterHash(key);
        if (hash > -1) {
            for (let i = hash; this.table[hash] != undefined; i++) {
                if (this.table[hash] == key) {
                    return this.values[hash];
                }
            }
        }
        return undefined;
    }
    buildChains() {
        for (let i = 0; i < this.table.length; ++i) {
            this.table[i] = new Array();
        }
    }
}*/


// var called = 0;
var hash = string => {
    // called++;
    var hashed = 0;
    for (var i = 0; i < string.length; i++) {
        hashed += string.charCodeAt(i);
    }
    return hashed;
};
/*var HashTable = function() {
  this.collection = {};
  // Only change code below this line
  // Only change code above this line
};*/
class HashTable {
    constructor() {
        this.collection = {};
    }

    add(key,value) {
        let h = hash(key);
        //console.log(h);
        let l = this.collection[h];
        if (l) {
            if (l[0] == key) {
                l[1] = value;
            }
            else {
                let a = [...l,key, value];
                this.collection[h] = a;
            }
        }
        else {
            this.collection[h] = [key,value];
        }
    }

    lookup(key) {
        let l = this.collection[hash(key)];
        if (l) {
            //return l[1];
            if (l.length == 2) {
                return l[1];
            }
            else {
                for (let i = 0; i < l.length; i += 2) {
                    if (l[i] == key) {
                        return l[i + 1];
                    }
                }
            }
        }
        return null;
    }

    remove(key) {
        delete this.collection[hash(key)];
    }

    show() {
        let ret = '';
        Object.keys(this.collection).forEach(arr => {
            for (let i = 0; i < arr.length; i++) {
                if (i % 2 == 0) {
                    ret += '<li>' + arr[i] + ': ';
                }
                else {
                    ret += arr[i] + '</li>';
                }
            }
        });
        return ret;
    }
}

//Exercise 3
// eslint-disable-next-line no-unused-vars
function buildHashTable() {
    const inputText = document.getElementById("inputText");
    const wordCountDiv = document.getElementById("wordCount");

    if (inputText && wordCountDiv) 
        {
        let wordCounter = inputText.value;
        // eslint-disable-next-line no-useless-escape
        wordCounter = wordCounter.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
        wordCounter = wordCounter.toLowerCase();
        console.log('wordCounter', wordCounter);

        const ht = new HashTable();
        wordCounter.split(' ').forEach(s => {
            /*let c = ht.get(s);
            if (c) {
                ht.put(s, c + 1);
            }
            else {
                ht.put(s, 1);
            }*/
            let c = ht.lookup(s);
            if (c) {
                ht.add(s, c + 1);
            }
            else {
                ht.add(s, 1);
            }
        });
        console.log(ht.collection);
        //$('#wordCount').append(ht.showDistro());
        wordCountDiv.innerHTML = ht.show();
    }
}