const targetLabel = document.getElementById("targetList");
targetLabel.style.cursor = "pointer";
targetLabel.addEventListener("click", () => {
  const liElements = document.querySelectorAll("#targetList>li");
  liElements.forEach((element) => element.classList.toggle("hidden"));
});
