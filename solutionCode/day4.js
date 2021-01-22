const DAY_NUMBER = '4';

const fs = require('fs');
// const sampleData = fs.readFileSync(`./sampleData/day${DAY_NUMBER}.txt`, 'utf-8').split('-').map(n => Number(n));
const realData = fs.readFileSync(`./realData/day${DAY_NUMBER}.txt`, 'utf-8').split('-').map(n => Number(n));

const hasConsecutives = num => {
  const str = num.toString();
  for (let i = 0; i < 6; i++) {
    if (str[i] === str[i + 1]) { return true; }
  }
  return false;
};

const fourOrGreater = num => {
  const str = num.toString();
  for (let i = 1; i <= str.length; i++) {
    if (str[i] < '4') { return false; }
  }
  return true;
};

const noDecreasing = num => {
  const str = num.toString();
  for (let i = 0; i < str.length; i++) {
    if (str[i] > str[i + 1]) { return false; }
  }
  return true;
};

const containsDouble = num => {
  const reg =  [/4/g, /5/g, /6/g, /7/g, /8/g, /9/g];
  const str = num.toString();
  for (let i = 0; i <= reg.length; i++) {
    if (str.replace(reg[i], '').length === 4) { return true; }
  }
  return false;
};

// Part One - How many different passwords within the range given in your puzzle input meet these criteria?

const partOne = data => {
  const all = [];
  for (let i = data[0]; i <= data[1]; i++) { 
    if (fourOrGreater(i) && hasConsecutives(i) && noDecreasing(i)) {
      all.push(i);
    }
  };
  return all;
};

// Part Two - An Elf just remembered one more important detail: the two adjacent matching digits are not part of a larger group of matching digits.
// How many different passwords within the range given in your puzzle input meet all of the criteria?

const partTwo = data => {
  return partOne(data).filter(n => containsDouble(n)).length;
};

console.log(partOne(realData).length);
console.log(partTwo(realData));