
// Palindromes
const palindrome = (str) => {
    let str2 = str.toLowerCase();

    let arr = str2.split('');

    arr = arr.filter((x) => {
        return /[a-zA-Z0-9]/.test(x); 
    });

    let j = arr.length - 1;

    for (let i = 0; i < ((arr.length / 2) + 1); i++) {
    //console.log('i ' + arr[i] + ' j ' + arr[j]);
        if (arr[i] !== arr[j]) {
            return false;
        }
        j--;
    }
    return true;
};

// eslint-disable-next-line no-unused-vars
const palindromeChecker = () => {
    const palindromeInput = document.getElementById('palindromeInput');
    const palindromeResultSpan = document.getElementById('palindromeResult');
    if (palindromeInput && palindromeResultSpan) {
        const res = palindrome(palindromeInput.value);
        palindromeResultSpan.textContent = res.toString();
    }
};

//Roman Numerals
// eslint-disable-next-line no-unused-vars
const romanNumeralChecker = () => {
    const romanInput = document.getElementById('romanInput');
    const romanResultSpan = document.getElementById('romanResult');
    if (romanInput && romanResultSpan) {
        let input = romanInput.value;
        romanResultSpan.textContent = convertToRoman(input);
    }
};

const convertToRoman = (num) => {
    let x = num;
    let numThousands = 0;//M
    // let numFiveHundreds = 0;//D
    let numHundreds = 0;//C
    // let numFifties = 0;//L
    let numTens = 0;//X
    // let numFives = 0;//V
    // let numOnes = 0;//I
    let str = '';

    // 1000s
    numThousands = Math.floor(x / 1000);
    x = x - (numThousands * 1000);
    for (let i = 0; i < numThousands ; i++) {
        str += 'M';
    }

    // 100s
    numHundreds = Math.floor(x / 100);
    x = x - (numHundreds * 100);
    str += getSymbolStr(numHundreds, 'C', 'M', 'D');

    // 10s
    numTens = Math.floor(x / 10);
    x = x - (numTens * 10);
    str += getSymbolStr(numTens, 'X', 'C', 'L');

    // 1s
    str += getSymbolStr(x, 'I', 'X', 'V');

    console.log('str ' + str);
    return str;
};

//e.g. getSymbolStr(5, 'C', 'M', 'D') (100, 500, 1000)
//getSymbolStr(x, 'I', 'V', 'X');
const getSymbolStr = (num, currentSym, nextSym, halfSym) => {
    let str = '';
    switch (num) {
    case 9:
        str += currentSym + nextSym;//'CM';
        break;
    case 8:
        str += halfSym + currentSym + currentSym + currentSym;//'DCCC';
        break;
    case 7:
        str += halfSym + currentSym + currentSym;//'DCC';
        break;
    case 6:
        str += halfSym + currentSym ;//'DC';
        break;
    case 5:
        str += halfSym;//'D';
        break;
    case 4:
        str += currentSym + halfSym;//'CD';
        break;
    case 3:
        str += currentSym + currentSym + currentSym;//'CCC';
        break;
    case 2:
        str += currentSym + currentSym;//'CC';
        break;
    case 1:
        str += currentSym;//'C';
        break;
    default:
        break;  
    }
    return str;
};

//Caesar's Cipher
// eslint-disable-next-line no-unused-vars
const caesarCipherChecker = () => {
    const cipherInput = document.getElementById('cipherInput');
    const cipherResultSpan = document.getElementById('cipherResult');
    if (cipherInput) {
        const res = rot13(cipherInput.value);
        cipherResultSpan.textContent = res;
    }
};

const rot13 = (str) => {
    const dict = {
        A: 'N',
        B: 'O',
        C: 'P',
        D: 'Q',
        E: 'R',
        F: 'S',
        G: 'T',
        H: 'U',
        I: 'V',
        J: 'W',
        K: 'X',
        L: 'Y',
        M: 'Z',
        N: 'A',
        O: 'B',
        P: 'C',
        Q: 'D',
        R: 'E',
        S: 'F',
        T: 'G',
        U: 'H',
        V: 'I',
        W: 'J',
        X: 'K',
        Y: 'L',
        Z: 'M'
    };
    //console.log(getDecodedLetter(dict, '!'))
    
    let retStr = '';
    const arr = str.split('');
    //console.log(arr);
    //console.log(arr.length);
    for (let i = 0; i < arr.length; i++) {
        retStr += getDecodedLetter(dict, arr[i]);
        //console.log(getDecodedLetter(dict, arr[i]));
        //console.log(arr[i]);
    }
    //console.log(retStr);
    
    return retStr;
};

