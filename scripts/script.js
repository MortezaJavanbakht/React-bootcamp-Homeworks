import { addTodo } from "./requests.js";

const formSubmitBtn = document.getElementById("form__submitBtn"),
  todoTitleInput = document.getElementById("grid-title"),
  todoDescriptionInput = document.getElementById("grid-description"),
  todoDateInput = document.getElementById("grid-date"),
  todoTitleError = document.getElementById("grid-title__error"),
  todoDateError = document.getElementById("grid-date__error"),
  toastSuccess = document.getElementById("toast__success"),
  toastCloseBtn = document.getElementById("toast__closeBtn");

formSubmitBtn.addEventListener("click", formSubmitFunc);
todoTitleInput.addEventListener("input", RemoveTitleError);
todoDateInput.addEventListener("input", RemoveDateError);
toastCloseBtn.addEventListener("click", closeToast);

function closeToast() {
  toastSuccess.classList.add("hidden");
}

function formSubmitFunc(event) {
  event.preventDefault();
  if (!todoTitleInput.value || !todoDateInput.value) {
    if (!todoTitleInput.value) {
      todoTitleInput.classList.add("border-red-500");
      todoTitleError.classList.remove("hidden");
    }
    if (!todoDateInput.value) {
      todoDateInput.classList.add("border-red-500");
      todoDateError.classList.remove("hidden");
    }
    return;
  }
  generateTodo();
}

function RemoveTitleError() {
  if (todoTitleInput.value) {
    todoTitleInput.classList.remove("border-red-500");
    todoTitleError.classList.add("hidden");
  } else {
    todoTitleInput.classList.add("border-red-500");
    todoTitleError.classList.remove("hidden");
  }
}

function RemoveDateError() {
  if (todoDateInput.value) {
    todoDateInput.classList.remove("border-red-500");
    todoDateError.classList.add("hidden");
  } else {
    todoDateInput.classList.add("border-red-500");
    todoDateError.classList.remove("hidden");
  }
}

function generateTodo() {
  const createTime = Date.now();
  const toSubmitData = {
    title: todoTitleInput.value,
    dueDate: new Date(todoDateInput.value).getTime(),
    description: todoDescriptionInput.value,
    // id: Date.now().toString(36),
    createdAt: createTime,
    updatedAt: createTime,
    checked: false,
  };
  addTodo(toSubmitData).then((res) => {
    if (res) {
      todoTitleInput.value = "";
      todoDateInput.value = "";
      todoDescriptionInput.value = "";
      toastSuccess.classList.remove("hidden");
    } else alert("Todo insertion failed! Please try again!");
  });
}

// function showTodosPage() {}
