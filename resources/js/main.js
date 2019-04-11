import Vue from 'vue';
import App from './App.vue';
import router from './router';
import mixins from './mixins';
import store from './store';
import { axios } from './plugins';

Vue.prototype.$axios = axios;

mixins.forEach((mixin) => {
  Vue.mixin(mixin);
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');

