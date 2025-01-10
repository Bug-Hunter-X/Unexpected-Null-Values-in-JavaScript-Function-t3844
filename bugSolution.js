function foo(a, b) {
  // More robust null handling: throw error or use default value
  a = a !== null ? a : 0; // Use 0 as default if a is null
  b = b !== null ? b : 0; // Use 0 as default if b is null
  return a + b;
}

console.log(foo(null, 5)); // Output: 5
console.log(foo(5, null)); // Output: 5
console.log(foo(5, 5)); // Output: 10
console.log(foo(null, null)); // Output: 0