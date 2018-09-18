function fib() {
  const fibs = [0, 1];
  for (let i = 2; i < 100; i++) {
    fibs[i] = fibs[i - 1] + fibs[i - 2];
  }
  return fibs;
}
console.log(fib());

function numsToStrings(nums) {
  return _.map(nums, function (num) { return (`${num}`); });
}
console.log(numsToStrings(fib()));

function numEvenNums(nums) {
  const evens = _.filter(nums, function (num) { return num % 2 === 0; });
  return evens.length;
}

console.log(numEvenNums(fib()));
