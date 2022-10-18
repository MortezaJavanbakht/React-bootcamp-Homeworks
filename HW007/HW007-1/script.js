let salaries = { John: 100, Pete: 300, Mary: 250 };

let findTopSalary = (inputArray) => {
  return Object.entries(inputArray).reduce(
    ([maxPerson, maxSalary], [person, salary]) => {
      if (salary > maxSalary) return [person, salary];
      else return [maxPerson, maxSalary];
    }
  );
};

console.log(findTopSalary(salaries));
