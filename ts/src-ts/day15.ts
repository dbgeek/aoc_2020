function day15(stopAt: number, init: number[]): number {
  const mem: Map<number, number> = new Map();
  let lastNr: number;
  let newNr: number;
  let turn = 1;
  init.forEach((number) => {
    mem.set(number, turn);
    lastNr = number;
    turn++;
  });
  while (turn <= stopAt) {
    if (mem.has(lastNr)) {
      newNr = turn - 1 - mem.get(lastNr);
    } else {
      newNr = 0;
    }
    mem.set(lastNr, turn - 1);
    lastNr = newNr;
    turn++;
  }
  return newNr;
}

export { day15 };
