function makeNumber(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      const n1 = arr[i].toString() + arr[j].toString();
      const n2 = arr[j].toString() + arr[i].toString();

      if (parseInt(n2) > parseInt(n1)) {
        let tmp = arr[j];
        arr[j] = arr[i];
        arr[i] = tmp;
      }
    }
  }

  return arr.join("");
}

console.log(makeNumber([3, 30, 34, 9]));
