const graph1 = {
  london: ["paris", "copenhagen"],
  paris: ["madrid", "barcelona", "copenhagen"],
  copenhagen: ["berlin", "oslo"],
};

function dfs(graph, city) {
  const visited = [];
  let found = false;

  const dfsUtil = (vertex) => {
    if (found) return;
    if (!graph[vertex]) return;

    for (let n of graph[vertex]) {
      if (city === n) {
        found = true;
        return;
      }

      if (!visited.includes(n)) {
        visited.push(n);
        dfsUtil(n);
      }
    }
  };

  const firstV = Object.keys(graph)[0];
  visited.push(firstV);
  dfsUtil(firstV);

  return found
    ? "YES! city " + city + " was found"
    : "NO :( city " + city + " was not found";
}

console.log(dfs(graph1, "yerevan"));
