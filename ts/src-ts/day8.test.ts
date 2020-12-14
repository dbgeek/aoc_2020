import { parseInput, parseLine, day8Part1, day8Part2, swap } from './day8';
import { getInputArrayString } from './tools';

test('swap', () => {
  expect(swap('jmp')).toEqual('nop');
});

test('parseLine: ', () => {
  expect(parseLine('nop +0')).toStrictEqual({
    instruction: 'nop',
    operator: '+',
    value: 0,
    executed: false,
  });
  expect(parseLine('acc +1')).toStrictEqual({
    instruction: 'acc',
    operator: '+',
    value: 1,
    executed: false,
  });
  expect(parseLine('jmp -3')).toStrictEqual({
    instruction: 'jmp',
    operator: '-',
    value: 3,
    executed: false,
  });
  expect(parseLine('acc -99')).toStrictEqual({
    instruction: 'acc',
    operator: '-',
    value: 99,
    executed: false,
  });
});

test('parseInput: ', () => {
  expect(parseInput(['nop +0', 'acc +1', 'jmp -3', 'acc -99'])).toStrictEqual([
    {
      instruction: 'nop',
      operator: '+',
      value: 0,
      executed: false,
    },
    {
      instruction: 'acc',
      operator: '+',
      value: 1,
      executed: false,
    },
    {
      instruction: 'jmp',
      operator: '-',
      value: 3,
      executed: false,
    },
    {
      instruction: 'acc',
      operator: '-',
      value: 99,
      executed: false,
    },
  ]);
});

test('day8Part1', () => {
  expect(day8Part1(parseInput(getInputArrayString(8, 1)))).toEqual(1749);
  expect(
    day8Part1([
      {
        instruction: 'nop',
        operator: '+',
        value: 0,
        executed: false,
      },
      {
        instruction: 'acc',
        operator: '+',
        value: 1,
        executed: false,
      },
      {
        instruction: 'jmp',
        operator: '+',
        value: 4,
        executed: false,
      },
      {
        instruction: 'acc',
        operator: '+',
        value: 3,
        executed: false,
      },
      {
        instruction: 'jmp',
        operator: '-',
        value: 3,
        executed: false,
      },
      {
        instruction: 'acc',
        operator: '-',
        value: 99,
        executed: false,
      },
      {
        instruction: 'acc',
        operator: '+',
        value: 1,
        executed: false,
      },
      {
        instruction: 'jmp',
        operator: '-',
        value: 4,
        executed: false,
      },
      {
        instruction: 'acc',
        operator: '+',
        value: 6,
        executed: false,
      },
    ]),
  ).toEqual(5);
});

test('day8Part2', () => {
  expect(day8Part2(parseInput(getInputArrayString(8, 1)))).toEqual(515);
  expect(
    day8Part2([
      {
        instruction: 'nop',
        operator: '+',
        value: 0,
        executed: false,
      },
      {
        instruction: 'acc',
        operator: '+',
        value: 1,
        executed: false,
      },
      {
        instruction: 'jmp',
        operator: '+',
        value: 4,
        executed: false,
      },
      {
        instruction: 'acc',
        operator: '+',
        value: 3,
        executed: false,
      },
      {
        instruction: 'jmp',
        operator: '-',
        value: 3,
        executed: false,
      },
      {
        instruction: 'acc',
        operator: '-',
        value: 99,
        executed: false,
      },
      {
        instruction: 'acc',
        operator: '+',
        value: 1,
        executed: false,
      },
      {
        instruction: 'jmp',
        operator: '-',
        value: 4,
        executed: false,
      },
      {
        instruction: 'acc',
        operator: '+',
        value: 6,
        executed: false,
      },
    ]),
  ).toEqual(8);
  expect(
    day8Part2([
      {
        instruction: 'acc',
        operator: '+',
        value: 1,
        executed: false,
      },
      {
        instruction: 'nop',
        operator: '-',
        value: 1,
        executed: false,
      },
      {
        instruction: 'acc',
        operator: '+',
        value: 1,
        executed: false,
      },
    ]),
  ).toEqual(undefined);
});
