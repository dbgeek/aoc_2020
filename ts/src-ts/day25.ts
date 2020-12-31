interface Turn {
  subject: number;
  turn: number;
}

function calculateTurn(publicCardKey: number, publicDoorKey: number, divider = 20201227, subject = 7): Turn {
  let currKey = 1;
  for (let turnCount = 1; turnCount < Number.MAX_SAFE_INTEGER; turnCount++) {
    currKey = (currKey * subject) % divider;
    if (currKey === publicCardKey) {
      return {
        subject: publicDoorKey,
        turn: turnCount,
      };
    }
    if (currKey === publicDoorKey) {
      return {
        subject: publicCardKey,
        turn: turnCount,
      };
    }
  }
}

function getEncryptionKey(subject: number, turns: number, divider = 20201227): number {
  let value = 1;
  for (let i = 1; i <= turns; i++) {
    value = (value * subject) % divider;
  }
  return value;
}

function day25Part1(publicCardKey: number, publicDoorKey: number): number {
  const turns = calculateTurn(publicCardKey, publicDoorKey);
  return getEncryptionKey(turns['subject'], turns['turn']);
}

export { calculateTurn, day25Part1 };