const getDecodedLetter = (dict, input) => {
    let retStr = input;
    // eslint-disable-next-line no-prototype-builtins
    if (dict.hasOwnProperty(input)) {
        retStr = dict[input];
    }
    return retStr;
};

//Telephone number checker
const telephoneCheck = (str) => {
    // Good luck!
    //^\d{10}$|^\d{3}-\d{3}-\d{4}$
    //console.log(/^(1|1-|1 |)(\d{3}|\(\d{3}\))(-| |)\d{3}(-| |)\d{4}$/.test('1 (757) 622-7382'));
    return /^(1|1-|1 |)(\d{3}|\(\d{3}\))(-| |)\d{3}(-| |)\d{4}$/.test(str);
};

// eslint-disable-next-line no-unused-vars
const phoneNumberChecker = () => {
    const phoneInput = document.getElementById('phoneInput');
    const phoneResult = document.getElementById('phoneResult')
    if (phoneInput) {
        const res = telephoneCheck(phoneInput.value);
        phoneResult.textContent = res.toString();
    }
};

// Cash Register
// eslint-disable-next-line no-unused-vars
const cashRegisterChecker = () => {
    const priceInput = document.getElementById('price');
    const cashInput = document.getElementById('cash');
    const pennyInput = document.getElementById('penny');
    const nickelInput = document.getElementById('nickel');
    const dimeInput = document.getElementById('dime');
    const quarterInput = document.getElementById('quarter');
    const dollarInput = document.getElementById('dollar');
    const fiveInput = document.getElementById('five');
    const tenInput = document.getElementById('ten');
    const twentyInput = document.getElementById('twenty');
    const hundredInput = document.getElementById('hundred');
    const cashRegisterStatusSpan = document.getElementById('cashRegisterStatus');
    const cashRegisterChange = document.getElementById('cashRegisterChange');

    if (priceInput && cashInput && pennyInput && nickelInput && dimeInput && quarterInput 
        && dollarInput && fiveInput && tenInput && twentyInput && hundredInput) {

        let price = priceInput.value;
        let cash = cashInput.value;

        const changeDict = {
            'ONE HUNDRED': {value: 100, html: hundredInput, desc: 'Hundred Dollar Notes'},
            'TWENTY': {value: 20, html: twentyInput, desc: 'Twenty Dollar Notes'},
            'TEN': {value: 10, html: tenInput, desc: 'Ten Dollar Notes'},
            'FIVE': {value: 5, html: fiveInput, desc: 'Five Dollar Notes'},
            'ONE': {value: 1, html: dollarInput, desc: 'Dollar Coins'},
            'QUARTER': {value: 0.25, html: quarterInput, desc: 'Quarters'},
            'DIME': {value: 0.1, html: dimeInput, desc: 'Dimes'},
            'NICKEL': {value: 0.05, html: nickelInput, desc: 'Nickels'},
            'PENNY': {value: 0.01, html: pennyInput, desc: 'Pennies'}
        };

        const changeArr = [
            ['PENNY', Number(pennyInput.value) * changeDict['PENNY'].value],
            ['NICKEL', Number(nickelInput.value) * changeDict['NICKEL'].value],
            ['DIME', Number(dimeInput.value) * changeDict['DIME'].value],
            ['QUARTER', Number(quarterInput.value) * changeDict['QUARTER'].value],
            ['ONE', Number(dollarInput.value) * changeDict['ONE'].value],
            ['FIVE', Number(fiveInput.value) * changeDict['FIVE'].value],
            ['TEN', Number(tenInput.value) * changeDict['TEN'].value],
            ['TWENTY', Number(twentyInput.value) * changeDict['TWENTY'].value],
            ['ONE HUNDRED', Number(hundredInput.value) * changeDict['ONE HUNDRED'].value]
        ];
        console.log('changeArr', changeArr);
        const res = checkCashRegister(price, cash, changeArr);

        cashRegisterStatusSpan.textContent = res.status;

        let changeText = '';
        console.log(res.change);

        res.change.forEach((c) => {
            const key = c[0];
            const amt = c[1];

            changeText += changeDict[key].desc + ' ' + (amt / changeDict[key].value).toString() + '<br/>';
            changeDict[key].html.value = Number(changeDict[key].html.value) - (amt / changeDict[key].value);
        });
        cashRegisterChange.innerHTML = changeText;
    }
};

