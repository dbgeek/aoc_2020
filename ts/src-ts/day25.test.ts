import { day25Part1 } from './day25';

describe('day25', () => {
  test('day25Part1', () => {
    expect(day25Part1(17807724, 5764801)).toEqual(14897079);
    expect(day25Part1(4057428, 14222596)).toEqual(3286137);
  });
});
