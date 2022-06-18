// 2 - rotten, 1 - fresh, 0 - empty
const m1 = [
  [2, 1, 1],
  [0, 0, 1],
  [1, 1, 0],
];

const isRotten = (n) => n == 2;
const isFresh = (n) => n == 1;

function elapse(matrix) {
  const queue = [];

  for (let j = 0; j < matrix.length; j++) {
    for (let i = 0; i < matrix[j].length; i++) {
      const element = matrix[i][j];

      if (isRotten(element)) {
        queue.push([i, j]);
      }
    }
  }

  const get = (i, j) => {
    return matrix[i] && matrix[i][j] ? matrix[i][j] : null;
  };

  function doRotten(i, j) {
    matrix[i][j] = 2;

    let l = get(i + 1, j);
    let r = get(i - 1, j);
    let t = get(i, j - 1);
    let b = get(i, j + 1);
    let tl = get(i - 1, j - 1);
    let tr = get(i + 1, j - 1);
    let bl = get(i - 1, j + 1);
    let br = get(i + 1, j + 1);

    if (isFresh(l)) queue.push([i + 1, j]);
    if (isFresh(r)) queue.push([i - 1, j]);
    if (isFresh(t)) queue.push([i, j - 1]);
    if (isFresh(b)) queue.push([i, j + 1]);
    if (isFresh(tl)) queue.push([i - 1, j - 1]);
    if (isFresh(tr)) queue.push([i + 1, j - 1]);
    if (isFresh(bl)) queue.push([i - 1, j + 1]);
  }

  while (queue.length) {
    const [i, j] = queue.shift();
    doRotten(i, j);
  }

  return matrix;
}

console.log("Result: ");
printMatrix(elapse(m1));

function printMatrix(matrix) {
  for (let j = 0; j < matrix.length; j++) {
    console.log(matrix[j]);
  }
}
