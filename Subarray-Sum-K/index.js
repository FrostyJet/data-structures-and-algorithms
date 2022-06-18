function subarraySumK(k, arr) {
  const map = {};

  let subArrays = [];
  let sum = 0;
  // O(n)
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    sum += element;

    map[sum] = i;

    if (sum == k) {
      subArrays.push(arr.slice(0, i + 1));
    }

    let missing = sum - k;
    // O(1)
    if (typeof map[missing] !== "undefined") {
      subArrays.push(arr.slice(map[missing] + 1, i + 1));
    }
  }

  // O(1) + O(n) = O(n)
  return subArrays;
}

console.log(subarraySumK(7, [1, 2, 3, 4, 5, 6, 7]));
