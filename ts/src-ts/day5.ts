function getSeatID(input: string): number {
  const rowStr = input.slice(0, 7);
  let row = 0;
  let left = 0;
  let right = 127;
  rowStr.split('').forEach((v, idx, arr) => {
    if (arr.length - 1 === idx) {
      if (v === 'F') {
        row = left;
      } else {
        row = right;
      }
    } else {
      const diff = right - left;
      if (v === 'F') {
        const r = Math.floor(diff / 2);
        right = left + r;
      } else {
        const r = Math.ceil(diff / 2);
        left = left + r;
      }
    }
  });

  left = 0;
  right = 7;
  let col = 0;
  const colStr = input.slice(7, 10);
  colStr.split('').forEach((v, idx, arr) => {
    if (arr.length - 1 === idx) {
      if (v === 'L') {
        col = left;
      } else {
        col = right;
      }
    } else {
      const diff = right - left;
      if (v === 'L') {
        const r = Math.floor(diff / 2);
        right = left + r;
      } else {
        const r = Math.ceil(diff / 2);
        left = left + r;
      }
    }
  });
  return row * 8 + col;
}

function day5Part1(boardingPasses: string[]): number {
  let maxSeatID = -1;
  boardingPasses.forEach((v) => {
    const seatID = getSeatID(v);
    if (seatID > maxSeatID) {
      maxSeatID = seatID;
    }
  });
  return maxSeatID;
}

function day5Part2(boardingPasses: string[]): number {
  const allSeats: number[] = [];
  boardingPasses.forEach((v) => {
    const seatID = getSeatID(v);
    allSeats.push(seatID);
  });
  allSeats.sort((a, b) => a - b);
  let lagID = allSeats[0];
  let mySeatID = -1;
  for (let i = 1; i < allSeats.length; i++) {
    const currId = allSeats[i];
    if (lagID + 1 !== currId) {
      mySeatID = lagID + 1;
      break;
    }
    lagID = currId;
  }
  return mySeatID;
}

export { day5Part1, day5Part2, getSeatID };
