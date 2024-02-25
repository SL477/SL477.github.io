
// Sequential Search
function sequentialSearch(arr, data) {
    for (let i = 0; i < arr.length; ++i) {
        if (arr[i] == data) {
            return i;
        }
    }
    return -1;
}

function sequentialSearchReverse(arr, data) {
    for (let i = arr.length - 1; i > -1; i--) {
        if (arr[i] == data) {
            return i;
        }
    }
    return -1;
}

function sequentialSearchSelfOrganizing(arr, data) {
    for (let i = 0; i < arr.length; ++i) {
        if (arr[i] == data) {
            /*if (i > 0) {
                swap(arr, i, i - 1);
            }*/
            if (i > arr.length * 0.2) {
                swap(arr, i, 0);
            }
            return true;
        }
    }
    return false;
}

function swap(arr, index, index1) {
    let temp = arr[index];
    arr[index] = arr[index1];
    arr[index1] = temp;
}

function displayArray(arr) {
    let ret = '<div><p>';
    for (let i = 0; i < arr.length; ++i) {
        ret += arr[i] + ' ';
        if (i % 10 == 0 && i > 0) {
            ret += '</p><p>';
        }
    }
    return ret + '</p></div>';
}

function findMinimum(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; ++i) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

function findMaximum(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; ++i) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

let numbers = [];
let numbers2 = [];
let numbers3 = [];

function startUp() {
    const searchDiv = document.getElementById('searchDiv');
    const selfSortDiv = document.getElementById('selfSort');
    const binArrDiv = document.getElementById('binArr');
    const wordSearchDiv = document.getElementById('wordSearch');
    if (searchDiv && selfSortDiv && binArrDiv && wordSearchDiv) {
        searchDiv.innerHTML = '<h2>Sequential Search</h2>';
        
        for (let i = 0; i < 100; i++) {
            numbers[i] = Math.floor(Math.random() * 101);
        }
        searchDiv.innerHTML += displayArray(numbers);
        searchDiv.innerHTML += '<p>The minimum value is: ' + findMinimum(numbers) + '</p>';
        searchDiv.innerHTML +='<p>The maximum value is: ' + findMaximum(numbers) + '</p>';

        //self sorting
        
        for (let i = 0; i < 10; i++) {
            numbers2[i] = Math.floor(Math.random() * 11);
        }
        selfSortDiv.innerHTML += displayArray(numbers2);

        for (let i = 0; i < 100; i++) {
            numbers3[i] = Math.floor(Math.random() * 101);
        }
        insertionSort(numbers3);
        binArrDiv.innerHTML += displayArray(numbers3);

        const words = 'the quick brown fox jumped over the lazy dog';
        const wordArr = words.split(' ');
        wordSearchDiv.innerHTML += '<p>' + wordArr + '</p>';
        wordSearchDiv.innerHTML += '<p>Find fox at position ' + sequentialSearch(wordArr,'fox') + '</p>';
    }
}
startUp();

// eslint-disable-next-line no-unused-vars
function seqSearch() {
    const seqSearchNumInput = document.getElementById('seqSearchNum');
    const seqSearchResSpan = document.getElementById('seqSearchRes');
    if (seqSearchNumInput && seqSearchResSpan) {
        const searchNum = Number(seqSearchNumInput.value);
        //console.log('searchNum',searchNum,numbers);
        seqSearchResSpan.textContent = sequentialSearch(numbers, searchNum);
    }
}

// eslint-disable-next-line no-unused-vars
function seqSearchReverse() {
    // Exercise 1
    const seqSearchNumInput = document.getElementById('seqSearchNum');
    const seqSearchResSpan = document.getElementById('seqSearchRes');
    if (seqSearchNumInput && seqSearchResSpan) {
        const searchNum = Number(seqSearchNumInput.value);
        seqSearchResSpan.textContent = sequentialSearchReverse(numbers, searchNum);
    }
}

// eslint-disable-next-line no-unused-vars
function seqSearch1() {
    const seqSearchNum1Input = document.getElementById('seqSearchNum1');
    const seqSearchRes1Span = document.getElementById('seqSearchRes1');
    const selfSortDiv = document.getElementById('selfSort');
    if (seqSearchNum1Input && seqSearchRes1Span && selfSortDiv) {
        const searchNum = Number(seqSearchNum1Input.value);
        seqSearchRes1Span.textContent = sequentialSearchSelfOrganizing(numbers2, searchNum);
        selfSortDiv.innerHTML = displayArray(numbers2);
    }
}

