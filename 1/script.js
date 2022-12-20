const submitBtn = document.getElementById("form__button-submit"),
  todoTitleInput = document.getElementById("form__input-title"),
  todoDateInput = document.getElementById("form__input-date"),
  todoDescriptionInput = document.getElementById("form__input-description");

submitBtn.addEventListener("click", addTodoFunction);

function addTodoFunction() {
  if (
    todoTitleInput.value &&
    todoDateInput.value &&
    todoDescriptionInput.value
  ) {
    alert(todoDateInput.value);
  } else {
    alert("Please fill all feilds");
  }
}

const todoApp = {
  getData: function () {
    return JSON.parse(localStorage.getItem("todoData")) ?? [];
  },
  setData: function (data) {
    const todoData = [...this.getData(), data];
    localStorage.setItem("todoData", JSON.stringify(todoData));
    render();
  },
  genId: function () {
    return Date.now().toString(36);
  },
  addTodo: function (todoTitle, todoDesc, todoDate, todoStatus) {
    const todo = {
      id: this.genId(),
      title: todoTitle,
      description: todoDesc,
      date: todoDate,
      status: todoStatus,
    };

    this.setData(todo);
  },
  removeTodo: function (id) {
    const todoData = this.getData();
    const newTodoData = todoData && todoData.filter((item) => item.id !== id);
    localStorage.setItem("todoData", JSON.stringify(newTodoData));
    render();
  },
  // editTodo : function(id , newText){
  //     const todoData = this.getData()
  //     const newTodoData = todoData.map(item =>{
  //         if(item.id === id){
  //             return {...item , text : newText}
  //         }else{
  //             return {...item}
  //         }
  //     })

  //     localStorage.setItem("todoData",JSON.stringify(newTodoData))
  //     render()
  // }
};

const render = () => {};
