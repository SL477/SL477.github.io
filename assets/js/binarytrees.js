class NodeCls {
    constructor(data, left, right) {
        this.data = data;
        this.left = left;
        this.right = right;
        this.count = 1;
    }

    show() {
        return this.data;
    }
}

let maxret = -1;
let minret;

class BST {
    constructor() {
        this.root = null;
    }

    insert(data) {
        let n = new NodeCls(data, null, null);
        if (this.root == null) {
            this.root = n;
        }
        else {
            let current = this.root;
            let parent;
            // eslint-disable-next-line no-constant-condition
            while (true) {
                parent = current;
                if (data < current.data) {
                    current = current.left;
                    if (current == null) {
                        parent.left = n;
                        break;
                    }
                }
                else {
                    current = current.right;
                    if (current == null) {
                        parent.right = n;
                        break;
                    }
                }
            }
        }
    }

    inOrder(node) {
        if (!(node == null)) {
            this.inOrder(node.left) + " ";
            console.log(node.show());
            this.inOrder(node.right) + " ";
        }
    }

    preOrder(node) {
        if (!(node == null)) {
            console.log(node.show());
            this.preOrder(node.left);
            this.preOrder(node.right);
        }
    }

    postOrder(node) {
        if (!(node == null)) {
            this.postOrder(node.left);
            this.postOrder(node.right);
            console.log(node.show());
        }
    }

    getMin() {
        let current = this.root;
        while(!(current.left == null)) {
            current = current.left;
        }
        return current.data;
    }

    getMax() {
        let current = this.root;
        while (!(current.right == null)) {
            current = current.right;
        }
        return current.data;
    }

    find(data) {
        let current = this.root;
        while (current && current.data != data) {
            if (data < current.data) {
                current = current.left;
            }
            else {
                current = current.right;
            }
            if (!current || current == null) {
                return null;
            }
        }
        return current;
    }

    remove(data) {
        this.root = this.removeNode(this.root, data);
    }

    removeNode(node, data) {
        if (node == null) {
            return null;
        }

        if (data == node.data) {
            // node has no children
            if (node.left == null && node.right == null) {
                return null;
            }

            // node has no left child
            if (node.left == null) {
                return node.right;
            }
            // node has no right child
            if (node.right == null) {
                return node.left;
            }
            // node has two children
            let tempNode = node.right;
            node.data = tempNode.data;
            node.right = this.removeNode(node.right, tempNode.data);
            return node;
        }
        else if (data < node.data) {
            node.left = this.removeNode(node.left, data);
            return node;
        }
        else {
            node.right = this.removeNode(node.right, data);
            return node;
        }
    }

    update(data) {
        let grade = this.find(data);
        grade.count++;
        return grade;
    }

    // Exercise 1
    // Count nodes
    /*inOrder(node) {
        if (!(node == null)) {
            this.inOrder(node.left) + " ";
            console.log(node.show());
            this.inOrder(node.right) + " ";
        }
    }*/
    countNodes() {
        let ret = 0;
        ret = this.countNode(this.root);
        return ret;
    }

    countNode(node) {
        let ret = 0;
        if (!(node == null)) {
            ret += 1;
            ret += this.countNode(node.left);
            ret += this.countNode(node.right);
        }
        return ret;
    }

    // Exercise 3
    /*getArray(node) {
        let ret = [];
        if (!(node == null)) {
            ret.push(node.count);
            this.getArray(node.left).forEach(r => {
                if (r) {
                    ret.push(r.count);
                }
            });
            this.getArray(node.right).forEach(r => {
                if (r) {
                    ret.push(r.count);
                }
            });
        }
        return ret;
    }*/

    goThroughArrayGetMax(node) {
        try {
            if (node && node != null) {
                this.goThroughArrayGetMax(node.left);
                if (node.count > maxret) {
                    maxret = node.count;
                }
                this.goThroughArrayGetMax(node.right);
                //console.log("test", node.count);
            }
        }
        catch(e){
            console.error("error", e, node);
        }
    }

    /*getArray() {
        let arr = [];
        this.goThroughArray(this.root, arr.push);
        return arr;
    }*/

