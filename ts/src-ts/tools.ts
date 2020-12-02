import { readFileSync } from 'fs';

function getInput(day: number, part: number): Buffer {
  return readFileSync(`./data/${day}_${part}`);
}

function getInputArrayNumber(day: number, part: number): Array<number> {
  return getInput(day, part)
    .toString()
    .split('\n')
    .map((v) => +v);
}

function getInputArrayString(day: number, part: number): Array<string> {
  return getInput(day, part)
    .toString()
    .split('\n')
    .map((v) => v);
}

export { getInput, getInputArrayString, getInputArrayNumber };
