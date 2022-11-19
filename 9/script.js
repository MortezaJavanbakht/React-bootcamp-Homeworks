const containerElement = document.getElementById("container");
containerElement.addEventListener("click", (e) => {
  if (e.target.className !== "remove-button") return;
  e.target.closest(".message").remove();
});
