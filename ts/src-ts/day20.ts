let GRID_SIZE = -1;
let FOUND = false;

class Tile {
  ID: number;
  Cells: string[];

  constructor(ID: number, Cells: string[]) {
    this.ID = ID;
    this.Cells = Cells;
  }

  canBelow(tile: Tile): boolean {
    return this.Cells[this.Cells.length - 1] === tile.Cells[0];
  }
  canRight(tile: Tile): boolean {
    return this.Cells.map((row) => row[row.length - 1]).join('') === tile.Cells.map((row) => row[0]).join('');
  }
}

function flip(cells: string[]): string[] {
  return cells.map((row) => row.split('').reverse().join(''));
}

function rotate(cells: string[]): string[] {
  const rotated: string[][] = cells.map((row) => row.split(''));
  cells.forEach((row, idx) => {
    for (let col = 0; col < row.length; col++) {
      rotated[idx][col] = cells[col][cells.length - 1 - idx];
    }
  });
  return rotated.map((row) => row.join(''));
}

function inputToTiles(input: string[][]): Tile[] {
  const tiles: Tile[] = [];
  input.forEach((content) => {
    const [, id, ,] = content[0].match(/([0-9]+)/);
    const cells = content.slice(1);
    let tile = new Tile(+id, cells);
    for (let f = 0; f < 2; f++) {
      for (let r = 0; r < 4; r++) {
        tiles.push(tile);
        tile = new Tile(tile.ID, rotate(tile.Cells));
      }
      tile = new Tile(tile.ID, flip(tile.Cells));
    }
  });
  return tiles;
}

function search(row: number, col: number, visited: Set<number>, tiles: Tile[], grid: Tile[][]): void {
  if (row === GRID_SIZE) {
    FOUND = true;
    return;
  }
  for (let i = 0; i < tiles.length; i++) {
    const tile = tiles[i];
    if (FOUND) break;
    if (!visited.has(tile.ID)) {
      if (row > 0 && !grid[row - 1][col].canBelow(tile)) {
        continue;
      }
      if (col > 0 && !grid[row][col - 1].canRight(tile)) {
        continue;
      }
      grid[row][col] = tile;
      visited.add(tile.ID);
      if (col === GRID_SIZE - 1) {
        search(row + 1, 0, visited, tiles, grid);
      } else {
        search(row, col + 1, visited, tiles, grid);
      }
      visited.delete(tile.ID);
    }
  }
}

function day20Part1(tiles: Tile[]): number {
  GRID_SIZE = Math.sqrt(tiles.length / 8);
  const grid: Tile[][] = Array(GRID_SIZE)
    .fill(undefined)
    .map(() => Array(GRID_SIZE).fill(null));
  const visited = new Set<number>();
  search(0, 0, visited, tiles, grid);
  return grid[0][0].ID * grid[0][GRID_SIZE - 1].ID * grid[GRID_SIZE - 1][0].ID * grid[GRID_SIZE - 1][GRID_SIZE - 1].ID;
}

export { day20Part1, flip, inputToTiles, rotate, Tile };