const checkCashRegister = (price, cash, cid) => {
    // Here is your change, ma'am.
    const changeObj = {status: '', change:[]};
  

    const cashObj = {};
    let totalCash = 0;
    for(let i = 0; i < cid.length; i++) {
        cashObj[cid[i][0]] = cid[i][1];
        totalCash += cid[i][1];
    }
    let changeRet = cash - price;
    
    if (totalCash < changeRet) {
        return {status: 'INSUFFICIENT_FUNDS', change: []};
    }
    else if (totalCash == changeRet) {
        // convert cashObj to an array and return it
        return {status: 'CLOSED', change: Object.entries(cashObj)};
    }
    else {
        // need to work out the change to return
        changeObj.status = 'OPEN';
  
        // 100
        let temp = getNumMoney('ONE HUNDRED', 100, cashObj['ONE HUNDRED'], changeRet);
        if (temp[1] > 0) {
            changeObj.change.push(temp);
            changeRet -= temp[1];
            changeRet = changeRet.toFixed(2);
        }
  
        // 20
        temp = getNumMoney('TWENTY', 20, cashObj['TWENTY'], changeRet);
        if (temp[1] > 0) {
            changeObj.change.push(temp);
            changeRet -= temp[1];
            changeRet = changeRet.toFixed(2);
        }
  
        // 10
        temp = getNumMoney('TEN', 10, cashObj['TEN'], changeRet);
        if (temp[1] > 0) {
            changeObj.change.push(temp);
            changeRet -= temp[1];
            changeRet = changeRet.toFixed(2);
        }
  
        // 5
        temp = getNumMoney('FIVE', 5, cashObj['FIVE'], changeRet);
        if (temp[1] > 0) {
            changeObj.change.push(temp);
            changeRet -= temp[1];
            changeRet = changeRet.toFixed(2);
        }
  
        // 1
        temp = getNumMoney('ONE', 1, cashObj['ONE'], changeRet);
        if (temp[1] > 0) {
            changeObj.change.push(temp);
            changeRet -= temp[1];
            changeRet = changeRet.toFixed(2);
        }
  
        // 0.25
        temp = getNumMoney('QUARTER', 0.25, cashObj['QUARTER'], changeRet);
        if (temp[1] > 0) {
            changeObj.change.push(temp);
            changeRet -= temp[1];
            changeRet = changeRet.toFixed(2);
        }
  
        // 0.1
        temp = getNumMoney('DIME', 0.1, cashObj['DIME'], changeRet);
        if (temp[1] > 0) {
            changeObj.change.push(temp);
            changeRet -= temp[1];
            changeRet = changeRet.toFixed(2);
        }
  
        // 0.05
        temp = getNumMoney('NICKEL', 0.05, cashObj['NICKEL'], changeRet);
        if (temp[1] > 0) {
            changeObj.change.push(temp);
            changeRet -= temp[1];
            changeRet = changeRet.toFixed(2);
        }
  
        // 0.01
        temp = getNumMoney('PENNY', 0.01, cashObj['PENNY'], changeRet);
        if (temp[1] > 0) {
            changeObj.change.push(temp);
            changeRet -= temp[1];
            changeRet = changeRet.toFixed(2);
        }
        if (changeRet > 0) {
            return {status: 'INSUFFICIENT_FUNDS', change: []};
        }
        return changeObj;
    }
};

// e.g. "HUNDRED", 100, 2, 270
const getNumMoney = (moneyType, moneyValue, drawerNum, changeDue) => {
    const NumNeeded = Math.floor(changeDue / moneyValue);
    const hasNum = Math.floor(drawerNum / moneyValue);
    if (hasNum < NumNeeded) {
        return [moneyType, hasNum * moneyValue];
    }
    else {
        return [moneyType, NumNeeded * moneyValue];
    }
};