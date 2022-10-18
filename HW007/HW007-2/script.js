let sort = (...numbers) =>
  numbers
    .reduce((total, current) => total.concat(current))
    .sort((a, b) => b - a);

console.log(sort([5, 6, 2], [3, 7, 1]));
console.log(sort([5, 6, 2], [3, 7, 1], [2, 4, 8]));
