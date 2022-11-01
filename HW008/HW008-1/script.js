let user = {};
const nameSetter = setterGenerator("name");
nameSetter("Jack");
console.log(user);

function setterGenerator(inputKey) {
  return function (inputValue) {
    function test() {
      this[inputKey] = inputValue;
    }
    return test.call(user);
  };
}
