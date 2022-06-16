class Graph {
  constructor() {
    this.nodes = {};
  }

  addVertex(v1) {
    this.nodes[v1] = [];
  }

  addEdge(v1, v2) {
    this.nodes[v1].push(v2);
  }
}

const g1 = new Graph();
g1.addVertex(1);
g1.addVertex(2);
g1.addVertex(3);
g1.addVertex(4);
g1.addVertex(5);

g1.addEdge(1, 2);
g1.addEdge(1, 3);

g1.addEdge(2, 4);

g1.addEdge(3, 4);
g1.addEdge(3, 5);

g1.addEdge(4, 5);

// g1.addEdge(5, 1); // make cycle

function bfs(graph) {
  const visited = [];
  const queue = [];

  firstKey = Object.keys(graph)[0];
  queue.push(firstKey);

  while (queue.length > 0) {
    var targetVertex = queue.shift();
    var vertices = graph[targetVertex];

    targetVertex = parseInt(targetVertex);

    if (visited.includes(targetVertex)) {
      visited.push(targetVertex);

      if (Array.isArray(vertices) && vertices.length > 0) {
        queue.push(...vertices.map((n) => parseInt(n)));
      }
    }
  }

  console.log("visited", visited);
  return "no cycles";
}

console.log("Exploring graph: g1", g1);
console.log(bfs(g1.nodes));
