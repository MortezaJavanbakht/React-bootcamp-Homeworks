let map = new Map();

map.set("name", "John");

// let keys = map.keys();
// Because map.keys() return an iterator object. This output is not an array

let keys = [...map.keys()]; //convert iterable object to array
// let keys = Array.form(...map.keys()); //convert iterable object to array - Alternative Solution

keys.push("more");
console.log(keys);
