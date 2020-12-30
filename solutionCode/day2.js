const DAY_NUMBER = 2;

const fs = require('fs');
const sampleData = fs.readFileSync(`./sampleData/day${DAY_NUMBER}.txt`, 'utf-8')
  .split(',\n').join().split(',').map(n => Number(n));
const realData = fs.readFileSync(`./realData/day${DAY_NUMBER}.txt`, 'utf-8')
  .split(',\n').join().split(',').map(n => Number(n));

// Part One - What value is left at position 0 after the program halts?

const partOne = (data, noun = 12, verb = 2) => {
  const d = data.slice(0);
  d[1] = noun;
  d[2] = verb;
  let p = 0;
  let opcode = d[0];
  while (opcode < 99) {
    const refOne = d[p + 1];
    const refTwo = d[p + 2];
    const target = d[p + 3];
    if (opcode === 1) {
      d[target] = d[refOne] + d[refTwo];
    } else if (opcode === 2) {
      d[target] = d[refOne] * d[refTwo];
    }
    p += 4;
    opcode = d[p];
  }
  return d[0]
};

// Part Two - Find the input noun and verb that cause the program to produce the output 19690720. What is 100 * noun + verb? (For example, if noun=12 and verb=2, the answer would be 1202.)

// Note - partOne modified to take a noun and a verb as parameters with default values of 12 and 2
const partTwo = data => {
  for (let n = 0; n < 100; n++) {
    for (let v = 0; v < 100; v++) {
      if (partOne(data.slice(0), n, v) === 19690720) {
        return 100 * n + v;
      }
    }
  }
};

// The sample data does not work for part one -_-
  // But now it does!!!
// Aaaaaaand it definitely doesn't work for partTwo!!
console.log(partOne(sampleData, 9, 10));
console.log(partOne(realData));
// console.log(partTwo(sampleData));
console.log(partTwo(realData));