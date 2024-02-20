
class Queue {
    constructor() {
        this.dataStore = [];
    }

    enqueue(element) {
        this.dataStore.push(element);
    }

    dequeue() {
        return this.dataStore.shift();
    }

    front() {
        return this.dataStore[0];
    }

    back() {
        return this.dataStore[this.dataStore.length - 1];
    }

    toString() {
        let retStr = '';
        for (let i = 0; i < this.dataStore.length; ++i) {
            retStr += this.dataStore[i] + '\n';
        }
        return retStr;
    }

    empty() {
        if (this.dataStore.length == 0) {
            return true;
        }
        else {
            return false;
        }
    }

    insertToFront(element) {
        let temp = [];
        temp.push(element);
        this.dataStore.forEach(i => {
            temp.push(i);
        });
        this.dataStore = temp;
    }

    removeFromEnd() {
        return this.dataStore.pop();
    }

    dequeuePriority() {
        let priority = this.dataStore[0].code;
        for (let i = 1; i < this.dataStore.length; ++i) {
            if (this.dataStore[i].code > priority) {
                priority = i;
            }
        }
        return this.dataStore.splice(priority, 1);
    }

    toStringPriority() {
        let retStr = '';
        for (let i = 0; i < this.dataStore.length; ++i) {
            retStr += this.dataStore[i].name + 'code: ' + this.dataStore[i].code + '\n';
        }
        return retStr;
    }

    toTablePriority() {
        let retStr = '';
        for (let i = 0; i < this.dataStore.length; ++i) {
            retStr += '<tr><td>' + this.dataStore[i].name + '</td><td>' + this.dataStore[i].code + '</td><td><button class="btn btn-danger" onclick="removePatient(' + i + ')">Remove</button>';
        }
        return retStr;
    }
}

// Exercise 2
function palindromeChecker(input) {
    if (!input) {
        return;
    }
    const p = new Queue();
    input.split('').forEach(l => {
        p.enqueue(l);
    });

    let f = p.dequeue();
    let b = p.removeFromEnd();
    while (f && b) {
        if (f != b) {
            return false;
        }
        f = p.dequeue();
        b = p.removeFromEnd();
    }
    return true;
}

// eslint-disable-next-line no-unused-vars
function palindromeCheck() {
    const palindromeCheckerInput = document.getElementById('palindromeChecker');
    const palindromeAnswerSpan = document.getElementById('palindromeAnswer');
    if (palindromeCheckerInput && palindromeAnswerSpan) {
        const input = palindromeCheckerInput.value;
        const ret = palindromeChecker(input);
        console.log('ans2', ret);
        palindromeAnswerSpan.textContent = ret.toString();
    }
}

// Exercise 4
class Patient {
    constructor(name, code) {
        this.name = name;
        this.code = code;
    }
}

let patientQueue = new Queue();

function showListOfPatients() {
    // patientList
    const patientListTBody = document.getElementById('patientList');
    if (patientListTBody) {
        patientListTBody.innerHTML = patientQueue.toTablePriority();
    }
}

// eslint-disable-next-line no-unused-vars
function addPatient() {
    // patientName
    // patientCode
    const patientNameInput = document.getElementById('patientName');
    const patientCodeInput = document.getElementById('patientCode');
    if (patientNameInput && patientCodeInput) {
        const pName = patientNameInput.value;
        const pCode = patientCodeInput.value;

        patientQueue.enqueue(new Patient(pName, pCode));
        showListOfPatients();
    }
}

// eslint-disable-next-line no-unused-vars
function removePatient(index) {
    patientQueue.dataStore.splice(index, 1);
    showListOfPatients();
}

function startUp() {
    // Exercise 1
    const q1 = new Queue();
    q1.enqueue('hi');
    q1.enqueue('there');
    q1.insertToFront('front');

    const ex1Input = document.getElementById('ex1');
    if (ex1Input) {
        ex1Input.value = q1.toString();
    }
}
startUp();