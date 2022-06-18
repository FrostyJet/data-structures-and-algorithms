function getAllSubsets(arr) {
  const subsets = [];

  const n = arr.length;
  for (let mask = 0; mask < 1 << n; mask++) {
    const currentSet = [];

    for (let i = 0; i < n; i++) {
      if (mask & (1 << i)) {
        currentSet.push(arr[i]);
      }
    }

    subsets.push(currentSet);
  }

  return subsets;
}

console.log(getAllSubsets(["A", "B", "C"]));