    max() {
        maxret = -1;
        //let arr = this.getArray();
        //console.log("Get array:",arr);
        this.goThroughArrayGetMax(this.root);
        return maxret;
    }

    //Exercise 4
    goThroughArrayGetMin(node) {
        if (node && node != null) {
            this.goThroughArrayGetMin(node.left);
            if (node.count < minret) {
                minret = node.count;
            }
            this.goThroughArrayGetMin(node.right);
        }
    }
    
    min() {
        minret = this.root.count;
        this.goThroughArrayGetMin(this.root);
        return minret;
    }

    printBST(node) {
        let ret = '';
        if (node && node != null) {
            ret += "<li>" + node.data + ": " + node.count + "</li>";
            ret += this.printBST(node.left);
            ret += this.printBST(node.right);
        }
        return ret;
    }
}

function prArray(arr) {
    let ret = arr[0].toString() + ' ';
    for (let i = 1; i < arr.length; ++i) {
        ret += arr[i] + ' ';
        if (i % 10 == 0) {
            ret += '\n';
        }
    }
    return ret;
}

function getArray(length) {
    let arr = [];
    for (let i = 0; i < length; ++i) {
        arr[i] = Math.floor(Math.random() * 101);
    }
    return arr;
}

function startUp() {
    //Test
    let nums = new BST();
    nums.insert(23);
    nums.insert(45);
    nums.insert(16);
    nums.insert(37);
    nums.insert(3);
    nums.insert(99);
    nums.insert(22);

    console.log("Count nodes, should be 7: ", nums.countNodes());
    console.log("max:", nums.max());
    console.log("min:",nums.min());

    console.log("Inorder traversals:");
    nums.inOrder(nums.root)
    console.log("Preorder traversal:");
    nums.preOrder(nums.root)
    console.log("Postorder traversal:");
    nums.postOrder(nums.root);
    console.log("This minimum value of the BST is: ", nums.getMin());
    console.log("The maximum value of the BST is:", nums.getMax());
    let searchFor = 23;
    let found = nums.find(searchFor);
    if (found != null) {
        console.log("Found " + searchFor + " in the BST.");
    }
    else {
        console.log(searchFor + " was not found in the BST.");
    }
    searchFor = 13;
    found = nums.find(searchFor);
    if (found != null) {
        console.log("Found " + searchFor + " in the BST.");
    }
    else {
        console.log(searchFor + " was not found in the BST.");
    }

    let grades = getArray(100);
    console.log("Print grade array:", prArray(grades));
    let gradeddistro = new BST();
    for (let i = 0; i < grades.length; ++i) {
        let g = grades[i];
        //console.log("g",g);
        let grade = gradeddistro.find(g);
        if (grade == null) {
            gradeddistro.insert(g);
        }
        else {
            gradeddistro.update(g);
        }
    }

    //console.log("Inorder traversals:");
    //gradeddistro.inOrder(gradeddistro.root)
}

function GetTextInput() {
    const textInputArea = document.getElementById("textInput");
    if (textInputArea) {
        return textInputArea.value;
    }
    return "";
}

/**
 * @param {string} htmlContent 
 */
function SetWordCountAns(htmlContent) {
    const wordCountAnsDiv = document.getElementById("wordCountAns");
    if (wordCountAnsDiv) {
        wordCountAnsDiv.innerHTML = htmlContent;
    }
}

// eslint-disable-next-line no-unused-vars
function getTextCounts() {
    let textInput = GetTextInput();
    textInput = textInput.toLowerCase();

    // eslint-disable-next-line no-useless-escape
    textInput = textInput.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    let txtCounter = new BST();

    textInput.split(" ").forEach(element => {
        let inp = txtCounter.find(element);
        if (inp == null) {
            txtCounter.insert(element);
        }
        else {
            txtCounter.update(element);
        }
    });
    console.log("txtCounter:",txtCounter);

    let ret = "<ul>";
    ret += txtCounter.printBST(txtCounter.root);
    ret += "</ul>";
    SetWordCountAns(ret);
}

startUp();
