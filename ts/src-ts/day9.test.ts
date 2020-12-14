import { day9Part1, day9Part2, twoSumPart } from './day9';
import { getInputArrayNumber } from './tools';

test('twoSumPart: ', () => {
  expect(twoSumPart([35, 20, 15, 25, 47], 0, 1)).toStrictEqual([55]);
  expect(twoSumPart([35, 20, 15, 25, 47], 0, 2)).toStrictEqual([55, 50, 35]);
});

test('day9Part1: ', () => {
  expect(
    day9Part1([35, 20, 15, 25, 47, 40, 62, 55, 65, 95, 102, 117, 150, 182, 127, 219, 299, 277, 309, 576], 5),
  ).toStrictEqual(127);
  expect(day9Part1([10, 20, 30, 40, 50, 30], 5)).toStrictEqual(undefined);
  expect(
    day9Part1([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 3]),
  ).toStrictEqual(undefined);
  expect(day9Part1(getInputArrayNumber(9, 1), 25)).toStrictEqual(14360655);
});

test('day9Part2: ', () => {
  expect(
    day9Part2([35, 20, 15, 25, 47, 40, 62, 55, 65, 95, 102, 117, 150, 182, 127, 219, 299, 277, 309, 576], 127),
  ).toStrictEqual(62);
  expect(
    day9Part2([35, 20, 15, 25, 47, 40, 62, 55, 65, 95, 102, 117, 150, 182, 127, 219, 299, 277, 309, 576], 1227),
  ).toStrictEqual(undefined);
  expect(day9Part2(getInputArrayNumber(9, 1), 14360655)).toStrictEqual(1962331);
});
