import { countOccupied, day11Part1 } from './day11';
import { getInputArrayString } from './tools';

test('countOccupied', () => {
  const array = [
    ['#', '#', '#'],
    ['#', '#', '#'],
    ['#', '#', '#'],
  ];
  expect(countOccupied(array, 0, 0)).toEqual(3);
  expect(countOccupied(array, 2, 0)).toEqual(3);
  expect(countOccupied(array, 2, 1)).toEqual(5);
  expect(countOccupied(array, 2, 1)).toEqual(5);
  expect(countOccupied(array, 0, 1)).toEqual(5);
  expect(countOccupied(array, 1, 1)).toEqual(8);
  expect(countOccupied(array, 2, 0)).toEqual(3);
  expect(countOccupied(array, 2, 1)).toEqual(5);
  expect(countOccupied(array, 0, 1)).toEqual(5);
  expect(
    countOccupied(
      [
        ['#', '#', '#'],
        ['#', '.', '#'],
        ['#', '#', '#'],
      ],
      0,
      1,
    ),
  ).toEqual(4);
  expect(
    countOccupied(
      [
        ['#', '#', 'L'],
        ['#', '.', '#'],
        ['#', '#', '#'],
      ],
      1,
      0,
    ),
  ).toEqual(3);
  expect(
    countOccupied(
      [
        ['#', '.', '#', '#', '.', 'L', '#', '.', '#', '#'],
        ['#', 'L', 'L', 'L', 'L', 'L', 'L', '.', 'L', '#'],
      ],
      5,
      0,
    ),
  ).toEqual(1);
});

test('day11Part1', () => {
  expect(
    day11Part1([
      ['L', '.', 'L', 'L', '.', 'L', 'L', '.', 'L', 'L'],
      ['L', 'L', 'L', 'L', 'L', 'L', 'L', '.', 'L', 'L'],
      ['L', '.', 'L', '.', 'L', '.', '.', 'L', '.', '.'],
      ['L', 'L', 'L', 'L', '.', 'L', 'L', '.', 'L', 'L'],
      ['L', '.', 'L', 'L', '.', 'L', 'L', '.', 'L', 'L'],
      ['L', '.', 'L', 'L', 'L', 'L', 'L', '.', 'L', 'L'],
      ['.', '.', 'L', '.', 'L', '.', '.', '.', '.', '.'],
      ['L', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'L'],
      ['L', '.', 'L', 'L', 'L', 'L', 'L', 'L', '.', 'L'],
      ['L', '.', 'L', 'L', 'L', 'L', 'L', '.', 'L', 'L'],
    ]),
  ).toEqual(37);
  const inputDay11 = getInputArrayString(11, 1).map((v) => v.split(''));
  // console.log(inputDay11);
  expect(day11Part1(inputDay11)).toEqual(2489);
});
