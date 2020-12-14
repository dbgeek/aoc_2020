interface Instruction {
  instruction: string;
  operator: string;
  value: number;
  executed: boolean;
}
function parseLine(line: string): Instruction {
  const [, instruction, operator, value] = line.match(/(^[a-z]{3}).([+|-])([0-9]+)$/);
  return {
    instruction,
    operator,
    value: +value,
    executed: false,
  };
}

function parseInput(input: string[]): Instruction[] {
  return input.map((line) => parseLine(line));
}

function day8Part1(input: Instruction[]): number {
  let instPos = 0;
  let accumulator = 0;
  // eslint-disable-next-line no-constant-condition
  while (true) {
    const instruction = input[instPos];
    if (!instruction.executed) {
      switch (instruction.instruction) {
        case 'acc':
          instruction.operator === '+' ? (accumulator += instruction.value) : (accumulator -= instruction.value);
          instPos++;
          break;
        case 'jmp':
          instruction.operator === '+' ? (instPos += instruction.value) : (instPos -= instruction.value);
          break;
        case 'nop':
          instPos++;
          break;
      }
      instruction.executed = true;
    } else {
      break;
    }
  }
  return accumulator;
}

function swap(instruction: string): string {
  return instruction === 'nop' ? 'jmp' : 'nop';
}

function clearInstructions(instructions: Instruction[]): void {
  instructions.forEach((i) => (i.executed = false));
}

function day8Part2(input: Instruction[]): number {
  let instPos = 0;
  let accumulator = 0;
  let programTerminated = false;
  for (let i = 0; i < input.length; i++) {
    const v = input[i];
    if (v.instruction === 'nop' || v.instruction === 'jmp') {
      v.instruction = swap(v.instruction);
      // eslint-disable-next-line no-constant-condition
      while (true) {
        const instruction = input[instPos];
        if (!instruction.executed) {
          switch (instruction.instruction) {
            case 'acc':
              instruction.operator === '+' ? (accumulator += instruction.value) : (accumulator -= instruction.value);
              instPos++;
              break;
            case 'jmp':
              instruction.operator === '+' ? (instPos += instruction.value) : (instPos -= instruction.value);
              break;
            case 'nop':
              instPos++;
              break;
          }
          instruction.executed = true;
          if (instPos === input.length) {
            break;
          }
        } else {
          programTerminated = true;
          break;
        }
      }
      if (!programTerminated) {
        return accumulator;
      }
      accumulator = 0;
      instPos = 0;
      programTerminated = false;
      clearInstructions(input);
      v.instruction = swap(v.instruction);
    }
  }
  return undefined;
}

export { parseInput, parseLine, day8Part1, day8Part2, swap };
