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
        ,currentStep: 4
        ,playStep: 0
    },
    methods: {
        simonButton(num) {
            console.log('num',num);
            let aud = document.getElementById("aud" + num);
            aud.play();
        },
        generateButtonArray() {
            this.buttonArray = [];
            for (let i = 0; i < 20; i++) {
                this.buttonArray.push(Math.floor(Math.random() * 4));
            }
        },
        playSteps() {
            for(let i = 0; i < this.currentStep; i++) {
                setTimeout(() => {this.simonButton(this.buttonArray[i])}, 1000 * i);
                /*setTimeout(() => {
                    console.log(this.buttonArray[i]);
                    $("#btn" + this.buttonArray[i]).click(() => {
                        $(this).toggleClass('click');
                    });
                }, 1000 * i);*/
            }
        }
    },
    mounted(){
        this.generateButtonArray();
        this.playSteps();
    }
});