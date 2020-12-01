function day1Part1(input: Array<number>): number {
  const targetSum = 2020;
  input.sort((a, b) => a - b);
  let leftPointer = 0;
  let rightPointer = input.length - 1;
  while (leftPointer < rightPointer) {
    const leftValue = input[leftPointer];
    const rightValue = input[rightPointer];
    const currentSum = leftValue + rightValue;
    if (targetSum === currentSum) {
      return leftValue * rightValue;
    } else if (currentSum < targetSum) {
      leftPointer++;
    } else {
      rightPointer--;
    }
  }
  return undefined;
}

/* istanbul ignore next line */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function day1Part1BruteForce(input: Array<number>): number {
  /* istanbul ignore next line */
  for (let i = 0; i < input.length - 1; i++) {
    for (let j = i + 1; j < input.length; j++) {
      if (input[i] + input[j] === 2020) {
        return input[i] * input[j];
      }
    }
  }
  /* istanbul ignore next line */
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

/* istanbul ignore next line */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function day1Part2BruteForce(input: Array<number>): number {
  /* istanbul ignore next line */
  const targetSum = 2020;
  /* istanbul ignore next line */
  for (let i = 0; i < input.length - 2; i++) {
    for (let j = i + 1; j < input.length - 1; j++) {
      for (let k = j + 1; k < input.length; k++) {
        const currentSum = input[i] + input[j] + input[k];
        if (currentSum === targetSum) {
          return input[i] * input[j] * input[k];
        }
      }
    }
  }
  /* istanbul ignore next line */
  return undefined;
}

export { day1Part1, day1Part2 };
