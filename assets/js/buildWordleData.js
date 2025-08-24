import fs from 'node:fs';
import path from 'node:path';

const regex = /(Wordle [\d,]+ .\/6\s*[⬛🟨🟩\s]+)/gm;

function buildWordleStatsNode() {
  process.loadEnvFile();
  fs.readFile(path.normalize(process.env.WORDLEDATA), 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    const WordleData = buildWordleStats(data);
    fs.writeFile('_data/wordleStats.yml', WordleData, err => {
      if (err) {
        console.error(err);
      }
      else {
        console.log('Created wordle stats');
      }
    });
  });
}

/**
 * Build Wordle stats from the data
 * @param {string} fileText
 * @returns {string}
 */
function buildWordleStats(fileText) {
  const matches = fileText.match(regex);
  // Add balancing figures for the missing data
  const stats = {
    numberGames: 32,
    numberWon: 0,
    currentStreak: 0,
    maxStreak: 0,
    guess1: 0,
    guess2: 0,
    guess3: 6,
    guess4: 10,
    guess5: 8,
    guess6: 3,
    guessX: 0,
    winPct: 0,
    plays: [],
  };
  let lastPlay = 0;

  for (const m of matches) {
    const splitStr = m.split('/');

    const result = splitStr[0][splitStr[0].length - 1];

    stats['guess' + result]++;
    const number = Number(splitStr[0].split(' ')[1].replace(',', ''));

    // Get the guess cells
    const cells = splitStr[1].replace(/\s/g, '').substring(1);

    //   console.log(result, number, cells);
    stats.plays.push(new play(number, cells, result));

    if (result != 'X' && (number === lastPlay + 1 || lastPlay === 0)) {
      stats.currentStreak++;
    } else {
      if (stats.currentStreak > stats.maxStreak) {
        stats.maxStreak = stats.currentStreak;
      }
      // console.log('break', number);
      stats.currentStreak = 0;
    }
    lastPlay = number;

    stats.numberGames++;
  }

  stats.numberWon =
    stats.guess1 +
    stats.guess2 +
    stats.guess3 +
    stats.guess4 +
    stats.guess5 +
    stats.guess6;
  stats.winPct = ((stats.numberWon / stats.numberGames) * 100).toFixed(0);

  // console.log(stats);

  let resultStr = `currentStreak: ${stats.currentStreak}
guess1: ${stats.guess1}
guess2: ${stats.guess2}
guess3: ${stats.guess3}
guess4: ${stats.guess4}
guess5: ${stats.guess5}
guess6: ${stats.guess6}
guessX: ${stats.guessX}
maxStreak: ${stats.maxStreak}
numberGames: ${stats.numberGames}
winPct: ${stats.winPct}
plays:`;

  for (const p of stats.plays) {
    resultStr += `
  - num: ${p.number}
    guess: ${p.guessArray}
    res: ${p.result}`;
  }
  return resultStr;
}

// const statsBtn = document.getElementById('BuildWordleStats');
// if (statsBtn) {
//   statsBtn.addEventListener('click', async () => {
//     const fileHandle = await window.showOpenFilePicker({
//       types: [
//         {
//           description: 'Text',
//           accept: {
//             'text/plain': ['.txt'],
//           },
//         },
//       ],
//       excludeAcceptAllOption: true,
//       multiple: false,
//     });
//     // console.log(fileHandle);
//     const fileBlob = await fileHandle[0].getFile();
//     const fileText = await fileBlob.text();
//     // console.log(fileText);
//     const resultStr = buildWordleStats(fileText);
//     console.log(resultStr);
//   });
// }

class play {
  constructor(number, guessArray, result) {
    this.number = number;
    this.guessArray = guessArray;
    this.result = result;
  }
}

buildWordleStatsNode();