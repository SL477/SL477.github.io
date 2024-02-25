
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
        Object.keys(this.datastore).forEach(() => {
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

/**
 * @param {string} textAreaID 
 * @returns {string}
 */
function GetTextAreaValue(textAreaID) {
    const textAreaItem = document.getElementById(textAreaID);
    if (textAreaItem) {
        return textAreaItem.value;
    }
    return "";
}

/**
 * @param {string} divID 
 * @param {string} setHtml 
 */
function SetDivHtml(divID, setHtml) {
    const divItem = document.getElementById(divID);
    if (divItem) {
        divItem.innerHTML = setHtml;
    }
}

// eslint-disable-next-line no-unused-vars
function phoneDictionary() {
    let phoneNames = GetTextAreaValue("phoneNames");
    console.log('phoneNames',phoneNames);
    const PD = new Dictionary();
    phoneNames.split('\n').forEach(s => {
        console.log('s',s);
        let p = s.split(',');
        PD.add(p[0],p[1]);
    });
    SetDivHtml("phoneDictAns", '<ul>' + PD.showAll() + '</ul>')
}

// eslint-disable-next-line no-unused-vars
function wordCounterDict() {
    let wordCounter = GetTextAreaValue("wordCounter");
    // eslint-disable-next-line no-useless-escape
    wordCounter = wordCounter.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
    wordCounter = wordCounter.toLowerCase();
    console.log('wordCounter', wordCounter);
    const dict = new Dictionary();
    wordCounter.split(' ').forEach(s => {
        let c = dict.find(s);
        if (c) {
            dict.add(s, c + 1);
        }
        else {
            dict.add(s, 1);
        }
    });
    SetDivHtml("wordCountAns", '<ul>' + dict.showAll() + '</ul>');
}