<template>
  <div id="app" class="container">
    <h1 class="text-center">Todo App</h1>
    <CompletedTodo :todos="todos" />
    <AddTodo @add-todo="addTodo" />
    <hr />
    <TodoList
      :todos="todos"
      @toggle-checked="toggleCheckbox"
      @click-delete="deleteTodo"
    />
  </div>
</template>

<script>
import TodoList from "./components/TodoList.vue";
import AddTodo from "./components/AddTodo.vue";
import CompletedTodo from "./components/CompletedTodo.vue";
export default {
  components: {
    TodoList,
    AddTodo,
    CompletedTodo,
  },
  data() {
    return {
      todoText: "",
      todos: [
        { id: 1, text: "buy a car", checked: false },
        { id: 2, text: "play game", checked: false },
      ],
    };
  },
  methods: {
    addTodo(event) {
      this.todos.push({
        id: this.todos.length + 1,
        text: event.target.value,
        checked: false,
      });
      this.todoText = "";
    },
    toggleCheckbox({ id, checked }) {
      console.log("a");
      const index = this.todos.findIndex((todo) => {
        return todo.id === id;
      });
      this.todos[index].checked = checked;
    },
    deleteTodo(id) {
      const index = this.todos.findIndex((todo) => {
        return todo.id === id;
      });
      this.todos.splice(index, 1);
    },
  },
};
</script>

<style></style>
