import { day2Part1, day2Part2, toPasswordPolicies } from './day2';

test('toPasswordPolicies', () => {
  expect(toPasswordPolicies(['1-3 a: abcde', '1-3 b: cdefg', '2-9 c: ccccccccc'])).toStrictEqual([
    {
      min: 1,
      max: 3,
      character: 'a',
      password: 'abcde',
    },
    {
      min: 1,
      max: 3,
      character: 'b',
      password: 'cdefg',
    },
    {
      min: 2,
      max: 9,
      character: 'c',
      password: 'ccccccccc',
    },
  ]);
});

test('day2Part1', () => {
  expect(
    day2Part1([
      {
        min: 1,
        max: 3,
        character: 'a',
        password: 'abcde',
      },
      {
        min: 1,
        max: 3,
        character: 'b',
        password: 'cdefg',
      },
      {
        min: 2,
        max: 9,
        character: 'c',
        password: 'ccccccccc',
      },
    ]),
  ).toEqual(2);
});

test('day2Part2', () => {
  expect(
    day2Part2([
      {
        min: 1,
        max: 3,
        character: 'a',
        password: 'abcde',
      },
      {
        min: 1,
        max: 3,
        character: 'b',
        password: 'cdefg',
      },
      {
        min: 2,
        max: 9,
        character: 'c',
        password: 'ccccccccc',
      },
    ]),
  ).toEqual(1);
});
