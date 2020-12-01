import { day1Part1, day1Part2 } from './day1';

test('day1 part1', () => {
  expect(day1Part1([1721, 979, 366, 299, 675, 1456])).toEqual(514579);
  expect(day1Part1([1751, 979, 299, 200, 675, 1721])).toEqual(514579);
  expect(day1Part1([675, 1456])).toEqual(undefined);
});

test('day1 part2', () => {
  expect(day1Part2([1721, 979, 366, 299, 675, 1456])).toEqual(241861950);
  expect(day1Part2([1721, 979, 299, 675, 1456])).toEqual(undefined);
});
