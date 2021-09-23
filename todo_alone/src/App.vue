<template>
  <div id="app">
    <TodoList v-for="todo in todos" :key="todo.id" :todo="todo"/>
  </div>
</template>

<script>
import TodoList from "./components/todoList.vue"
export default {
  components:{
    TodoList
  },
  data() {
    return {
      todos: [
        {
          id: 1,
          text: "아침먹기",
          done: true,
        },
        {
          id: 2,
          text: "점심먹기",
          done: false,
        },
        {
          id: 3,
          text: "저녁먹기",
          done: false,
        }
      ],
    }
  } 
}
</script>

<style>
  span.done {
    text-decoration: line-through;
  }
</style>
