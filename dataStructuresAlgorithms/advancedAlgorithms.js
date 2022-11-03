class knapsackItem {
    constructor(name, value, weight) {
        this.name = name;
        this.value = value;
        this.weight = weight;
    }
}

let app = new Vue({
    el: '#app',
    data: {
        string1: "test",
        string2: "the short brown fox jumped over the lazy dog",
        longSubstring: '',
        potentialItems: [],
        capacity: 16,
        knapsackResult: '',
        amount: 0.30,
        useDimes: false,
        coins: [
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
        ]
    },
    methods: {
        bruteForceSubstring() {
            let ret = '';
            //start with the first index of a and look for it in b
            let a = this.string1.toLowerCase();
            let b = this.string2.toLowerCase();
            for (let i = 0; i < a.length; i++) {
                //find index in string2
                //let r = / + a[i] + /g;
                let r = new RegExp(a[i],'g');
                //let foundStuff = r.exec(b);
                //console.log('matches',foundStuff);
                while ((match = r.exec(b)) != null) {
                    console.log('match',match);
                    let temp = a[i];
                    let tempB = b.substring(match.index);
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
            console.log('ret',ret);
            this.longSubstring = ret;
            //Vue.set(longSubstring, 'longSubstring', ret);
            //console.log('test3',ret, this.longSubstring);
            //return ret;
        },
        addPotentialItem() {
            this.potentialItems.push(new knapsackItem("",0,0));
        },
        max(a,b) {
            return (a > b)? [a,false] : [b,true];
        },
        knapSackSolution() {
            let k = [];
            for (let i = 0; i <= this.capacity + 1; i++) {
                k[i] = [];
            }

            let value = [];
            let size = [];
            this.potentialItems.forEach(element => {
                value.push(element.value);
                size.push(element.weight);
            });
            let n = this.potentialItems.length;
            console.log('value',value);
            console.log('size',size);
            console.log('capacity', this.capacity);
            let ret = [];

            for (let i = 0; i <= n; i++) {
                for (let w = 0; w <= this.capacity; w++) {
                    if (i == 0 || w == 0) {
                        k[i][w] = 0;
                    }
                    else if (size[i - 1] <= w) {
                        let t = this.max(value[i - 1] + k[i - 1][w - size[i - 1]], k[i - 1][w]);
                        k[i][w] = t[0];
                        //if (w == this.capacity) {
                        console.log('size',size[i - 1], 'value',value[i - 1], t[1], 'item', i, 'k',k[i][w]);
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
            console.log('knapsack return', k[n][this.capacity], ret);
            this.knapsackResult = k[n][this.capacity];
            return k[n][this.capacity];
        },
        workoutChange() {
            let remainAmt = this.amount;
            this.coins.forEach(coin => {
                if (remainAmt % coin.amt < remainAmt) {
                    if ((coin.amt == 0.1 && this.useDimes) || coin.amt != 0.1) {
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
            });
        }
    },
    mounted() {
        //console.log('string1',this.string1, "string2", this.string2);
        this.potentialItems.push(new knapsackItem("A",4,3));
        this.potentialItems.push(new knapsackItem("B",5,4));
        this.potentialItems.push(new knapsackItem("C",10,7));
        this.potentialItems.push(new knapsackItem("D",11,8));
        this.potentialItems.push(new knapsackItem("E",13,9));
    }
});