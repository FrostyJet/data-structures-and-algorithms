const m1 = [
  [2, 1, 3, 4],
  [3, 0, 2, 1],
  [1, 1, 0, 2],
  [2, 5, 3, 1],
];

function getMinPathSum(matrix) {
  const dp = [];

  const getCost = (row, col) => {
    if (typeof dp[row] != "undefined") {
      if (typeof dp[row][col] != "undefined") {
        return dp[row][col];
      }
    }

    return undefined;
  };

  for (let i = 0; i < matrix.length; i++) {
    dp[i] = [];

    for (let j = 0; j < matrix[i].length; j++) {
      const top = getCost(i - 1, j);
      const left = getCost(i, j - 1);
      let c = matrix[i][j];

      if (top != undefined && left != undefined) {
        c += Math.min(top, left);
      } else if (top != undefined) {
        c += top;
      } else if (left != undefined) {
        c += left;
      }

      dp[i][j] = c;
    }
  }

  print(dp);

  let lastRow = dp[dp.length - 1];
  return dp[dp.length - 1][lastRow.length - 1];
}

function print(matrix) {
  for (let row of matrix) {
    console.log(row);
  }
}

console.log(getMinPathSum(m1));
