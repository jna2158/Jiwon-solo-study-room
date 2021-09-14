<template>
  <div>
    <p>{{ name }}</p>
    <button @click="updateName">click</button>
  </div>
</template>

<script>
export default {
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
