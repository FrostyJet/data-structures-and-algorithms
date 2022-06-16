const m1 = [
  [1, 1, 0, 1],
  [1, 1, 0, 1],
  [0, 0, 1, 0],
  [0, 0, 1, 1],
];

const isLand = (n) => n == 1;
const isWater = (n) => n == 0;
const isIsland = (n) => n == 2;

function getIslandsCount(matrix) {
  let countOfIslands = 0;
  const queue = [];

  const addToQueue = (i, j) => {
    if (!isLand(matrix[i][j])) return;

    matrix[i][j] = 2;
    queue.push([i, j]);
  };

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (isLand(matrix[i][j])) {
        countOfIslands++;
        addToQueue(i, j);
        bfs();
      }
    }
  }

  function bfs() {
    while (queue.length) {
      const [i, j] = queue.pop();

      if (j > 0) {
        // left
        addToQueue(i, j - 1);
      }

      if (i > 0) {
        // top
        addToQueue(i - 1, j);
      }

      if (j < matrix[i].length - 1) {
        // right
        addToQueue(i, j + 1);
      }

      if (i < matrix.length - 1) {
        // bottom
        addToQueue(i + 1, j);
      }
    }
  }

  return countOfIslands;
}

console.log(getIslandsCount(m1));
