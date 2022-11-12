let john = {name: "John", age: 25};
let pete = {name: "Pete", age: 30};
let mary = {name: "Mary", age: 29};

let arr = [john, pete, mary];

const getAverageAge = inputArray => inputArray.reduce((total, person) => total + person.age, 0) / inputArray.length;

console.log(getAverageAge(arr)); // 28
