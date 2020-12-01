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

export { getInput, getInputArrayNumber };
