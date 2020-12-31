function createNodeKeyPart1(x: number, y: number, z: number): string {
  return `${x},${y},${z}`;
}

function createNodeKeyPart2(x: number, y: number, z: number, w: number): string {
  return `${x},${y},${z},${w}`;
}

function getActiveNodes(input: string[][]): Set<string> {
  const activeNodes = new Set<string>();
  input.forEach((row, y) => {
    row.forEach((v, x) => {
      if (v === '#') {
        activeNodes.add(createNodeKeyPart1(x, y, 0));
      }
    });
  });
  return activeNodes;
}

function getActiveNodesPart2(input: string[][]): Set<string> {
  const activeNodes = new Set<string>();
  input.forEach((row, y) => {
    row.forEach((v, x) => {
      if (v === '#') {
        activeNodes.add(createNodeKeyPart2(x, y, 0, 0));
      }
    });
  });
  return activeNodes;
}

function getNeighborsPart1(node: string): Set<string> {
  const [x, y, z] = node.split(',').map((v) => +v);
  const neighbors = new Set<string>();
  for (let deltaX = -1; deltaX <= 1; deltaX++) {
    for (let deltaY = -1; deltaY <= 1; deltaY++) {
      for (let deltaZ = -1; deltaZ <= 1; deltaZ++) {
        const neighbor = createNodeKeyPart1(x + deltaX, y + deltaY, z + deltaZ);
        neighbors.add(neighbor);
      }
    }
  }
  neighbors.delete(node);
  return neighbors;
}

function getNeighborsPart2(node: string): Set<string> {
  const [x, y, z, w] = node.split(',').map((v) => +v);
  const neighbors = new Set<string>();
  for (let deltaX = -1; deltaX <= 1; deltaX++) {
    for (let deltaY = -1; deltaY <= 1; deltaY++) {
      for (let deltaZ = -1; deltaZ <= 1; deltaZ++) {
        for (let deltaW = -1; deltaW <= 1; deltaW++) {
          const neighbor = createNodeKeyPart2(x + deltaX, y + deltaY, z + deltaZ, w + deltaW);
          neighbors.add(neighbor);
        }
      }
    }
  }
  neighbors.delete(node);
  return neighbors;
}

function doSimulatePart1(activeNodes: Set<string>): Set<string> {
  const newActiveNodes = new Set<string>();
  const activationCount: Record<string, number> = {};
  for (const node of activeNodes) {
    const neighbors = getNeighborsPart1(node);
    let activeNeighborsCount = 0;
    for (const neighbor of neighbors) {
      if (activeNodes.has(neighbor)) {
        activeNeighborsCount += 1;
      } else {
        if (!(neighbor in activationCount)) {
          activationCount[neighbor] = 0;
        }
        activationCount[neighbor] += 1;
      }
    }
    if (activeNeighborsCount === 2 || activeNeighborsCount === 3) {
      newActiveNodes.add(node);
    }
  }
  for (const pNode in activationCount) {
    if (activationCount[pNode] === 3) {
      newActiveNodes.add(pNode);
    }
  }
  return newActiveNodes;
}

function doSimulatePart2(activeNodes: Set<string>): Set<string> {
  const newActiveNodes = new Set<string>();
  const activationCount: Record<string, number> = {};
  for (const node of activeNodes) {
    const neighbors = getNeighborsPart2(node);
    let activeNeighborsCount = 0;
    for (const neighbor of neighbors) {
      if (activeNodes.has(neighbor)) {
        activeNeighborsCount += 1;
      } else {
        if (!(neighbor in activationCount)) {
          activationCount[neighbor] = 0;
        }
        activationCount[neighbor] += 1;
      }
    }
    if (activeNeighborsCount === 2 || activeNeighborsCount === 3) {
      newActiveNodes.add(node);
    }
  }
  for (const pNode in activationCount) {
    if (activationCount[pNode] === 3) {
      newActiveNodes.add(pNode);
    }
  }
  return newActiveNodes;
}

function day17Part1(input: string[][]): number {
  let state = getActiveNodes(input);
  for (let i = 0; i < 6; i++) {
    state = doSimulatePart1(state);
  }
  return state.size;
}

function day17Part2(input: string[][]): number {
  let state = getActiveNodesPart2(input);
  for (let i = 0; i < 6; i++) {
    state = doSimulatePart2(state);
  }
  return state.size;
}

export { day17Part1, day17Part2, doSimulatePart1, getActiveNodes, getNeighborsPart1 };
