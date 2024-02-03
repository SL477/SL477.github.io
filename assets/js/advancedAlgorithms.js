//#region "Substring"
// eslint-disable-next-line no-unused-vars
function bruteForceSubstring() {
    let ret = '';
    const string1 = document.getElementById('string1');
    const string2 = document.getElementById('string2');

    if (string1 && string2) {
        const a = string1.value;
        const b = string2.value;
        for (let i = 0; i < a.length; i++) {
            // find index in string2
            let r = new RegExp(a[i],'g');
            //let foundStuff = r.exec(b);
            //console.log('matches',foundStuff);
            let match;
            while ((match = r.exec(b)) != null) {
                console.log('match',match);
                let temp = a[i];
                const tempB = b.substring(match.index);
                let ind = 0;
                if (temp.length > ret.length) {
                    ret = temp;
                    console.log('test2');
                }
                for (let j = i + 1; j < a.length; j++) {
                    ind++;
                    console.log('temp',temp);
                    if (tempB[ind] != a[j]) {
                        console.log('test');
                        break;
                    }
                    else {
                        temp += a[j];
                        if (temp.length > ret.length) {
                            ret = temp;
                            console.log('test2',ret);
                        }
                    }
                }
            }
        }
    }

    console.log('ret', ret);
    const longSubString = document.getElementById('longSubString');
    if (longSubString) {
        longSubString.textContent = ret;
    }
}
//#endregion

//#region "Knapsack"

class knapsackItem {
    constructor(name, value, weight) {
        this.name = name;
        this.value = value;
        this.weight = weight;
    }
}

const potentialItems = [
    new knapsackItem('A',4,3),
    new knapsackItem('B',5,4),
    new knapsackItem('C',10,7),
    new knapsackItem('D',11,8),
    new knapsackItem('E',13,9)
];

/**
 * This is to run on startup and when the Knapsack changes
 */
function displayKnapsack() {
    const potentialItemsDiv = document.getElementById('potentialItems');
    if (potentialItemsDiv) {
        potentialItemsDiv.innerHTML = '';
        
        potentialItems.forEach((item, idx) => {
            const itemDiv = document.createElement('div');
            itemDiv.id = `item${idx}`;
            itemDiv.className = 'form-group';

            const itemHdr = document.createElement('h4');
            itemHdr.textContent = `Item ${idx + 1}`;
            itemDiv.appendChild(itemHdr);

            const itemNameLbl = document.createElement('label');
            itemNameLbl.textContent = 'Name:';

            const itemNameTxt = document.createElement('input');
            itemNameTxt.type = 'text';
            itemNameTxt.className = 'form-control';
            itemNameTxt.id = `itemName${idx}`;
            itemNameTxt.defaultValue = item.name;
            itemNameLbl.appendChild(itemNameTxt);
            itemDiv.appendChild(itemNameLbl);

            const itemValueLbl = document.createElement('label');
            itemValueLbl.textContent = 'Value:';

            const itemValueTxt = document.createElement('input');
            itemValueTxt.type = 'number';
            itemValueTxt.className = 'form-control';
            itemValueTxt.id = `itemValue${idx}`;
            itemValueTxt.defaultValue = item.value;
            itemValueLbl.appendChild(itemValueTxt);
            itemDiv.appendChild(itemValueLbl);

            const itemWeightLbl = document.createElement('label');
            itemWeightLbl.textContent = 'Weight:';

            const itemWeightTxt = document.createElement('input');
            itemWeightTxt.type = 'number';
            itemWeightTxt.className = 'form-control';
            itemWeightTxt.id = `itemWeight${idx}`;
            itemWeightTxt.defaultValue = item.weight;
            itemWeightLbl.appendChild(itemWeightTxt);
            itemDiv.appendChild(itemWeightLbl);

            potentialItemsDiv.appendChild(itemDiv);
        });
    }
}
displayKnapsack();

/**
 * Update the Knapsack array
 */
function updateKnapsack() {
    potentialItems.forEach((item, idx) => {
        const itemNameTxt = document.getElementById(`itemName${idx}`);
        if (itemNameTxt) {
            item.name = itemNameTxt.value;
        }

        const itemValueTxt = document.getElementById(`itemValue${idx}`);
        if (itemValueTxt && itemValueTxt.value) {
            item.value = parseFloat(itemValueTxt.value);
        }
        else {
            item.value = 0;
        }

        const itemWeightTxt = document.getElementById(`itemWeight${idx}`);
        if (itemWeightTxt && itemWeightTxt.value) {
            item.weight = parseFloat(itemWeightTxt.value);
        }
        else {
            item.weight = 0;
        }
    });
}

