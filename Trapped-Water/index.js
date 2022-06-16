const a1 = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];

// O(2 * n) = O(n)
function calcTrapWater(arr) {
  let sum = 0;

  const maxLeft = [];
  const maxRight = [];

  let maxLeftSofar = 0;
  let maxRightSofar = 0;

  // O(n)
  for (let i = 0; i < arr.length; i++) {
    maxLeft[i] = maxLeftSofar;
    if (arr[i] > maxLeftSofar) {
      maxLeftSofar = arr[i];
    }

    let rightIndex = arr.length - 1 - i;
    maxRight[rightIndex] = maxRightSofar;
    if (arr[rightIndex] > maxRightSofar) {
      maxRightSofar = arr[rightIndex];
    }
  }

  // O(n)
  for (let i = 0; i < arr.length; i++) {
    const wL = Math.min(maxLeft[i], maxRight[i]);
    if (wL > arr[i]) {
      sum += wL - arr[i];
    }
  }

  return sum;
}

console.log(calcTrapWater(a1));
