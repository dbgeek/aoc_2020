import { Program } from './day14';
import { getInputArrayString } from './tools';

test('program', () => {
  const program = new Program([
    'mask = XXXXXXXXXXXXXXXXXXXXXXXXXXXXX1XXXX0X',
    'mem[8] = 11',
    'mem[7] = 101',
    'mem[8] = 0',
  ]);
  program.runPart1();
  expect(program.part1()).toEqual(165);
  const day14PartProgram = new Program(getInputArrayString(14, 1));
  day14PartProgram.runPart1();
  expect(day14PartProgram.part1()).toEqual(8570568288597);
});
