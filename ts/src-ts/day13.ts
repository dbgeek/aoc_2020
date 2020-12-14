interface part1 {
  targetTime: number;
  bussIds: number[];
}

function parseDay13Input(input: string[]): part1 {
  return {
    targetTime: +input[0],
    bussIds: input[1].match(/([0-9]+)/g).map((id) => +id),
  };
}

function calculateNext(targetTime: number, departs: number): number {
  return targetTime + (departs - (targetTime - Math.floor(targetTime / departs) * departs));
}

function day13Part1(input: part1): number {
  let bestId = -1;
  let bestNextTime = 9999999999;
  input.bussIds.forEach((id) => {
    const nextTime = calculateNext(input.targetTime, id);
    if (nextTime < bestNextTime) {
      bestNextTime = nextTime;
      bestId = id;
    }
  });
  return (bestNextTime - input.targetTime) * bestId;
}

export { calculateNext, parseDay13Input, day13Part1 };
