function removeKNumbers(str, k) {
  const digits = str.split("").map((n) => parseInt(n));
  const stack = [];

  const push = (n) => {
    if (n == 0 && !stack.length) return;
    stack.push(n);
  };

  for (let i = 0; i < digits.length; i++) {
    const d = digits[i];

    if (!stack.length) {
      if (d != 0) {
        push(d);
      }
      continue;
    }

    while (stack.length && k) {
      const peek = stack[stack.length - 1];

      if (peek - d > 0) {
        stack.pop();
        k--;
      } else {
        break;
      }
    }

    push(d);
  }

  const result = stack.join("");

  if (!k) {
    return result;
  }
  return result.substring(0, k - 1);
}

console.log(removeKNumbers("24301620", 4));
console.log(removeKNumbers("123", 2));
// 2 3 0 | 3
