"use strict";
const todoForm = document.querySelector(".todoForm");
const todoInput = document.querySelector("input");
const todos = document.querySelector(".todo");
// export interface BaseSyntheticEvent<E = object, C = any, T = any> {
//     nativeEvent: E;
//     currentTarget: C;
//     target: T;
//     bubbles: boolean;
//     cancelable: boolean;
//     defaultPrevented: boolean;
//     eventPhase: number;
//     isTrusted: boolean;
//     preventDefault(): void;
//     isDefaultPrevented(): boolean;
//     stopPropagation(): void;
//     isPropagationStopped(): boolean;
//     persist(): void;
//     timeStamp: number;
//     type: string;
// }
if (todoForm) {
    todoForm.addEventListener('submit', createTodo);
}
function createTodo(event) {
    event.preventDefault();
    if (todoInput.value !== "") {
        const todo = todoInput.value;
        todoPaint(todo);
    }
}
function todoPaint(todo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerHTML = todo;
    li.appendChild(span);
    todos.appendChild(li);
    todoInput.value = "";
    // todoInput.innerHTML = "";
    // setting value is normally used for input/form elements.
    // innerHTML is normally used for div, span, td and similar elements.
}
//# sourceMappingURL=index.js.map