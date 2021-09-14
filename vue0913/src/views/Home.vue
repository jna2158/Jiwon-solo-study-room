<template>
  <div>
    <h1>This is Home page</h1>
    <form action="">
      <br />
      <InputField :name="name" @update-name="updateName" />
      <button>submit</button>
    </form>
    {{ name }}
  </div>
</template>

<script>
import InputField from "../components/InputField.vue";
export default {
  components: {
    InputField,
  },
  data() {
    return {
      name: "",
    };
  },
  methods: {
    updateName(name) {
      this.name = name;
    },
  },
};
</script>

<style scoped>
h1 {
  color: red;
}
</style>