// eslint-disable-next-line no-unused-vars
function addPotentialItem() {
    updateKnapsack();
    potentialItems.push(new knapsackItem('', 0, 0));
    displayKnapsack();
}

function getCapacity() {
    const capacityTxt = document.getElementById('capacity');
    if (capacityTxt && capacityTxt.value) {
        return parseFloat(capacityTxt.value);
    }
    return 0;
}

function max(a, b) {
    return (a > b)? [a, false] : [b, true];
}

// eslint-disable-next-line no-unused-vars
function knapSackSolution() {
    let k = [];
    const capacity = getCapacity();
    for (let i = 0; i <= capacity + 1; i++) {
        k[i] = [];
    }

    const value = [];
    const size = [];
    updateKnapsack();
    potentialItems.forEach(element => {
        value.push(element.value);
        size.push(element.weight);
    });
    let n = potentialItems.length;
    console.log('value', value);
    console.log('size', size);
    console.log('capacity', capacity);
    let ret = [];

    for (let i = 0; i <= n; i++) {
        for (let w = 0; w <= capacity; w++) {
            if (i == 0 || w == 0) {
                k[i][w] = 0;
            }
            else if (size[i - 1] <= w) {
                let t = max(value[i - 1] + k[i - 1][w - size[i - 1]], k[i - 1][w]);
                k[i][w] = t[0];
                //if (w == this.capacity) {
                console.log('size',size[i - 1], 'value', value[i - 1], t[1], 'item', i, 'k', k[i][w]);
                if (k[i][w] > k[i][w - 1]) {
                    if (ret.indexOf(i - 1) < 0) {
                        ret.push(i - 1);
                    }
                }
                //}
            }
            else {
                k[i][w] = k[i - 1][w];
            }
            //console.log(k[i][w]);
        }
    }
    console.log('knapsack return', k[n][capacity], ret);
    const knapsackResultSpn = document.getElementById('knapsackResult');
    if (knapsackResultSpn) {
        knapsackResultSpn.textContent = k[n][capacity];
    }
    return k[n][this.capacity];
}

//#endregion

//#region "Coin Changing"
/**
 * Get the amount to change
 * @returns {number}
 */
function getAmount() {
    const amountTxt = document.getElementById('amount');
    if (amountTxt && amountTxt.value) {
        return parseFloat(amountTxt.value);
    }
    else {
        return 0;
    }
}

/**
 * Whether or not to use dimes
 * @returns {boolean}
 */
function getUseDimes() {
    const useDimesChk = document.getElementById('useDimes');
    if (useDimesChk) {
        return useDimesChk.checked;
    }
    return false;
}

// eslint-disable-next-line no-unused-vars
function workoutChange() {
    let remainAmt = getAmount();
    const coins = [
        {amt: 100, quantity: 0},
        {amt: 50, quantity: 0},
        {amt: 20, quantity: 0},
        {amt: 10, quantity: 0},
        {amt: 5, quantity: 0},
        {amt: 1, quantity:0},
        {amt: 0.25, quantity: 0},
        {amt: 0.1, quantity: 0},
        {amt: 0.05, quantity: 0},
        {amt: 0.01, quantity: 0}
    ];

    const coinsDiv = document.getElementById('coins');

    if (coinsDiv) {
        coinsDiv.innerHTML = '';
        coins.forEach(coin => {
            if (remainAmt % coin.amt < remainAmt) {
                if ((coin.amt == 0.1 && getUseDimes()) || coin.amt != 0.1) {
                    coin.quantity = Math.floor(remainAmt / coin.amt);
                    //remainAmt = remainAmt - (coin.amt * coin.quantity);
                    remainAmt %= coin.amt;
                    remainAmt = remainAmt.toFixed(2);
                }
                else {
                    coin.quantity = 0;
                }
            }
            else {
                coin.quantity = 0;
            }
            console.log('coin amt',coin.amt,'coin quantity', coin.quantity,'remainAmt',remainAmt);

            if (coin.quantity > 0) {
                const coinTxt = document.createElement('p');
                coinTxt.textContent = `Number of ${coin.amt}: ${coin.quantity.toLocaleString()}`;
                coinsDiv.appendChild(coinTxt);
            }
        });
    }
}
//#endregion
