function countOccupied(array: string[][], x: number, y: number): number {
  const startX = x - 1 >= 0 ? x - 1 : x;
  const endX = x + 1 < array[0].length ? x + 1 : x;
  const startY = y - 1 >= 0 ? y - 1 : y;
  const endY = y + 1 >= array.length ? y : y + 1;
  let sum = 0;
  for (let i = startY; i <= endY; i++) {
    for (let j = startX; j <= endX; j++) {
      if (array[i][j] === '#') {
        i === y && j === x ? sum : sum++;
      }
    }
  }
  return sum;
}

function day11Part1(array: string[][]): number {
  let changed = true;
  while (changed) {
    const l: string[][] = [];
    changed = false;
    array.forEach((a, y) => {
      const row: string[] = [];
      a.forEach((v, x) => {
        const q = countOccupied(array, x, y);
        if (v === 'L' && q === 0) {
          changed = true;
          row.push('#');
        } else if (v === '#' && q > 3) {
          row.push('L');
          changed = true;
        } else {
          row.push(v);
        }
      });
      l.push(row);
    });
    array = l;
  }
  return array.reduce((p, v) => {
    p += v.reduce((sum1, v1) => {
      sum1 += v1 === '#' ? 1 : 0;
      return sum1;
    }, 0);
    return p;
  }, 0);
}
export { day11Part1, countOccupied };
