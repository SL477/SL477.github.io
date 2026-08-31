
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

  add(key, value) {
    const h = hash(key);
    //console.log(h);
    const l = this.collection[h];
    if (l) {
      if (l[0] === key) {
        l[1] = value;
      }
      else {
        const a = [...l, key, value];
        this.collection[h] = a;
      }
    }
    else {
      this.collection[h] = [key, value];
    }
  }

  lookup(key) {
    const l = this.collection[hash(key)];
    if (l) {
      //return l[1];
      if (l.length === 2) {
        return l[1];
      }
      else {
        for (let i = 0; i < l.length; i += 2) {
          if (l[i] === key) {
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
        if (i % 2 === 0) {
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
function buildHashTable() {
  const inputText = document.getElementById('inputText');
  const wordCountDiv = document.getElementById('wordCount');

  if (inputText && wordCountDiv) {
    let wordCounter = inputText.value;
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
      const c = ht.lookup(s);
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

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('buildHashTable').addEventListener('click', buildHashTable);
})