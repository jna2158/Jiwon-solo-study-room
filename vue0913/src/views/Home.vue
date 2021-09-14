<template>
  <div>
    <h1>This is Home page</h1>
    <jiwon></jiwon>
  </div>
</template>

<script>
import Jiwon from "../components/Jiwon.vue";
export default {
  components: {
    jiwon: Jiwon,
  },
  data() {
    return {
      name: "jiwon",
    };
  },
};
</script>

<style scoped>
h1 {
  color: red;
}
</style>
