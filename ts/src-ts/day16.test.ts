import { day16Part1, parseInput } from './day16';
import { getInputString } from './tools';

describe('day16', () => {
  test('parseInput', () => {
    expect(
      parseInput(`class: 1-3 or 5-7
row: 6-11 or 33-44
seat: 13-40 or 45-50

your ticket:
7,1,14

nearby tickets:
7,3,47
40,4,50
55,2,20
38,6,12`),
    ).toStrictEqual({
      rules: [
        {
          name: 'class',
          ranges: [
            {
              max: 3,
              min: 1,
            },
            {
              max: 7,
              min: 5,
            },
          ],
        },
        {
          name: 'row',
          ranges: [
            {
              max: 11,
              min: 6,
            },
            {
              max: 44,
              min: 33,
            },
          ],
        },
        {
          name: 'seat',
          ranges: [
            {
              max: 40,
              min: 13,
            },
            {
              max: 50,
              min: 45,
            },
          ],
        },
      ],
      myTicket: [7, 1, 14],
      nearbyTickets: [
        [7, 3, 47],
        [40, 4, 50],
        [55, 2, 20],
        [38, 6, 12],
      ],
    });
  });
  test('day16Part1', () => {
    expect(
      day16Part1(
        parseInput(`class: 1-3 or 5-7
row: 6-11 or 33-44
seat: 13-40 or 45-50

your ticket:
7,1,14

nearby tickets:
7,3,47
40,4,50
55,2,20
38,6,12`),
      ),
    ).toEqual(71);
  });
  test('day16Part1', () => {
    expect(day16Part1(parseInput(getInputString(16, 1)))).toEqual(28882);
  });
});
