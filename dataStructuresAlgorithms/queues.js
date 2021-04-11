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
            retStr += this.dataStore[i] + "\n";
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
            retStr += this.dataStore[i].name + "code: " + this.dataStore[i].code + "\n";
        }
        return retStr;
    }

    toTablePriority() {
        let retStr = "";
        for (let i = 0; i < this.dataStore.length; ++i) {
            retStr += '<tr><td>' + this.dataStore[i].name + '</td><td>' + this.dataStore[i].code + '</td><td><button class="btn btn-danger" onclick="removePatient(' + i + ')">Remove</button>';
        }
        return retStr;
    }
}

//Exercise 2
function palindromeChecker(input) {
    if (!input) {
        return;
    }
    let p = new Queue();
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

function palindromeCheck() {
    let input = $('#palindromechecker').val();
    let ret = palindromeChecker(input);
    console.log('ans2', ret);
    $("#palindromeAnswer").text(ret.toString());
}

//Exercise 4
class Patient {
    constructor(name, code) {
        this.name = name;
        this.code = code;
    }
}

let patientQueue = new Queue();

function showListOfPatients() {
    //patientList
    $("#patientList").empty();
    $("#patientList").append(patientQueue.toTablePriority());
}

function addPatient() {
    //patientName
    //patientCode
    let pName = $('#patientName').val();
    let pCode = $('#patientCode').val();

    patientQueue.enqueue(new Patient(pName, pCode));
    showListOfPatients();
}

function removePatient(index) {
    //this.dataStore.splice(' + i +',1)}; showListOfPatients();
    patientQueue.dataStore.splice(index, 1);
    showListOfPatients();
}

$( document ).ready(() => {
    //Exercise 1
    let q1 = new Queue();
    q1.enqueue("hi");
    q1.enqueue("there");
    q1.insertToFront("front");
    
    $("#ex1").val(q1.toString());
});