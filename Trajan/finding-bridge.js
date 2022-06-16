const g1 = {
  1: [2],
  2: [3, 4],
  3: [2, 4],
  4: [2, 3],
};

const g2 = {
  1: [2, 3],
  2: [1, 3],
  3: [1, 2, 4],
  4: [6, 5],
  5: [4, 6],
  6: [4, 5],
};

function bfs(graph) {
  const visited = {};
  const discovery = {};
  const lowest = {};

  function traverse(current, time = 0) {
    visited[current] = true;
    discovery[current] = lowest[current] = time++;

    for (let n of graph[current]) {
      if (!visited[n]) {
        traverse(n, time);

        if (lowest[n] > lowest[current]) {
          console.log(`Found bridge between ${n} and ${current}`);
        }
      } else {
        lowest[current] = Math.min(lowest[n], lowest[current]);
      }
    }
  }

  traverse(1);

  return Object.keys(visited);
}

const r = bfs(g2);
console.log("Visited: ", r);
