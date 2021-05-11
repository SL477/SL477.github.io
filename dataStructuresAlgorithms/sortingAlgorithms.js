//Testing bed
class CArray {
    constructor(numElements) {
        this.dataStore = [];
        this.pos = 0;
        this.numElements = numElements;

        for (let i = 0; i < numElements; ++i) {
            this.dataStore[i] = i;
        }
    }

    setData() {
        for (let i = 0; i < this.numElements; ++i) {
            this.dataStore[i] = Math.floor(Math.random() * (this.numElements + 1));
        }
    }

    clear() {
        for (let i = 0; i < this.dataStore.length; ++i) {
            this.dataStore[i] = 0;
        }
    }

    insert(element) {
        this.dataStore[this.pos++] = element;
    }

    toString() {
        let retstr = '<p>';
        for (let i = 0; i < this.dataStore.length; ++i) {
            retstr += this.dataStore[i] + ' ';
            if (i > 0 && i % 10 == 0) {
                retstr += '</p><p>';
            }
        }
        retstr += '</p>';
        return retstr;
    }

    swap(arr, index1, index2) {
        let temp = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = temp;
    }

    //bubbleSort
    bubbleSort() {
        let ret = '';
        let numElements = this.dataStore.length;
        for (let outer = numElements; outer >= 2; --outer) {
            for (let inner = 0; inner <= outer - 1; ++inner) {
                if (this.dataStore[inner] > this.dataStore[inner + 1]) {
                    this.swap(this.dataStore, inner, inner + 1);
                }
            }
            ret += this.toString();
        }
        return ret;
    }

    //selection sort
    selectionSort() {
        let ret = '';
        let min;
        for (let outer = 0; outer <= this.dataStore.length - 2; ++outer) {
            min = outer;
            for (let inner = outer + 1; inner <= this.dataStore.length - 1; ++inner) {
                if (this.dataStore[inner] < this.dataStore[min]) {
                    min = inner;
                }
            }
            this.swap(this.dataStore, outer, min);
            ret += this.toString();
        }
        return ret;
    }

    //Insertion sort
    insertionSort() {
        let inner;
        let temp;
        let ret = '';
        for (let outer = 1; outer <= this.dataStore.length - 1; ++outer) {
            temp = this.dataStore[outer];
            inner = outer;
            while (inner > 0 && (this.dataStore[inner - 1] >= temp)) {
                this.dataStore[inner] = this.dataStore[inner - 1];
                --inner;
            }
            this.dataStore[inner] = temp;
            ret += this.toString()
        }
        return ret;
    }
}

$( document ).ready(() => {
    let myNums = new CArray(10);
    myNums.setData();
    $('#testCArray').append('<h4>Unsorted</h4>' + myNums.toString());
    $('#testCArray').append('<h4>Intermediate Sorting</h4>' + myNums.bubbleSort());
    $('#testCArray').append('<h4>Bubble Sorted</h4>' + myNums.toString());

    let selNums = new CArray(10);
    selNums.setData();
    $('#testCArray').append('<h4>Unsorted</h4>' + selNums.toString());
    $('#testCArray').append('<h4>Intermediate Sorting</h4>' + selNums.selectionSort());
    $('#testCArray').append('<h4>Selection Sorted</h4>' + selNums.toString());

    let insNums = new CArray(10);
    insNums.setData();
    $('#testCArray').append('<h4>Unsorted</h4>' + insNums.toString());
    $('#testCArray').append('<h4>Intermediate Sorting</h4>' + insNums.insertionSort());
    $('#testCArray').append('<h4>Insertion Sorted</h4>' + insNums.toString());
});