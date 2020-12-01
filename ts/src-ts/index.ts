import { getInputArrayNumber } from './tools';
import { day1Part1, day1Part2 } from './day1';

const inputPart1 = getInputArrayNumber(1, 1);
const inputPart2 = getInputArrayNumber(1, 2);

console.log(`result day 1 part 1: ${day1Part1(inputPart1)}`);
console.log(`result day 1 part 2: ${day1Part2(inputPart2)}`);
