import { day15 } from './day15';

test(' day15', () => {
  expect(day15(2020, [0, 3, 6])).toEqual(436);
  expect(day15(2020, [1, 3, 2])).toEqual(1);
  expect(day15(2020, [2, 1, 3])).toEqual(10);
  expect(day15(2020, [1, 2, 3])).toEqual(27);
  expect(day15(2020, [2, 3, 1])).toEqual(78);
  expect(day15(2020, [3, 2, 1])).toEqual(438);
  expect(day15(2020, [3, 1, 2])).toEqual(1836);
  expect(day15(2020, [0, 13, 1, 16, 6, 17])).toEqual(234);
  expect(day15(30000000, [0, 3, 6])).toEqual(175594);
  expect(day15(30000000, [0, 13, 1, 16, 6, 17])).toEqual(8984);
});
