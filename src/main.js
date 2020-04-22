import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import VueAgile from 'vue-agile';
import VueAwesomeSwiper from "vue-awesome-swiper";
import Vue2TouchEvents from "vue2-touch-events";
// import 'swiper/css/swiper.css'
Vue.config.productionTip = false;
Vue.use(VueAgile)
Vue.use(Vue2TouchEvents, {
  disableClick: false,
  touchClass: '',
  tapTolerance: 10,
  touchHoldTolerance: 400,
  swipeTolerance: 30,
  longTapTimeInterval: 400
})
new Vue({
  router,
  store,
  vuetify,
  VueAgile,
  VueAwesomeSwiper,
  render: h => h(App)
}).$mount("#app");
