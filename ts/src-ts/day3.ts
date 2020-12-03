function parseInputDay3(input: Array<string>): string[][] {
  return input.reduce((p, v) => {
    p.push(v.split(''));
    return p;
  }, []);
}

function walkMap(map: string[][], sloop: number[]) {
  let x = 0;
  let y = 0;
  let nrTrees = 0;
  while (y < map.length) {
    if (map[y][x] === '#') nrTrees++;
    x = (x + sloop[0]) % map[y].length;
    y += sloop[1];
  }
  return nrTrees;
}

function day3Part1(input: string[][]): number {
  return walkMap(input, [3, 1]);
}

function day3Part2(input: string[][]): number {
  const slops = [
    [1, 1],
    [3, 1],
    [5, 1],
    [7, 1],
    [1, 2],
  ];
  const sumSlops: number[] = [];
  slops.forEach((sloop) => {
    sumSlops.push(walkMap(input, sloop));
  });
  return sumSlops.reduce((p, v) => p * v, 1);
}

export { day3Part1, day3Part2, parseInputDay3 };
