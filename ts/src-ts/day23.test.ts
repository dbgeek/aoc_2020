import { day23Part1, getDestination, pickUp } from './day23';

describe('day23', () => {
  test('getDestination', () => {
    expect(getDestination([3, 8, 9, 1, 2, 5, 4, 6, 7], 3, [8, 9, 1], [1, 9])).toEqual(2);
    expect(getDestination([3, 2, 8, 9, 1, 5, 4, 6, 7], 2, [8, 9, 1], [1, 9])).toEqual(7);
    expect(getDestination([3, 2, 5, 4, 6, 7, 8, 9, 1], 5, [4, 6, 7], [1, 9])).toEqual(3);
    expect(getDestination([7, 4, 1, 5, 8, 3, 9, 2, 6], 6, [7, 4, 1], [1, 9])).toEqual(5);
  });
  test('pickUp', () => {
    expect(pickUp([3, 2, 5, 4, 6, 7, 8, 9, 1], 2)).toStrictEqual([4, 6, 7]);
    expect(pickUp([3, 8, 9, 1, 2, 5, 4, 6, 7], 0)).toStrictEqual([8, 9, 1]);
    expect(pickUp([3, 2, 8, 9, 1, 5, 4, 6, 7], 1)).toStrictEqual([8, 9, 1]);
    expect(pickUp([7, 4, 1, 5, 8, 3, 9, 2, 6], 8)).toStrictEqual([7, 4, 1]);
    expect(pickUp([7, 2, 5, 8, 4, 1, 9, 3, 6], 6)).toStrictEqual([3, 6, 7]);
    expect(pickUp([7, 2, 5, 8, 4, 1, 9, 3, 6], 7)).toStrictEqual([6, 7, 2]);
  });
  test('day23Part1', () => {
    expect(day23Part1([3, 8, 9, 1, 2, 5, 4, 6, 7], 10)).toEqual('92658374');
    expect(day23Part1([3, 8, 9, 1, 2, 5, 4, 6, 7], 100)).toEqual('67384529');
    expect(day23Part1([4, 6, 3, 5, 2, 8, 1, 7, 9], 100)).toEqual('52937846');
  });
});
