import { play, turn } from './day22';

describe('day22', () => {
  test('turn', () => {
    expect(
      turn({
        Player1Cards: [9, 2, 6, 3, 1],
        Player2Cards: [5, 8, 4, 7, 10],
      }),
    ).toStrictEqual({
      Player1Cards: [2, 6, 3, 1, 9, 5],
      Player2Cards: [8, 4, 7, 10],
    });
    expect(
      turn({
        Player1Cards: [2, 6, 3, 1, 9, 5],
        Player2Cards: [8, 4, 7, 10],
      }),
    ).toStrictEqual({
      Player1Cards: [6, 3, 1, 9, 5],
      Player2Cards: [4, 7, 10, 8, 2],
    });
  });
  test('play', () => {
    expect(
      play({
        Player1Cards: [9, 2, 6, 3, 1],
        Player2Cards: [5, 8, 4, 7, 10],
      }),
    ).toEqual(306);
    expect(
      play({
        Player1Cards: [18, 19, 16, 11, 47, 38, 6, 27, 9, 22, 15, 42, 3, 4, 21, 41, 14, 8, 23, 30, 40, 13, 35, 46, 50],
        Player2Cards: [39, 1, 29, 20, 45, 43, 12, 2, 37, 33, 49, 32, 10, 26, 36, 17, 34, 44, 25, 28, 24, 5, 48, 31, 7],
      }),
    ).toEqual(32824);
  });
});
