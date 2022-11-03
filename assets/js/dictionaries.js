/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
class Dictionary {
    constructor() {
        this.datastore = new Array();
    }

    add(key, value) {
        this.datastore[key] = value;
    }

    find(key) {
        return this.datastore[key];
    }

    remove(key) {
        delete this.datastore[key];
    }

    showAll() {
        let ret = '';
        Object.keys(this.datastore).sort().forEach(key => {
            ret += '<li>' + key + ' -> ' + this.datastore[key] + '</li>';
        });
        return ret;
    }

    count() {
        let n = 0;
        // eslint-disable-next-line no-unused-vars
        Object.keys(this.datastore).forEach(key => {
            ++n;
        });
        return n;
    }

    clear() {
        Object.keys(this.datastore).forEach(key => {
            delete this.datastore[key];
        });
    }
}

function phoneDictionary() {
    let phonenames = $('#phonenames').val();
    console.log('phonenames',phonenames);
    let PD = new Dictionary();
    phonenames.split('\n').forEach(s => {
        console.log('s',s);
        let p = s.split(',');
        PD.add(p[0],p[1]);
    });
    $('#phoneDictAns').append('<ul>' + PD.showAll() + '</ul>');
}

function wordCounterDict() {
    let wordcounter = $('#wordcounter').val();
    // eslint-disable-next-line no-useless-escape
    wordcounter = wordcounter.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
    wordcounter = wordcounter.toLowerCase();
    console.log('wordcounter',wordcounter);
    let dict = new Dictionary();
    wordcounter.split(' ').forEach(s => {
        let c = dict.find(s);
        if (c) {
            dict.add(s, c + 1);
        }
        else {
            dict.add(s, 1);
        }
    });
    $('#wordCountAns').append('<ul>' + dict.showAll() + '</ul>');
}