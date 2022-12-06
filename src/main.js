import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css' //Vuesax styles
// import VueFacebookPage from 'vue-facebook-page'
import VueCarousel from 'vue-carousel';

Vue.use(VueCarousel);
// Vue.use(VueFacebookPage)
Vue.use(Vuesax, {
  // options here
})



new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
