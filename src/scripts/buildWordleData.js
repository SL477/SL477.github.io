import fs from 'node:fs';
import path from 'node:path';

const regex = /(Wordle [\d,]+ .\/6\s*[⬛🟨🟩\s]+)/gm;

async function main() {
  process.loadEnvFile();
  const INPUT_PATH = path.resolve(process.env.WORDLEDATA ?? '');
  const OUTPUT_PATH = path.resolve('src', 'content', 'wordleStats.json');

  fs.readFile(INPUT_PATH, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    const WordleData = buildWordleStats(data);
    fs.writeFile(OUTPUT_PATH, WordleData, err => {
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
    guess: {
      1: 0,
      2: 0,
      3: 6,
      4: 10,
      5: 8,
      6: 3,
      X: 0
    },
    plays: [],
  };
  let lastPlay = 0;

  for (const m of matches) {
    const splitStr = m.split('/');

    const result = splitStr[0][splitStr[0].length - 1];

    stats.guess[result]++;
    const number = Number(splitStr[0].split(' ')[1].replace(',', ''));

    // Get the guess cells
    const cells = splitStr[1].replace(/\s/g, '').substring(1);

    stats.plays.push({ number, guessArray: cells, result });

    if (result !== 'X' && (number === lastPlay + 1 || lastPlay === 0)) {
      stats.currentStreak++;
    } else {
      stats.maxStreak = Math.max(stats.maxStreak, stats.currentStreak);
      stats.currentStreak = 0;
    }
    lastPlay = number;
    stats.numberGames++;
  }

  stats.maxStreak = Math.max(stats.maxStreak, stats.currentStreak);

  stats.numberWon = Object.entries(stats.guess)
    .filter(([k]) => k !== 'X')
    .reduce((sum, [, v]) => sum + Number(v), 0);
  stats.winPct = ((stats.numberWon / stats.numberGames) * 100).toFixed(0);

  return JSON.stringify({
    currentStreak: stats.currentStreak,
    maxStreak: stats.maxStreak,
    numberGames: stats.numberGames,
    winPct: stats.winPct,
    ...Object.fromEntries(Object.entries(stats.guess).map(([k, v]) => [`guess${k}`, v])),
    plays: stats.plays.map(p => ({

      num: p.number,
      guess: p.guessArray,
      res: p.result
    }))
  });
}

main();