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

}

function buildGraph(connections) {

}

module.exports = criticalConnections;