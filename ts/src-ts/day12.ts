enum Direction {
  north = 0,
  east,
  south,
  west,
}

enum Turn {
  L = -1,
  R = 1,
}

interface Ferry {
  x: number;
  y: number;
  direction: Direction;
}

interface Move {
  Action: string;
  Value: number;
}

function parseDay12Input(input: string[]): Move[] {
  return input.map((v) => {
    const [, action, value] = v.match(/([A-Z])([0-9].*)$/);
    return {
      Action: action,
      Value: +value,
    };
  });
}

function calcDirection(current: Direction, degree: number, turn: Turn): Direction {
  const steps = degree / 90;
  if (turn === Turn.R) {
    const newDir = (current + steps) % 4;
    return newDir;
  }
  const x = current + steps * turn;
  const y = 4 + x;
  return x < 0 ? y : x;
}

function doMove(ferry: Ferry, move: Move): Ferry {
  switch (move.Action) {
    case 'N':
      ferry.y += move.Value;
      break;
    case 'S':
      ferry.y -= move.Value;
      break;
    case 'E':
      ferry.x += move.Value;
      break;
    case 'W':
      ferry.x -= move.Value;
      break;
    case 'F':
      switch (ferry.direction) {
        case Direction.north:
          ferry.y += move.Value;
          break;
        case Direction.south:
          ferry.y -= move.Value;
          break;
        case Direction.east:
          ferry.x += move.Value;
          break;
        case Direction.west:
          ferry.x -= move.Value;
          break;
      }
      break;
    case 'L':
      ferry.direction = calcDirection(ferry.direction, move.Value, Turn.L);
      break;
    case 'R':
      ferry.direction = calcDirection(ferry.direction, move.Value, Turn.R);
      break;
  }
  return ferry;
}

function doMoves(ferry: Ferry, moves: Move[]): Ferry {
  moves.forEach((move) => {
    ferry = doMove(ferry, move);
  });
  return ferry;
}

function day12Part1(moves: Move[]): number {
  let ferry = {
    x: 0,
    y: 0,
    direction: Direction.east,
  };
  ferry = doMoves(ferry, moves);
  return Math.abs(ferry.x) + Math.abs(ferry.y);
}

export { calcDirection, doMove, Direction, Turn, Ferry, Move, day12Part1, doMoves, parseDay12Input };
