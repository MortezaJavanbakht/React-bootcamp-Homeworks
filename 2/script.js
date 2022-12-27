const mainContainer = document.getElementById("mainContainer"),
  sideRight = document.querySelector(".right-side"),
  sideLeft = document.querySelector(".left-side"),
  allToRight = document.querySelector(".all-to-right"),
  checkedToRight = document.querySelector(".checked-to-right"),
  checkedToLeft = document.querySelector(".checked-to-left"),
  allToLeft = document.querySelector(".all-to-left"),
  allButtons = document.querySelectorAll("#buttonContainer div");

mainContainer.addEventListener("click", render);
allToRight.addEventListener("click", allToRightFunction);
allToLeft.addEventListener("click", allToLeftFunction);
checkedToRight.addEventListener("click", checkedToRightFunction);
checkedToLeft.addEventListener("click", checkedToLeftFunction);

function allToRightFunction() {
  const allInLeft = document.querySelectorAll(".left-side .item");
  allInLeft.forEach((item) => {
    sideRight.appendChild(item);
  });
}

function allToLeftFunction() {
  const allInRight = document.querySelectorAll(".right-side .item");
  allInRight.forEach((item) => {
    sideLeft.appendChild(item);
  });
}

function checkedToRightFunction() {
  const checkedInLeft = document.querySelectorAll(".left-side .item");
  checkedInLeft.forEach((item) => {
    if (item.children[0].checked) {
      sideRight.appendChild(item);
      item.children[0].checked = false;
    }
  });
}

function checkedToLeftFunction() {
  const checkedInRight = document.querySelectorAll(".right-side .item");
  checkedInRight.forEach((item) => {
    if (item.children[0].checked) {
      sideLeft.appendChild(item);
      item.children[0].checked = false;
    }
  });
}

function render() {
  if (document.querySelectorAll(".left-side .item").length == 0) {
    checkedToRight.classList.add("disabled");
    allToRight.classList.add("disabled");
  } else {
    checkedToRight.classList.remove("disabled");
    allToRight.classList.remove("disabled");
  }
  if (document.querySelectorAll(".right-side .item").length == 0) {
    checkedToLeft.classList.add("disabled");
    allToLeft.classList.add("disabled");
  } else {
    checkedToLeft.classList.remove("disabled");
    allToLeft.classList.remove("disabled");
  }
  if (document.querySelectorAll(".left-side .item input:checked").length == 0) {
    checkedToRight.classList.add("disabled");
  } else {
    checkedToRight.classList.remove("disabled");
  }
  if (
    document.querySelectorAll(".right-side .item input:checked").length == 0
  ) {
    checkedToLeft.classList.add("disabled");
  } else {
    checkedToLeft.classList.remove("disabled");
  }
}

render();
