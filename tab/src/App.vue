<template>
  <div id="app">
    <navbar/>
    <informationpanel/>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Informationpanel from "./components/InformationPanel.vue";

export default {
  name: 'App',
  components: {
    Navbar,
    Informationpanel
  }
}
</script>


