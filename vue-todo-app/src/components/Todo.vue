<template>
  <div class="mb-2">
    <input type="checkbox" :checked="todo.checked" @change="toggleCheckbox" />
    <span
      class="ml-3"
      :class="todo.checked ? 'text-muted' : ''"
      :style="todo.checked ? 'text-decoration:line-through' : ''"
      >{{ todo.text }}</span
    >
    <button class="btn btn-danger btn-sm" @click="clickDelete">Delete</button>
  </div>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true,
    },
  },
  methods: {
    toggleCheckbox(event) {
      this.$emit("toggle-checked", {
        id: this.todo.id,
        checked: event.target.checked,
      });
    },
    clickDelete() {
      this.$emit("click-delete", this.todo.id);
    },
  },
};
</script>

<style></style>
