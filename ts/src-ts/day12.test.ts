import { calcDirection, doMove, Direction, Turn, day12Part1, doMoves, parseDay12Input } from './day12';
import { getInputArrayString } from './tools';

test('calcDirection', () => {
  expect(calcDirection(Direction.west, 90, Turn.R)).toEqual(Direction.north);
  expect(calcDirection(Direction.west, 180, Turn.R)).toEqual(Direction.east);
  expect(calcDirection(Direction.west, 360, Turn.R)).toEqual(Direction.west);
  expect(calcDirection(Direction.west, 270, Turn.R)).toEqual(Direction.south);
  expect(calcDirection(Direction.west, 270, Turn.L)).toEqual(Direction.north);
  expect(calcDirection(Direction.north, 270, Turn.L)).toEqual(Direction.east);
  expect(calcDirection(Direction.north, 360, Turn.L)).toEqual(Direction.north);
  expect(calcDirection(Direction.south, 360, Turn.L)).toEqual(Direction.south);
  expect(calcDirection(Direction.east, 360, Turn.L)).toEqual(Direction.east);
  expect(calcDirection(Direction.east, 90, Turn.L)).toEqual(Direction.north);
  expect(calcDirection(Direction.north, 90, Turn.L)).toEqual(Direction.west);
  expect(calcDirection(Direction.west, 180, Turn.L)).toEqual(Direction.east);
});

test('doMove', () => {
  expect(
    doMove(
      {
        x: 0,
        y: 0,
        direction: Direction.east,
      },
      {
        Action: 'R',
        Value: 180,
      },
    ),
  ).toStrictEqual({ x: 0, y: 0, direction: Direction.west });
  expect(
    doMove(
      {
        x: 0,
        y: 0,
        direction: Direction.east,
      },
      {
        Action: 'L',
        Value: 270,
      },
    ),
  ).toStrictEqual({ x: 0, y: 0, direction: Direction.south });
  expect(
    doMove(
      {
        x: 0,
        y: 0,
        direction: Direction.east,
      },
      {
        Action: 'F',
        Value: 10,
      },
    ),
  ).toStrictEqual({ x: 10, y: 0, direction: Direction.east });
  expect(
    doMove(
      {
        x: 0,
        y: 0,
        direction: Direction.north,
      },
      {
        Action: 'F',
        Value: 10,
      },
    ),
  ).toStrictEqual({ x: 0, y: 10, direction: Direction.north });
  expect(
    doMove(
      {
        x: 0,
        y: 0,
        direction: Direction.south,
      },
      {
        Action: 'F',
        Value: 10,
      },
    ),
  ).toStrictEqual({ x: 0, y: -10, direction: Direction.south });
  expect(
    doMove(
      {
        x: 10,
        y: 0,
        direction: Direction.west,
      },
      {
        Action: 'F',
        Value: 10,
      },
    ),
  ).toStrictEqual({ x: 0, y: 0, direction: Direction.west });
  expect(
    doMove(
      {
        x: 0,
        y: 0,
        direction: Direction.east,
      },
      {
        Action: 'S',
        Value: 5,
      },
    ),
  ).toStrictEqual({ x: 0, y: -5, direction: Direction.east });
  expect(
    doMove(
      {
        x: 0,
        y: 0,
        direction: Direction.east,
      },
      {
        Action: 'E',
        Value: 10,
      },
    ),
  ).toStrictEqual({ x: 10, y: 0, direction: Direction.east });
  expect(
    doMove(
      {
        x: 0,
        y: 0,
        direction: Direction.east,
      },
      {
        Action: 'N',
        Value: 10,
      },
    ),
  ).toStrictEqual({ x: 0, y: 10, direction: Direction.east });
  expect(
    doMove(
      {
        x: 10,
        y: 10,
        direction: Direction.east,
      },
      {
        Action: 'W',
        Value: 10,
      },
    ),
  ).toStrictEqual({ x: 0, y: 10, direction: Direction.east });
});

test('doMoves', () => {
  expect(
    doMoves(
      {
        x: 0,
        y: 0,
        direction: Direction.east,
      },
      [
        { Action: 'F', Value: 10 },
        { Action: 'N', Value: 3 },
        { Action: 'F', Value: 7 },
        { Action: 'R', Value: 90 },
        { Action: 'F', Value: 11 },
      ],
    ),
  ).toEqual({
    x: 17,
    y: -8,
    direction: Direction.south,
  });
});

test('day12Part1', () => {
  expect(
    day12Part1([
      { Action: 'F', Value: 10 },
      { Action: 'N', Value: 3 },
      { Action: 'F', Value: 7 },
      { Action: 'R', Value: 90 },
      { Action: 'F', Value: 11 },
    ]),
  ).toEqual(25);
  expect(day12Part1(parseDay12Input(getInputArrayString(12, 1)))).toEqual(2270);
});

test('parseDay12Input', () => {
  expect(parseDay12Input(['F10', 'N3', 'F7', 'R90', 'F11'])).toStrictEqual([
    { Action: 'F', Value: 10 },
    { Action: 'N', Value: 3 },
    { Action: 'F', Value: 7 },
    { Action: 'R', Value: 90 },
    { Action: 'F', Value: 11 },
  ]);
});
