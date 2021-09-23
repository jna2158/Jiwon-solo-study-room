<template>
<div>
  <div>
    <input type="checkbox" v-model="todo.done">
      <span :class="{done: todo.done}">
        {{todo.text}}
      </span>
  </div>
</div>
</template>

<script>
export default {
  props:['todo']
}
</script>

<style>

</style>