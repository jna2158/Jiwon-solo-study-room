<template>
  <div>
    <Todo
      v-for="todo in todos"
      :key="todo.id"
      :todo="todo"
      @toggle-checked="toggleCheckbox"
      @click-delete="deleteTodo"
    />
  </div>
</template>

<script>
import Todo from "./Todo.vue";

export default {
  components: {
    Todo,
  },
  props: {
    todos: {
      type: Array,
      required: true,
    },
  },
  methods: {
    toggleCheckbox(value) {
      this.$emit("toggle-checkbox", value);
    },
    deleteTodo(todoId) {
      this.$emit("toggle-delete", todoId);
    },
  },
};
</script>

<style></style>