// Binary search
function binSearcher(arr, data) {
    let upperBound = arr.length - 1;
    let lowerBound = 0;
    let cnt = 1000;
    while (lowerBound <= upperBound && cnt > 0) {
        cnt -= 1;
        let mid = Math.floor((upperBound + lowerBound) / 2);
        console.log('Current Midpoint', mid);
        if (arr[mid] < data) {
            lowerBound = mid + 1;
        }
        else if (arr[mid] > data) {
            upperBound = mid + 1;
        }
        else {
            return mid;
        }
    }
    return -1;
}

// eslint-disable-next-line no-unused-vars
function binSearch() {
    const binSearchNumInput = document.getElementById('binSearchNum');
    const binSearchResSpan = document.getElementById('binSearchRes');
    const binCountSpan = document.getElementById('binCount');
    if (binSearchNumInput) {
        const searchNum = Number(binSearchNumInput.value);
        binSearchResSpan.textContent = binSearcher(numbers3, searchNum);
        binCountSpan.textContent = count(numbers3, searchNum);
    }
}

function insertionSort(arr) {
    let inner;
    let temp;
    for (let outer = 1; outer <= arr.length - 1; ++outer) {
        temp = arr[outer];
        inner = outer;
        while (inner > 0 && (arr[inner - 1] >= temp)) {
            arr[inner] = arr[inner - 1];
            --inner;
        }
        arr[inner] = temp;
    }
}

// count sorted data
function count(arr, data) {
    let count = 0;
    let position = binSearcher(arr, data);
    if (position > -1) {
        ++count;
        for (let i = position - 1; i > 0; --i) {
            if (arr[i] == data) {
                ++count;
            }
            else {
                break;
            }
        }
        for (let i = position + 1; i < arr.length; ++i) {
            if (arr[i] == data) {
                ++count;
            }
            else {
                break;
            }
        }
    }
    console.log('count', count);
    return count;
}

// eslint-disable-next-line no-unused-vars
function compareTimings() {
    // Exercise 2
    // compare timings of sequential search and binary search on numbers
    const seqSearchNumInput = document.getElementById('seqSearchNum');
    const seqSearchResSpan = document.getElementById('seqSearchRes');
    const seqSearchTimingSpan = document.getElementById('seqSearchTiming');
    const binSearchTimingSpan = document.getElementById('binSearchTiming');
    if (seqSearchNumInput && seqSearchResSpan && seqSearchTimingSpan) {
        const searchNum = Number(seqSearchNumInput.value);
        let start = new Date().getTime();
        let seqRes = sequentialSearch(numbers, searchNum);
        let end = new Date().getTime();
        seqSearchResSpan.textContent = seqRes;
        seqSearchTimingSpan.textContent = end - start;
        // binary search
        const binNumbersArr = [...numbers];
        start = new Date().getTime();
        insertionSort(binNumbersArr);
        seqRes = binSearcher(binNumbersArr, searchNum);
        end = new Date().getTime();
        binSearchTimingSpan.textContent = end - start;
    }
}

// Exercise 3
// Find smallest element in dataset, generalise to any other position
class MinSet {
    constructor(arr) {
        this.datastore = [];
        const newArr = [...arr];
        insertionSort(newArr);
        for (let i = 0; i < newArr.length; i++) {
            if (this.datastore.indexOf(newArr[i]) == -1) {
                this.datastore.push(newArr[i]);
            }
        }
    }
}

function nthSmallestElement(arr, n) {
    const s = new MinSet(arr);
    if (n > -1 && n < s.datastore.length) {
        return  s.datastore[n];
    }
    else {
        return 'Invalid N';
    }
}

// eslint-disable-next-line no-unused-vars
function minSearch() {
    const minSearchInput = document.getElementById('minSearch');
    const minSearchResSpan = document.getElementById('minSearchRes');
    const minWordSearchResSpan = document.getElementById('minWordSearchRes');
    if (minSearchInput) {
        const posSearch = Number(minSearchInput.value);
        const num1k = [];
        for (let i = 0; i < 1000; i++) {
            num1k.push(Math.floor(Math.random() * 1001));
        }
        minSearchResSpan.textContent = nthSmallestElement(num1k, posSearch);

        const words = 'the quick brown fox jumped over the lazy dog';
        const wordArr = words.split(' ');
        minWordSearchResSpan.textContent = nthSmallestElement(wordArr, posSearch);
    }
}