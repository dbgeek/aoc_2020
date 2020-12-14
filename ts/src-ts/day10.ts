function day10Part1(input: number[]): number {
  input.sort((a, b) => a - b);
  let joltRate1Sum = 1;
  let joltRate3Sum = 1;
  input.forEach((v, idx, arr) => {
    if (idx > 0) {
      const joltRate = v - arr[idx - 1];
      //console.log(joltRate);
      switch (joltRate) {
        case 1:
          joltRate1Sum++;
          break;
        case 3:
          joltRate3Sum++;
          break;
      }
    }
  });
  return joltRate1Sum * joltRate3Sum;
}

function day10Part2(array: number[], memo: Record<string, number> = {}): number {
  const key = array.join(',');
  if (key in memo) {
    return memo[key];
  }
  let result = 1;
  for (let i = 1; i < array.length - 1; i++) {
    if (array[i + 1] - array[i - 1] <= 3) {
      const arr2 = [array[i - 1]].concat(array.slice(i + 1));
      result += day10Part2(arr2, memo);
    }
  }
  memo[key] = result;
  return result;
}
export { day10Part1, day10Part2 };
