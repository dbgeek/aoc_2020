import { day10Part1, day10Part2 } from './day10';
import { getInputArrayNumber } from './tools';

test('day10Part1', () => {
  expect(
    day10Part1([
      28,
      33,
      18,
      42,
      31,
      14,
      46,
      20,
      48,
      47,
      24,
      23,
      49,
      45,
      19,
      38,
      39,
      11,
      1,
      32,
      25,
      35,
      8,
      17,
      7,
      9,
      4,
      2,
      34,
      10,
      3,
    ]),
  ).toEqual(220);
  expect(day10Part1([16, 10, 15, 5, 1, 11, 7, 19, 6, 12, 4])).toEqual(35);
  expect(day10Part1(getInputArrayNumber(10, 1))).toEqual(1656);
});

test('day10Part2', () => {
  expect(day10Part2([0, 16, 10, 15, 5, 1, 11, 7, 19, 6, 12, 4].sort((a, b) => a - b))).toEqual(8);
  const a = [
    0,
    28,
    33,
    18,
    42,
    31,
    14,
    46,
    20,
    48,
    47,
    24,
    23,
    49,
    45,
    19,
    38,
    39,
    11,
    1,
    32,
    25,
    35,
    8,
    17,
    7,
    9,
    4,
    2,
    34,
    10,
    3,
  ];
  a.sort((a, b) => a - b);
  expect(day10Part2(a)).toEqual(19208);
  const input = getInputArrayNumber(10, 1);
  input.sort((a, b) => a - b);
  expect(day10Part2([0].concat(input))).toEqual(56693912375296);
});
