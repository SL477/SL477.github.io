/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
//Palindromes
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

const palidromeChecker = () => {
    let res = palindrome($('#palindromeInput').val());

    $('#palidromeResult').text(res.toString());
};

//Roman Numerals
const romanNumeralChecker = () => {
    let input = $('#romanInput').val();

    $('#romanResult').text(convertToRoman(input));
};

const convertToRoman = (num) => {
    let x = num;
    let numThousands = 0;//M
    let numFiveHundreds = 0;//D
    let numHundreds = 0;//C
    let numFifties = 0;//L
    let numTens = 0;//X
    let numFives = 0;//V
    let numOnes = 0;//I
    let str = '';

    //1000s
    numThousands = Math.floor(x / 1000);
    x = x - (numThousands * 1000);
    for (let i = 0; i < numThousands ; i++) {
        str += 'M';
    }

    //100s
    numHundreds = Math.floor(x / 100);
    x = x - (numHundreds * 100);
    str += getSymbolStr(numHundreds, 'C', 'M', 'D');

    //10s
    numTens = Math.floor(x / 10);
    x = x - (numTens * 10);
    str += getSymbolStr(numTens, 'X', 'C', 'L');

    //1s
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
const caesarCipherChecker = () => {
    let res = rot13($('#cipherInput').val());
    $('#cipherResult').text(res);
};

const rot13 = (str) => {
    let dict = {
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
    let arr = str.split('');
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

const phoneNumberChecker = () => {
    let res = telephoneCheck($('#phoneInput').val());
    $('#phoneResult').text(res.toString());
};

//Cash Register
const cashRegisterChecker = () => {
    let price = $('#price').val();
    let cash = $('#cash').val();
    let $penny = $('#penny');
    let $nickel = $('#nickel');
    let $dime = $('#dime');
    let $quarter = $('#quarter');
    let $dollar = $('#dollar');
    let $five = $('#five');
    let $ten = $('#ten');
    let $twenty = $('#twenty');
    let $hundred = $('#hundred');

    let changeDict = {
        'ONE HUNDRED': {value: 100, html: $hundred, desc: 'Hundred Dollar Notes'},
        'TWENTY': {value: 20, html: $twenty, desc: 'Twenty Dollar Notes'},
        'TEN': {value: 10, html: $ten, desc: 'Ten Dollar Notes'},
        'FIVE': {value: 5, html: $five, desc: 'Five Dollar Notes'},
        'ONE': {value: 1, html: $dollar, desc: 'Dollar Coins'},
        'QUARTER': {value: 0.25, html: $quarter, desc: 'Quarters'},
        'DIME': {value: 0.1, html: $dime, desc: 'Dimes'},
        'NICKEL': {value: 0.05, html: $nickel, desc: 'Nickels'},
        'PENNY': {value: 0.01, html: $penny, desc: 'Pennies'}
    };

    let changeArr = [
        ['PENNY', $penny.val() * changeDict['PENNY'].value],
        ['NICKEL', $nickel.val() * changeDict['NICKEL'].value],
        ['DIME', $dime.val() * changeDict['DIME'].value],
        ['QUARTER', $quarter.val() * changeDict['QUARTER'].value],
        ['ONE', $dollar.val() * changeDict['ONE'].value],
        ['FIVE', $five.val() * changeDict['FIVE'].value],
        ['TEN', $ten.val() * changeDict['TEN'].value],
        ['TWENTY', $twenty.val() * changeDict['TWENTY'].value],
        ['ONE HUNDRED', $hundred.val() * changeDict['ONE HUNDRED'].value]
    ];
    console.log('changeArr', changeArr);
    let res = checkCashRegister(price, cash, changeArr);

    $('#cashRegisterStatus').text(res.status);

    let changeText = '';
    console.log(res.change);

    res.change.forEach((c) => {
        let key = c[0];
        let amt = c[1];

        changeText += changeDict[key].desc + ' ' + (amt / changeDict[key].value).toString() + '<br/>';
        changeDict[key].html.val(changeDict[key].html.val() - (amt / changeDict[key].value));
    });
    $('#cashRegisterChange').html(changeText);
};

const checkCashRegister = (price, cash, cid) => {
    //var change;
    // Here is your change, ma'am.
    //return change;
    let changeobj = {status: '', change:[]};
  

    let cashobj = {};
    //console.log(cid.length);
    let totalCash = 0;
    for(let i = 0; i < cid.length; i++) {
        //console.log(cid[i][0]);
        //console.log(cid[i][1]);
        cashobj[cid[i][0]] = cid[i][1];
        totalCash += cid[i][1];
    }
    //console.log(cashobj);
    //console.log(Object.entries(cashobj))
  
    //let changearr = [];
    let changeRet = cash - price;
  
    //console.log('total cash ' + totalCash + ' change due ' + changeRet);
    
    if (totalCash < changeRet) {
        //console.log('INSUFFICIENT_FUNDS');
        return {status: 'INSUFFICIENT_FUNDS', change: []};
    }
    else if (totalCash == changeRet) {
        //convert cashobj to an array and return it
        //console.log('CLOSED');
        return {status: 'CLOSED', change: Object.entries(cashobj)};
    }
    else {
        //need to work out the change to return
        changeobj.status = 'OPEN';
  
        //100
        //console.log('100');
        //console.log('c' + cashobj["ONE HUNDRED"]);
        //console.log('change due ' + changeRet)
        let temp = getNumMoney('ONE HUNDRED', 100, cashobj['ONE HUNDRED'], changeRet);
        //console.log('hi')
        //console.log('temp ' + temp);
        //console.log(changeRet);
        if (temp[1] > 0) {
            changeobj.change.push(temp);
            changeRet -= temp[1];
            changeRet = changeRet.toFixed(2);
            //console.log('100 change due ' + changeRet);
        }
  
        //20
        temp = getNumMoney('TWENTY', 20, cashobj['TWENTY'], changeRet);
        if (temp[1] > 0) {
            changeobj.change.push(temp);
            changeRet -= temp[1];
            changeRet = changeRet.toFixed(2);
            //console.log('20 change due ' + changeRet);
        }
  
        //10
        temp = getNumMoney('TEN', 10, cashobj['TEN'], changeRet);
        if (temp[1] > 0) {
            changeobj.change.push(temp);
            changeRet -= temp[1];
            changeRet = changeRet.toFixed(2);
            //console.log('10 change due ' + changeRet);
        }
  
        //5
        temp = getNumMoney('FIVE', 5, cashobj['FIVE'], changeRet);
        if (temp[1] > 0) {
            changeobj.change.push(temp);
            changeRet -= temp[1];
            changeRet = changeRet.toFixed(2);
            //console.log('5 change due ' + changeRet);
        }
  
        //1
        temp = getNumMoney('ONE', 1, cashobj['ONE'], changeRet);
        if (temp[1] > 0) {
            changeobj.change.push(temp);
            changeRet -= temp[1];
            changeRet = changeRet.toFixed(2);
            //console.log('1 change due ' + changeRet);
        }
  
        //0.25
        temp = getNumMoney('QUARTER', 0.25, cashobj['QUARTER'], changeRet);
        if (temp[1] > 0) {
            changeobj.change.push(temp);
            changeRet -= temp[1];
            changeRet = changeRet.toFixed(2);
            //console.log('0.25 change due ' + changeRet);
        }
  
        //0.1
        temp = getNumMoney('DIME', 0.1, cashobj['DIME'], changeRet);
        if (temp[1] > 0) {
            changeobj.change.push(temp);
            changeRet -= temp[1];
            changeRet = changeRet.toFixed(2);
            //console.log('0.1 change due ' + changeRet);
        }
  
        //0.05
        temp = getNumMoney('NICKEL', 0.05, cashobj['NICKEL'], changeRet);
        if (temp[1] > 0) {
            changeobj.change.push(temp);
            changeRet -= temp[1];
            changeRet = changeRet.toFixed(2);
            //console.log('0.05 change due ' + changeRet);
        }
  
        //0.01
        temp = getNumMoney('PENNY', 0.01, cashobj['PENNY'], changeRet);
        if (temp[1] > 0) {
            changeobj.change.push(temp);
            changeRet -= temp[1];
            changeRet = changeRet.toFixed(2);
            //console.log('0.01 change due ' + changeRet);
        }
        if (changeRet > 0) {
            return {status: 'INSUFFICIENT_FUNDS', change: []};
        }
        //console.log(changeobj);
        return changeobj;
    }
};

//e.g. "HUNDRED", 100, 2, 270
const getNumMoney = (moneyType, moneyValue, drawerNum, changeDue) => {
    let NumNeeded = Math.floor(changeDue / moneyValue);
    //console.log(NumNeeded);
    let hasNum = Math.floor(drawerNum / moneyValue);
    //let retNum = 0;
    //console.log('NUm needed ' + NumNeeded + ' drawernum ' + hasNum);
    if (hasNum < NumNeeded) {
        return [moneyType, hasNum * moneyValue];
    }
    else {
        return [moneyType, NumNeeded * moneyValue];
    }
};