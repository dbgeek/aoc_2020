import { day6Part1, day6Part2 } from './day6';
import { getInputNestedArrayString } from './tools';

test('day6Part1', () => {
  expect(day6Part1([['abc'], ['a', 'b', 'c'], ['ab', 'ac'], ['a', 'a', 'a', 'a'], ['b']])).toBe(11);
});

test('day6Part2', () => {
  expect(day6Part2([['abc'], ['a', 'b', 'c'], ['ab', 'ac'], ['a', 'a', 'a', 'a'], ['b']])).toBe(6);
});

test('day6Part1 full input:', () => {
  expect(day6Part1(getInputNestedArrayString(6, 1))).toBe(6799);
});

test('day6Part2 full input:', () => {
  expect(day6Part2(getInputNestedArrayString(6, 1))).toBe(3354);
});
