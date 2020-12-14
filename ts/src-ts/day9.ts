function twoSumPart(array: number[], startPos: number, stopPos: number): number[] {
  const twoSumPartArray: number[] = [];
  for (let i = startPos; i < stopPos; i++) {
    for (let j = i + 1; j <= stopPos; j++) {
      const sum = array[i] + array[j];
      twoSumPartArray.push(sum);
    }
  }
  return twoSumPartArray;
}

function day9Part1(input: number[], range = 25): number {
  for (let i = range; i < input.length; i++) {
    const sumOfTwo = twoSumPart(input, i - range, i - 1);
    const curValue = input[i];
    if (!sumOfTwo.includes(curValue)) return curValue;
  }
  return undefined;
}

function day9Part2(input: number[], target: number): number {
  let currSum = 0;
  for (let i = 0; i < input.length - 1; i++) {
    currSum = input[i] + input[i + 1];
    let curIdx = i + 1;
    while (currSum !== target) {
      curIdx++;
      currSum += input[curIdx];
      if (curIdx >= input.length - 1) {
        break;
      }
    }
    if (currSum === target) {
      const range = input.slice(i, curIdx + 1).sort((a, b) => a - b);
      return range[0] + range[range.length - 1];
    }
  }

  return undefined;
}

export { twoSumPart, day9Part1, day9Part2 };
