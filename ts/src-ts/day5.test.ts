import { day5Part1, day5Part2, getSeatID } from './day5';
import { getInputArrayString } from './tools';

test('testing getSeatID', () => {
  expect(getSeatID('FBFBBFFRLR')).toStrictEqual(357);
  expect(getSeatID('FFFBBBFRRR')).toStrictEqual(119);
  expect(getSeatID('BBFFBBFRLL')).toStrictEqual(820);
  expect(getSeatID('BBFFBBBRLL')).toStrictEqual(828);
});

test('day5Part1:', () => {
  expect(day5Part1(getInputArrayString(5, 1))).toBe(864);
});

test('day5Part2:', () => {
  expect(day5Part2(getInputArrayString(5, 1))).toBe(739);
});
