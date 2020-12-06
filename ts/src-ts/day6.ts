function day6Part1(groupFroms: string[][]): number {
  const uniqueAnsware = new Set<string>();
  let sum = 0;
  groupFroms.forEach((grp) => {
    grp.forEach((p) => {
      p.split('').forEach((a) => {
        uniqueAnsware.add(a);
      });
    });
    sum += uniqueAnsware.size;
    uniqueAnsware.clear();
  });
  return sum;
}

function day6Part2(groupFroms: string[][]): number {
  const allAnswares = new Set<string>();
  const uniqueAnsware = new Set<string>();
  let sum = 0;
  groupFroms.forEach((grp) => {
    'abcdefghijklmnopqrstuvwxyz'.split('').forEach((char) => {
      allAnswares.add(char);
    });
    grp.forEach((p) => {
      p.split('').forEach((a) => {
        uniqueAnsware.add(a);
      });
      allAnswares.forEach((b) => {
        if (!uniqueAnsware.has(b)) {
          allAnswares.delete(b);
        }
      });
      uniqueAnsware.clear();
    });
    sum += allAnswares.size;
    allAnswares.clear();
  });
  return sum;
}

export { day6Part1, day6Part2 };
