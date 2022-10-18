let salaries = { John: 100, Pete: 300, Mary: 250 };

let findTopSalary = (inputArray) => {
  return Object.entries(inputArray).reduce((maxEntry, entry) => {
    let maxPerson, maxSalary, person, salary;
    [maxPerson, maxSalary] = maxEntry;
    [person, salary] = entry;
    if (salary > maxSalary) return [person, salary];
    else return [maxPerson, maxSalary];
  });
};

console.log(findTopSalary(salaries));
