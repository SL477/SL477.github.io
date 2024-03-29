
// Testing bed
class CArray {
    constructor(numElements) {
        this.dataStore = [];
        this.pos = 0;
        this.numElements = numElements;

        for (let i = 0; i < numElements; ++i) {
            this.dataStore[i] = i;
        }

        this.gaps = [5,3,1];
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
        let ret = '<p>';
        for (let i = 0; i < this.dataStore.length; ++i) {
            ret += this.dataStore[i] + ' ';
            if (i > 0 && i % 10 == 0) {
                ret += '</p><p>';
            }
        }
        ret += '</p>';
        return ret;
    }

    swap(arr, index1, index2) {
        const temp = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = temp;
    }

    // bubbleSort
    bubbleSort() {
        let ret = '';
        const numElements = this.dataStore.length;
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

    // selection sort
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

    // Insertion sort
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
            ret += this.toString();
        }
        return ret;
    }

    //Shell Sort
    setGaps(arr) {
        this.gaps = arr;
    }

    shellSort() {
        let ret = '';
        for (let g = 0; g < this.gaps.length; ++g) {
            for (let i = this.gaps[g]; i < this.dataStore.length; ++i) {
                let temp = this.dataStore[i];
                let j;
                for (j = i; j >= this.gaps[g] && this.dataStore[j - this.gaps[g]] > temp; j -= this.gaps[g]) {
                    this.dataStore[j] = this.dataStore[j - this.gaps[g]];
                }
                this.dataStore[j] = temp;
                ret += this.toString();
            }
        }
        return ret;
    }

    shellSort1() {
        let ret = '';
        let N = this.dataStore.length;
        let h = 1;
        while (h < N / 3) {
            h = 3 * h + 1;
        }
        while (h >= 1) {
            for (let i = h; i < N; i++) {
                for (let j = i; j >= h && this.dataStore[j] < this.dataStore[j - h]; j -= h) {
                    this.swap(this.dataStore, j, j - h);
                    ret += this.toString();
                }
            }
            h = (h - 1) / 3;
        }
        return ret;
    }

    mergeSort() {
        if (this.dataStore.length < 2) {
            return;
        }
        let step = 1;
        let left, right;
        while (step < this.dataStore.length) {
            left = 0;
            right = step;
            while (right + step <= this.dataStore.length) {
                this.mergeArrays(this.dataStore, left, left + step, right, right + step);
                left = right + step;
                right = left + step;
            }
            if (right < this.dataStore.length) {
                this.mergeArrays(this.dataStore, left, left + step, right, this.dataStore.length);
            }
            step *= 2;
        }
    }

    mergeArrays(arr, startLeft, stopLeft, startRight, stopRight) {
        const rightArr = new Array(stopRight - startRight + 1);
        const leftArr = new Array(stopLeft - startLeft + 1);
        let k = startRight;
        for (let i = 0; i < (rightArr.length - 1); ++i) {
            rightArr[i] = arr[k];
            ++k;
        }
        k = startLeft;
        for (let i = 0; i < (leftArr.length - 1); ++i) {
            leftArr[i] = arr[k];
            ++k;
        }

        rightArr[rightArr.length - 1] = Infinity; //a sentinel value
        leftArr[leftArr.length - 1] = Infinity;
        let m = 0;
        let n = 0;
        for (k = startLeft; k < stopRight; ++k) {
            if (leftArr[m] <= rightArr[n]) {
                arr[k] = leftArr[m];
                m++;
            }
            else {
                arr[k] = rightArr[n];
                n++;
            }
        }
        console.log('left array - ', leftArr);
        console.log('right array - ', rightArr);
    }

    // Quick Sort
    qSort(list) {
        if (list.length == 0) {
            return [];
        }
        let lesser = [];
        let greater = [];
        let pivot = list[0];
        for (let i = 1; i < list.length; i++) {
            if (list[i] < pivot) {
                lesser.push(list[i]);
            }
            else {
                greater.push(list[i]);
            }
        }
        return this.qSort(lesser).concat(pivot, this.qSort(greater));
    }
}

