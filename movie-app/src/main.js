import Vue from "vue";
import vuetify from "./plugins/vuetify";
import "./plugins/vue-masonry";
import store from "./store";
import App from "./components/App";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
Vue.use(BootstrapVue);

Vue.config.productionTip = false;

new Vue({
  el: "#app",
  render: (h) => h(App),
});
