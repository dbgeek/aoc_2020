class Program {
  code: string[];
  mask: string[];
  memory: Map<number, number>; //Record<number, number>;
  constructor(input: string[]) {
    this.code = input;
    this.memory = new Map();
  }
  runPart1(): void {
    this.code.forEach((line) => {
      if (/^mask = /.test(line)) {
        const [, mask] = line.match(/^mask = (.*)$/);
        this.mask = [...mask];
      } else {
        const [, memoryAddress, value] = line.match(/^mem\[([0-9]+)\] = ([0-9]+)/);
        const str = [...(+value).toString(2).padStart(36, '0')]
          .map((v, i) => {
            if (this.mask[i] === 'X') return v;
            return this.mask[i];
          })
          .join('');
        this.memory.set(+memoryAddress, parseInt(str, 2));
      }
    });
  }
  part1(): number {
    let result = 0;
    this.memory.forEach((v) => (result += v));
    return result;
  }
}

export { Program };
