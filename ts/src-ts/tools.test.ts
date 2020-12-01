import { getInputArrayNumber } from './tools';

test('testing getInputArrayNumber', () => {
  expect(getInputArrayNumber(0, 0)).toStrictEqual([1721, 979, 366, 299, 675, 1456]);
});
