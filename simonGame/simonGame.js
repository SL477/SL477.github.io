let app = new Vue({
    el: '#app',
    data: {
        test: 'hi',
        strict: false,
        audioList: [
            {url: "https://s3.amazonaws.com/freecodecamp/simonSound1.mp3", id: "aud0"},
            {url: "https://s3.amazonaws.com/freecodecamp/simonSound2.mp3", id: "aud1"},
            {url: "https://s3.amazonaws.com/freecodecamp/simonSound3.mp3", id: "aud2"},
            {url: "https://s3.amazonaws.com/freecodecamp/simonSound4.mp3", id: "aud3"}
        ]
        ,buttonArray: []
        ,currentStep: 1
        ,humanStep:0
        ,correct: true
    },
    methods: {
        simonButton(num, human = false) {
            console.log('num',num, human, this.humanStep, this.currentStep, this.buttonArray[this.humanStep], this.correct);
            let aud = document.getElementById("aud" + num);
            let btn = document.getElementById("btn" + num);
            btn.classList.add("activeButton");
            aud.play();
            setTimeout(() => {btn.classList.remove("activeButton");},500);
            if (human) {
                if (num == this.buttonArray[this.humanStep]) {
                    console.log("num equals buttonarray");
                    this.correct = true;
                    this.humanStep++;
                    if (this.humanStep == this.currentStep) {
                        if (this.currentStep == 20) {
                            alert("You won!");
                            setTimeout(() => {this.reset();},1000);
                        }
                        else {
                            this.currentStep++;
                            this.humanStep = 0;
                            setTimeout(() => {this.playSteps();},1000);
                        }
                    }
                }
                else {
                    //mistake made
                    console.log("mistake made");
                    this.correct = false;
                    if (this.strict) {
                        console.log("mistake made strict");
                        setTimeout(() => {this.reset();},1000);
                    }
                    else {
                        console.log("mistake made non-strict");
                        this.humanStep = 0;
                        setTimeout(() => {this.playSteps();},1000);
                    }
                }
            }
        },
        generateButtonArray() {
            this.buttonArray = [];
            this.currentStep = 1;
            this.humanStep = 0;
            this.correct = true;
            for (let i = 0; i < 20; i++) {
                this.buttonArray.push(Math.floor(Math.random() * 4));
            }
        },
        playSteps() {
            for(let i = 0; i < this.currentStep; i++) {
                setTimeout(() => {this.simonButton(this.buttonArray[i]);}, 1000 * i);
            }
        },
        reset() {
            this.generateButtonArray();
            this.playSteps();
        }
    },
    mounted(){
        this.generateButtonArray();
        this.playSteps();
    }
});