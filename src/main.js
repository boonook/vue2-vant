import Vue from 'vue'
import App from './App.vue';
import Vant from 'vant';
import store from './store/index'
import 'vant/lib/index.css';
import router from './router'
import '@/boot'
Vue.use(Vant);
Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
