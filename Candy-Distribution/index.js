const a1 = [9, 7, 6, 5, 4, 1];

function getCandyAmount(arr) {
  let l2r = [1];
  for (let i = 1; i < arr.length; i++) {
    let amount = 1;

    if (arr[i - 1] < arr[i]) {
      amount += l2r[i - 1];
    }
    l2r[i] = amount;
  }

  let r2l = new Array(arr.length).fill(1);
  for (let i = arr.length - 2; i >= 0; i--) {
    let amount = 1;

    if (arr[i + 1] < arr[i]) {
      amount += r2l[i + 1];
    }
    r2l[i] = amount;
  }

  let sum = 0;

  for (let i = 0; i < l2r.length; i++) {
    sum += Math.max(l2r[i], r2l[i]);
  }

  return sum;
}

// console.log(getCandyAmount(a1));
// console.log(getCandyAmount([1, 1, 1, 1, 8, 1, 1, 1]));
console.log(getCandyAmount([100, 100, 200, 205, 201, 10, 1]));
