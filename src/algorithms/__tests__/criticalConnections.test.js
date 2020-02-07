const criticalConnections = require("../criticalConnections");

test("test for 4 nodes with 1 critical edge", () => {
  const numberOfNodes = 4;
  const connections = [
    [0, 1],
    [0, 2],
    [1, 2],
    [1, 3]
  ];

  const result = criticalConnections(numberOfNodes, connections);
  const expected = [[1, 3]];

  expect(result.sort()).toEqual(expected.sort());
});

test("test for 9 nodes with 3 critical edges", () => {
  const numberOfNodes = 9;
  const connections = [
    [0, 1],
    [0, 2],
    [1, 2],
    [2, 3],
    [3, 4],
    [2, 5],
    [5, 6],
    [6, 7],
    [7, 8],
    [5, 8]
  ];

  const result = criticalConnections(numberOfNodes, connections);
  const expected = [
    [2, 3],
    [3, 4],
    [2, 5]
  ];

  expect(result.sort()).toEqual(expected.sort());
});
