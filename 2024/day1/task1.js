import {
    dataLocIdsCol1,
    dataLocIdsCol2
} from './data-d1.js';

const start = performance.now();

const col1 = dataLocIdsCol1.sort();
const col2 = dataLocIdsCol2.sort();

let sum = 0;

for (let i = 0; i < col1.length; i++) {
    sum += (Math.abs(col1[i] - col2[i]));
}

const end = performance.now();

console.log(sum);

console.log('---------------------');
console.log(end - start + ' ms');
console.log('---------------------');