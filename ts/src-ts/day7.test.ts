import { day7Part1, day7Part2, parseInput, parseInput2 } from './day7';
import { getInputArrayString } from './tools';

test('parseInput: ', () => {
  expect(
    parseInput([
      'light red bags contain 1 bright white bag, 2 muted yellow bags.',
      'dark orange bags contain 3 bright white bags, 4 muted yellow bags.',
      'bright white bags contain 1 shiny gold bag.',
      'muted yellow bags contain 2 shiny gold bags, 9 faded blue bags.',
      'shiny gold bags contain 1 dark olive bag, 2 vibrant plum bags.',
      'dark olive bags contain 3 faded blue bags, 4 dotted black bags.',
      'vibrant plum bags contain 5 faded blue bags, 6 dotted black bags.',
      'faded blue bags contain no other bags.',
      'dotted black bags contain no other bags.',
    ]),
  ).toStrictEqual([
    {
      bag: 'light red',
      contents: [
        { count: 1, bag: 'bright white' },
        { count: 2, bag: 'muted yellow' },
      ],
    },
    {
      bag: 'dark orange',
      contents: [
        { count: 3, bag: 'bright white' },
        { count: 4, bag: 'muted yellow' },
      ],
    },
    { bag: 'bright white', contents: [{ count: 1, bag: 'shiny gold' }] },
    {
      bag: 'muted yellow',
      contents: [
        { count: 2, bag: 'shiny gold' },
        { count: 9, bag: 'faded blue' },
      ],
    },
    {
      bag: 'shiny gold',
      contents: [
        { count: 1, bag: 'dark olive' },
        { count: 2, bag: 'vibrant plum' },
      ],
    },
    {
      bag: 'dark olive',
      contents: [
        { count: 3, bag: 'faded blue' },
        { count: 4, bag: 'dotted black' },
      ],
    },
    {
      bag: 'vibrant plum',
      contents: [
        { count: 5, bag: 'faded blue' },
        { count: 6, bag: 'dotted black' },
      ],
    },
    { bag: 'faded blue', contents: [] },
    { bag: 'dotted black', contents: [] },
  ]);
});

test('parseInput2: ', () => {
  expect(
    parseInput2([
      'light red bags contain 1 bright white bag, 2 muted yellow bags.',
      'dark orange bags contain 3 bright white bags, 4 muted yellow bags.',
      'bright white bags contain 1 shiny gold bag.',
      'muted yellow bags contain 2 shiny gold bags, 9 faded blue bags.',
      'shiny gold bags contain 1 dark olive bag, 2 vibrant plum bags.',
      'dark olive bags contain 3 faded blue bags, 4 dotted black bags.',
      'vibrant plum bags contain 5 faded blue bags, 6 dotted black bags.',
      'faded blue bags contain no other bags.',
      'dotted black bags contain no other bags.',
    ]),
  ).toStrictEqual({
    'light red': [
      { count: 1, bag: 'bright white' },
      { count: 2, bag: 'muted yellow' },
    ],
    'dark orange': [
      { count: 3, bag: 'bright white' },
      { count: 4, bag: 'muted yellow' },
    ],
    'bright white': [{ count: 1, bag: 'shiny gold' }],
    'muted yellow': [
      { count: 2, bag: 'shiny gold' },
      { count: 9, bag: 'faded blue' },
    ],
    'shiny gold': [
      { count: 1, bag: 'dark olive' },
      { count: 2, bag: 'vibrant plum' },
    ],
    'dark olive': [
      { count: 3, bag: 'faded blue' },
      { count: 4, bag: 'dotted black' },
    ],
    'vibrant plum': [
      { count: 5, bag: 'faded blue' },
      { count: 6, bag: 'dotted black' },
    ],
    'faded blue': [],
    'dotted black': [],
  });
});

test('day7Part1: ', () => {
  expect(
    day7Part1([
      'light red bags contain 1 bright white bag, 2 muted yellow bags.',
      'dark orange bags contain 3 bright white bags, 4 muted yellow bags.',
      'bright white bags contain 1 shiny gold bag.',
      'muted yellow bags contain 2 shiny gold bags, 9 faded blue bags.',
      'shiny gold bags contain 1 dark olive bag, 2 vibrant plum bags.',
      'dark olive bags contain 3 faded blue bags, 4 dotted black bags.',
      'vibrant plum bags contain 5 faded blue bags, 6 dotted black bags.',
      'faded blue bags contain no other bags.',
      'dotted black bags contain no other bags.',
    ]),
  ).toEqual(4);
  expect(day7Part1(getInputArrayString(7, 1))).toBe(372);
});

test('day7Part2: ', () => {
  expect(
    day7Part2([
      'shiny gold bags contain 2 dark red bags.',
      'dark red bags contain 2 dark orange bags.',
      'dark orange bags contain 2 dark yellow bags.',
      'dark yellow bags contain 2 dark green bags.',
      'dark green bags contain 2 dark blue bags.',
      'dark blue bags contain 2 dark violet bags.',
      'dark violet bags contain no other bags.',
    ]),
  ).toEqual(126);
  expect(day7Part2(getInputArrayString(7, 1))).toBe(8015);
});
