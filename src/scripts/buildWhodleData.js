import fs from 'node:fs';
import path from 'node:path';

const regex = /(I got \w+'s Whodle in \d)|(I didn't)/gm;

function main() {
  process.loadEnvFile();
  const INPUT_PATH = path.resolve(process.env.WHODLEDATA ?? '');
  const OUTPUT_PATH = path.resolve('src', 'content', 'whodleStats.json');
  fs.readFile(INPUT_PATH, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    const WhodleData = buildWhodleStats(data);
    fs.writeFile(OUTPUT_PATH, WhodleData, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log('Created whodle stats');
      }
    });
  });
}

/**
 * Build Whodle stats from the data
 * @param {string} fileText
 * @returns {string}
 */
function buildWhodleStats(fileText) {
  const lines = fileText.split(/r?\n/);
  const result = [];

  for (let i = 0; i < lines.length; i += 2) {
    result.push(lines.slice(i, i + 2).join('\n'));
  }

  const stats = {
    numberGames: 0,
    numberWon: 0,
    currentStreak: 0,
    maxStreak: 0,
    guess: {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
      X: 0
    },
    plays: [],
  };
  let lastPlay = new Date(1900, 0, 1);

  try {
    for (const line of result) {
      const matches = line.match(regex);
      const m = matches[0];
      const d = new Date(line.slice(-11));
      const tomorrow = new Date(lastPlay);
      tomorrow.setDate(tomorrow.getDate() + 1);
      if (m === 'I didn\'t') {
        stats.guess.X++;
        stats.maxStreak = Math.max(stats.maxStreak, stats.currentStreak)
        stats.currentStreak = 0;
      } else {
        if (
          lastPlay.toDateString() === new Date(1900, 0, 1).toDateString() ||
          d.toDateString() === tomorrow.toDateString()
        ) {
          stats.currentStreak++;
        }
        stats.guess[m.slice(-1)]++;
      }
      stats.numberGames++;
      lastPlay = d;
    }
  } catch (e) {
    console.error(e);
  }

  stats.numberWon = Object.entries(stats.guess)
    .filter(([k]) => k !== 'X')
    .reduce((sum, [, v]) => sum + Number(v), 0);
  stats.winPct = Number(((stats.numberWon / stats.numberGames) * 100).toFixed(0));
  stats.maxStreak = Math.max(stats.maxStreak, stats.currentStreak);

  return JSON.stringify({
    currentStreak: stats.currentStreak,
    maxStreak: stats.maxStreak,
    numberGames: stats.numberGames,
    winPct: stats.winPct,
    ...Object.fromEntries(Object.entries(stats.guess).map(([k, v]) => [`guess${k}`, v]))
  });
}

main();
