var id = 0;

function criticalConnections(numberOfNodes, connections) {
  const graph = buildGraph(connections);
  const low = new Array(numberOfNodes);
  const disc = new Array(numberOfNodes);
  disc.fill(-1);
  const result = [];

  dfs(0, low, disc, result, graph, 0);

  return result;
}

function dfs(current, low, disc, result, graph, parent) {
  low[current] = disc[current] = ++id;

  for (let i = 0; i < graph[current].length; i++) {
    const next = graph[current][i];
    if (next === parent) {
      continue;
    }
    if (disc[next] === -1) {
      dfs(next, low, disc, result, graph, current);
      low[current] = Math.min(low[current], low[next]);
      if (disc[current] < low[next]) {
        result.push([current, next]);
      }
    } else {
      low[current] = Math.min(low[current], disc[next]);
    }
  }
}

function buildGraph(connections) {
  const graph = {};

  for (let i = 0; i < connections.length; i++) {
    const [first, second] = connections[i];
    if (!(first in graph)) {
      graph[first] = [];
    }
    if (!(second in graph)) {
      graph[second] = [];
    }

    graph[first].push(second);
    graph[second].push(first);
  }

  return graph;
}

module.exports = criticalConnections;
