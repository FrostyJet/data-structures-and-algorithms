function merge(left, right) {
  let result = [];
  while (left.length && right.length) {
    if (left[0] > right[0]) {
      result.push(right.shift());
    } else {
      result.push(left.shift());
    }
  }

  if (left.length) result.push(...left);
  else if (right.length) result.push(...right);

  return result;
}

function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  let l = arr.length;
  let m = Math.floor(l / 2);

  console.log("middle = ", m);

  return merge(mergeSort(arr.slice(0, m)), mergeSort(arr.slice(m, arr.length)));
}

function randomNum(n) {
  return Math.floor(Math.random() * n);
}

const seed = [];
for (let i = 0; i < 100_000_000; i++) {
  seed.push(randomNum(1000));
}

// console.log(mergeSort([1, 9, 5, 6, 2]));
console.log(mergeSort(seed).join());
