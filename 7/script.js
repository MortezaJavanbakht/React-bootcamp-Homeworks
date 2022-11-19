const hideBtn = document.getElementById("hider");
const hideFunction = () => {
  document.getElementById("text").remove();
  setTimeout(() => hideBtn.remove(), 2000);
};
hideBtn.addEventListener("click", hideFunction);
