import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import vuetify from './plugins/vuetify';

import '@sweetalert2/theme-dark/dark.css';
import './scss/app.sass';

Vue.config.productionTip = false;

new Vue({
  router,
  // @ts-ignore
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
