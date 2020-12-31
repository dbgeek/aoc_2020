interface Contents {
  count: number;
  bag: string;
}

interface Bag {
  bag: string;
  contents: Contents[];
}
type BagCanContain = Record<string, string[]>;
type BagCanContain2 = Record<string, Contents[]>;
type BagCanContain4 = Record<string, number>;
type BagCanContain3 = Record<string, BagCanContain4>;
function parseLine(line: string): Bag {
  const [left, right] = line.split(' contain ');
  const bag = left.replace(' bags', '');
  const contents = right.split(', ').map((i) => {
    if (i.match(/no other bags/)) return undefined;
    const [, count, bag] = i.match(/^([0-9]+) (.+) bag/);
    return {
      count: +count,
      bag,
    };
  });
  return {
    bag,
    contents: contents.reduce((p, v) => {
      if (v !== undefined) {
        p.push(v);
      }
      return p;
    }, []),
  };
}

function parseInput(input: string[]): Bag[] {
  const bags: Bag[] = [];
  input.forEach((v) => {
    bags.push(parseLine(v));
  });
  return bags;
}

function parseInput2(input: string[], bags: BagCanContain2 = {}): BagCanContain2 {
  input.forEach((v) => {
    const bag = parseLine(v);
    bags[bag.bag] = bag.contents;
  });
  return bags;
}

function traverseBag(graph: BagCanContain, bag: string, visit = new Set()): number {
  if (visit.has(bag)) return 0;

  visit.add(bag);

  let numbBags = 1;
  for (const neighbor of graph[bag]) {
    numbBags += traverseBag(graph, neighbor, visit);
  }
  return numbBags;
}

function day7Part1(input: string[]): number {
  const graph: BagCanContain = {};
  const parsedInput = parseInput2(input);
  Object.keys(parsedInput).forEach((key) => {
    if (!(key in graph)) {
      graph[key] = [];
    }
    parsedInput[key].forEach((bag) => {
      if (!(bag.bag in graph)) {
        graph[bag.bag] = [];
      }
      graph[bag.bag].push(key);
    });
  });
  return traverseBag(graph, 'shiny gold') - 1;
}

function traverseBagPart2(graph: BagCanContain3, bag: string): number {
  let cnt = 1;
  const keys = Object.keys(graph[bag]);
  for (let i = 0; i < keys.length; i++) {
    const qty = graph[bag][keys[i]];
    cnt += qty * traverseBagPart2(graph, keys[i]);
  }
  return cnt;
}

function day7Part2(input: string[]): number {
  const graph: BagCanContain3 = {};
  const parsedInput = parseInput2(input);
  Object.keys(parsedInput).forEach((key) => {
    graph[key] = {};
    parsedInput[key].forEach((bag) => {
      graph[key][bag.bag] = bag.count;
    });
  });
  return traverseBagPart2(graph, 'shiny gold') - 1;
}

export { Bag, day7Part1, day7Part2, parseInput, parseInput2 };
