import { useState } from 'react';

enum Selection {
  ROCK = 'Rock',
  PAPER = 'Paper',
  SCISSORS = 'Scissors',
}

enum Results {
  AI = 'AI',
  PLAYER = 'PLAYER',
  DRAW = 'DRAW',
}

export default function RockPaperScissors() {
  const [humanScore, setHumanScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [roundNumber, setRoundNumber] = useState(0);
  const [lastPC, setLastPC] = useState<Selection|null>(null);
  const [lastHuman, setLastHuman] = useState<Selection|null>(null);
  const [lastResult, setLastResult] = useState<Results|null>(null);
  const RPS = [Selection.ROCK, Selection.PAPER, Selection.SCISSORS];

  const computerPlay = () => RPS[Math.floor(Math.random() * 3)];

  const playRound = (playerSelection: Selection, computerSelection: Selection) => {
    // return AI, PLAYER or DRAW
    if (playerSelection === computerSelection) {
      return Results.DRAW;
    }
    // scissors beats paper, paper beats rock, rock beats scissors
    if (playerSelection === Selection.ROCK) {
      return computerSelection === Selection.PAPER ? Results.AI : Results.PLAYER;
    } else if (playerSelection === Selection.PAPER) {
      return computerSelection === Selection.ROCK ? Results.PLAYER : Results.AI;
    } else {
      //scissors
      return computerSelection === Selection.ROCK ? Results.AI : Results.PLAYER;
    }
  };

  const humanPlay = (selection: Selection) => {
    const pcPlay = computerPlay();
    const result = playRound(selection, pcPlay);

    if (result === 'AI') {
      setComputerScore(c => c + 1);
    } else if (result === 'PLAYER') {
      setHumanScore(h => h + 1);
    }
    setRoundNumber(r => r + 1);
    setLastPC(pcPlay);
    setLastHuman(selection);
    setLastResult(result);
  };

  const playAgain = () => {
    setHumanScore(0);
    setComputerScore(0);
    setRoundNumber(0);
    setLastPC(null);
    setLastHuman(null);
    setLastResult(null);
  };

  return (
    <div className="centertext">
      <p>Round Number: {roundNumber}</p>
      <p>Player Score: {humanScore}</p>
      <p>Computer Score: {computerScore}</p>
      <p>Last Computer Play: {lastPC}</p>
      <p>Last Player Play: {lastHuman}</p>
      <p>Last Result: {lastResult}</p>
      {roundNumber < 5 ? (
        <>
          {RPS.map(opt => (
            <button
            type="button"
            className="btn btn-primary"
            onClick={() => humanPlay(opt)}
          >
            {opt}
          </button>
          ))}
        </>
      ) : (
        <>
          <p>
            Result:{' '}
            {humanScore === computerScore
              ? 'Draw'
              : humanScore > computerScore
                ? 'You won!'
                : 'You lost!'}
          </p>
          <button type="button" className="btn btn-primary" onClick={playAgain}>
            Play again?
          </button>
        </>
      )}
    </div>
  );
}
