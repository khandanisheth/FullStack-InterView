function fibonacci(n) {
  let a = 0, b = 1;
  console.log(a);
  console.log(b);

  for (let i = 2; i < n; i++) {
    let next = a + b;
    console.log(next);
    [a, b] = [b, next]; // correct destructuring
  }
}

fibonacci(8);
// Output: 0 1 1 2 3 5 8 13
