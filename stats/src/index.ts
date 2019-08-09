import { CsvFileReader } from './CsvFileReader';

const reader = new CsvFileReader('football.csv');
reader.read();

let manUnitedWins = 0;

enum MatchResult {
  homeWin = 'H',
  awayWin = 'A',
  draw = 'D',
}

for (let match of reader.data) {
  if (match[1] === 'Man United' && match[5] === MatchResult.homeWin) {
    manUnitedWins++;
  } else if (match[2] === 'Man United' && match[5] === MatchResult.awayWin) {
    manUnitedWins++;
  }
}

console.log(`Man United wins ${manUnitedWins} games`);
