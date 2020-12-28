const DAY_NUMBER = 'INSERT_DAY_HERE';

const fs = require('fs');
const sampleData = fs.readFileSync(`./sampleData/day${DAY_NUMBER}.txt`, 'utf-8').split('\n');
const realData = fs.readFileSync(`./realData/day${DAY_NUMBER}.txt`, 'utf-8').split('\n');

// Part One - 

const partOne = data => {

};

// Part Two - 

const partTwo = data => {

};

console.log(partOne(sampleData));
console.log(partOne(realData));
console.log(partTwo(sampleData));
console.log(partTwo(realData));