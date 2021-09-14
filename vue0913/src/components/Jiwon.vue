<template>
  <div>
    <p>header</p>
    <slot name="header"></slot>
    <p>body</p>
    <p>footer</p>
  </div>
</template>

<script>
export default {
  props: ["title"],
  data() {
    return {
      name: "jiwon",
    };
  },
  methods: {
    updateName() {
      this.name = "jiwon updated";
    },
  },
};
</script>

<style scoped></style>
