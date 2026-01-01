import fs from 'node:fs';
import path from 'node:path';

const regex = /(I got \w+'s Whodle in \d)|(I didn't)/gm;

function buildWhodleStatsNode() {
  process.loadEnvFile();
  fs.readFile(path.normalize(process.env.WHODLEDATA), 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    const WhodleData = buildWhodleStats(data);
    fs.writeFile('_data/whodleStats.yml', WhodleData, (err) => {
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
    guess1: 0,
    guess2: 0,
    guess3: 0,
    guess4: 0,
    guess5: 0,
    guessX: 0,
    winPct: 0,
    plays: [],
  };
  let lastPlay = new Date(1900, 0, 1);

  try {
    for (const line of result) {
      const matches = line.match(regex);
      const m = matches[0];
      let d = new Date(line.slice(-11));
      let tomorrow = new Date(lastPlay);
      tomorrow.setDate(tomorrow.getDate() + 1);
      if (m === "I didn't") {
        stats.guessX += 1;
        if (stats.currentStreak > stats.maxStreak) {
          stats.maxStreak = stats.currentStreak;
        }
        stats.currentStreak = 0;
      } else {
        if (
          lastPlay.toDateString() === new Date(1900, 0, 1).toDateString() ||
          d.toDateString() === tomorrow.toDateString()
        ) {
          stats.currentStreak++;
        }
        const result = m.slice(-1);
        stats[`guess${result}`]++;
      }
      stats.numberGames++;
      lastPlay = d;
    }
  } catch (e) {}

  stats.numberWon =
    stats.guess1 + stats.guess2 + stats.guess3 + stats.guess4 + stats.guess5;
  stats.winPct = ((stats.numberWon / stats.numberGames) * 100).toFixed(0);
  if (stats.currentStreak > stats.maxStreak) {
    stats.maxStreak = stats.currentStreak;
  }
  return `currentStreak: ${stats.currentStreak}
guess1: ${stats.guess1}
guess2: ${stats.guess2}
guess3: ${stats.guess3}
guess4: ${stats.guess4}
guess5: ${stats.guess5}
guessX: ${stats.guessX}
maxStreak: ${stats.maxStreak}
numberGames: ${stats.numberGames}
winPct: ${stats.winPct}`;
}

buildWhodleStatsNode();
