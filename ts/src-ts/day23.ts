function getDestination(array: number[], current: number, pickedUp: number[], minMax: number[]): number {
  const [min, max] = minMax;
  let destination = current;
  for (;;) {
    destination = destination - 1 < min ? max : destination - 1;
    if (!pickedUp.includes(destination) && current >= min) {
      return destination;
    }
  }
}

function pickUp(array: number[], currPos: number, pickupCnt = 3): number[] {
  const start = currPos + 1;
  const end = pickupCnt;
  let picked = array.splice(start, end);
  if (picked.length < 3) {
    picked = picked.concat(array.splice(0, 3 - picked.length));
  }
  return picked;
}

function day23Part1(array: number[], moves: number): string {
  let state = [...array];
  const arrayLength = array.length;
  let currentCup = state[0];
  let currentCupPos = 0;
  for (let i = 0; i < moves; i++) {
    const pickedUped = pickUp(state, currentCupPos);
    const destinationCup = getDestination(state, currentCup, pickedUped, [1, 9]);
    const destinationCupPos = state.indexOf(destinationCup);
    const instPos = (destinationCupPos + 1) % arrayLength;
    state = state.slice(0, instPos).concat(pickedUped).concat(state.slice(instPos));
    currentCupPos = (state.indexOf(currentCup) + 1) % arrayLength;
    currentCup = state[currentCupPos];
  }
  const result: number[] = [];
  const onePost = state.indexOf(1);
  for (let i = 1; i < arrayLength; i++) {
    result.push(state[(onePost + i) % arrayLength]);
  }
  return result.join('');
}

export { day23Part1, getDestination, pickUp };
