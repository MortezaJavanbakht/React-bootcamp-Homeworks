const callback = function (elem) {
  elem.style.backgroundColor = "red";
};
elemCreator("div", callback);

function elemCreator(elementType, callbackFunction) {
  const container = document.getElementById("main-container");
  const targetElement = document.createElement(elementType);
  container.append(targetElement);
  callbackFunction(targetElement);
}
