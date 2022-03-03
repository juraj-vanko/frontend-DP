import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Axios from "axios"

Vue.prototype.$axios = Axios;

Vue.config.productionTip = false;

Axios.defaults.headers.get['Content-Type'] = 'application/json'
Axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
