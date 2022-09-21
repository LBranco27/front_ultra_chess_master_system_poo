import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import router from "./router/index.ts"

Vue.use(VueRouter);

/* eslint-disable no-new */
window.vm = new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
