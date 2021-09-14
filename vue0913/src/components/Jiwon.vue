<template>
  <div>
    <p>{{ title }}</p>
    <button @click="updateName">click</button>
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
