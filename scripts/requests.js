const url = "https://60b77f8f17d1dc0017b8a2c4.mockapi.io/todos";

function getTodos() {
  return fetch(url)
    .then((res) => res.json())
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return [];
    });
}

function addTodo(data) {
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((result) => {
      return true;
    })
    .catch((err) => {
      return false;
    });
}

export { addTodo, getTodos };