function startUp() {
    const myNumbers = new CArray(10);
    myNumbers.setData();
    const testCArrayDiv = document.getElementById('testCArray');
    if (testCArrayDiv) {
        let start = new Date().getTime();
        testCArrayDiv.innerHTML += '<h4>Unsorted</h4>' + myNumbers.toString();
        testCArrayDiv.innerHTML += '<h4>Intermediate Sorting</h4>' + myNumbers.bubbleSort();
        testCArrayDiv.innerHTML += '<h4>Bubble Sorted</h4>' + myNumbers.toString();
        let stop = new Date().getTime();
        let elapsed = stop - start;
        testCArrayDiv.innerHTML += '<p>Elapsed time ' + elapsed + ' milliseconds<p>';

        const selNumbers = new CArray(10);
        selNumbers.setData();
        start = new Date().getTime();
        testCArrayDiv.innerHTML += '<h4>Unsorted</h4>' + selNumbers.toString();
        testCArrayDiv.innerHTML += '<h4>Intermediate Sorting</h4>' + selNumbers.selectionSort();
        testCArrayDiv.innerHTML += '<h4>Selection Sorted</h4>' + selNumbers.toString();
        stop = new Date().getTime();
        elapsed = stop - start;
        testCArrayDiv.innerHTML += '<p>Elapsed time ' + elapsed + ' milliseconds<p>';

        const insNumbers = new CArray(10);
        insNumbers.setData();
        start = new Date().getTime();
        testCArrayDiv.innerHTML += '<h4>Unsorted</h4>' + insNumbers.toString();
        testCArrayDiv.innerHTML += '<h4>Intermediate Sorting</h4>' + insNumbers.insertionSort();
        testCArrayDiv.innerHTML += '<h4>Insertion Sorted</h4>' + insNumbers.toString();
        stop = new Date().getTime();
        elapsed = stop - start;
        testCArrayDiv.innerHTML += '<p>Elapsed time ' + elapsed + ' milliseconds<p>';

        const shellNumbers = new CArray(10);
        shellNumbers.setData();
        start = new Date().getTime();
        testCArrayDiv.innerHTML += '<h4>Unsorted</h4>' + shellNumbers.toString();
        testCArrayDiv.innerHTML += '<h4>Intermediate Sorting</h4>' + shellNumbers.shellSort();
        testCArrayDiv.innerHTML += '<h4>Shell Sorted</h4>' + shellNumbers.toString();
        stop = new Date().getTime();
        elapsed = stop - start;
        testCArrayDiv.innerHTML += '<p>Elapsed time ' + elapsed + ' milliseconds<p>';

        const shellNumbers1 = new CArray(10);
        shellNumbers1.setData();
        start = new Date().getTime();
        testCArrayDiv.innerHTML += '<h4>Unsorted</h4>' + shellNumbers1.toString();
        testCArrayDiv.innerHTML += '<h4>Intermediate Sorting</h4>' + shellNumbers1.shellSort1();
        testCArrayDiv.innerHTML += '<h4>Shell Sorted v2</h4>' + shellNumbers1.toString();
        stop = new Date().getTime();
        elapsed = stop - start;
        testCArrayDiv.innerHTML += '<p>Elapsed time ' + elapsed + ' milliseconds<p>';

        const mergeNumbers = new CArray(10);
        mergeNumbers.setData();
        testCArrayDiv.innerHTML += '<h4>Unsorted</h4>' + mergeNumbers.toString();
        mergeNumbers.mergeSort();
        testCArrayDiv.innerHTML += '<h4>Merge Sorted</h4>' + mergeNumbers.toString();

        const quickNumbers = new CArray(100);
        quickNumbers.setData();
        testCArrayDiv.innerHTML += '<h3>Quick Sort</h3><h4>Unsorted</h4>' + quickNumbers.toString();
        quickNumbers.dataStore = quickNumbers.qSort(quickNumbers.dataStore);
        testCArrayDiv.innerHTML += '<h4>Quick Sorted</h4>' + quickNumbers.toString();

        //Exercise 1
        // Bubble sorted
        testCArrayDiv.innerHTML += '<h2>Exercise 1</h2><h3>Bubble Sorting - unsorted</h3>';
        const letterArray = ['f','e','a','v','o','e','q','c','a','l','e'];
        start = new Date().getTime();
        const strBubble = new CArray(letterArray.length);
        strBubble.dataStore = [...letterArray];
        testCArrayDiv.innerHTML += strBubble.toString();
        strBubble.bubbleSort();
        testCArrayDiv.innerHTML += '<h3>Bubble Sorting Sorted</h3>' + strBubble.toString();
        stop = new Date().getTime();
        elapsed = stop - start;
        testCArrayDiv.innerHTML += '<p>Elapsed time ' + elapsed + ' milliseconds<p>';

        // Selection sorted
        start = new Date().getTime();
        testCArrayDiv.innerHTML += '<h3>Selection Sorting - unsorted</h3>';
        const selSorting = new CArray(letterArray.length);
        selSorting.dataStore = [...letterArray];
        testCArrayDiv.innerHTML += selSorting.toString();
        selSorting.selectionSort();
        testCArrayDiv.innerHTML += '<h3>Selection Sorted</h3>' + selSorting.toString();
        stop = new Date().getTime();
        elapsed = stop - start;
        testCArrayDiv.innerHTML += '<p>Elapsed time ' + elapsed + ' milliseconds<p>';

        // Shell Sorted
        start = new Date().getTime();
        testCArrayDiv.innerHTML += '<h3>Shell Sorting - unsorted</h3>';
        const shellSorting = new CArray(letterArray.length);
        shellSorting.dataStore = [...letterArray];
        testCArrayDiv.innerHTML += shellSorting.toString();
        shellSorting.shellSort1();
        testCArrayDiv.innerHTML += '<h3>Shell Sorted</h3>' + shellSorting.toString();
        stop = new Date().getTime();
        elapsed = stop - start;
        testCArrayDiv.innerHTML += '<p>Elapsed time ' + elapsed + ' milliseconds<p>';

        // Exercise 2
        const bubble1k = new CArray(1000);
        testCArrayDiv.innerHTML += '<h2>Exercise 2 - sorting sorted array</h2>';
        bubble1k.setData();
        bubble1k.bubbleSort();
        start = new Date().getTime();
        bubble1k.bubbleSort();
        stop = new Date().getTime();
        elapsed = stop - start;
        testCArrayDiv.innerHTML += '<p>Bubble sort time: ' + elapsed + ' milliseconds</p>';

        start = new Date().getTime();
        bubble1k.selectionSort();
        stop = new Date().getTime();
        elapsed = stop - start;
        testCArrayDiv.innerHTML += '<p>Selection sort time: ' + elapsed + ' milliseconds</p>';

        start = new Date().getTime();
        bubble1k.insertionSort();
        stop = new Date().getTime();
        elapsed = stop - start;
        testCArrayDiv.innerHTML += '<p>Insertion sort time: ' + elapsed + ' milliseconds</p>';

        // Exercise 3
        testCArrayDiv.innerHTML += '<h2>Exercise 3 - sorting reverse sorted array</h2>';
        bubble1k.dataStore.reverse();
        start = new Date().getTime();
        bubble1k.bubbleSort();
        stop = new Date().getTime();
        elapsed = stop - start;
        testCArrayDiv.innerHTML += '<p>Bubble sort time: ' + elapsed + ' milliseconds</p>';

        bubble1k.dataStore.reverse();
        start = new Date().getTime();
        bubble1k.selectionSort();
        stop = new Date().getTime();
        elapsed = stop - start;
        testCArrayDiv.innerHTML += '<p>Selection sort time: ' + elapsed + ' milliseconds</p>';

        bubble1k.dataStore.reverse();
        start = new Date().getTime();
        bubble1k.insertionSort();
        stop = new Date().getTime();
        elapsed = stop - start;
        testCArrayDiv.innerHTML += '<p>Insertion sort time: ' + elapsed + ' milliseconds</p>';

        // Exercise 4
        testCArrayDiv.innerHTML += '<h2>Exercise 4 - Quicksort v stock sort</h2>';

        const ex4Data = new CArray(10000);
        ex4Data.setData();
        start = new Date().getTime();
        ex4Data.qSort(ex4Data.dataStore);
        stop = new Date().getTime();
        elapsed = stop - start;
        testCArrayDiv.innerHTML += '<p>Quick sort time: ' + elapsed + ' milliseconds</p>';

        start = new Date().getTime();
        ex4Data.dataStore.sort();
        stop = new Date().getTime();
        elapsed = stop - start;
        testCArrayDiv.innerHTML += '<p>Stock sort time: ' + elapsed + ' milliseconds</p>';
    }
}
startUp();