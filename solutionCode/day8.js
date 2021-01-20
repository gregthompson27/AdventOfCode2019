const DAY_NUMBER = '8';

const fs = require('fs');
const sampleData = [];
const realData = [];
const sample = fs.readFileSync(`./sampleData/day${DAY_NUMBER}.txt`, 'utf-8'); // 3px * 2px --> 6px per layer
const real = fs.readFileSync(`./realData/day${DAY_NUMBER}.txt`, 'utf-8'); // 25px * 6px --> 150px per layer

for (let i = 0; i < sample.length; i += 4) {
  sampleData.push(sample.slice(i, i + 4));
}
for (let i = 0; i < real.length; i += 150) {
  realData.push(real.slice(i, i + 150));
}

// Part One - The image you received is 25 pixels wide and 6 pixels tall.
// To make sure the image wasn't corrupted during transmission, the Elves would like you to find the layer that contains the fewest 0 digits. On that layer, what is the number of 1 digits multiplied by the number of 2 digits?

const partOne = (data, size) => {
  const countZeros = str => {
    return size - str.replace(/0/g, '').length;
  }
  const targetLayer = data.reduce((target, current) => {
    if (countZeros(current) < countZeros(target)) {
      return current;
    } else { return target; }
  });
  return (size - targetLayer.replace(/1/g, '').length) * (size - targetLayer.replace(/2/g, '').length);
};

// Part Two - What message is produced after decoding your image?

const partTwo = (data, width) => {
  const layers = data.map(px => {
    const img = [];
    for (let i = 0; i < px.length; i += width) {
      img.push(px.slice(i, i + width));
    }
    return img;
  });
  const finalImg = layers.reduce((final, current) => {
    return final.map((row, index) => {
      let newRow = '';
      for (let i = 0; i < row.length; i++) {
        if (final[index][i] === '2') { newRow += current[index][i]; }
        else { newRow += final[index][i]; }
      }
      return newRow.replace(/1/g, '&').replace(/0/g, ' '); // WTF
    });
  });
  return finalImg;
};

console.log(partOne(sampleData, 6));
console.log(partOne(realData, 150));
console.log(partTwo(sampleData, 2));
console.log(partTwo(realData, 25)); // JEEZ!! You have to basically "paint" these 1s and 0s as an image to get some letters.