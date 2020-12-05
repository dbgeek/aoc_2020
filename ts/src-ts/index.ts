import { getInputArrayNumber, getInputArrayString } from './tools';
import { day1Part1, day1Part2 } from './day1';
import { day2Part1, day2Part2, toPasswordPolicies } from './day2';
import { day3Part1, day3Part2, parseInputDay3 } from './day3';
import { day4Part1, day4Part2, parseBatchFile } from './day4';

const inputPart1 = getInputArrayNumber(1, 1);
const inputPart2 = getInputArrayNumber(1, 2);
const inputDay2Part1 = toPasswordPolicies(getInputArrayString(2, 1));
const inputDay2Part2 = toPasswordPolicies(getInputArrayString(2, 2));
const inputDay3Part1 = parseInputDay3(getInputArrayString(3, 1));
const inputDay4 = parseBatchFile(getInputArrayString(4, 1));

console.log(`result day 1 part 1: ${day1Part1(inputPart1)}`);
console.log(`result day 1 part 2: ${day1Part2(inputPart2)}`);

console.log(`result day 2 part 1: ${day2Part1(inputDay2Part1)}`);
console.log(`result day 2 part 2: ${day2Part2(inputDay2Part2)}`);

console.log(`result day 3 part 1: ${day3Part1(inputDay3Part1)}`);
console.log(`result day 3 part 3: ${day3Part2(inputDay3Part1)}`);

console.log(`result day 4 part 1: ${day4Part1(inputDay4)}`);
console.log(`result day 4 part 2: ${day4Part2(inputDay4)}`);
