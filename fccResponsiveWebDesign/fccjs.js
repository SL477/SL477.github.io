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
    let penny = $('#penny').val();
    let nickel = $('#nickel').val();
    let dime = $('#dime').val();
    let quarter = $('#quarter').val();
    let dollar = $('#dollar').val();
    let five = $('#five').val();
    let ten = $('#ten').val();
    let twenty = $('#twenty').val();
    let hundred = $('#hundred').val();
};