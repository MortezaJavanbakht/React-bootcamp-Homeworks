function sortByAge(persons) {
  return persons.sort((a, b) => a.age - b.age);
}

let personsArray = [
  { name: "ali", age: 15 },
  { name: "hasan", age: 20 },
  { name: "taqi", age: 10 },
  { name: "qoli", age: 18 },
];

for (let person of sortByAge(personsArray)) {
  console.log(person);
}
