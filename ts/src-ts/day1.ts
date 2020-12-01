function day1Part1(input: Array<number>): number {
  for (let i = 0; i < input.length - 1; i++) {
    for (let j = i + 1; j < input.length; j++) {
      if (input[i] + input[j] === 2020) {
        return input[i] * input[j];
      }
    }
  }
  return undefined;
}

function day1Part2(input: Array<number>): number {
  input.sort((a, b) => a - b);
  for (let i = 0; i < input.length - 2; i++) {
    let left = i + 1;
    let right = input.length - 1;
    while (left < right) {
      const currentSum = input[i] + input[left] + input[right];
      if (currentSum === 2020) {
        return input[i] * input[left] * input[right];
      } else if (currentSum < 2020) {
        left++;
      }
      right--;
    }
  }
  return undefined;
}

export { day1Part1, day1Part2 };
