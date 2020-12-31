import { readFileSync } from 'fs';

function getInput(day: number, part: number): Buffer {
  return readFileSync(`./data/${day}_${part}`);
}

function getInputString(day: number, part: number): string {
  return getInput(day, part).toString();
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

function getInputNestedArrayString(day: number, part: number): string[][] {
  const groups: string[][] = [];
  const group: string[] = [];
  getInputArrayString(day, part).forEach((v, idx, arr) => {
    if (v === '') {
      groups.push([...group]);
      group.length = 0;
    } else {
      group.push(v);
    }
    if (idx === arr.length - 1 && group.length !== 0) groups.push([...group]);
  });
  return groups;
}

export { getInput, getInputArrayString, getInputArrayNumber, getInputNestedArrayString, getInputString };
