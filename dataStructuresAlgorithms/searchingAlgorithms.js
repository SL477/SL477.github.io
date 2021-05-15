//Sequential Search
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

let nums = [];
let nums2 = [];
let nums3 = [];

$( document ).ready(() => {
    $('#searchDiv').append('<h2>Sequential Search</h2>');
    
    for (let i = 0; i < 100; i++) {
        nums[i] = Math.floor(Math.random() * 101);
    }
    $('#searchDiv').append(displayArray(nums));
    $('#searchDiv').append('<p>The minimum value is: ' + findMinimum(nums) + '</p>');
    $('#searchDiv').append('<p>The maximum value is: ' + findMaximum(nums) + '</p>');

    //self sorting
    
    for (let i = 0; i < 10; i++) {
        nums2[i] = Math.floor(Math.random() * 11);
    }
    $('#selfSort').append(displayArray(nums2));

    for (let i = 0; i < 100; i++) {
        nums3[i] = Math.floor(Math.random() * 101);
    }
    insertionSort(nums3);
    $('#binArr').append(displayArray(nums3));

    let words = "the quick brown fox jumped over the lazy dog";
    let wordArr = words.split(' ');
    $('#wordSearch').append('<p>' + wordArr + '</p>');
    $('#wordSearch').append('<p>Find fox at position ' + sequentialSearch(wordArr,'fox') + '</p>');
});

function seqSeach() {
    let searchNum = Number($('#seqSearchNum').val());
    //console.log('searchNum',searchNum,nums);
    $('#seqSearchRes').text(sequentialSearch(nums, searchNum));
}

function seqSearchReverse() {
    //Exercise 1
    let searchNum = Number($('#seqSearchNum').val());
    $('#seqSearchRes').text(sequentialSearchReverse(nums, searchNum));
}

function seqSeach1() {
    let searchNum = Number($('#seqSearchNum1').val());
    //console.log('searchNum',searchNum,nums);
    $('#seqSearchRes1').text(sequentialSearchSelfOrganizing(nums2, searchNum));
    $('#selfSort').empty();
    $('#selfSort').append(displayArray(nums2));
}

//Binary search
function binSearcher(arr, data) {
    let upperBound = arr.length - 1;
    let lowerBound = 0;
    while (lowerBound <= upperBound) {
        let mid = Math.floor((upperBound + lowerBound) / 2);
        console.log('Current Midpoint',mid);
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

function binSeach() {
    let searchNum = Number($('#binSearchNum').val());
    $('#binSearchRes').text(binSearcher(nums3, searchNum));
    $('#binCount').text(count(nums3, searchNum));
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

//count sorted data
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
    console.log('count',count);
    return count;
}

function compareTimings() {
    //Exercise 2
    //compare timings of sequential search and binary search on nums
    let searchNum = Number($('#seqSearchNum').val());
    let start = new Date().getTime();
    let seqRes = sequentialSearch(nums, searchNum);
    let end = new Date().getTime();
    $('#seqSearchRes').text(seqRes);
    $('#seqSearchTiming').text(end - start);
    //binary search
    let binNumsArr = [...nums];
    start = new Date().getTime();
    insertionSort(binNumsArr);
    seqRes = binSearcher(binNumsArr, searchNum);
    end = new Date().getTime();
    $('#binSearchTiming').text(end - start);
}

//Exersise 3
//Find smallest element in dataset, generalise to any other position
class Minset {
    constructor(arr) {
        this.datastore = [];
        let newArr = [...arr];
        insertionSort(newArr);
        for (let i = 0; i < newArr.length; i++) {
            if (this.datastore.indexOf(newArr[i]) == -1) {
                this.datastore.push(newArr[i]);
            }
        }
    }
}

function nthSmallestElement(arr, n) {
    let s = new Minset(arr);
    if (n > -1 && n < s.datastore.length) {
        return  s.datastore[n];
    }
    else {
        return "Invalid N";
    }
}

function minSeach() {
    let posSearch = Number($('#minSearch').val());
    let num1k = [];
    for (let i = 0; i < 1000; i++) {
        num1k.push(Math.floor(Math.random() * 1001));
    }
    $('#minSearchRes').text(nthSmallestElement(num1k, posSearch));

    let words = "the quick brown fox jumped over the lazy dog";
    let wordArr = words.split(' ');
    $('#minWordSearchRes').text(nthSmallestElement(wordArr, posSearch));
}