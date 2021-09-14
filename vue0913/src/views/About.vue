<template>
  <div class="about">
    <h1>This is an about page</h1>
    <Jiwon>
      <template v-slot:header>
        <!-- #으로 대체 가능 -->
        <p>header입니다</p>
      </template>
    </Jiwon>
  </div>
</template>

<script>
import Jiwon from "../components/Jiwon.vue";

export default {
  components: {
    Jiwon,
  },
};
</script>

<style scoped></style>
