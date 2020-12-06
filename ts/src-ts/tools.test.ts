import { getInputArrayString, getInputNestedArrayString, getInputArrayNumber } from './tools';

test('testing getInputArrayNumber', () => {
  expect(getInputArrayNumber(0, 0)).toStrictEqual([1721, 979, 366, 299, 675, 1456]);
  expect(getInputArrayString(0, 0)).toStrictEqual(['1721', '979', '366', '299', '675', '1456']);
  expect(getInputNestedArrayString(0, 2)).toStrictEqual([
    ['1721'],
    ['979', '366', '299'],
    ['675', '1456'],
    ['xc vvb hh'],
  ]);
});
