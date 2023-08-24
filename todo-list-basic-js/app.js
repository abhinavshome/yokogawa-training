"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var todos = [
    { id: 1, label: "Bring Milk", done: false },
    { id: 2, label: "Clean House", done: true },
];


function display() {
    var html = "";
    //   for (let i = 0; i < todos.length; i++) {
    //     html += todos[i].label + " " + todos[i].done + "<br/>";
    //   }
    html = todos
        .map(function (todo) {
            return "<div>" +
                todo.label +
                " " +
                (todo.done ? "DONE" : "NOT DONE") +
                "</div>";
        })
        .join("");
    document.getElementById("todo-list").innerHTML = html;
}
display();
