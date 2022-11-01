const counter = counterMaker();
console.log(counter());
console.log(counter());
console.log(counter(1));
console.log(counter());
console.log(counter(3));
console.log(counter(7));
console.log(counter(-5));

function counterMaker() {
  let count = 0;
  function change(val) {
    count += val;
  }
  return function (stepcount) {
    change(stepcount ?? 0);
    return count;
  };
}
