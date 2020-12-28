const DAY_NUMBER = 1;

const fs = require('fs');
const sampleData = fs.readFileSync(`./sampleData/day${DAY_NUMBER}.txt`, 'utf-8').split('\n').map(n => Number(n));
const realData = fs.readFileSync(`./realData/day${DAY_NUMBER}.txt`, 'utf-8').split('\n').map(n => Number(n));

// Part One - What is the sum of the fuel requirements for all of the modules on your spacecraft?

const partOne = data => {
  return data
    .map(n => Math.floor(n / 3) - 2)
    .reduce((total, current) => total + current);
};

// Part Two - What is the sum of the fuel requirements for all of the modules on your spacecraft when also taking into account the mass of the added fuel?

const partTwo = data => {
  const determineFuelReq = num => Math.floor(num / 3) - 2;
  return data
    .map(n => {
      let mass = n;
      let currentFuel = determineFuelReq(mass);
      while (currentFuel > 0) {
        mass += currentFuel;
        currentFuel = determineFuelReq(currentFuel);
      }
      return mass - n;
  }).reduce((sum, current) => sum + current);
};

console.log(partOne(sampleData));
console.log(partOne(realData));
console.log(partTwo(sampleData));
console.log(partTwo(realData));