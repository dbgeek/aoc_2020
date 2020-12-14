import { calculateNext, parseDay13Input, day13Part1 } from './day13';
import { getInputArrayString } from './tools';

test('calculateNext', () => {
  expect(calculateNext(939, 7)).toEqual(945);
  expect(calculateNext(939, 13)).toEqual(949);
  expect(calculateNext(939, 59)).toEqual(944);
});

test('parseDay13Input', () => {
  expect(parseDay13Input(['939', '7,13,x,x,59,x,31,19'])).toStrictEqual({
    targetTime: 939,
    bussIds: [7, 13, 59, 31, 19],
  });
});

test('day13Part1', () => {
  expect(
    day13Part1({
      targetTime: 939,
      bussIds: [7, 13, 59, 31, 19],
    }),
  ).toEqual(295);
  expect(day13Part1(parseDay13Input(getInputArrayString(13, 1)))).toEqual(1915);
});
