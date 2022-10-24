'use strict';
const e = React.createElement;

const RPS = ['ROCK', "PAPER", "SCISSORS"];

class RockPaperScissors extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            humanScore: 0,
            computerScore: 0,
            roundNumber: 0,
            lastPC: '',
            lastHuman: '',
            lastResult: ''
        };

        this.computerPlay = this.computerPlay.bind(this);
        this.playRound = this.playRound.bind(this);
        this.humanPlay = this.humanPlay.bind(this);
    }

    computerPlay() {
        //Return random rock, paper or scissors
        return RPS[Math.floor(Math.random() * 3)];
    }

    playRound(playerSelection, computerSelection) {
        //return AI, PLAYER or DRAW
        if (playerSelection === computerSelection) {
            return 'DRAW';
        }
        //scissors beats paper, paper beats rock, rock beats scissors
        if (playerSelection === 'ROCK') {
            if (computerSelection === 'PAPER') {
                return 'AI';
            }
            else {
                return 'PLAYER';
            }
        }
        else if (playerSelection === 'PAPER') {
            if (computerSelection === 'ROCK') {
                return 'PLAYER';
            }
            else {
                return 'AI';
            }
        }
        else {//scissors
            if (computerSelection === 'ROCK') {
                return 'AI';
            }
            else {
                return 'PLAYER';
            }
        }
    }

    humanPlay(selection) {
        let pcPlay = this.computerPlay();
        let result = this.playRound(selection, pcPlay);
        let newHumanScore = this.state.humanScore;
        let newAIScore = this.state.computerScore;

        if (result === 'AI') {
            newAIScore += 1;
        }
        else if (result === 'PLAYER') {
            newHumanScore += 1;
        }

        this.setState({
            roundNumber: this.state.roundNumber + 1,
            lastPC: pcPlay,
            lastHuman: selection,
            humanScore: newHumanScore,
            computerScore: newAIScore,
            lastResult: result
        });
    }

    render() {
        return (
            <div>
                <p>Round Number: {this.state.roundNumber}</p>
                <p>Player Score: {this.state.humanScore}</p>
                <p>Computer Score: {this.state.computerScore}</p>
                <p>Last Computer Play: {this.state.lastPC}</p>
                <p>Last Player Play: {this.state.lastHuman}</p>
                <p>Last Result: {this.state.lastResult}</p>
                <button className="btn btn-primary" onClick={() =>{this.humanPlay(RPS[0])}}>Rock</button>
                <button className="btn btn-primary" onClick={() =>{this.humanPlay(RPS[1])}}>Paper</button>
                <button className="btn btn-primary" onClick={() =>{this.humanPlay(RPS[2])}}>Scissors</button>
            </div>
        );
    }
}
const domContainer = document.querySelector("#rockpaperscissors");
const root = ReactDOM.createRoot(domContainer);
root.render(e(RockPaperScissors));