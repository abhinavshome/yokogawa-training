type Todo = {
  id?: number;
  label: string;
  done: boolean;
};

let todos: Todo[] = [
  { id: 1, label: "Bring Milk", done: false },
  { id: 2, label: "Clean House", done: true },
];

function display() {
  let html = "";

  //   for (let i = 0; i < todos.length; i++) {
  //     html += todos[i].label + " " + todos[i].done + "<br/>";
  //   }

  html = todos
    .map(
      (todo) =>
        "<div>" +
        todo.label +
        " " +
        (todo.done ? "DONE" : "NOT DONE") +
        "</div>"
    )
    .join("");

  document.getElementById("todo-list").innerHTML = html;
}

display();
