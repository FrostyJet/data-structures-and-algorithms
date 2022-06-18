function doesPathExist(arr) {
  let farthest = arr[0];

  const path = [];
  for (let i = 1; i < arr.length; i++) {
    if (farthest < i) {
      return false;
    }

    if (i + arr[i] > farthest) {
      farthest = i + arr[i];
    }
  }

  return true;
}

console.assert(doesPathExist([1, 1, 2, 3, 0, 0, 2]) == true); // true
console.assert(doesPathExist([1, 1, 2, 3, 0, 0, 0, 2]) == false); // false
console.assert(doesPathExist([0, 1, 2]) == false); // false

console.log("All assertions have passed!");
